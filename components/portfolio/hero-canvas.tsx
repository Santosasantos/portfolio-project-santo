"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * A cursor-reactive particle network rendered to <canvas>, themed in phosphor
 * lime. Nodes drift, link to nearby neighbours, and bend away from the pointer —
 * a quiet "live system" backdrop for the hero. Pauses when scrolled out of view
 * and renders nothing under prefers-reduced-motion.
 */
export function HeroCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Pull the live accent colour so the canvas stays in sync with the theme.
    const accent =
      getComputedStyle(canvas).getPropertyValue("--accent").trim() || "oklch(0.88 0.2 132)"

    const LINK_DIST = 130
    const MOUSE_DIST = 170
    let width = 0
    let height = 0
    let dpr = 1
    let nodes: Node[] = []
    const mouse = { x: -9999, y: -9999, active: false }
    let raf = 0
    let running = true

    const seed = () => {
      // Density scales with area but is capped so large screens stay smooth.
      const count = Math.min(96, Math.round((width * height) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
      }))
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        // Pointer repulsion — closer nodes get nudged harder.
        if (mouse.active) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_DIST && dist > 0) {
            const force = (1 - dist / MOUSE_DIST) * 0.6
            n.vx += (dx / dist) * force
            n.vy += (dy / dist) * force
          }
        }

        n.x += n.vx
        n.y += n.vy
        // Gentle damping keeps pointer pushes from accumulating into chaos.
        n.vx *= 0.98
        n.vy *= 0.98

        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
        n.x = Math.max(0, Math.min(width, n.x))
        n.y = Math.max(0, Math.min(height, n.y))
      }

      // Links between neighbouring nodes.
      ctx.strokeStyle = accent
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < LINK_DIST) {
            ctx.globalAlpha = (1 - dist / LINK_DIST) * 0.16
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Threads from the pointer to nearby nodes — the interactive highlight.
      if (mouse.active) {
        for (const n of nodes) {
          const dist = Math.hypot(n.x - mouse.x, n.y - mouse.y)
          if (dist < MOUSE_DIST) {
            ctx.globalAlpha = (1 - dist / MOUSE_DIST) * 0.45
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(n.x, n.y)
            ctx.stroke()
          }
        }
      }

      // Nodes — brighter the closer they sit to the pointer.
      ctx.fillStyle = accent
      for (const n of nodes) {
        const dist = mouse.active ? Math.hypot(n.x - mouse.x, n.y - mouse.y) : Infinity
        const near = dist < MOUSE_DIST ? 1 - dist / MOUSE_DIST : 0
        ctx.globalAlpha = 0.35 + near * 0.55
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.4 + near * 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
      mouse.x = -9999
      mouse.y = -9999
    }

    // Only animate while the hero is on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting
        if (visible && !running) {
          running = true
          raf = requestAnimationFrame(draw)
        } else if (!visible && running) {
          running = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 },
    )

    resize()
    io.observe(canvas)
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerleave", onLeave)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className={className} />
}
