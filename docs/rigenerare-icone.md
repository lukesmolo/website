# Rigenerare favicon e immagine Open Graph dal logo

Quando cambia il logo (`src/assets/brand/logo-mark.svg`), rigenera le icone in
`public/` con ImageMagick (`magick`). Dalla radice del repo:

```bash
# 1. Varianti colorate del logo (arancio per le favicon, chiaro per iOS)
sed 's/fill="currentColor"/fill="#FF6B00"/' src/assets/brand/logo-mark.svg > /tmp/mark-accent.svg
sed 's/fill="currentColor"/fill="#F0F6FC"/' src/assets/brand/logo-mark.svg > /tmp/mark-light.svg

# 2. Favicon
cp /tmp/mark-accent.svg public/favicon.svg
magick -background none -density 96 /tmp/mark-accent.svg -resize 28x28 \
  -gravity center -extent 32x32 public/favicon.ico

# 3. Icone touch/manifest (sfondo scuro del brand)
magick -background '#0A0E14' -density 200 /tmp/mark-light.svg -resize 116x116 \
  -gravity center -extent 180x180 public/apple-touch-icon.png
magick -background '#0A0E14' -density 200 /tmp/mark-accent.svg -resize 124x124 \
  -gravity center -extent 192x192 public/icon-192.png
magick -background '#0A0E14' -density 300 /tmp/mark-accent.svg -resize 330x330 \
  -gravity center -extent 512x512 public/icon-512.png

# 4. Immagine Open Graph 1200x630 (logo + wordmark + tagline)
magick -size 1200x630 xc:'#0A0E14' \
  \( -background none -density 200 /tmp/mark-accent.svg -resize 220x244 \) -geometry +120+190 -composite \
  -density 72 \
  \( -background none -fill '#F0F6FC' -font Adwaita-Sans-ExtraBold-Italic -pointsize 120 label:'PANKA' \) -geometry +410+215 -composite \
  \( -background none -fill '#8B949E' -font Adwaita-Sans-Bold -pointsize 40 label:'Il fanta da spogliatoio.' \) -geometry +420+385 -composite \
  \( -size 1200x8 xc:'#FF6B00' \) -geometry +0+622 -composite \
  -depth 8 public/og.png
```

Note:

- Se cambiano i colori del brand, aggiorna gli esadecimali qui sopra insieme a
  `src/styles/theme.css`.
- `Adwaita-Sans-*` è il font usato sulla macchina di build originale: su
  un'altra macchina sostituiscilo con un sans-serif bold disponibile
  (`magick -list font` per vedere quelli installati).
