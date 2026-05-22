# Developer Guide

## Local Setup
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Core Scripts
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run start`

## Local Tooling
- Use `vercel` for Vercel environment, deployment, and log diagnostics.
- Use `pa11y` and Lighthouse for public-page accessibility and performance checks when page behavior or layout changes.
- Use `actionlint` after editing GitHub Actions workflows.
- Use `osv-scanner` for advisory checks across dependency manifests and lockfiles.

## Repo Structure
- `app/` routes, layouts, metadata, sitemap, robots, and API routes
- `components/` shared UI
- `content/` document-backed case study source material
- `lib/` data helpers and content loaders
- `public/` static assets
- `docs/` current system, deployment, and ops guidance

## Code Conventions
- TypeScript throughout.
- Tailwind utility-first styling.
- Prefer semantic HTML and accessible defaults.
- Keep route-level case study content stable unless content edits are explicitly requested.
- Use existing loaders/helpers before adding new content plumbing.

## Case Study Conventions
See `docs/SYSTEM_PUBLIC.md` for the current case-study content model. In short:
- MMH and TRBG use document-backed loaders and screenshot grouping helpers.
- MMS uses page-local long-form structure with supporting markdown files.
- MJR is intentionally page-local in `app/case-studies/mjr/page.tsx` because its source site is smaller and the content is service-site proof, not a full document set.

## Retired Guidance
Older rebuild docs referenced placeholder builds, `src/`, Sanity CMS, and Framer Motion. Those assumptions are no longer active and must not be used for implementation decisions. See `docs/MAINTAINER_GUIDE.md` for the current guardrails.
