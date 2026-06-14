import { Reveal } from "@/components/portfolio/reveal"
import { CountUp } from "@/components/portfolio/count-up"
import type { Metric } from "@/lib/types"

export function Metrics({ metrics }: { metrics: Metric[] }) {
  return (
    <section className="border-y border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <Reveal
            key={metric.id}
            delay={i * 80}
            className={[
              "px-5 py-10 sm:px-8 border-line",
              i % 2 === 1 ? "border-l" : i > 0 ? "lg:border-l" : "",
              i >= 2 ? "border-t lg:border-t-0" : "",
            ].join(" ")}
          >
            <p className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl">
              <CountUp value={metric.value} />
            </p>
            <p className="mt-3 font-mono text-[12px] uppercase tracking-widest text-accent">{metric.label}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-fg-faint">{metric.context}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
