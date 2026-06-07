# Nathan Krop — Portfolio

Personal portfolio for Nathan Krop (PrinceBreezy / NatePrince) — Full-Stack Software Engineer, Media Creator & Writer.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Google Fonts

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add your photos (see below)

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Adding Your Photos

Place your two graduation photos in the `public/images/` folder:

```
public/
  images/
    graduation-1.jpg   ← Hero section (portrait, cap & orange stole)
    graduation-2.jpg   ← About section (holding diploma)
```

The `public/images/` directory is git-ignored by default. Add your actual photos there.

---

## Customising Content

All text, links, and data live in **one file**:

```
src/lib/data.ts
```

Edit that file to update:
- Personal info (name, email, GitHub, location)
- Stats
- Skills and categories
- Projects (title, description, tech tags, links)
- Creative / freelance items

---

## File Structure

```
src/
├── app/
│   ├── globals.css        ← Design tokens, base styles
│   ├── layout.tsx         ← Root layout + metadata
│   └── page.tsx           ← Page entry point
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Creative.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Cursor.tsx
│       ├── Navbar.tsx
│       └── Footer.tsx
└── lib/
    ├── data.ts            ← All site content (edit this)
    └── useReveal.ts       ← Scroll reveal hook
```

---

## Deploying to Vercel

```bash
# Push to GitHub, then connect repo on vercel.com
# Or use the CLI:
npx vercel
```

---

## Contact Form

The contact form currently opens a `mailto:` link as a fallback.  
To wire up a real backend, edit `src/components/sections/Contact.tsx` and replace the `handleSubmit` function with your preferred service:

- **Resend** (recommended for Next.js) — `resend.com`
- **EmailJS** — client-side, no backend needed
- **Formspree** — drop-in form endpoint

---

## Fonts

- **Cormorant Garamond** — display / headlines (editorial, luxury)
- **Space Mono** — labels, tags, metadata (terminal / technical)
- **Syne** — body, UI text (modern geometric)

All loaded via Google Fonts in `globals.css`.
