"use client"

import { useEffect } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { TerminalWindow } from "@/components/portfolio/terminal-window"
import { projectDetails } from "@/lib/data/project-details"
import type { Project } from "@/lib/types"

/** Animated terminal-style case study for a single project. */
export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // Lock scroll and wire ESC while the modal is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const details = projectDetails[project.id]
  // Deep-dive blob is "header line\n> point\n> point …"; split for terminal log.
  const diveLines = details ? details.split("\n").filter(Boolean) : []

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onClick={onClose}
      className="animate-fade-in fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm sm:p-8"
    >
      <div onClick={(e) => e.stopPropagation()} className="animate-chat-pop my-auto w-full max-w-2xl">
        <TerminalWindow
          title={`~/projects/${project.id}.md`}
          className="shadow-[0_40px_120px_-24px_rgba(0,0,0,0.85)]"
        >
          <div className="relative max-h-[80vh] overflow-y-auto p-6 sm:p-8">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 text-fg-faint transition-colors hover:text-accent"
            >
              <X size={18} />
            </button>

            <p className="pr-8 font-mono text-[11px] uppercase tracking-widest text-accent">
              {project.tagline}
            </p>
            <h3 className="mt-2 pr-8 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-4 leading-relaxed text-fg-soft">{project.description}</p>

            {/* Impact */}
            <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-fg-faint">
              # impact
            </p>
            <ul className="mt-3 space-y-2">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-soft">
                  <span className="shrink-0 font-mono text-accent">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Deep dive — staggered terminal log */}
            {diveLines.length > 0 && (
              <>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-fg-faint">
                  # deep_dive
                </p>
                <div className="mt-3 border border-line bg-background/60 p-4 font-mono text-[12.5px] leading-relaxed">
                  {diveLines.map((line, i) => {
                    const isPoint = line.startsWith(">")
                    return (
                      <p
                        key={i}
                        className="dive-line whitespace-pre-wrap text-fg-soft"
                        style={{ animationDelay: `${120 + i * 90}ms` }}
                      >
                        {isPoint ? (
                          <>
                            <span className="mr-2 text-accent">&gt;</span>
                            {line.replace(/^>\s*/, "")}
                          </>
                        ) : (
                          <span className="text-fg-faint">{line}</span>
                        )}
                      </p>
                    )
                  })}
                </div>
              </>
            )}

            {/* Tech */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="border border-line px-2.5 py-1 font-mono text-[11px] text-fg-soft"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            {(project.githubUrl || project.demoUrl) && (
              <div className="mt-8 flex gap-6 border-t border-line pt-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-rule flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-fg transition-colors hover:text-accent"
                  >
                    GitHub
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-rule flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-fg transition-colors hover:text-accent"
                  >
                    Live demo
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            )}
          </div>
        </TerminalWindow>
      </div>
    </div>
  )
}
