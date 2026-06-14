"use client"

import type { ReactNode } from "react"
import { useMagnetic } from "@/hooks/use-magnetic"
import { cn } from "@/lib/utils"

/**
 * Wraps a single interactive child so it drifts toward the pointer on hover.
 * Use sparingly — reserved for primary calls to action.
 */
export function Magnetic({
  children,
  className,
  strength = 0.4,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const { ref, onPointerMove, onPointerLeave } = useMagnetic<HTMLSpanElement>(strength)
  return (
    <span
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn("inline-flex transition-transform duration-300 ease-out will-change-transform", className)}
    >
      {children}
    </span>
  )
}
