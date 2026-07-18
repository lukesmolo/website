-- ============================================================================
-- Panka website — tabella `contacts` (lead del form contatti)
-- Da eseguire nel SQL editor del progetto Supabase del sito.
-- Convenzioni coerenti con lo schema dell'app: uuid, timestamptz, RLS attiva.
-- ============================================================================

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 2 and 120),
  email text not null check (char_length(email) <= 254),
  team_name text check (team_name is null or char_length(team_name) <= 120),
  message text not null check (char_length(message) between 2 and 4000),
  -- Lingua di provenienza del lead (per campagne e risposta nella lingua giusta)
  lang text not null default 'it' check (lang in ('it', 'en', 'es')),
  source text not null default 'website',
  -- Gestione interna: contattato? note?
  handled_at timestamptz,
  notes text
);

comment on table public.contacts is
  'Lead dal form contatti del sito. Scrittura/lettura solo via service key (il Worker).';

create index if not exists contacts_created_at_idx on public.contacts (created_at desc);

-- RLS attiva e NESSUNA policy: né anon né authenticated possono leggere o
-- scrivere. Solo la service key (che bypassa la RLS) usata dal Worker.
alter table public.contacts enable row level security;
