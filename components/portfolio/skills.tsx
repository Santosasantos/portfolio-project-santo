import { Reveal } from "@/components/portfolio/reveal"
import { SectionHeading } from "@/components/portfolio/section-heading"
import { SkillBar } from "@/components/portfolio/skill-bar"
import type { SkillCategory } from "@/lib/types"

/**
 * Self-assessed proficiency (0–100) per skill, used to drive the animated
 * meters. Tune freely — anything not listed falls back to DEFAULT_LEVEL.
 */
const PROFICIENCY: Record<string, number> = {
  // Backend
  Java: 92, "Spring Boot": 90, Groovy: 75, Grails: 72, "REST APIs": 88, Microservices: 80,
  // Security & Reliability
  "Secure Coding": 82, "JWT Authentication": 85, Authorization: 83, RBAC: 83, "Data Protection": 80,
  // Data & Messaging
  PostgreSQL: 88, MySQL: 82, Redis: 78, Kafka: 80, RabbitMQ: 72,
  // Quality & Methods
  JUnit: 85, Mockito: 83, TDD: 85, SonarQube: 75, "Agile/Scrum": 80, "Clean Architecture": 82, "SOLID Principles": 85,
  // DevOps & Cloud
  "Git/GitLab": 88, Maven: 84, Gradle: 78, Jenkins: 80, Docker: 82, Kubernetes: 70, AWS: 70,
  // Frontend
  Angular: 85, TypeScript: 84, React: 80, "Next.js": 78, Vaadin: 75, PrimeNG: 78,
}
const DEFAULT_LEVEL = 75

export function SkillsSection({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        number="03"
        title="Technical Expertise"
        subtitle="The toolset behind secure, high-availability systems — from API to interface. Meters reflect self-assessed depth."
      />

      <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Reveal key={category.id} delay={(i % 3) * 80}>
            <div className="border-t-2 border-line-strong pt-5">
              <p className="font-mono text-[11px] tracking-widest text-accent">
                {`// ${String(i + 1).padStart(2, "0")}`}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-fg">
                {category.title}
              </h3>
              <div className="mt-5 space-y-4">
                {category.skills.map((skill, j) => (
                  <SkillBar
                    key={skill}
                    name={skill}
                    level={PROFICIENCY[skill] ?? DEFAULT_LEVEL}
                    delay={j * 90}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
