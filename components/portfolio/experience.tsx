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
        subtitle="Building enterprise backend systems that scale — with measurable impact."
      />

      <div className="mt-16 space-y-0">
        {experiences.map((exp) => {
          const isCurrent = exp.endDate === null
          return (
            <Reveal key={exp.id}>
              <article className="grid gap-6 border-t border-rule py-12 lg:grid-cols-12 lg:gap-10">
                {/* Left rail — dates */}
                <div className="lg:col-span-3">
                  <p className="flex items-center gap-2.5 font-mono text-[13px] tracking-wide text-ink">
                    {isCurrent && <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />}
                    {formatPeriod(exp.startDate, exp.endDate)}
                  </p>
                  <p className="mt-1.5 font-mono text-[12px] text-ink-faint">
                    {formatDuration(exp.startDate, exp.endDate)}
                  </p>
                  <p className="mt-1.5 font-mono text-[12px] text-ink-faint">{exp.location}</p>
                </div>

                {/* Right — role details */}
                <div className="lg:col-span-9">
                  <h3 className="font-display text-3xl font-medium tracking-tight text-ink">
                    {exp.role}
                    {isCurrent && (
                      <span className="ml-3 align-middle font-mono text-[11px] uppercase tracking-widest text-accent">
                        Current
                      </span>
                    )}
                  </h3>
                  <p className="mt-1.5 font-mono text-sm text-ink-soft">{exp.company}</p>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 leading-relaxed text-ink-soft">
                        <span className="mt-0.5 shrink-0 text-accent">—</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 font-mono text-[12px] uppercase tracking-wider text-ink-faint">
                    {exp.tech.join(" · ")}
                  </p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
