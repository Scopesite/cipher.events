# Cipher Events

Website for **Cipher Events** — underground party nights, bar takeovers, and
club events across Somerset, Bristol and Bath. Women-centred. LGBTQ+ friendly.
A safe space, run properly.

Live at **[cipher.events](https://cipher.events)**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (scroll reveals)
- Google Fonts: Roboto (headings) + Zilla Slab (body)
- Resend (contact form) + Brevo (newsletter) — optional, wired via env vars

## Local development

```bash
npm install
cp .env.example .env.local   # fill in as needed
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used in metadata + sitemap) |
| `CONTACT_EMAIL` | Destination address for contact form submissions |
| `RESEND_API_KEY` | Resend API key for transactional email |
| `BREVO_API_KEY` | Brevo API key for newsletter list subscription |
| `BREVO_LIST_ID` | Brevo list ID to subscribe new signups to |

If the contact/newsletter keys are missing in development the API routes
log the submission and return `{ ok: true }` so the forms stay testable.

## Adding content

- **Events** — add entries to the `upcomingEvents` array in
  `src/app/events/page.tsx` using the `EventCard` prop shape. Drop cover
  images into `public/images/events/`.
- **Gallery** — drop images into `public/images/gallery/` and list them in
  the `images` array in `src/app/gallery/page.tsx`.
- **Schema** — `src/lib/schema.tsx` contains an `eventSchema()` helper for
  per-event JSON-LD (example usage commented inline).

## Brand

- Cipher Pink `#FF50C0`
- Cipher Orange `#EF5E27`
- Granite background `#1C1C1C`
- Surface `#252525`
- Soft grey `#B0B0B0`

Pink is for headings, CTAs, and decorative elements only — never for body
text (WCAG 2.2: pink on granite only passes at large sizes).

Logos live in `public/images/logo/`. Prefer the SVG versions.

## Deploy

Designed for Vercel. Push to `main` and point the `cipher.events` domain at
the project in Vercel's dashboard.
