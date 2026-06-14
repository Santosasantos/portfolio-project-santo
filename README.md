# Md. Rabiul Islam Santo — Portfolio

Editorial-style portfolio for a Java Backend Engineer, built with Next.js and an optional Supabase content backend.

## Features

- **Refined editorial design** — Fraunces serif display, Archivo body, ink-on-paper palette, numbered sections
- **Supabase-backed content** — experience, projects, skills, education, and achievements load from Supabase, with an automatic fallback to local data when Supabase is not configured
- **Downloadable CV** — resume PDF served from `/Resume-Md-Rabiul-Islam-Santo.pdf`
- **Scroll-triggered reveals** — IntersectionObserver animations that respect `prefers-reduced-motion`
- **Always-current dates** — experience durations and the footer year are computed at render time (daily ISR)
- **Fully responsive** — including a proper mobile navigation menu

## Tech Stack

- **Framework**: Next.js 16 (App Router, React Server Components), React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Data**: Supabase (PostgREST via plain `fetch` — no SDK dependency) with local fallback
- **Deployment**: Vercel (+ Vercel Analytics)

## Project Structure

```
app/                      # Layout (fonts, metadata) + server-rendered page
components/portfolio/     # Nav, Hero, Metrics, Experience, Projects, Skills, Education, Contact, Reveal
lib/types.ts              # Shared content types
lib/data/portfolio-data.ts# Local content source (fallback + seed reference)
lib/supabase/             # Fetch-based PostgREST client + queries with fallback
supabase/schema.sql       # Tables + RLS public-read policies
supabase/seed.sql         # Seed data matching the local content
```

## Getting Started

```bash
pnpm install
pnpm dev
```

The site works out of the box with local data — no environment variables required.

## Enabling Supabase

1. Create a project at [supabase.com/dashboard](https://supabase.com/dashboard)
2. In the SQL Editor, run `supabase/schema.sql`, then `supabase/seed.sql`
3. Copy `.env.example` to `.env.local` and fill in the values from **Project Settings → API**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Restart the dev server

Content edits made in Supabase appear within an hour (fetches revalidate every 3600s) without a redeploy. If Supabase is unreachable, the site silently falls back to `lib/data/portfolio-data.ts`.

## Updating the CV

Replace `public/Resume-Md-Rabiul-Islam-Santo.pdf` (and keep the filename, or update `resumeUrl` in the profile data/table).
