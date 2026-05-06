# Deployment Guide

## Current Deployment Target
- Vercel
- Auto-deploys from `main`
- Production domain: `jamarq.digital`

## Required Environment Variables
See `docs/SYSTEM_OPS.md` for the SendGrid variables used by `app/api/contact/route.ts`.

## Local Verification
Run these before pushing deployment changes:

```bash
npm run lint
npm run build
```

## Deployment Flow
1. Commit changes on `main`.
2. Push to `origin/main`.
3. Let Vercel build the production deployment.
4. Verify the deployed route or asset that changed.

## SEO Verification
Use a local dev server or deployed preview:

```bash
curl -s http://localhost:3000/robots.txt
curl -s http://localhost:3000/sitemap.xml
```

For page-level metadata, inspect the rendered document for the target route.

## Retired Guidance
The old deployment appendix referenced first-time repository creation, Sanity CMS variables, and placeholder-era launch checklists. Those instructions are obsolete for this repo and have been removed from the active guide.
