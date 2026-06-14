import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { formatDuration, formatPeriod } from "@/lib/utils"
import type { Experience } from "@/lib/types"

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        number="01"
        title="Experience"
        subtitle="Building enterprise systems that scale, from database to UI — with measurable impact."
      />

      <div className="mt-16 space-y-0">
        {experiences.map((exp) => {
          const isCurrent = exp.endDate === null
          return (
            <Reveal key={exp.id}>
              <article className="grid gap-6 border-t border-line py-12 lg:grid-cols-12 lg:gap-10">
                {/* Left rail — dates */}
                <div className="lg:col-span-3">
                  <p className="flex items-center gap-2.5 font-mono text-[13px] tracking-wide text-fg">
                    {isCurrent && (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                    )}
                    {formatPeriod(exp.startDate, exp.endDate)}
                  </p>
                  <p className="mt-1.5 font-mono text-[12px] text-fg-faint">
                    {formatDuration(exp.startDate, exp.endDate)}
                  </p>
                  <p className="mt-1.5 font-mono text-[12px] text-fg-faint">{exp.location}</p>
                </div>

                {/* Right — role details */}
                <div className="lg:col-span-9">
                  <h3 className="font-display text-3xl font-bold tracking-tight text-fg">
                    {exp.role}
                    {isCurrent && (
                      <span className="ml-3 inline-block translate-y-[-0.2em] border border-accent/50 bg-accent-soft px-2 py-0.5 align-middle font-mono text-[10px] font-normal uppercase tracking-widest text-accent">
                        Current
                      </span>
                    )}
                  </h3>
                  <p className="mt-1.5 font-mono text-sm text-fg-soft">{exp.company}</p>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 leading-relaxed text-fg-soft">
                        <span className="mt-0.5 shrink-0 font-mono text-accent">&gt;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <li
                        key={tech}
                        className="border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-faint"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
