// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL pubblico del sito. Sovrascrivibile con la variabile d'ambiente SITE_URL
// (usata in build per sitemap, canonical, hreflang e Open Graph).
const SITE_URL = process.env.SITE_URL ?? 'https://panka.app';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it-IT',
          en: 'en-GB',
          es: 'es-ES',
        },
      },
    }),
  ],
  image: {
    // Gli screenshot dell'app sono PNG grandi: serviamo AVIF/WebP responsive.
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
