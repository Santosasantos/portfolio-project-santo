import { GraduationCap, Trophy } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import type { Achievement, Education } from "@/lib/types"

interface EducationSectionProps {
  education: Education
  achievements: Achievement[]
}

export function EducationSection({ education, achievements }: EducationSectionProps) {
  return (
    <section id="education" className="border-y border-line bg-surface/60">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
        <SectionHeading number="04" title="Education & Honors" />

        <div className="mt-16 grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="flex items-center gap-3">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-mono text-[12px] uppercase tracking-widest text-fg-faint">Education</h3>
            </div>
            <div className="mt-6 border-t border-line pt-6">
              <p className="font-mono text-[13px] text-fg-faint">{education.period}</p>
              <h4 className="mt-2 font-display text-2xl font-bold tracking-tight text-fg">
                {education.degree}
              </h4>
              <p className="mt-2 text-fg-soft">{education.institution}</p>
              <p className="mt-1 font-mono text-[13px] text-fg-faint">
                {education.location} · {education.gpa}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <Trophy size={18} className="text-accent" />
              <h3 className="font-mono text-[12px] uppercase tracking-widest text-fg-faint">
                Achievements & Awards
              </h3>
            </div>
            <ul className="mt-6">
              {achievements.map((achievement) => (
                <li
                  key={achievement.id}
                  className="flex items-baseline justify-between gap-6 border-t border-line py-5"
                >
                  <div>
                    <p className="font-display text-lg font-bold tracking-tight text-fg">
                      {achievement.title}
                    </p>
                    <p className="mt-1 text-sm text-fg-soft">{achievement.issuer}</p>
                  </div>
                  <p className="shrink-0 font-mono text-[13px] text-fg-faint">{achievement.date}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
