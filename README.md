# Gurfat Brand Kit (GitHub Pack)

This folder contains ready-to-use brand assets + CSS tokens for **Gurfat** (Bahrain-first, Hybrid **Tech × Luxury**).

## Quick Install (Website)
1) Copy `brand/brand.css` into your project.
2) Add this to your `<head>`:

```html
<link rel="stylesheet" href="./brand/brand.css">
```

3) Use the variables/classes:
- Primary button: `class="btn btn-primary"`
- Secondary button: `class="btn btn-secondary"`
- Card: `class="card"`
- CTA section: `class="gurfat-cta"`

## Colors
- Navy (primary): `#0B1F3B`
- Navy (depth): `#102A52`
- Soft background: `#F4F7FB`
- Muted text: `#5B6B82`
- Line/border: `#E6EDF6`
- Optional Bahrain red (sparingly): `#CE1126`
- Optional gold accent (sparingly): `#C9A227`

## Logo Files (assets/)
- `gurfat-logo-original.png` (full quality)
- `gurfat-logo-navy.png` (navy mono)
- `gurfat-logo-white.png` (white mono for dark backgrounds)
- Multiple sizes: `gurfat-logo-1024.png`, `512`, `256`, `128`, `64`
- Favicons: `favicon.ico`, `favicon-32.png`, `favicon-16.png`

### Add favicon
Put `favicon.ico` in your repo root (or keep in `assets/`) and add:

```html
<link rel="icon" href="./assets/favicon.ico" />
```

### Add logo in navbar
```html
<a class="brand" href="/">
  <img src="./assets/gurfat-logo-navy.png" alt="Gurfat" height="42" />
</a>
```

## Usage Rules (simple)
- Keep lots of white space.
- Use navy for primary actions.
- Use red/gold only as tiny accents (badges/dividers), not for big UI blocks.

---
Made for Bahrain-first launch. When you expand to GCC, keep the same navy system and add region-specific destination modules.
