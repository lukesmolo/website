import type { UiContent } from '../types';

export const ui: UiContent = {
  languageName: 'English',
  skipToContent: 'Skip to content',
  nav: {
    howItWorks: 'How it works',
    why: 'Why Panka',
    faq: 'FAQ',
    contact: 'Contact',
  },
  store: {
    download: 'Download the app',
    apple: { top: 'Download on the', bottom: 'App Store' },
    google: { top: 'Get it on', bottom: 'Google Play' },
    fallbackHint: 'The app is on its way to the stores — drop us a line and we will let you know.',
    stickyLabel: 'Panka is free during the pilot',
  },
  langSwitcher: {
    label: 'Language',
  },
  langHint: {
    message: 'This site is also available in English.',
    cta: 'Go to the English version',
    dismiss: 'No, thanks',
  },
  footer: {
    tagline: 'Fantasy football, straight from the locker room.',
    companyHeading: 'Panka',
    /* TO BE COMPLETED: real company details (company being incorporated) */
    companyLines: [
      'Panka S.r.l. — being incorporated [TO BE COMPLETED]',
      'Registered office: [TO BE COMPLETED]',
      'VAT: [TO BE COMPLETED]',
    ],
    linksHeading: 'Links',
    privacy: 'Privacy policy',
    cookiePolicy: 'Cookie policy',
    cookiePreferences: 'Cookie preferences',
    socialHeading: 'Follow us',
    copyright: 'All rights reserved.',
  },
  cookieBanner: {
    title: 'One ball, no hidden tracking',
    description:
      'We use cookies to understand how the site is doing and for our campaigns. Analytics and marketing cookies only run if you say yes. You can change your mind anytime.',
    acceptAll: 'Accept all',
    rejectAll: 'Reject all',
    managePreferences: 'Manage preferences',
    savePreferences: 'Save preferences',
    preferencesTitle: 'Cookie preferences',
    categories: {
      necessary: {
        title: 'Necessary',
        description: 'Required for the site to work (for example remembering this choice). They cannot be turned off.',
      },
      analytics: {
        title: 'Analytics',
        description: 'Google Analytics 4, to understand how many people visit the site and what works. Aggregated data.',
      },
      marketing: {
        title: 'Marketing',
        description: 'Meta Pixel, to measure our campaigns on Instagram and Facebook.',
      },
    },
  },
  meta: {
    title: 'Panka — Fantasy football from the locker room',
    description:
      'Panka is the fantasy game where you field your real teammates: lineups, coach ratings and a leaderboard built on your own seven-a-side and eleven-a-side matches.',
    ogAlt: 'Panka — fantasy football on your real matches',
  },
};
