import { supabaseSelect } from "@/lib/supabase/client"
import { portfolioData } from "@/lib/data/portfolio-data"
import type {
  Achievement,
  Education,
  Experience,
  Metric,
  PortfolioData,
  Profile,
  Project,
  SkillCategory,
} from "@/lib/types"

// Row shapes as stored in Supabase (snake_case columns, see supabase/schema.sql)
interface ProfileRow {
  name: string
  title: string
  roles: string[]
  summary: string
  email: string
  phone: string
  location: string
  availability: string
  resume_url: string
  social: { label: string; url: string }[]
}

interface ExperienceRow {
  id: string
  role: string
  company: string
  location: string
  start_date: string
  end_date: string | null
  highlights: string[]
  tech: string[]
  sort_order: number
}

interface ProjectRow {
  id: string
  title: string
  tagline: string
  description: string
  impact: string[]
  tech: string[]
  github_url: string | null
  demo_url: string | null
  sort_order: number
}

interface SkillCategoryRow {
  id: string
  title: string
  skills: string[]
  sort_order: number
}

interface EducationRow {
  degree: string
  institution: string
  location: string
  period: string
  gpa: string
}

interface AchievementRow {
  id: string
  title: string
  issuer: string
  date: string
  sort_order: number
}

interface MetricRow {
  id: string
  value: string
  label: string
  context: string
  sort_order: number
}

async function getProfile(): Promise<Profile> {
  const rows = await supabaseSelect<ProfileRow>("profile", "select=*&limit=1")
  if (!rows) return portfolioData.profile
  const r = rows[0]
  return {
    name: r.name,
    title: r.title,
    roles: r.roles,
    summary: r.summary,
    email: r.email,
    phone: r.phone,
    location: r.location,
    availability: r.availability,
    resumeUrl: r.resume_url,
    social: r.social,
  }
}

async function getExperiences(): Promise<Experience[]> {
  const rows = await supabaseSelect<ExperienceRow>("experiences", "select=*&order=sort_order.asc")
  if (!rows) return portfolioData.experiences
  return rows.map((r) => ({
    id: r.id,
    role: r.role,
    company: r.company,
    location: r.location,
    startDate: r.start_date,
    endDate: r.end_date,
    highlights: r.highlights,
    tech: r.tech,
    sortOrder: r.sort_order,
  }))
}

async function getProjects(): Promise<Project[]> {
  const rows = await supabaseSelect<ProjectRow>("projects", "select=*&order=sort_order.asc")
  if (!rows) return portfolioData.projects
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    tagline: r.tagline,
    description: r.description,
    impact: r.impact,
    tech: r.tech,
    githubUrl: r.github_url,
    demoUrl: r.demo_url,
    sortOrder: r.sort_order,
  }))
}

async function getSkillCategories(): Promise<SkillCategory[]> {
  const rows = await supabaseSelect<SkillCategoryRow>("skill_categories", "select=*&order=sort_order.asc")
  if (!rows) return portfolioData.skillCategories
  return rows.map((r) => ({ id: r.id, title: r.title, skills: r.skills, sortOrder: r.sort_order }))
}

async function getEducation(): Promise<Education> {
  const rows = await supabaseSelect<EducationRow>("education", "select=*&limit=1")
  if (!rows) return portfolioData.education
  return rows[0]
}

async function getAchievements(): Promise<Achievement[]> {
  const rows = await supabaseSelect<AchievementRow>("achievements", "select=*&order=sort_order.asc")
  if (!rows) return portfolioData.achievements
  return rows.map((r) => ({ id: r.id, title: r.title, issuer: r.issuer, date: r.date, sortOrder: r.sort_order }))
}

async function getMetrics(): Promise<Metric[]> {
  const rows = await supabaseSelect<MetricRow>("metrics", "select=*&order=sort_order.asc")
  if (!rows) return portfolioData.metrics
  return rows.map((r) => ({ id: r.id, value: r.value, label: r.label, context: r.context, sortOrder: r.sort_order }))
}

export async function getPortfolioData(): Promise<PortfolioData> {
  const [profile, experiences, projects, skillCategories, education, achievements, metrics] = await Promise.all([
    getProfile(),
    getExperiences(),
    getProjects(),
    getSkillCategories(),
    getEducation(),
    getAchievements(),
    getMetrics(),
  ])
  return { profile, experiences, projects, skillCategories, education, achievements, metrics }
}
