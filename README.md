# The Corporate Baklawa — Landing Page

Premium corporate-gifting landing page built per the PRD.

**Stack:** Next.js 15 (App Router) · TypeScript · plain CSS with custom properties (CSS Modules) · `next/font` · ImageKit CDN (plain `<img>` + `?tr=` transforms).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Adding images (ImageKit)

All image URLs and copy live in **`lib/data.ts`**. Every image field starts as an
empty string `""` and renders a branded placeholder until you paste a URL.
**Paste the full ImageKit URL only** — do **not** add `?tr=` params; the
`<IKImage>` component appends the correct per-device transform automatically.

| Slot in `lib/data.ts` | Count | What it is |
|---|---|---|
| `site.logo` | 1 | Color logo (light backgrounds) |
| `site.logoWhite` | 1 | White logo (hero navbar + footer) |
| `site.ogImage` | 1 | Social share image (1200×630) |
| `hero.backgroundImage` | 1 | Full-bleed hero lifestyle shot |
| `whoWeAre.image` | 1 | "Who We Are" lifestyle image |
| `collections[].products[].image` | 42 | 7 collections × 6 product photos |

Why-Choose-Us and Customization icons are inline SVGs (`components/icons.tsx`) — no image slots needed.

## Things to replace before launch

In `lib/data.ts → site`:
- `whatsappNumber` — international format, digits only (e.g. `9198XXXXXXXX`). Powers every WhatsApp link **and** the contact form (the form opens WhatsApp with details prefilled).
- `email`, `phoneDisplay` / `phoneHref`, `location`
- `social.instagram`, `social.linkedin`

Real stats/testimonials → `stats` in `lib/data.ts` (PRD §4.9 placeholders).

## Project layout

```
app/
  layout.tsx        fonts + SEO metadata
  page.tsx          assembles sections in PRD order
  globals.css       design tokens (colors, spacing, type, motion)
components/         one .tsx + .module.css per section
lib/data.ts         ALL copy + image slots  ← edit this
```
# TheCorporateBaklawa
# TheCorporateBaklawa
