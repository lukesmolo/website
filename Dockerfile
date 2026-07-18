# ============================================================================
# Build alternativo per VPS/Portainer (il deploy principale è su Cloudflare
# Workers, vedi wrangler.jsonc). Multi-stage: build Node -> nginx:alpine.
# NOTA: in questo scenario il form contatti (/api/contact) non ha il Worker;
# servirà un endpoint equivalente o un servizio esterno.
# ============================================================================

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# Le variabili PUBLIC_* e SITE_URL si passano con --build-arg
ARG SITE_URL
ARG PUBLIC_GA4_ID
ARG PUBLIC_META_PIXEL_ID
ARG PUBLIC_TURNSTILE_SITE_KEY
ARG PUBLIC_APP_STORE_URL
ARG PUBLIC_PLAY_STORE_URL
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -q --spider http://localhost/ || exit 1
