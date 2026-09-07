# Portfolio — Areesh Ali Abdullah

A multi-page personal portfolio for a software engineer working at the
intersection of **AI, infrastructure, and cloud**. Editorial "soft minimalism":
warm paper, warm ink, one clay accent, custom SVG illustrations and icons — no
component library, no icon pack.

**Live:** run locally (below) or deploy to Vercel.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript), server-first rendering
- **Tailwind CSS v4** mapped onto a hand-built warm design-token system
- `next/font` — Fraunces (display), Hanken Grotesk (body), JetBrains Mono
- Custom inline-SVG illustrations, icons, and soft architecture diagrams
- Full light/dark theming (system + manual toggle), `prefers-reduced-motion` aware
- Static generation (SSG) for every page, incl. per-project case studies

## Structure

```
src/
  app/            routes: home, work, work/[slug], about, lab, contact, 404
  components/     layout, ui primitives, illustrations, work index + case blocks
  content/        typed content — projects, about, site config, lab
  lib/            shared types
public/assets/    captured live-product cover screenshots
```

Content lives in `src/content/*` and is fully typed, so adding a project is a
data edit, not a layout change.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build (type-checks + SSG)
pnpm start    # serve the production build
```

## Branch protection

`main` is guarded by a ruleset that blocks force-pushes and branch deletion.
Normal commits and merges are unaffected. The repository admin can bypass.
