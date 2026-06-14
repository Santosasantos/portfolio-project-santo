"use client"

import { useEffect, useRef, useState } from "react"

/**
 * A single skill row: label, animated count-up percentage, and a meter that
 * fills to `level` when scrolled into view. Renders the final state immediately
 * under prefers-reduced-motion or without JavaScript.
 */
export function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let raf = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = () => {
          setShown(true)
          if (reduce) {
            setDisplay(level)
            return
          }
          const t0 = performance.now()
          const duration = 1100
          const tick = (now: number) => {
            const t = Math.min((now - t0) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(Math.round(level * eased))
            if (t < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
        }
        const timer = window.setTimeout(start, reduce ? 0 : delay)
        return () => window.clearTimeout(timer)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [level, delay])

  return (
    <div ref={ref} className="group/skill">
      <div className="flex items-baseline justify-between gap-2 font-mono text-[12px]">
        <span className="min-w-0 truncate text-fg-soft transition-colors group-hover/skill:text-fg">{name}</span>
        <span className="shrink-0 tabular-nums text-fg-faint transition-colors group-hover/skill:text-accent">
          {display}
          <span className="text-fg-faint">%</span>
        </span>
      </div>
      <div className="mt-1.5 h-1 w-full overflow-hidden bg-line/70">
        <div
          className="h-full rounded-r-sm bg-gradient-to-r from-accent-dim to-accent shadow-[0_0_10px_-1px_var(--accent-dim)] transition-[width] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ width: shown ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}
