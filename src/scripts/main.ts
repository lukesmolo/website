/**
 * Unico bundle JS del sito. Fa tre cose, tutte leggere:
 * 1. Cookie banner (CookieConsent v3) + caricamento consenso-gated di GA4 e
 *    Meta Pixel, con eventi di conversione (click store + submit form).
 * 2. Cambio lingua che conserva la sezione corrente (ancora).
 * 3. Suggerimento lingua dismissibile (nessun redirect automatico).
 *
 * La configurazione localizzata arriva dal JSON inline #site-config.
 */
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

interface BannerText {
  title: string;
  description: string;
  acceptAll: string;
  rejectAll: string;
  managePreferences: string;
  savePreferences: string;
  preferencesTitle: string;
  categories: Record<'necessary' | 'analytics' | 'marketing', { title: string; description: string }>;
}

interface SiteConfig {
  locale: string;
  ga4Id: string;
  metaPixelId: string;
  banner: BannerText;
  langHint: Record<string, { message: string; cta: string; dismiss: string; href: string }> | null;
  privacyHref: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean };
    _fbq?: unknown;
  }
}

const configEl = document.getElementById('site-config');
const config: SiteConfig | null = configEl?.textContent ? JSON.parse(configEl.textContent) : null;

/* ------------------------------------------------------------------ */
/* Analytics, caricati SOLO dopo consenso                              */
/* ------------------------------------------------------------------ */

let gaLoaded = false;
function loadGa4(): void {
  if (gaLoaded || !config?.ga4Id) return;
  gaLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', config.ga4Id, { anonymize_ip: true, language: config.locale });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.ga4Id)}`;
  document.head.appendChild(s);
}

let pixelLoaded = false;
function loadMetaPixel(): void {
  if (pixelLoaded || !config?.metaPixelId) return;
  pixelLoaded = true;
  const fbq: NonNullable<Window['fbq']> = (...args: unknown[]) => {
    (fbq.queue = fbq.queue || []).push(args);
  };
  window.fbq = window.fbq || fbq;
  window._fbq = window.fbq;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);
  window.fbq('init', config.metaPixelId);
  window.fbq('track', 'PageView');
}

function applyConsent(): void {
  if (CookieConsent.acceptedCategory('analytics')) loadGa4();
  if (CookieConsent.acceptedCategory('marketing')) loadMetaPixel();
}

if (config) {
  const b = config.banner;
  CookieConsent.run({
    guiOptions: {
      consentModal: { layout: 'box', position: 'bottom center', equalWeightButtons: true },
      preferencesModal: { layout: 'box' },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: {},
      marketing: {},
    },
    language: {
      default: config.locale,
      translations: {
        [config.locale]: {
          consentModal: {
            title: b.title,
            description: b.description,
            acceptAllBtn: b.acceptAll,
            acceptNecessaryBtn: b.rejectAll,
            showPreferencesBtn: b.managePreferences,
          },
          preferencesModal: {
            title: b.preferencesTitle,
            acceptAllBtn: b.acceptAll,
            acceptNecessaryBtn: b.rejectAll,
            savePreferencesBtn: b.savePreferences,
            closeIconLabel: '✕',
            sections: [
              {
                title: b.categories.necessary.title,
                description: b.categories.necessary.description,
                linkedCategory: 'necessary',
              },
              {
                title: b.categories.analytics.title,
                description: b.categories.analytics.description,
                linkedCategory: 'analytics',
              },
              {
                title: b.categories.marketing.title,
                description: b.categories.marketing.description,
                linkedCategory: 'marketing',
              },
            ],
          },
        },
      },
    },
    onConsent: applyConsent,
    onChange: applyConsent,
  });
}

/* ------------------------------------------------------------------ */
/* Conversioni: click sui pulsanti store + lead dal form               */
/* ------------------------------------------------------------------ */

document.addEventListener('click', (event) => {
  const target = (event.target as HTMLElement).closest<HTMLElement>('.js-store-cta');
  if (!target || !config) return;
  const params = {
    store: target.dataset.store ?? 'unknown',
    placement: target.dataset.storeLocation ?? 'unknown',
    store_live: target.dataset.storeLive ?? 'false',
    lang: config.locale,
  };
  window.gtag?.('event', 'store_click', params);
  window.fbq?.('trackCustom', 'StoreClick', params);
});

document.addEventListener('panka:lead', () => {
  if (!config) return;
  window.gtag?.('event', 'generate_lead', { lang: config.locale });
  window.fbq?.('track', 'Lead', { lang: config.locale });
});

/* ------------------------------------------------------------------ */
/* Cambio lingua conservando la sezione corrente                       */
/* ------------------------------------------------------------------ */

document.addEventListener('click', (event) => {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[data-lang-link]');
  if (!link || !location.hash) return;
  event.preventDefault();
  location.href = link.getAttribute('href') + location.hash;
});

/* ------------------------------------------------------------------ */
/* Suggerimento lingua dismissibile                                    */
/* ------------------------------------------------------------------ */

const HINT_KEY = 'panka-lang-hint-dismissed';
try {
  const hints = config?.langHint;
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  if (
    hints &&
    browserLang !== config.locale &&
    hints[browserLang] &&
    !localStorage.getItem(HINT_KEY)
  ) {
    const hint = hints[browserLang];
    const bar = document.createElement('div');
    bar.className = 'lang-hint';
    bar.setAttribute('role', 'status');

    const text = document.createElement('span');
    text.textContent = hint.message;

    const go = document.createElement('a');
    go.href = hint.href;
    go.textContent = hint.cta;

    const dismiss = document.createElement('button');
    dismiss.type = 'button';
    dismiss.textContent = hint.dismiss;
    dismiss.addEventListener('click', () => {
      localStorage.setItem(HINT_KEY, '1');
      bar.remove();
    });

    bar.append(text, go, dismiss);
    document.body.appendChild(bar);
  }
} catch {
  /* localStorage non disponibile: nessun suggerimento */
}
