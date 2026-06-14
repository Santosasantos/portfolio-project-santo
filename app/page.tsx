import { getPortfolioData } from "@/lib/supabase/queries"
import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Metrics } from "@/components/portfolio/metrics"
import { Ticker } from "@/components/portfolio/ticker"
import { ExperienceSection } from "@/components/portfolio/experience"
import { ProjectsSection } from "@/components/portfolio/projects"
import { SkillsSection } from "@/components/portfolio/skills"
import { EducationSection } from "@/components/portfolio/education"
import { ContactSection } from "@/components/portfolio/contact"
import { Chatbot } from "@/components/portfolio/chatbot"
import { CommandPalette } from "@/components/portfolio/command-palette"

// Re-render daily so computed durations ("1 yr 3 mos") and the footer year stay current
export const revalidate = 86400

export default async function Home() {
  const data = await getPortfolioData()
  const { profile, experiences, projects, skillCategories, education, achievements, metrics } = data

  const tickerItems = [...new Set(skillCategories.flatMap((category) => category.skills))]

  return (
    // Background grid + glow live on body pseudo-elements; keep this wrapper transparent
    <div className="min-h-screen text-fg">
      <div className="screen-noise" aria-hidden />
      <div className="scroll-progress" aria-hidden />
      <Nav resumeUrl={profile.resumeUrl} />
      <main>
        <Hero profile={profile} />
        <Metrics metrics={metrics} />
        <Ticker items={tickerItems} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <SkillsSection categories={skillCategories} />
        <EducationSection education={education} achievements={achievements} />
      </main>
      <ContactSection profile={profile} />
      <Chatbot data={data} />
      <CommandPalette profile={profile} />
    </div>
  )
}
