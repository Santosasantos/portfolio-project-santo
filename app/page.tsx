"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Settings,
  Terminal,
  Award,
  BookOpen,
  ChevronDown,
  Zap,
} from "lucide-react"
import {useTypewriter} from "@/hooks/use-typewriter";

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  // const socialLinks = [{name:"Linkedin", link:"https://www.linkedin.com/in/md-rabiul-islam-santo/"},
  //   {name:"Github", link:"https://github.com/Santosasantos"},
  //   {name:"Hackarrank", link:"https://www.hackerrank.com/profile/rabiulislamsant1"}]
  const [socialLinks] = useState(new Map([
      ['LinkedIn', 'https://www.linkedin.com/in/md-rabiul-islam-santo/'],
      ['Github', 'https://github.com/Santosasantos'],
      ['Hackarrank', 'https://www.hackerrank.com/profile/rabiulislamsant1']
  ]));

  const jobTitles = [
    "Java Full Stack Engineer",
    "Spring Boot Architect",
    "Enterprise Solutions Builder",
    "Microservices Expert",
  ]
  const animatedTitle = useTypewriter(jobTitles, 80, 2500)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
        <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-cyan-600/20 via-transparent to-transparent blur-3xl animate-drift" />
        <div className="absolute bottom-0 -right-1/2 w-full h-full bg-gradient-to-l from-blue-600/20 via-transparent to-transparent blur-3xl animate-drift-reverse" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
      </div>

      <nav className="fixed w-full top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-cyan-500/10 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
              RS
            </div>
            <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Santo
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            {["About", "Experience", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={socialLinks.get('Github')}
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.get('LinkedIn')}
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="about" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 animate-fade-in">
              <Zap size={16} className="text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-semibold min-w-56">
                {animatedTitle}
                <span className="animate-blink">|</span>
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-slide-up">
                Md. Rabiul{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-shift">
                  Islam Santo
                </span>
              </h1>
              <div
                  className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
              />
              <p
                  className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
              >
                Java Full Stack Engineer with proven expertise building scalable, secure enterprise systems using Spring
                Boot and Angular. Skilled in TDD, RESTful APIs, and OOP design—delivering high-performance solutions
                that drive business value.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <a
                  href="mailto:rabiulislamsanto.nstu@gmail.com"
                  className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Mail size={18} />
                Get In Touch
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                  href="#projects"
                  className="px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Github, label: "GitHub", href: socialLinks.get("Github") },
                { icon: Linkedin, label: "LinkedIn", href: socialLinks.get("LinkedIn") },
                { icon: Terminal, label: "HackerRank", href: socialLinks.get("Hackarrank") },
              ].map(({ icon: Icon, label, href }) => (
                  <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                    {label}
                  </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center animate-float" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-8 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl animate-pulse-glow" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl animate-drift" />

            <div className="relative w-72 h-96 md:w-80 md:h-96 group">
              <Image
                  src="/santo_portofolio.png"
                  alt="Md. Rabiul Islam Santo - Java Full Stack Engineer"
                  fill
                  className="object-cover rounded-2xl shadow-2xl ring-1 ring-cyan-500/30 group-hover:ring-cyan-500/60 transition-all duration-500 group-hover:scale-105"
                  priority
                  quality={95}
              />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-500/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute -bottom-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce-slow z-10">
                Available for Roles
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow mt-12">
          <ChevronDown size={24} className="text-cyan-400" />
        </div>
      </section>

      <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            <p className="text-slate-400 text-lg max-w-2xl">
              Building enterprise systems that scale. Leading technical initiatives with measurable impact.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="space-y-6 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent" />

            {/* Experience Cards */}
            {[
              {
                role: "Software Engineer",
                company: "BracIT Services Ltd",
                period: "Sep 2024 – Present",
                duration: "3 months",
                location: "Dhaka, Bangladesh",
                highlights: [
                  "Engineered enterprise-grade applications serving 10K+ users using Groovy, Grails & Jmix",
                  "Optimized RESTful APIs achieving 30% response time reduction through caching strategies",
                  "Implemented TDD practices achieving 95% test coverage, eliminating 78% of regression defects",
                  "Delivered 8+ core modules with modular architecture improving deployment efficiency by 25%",
                  "Orchestrated CI/CD pipelines achieving 99.8% platform uptime",
                ],
                tech: ["Groovy", "Grails", "Spring Boot", "Jmix", "PostgreSQL", "Redis", "Docker", "GitLab"],
                status: "current",
              },
              {
                role: "Software Engineering Intern",
                company: "BracIT Services Ltd",
                period: "Apr 2024 – Sep 2024",
                duration: "6 months",
                location: "Dhaka, Bangladesh",
                highlights: [
                  "Architected full-stack applications with Spring Boot, Angular & Vaadin",
                  "Developed 360-Degree Feedback Module (EPMS) improving workflow by 40%",
                  "Designed interactive dashboards with ApexCharts increasing adoption by 52%",
                  "Maintained 99%+ API uptime and contributed to code reviews",
                ],
                tech: ["Java", "Spring Boot", "Angular", "JHipster", "MySQL", "REST APIs", "Maven"],
                status: "past",
              },
            ].map((exp, idx) => (
                <div
                    key={idx}
                    className="group relative md:ml-20 animate-slide-up"
                    style={{ animationDelay: `${exp.status === "current" ? 0 : 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-8 top-7 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full border-4 border-slate-900 ring-2 ring-cyan-400/50 group-hover:ring-cyan-400 transition-all duration-300 group-hover:scale-125 shadow-lg shadow-cyan-500/50" />

                  {/* Current indicator */}
                  {exp.status === "current" && (
                      <div className="hidden md:block absolute -left-8 top-7 w-6 h-6 bg-cyan-400 rounded-full animate-pulse" />
                  )}

                  {/* Card */}
                  <div className="border border-cyan-500/20 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-blue-900/40 backdrop-blur-xl rounded-xl p-8 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 group-hover:from-slate-900 group-hover:to-blue-900/60">
                    {/* Header with role and company */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          {exp.status === "current" && (
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
                            CURRENT
                          </span>
                          )}
                        </div>
                        <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                        <p className="text-slate-500 text-sm mt-1">{exp.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-300 font-semibold">{exp.period}</p>
                        <p className="text-slate-500 text-sm mt-1">{exp.duration}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-cyan-500/30 to-transparent mb-6" />

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                        <Zap size={16} /> Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, i) => (
                            <li
                                key={i}
                                className="flex gap-3 text-slate-300 group/item animate-slide-up"
                                style={{ animationDelay: `${0.05 * i}s` }}
                            >
                          <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5 group-hover/item:scale-150 transition-transform duration-300">
                            ◆
                          </span>
                              <span className="group-hover/item:translate-x-1 transition-transform duration-300 leading-relaxed">
                            {highlight}
                          </span>
                            </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-cyan-500/10">
                      {exp.tech.map((t, i) => (
                          <span
                              key={t}
                              className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-semibold hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-default animate-fade-in hover:scale-110"
                              style={{ animationDelay: `${0.03 * i}s` }}
                          >
                        {t}
                      </span>
                      ))}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 border-y border-cyan-500/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "78%", label: "Regression Defects", desc: "Eliminated via TDD" },
            { number: "95%", label: "Code Coverage", desc: "Achieved with rigorous testing" },
            { number: "30%", label: "Performance Gain", desc: "API optimization & caching" },
            { number: "99.8%", label: "Uptime", desc: "Zero-downtime deployments" },
          ].map((metric, i) => (
            <div
              key={i}
              className="group text-center p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 animate-slide-up hover:scale-105"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {metric.number}
              </div>
              <p className="text-slate-300 text-sm font-semibold mt-3">{metric.label}</p>
              <p className="text-slate-500 text-xs mt-1">{metric.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "360-Assessment – Employee Performance System",
                desc: "Enterprise EPMS module processing feedback from 500+ employees. Features real-time analytics, multi-dimensional ratings, and trend analysis.",
                impact: [
                  "40% faster feedback collection",
                  "99% data accuracy",
                  "Real-time dashboards",
                  "10K+ concurrent users",
                ],
                tech: ["Spring Boot", "Angular", "PrimeNG", "ApexCharts", "PostgreSQL"],
                githubLink: "https://github.com/Santosasantos/epms",
              },
              {
                title: "EnDecTic – Secure P2P Encrypted Messaging",
                desc: "Military-grade peer-to-peer communication platform with RSA 2048-bit encryption ensuring zero-knowledge architecture.",
                impact: ["Military-grade 2048-bit RSA", "Zero-knowledge design", "Digital signatures", "50ms latency"],
                tech: ["Java", "Socket Programming", "RSA Encryption", "Swing"],
                githubLink: "https://github.com/Santosasantos/EnDecTic",
              },
              {
                title: "Massier – Hostel Management System",
                desc: "Comprehensive web system automating hostel operations for 200+ residents with real-time expense tracking and messaging.",
                impact: [
                  "70% efficiency gain",
                  "Real-time tracking",
                  "85% communication reduction",
                  "Automated reporting",
                ],
                tech: ["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap"],
                githubLink: "https://github.com/Santosasantos/Massier",
              },
              {
                title: "REST API Architecture Optimization",
                desc: "Refactored legacy monolithic APIs into microservices. Implemented caching and query optimization for 30% latency reduction.",
                impact: ["30% latency reduction", "45% DB load decrease", "Redis caching", "Rate limiting"],
                tech: ["Spring Boot", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
                githubLink: "https://github.com/Santosasantos"
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group relative border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden animate-slide-up hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${0.1 * idx}s` }}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/5 group-hover:to-blue-600/10 transition-all duration-500" />

                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.desc}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <Zap size={14} /> Key Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-300 flex gap-2 group-hover/item:translate-x-1 transition-transform duration-300"
                        >
                          <span className="text-cyan-400 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-medium hover:bg-cyan-500/20 transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${0.03 * i}s` }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    View on GitHub
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-blue-900/30 border-y border-cyan-500/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">Technical Expertise</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code2,
                title: "Languages & Frameworks",
                skills: ["Java", "Groovy", "Spring Boot", "Angular", "Vaadin", "JHipster", "Grails", "Jmix"],
              },
              {
                icon: Database,
                title: "Data & Infrastructure",
                skills: ["PostgreSQL", "MySQL", "Redis", "Docker", "Kubernetes", "Git/GitLab", "CI/CD"],
              },
              {
                icon: Settings,
                title: "Quality & Testing",
                skills: ["JUnit", "Mockito", "TDD", "SonarQube", "Load Testing", "SOLID Principles"],
              },
              {
                icon: Terminal,
                title: "APIs & Architecture",
                skills: ["RESTful APIs", "Microservices", "System Design", "API Optimization", "Caching"],
              },
              {
                icon: BookOpen,
                title: "Soft Skills",
                skills: ["Technical Leadership", "Agile/Scrum", "Code Review Mentoring", "Problem Solving"],
              },
              {
                icon: Award,
                title: "Achievements",
                skills: ["Codeforces 933", "HackerRank 2383", "CTF Placements", "Best Campus Leader"],
              },
            ].map(({ icon: Icon, title, skills }, idx) => (
              <div
                key={idx}
                className="group border border-cyan-500/20 bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-xl rounded-2xl p-6 hover:border-cyan-500/50 hover:from-slate-900/70 hover:to-blue-900/50 transition-all duration-500 animate-slide-up hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-105"
                style={{ animationDelay: `${0.08 * idx}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    className="text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                    size={24}
                  />
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-cyan-500/5 border border-cyan-500/20 text-slate-200 rounded-lg text-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-300 cursor-default animate-fade-in hover:scale-105"
                      style={{ animationDelay: `${0.03 * i}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm passionate about building scalable enterprise systems, mentoring teams, and driving technical
              excellence. Let's collaborate!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="mailto:rabiul.personalinfo.nstu@gmail.com"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Let's Connect
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href={socialLinks.get('LinkedIn')}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-12 text-center w-full">© 2025 Md. Rabiul Islam Santo. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}


