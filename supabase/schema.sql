-- Portfolio schema for Supabase
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor), then run seed.sql.

create table if not exists profile (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text not null,
  roles text[] not null default '{}',
  summary text not null,
  email text not null,
  phone text not null,
  location text not null,
  availability text not null,
  resume_url text not null,
  social jsonb not null default '[]'
);

create table if not exists experiences (
  id text primary key,
  role text not null,
  company text not null,
  location text not null,
  start_date date not null,
  end_date date,
  highlights text[] not null default '{}',
  tech text[] not null default '{}',
  sort_order int not null default 0
);

create table if not exists projects (
  id text primary key,
  title text not null,
  tagline text not null,
  description text not null,
  impact text[] not null default '{}',
  tech text[] not null default '{}',
  github_url text,
  demo_url text,
  sort_order int not null default 0
);

create table if not exists skill_categories (
  id text primary key,
  title text not null,
  skills text[] not null default '{}',
  sort_order int not null default 0
);

create table if not exists education (
  id uuid primary key default gen_random_uuid(),
  degree text not null,
  institution text not null,
  location text not null,
  period text not null,
  gpa text not null
);

create table if not exists achievements (
  id text primary key,
  title text not null,
  issuer text not null,
  date text not null,
  sort_order int not null default 0
);

create table if not exists metrics (
  id text primary key,
  value text not null,
  label text not null,
  context text not null,
  sort_order int not null default 0
);

-- Public read-only access (the site only ever reads with the anon key)
alter table profile enable row level security;
alter table experiences enable row level security;
alter table projects enable row level security;
alter table skill_categories enable row level security;
alter table education enable row level security;
alter table achievements enable row level security;
alter table metrics enable row level security;

create policy "Public read" on profile for select using (true);
create policy "Public read" on experiences for select using (true);
create policy "Public read" on projects for select using (true);
create policy "Public read" on skill_categories for select using (true);
create policy "Public read" on education for select using (true);
create policy "Public read" on achievements for select using (true);
create policy "Public read" on metrics for select using (true);
