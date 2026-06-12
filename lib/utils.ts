import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const MONTH_YEAR = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" })

/** "Sep 2024 — Present" or "Apr 2024 — Sep 2024" */
export function formatPeriod(startDate: string, endDate: string | null): string {
  const start = MONTH_YEAR.format(new Date(startDate))
  const end = endDate ? MONTH_YEAR.format(new Date(endDate)) : "Present"
  return `${start} — ${end}`
}

/** Duration computed at render time so it never goes stale: "1 yr 9 mos" */
export function formatDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const months = Math.max(
    1,
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()),
  )
  const years = Math.floor(months / 12)
  const rest = months % 12
  const parts: string[] = []
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`)
  if (rest > 0) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`)
  return parts.join(" ")
}
