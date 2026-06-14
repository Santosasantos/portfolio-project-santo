"use client"

import Image from "next/image"
import { useTypewriter } from "@/hooks/use-typewriter"

/**
 * Hero portrait as a live engineer "avatar": the photo masked into a circle,
 * phosphor-duotone, wrapped in counter-rotating orbit rings with an orbiting
 * node, a floating LIVE chip, a role pill, and a typed status line. Reveals
 * full colour on hover. Motion is disabled under prefers-reduced-motion.
 */
export function HeroPortrait({ location, src }: { location: string; src: string }) {
  const status = useTypewriter(
    ["status: online", "stack: java · spring · angular", "build: passing", `loc: ${location}`],
    55,
    2200,
  )

  return (
    <div className="avatar-in mx-auto flex max-w-sm flex-col items-center lg:mt-12">
      <div className="group relative aspect-square w-64 sm:w-72 lg:w-80">
        {/* Phosphor glow */}
        <div aria-hidden className="absolute -inset-6 -z-10 rounded-full bg-accent-soft blur-3xl" />

        {/* Static guide ring */}
        <div aria-hidden className="absolute -inset-3 rounded-full border border-line" />

        {/* Outer rotating arc + orbiting node */}
        <div aria-hidden className="orbit-ring absolute -inset-3 rounded-full border-2 border-transparent border-t-accent/80 border-r-accent/20" />
        <div aria-hidden className="orbit-ring absolute -inset-3">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_var(--accent-dim)]" />
        </div>

        {/* Inner dashed counter-ring */}
        <div aria-hidden className="orbit-ring-rev absolute inset-1 rounded-full border border-dashed border-line-strong/50" />

        {/* The avatar */}
        <div className="absolute inset-2 overflow-hidden rounded-full border border-line-strong bg-surface">
          <Image
            src={src}
            alt="Md. Rabiul Islam Santo — Java Full Stack Engineer"
            fill
            priority
            quality={95}
            sizes="(min-width: 1024px) 320px, 256px"
            className="scale-110 object-cover object-[50%_22%] grayscale contrast-[1.05] transition-all duration-700 group-hover:scale-[1.18] group-hover:grayscale-0 group-hover:contrast-100"
          />
          {/* Phosphor duotone — fades on hover */}
          <div aria-hidden className="absolute inset-0 bg-accent opacity-40 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
          {/* Base depth + scanner + CRT lines */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <div aria-hidden className="scan-beam" />
          <div aria-hidden className="scanlines absolute inset-0 opacity-50 transition-opacity duration-700 group-hover:opacity-15" />
        </div>

        {/* Floating LIVE chip */}
        <div
          aria-hidden
          className="avatar-float absolute -right-1 top-6 flex items-center gap-1.5 rounded-full border border-line bg-surface/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-accent backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          live
        </div>

        {/* Role pill anchored to the base */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/50 bg-surface px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent shadow-[0_8px_24px_-8px_var(--accent-dim)]">
          Java Full Stack Engineer
        </div>
      </div>

      {/* Typed status line */}
      <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-fg-faint">
        <span className="mr-1 text-accent">$</span>
        {status}
        <span className="animate-blink text-accent">▌</span>
      </p>
    </div>
  )
}
