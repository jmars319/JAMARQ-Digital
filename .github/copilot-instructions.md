# JAMARQ Digital Repository Instructions

This is the production JAMARQ Digital site, not a placeholder rebuild. Treat the
documentation in `docs/` as the source of operational truth before making
structural changes.

## Current Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Turso/libSQL for admin settings, structured case study cards, suite links,
  and contact submissions
- SendGrid for contact delivery
- Vercel for production hosting

## Change Rules

- Keep long-form case study copy content-locked unless content edits are
  explicitly requested.
- Keep the phrase "Build with intention." unchanged wherever it appears.
- Use `lib/content-repository.ts` for structured public records and preserve the
  typed seed fallback pattern for local development and recovery.
- Keep `/admin` protected and linked only from the footer.
- Do not commit secrets, generated local databases, or deployment output.

## Verification

Run the standard checks before publishing changes:

```bash
npm run lint
npm run typecheck
npm run build
```

Use `docs/DEPLOYMENT_GUIDE.md` and `docs/SYSTEM_OPS.md` for environment,
deployment, SEO, and runtime notes.
