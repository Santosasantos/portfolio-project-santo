/**
 * Decorative scrolling strip of technology keywords. Purely visual — the
 * skills section carries the accessible version — so the whole strip is
 * aria-hidden. CSS-only marquee; pauses on hover and under reduced motion.
 */
export function Ticker({ items }: { items: string[] }) {
  return (
    <div aria-hidden className="ticker overflow-hidden border-b border-line py-3.5">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center font-mono text-[12px] uppercase tracking-widest text-fg-soft"
              >
                <span className="px-5">{item}</span>
                <span className="text-[10px] text-accent">{"//"}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
