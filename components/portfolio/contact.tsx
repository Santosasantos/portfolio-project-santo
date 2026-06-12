import { ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import type { Profile } from "@/lib/types"

export function ContactSection({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm tracking-widest text-accent">05 — Contact</p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Let&apos;s build systems <span className="italic text-ink-soft">that last.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Open to backend engineering roles and meaningful collaborations. {profile.availability}.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-widest text-paper transition-colors hover:bg-accent"
            >
              <Mail size={15} />
              {profile.email}
            </a>
            {profile.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 border border-ink px-5 py-3.5 font-mono text-[13px] uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                {s.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-[12px] tracking-wider text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            {profile.location} · {profile.phone}
          </p>
        </div>
      </div>
    </footer>
  )
}
