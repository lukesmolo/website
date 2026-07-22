# Panka Brand Book — V2 "Terra" (APPLIED — under evaluation)

> Applied to the app on 2026-07-22 (theme, assets, PWA config) for side-by-side evaluation
> against [V1 "Amber"](../V1/BRAND.md). Same mark and neutrals as V1, with the accent
> shifted from amber to **terracotta orange**. Generated app assets live in `generated/`;
> section 3 below is the token diff vs V1 (reverse it to go back).

Same identity as V1: the lowercase **k drawn as a bench**, green wordmark with the
accent-colored k. V2 trades the sunny amber for a warmer, earthier terracotta —
clay-court / brick-wall energy instead of sunshine.

---

## 1. Logo files (this directory)

Same inventory as V1, with terracotta in place of amber:

| File | What it is |
|---|---|
| `Panka_Logo.svg` / `.png` | Wordmark, green + terracotta k |
| `Panka_Logo_white.png`, `Panka_white.svg` | Wordmark, paper-white `#F7F8F6` |
| `Panka_Logo_black.png`, `Panka_Black.svg` | Wordmark, ink `#1A1F1B` |
| `Logo_icon.svg` / `Logo_icon.png` | k mark, flat terracotta `#D9622B` |
| `Logo_icon_Gradient.svg`, `Logo_icon_gradient.png` | k mark, green→terracotta gradient |
| `Logo_icon_white.svg` | k mark, paper-white |
| `Logo_icon_Black.svg` | k mark, ink |

Usage rules (clearspace, minimum sizes, no recoloring) are identical to V1 §1.

### Gradient spec (V2)

Linear gradient, top-left → bottom-right (~40°):
`#0C6F1E` (field green, offset 0) → `#D9622B` (terracotta, offset 0.9).
Note the direction of color is **reversed vs V1**: V2 leads with green and lands on terracotta.

---

## 2. Core palette

| Name | Hex | RGB | Source | Role |
|---|---|---|---|---|
| Panka Green | `#006A10` | 0,106,16 | wordmark letters | Brand identity color |
| Field Green | `#0C6F1E` | 12,111,30 | gradient stop | Success/live accents (light), gradient |
| Terracotta | `#D9622B` | 217,98,43 | the k | **Primary action/accent color** |
| Ink | `#1A1F1B` | 26,31,27 | black wordmark | Text on light, dark surfaces |
| Paper | `#F7F8F6` | 247,248,246 | white wordmark | Light backgrounds, text on dark |

### Derived UI ramp

| Name | Hex | Why it exists |
|---|---|---|
| Terracotta 600 | `#B54E1E` | Terracotta as text/icon on light surfaces (raw `#D9622B` on white is ~3.3:1) |
| Amber warning | `#f39c12` | Warning slot (system amber — V2 has no brand amber, and terracotta is taken by primary) |
| Live Green | `#2ECC71` | Success/live on dark surfaces |
| Ink surfaces | bg `#0B0F0C` · card `#161B17` · raised `#1E2520` | Shared with V1 |
| Paper surfaces | bg `#EFF2EE` · card `#FFFFFF` · raised `#F1F4F0` | Shared with V1 |
| Green-gray text | `#8B9490` (dark) / `#6B7268` (light) | Shared with V1 |

---

## 3. App theme mapping — diff vs V1

Neutrals, success, danger, borders: **identical to V1** (see V1 §3). To switch the app
to V2, change only these values in `src/theme/index.tsx` and regenerate assets from
this directory's SVGs (same recipe as V1 §7):

| Token | V1 (current) | V2 |
|---|---|---|
| `primary` (dark) | `#F5A623` | `#D9622B` |
| `primary` (light) | `#C68104` | `#B54E1E` |
| `primaryRgb` (dark) | `245,166,35` | `217,98,43` |
| `primaryRgb` (light) | `198,129,4` | `181,78,30` |
| `onPrimary` | `#1A1F1B` | `#F7F8F6` (Paper — terracotta is dark enough for light text: ~3.6:1 bold, or keep Ink at ~5.8:1 if preferred) |
| `warning` (dark) | `#E8720C` | `#f39c12` (amber slot frees up) |
| `warning` (light) | `#C2590C` | `#B87005` |
| `warningRgb` | `232,114,12` / `194,89,12` | `243,156,18` / `184,112,5` |

Config values to swap alongside: `app.json` `web.themeColor` + notification `color`
→ `#D9622B`; `public/manifest.json` `theme_color` → `#D9622B`; `src/lib/pwa.ts`
theme-color meta → `#D9622B`. Everything else (backgrounds, adaptive-icon paper bg)
stays as V1.

**Decision taken (2026-07-22)**: `onPrimary` = **Paper `#F7F8F6`** — the classic look,
matching the app's original white-on-orange identity. Trade-off: bold micro-text on primary
fills (position tags) sits at ~3.6:1; if that reads poorly in practice, flip `onPrimary`
to Ink `#1A1F1B` (~4.5:1) — it is a single token.

---

## 4–6. Typography, accessibility, do/don't

Identical to V1 §4–6, with these V2-specific contrast pairs:

| Pair | Contrast | Verdict |
|---|---|---|
| Terracotta on dark bg `#D9622B` / `#0B0F0C` | ~5.0:1 | ✅ text/icons |
| Paper on Terracotta | ~3.6:1 | ⚠️ large/bold only |
| Ink on Terracotta | ~5.8:1 | ✅ body text |
| Terracotta 600 on white `#B54E1E` / `#FFF` | ~4.6:1 | ✅ text/icons |

- ❌ Don't mix V2 terracotta with V1 amber in the same surface.
- ❌ V2 keeps the same bans: no electric orange `#FF6B00`, no blue-tinted grays.
