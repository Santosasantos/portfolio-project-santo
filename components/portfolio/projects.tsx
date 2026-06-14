"use client"

import { useState } from "react"
import { ArrowUpRight, Maximize2 } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { ProjectModal } from "@/components/portfolio/project-modal"
import type { Project } from "@/lib/types"

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
        <SectionHeading
          number="02"
          title="Selected Projects"
          subtitle="From fintech platforms to encrypted messaging — systems built for correctness under load. Open any card for the full case study."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 80}>
              <article
                onClick={() => setActive(project)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${project.title} case study`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setActive(project)
                  }
                }}
                className="glow-card group relative flex h-full cursor-pointer flex-col border border-line bg-surface p-8 focus:outline-none focus-visible:border-accent sm:p-10"
              >
                <span
                  aria-hidden
                  className="absolute right-6 top-6 font-display text-6xl font-bold text-line transition-colors duration-500 group-hover:text-accent/25"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  {project.tagline}
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-fg-soft">{project.description}</p>

                <ul className="mt-6 space-y-2">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-soft">
                      <span className="shrink-0 font-mono text-accent">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 font-mono text-[12px] uppercase tracking-wider text-fg-faint">
                  {project.tech.join(" · ")}
                </p>

                <div className="mt-auto flex items-center gap-6 pt-8">
                  <span className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Maximize2 size={13} />
                    Case study
                  </span>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="link-rule ml-auto flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-fg transition-colors hover:text-accent"
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
                      onClick={(e) => e.stopPropagation()}
                      className="link-rule flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-fg transition-colors hover:text-accent"
                    >
                      Live demo
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
