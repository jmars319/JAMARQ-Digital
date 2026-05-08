# JAMARQ Digital Portfolio

Primary brand site for JAMARQ Digital. The site is built to project authority and continuity, support long‑form thinking, and frame ongoing partnership work. It is intentionally minimal, performance‑forward, and content‑first.

## Current Reality

This is the production JAMARQ Digital site. It is a Next.js App Router project deployed on Vercel, with no active CMS dependency and no placeholder build. Public routes cover the homepage, services, process, work/case studies, mission, and contact. Contact delivery uses SendGrid through `app/api/contact/route.ts`, and production content records use Turso/libSQL with code-managed seed fallbacks for local development.

## What This Repo Contains
- Public marketing site (Next.js App Router, TypeScript)
- Case study index and detail routes
- Contact flow via SendGrid
- Lightweight protected admin route at `/admin`
- Turso/libSQL-backed admin settings, structured case study cards, suite links, and contact submissions
- Shared UI components and brand assets

## Tech Stack
- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Turso/libSQL for admin settings and structured content records
- Vercel Analytics + Speed Insights

## Documentation
Start here:
- `docs/SYSTEM_OVERVIEW.md`

Key references:
- `docs/SYSTEM_PUBLIC.md`
- `docs/SYSTEM_OPS.md`
- `docs/DEPLOYMENT_GUIDE.md`
- `docs/DEVELOPER_GUIDE.md`
- `docs/PAGESPEED_TRADEOFFS.md`
- `docs/COPILOT_INSTRUCTIONS_SUMMARY.md`

## Guardrails
- Case study long-form copy remains content-locked.
- “Build with intention.” remains unchanged wherever it appears.
- Public DB content is seeded from typed code fallbacks and should stay structured, reviewable, and easy to recover.
