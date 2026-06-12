"use client"

import { useState } from "react"
import { Menu, X, ArrowDownToLine } from "lucide-react"

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Nav({ resumeUrl }: { resumeUrl: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-rule bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#about" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">Santo</span>
          <span className="hidden font-mono text-[11px] uppercase tracking-widest text-ink-faint sm:inline">
            Java Backend Engineer
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-widest text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            download
            className="flex items-center gap-2 border border-ink px-4 py-2 font-mono text-[12px] uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <ArrowDownToLine size={14} />
            CV
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-rule bg-paper md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule/60 py-4 font-display text-2xl text-ink transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="mt-5 flex w-fit items-center gap-2 border border-ink px-5 py-3 font-mono text-[12px] uppercase tracking-widest text-ink"
            >
              <ArrowDownToLine size={14} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
