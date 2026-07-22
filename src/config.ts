/**
 * Configurazione del sito — tutto ciò che può cambiare senza toccare i
 * componenti: link degli store, flag delle sezioni, ID analytics, social.
 *
 * I valori PUBLIC_* arrivano dalle variabili d'ambiente in fase di build
 * (file .env in locale, variabili di build su Cloudflare).
 */

/** Link agli store. Lasciare '' finché l'app non è pubblicata:
 *  i pulsanti ricadono automaticamente sul form contatti. */
export const STORE_LINKS = {
  appStore: import.meta.env.PUBLIC_APP_STORE_URL ?? '',
  playStore: import.meta.env.PUBLIC_PLAY_STORE_URL ?? '',
} as const;

/** Flag per accendere/spegnere intere sezioni senza cancellarle. */
export const FLAGS = {
  /** Sezione "Coming soon" con le funzioni in sviluppo */
  comingSoon: true,
  /** Suggerimento lingua dismissibile (nessun redirect automatico) */
  languageHint: true,
} as const;

/** Analytics — caricati SOLO dopo consenso esplicito (cookie banner). */
export const ANALYTICS = {
  ga4Id: import.meta.env.PUBLIC_GA4_ID ?? '',
  metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID ?? '',
} as const;

/** Cloudflare Turnstile (anti-bot del form). Vuoto = widget disattivato. */
export const TURNSTILE_SITE_KEY = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? '';

/** Endpoint del form contatti (gestito dal Worker, stesso dominio). */
export const CONTACT_ENDPOINT = '/api/contact';

/** Social — lasciare '' per nascondere l'icona corrispondente. */
export const SOCIAL_LINKS = {
  instagram: import.meta.env.PUBLIC_INSTAGRAM_URL ?? '',
  facebook: import.meta.env.PUBLIC_FACEBOOK_URL ?? '',
  tiktok: import.meta.env.PUBLIC_TIKTOK_URL ?? '',
} as const;
