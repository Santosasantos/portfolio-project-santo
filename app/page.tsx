import { getPortfolioData } from "@/lib/supabase/queries"
import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Metrics } from "@/components/portfolio/metrics"
import { ExperienceSection } from "@/components/portfolio/experience"
import { ProjectsSection } from "@/components/portfolio/projects"
import { SkillsSection } from "@/components/portfolio/skills"
import { EducationSection } from "@/components/portfolio/education"
import { ContactSection } from "@/components/portfolio/contact"

// Re-render daily so computed durations ("1 yr 3 mos") and the footer year stay current
export const revalidate = 86400

export default async function Home() {
  const { profile, experiences, projects, skillCategories, education, achievements, metrics } =
    await getPortfolioData()

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="paper-grain" aria-hidden />
      <Nav resumeUrl={profile.resumeUrl} />
      <main>
        <Hero profile={profile} />
        <Metrics metrics={metrics} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <SkillsSection categories={skillCategories} />
        <EducationSection education={education} achievements={achievements} />
      </main>
      <ContactSection profile={profile} />
    </div>
  )
}
