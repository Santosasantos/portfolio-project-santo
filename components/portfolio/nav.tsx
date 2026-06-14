"use client"

import { useEffect, useState } from "react"
import { Menu, X, ArrowDownToLine, Search } from "lucide-react"

const NAV_ITEMS = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
]

export function Nav({ resumeUrl }: { resumeUrl: string }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Tighten the floating bar once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5">
      <div className="mx-auto max-w-6xl">
        <nav
          className={`flex h-14 items-center justify-between gap-4 rounded-full border border-line bg-background/70 px-3 pl-5 backdrop-blur-xl transition-shadow duration-300 ${
            scrolled ? "shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]" : "shadow-[0_4px_24px_-16px_rgba(0,0,0,0.5)]"
          }`}
        >
          <a href="#about" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="font-mono text-base font-semibold leading-none tracking-tight text-fg">
              <span className="text-accent">~/</span>santo
            </span>
            <span className="hidden whitespace-nowrap border-l border-line pl-2.5 font-mono text-[10px] uppercase leading-none tracking-widest text-fg-faint xl:inline">
              Java Full Stack Engineer
            </span>
          </a>

          <div className="hidden items-center gap-5 lg:flex">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[12px] tracking-widest text-fg-soft transition-colors hover:text-accent"
              >
                <span className="mr-1 text-[10px] text-accent/70">0{i + 1}.</span>
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
              aria-label="Search — open command palette"
              className="flex items-center gap-1.5 rounded-full border border-line px-3 py-2 font-mono text-[11px] tracking-widest text-fg-soft transition-colors hover:border-accent hover:text-accent"
            >
              <Search size={14} />
              <span className="hidden lg:inline">
                <span className="text-fg-faint">⌘</span>K
              </span>
            </button>
            <a
              href={resumeUrl}
              download
              className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 font-mono text-[12px] uppercase tracking-widest text-background transition-shadow hover:shadow-[0_0_24px_-4px_var(--accent-dim)] lg:flex"
            >
              <ArrowDownToLine size={14} />
              CV
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="rounded-full border border-line p-2 text-fg-soft transition-colors hover:border-accent hover:text-accent lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Floating mobile menu */}
        {open && (
          <div className="animate-chat-pop mt-2 overflow-hidden rounded-2xl border border-line bg-background/90 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col p-3">
              {NAV_ITEMS.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 rounded-lg px-3 py-3 font-display text-xl font-bold text-fg transition-colors hover:bg-surface hover:text-accent"
                >
                  <span className="font-mono text-[11px] font-normal tracking-widest text-accent/70">
                    0{i + 1}.
                  </span>
                  {item.label}
                </a>
              ))}
              <a
                href={resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-[12px] uppercase tracking-widest text-background"
              >
                <ArrowDownToLine size={14} />
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
