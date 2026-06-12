"use client"

import Image from "next/image"
import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { useTypewriter } from "@/hooks/use-typewriter"
import type { Profile } from "@/lib/types"

export function Hero({ profile }: { profile: Profile }) {
  const animatedRole = useTypewriter(profile.roles, 80, 2500)
  // Break the name across two lines at its midpoint for the editorial display treatment
  const words = profile.name.split(" ")
  const mid = Math.ceil(words.length / 2)
  const lineOne = words.slice(0, mid).join(" ")
  const lineTwo = words.slice(mid).join(" ")

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <div className="grid items-start gap-14 lg:grid-cols-12">
        {/* Left — name and intro */}
        <Reveal className="lg:col-span-7">
          <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest text-accent">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            {profile.availability}
          </p>

          <h1 className="mt-8 font-display text-6xl font-medium leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            {lineOne}
            {lineTwo && (
              <>
                <br />
                <span className="italic text-ink-soft">{lineTwo}</span>
              </>
            )}
          </h1>

          <div className="mt-8 flex h-8 items-baseline gap-3 border-l-2 border-accent pl-4">
            <span className="font-mono text-sm text-ink sm:text-base">
              {animatedRole}
              <span className="animate-blink text-accent">_</span>
            </span>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">{profile.summary}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-widest text-paper transition-colors hover:bg-accent"
            >
              <ArrowDownToLine size={15} />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 border border-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Mail size={15} />
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-6">
            {profile.social.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-ink-soft transition-colors hover:text-accent"
              >
                {s.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right — portrait */}
        <Reveal delay={150} className="lg:col-span-5">
          <figure className="group relative ml-auto max-w-sm">
            <div className="absolute -inset-3 border border-rule-strong/50 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/santo-portofolio.png"
                alt="Md. Rabiul Islam Santo — Java Backend Engineer"
                fill
                priority
                quality={95}
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
