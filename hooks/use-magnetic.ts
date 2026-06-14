"use client"

import { useRef, type PointerEvent } from "react"

/**
 * Magnetic hover: the element drifts toward the pointer while hovered and
 * springs back on leave. Disabled under prefers-reduced-motion and on coarse
 * (touch) pointers, where the effect is meaningless.
 *
 * @param strength fraction of the cursor offset to follow (0–1).
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(strength = 0.4) {
  const ref = useRef<T>(null)

  const onPointerMove = (e: PointerEvent<T>) => {
    const el = ref.current
    if (!el) return
    if (
      e.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const onPointerLeave = () => {
    const el = ref.current
    if (el) el.style.transform = ""
  }

  return { ref, onPointerMove, onPointerLeave }
}
