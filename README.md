# Panka — sito vetrina

Landing page di **Panka**, il fanta da spogliatoio. Statica, multilingua
(IT/EN/ES), costruita con [Astro](https://astro.build) + Tailwind e pubblicata
su **Cloudflare Workers** con static assets.

## Setup locale

Serve **Node 22** ([nodejs.org](https://nodejs.org), oppure `nvm use 22`).
La prima volta, dalla cartella del progetto:

```bash
npm install
```

### Vedere il sito in locale

Ci sono tre modi, a seconda di cosa ti serve:

**1. Sviluppo con ricarica automatica** (il modo normale mentre si modifica):

```bash
npm run dev
```

Apri **http://localhost:4321** nel browser. Ogni modifica a contenuti,
stili o componenti si vede subito senza ricaricare. Le altre lingue sono su
`/en/` e `/es/`. (Il form contatti qui non invia davvero: serve il Worker,
vedi punto 3.)

**2. Anteprima del sito "vero"** (la build statica finale, come andrà online):

```bash
npm run serve
```

Fa la build in `dist/` e la serve su **http://localhost:4321**. Utile per un
controllo finale prima del deploy.

In alternativa `dist/` è un sito statico qualsiasi: puoi servirlo con
qualunque webserver, per esempio:

```bash
npm run build
npx serve dist                        # oppure:
python3 -m http.server 8000 -d dist   # http://localhost:8000
```

**3. Anteprima completa con il form contatti funzionante** (assets + Worker):

```bash
cp .dev.vars.example .dev.vars   # solo la prima volta, poi compila i valori
npm run build
npm run preview
```

Apri **http://localhost:8787**: è l'ambiente più fedele alla produzione
Cloudflare, incluso l'endpoint `/api/contact`.

Altri comandi utili:

```bash
npm run check      # typecheck (astro check)
```

## Dove si modificano i contenuti (anche senza essere sviluppatori)

Tutti i testi stanno in **`src/content/`**, un file per lingua e per area.
Basta aprire il file su GitHub, premere la matita, modificare il testo tra
virgolette e salvare (il deploy riparte da solo se il repo è collegato a
Cloudflare):

| File | Cosa contiene |
|---|---|
| `src/content/it/landing.ts` | Tutti i testi della pagina italiana: hero, come funziona, FAQ, testimonianze, form… |
| `src/content/it/ui.ts` | Testi di contorno: menu, footer, pulsanti store, cookie banner, meta SEO |
| `src/content/it/legal.ts` | Privacy e cookie policy (placeholder **DA COMPLETARE**) |
| `src/content/en/…`, `src/content/es/…` | Stessi file, in inglese e spagnolo |

Regole d'oro: non toccare i nomi a sinistra dei `:` (solo i testi tra
virgolette) e non cancellare le virgole. Se un testo contiene un apostrofo,
è già gestito: basta non cambiare le virgolette esterne.

**Screenshot dell'app**: vivono in `src/assets/screenshots/` e sono
referenziati per nome file nei contenuti (`dashboard.png`, `player-card.png`,
`onboarding.png`, `lineup.png`, `field-votes.png`). Per aggiornarne uno basta
sostituire il file con lo stesso nome. Se un file manca, il sito mostra un
placeholder pulito senza rompersi.

**Testimonianze**: in `landing.ts` ogni citazione ha campi opzionali `name`,
`team`, `avatar` (foto in `src/assets/testimonials/`). Quando ci saranno nomi
reali basta aggiungerli lì.

## Come cambiare palette e logo

Il brand è recente e cambierà: è previsto.

**Colori** — un solo file: **`src/styles/theme.css`**.

1. In cima al file c'è la "palette letterale" (i colori fisici: `--panka-night`,
   `--panka-orange`…). Cambia lì i valori esadecimali.
2. Sotto ci sono i nomi semantici (`--color-primary`, `--color-accent`,
   `--color-surface`…): i componenti usano solo questi. Se domani il brand
   diventa verde, cambi `--panka-orange` (o rimappi `--color-accent`) e tutto
   il sito si aggiorna. **Nessun componente contiene colori hardcoded.**

**Logo** — un solo file: **`src/assets/brand/logo-mark.svg`**.

1. Sostituisci quel file con il nuovo SVG (mantieni `fill="currentColor"` così
   il logo si adatta da solo a fondi chiari e scuri).
2. Il componente `<Logo />` lo usa ovunque: header, footer, placeholder.
3. Rigenera le favicon e l'immagine Open Graph in `public/` (`favicon.svg`,
   `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`,
   `og.png`) partendo dal nuovo SVG — vedi i comandi in
   `docs/rigenerare-icone.md`.

Il logo attuale è **provvisorio**: vettorializzato da `logo.jpg` fornito dal
team (l'originale è in `src/assets/brand/logo-original.jpg`).

## Come aggiungere una lingua

Esempio: francese (`fr`).

1. Duplica `src/content/it/` in `src/content/fr/` e traduci i tre file
   (ricrea i modi di dire, non tradurli alla lettera).
2. In `src/content/index.ts`: importa i tre moduli `fr`, aggiungili alla
   mappa `content`, aggiungi `'fr'` a `LOCALES` e a `OG_LOCALES`.
3. In `src/content/types.ts`: aggiungi `'fr'` al tipo `Locale`.
4. In `astro.config.mjs`: aggiungi `'fr'` a `i18n.locales` e alla mappa
   `sitemap.i18n.locales` (es. `fr: 'fr-FR'`).
5. Crea le pagine: duplica `src/pages/en/` in `src/pages/fr/` e nei tre file
   cambia `locale="en"` in `locale="fr"`.
6. `npm run build`: hreflang, sitemap e switcher lingua si aggiornano da soli.

## Sezioni attivabili/disattivabili

In **`src/config.ts`**:

- `FLAGS.comingSoon` — accende la sezione "Coming soon" (i contenuti vanno
  prima aggiunti in `landing.ts`, campo `comingSoon.items`, oggi vuoto e
  marcato DA COMPLETARE).
- `FLAGS.languageHint` — suggerimento lingua dismissibile (nessun redirect
  automatico).
- `STORE_LINKS` — i pulsanti store leggono gli URL dalle variabili d'ambiente
  `PUBLIC_APP_STORE_URL` / `PUBLIC_PLAY_STORE_URL`: finché sono vuoti, ogni
  pulsante di download porta al form contatti.

## Segreti e variabili

**Variabili pubbliche di build** (`.env` in locale, variabili di build su
Cloudflare — vedi `.env.example`): `SITE_URL`, `PUBLIC_APP_STORE_URL`,
`PUBLIC_PLAY_STORE_URL`, `PUBLIC_GA4_ID`, `PUBLIC_META_PIXEL_ID`,
`PUBLIC_TURNSTILE_SITE_KEY`, `PUBLIC_INSTAGRAM_URL`, `PUBLIC_FACEBOOK_URL`,
`PUBLIC_TIKTOK_URL`.

**Segreti del Worker** (mai nel repo — `wrangler secret put <NOME>`, in locale
`.dev.vars`):

| Segreto | A cosa serve |
|---|---|
| `SUPABASE_URL` | URL del progetto Supabase con la tabella `contacts` |
| `SUPABASE_SERVICE_ROLE_KEY` | Insert dei lead lato server (bypassa la RLS) |
| `RESEND_API_KEY` | Notifica email dei nuovi lead |
| `TURNSTILE_SECRET_KEY` | Verifica anti-bot del form |

Destinatario/mittente delle notifiche: `vars` in `wrangler.jsonc`
(`CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).

**Database**: esegui `db/schema.sql` nel SQL editor di Supabase. La tabella ha
RLS attiva e nessuna policy: la legge e la scrive solo il Worker con la
service key.

## Deploy

### Cloudflare Workers (principale)

Deploy manuale:

```bash
npm run build
npx wrangler deploy
```

Build automatiche e preview per branch (consigliato):

1. Dashboard Cloudflare → **Workers & Pages → Create → Workers → Import a
   repository** e collega questo repo GitHub.
2. Build command: `npm run build` — Deploy command: `npx wrangler deploy`.
3. Nelle impostazioni di build aggiungi le variabili `PUBLIC_*` e `SITE_URL`;
   i segreti con `wrangler secret put` (o dalla dashboard, tab Settings →
   Variables and Secrets del Worker).
4. Ogni push su `main` pubblica in produzione; ogni PR genera una **preview
   URL** dedicata.

Note Workers: `wrangler.jsonc` dichiara esplicitamente
`not_found_handling: "404-page"` (sui Workers non è automatico come su Pages) e
`run_worker_first: ["/api/*"]` così solo il form passa dal Worker e il resto
viaggia sul CDN.

### Docker / VPS (alternativa)

```bash
docker build -t panka-website .
docker run -p 8080:80 panka-website
```

Multi-stage (Node 22 → nginx:alpine) con `nginx.conf` già configurato
(cache immutabile per gli asset, gzip, 404). Occhio: in questo scenario il
Worker non c'è, quindi `/api/contact` va sostituito con un endpoint
equivalente.

## Analytics e consenso

GA4 + Meta Pixel si caricano **solo dopo consenso** dal cookie banner
(CookieConsent v3 di Osano, localizzato in tre lingue, rifiuto facile quanto
l'accettazione). Conversioni tracciate: click sui pulsanti store
(`store_click`, con store/posizione/lingua) e submit del form
(`generate_lead` / `Lead`, con lingua). Gli ID si impostano via
`PUBLIC_GA4_ID` e `PUBLIC_META_PIXEL_ID`: vuoti = spenti.

## Cose ancora da completare (marcate nel codice)

Cerca `DA COMPLETARE` nel repo:

- dati societari nel footer (S.r.l. in costituzione, sede, P.IVA);
- testi definitivi di privacy e cookie policy;
- contenuti della sezione "Coming soon";
- link social reali;
- URL degli store quando l'app sarà pubblicata.
