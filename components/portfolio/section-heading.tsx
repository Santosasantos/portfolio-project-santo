import { Reveal } from "@/components/portfolio/reveal"

interface SectionHeadingProps {
  number: string
  title: string
  subtitle?: string
}

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 sm:gap-6">
        <span className="font-mono text-sm text-accent tracking-widest">{number}</span>
        <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink shrink-0">
          {title}
        </h2>
        <div className="h-px flex-1 bg-rule-strong/60 translate-y-[-0.4em] hidden sm:block" />
      </div>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed sm:pl-16">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
