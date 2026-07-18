import type { LegalContent } from '../types';

/* TO BE COMPLETED: final legal texts to be validated by a lawyer.
   These are structural placeholders. */
export const legal: LegalContent = {
  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated: [TO BE COMPLETED]',
    body: [
      '[TO BE COMPLETED] This page will describe how Panka processes personal data collected through the site: contact-form data (name, email, team name, message, language), purposes, legal basis, retention, data-subject rights and controller contacts.',
      '[TO BE COMPLETED] Data controller: Panka S.r.l. (being incorporated), registered office and contacts to be defined.',
      '[TO BE COMPLETED] Form data is stored on Supabase (EU) and used only to answer requests. No sale or transfer to third parties.',
    ],
  },
  cookiePolicy: {
    title: 'Cookie policy',
    updated: 'Last updated: [TO BE COMPLETED]',
    body: [
      '[TO BE COMPLETED] This page will list the cookies used by the site: strictly necessary cookies, analytics cookies (Google Analytics 4, only with consent) and marketing cookies (Meta Pixel, only with consent).',
      '[TO BE COMPLETED] Preferences can be changed at any time from the “Cookie preferences” link in the footer.',
    ],
  },
  backHome: 'Back to home',
};
