"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Animates the numeric part of a metric string (e.g. "99.8%", "10K+") from
 * zero when scrolled into view. Renders the final value on the server so the
 * page is correct without JavaScript and under reduced motion.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    const match = value.match(/^([^0-9]*)([\d.]+)(.*)$/)
    if (!el || !match) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const [, prefix, num, suffix] = match
    const target = Number.parseFloat(num)
    const decimals = num.includes(".") ? num.split(".")[1].length : 0

    let raf = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`)
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  )
}
