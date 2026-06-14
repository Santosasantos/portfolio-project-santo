"use client"

import { useEffect, useState } from "react"
import { Command } from "cmdk"
import {
  ArrowUpRight,
  Briefcase,
  Download,
  FolderGit2,
  GraduationCap,
  Mail,
  MessageSquareCode,
  Terminal,
  User,
  Wrench,
} from "lucide-react"
import type { Profile } from "@/lib/types"

const SECTIONS = [
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
]

/**
 * Cmd/Ctrl+K command palette — keyboard-first navigation and actions.
 * An engineer-flavoured way to move around the page.
 */
export function CommandPalette({ profile }: { profile: Profile }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKey)
    window.addEventListener("open-command-palette", onOpen)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("open-command-palette", onOpen)
    }
  }, [])

  const run = (fn: () => void) => {
    setOpen(false)
    // Let the dialog close before navigating so scroll isn't fought by focus return.
    requestAnimationFrame(fn)
  }

  const itemClass =
    "flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2.5 font-mono text-[13px] text-fg-soft transition-colors data-[selected=true]:bg-accent-soft data-[selected=true]:text-accent"

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      overlayClassName="fixed inset-0 z-[90] bg-background/70 backdrop-blur-sm data-[state=open]:animate-fade-in"
      contentClassName="fixed left-1/2 top-[18vh] z-[90] w-[min(36rem,calc(100vw-2rem))] -translate-x-1/2 data-[state=open]:animate-chat-pop"
    >
      <div className="overflow-hidden border border-line-strong bg-surface shadow-[0_40px_120px_-24px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-2 border-b border-line px-4">
          <Terminal size={15} className="text-accent" />
          <Command.Input
            placeholder="Type a command or search…"
            className="h-12 w-full bg-transparent font-mono text-[13px] text-fg placeholder:text-fg-faint focus:outline-none"
          />
          <kbd className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-fg-faint sm:block">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[50vh] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center font-mono text-[12px] text-fg-faint">
            No matches. Try “projects” or “resume”.
          </Command.Empty>

          <Command.Group
            heading="Navigate"
            className="px-2 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-fg-faint [&_[cmdk-group-items]]:mt-1"
          >
            {SECTIONS.map(({ label, href, icon: Icon }) => (
              <Command.Item
                key={href}
                value={`go to ${label}`}
                onSelect={() => run(() => (window.location.hash = href))}
                className={itemClass}
              >
                <Icon size={15} className="text-fg-faint" />
                {label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading="Actions"
            className="px-2 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-fg-faint [&_[cmdk-group-items]]:mt-1"
          >
            <Command.Item
              value="ask santo-bot chat assistant"
              onSelect={() => run(() => window.dispatchEvent(new CustomEvent("open-chatbot")))}
              className={itemClass}
            >
              <MessageSquareCode size={15} className="text-fg-faint" />
              Ask santo-bot
            </Command.Item>
            <Command.Item
              value="download cv resume"
              onSelect={() => run(() => window.open(profile.resumeUrl, "_blank"))}
              className={itemClass}
            >
              <Download size={15} className="text-fg-faint" />
              Download CV
            </Command.Item>
            <Command.Item
              value="email contact copy"
              onSelect={() => run(() => navigator.clipboard?.writeText(profile.email))}
              className={itemClass}
            >
              <Mail size={15} className="text-fg-faint" />
              Copy email address
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Links"
            className="px-2 pb-1 pt-3 font-mono text-[10px] uppercase tracking-widest text-fg-faint [&_[cmdk-group-items]]:mt-1"
          >
            {profile.social.map((s) => (
              <Command.Item
                key={s.label}
                value={s.label}
                onSelect={() => run(() => window.open(s.url, "_blank", "noopener"))}
                className={itemClass}
              >
                <ArrowUpRight size={15} className="text-fg-faint" />
                {s.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  )
}
