import { ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import type { Profile } from "@/lib/types"

export function ContactSection({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
        <Reveal>
          <p className="font-mono text-sm tracking-widest text-accent">{"/* 05 — Contact */"}</p>
          <h2 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-fg sm:text-6xl">
            Let&apos;s build systems <span className="text-accent">that last.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-soft">
            Open to full-stack and backend engineering roles and meaningful collaborations. {profile.availability}.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:shadow-[0_0_32px_-4px_var(--accent-dim)]"
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
                className="flex items-center gap-1.5 border border-line px-5 py-3.5 font-mono text-[13px] uppercase tracking-widest text-fg transition-colors hover:border-accent hover:text-accent"
              >
                {s.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Giant sign-off — outlined name cropped by the footer rule */}
      <div aria-hidden className="select-none overflow-hidden">
        <p className="text-ghost-outline -mb-[0.22em] text-center font-display text-[clamp(5rem,19vw,17rem)] font-extrabold uppercase leading-none tracking-tight">
          {profile.name.split(" ").pop()}
        </p>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-[12px] tracking-wider text-fg-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
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
