/**
 * Tipi condivisi da tutti i contenuti (it/en/es).
 * Ogni lingua fornisce gli stessi file con la stessa struttura:
 * aggiungere una lingua = duplicare una cartella e tradurre.
 */

export type Locale = 'it' | 'en' | 'es';

/** 'yes' | 'no' | 'admin' — 'admin' = disponibile solo per il ruolo admin */
export type RoleCapability = 'yes' | 'no' | 'admin';

export interface RolesTableRow {
  feature: string;
  player: RoleCapability;
  staff: RoleCapability;
}

export interface Testimonial {
  quote: string;
  /** Facoltativi: da riempire quando ci saranno nomi/foto reali */
  name?: string;
  team?: string;
  /** Percorso immagine dentro src/assets/, es. 'testimonials/mario.jpg' */
  avatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  body: string;
  screenshot: ScreenshotRef;
}

/**
 * Riferimento a uno screenshot dell'app.
 * `src` è il nome file dentro src/assets/screenshots/ (senza percorso).
 * Se il file non esiste il componente mostra un placeholder, senza rompersi.
 */
export interface ScreenshotRef {
  src: string;
  alt: string;
}

export interface LandingContent {
  hero: {
    headline: string;
    sub: string;
    cta: string;
    screenshot: ScreenshotRef;
  };
  intro: {
    title: string;
    body: string;
    screenshot: ScreenshotRef;
  };
  howItWorks: {
    title: string;
    steps: Step[];
  };
  why: {
    title: string;
    blocks: { title: string; body: string }[];
    photoAlt: string;
    roles: {
      title: string;
      intro: string;
      playerLabel: string;
      staffLabel: string;
      adminOnlyLabel: string;
      yesLabel: string;
      noLabel: string;
      rows: RolesTableRow[];
    };
  };
  audiences: {
    title: string;
    items: { title: string; body: string }[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  comingSoon: {
    title: string;
    /* DA COMPLETARE: sezione predisposta ma vuota; si attiva da src/config.ts */
    items: { title: string; body: string }[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  finalCta: {
    title: string;
    sub?: string;
  };
  contact: {
    title: string;
    intro: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      team: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    submit: string;
    sending: string;
    success: string;
    errorGeneric: string;
    errorValidation: {
      name: string;
      email: string;
      message: string;
    };
    privacyNote: string;
  };
}

export interface UiContent {
  /** Nome lingua mostrato nello switcher (es. "Italiano") */
  languageName: string;
  skipToContent: string;
  nav: {
    howItWorks: string;
    why: string;
    faq: string;
    contact: string;
  };
  store: {
    /** Etichetta CTA generica (hero, barra sticky) */
    download: string;
    apple: { top: string; bottom: string };
    google: { top: string; bottom: string };
    /** Mostrato come title/aria quando il link store non esiste ancora */
    fallbackHint: string;
    stickyLabel: string;
  };
  langSwitcher: {
    label: string;
  };
  /** Suggerimento lingua dismissibile (nessun redirect automatico):
   *  mostrato nella lingua del browser quando diversa da quella della pagina */
  langHint: {
    message: string;
    cta: string;
    dismiss: string;
  };
  footer: {
    tagline: string;
    companyHeading: string;
    /* DA COMPLETARE: dati societari reali (S.r.l. in costituzione) */
    companyLines: string[];
    linksHeading: string;
    privacy: string;
    cookiePolicy: string;
    cookiePreferences: string;
    socialHeading: string;
    copyright: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    acceptAll: string;
    rejectAll: string;
    managePreferences: string;
    savePreferences: string;
    categories: {
      necessary: { title: string; description: string };
      analytics: { title: string; description: string };
      marketing: { title: string; description: string };
    };
    preferencesTitle: string;
  };
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
}

export interface LegalContent {
  privacy: { title: string; updated: string; body: string[] };
  cookiePolicy: { title: string; updated: string; body: string[] };
  backHome: string;
}
