import type { PortfolioData } from "@/lib/types"

/**
 * Local source of truth for portfolio content.
 * Used as the fallback whenever Supabase is not configured or unreachable,
 * and as the reference for supabase/seed.sql.
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: "Md. Rabiul Islam Santo",
    title: "Java Backend Engineer",
    roles: [
      "Java Backend Engineer",
      "Spring Boot Specialist",
      "Enterprise Systems Builder",
      "API & Performance Engineer",
    ],
    summary:
      "Java Backend Engineer with 2+ years of hands-on experience designing secure, scalable enterprise applications with Java, Spring Boot, Groovy, and PostgreSQL. Focused on clean architecture, test-driven development, and high-availability backend systems.",
    email: "rabiul.personalinfo@gmail.com",
    phone: "+880 1616-913975",
    location: "Dhaka, Bangladesh",
    availability: "Available on 1 month notice",
    resumeUrl: "/Resume-Md-Rabiul-Islam-Santo.pdf",
    social: [
      { label: "GitHub", url: "https://github.com/Santosasantos" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/md-rabiul-islam-santo/" },
      { label: "HackerRank", url: "https://www.hackerrank.com/profile/rabiulislamsant1" },
    ],
  },

  experiences: [
    {
      id: "brac-it-engineer",
      role: "Software Engineer",
      company: "BRAC IT Services Ltd",
      location: "Dhaka, Bangladesh",
      startDate: "2024-09-01",
      endDate: null,
      highlights: [
        "Engineered scalable backend services with Java, Spring Boot, Groovy, and Grails for enterprise applications serving 10K+ users",
        "Optimized RESTful APIs and database queries, reducing average response time by 30% across high-usage modules",
        "Strengthened application security with authentication, authorization, and role-based access control for sensitive data workflows",
        "Applied clean architecture, SOLID principles, and TDD — achieving 95% automated test coverage",
        "Streamlined CI/CD workflows with Git, GitLab, Maven, and Jenkins, sustaining 99.8% platform uptime",
      ],
      tech: ["Java", "Spring Boot", "Groovy", "Grails", "PostgreSQL", "Redis", "Docker", "GitLab", "Jenkins"],
      sortOrder: 1,
    },
    {
      id: "brac-it-intern",
      role: "Software Engineering Intern",
      company: "BRAC IT Services Ltd",
      location: "Dhaka, Bangladesh",
      startDate: "2024-04-01",
      endDate: "2024-09-01",
      highlights: [
        "Built full-stack features with Spring Boot, Angular, and Vaadin across enterprise product modules",
        "Developed the 360-Degree Feedback module (EPMS), improving evaluation workflow speed by 40%",
        "Designed interactive analytics dashboards with ApexCharts, increasing platform adoption by 52%",
        "Maintained 99%+ API uptime and contributed to peer code reviews",
      ],
      tech: ["Java", "Spring Boot", "Angular", "JHipster", "MySQL", "REST APIs", "Maven"],
      sortOrder: 2,
    },
  ],

  projects: [
    {
      id: "nexuspay",
      title: "NexusPay",
      tagline: "Fintech Payment Platform",
      description:
        "Secure fintech platform supporting digital wallets and concurrent peer-to-peer transactions with ACID-compliant operations.",
      impact: [
        "Eliminated transfer deadlocks via database locking and API idempotency",
        "Scaled asynchronous workflows with Kafka",
        "Fault tolerance with Resilience4j rate limiting",
        "JWT-secured authentication flows",
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Resilience4j", "JWT"],
      githubUrl: "https://github.com/Santosasantos/NexusPay",
      demoUrl: null,
      sortOrder: 1,
    },
    {
      id: "360-assessment",
      title: "360-Assessment",
      tagline: "Employee Performance System",
      description:
        "Enterprise EPMS module processing multi-source feedback for 500+ employees with real-time analytics and role-based access control.",
      impact: [
        "40% faster reporting through optimized data retrieval",
        "Secure analytics aggregation and reporting pipelines",
        "Interactive real-time dashboards",
        "Multi-dimensional rating workflows",
      ],
      tech: ["Spring Boot", "Angular", "JHipster", "PrimeNG", "PostgreSQL"],
      githubUrl: "https://github.com/Santosasantos/epms",
      demoUrl: "http://epms-app-bd2024.azurewebsites.net/",
      sortOrder: 2,
    },
    {
      id: "endectic",
      title: "EnDecTic",
      tagline: "Secure P2P Encrypted Messaging",
      description:
        "Peer-to-peer communication platform with RSA 2048-bit encryption and a zero-knowledge architecture.",
      impact: [
        "2048-bit RSA end-to-end encryption",
        "Zero-knowledge message design",
        "Digital signature verification",
        "~50ms message latency",
      ],
      tech: ["Java", "Socket Programming", "RSA Encryption", "Swing"],
      githubUrl: "https://github.com/Santosasantos/EnDecTic",
      demoUrl: null,
      sortOrder: 3,
    },
    {
      id: "massier",
      title: "Massier",
      tagline: "Hostel Management System",
      description:
        "Web system automating hostel and mess operations for 200+ residents with real-time expense tracking and messaging.",
      impact: [
        "70% operational efficiency gain",
        "Real-time expense tracking",
        "85% reduction in communication overhead",
        "Automated meal and expense reporting",
      ],
      tech: ["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"],
      githubUrl: "https://github.com/Santosasantos/Massier",
      demoUrl: "https://massier.kesug.com/",
      sortOrder: 4,
    },
  ],

  skillCategories: [
    {
      id: "backend",
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Groovy", "Grails", "REST APIs", "Microservices"],
      sortOrder: 1,
    },
    {
      id: "security",
      title: "Security & Reliability",
      skills: ["Secure Coding", "JWT Authentication", "Authorization", "RBAC", "Data Protection"],
      sortOrder: 2,
    },
    {
      id: "data-messaging",
      title: "Data & Messaging",
      skills: ["PostgreSQL", "MySQL", "Redis", "Kafka", "RabbitMQ"],
      sortOrder: 3,
    },
    {
      id: "testing",
      title: "Testing & Quality",
      skills: ["JUnit", "Mockito", "TDD", "SonarQube", "Load Testing"],
      sortOrder: 4,
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      skills: ["Git/GitLab", "Maven", "Gradle", "Jenkins", "Docker", "Kubernetes", "AWS"],
      sortOrder: 5,
    },
    {
      id: "frontend-methods",
      title: "Frontend & Methods",
      skills: ["Angular", "TypeScript", "Agile/Scrum", "Clean Architecture", "SOLID Principles"],
      sortOrder: 6,
    },
  ],

  education: {
    degree: "B.Sc. in Software Engineering",
    institution: "Noakhali Science and Technology University",
    location: "Noakhali, Bangladesh",
    period: "2020 — 2025",
    gpa: "CGPA 3.45 / 4.00",
  },

  achievements: [
    {
      id: "buet-ctf",
      title: "Champion — BUET CSE Fest CTF",
      issuer: "BUET",
      date: "Oct 2024",
      sortOrder: 1,
    },
    {
      id: "ctfbd-maze",
      title: "9th Place — CTFBD Maze in Antarjal",
      issuer: "ICT Division",
      date: "Jun 2023",
      sortOrder: 2,
    },
    {
      id: "campus-leader",
      title: "Best Campus Leader — Banglalink AppLink",
      issuer: "Banglalink",
      date: "Nov 2022",
      sortOrder: 3,
    },
  ],

  metrics: [
    { id: "response", value: "30%", label: "Faster API response", context: "Query & caching optimization at BRAC IT", sortOrder: 1 },
    { id: "coverage", value: "95%", label: "Test coverage", context: "TDD across enterprise modules", sortOrder: 2 },
    { id: "uptime", value: "99.8%", label: "Platform uptime", context: "CI/CD on production systems", sortOrder: 3 },
    { id: "users", value: "10K+", label: "Users served", context: "Enterprise-grade applications", sortOrder: 4 },
  ],
}
