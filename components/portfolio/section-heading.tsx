import { Reveal } from "@/components/portfolio/reveal"

interface SectionHeadingProps {
  number: string
  title: string
  subtitle?: string
}

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="relative">
        {/* Oversized ghost numeral the heading overlaps */}
        <span
          aria-hidden
          className="text-ghost-outline pointer-events-none absolute -left-1 -top-4 select-none font-display text-8xl font-bold leading-none sm:-top-8 sm:text-[10rem]"
        >
          {number}
        </span>
        <div className="relative flex items-baseline gap-4 pt-14 sm:gap-6 sm:pt-24">
          <h2 className="shrink-0 font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            {title}
          </h2>
          <div className="hidden h-px flex-1 translate-y-[-0.4em] bg-line-strong/60 sm:block" />
          <span className="hidden shrink-0 font-mono text-[11px] tracking-widest text-accent sm:inline">
            {`/* ${number} */`}
          </span>
        </div>
      </div>
      {subtitle && (
        <p className="mt-4 max-w-2xl leading-relaxed text-fg-soft">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
