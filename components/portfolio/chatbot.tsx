"use client"

import { useEffect, useRef, useState } from "react"
import { CornerDownLeft, Terminal, X } from "lucide-react"
import { TerminalWindow } from "@/components/portfolio/terminal-window"
import { projectDetails } from "@/lib/data/project-details"
import { formatPeriod } from "@/lib/utils"
import type { PortfolioData } from "@/lib/types"

interface Message {
  from: "user" | "bot"
  text: string
}

const GREETING =
  'Hi! I\'m santo-bot — a tiny terminal that knows everything on this page.\nAsk about skills, projects, experience… or type "help".'

const HELP_TEXT = [
  "Things I can answer:",
  "> about       — who is Santo",
  "> skills      — tech stack",
  "> projects    — selected work",
  "> experience  — work history",
  "> education   — degree & honors",
  "> contact     — email / phone / socials",
  "> resume      — download the CV",
  "> clear       — reset this chat",
  "",
  'Plain questions work too — e.g. "does he know Kafka?"',
].join("\n")

/**
 * Keyword-matched answers sourced from the same data that renders the page,
 * so the bot can never drift out of sync with the portfolio content.
 */
function buildReply(data: PortfolioData, raw: string): string {
  const { profile, experiences, projects, skillCategories, education, achievements, metrics } = data
  const q = raw.toLowerCase()

  if (/^(hi|hello|hey|yo|salam)\b/.test(q))
    return 'Hello! Ask me about Santo\'s skills, projects, or experience — or type "help".'

  if (/\bhelp\b|^\?$/.test(q)) return HELP_TEXT

  if (/resume|\bcv\b/.test(q))
    return `Direct download: ${profile.resumeUrl}\n(Also available via the CV button in the top bar.)`

  if (/contact|email|mail\b|phone|call|reach|touch|hire/.test(q))
    return [
      `Email: ${profile.email}`,
      `Phone: ${profile.phone}`,
      ...profile.social.map((s) => `${s.label}: ${s.url}`),
    ].join("\n")

  // Specific skill lookup before the generic skills answer; longest names
  // first so "javascript" doesn't resolve to "java".
  const allSkills = skillCategories
    .flatMap((c) => c.skills)
    .sort((a, b) => b.length - a.length)
  const skillHit = allSkills.find((s) => q.includes(s.toLowerCase()))
  if (skillHit) {
    const category = skillCategories.find((c) => c.skills.includes(skillHit))
    const related = category?.skills.filter((s) => s !== skillHit).join(", ")
    return `Yes — ${skillHit} is in the toolkit (${category?.title}).${related ? `\nRelated: ${related}.` : ""}`
  }

  const projectHit = projects.find((p) => q.includes(p.title.toLowerCase()))
  if (projectHit) {
    const details = projectDetails[projectHit.id]
    return [
      `${projectHit.title} — ${projectHit.tagline}`,
      projectHit.description,
      ...projectHit.impact.map((item) => `> ${item}`),
      ...(details ? ["", details] : []),
      "",
      `Tech: ${projectHit.tech.join(", ")}`,
      ...(projectHit.githubUrl ? [`GitHub: ${projectHit.githubUrl}`] : []),
      ...(projectHit.demoUrl ? [`Live: ${projectHit.demoUrl}`] : []),
    ].join("\n")
  }

  if (/skill|stack|tech|tool|language|framework/.test(q))
    return skillCategories.map((c) => `${c.title}:\n${c.skills.join(", ")}`).join("\n\n")

  if (/project|built|build|app\b|apps\b/.test(q))
    return (
      "Selected projects:\n" +
      projects.map((p) => `> ${p.title} — ${p.tagline}`).join("\n") +
      '\n\nAsk about any of them by name, e.g. "tell me about NexusPay".'
    )

  if (/experience|job|career|company|brac|role|history|work/.test(q))
    return experiences
      .map((e) =>
        [
          `${e.role} @ ${e.company} (${formatPeriod(e.startDate, e.endDate)})`,
          ...e.highlights.slice(0, 2).map((h) => `> ${h}`),
        ].join("\n"),
      )
      .join("\n\n")

  if (/education|degree|university|study|cgpa|nstu/.test(q))
    return `${education.degree}\n${education.institution} (${education.period})\n${education.location} · ${education.gpa}`

  if (/achievement|award|ctf|honor|prize|competition|win/.test(q))
    return achievements.map((a) => `> ${a.title} — ${a.issuer} (${a.date})`).join("\n")

  if (/metric|stat\b|stats|number|uptime|coverage|performance|impact/.test(q))
    return metrics.map((m) => `> ${m.value} ${m.label} — ${m.context}`).join("\n")

  if (/available|availability|notice|open to/.test(q))
    return `${profile.availability}. Drop a line at ${profile.email}.`

  if (/where|location|based|dhaka|bangladesh|from/.test(q)) return `Based in ${profile.location}.`

  if (/who|about|santo|yourself|summary|bio|intro/.test(q))
    return `${profile.summary}\n\n${profile.availability}.`

  return 'Hmm, that\'s not indexed yet. Type "help" to see what I can answer — or ask about skills, projects, experience, education, or contact.'
}

const LINK_PATTERN = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+(?:\.[\w-]+)+|\/[\w.-]+\.pdf)/g

/** Renders URLs, emails, and local PDF paths inside bot replies as links. */
function Linkify({ text }: { text: string }) {
  return (
    <>
      {text.split(LINK_PATTERN).map((part, i) => {
        if (/^https?:\/\//.test(part))
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noreferrer"
              className="break-all text-accent underline underline-offset-2 hover:text-accent-dim"
            >
              {part.replace(/^https?:\/\//, "")}
            </a>
          )
        if (/^[\w.+-]+@[\w-]+(?:\.[\w-]+)+$/.test(part))
          return (
            <a key={i} href={`mailto:${part}`} className="break-all text-accent underline underline-offset-2 hover:text-accent-dim">
              {part}
            </a>
          )
        if (/^\/[\w.-]+\.pdf$/.test(part))
          return (
            <a key={i} href={part} download className="break-all text-accent underline underline-offset-2 hover:text-accent-dim">
              {part}
            </a>
          )
        return part
      })}
    </>
  )
}

const QUICK_PROMPTS = ["about", "skills", "projects", "contact"]

export function Chatbot({ data }: { data: PortfolioData }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: GREETING }])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef(0)

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // Let the command palette (or anything else) open the chat.
  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener("open-chatbot", onOpen)
    return () => window.removeEventListener("open-chatbot", onOpen)
  }, [])

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  const send = (raw: string) => {
    const text = raw.trim()
    if (!text || typing) return
    setInput("")
    if (/^clear$/i.test(text)) {
      setMessages([{ from: "bot", text: GREETING }])
      return
    }
    setMessages((prev) => [...prev, { from: "user", text }])
    setTyping(true)
    timerRef.current = window.setTimeout(
      () => {
        setMessages((prev) => [...prev, { from: "bot", text: buildReply(data, text) }])
        setTyping(false)
      },
      450 + Math.random() * 450,
    )
  }

  return (
    <>
      {open && (
        <div className="animate-chat-pop fixed bottom-24 right-5 z-50 w-[min(24rem,calc(100vw-2.5rem))]">
          <TerminalWindow
            title="santo-bot — ask about me"
            className="bg-surface/95 shadow-[0_24px_80px_-16px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            <div
              ref={listRef}
              role="log"
              aria-live="polite"
              className="h-80 max-h-[50vh] space-y-4 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed"
            >
              {messages.map((message, i) => (
                <div key={i}>
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-fg-faint">
                    {message.from === "user" ? "> you" : "~ santo-bot"}
                  </p>
                  <p
                    className={`whitespace-pre-wrap break-words ${
                      message.from === "user" ? "text-accent" : "text-fg-soft"
                    }`}
                  >
                    <Linkify text={message.text} />
                  </p>
                </div>
              ))}
              {typing && (
                <p className="text-fg-faint">
                  santo-bot is typing<span className="animate-blink text-accent">▌</span>
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => send(prompt)}
                  className="border border-line px-2.5 py-1 font-mono text-[11px] text-fg-soft transition-colors hover:border-accent hover:text-accent"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-line px-4 py-3"
            >
              <span aria-hidden className="font-mono text-accent">
                $
              </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ask me anything…"
                aria-label="Ask the portfolio assistant"
                className="min-w-0 flex-1 bg-transparent font-mono text-[13px] text-fg placeholder:text-fg-faint focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send"
                className="text-fg-faint transition-colors hover:text-accent"
              >
                <CornerDownLeft size={16} />
              </button>
            </form>
          </TerminalWindow>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat — ask about Santo"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 border border-accent/60 bg-surface px-4 py-3 font-mono text-[12px] uppercase tracking-widest text-accent shadow-[0_0_24px_-6px_var(--accent-dim)] transition-shadow hover:shadow-[0_0_36px_-4px_var(--accent-dim)]"
      >
        {open ? <X size={15} /> : <Terminal size={15} />}
        {open ? "close" : "ask-me"}
      </button>
    </>
  )
}
