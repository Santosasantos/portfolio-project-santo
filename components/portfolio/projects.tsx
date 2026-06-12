import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import type { Project } from "@/lib/types"

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="border-y border-rule bg-paper-raised">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
        <SectionHeading
          number="02"
          title="Selected Projects"
          subtitle="From fintech platforms to encrypted messaging — systems built for correctness under load."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 80} className="bg-paper-raised">
              <article className="group relative flex h-full flex-col p-8 sm:p-10">
                <span
                  aria-hidden
                  className="absolute right-6 top-6 font-display text-6xl font-medium text-rule transition-colors duration-500 group-hover:text-accent-soft"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{project.tagline}</p>
                <h3 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{project.description}</p>

                <ul className="mt-6 space-y-2">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="shrink-0 text-accent">—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 font-mono text-[12px] uppercase tracking-wider text-ink-faint">
                  {project.tech.join(" · ")}
                </p>

                <div className="mt-auto flex gap-6 pt-8">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-rule flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-ink hover:text-accent"
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
                      className="link-rule flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-ink hover:text-accent"
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
    </section>
  )
}
