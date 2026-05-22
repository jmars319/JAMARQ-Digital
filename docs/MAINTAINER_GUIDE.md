# Maintainer Guide

This guide consolidates project guardrails into normal maintainer documentation.

## Current Source Of Truth

- `docs/SYSTEM_OVERVIEW.md` is the system entry point.
- `docs/SYSTEM_PUBLIC.md`, `docs/SYSTEM_ADMIN.md`, and `docs/SYSTEM_OPS.md` describe public, admin, and operational behavior.
- `docs/DEVELOPER_GUIDE.md` and `docs/DEPLOYMENT_GUIDE.md` cover local development and Vercel deployment.

## Current Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Turso/libSQL for admin settings, structured case study cards, suite links, and contact submissions
- SendGrid for contact delivery
- Vercel for production hosting

## Do-Not-Break Workflows

- Keep long-form case study copy content-locked unless content edits are explicitly requested.
- Keep the phrase "Build with intention." unchanged wherever it appears.
- Use `lib/content-repository.ts` for structured public records and preserve the typed seed fallback pattern for local development and recovery.
- Keep `/admin` protected and linked only from the footer.
- Do not commit secrets, generated local databases, deployment output, or local auth state.

## Retired Assumptions

- Do not reintroduce placeholder/Phase 0 build flow assumptions.
- Do not switch back to a `src/` directory layout without a deliberate framework refactor.
- Do not reintroduce Sanity CMS-backed portfolio content.
- Do not reintroduce the old Framer Motion animation system or Inter/Montserrat typography assumptions as active requirements.

## Verification Baseline

Run standard checks before publishing:

```bash
npm run lint
npm run typecheck
npm run build
```
