# System Overview

## Purpose
JAMARQ Digital's primary brand site: authority, continuity, long-form thinking, and ongoing partnership.

## Current State
This is the production JAMARQ Digital site. It is not a placeholder build and there is no active Sanity CMS or Framer Motion migration plan.

## Tech Stack
- Next.js App Router (TypeScript)
- Tailwind CSS v4
- Hosting: Vercel
- Analytics: `@vercel/analytics`, `@vercel/speed-insights`
- Contact delivery: SendGrid via `app/api/contact/route.ts`
- Admin settings + structured public content records: Turso/libSQL via `@libsql/client`

## System Map
- Public pages: `app/**/page.tsx`
- Layout + global metadata: `app/layout.tsx`
- Global styling + tokens: `app/globals.css`
- Shared components: `components/*`
- Case study summaries/home cards + suite links: `lib/content-repository.ts`, seeded from `lib/caseStudySummaries.ts`
- Case study content conventions: `docs/SYSTEM_PUBLIC.md`
- Contact API: `app/api/contact/route.ts`
- Admin route: `app/admin`
- Admin DB helpers: `lib/admin-db.ts`, `lib/admin.ts`
- SEO infra: `app/robots.ts`, `app/sitemap.ts`, `next.config.ts`

## Public Routes
- `/` Home
- `/services`
- `/process`
- `/work`
- `/case-studies`
- `/case-studies/trbg`
- `/case-studies/mmh`
- `/case-studies/mms`
- `/case-studies/mjr`
- `/case-studies/surplus`
- `/contact`
- `/mission`
- `/admin` (protected, linked only from the footer)

## Content Guardrails
- Long-form case study content is content-locked; only shared layout/navigation changes are allowed unless content work is explicitly requested.
- Structured public content uses Turso/libSQL in production with typed seed fallbacks for local development and recovery.
- "Build with intention." must remain unchanged wherever it appears.
- Legacy placeholder, CMS, and rebuild instructions are historical only. Do not use them as implementation guidance.

## Documentation Spine
- `docs/SYSTEM_PUBLIC.md`
- `docs/SYSTEM_ADMIN.md`
- `docs/SYSTEM_OPS.md`
- `docs/DEPLOYMENT_GUIDE.md`
- `docs/DEVELOPER_GUIDE.md`
- `docs/PAGESPEED_TRADEOFFS.md`
- `docs/MAINTAINER_GUIDE.md`

## Where To Start
- Product map + public routes: `docs/SYSTEM_PUBLIC.md`
- Day-2 ops + SEO/monitoring: `docs/SYSTEM_OPS.md`
- Deploy and environment setup: `docs/DEPLOYMENT_GUIDE.md`
- Dev setup + conventions: `docs/DEVELOPER_GUIDE.md`
