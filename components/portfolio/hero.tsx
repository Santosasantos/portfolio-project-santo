"use client"

import Image from "next/image"
import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { HeroCanvas } from "@/components/portfolio/hero-canvas"
import { Magnetic } from "@/components/portfolio/magnetic"
import { TerminalWindow } from "@/components/portfolio/terminal-window"
import { useTypewriter } from "@/hooks/use-typewriter"
import type { Profile } from "@/lib/types"

export function Hero({ profile }: { profile: Profile }) {
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

        {/* Right — portrait framed as an editor preview window */}
        <Reveal delay={150} className="lg:col-span-5">
          <div className="group relative ml-auto max-w-sm">
            {/* Phosphor glow behind the window */}
            <div aria-hidden className="absolute -inset-5 -z-10 bg-accent-soft blur-3xl" />
            {/* HUD corner brackets */}
            <span aria-hidden className="absolute -left-4 -top-4 z-10 h-4 w-4 border-l-2 border-t-2 border-accent" />
            <span aria-hidden className="absolute -right-4 -top-4 z-10 h-4 w-4 border-r-2 border-t-2 border-accent" />
            <span aria-hidden className="absolute -bottom-4 -left-4 z-10 h-4 w-4 border-b-2 border-l-2 border-accent" />
            <span aria-hidden className="absolute -bottom-4 -right-4 z-10 h-4 w-4 border-b-2 border-r-2 border-accent" />

            <TerminalWindow title="~/assets/santo.png — preview" className="shadow-[0_24px_64px_-24px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/santo-portofolio.png"
                  alt="Md. Rabiul Islam Santo — Java Full Stack Engineer"
                  fill
                  priority
                  quality={95}
                  sizes="(min-width: 1024px) 384px, 100vw"
                  className="object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div aria-hidden className="scanlines absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-20" />
              </div>
              <div className="flex items-baseline justify-between border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-fg-faint">
                <span>{profile.location}</span>
                <span>{profile.phone}</span>
              </div>
            </TerminalWindow>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
