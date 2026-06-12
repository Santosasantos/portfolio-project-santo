import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import type { SkillCategory } from "@/lib/types"

export function SkillsSection({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        number="03"
        title="Technical Expertise"
        subtitle="The toolset behind secure, high-availability backend systems."
      />

      <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Reveal key={category.id} delay={(i % 3) * 80}>
            <div className="border-t-2 border-ink pt-5">
              <p className="font-mono text-[11px] tracking-widest text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
                {category.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="border border-rule px-3 py-1.5 font-mono text-[12px] text-ink-soft transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
