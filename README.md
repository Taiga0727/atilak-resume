# Atilak Modetad — résumé site

Live: <https://atilak-resume.vercel.app>

A one-page résumé with linked case studies, built as a static Next.js site. One typed data file drives every page; the layout works from phone to desktop, follows the system light or dark theme, and prints to two A4 pages.

## What it has

- **One source of truth.** [`content/profile.ts`](content/profile.ts) holds all content, typed by [`content/types.ts`](content/types.ts); pages and components only render it.
- **Résumé page.** Header with highlights, then publication, experience, projects, education, skills and awards. Each entry has metric chips, one or two bullets, a pipeline strip, tool chips and links to code or paper.
- **Case studies.** Stat tiles, before/after bars for metrics, step diagrams and plain-text sections for the entries that have one.
- **Print.** The *Print / Save PDF* button uses an A4 stylesheet: smaller base size, link URLs written out, space-hungry visuals hidden.
- **Social card.** [`app/opengraph-image.tsx`](app/opengraph-image.tsx) generates the preview image for shared links.

## Stack

Next.js 16 (App Router, statically prerendered) · React 19 · TypeScript · CSS Modules · local fonts through `next/font` · hosted on Vercel. The only client component is the print button.

## Structure

```
app/          routes (/, /publication/[slug], /experience/[slug], /projects/[slug]), global CSS, social card
components/   presentational components, each with its CSS Module
content/      profile.ts (the content) and types.ts (its schema)
public/       resume-v1.html, an earlier static version kept for reference
```

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
npm run lint
```

## Edit the content

Change [`content/profile.ts`](content/profile.ts). An entry takes `homeStats` (metric chips), `homeBullets` (one or two résumé bullets), `homeFlow` (pipeline strip labels), `stack` (tool chips), `links`, and, when `linked` is true, a `detail` page with `stats`, `metricsTable`, `sections` (each may carry a `flow` diagram) and `links`.
