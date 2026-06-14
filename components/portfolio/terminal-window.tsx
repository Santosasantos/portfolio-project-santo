import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
}

/** Editor-window chrome — traffic-light dots and a mono file path title bar. */
export function TerminalWindow({ title, children, className }: TerminalWindowProps) {
  return (
    <div className={cn("border border-line bg-surface", className)}>
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 truncate font-mono text-[11px] tracking-wider text-fg-faint">
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}
