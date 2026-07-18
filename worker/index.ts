/**
 * Worker Cloudflare: serve gli asset statici del sito e gestisce
 * POST /api/contact — validazione server-side, honeypot, verifica Turnstile,
 * insert su Supabase (tabella `contacts`, service key) e notifica via Resend.
 *
 * Segreti (wrangler secret put …): SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY,
 * RESEND_API_KEY, TURNSTILE_SECRET_KEY. Vedi .dev.vars.example.
 */

export interface Env {
  ASSETS: Fetcher;
  SUPABASE_URL?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  /** Mittente/destinatario delle notifiche email (vars in wrangler.jsonc) */
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  team?: unknown;
  message?: unknown;
  lang?: unknown;
  website?: unknown; // honeypot
  turnstileToken?: unknown;
}

const LANGS = new Set(['it', 'en', 'es']);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (body: object, status = 200): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });

function sanitize(value: unknown, maxLength: number): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // Honeypot compilato = bot: rispondiamo ok senza salvare nulla.
  if (sanitize(payload.website, 200) !== '') {
    return json({ ok: true });
  }

  // Validazione server-side: mai fidarsi del client.
  const name = sanitize(payload.name, 120);
  const email = sanitize(payload.email, 254);
  const team = sanitize(payload.team, 120);
  const message = sanitize(payload.message, 4000);
  const langRaw = sanitize(payload.lang, 5);
  const lang = LANGS.has(langRaw) ? langRaw : 'it';

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 2) {
    return json({ ok: false, error: 'validation' }, 422);
  }

  // Turnstile: obbligatorio quando la secret è configurata.
  if (env.TURNSTILE_SECRET_KEY) {
    const token = sanitize(payload.turnstileToken, 4096);
    const ip = request.headers.get('CF-Connecting-IP');
    if (!token || !(await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip))) {
      return json({ ok: false, error: 'turnstile' }, 403);
    }
  }

  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error('contact: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY non configurati');
    return json({ ok: false, error: 'server' }, 500);
  }

  // Insert su Supabase via REST (la service key bypassa la RLS).
  const insert = await fetch(`${env.SUPABASE_URL}/rest/v1/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      full_name: name,
      email,
      team_name: team || null,
      message,
      lang,
    }),
  });

  if (!insert.ok) {
    console.error('contact: insert Supabase fallito', insert.status, await insert.text());
    return json({ ok: false, error: 'server' }, 500);
  }

  // Notifica email al team via Resend. Se fallisce, il lead è comunque salvato:
  // non blocchiamo la risposta all'utente.
  if (env.RESEND_API_KEY && env.CONTACT_TO_EMAIL) {
    const subjects: Record<string, string> = {
      it: `Panka — nuova richiesta dal sito${team ? ` (${team})` : ''}`,
      en: `Panka — new website request${team ? ` (${team})` : ''}`,
      es: `Panka — nueva solicitud desde la web${team ? ` (${team})` : ''}`,
    };
    const escapeHtml = (s: string) =>
      s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
    const emailResult = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL ?? 'Panka <onboarding@resend.dev>',
        to: [env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: subjects[lang],
        html: [
          `<h2>${escapeHtml(subjects[lang])}</h2>`,
          `<p><strong>Nome:</strong> ${escapeHtml(name)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
          team ? `<p><strong>Squadra:</strong> ${escapeHtml(team)}</p>` : '',
          `<p><strong>Lingua:</strong> ${lang}</p>`,
          `<p><strong>Messaggio:</strong></p><p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>`,
        ].join(''),
      }),
    });
    if (!emailResult.ok) {
      console.error('contact: notifica Resend fallita', emailResult.status, await emailResult.text());
    }
  }

  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return json({ ok: false, error: 'method_not_allowed' }, 405);
      }
      return handleContact(request, env);
    }

    // Tutto il resto: asset statici del sito.
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
