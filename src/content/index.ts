import type { LandingContent, LegalContent, Locale, UiContent } from './types';

import { landing as itLanding } from './it/landing';
import { ui as itUi } from './it/ui';
import { legal as itLegal } from './it/legal';
import { landing as enLanding } from './en/landing';
import { ui as enUi } from './en/ui';
import { legal as enLegal } from './en/legal';
import { landing as esLanding } from './es/landing';
import { ui as esUi } from './es/ui';
import { legal as esLegal } from './es/legal';

export interface SiteContent {
  landing: LandingContent;
  ui: UiContent;
  legal: LegalContent;
}

const content: Record<Locale, SiteContent> = {
  it: { landing: itLanding, ui: itUi, legal: itLegal },
  en: { landing: enLanding, ui: enUi, legal: enLegal },
  es: { landing: esLanding, ui: esUi, legal: esLegal },
};

export const LOCALES: Locale[] = ['it', 'en', 'es'];
export const DEFAULT_LOCALE: Locale = 'it';

/** OG locale per lingua (og:locale / og:locale:alternate) */
export const OG_LOCALES: Record<Locale, string> = {
  it: 'it_IT',
  en: 'en_GB',
  es: 'es_ES',
};

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

/** Prefisso URL della lingua: '' per l'italiano, '/en' e '/es' per le altre */
export function localePath(locale: Locale, path = '/'): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const clean = path.startsWith('/') ? path : `/${path}`;
  const joined = `${prefix}${clean === '/' ? '/' : clean}`;
  return joined === '' ? '/' : joined;
}
