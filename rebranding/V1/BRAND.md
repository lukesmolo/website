# Panka Brand Book — V1 "Amber"

> STATUS: swapped out on 2026-07-22 while [V2 "Terra"](../V2/BRAND.md) is evaluated in-app.
> Ready-to-install app assets for this variant are archived in `generated/` (copy over
> `assets/` + `public/icon.png`); to restore the V1 theme, apply §3 below to
> `src/theme/index.tsx` and the config values listed there.

Panka ("panchina" — the bench) is a fantasy team management app. The mark is a lowercase
**k drawn as a bench/chair** seen from the side; in the wordmark the amber k breaks the
green "Pan_a". The brand voice is sporty, warm and grassroots — Sunday-league football,
not corporate SaaS.

---

## 1. Logo files (this directory)

| File | What it is | Use for |
|---|---|---|
| `Panka_Logo.svg` / `.png` | Full wordmark, green + amber k | Marketing, login hero, docs, store listings |
| `Panka_Logo_white.png`, `Panka_white.svg` | Wordmark, all paper-white `#F7F8F6` | On dark or photographic backgrounds |
| `Panka_Logo_black.png`, `Panka_Black.svg` | Wordmark, all ink `#1A1F1B` | On light backgrounds, print, mono contexts |
| `Logo_icon.svg` | k mark, flat amber `#F5A623` | Small flat-color contexts |
| `Logo_icon_Gradient.svg`, `Icon_gradient.png` | k mark, amber→green gradient | **The app icon / avatar mark** (primary icon form) |
| `Logo_icon_white.svg` | k mark, paper-white | Dark backgrounds, Android monochrome icon |
| `Logo_icon_Black.svg` | k mark, ink | Light backgrounds, favicons on paper, print |

Rules of thumb:
- Wordmark when there is horizontal room (≥ ~120 px wide); k icon when square/small.
- Clearspace: keep at least the width of the k's seat-leg free on all sides.
- Minimum sizes: icon 24 px, wordmark 90 px wide. Below that use the flat (non-gradient) icon.
- Never recolor, outline, rotate, or place the gradient mark on a busy photo.

### Gradient spec (V1)

Linear gradient, top-left → bottom-right (~37°):
`#F2B705` (sun amber, offset 0) → `#0C6F1E` (field green, offset 1).

---

## 2. Core palette

| Name | Hex | RGB | Source | Role |
|---|---|---|---|---|
| Panka Green | `#006A10` | 0,106,16 | wordmark letters | Brand identity color |
| Field Green | `#0C6F1E` | 12,111,30 | gradient stop | Success/live accents (light theme), gradient |
| Panka Amber | `#F5A623` | 245,166,35 | the k | **Primary action/accent color** |
| Sun Amber | `#F2B705` | 242,183,5 | gradient stop | Gradient only |
| Ink | `#1A1F1B` | 26,31,27 | black wordmark | Text on light, text **on amber fills**, dark surfaces |
| Paper | `#F7F8F6` | 247,248,246 | white wordmark | Light backgrounds, text on dark |

Ink and Paper are green-tinted neutrals — never substitute pure `#000` / `#FFF` for them
in brand surfaces (plain `#FFFFFF` remains the card color in the app's light theme).

### Derived UI ramp (accessibility)

| Name | Hex | Why it exists |
|---|---|---|
| Amber 600 | `#C68104` | Amber as text/icon on light surfaces (`#F5A623` on white is ~2:1 — too low) |
| Deep Orange | `#E8720C` (dark) / `#C2590C` (light) | Warning color, hue-separated from the amber primary |
| Live Green | `#2ECC71` | Success/live on dark surfaces (`#0C6F1E` is too dark on ink) |
| Ink surfaces | bg `#0B0F0C` · card `#161B17` · raised `#1E2520` | Green-tinted dark neutrals derived from Ink |
| Paper surfaces | bg `#EFF2EE` · card `#FFFFFF` · raised `#F1F4F0` | Green-tinted light neutrals derived from Paper |
| Green-gray text | `#8B9490` (dark) / `#6B7268` (light) | Secondary text on the tinted neutrals |

---

## 3. App theme mapping (`src/theme/index.tsx`)

| Token | Dark | Light |
|---|---|---|
| `background` | `#0B0F0C` | `#EFF2EE` |
| `card` | `#161B17` | `#FFFFFF` |
| `surfaceSecondary` | `#1E2520` | `#F1F4F0` |
| `text` | `#F7F8F6` (Paper) | `#1A1F1B` (Ink) |
| `textSecondary` | `#8B9490` | `#6B7268` |
| `primary` | `#F5A623` (Panka Amber) | `#C68104` (Amber 600) |
| `onPrimary` | `#1A1F1B` (Ink) | `#1A1F1B` (Ink) |
| `success` | `#2ECC71` | `#0C6F1E` (Field Green) |
| `warning` | `#E8720C` | `#C2590C` |
| `danger` | `#e74c3c` | `#e74c3c` |
| borders/overlays | white-alpha (unchanged) | black-alpha (unchanged) |

**`onPrimary` is the load-bearing rule of this variant**: anything sitting on a solid
`primary` (amber) fill — button labels, FAB icons, position tags — uses Ink, never white.
White stays only on `danger` fills. Rationale: white on amber is ~1.9:1 contrast;
Ink on amber is ~9:1.

Config surfaces carrying brand values: `app.json` (`backgroundColor #0B0F0C`,
`web.themeColor #F5A623`, adaptive-icon bg `#F7F8F6`, notification accent `#F5A623`),
`public/manifest.json`, `src/lib/pwa.ts` (theme-color meta).

---

## 4. Typography

- App UI: **Inter / Montserrat** (modern sans, see `.claude/rules/design.md` §2) —
  semi-bold headlines with slightly tight tracking, regular body.
- The wordmark is custom geometric-sans lettering — it is artwork, not a font.
  Never typeset "Panka" in a lookalike font next to the logo.

## 5. Accessibility quick table

| Pair | Contrast | Verdict |
|---|---|---|
| Ink on Amber `#1A1F1B` / `#F5A623` | ~9.0:1 | ✅ body text |
| Paper on Ink surfaces | ~15:1 | ✅ body text |
| Amber on dark bg `#F5A623` / `#0B0F0C` | ~8.5:1 | ✅ text/icons |
| Amber 600 on white `#C68104` / `#FFF` | ~3.2:1 | ✅ large/bold text, icons |
| White on Amber | ~1.9:1 | ❌ never |
| Field Green on white `#0C6F1E` / `#FFF` | ~7.4:1 | ✅ body text |

## 6. Do / Don't

- ✅ Amber is the *action* color; green is the *identity/live* color — keep the split.
- ✅ Use the gradient k only as the standalone mark (icons, avatar, splash).
- ❌ No white text on amber. No amber body text on white (use Amber 600).
- ❌ Don't reintroduce the old electric orange `#FF6B00` or blue-tinted grays (`#0A0E14` family).
- ❌ Don't mix V1 amber and V2 terracotta in the same surface.

## 7. Asset regeneration recipe

All app assets are generated from `Logo_icon_Gradient.svg` / `Logo_icon_white.svg`
(render at 2000 px, `-trim`, then fit to the target box):

```bash
rsvg-convert -w 2000 -h 2000 Logo_icon_Gradient.svg | magick - -trim +repage k.png
magick k.png -resize 430x430 -background none -gravity center -extent 500x500   assets/logo.png
magick k.png -resize 44x44   -background none -gravity center -extent 48x48    assets/favicon.png
magick -size 1024x1024 xc:'#F7F8F6' \( k.png -resize 580x580 \) -gravity center -composite -depth 8 assets/icon.png
magick k.png -resize 560x560 -background none -gravity center -extent 1024x1024 assets/splash-icon.png
magick k.png -resize 280x280 -background none -gravity center -extent 512x512   assets/android-icon-foreground.png
magick -size 512x512 xc:'#F7F8F6' assets/android-icon-background.png
rsvg-convert -w 2000 -h 2000 Logo_icon_white.svg | magick - -trim +repage -resize 260x260 \
  -background none -gravity center -extent 432x432 assets/android-icon-monochrome.png
cp assets/icon.png public/icon.png
```
