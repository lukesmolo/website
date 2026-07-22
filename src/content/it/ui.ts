import type { UiContent } from '../types';

export const ui: UiContent = {
  languageName: 'Italiano',
  skipToContent: 'Salta al contenuto',
  nav: {
    howItWorks: 'Come funziona',
    why: 'Perché Panka',
    faq: 'FAQ',
    contact: 'Contatti',
  },
  store: {
    download: "Scarica l'app",
    apple: { top: 'Scarica su', bottom: 'App Store' },
    google: { top: 'Disponibile su', bottom: 'Google Play' },
    fallbackHint: 'L’app sta arrivando sugli store: intanto scrivici e ti avvisiamo noi.',
    stickyLabel: 'Panka è gratis in fase pilota',
  },
  langSwitcher: {
    label: 'Lingua',
  },
  langHint: {
    message: 'Questo sito è disponibile anche in italiano.',
    cta: 'Vai alla versione italiana',
    dismiss: 'No, grazie',
  },
  footer: {
    tagline: 'Il fanta da spogliatoio.',
    companyHeading: 'Panka',
    /* Numero REA: da aggiungere qui quando disponibile */
    companyLines: [
      'Panka S.r.l.',
      'Viale Aldo Moro 16 — 40127 Bologna',
      'P.IVA e C.F. 04398091209',
      'Capitale sociale € 10.000 i.v.',
    ],
    linksHeading: 'Link utili',
    privacy: 'Privacy policy',
    cookiePolicy: 'Cookie policy',
    cookiePreferences: 'Preferenze cookie',
    socialHeading: 'Seguici',
    copyright: 'Tutti i diritti riservati. Fatto con ❤️ a Bologna.',
  },
  cookieBanner: {
    title: 'Un pallone, zero tracciamenti nascosti',
    description:
      'Usiamo i cookie per capire come va il sito e per le nostre campagne. Quelli statistici e di marketing partono solo se ci dai l’ok. Puoi cambiare idea quando vuoi.',
    acceptAll: 'Accetta tutti',
    rejectAll: 'Rifiuta tutti',
    managePreferences: 'Gestisci preferenze',
    savePreferences: 'Salva preferenze',
    preferencesTitle: 'Preferenze cookie',
    categories: {
      necessary: {
        title: 'Necessari',
        description: 'Servono al funzionamento del sito (per esempio ricordare questa scelta). Non si possono disattivare.',
      },
      analytics: {
        title: 'Statistiche',
        description: 'Google Analytics 4, per capire quante persone visitano il sito e cosa funziona. Dati aggregati.',
      },
      marketing: {
        title: 'Marketing',
        description: 'Meta Pixel, per misurare le nostre campagne su Instagram e Facebook.',
      },
    },
  },
  meta: {
    title: 'Panka — Il fanta da spogliatoio',
    description:
      'Panka è il fanta dove schieri i tuoi compagni di squadra, quelli veri: formazioni, voti del mister e classifica sulle vostre partite di calcio a 7 e a 11.',
    ogAlt: 'Panka — il fanta sulle tue partite reali',
  },
};
