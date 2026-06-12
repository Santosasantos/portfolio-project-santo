export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  title: string
  roles: string[]
  summary: string
  email: string
  phone: string
  location: string
  availability: string
  resumeUrl: string
  social: SocialLink[]
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  startDate: string // ISO date
  endDate: string | null // null = present
  highlights: string[]
  tech: string[]
  sortOrder: number
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  impact: string[]
  tech: string[]
  githubUrl: string | null
  demoUrl: string | null
  sortOrder: number
}

export interface SkillCategory {
  id: string
  title: string
  skills: string[]
  sortOrder: number
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  gpa: string
}

export interface Achievement {
  id: string
  title: string
  issuer: string
  date: string
  sortOrder: number
}

export interface Metric {
  id: string
  value: string
  label: string
  context: string
  sortOrder: number
}

export interface PortfolioData {
  profile: Profile
  experiences: Experience[]
  projects: Project[]
  skillCategories: SkillCategory[]
  education: Education
  achievements: Achievement[]
  metrics: Metric[]
}
