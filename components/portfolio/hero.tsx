"use client"

import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { HeroCanvas } from "@/components/portfolio/hero-canvas"
import { HeroPortrait } from "@/components/portfolio/hero-portrait"
import { Magnetic } from "@/components/portfolio/magnetic"
import { useTypewriter } from "@/hooks/use-typewriter"
import type { Profile } from "@/lib/types"

export function Hero({ profile, avatarSrc }: { profile: Profile; avatarSrc: string }) {
  const animatedRole = useTypewriter(profile.roles, 80, 2500)
  // Break the name across two lines at its midpoint for the display treatment
  const words = profile.name.split(" ")
  const mid = Math.ceil(words.length / 2)
  const lineOne = words.slice(0, mid).join(" ")
  const lineTwo = words.slice(mid).join(" ")

  return (
    <section id="about" className="relative isolate mx-auto max-w-6xl overflow-x-clip px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
      {/* Cursor-reactive particle network — full-bleed backdrop behind the hero */}
      <HeroCanvas className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2" />

      {/* System status strip */}
      <Reveal>
        <div className="mb-12 flex items-baseline justify-between gap-4 border-y border-line py-2.5 font-mono text-[11px] uppercase tracking-widest text-fg-faint">
          <span>
            <span className="text-accent">~/</span>portfolio — v3.0
          </span>
          <span className="hidden md:inline">loc: {profile.location}</span>
          <span>
            sys.time: <span className="text-fg-soft">{new Date().getFullYear()}</span>
          </span>
        </div>
      </Reveal>

      <div className="grid items-start gap-14 lg:grid-cols-12">
        {/* Left — name and intro */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </p>

            <h1 className="mt-8 font-display text-5xl font-extrabold uppercase leading-[0.98] tracking-tight text-fg sm:text-7xl lg:text-8xl">
              {lineOne}
              {lineTwo && (
                <>
                  <br />
                  <span className="text-outline-fg">{lineTwo}</span>
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex h-8 items-baseline gap-3 border-l-2 border-accent pl-4">
              <span className="font-mono text-sm text-fg sm:text-base">
                <span className="mr-2 text-accent">$</span>
                {animatedRole}
                <span className="animate-blink text-accent">▌</span>
              </span>
            </div>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-soft">{profile.summary}</p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:shadow-[0_0_32px_-4px_var(--accent-dim)]"
                >
                  <ArrowDownToLine size={15} />
                  Download CV
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[13px] uppercase tracking-widest text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail size={15} />
                  Get in touch
                </a>
              </Magnetic>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
              {profile.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-fg-soft transition-colors hover:text-accent"
                >
                  {s.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — portrait as a live engineer "avatar" preview */}
        <Reveal delay={150} className="lg:col-span-5">
          <HeroPortrait location={profile.location} src={avatarSrc} />
        </Reveal>
      </div>
    </section>
  )
}
