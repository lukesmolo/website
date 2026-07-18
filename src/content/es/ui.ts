import type { UiContent } from '../types';

export const ui: UiContent = {
  languageName: 'Español',
  skipToContent: 'Saltar al contenido',
  nav: {
    howItWorks: 'Cómo funciona',
    why: 'Por qué Panka',
    faq: 'FAQ',
    contact: 'Contacto',
  },
  store: {
    download: 'Descarga la app',
    apple: { top: 'Descárgala en el', bottom: 'App Store' },
    google: { top: 'Disponible en', bottom: 'Google Play' },
    fallbackHint: 'La app está de camino a las stores: escríbenos y te avisamos nosotros.',
    stickyLabel: 'Panka es gratis durante la fase piloto',
  },
  langSwitcher: {
    label: 'Idioma',
  },
  langHint: {
    message: 'Esta web también está disponible en español.',
    cta: 'Ir a la versión en español',
    dismiss: 'No, gracias',
  },
  footer: {
    tagline: 'El fantasy del vestuario.',
    companyHeading: 'Panka',
    /* POR COMPLETAR: datos reales de la sociedad (en proceso de constitución) */
    companyLines: [
      'Panka S.r.l. — en proceso de constitución [POR COMPLETAR]',
      'Domicilio social: [POR COMPLETAR]',
      'NIF-IVA: [POR COMPLETAR]',
    ],
    linksHeading: 'Enlaces',
    privacy: 'Política de privacidad',
    cookiePolicy: 'Política de cookies',
    cookiePreferences: 'Preferencias de cookies',
    socialHeading: 'Síguenos',
    copyright: 'Todos los derechos reservados.',
  },
  cookieBanner: {
    title: 'Un balón, cero rastreos escondidos',
    description:
      'Usamos cookies para saber cómo va la web y para nuestras campañas. Las de estadística y marketing solo se activan si nos das el ok. Puedes cambiar de opinión cuando quieras.',
    acceptAll: 'Aceptar todas',
    rejectAll: 'Rechazar todas',
    managePreferences: 'Gestionar preferencias',
    savePreferences: 'Guardar preferencias',
    preferencesTitle: 'Preferencias de cookies',
    categories: {
      necessary: {
        title: 'Necesarias',
        description: 'Imprescindibles para que la web funcione (por ejemplo, recordar esta elección). No se pueden desactivar.',
      },
      analytics: {
        title: 'Estadística',
        description: 'Google Analytics 4, para saber cuánta gente visita la web y qué funciona. Datos agregados.',
      },
      marketing: {
        title: 'Marketing',
        description: 'Meta Pixel, para medir nuestras campañas en Instagram y Facebook.',
      },
    },
  },
  meta: {
    title: 'Panka — El fantasy del vestuario',
    description:
      'Panka es el fantasy donde alineas a tus compañeros de equipo de verdad: alineaciones, notas del míster y clasificación sobre vuestros partidos de fútbol 7 y fútbol 11.',
    ogAlt: 'Panka — el fantasy sobre tus partidos reales',
  },
};
