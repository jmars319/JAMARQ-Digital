# Deployment Guide

## Current Deployment Target
- Vercel
- Auto-deploys from `main`
- Production domain: `jamarq.digital`

## Required Environment Variables
See `docs/SYSTEM_OPS.md` for the SendGrid variables used by `app/api/contact/route.ts`.

Admin/database variables:
- `LIBSQL_URL`
- `LIBSQL_AUTH_TOKEN`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

`ADMIN_PASSWORD` is the bootstrap fallback for `/admin`. Password changes made inside the app are hashed and stored in the `admin_settings` table. Structured public content, contact submissions, and light page-view analytics also use Turso/libSQL in production. Public contact should stay form-based. Keep `ADMIN_SESSION_SECRET` stable between deployments so existing signed admin sessions remain valid.

## R2 Status
Cloudflare R2 buckets are provisioned for future JAMARQ file/blob workflows:

- `jamarq-digital-media-public` served from `https://cdn.jamarq.digital`
- `jamarq-digital-media-private`

The current app does not have runtime upload or attachment workflows, so no R2 environment variables are required on Vercel yet. Keep Turso/libSQL as the structured data store; add R2 only when the app needs real object storage for files, generated assets, or private downloads.

## Local Verification
Run these before pushing deployment changes:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment Flow
1. Commit changes on `main`.
2. Push to `origin/main`.
3. Let Vercel build the production deployment.
4. Verify the deployed route or asset that changed.
5. For admin changes, verify `/admin` loads and accepts the configured bootstrap password.

## SEO Verification
Use a local dev server or deployed preview:

```bash
curl -s http://localhost:3000/robots.txt
curl -s http://localhost:3000/sitemap.xml
```

For page-level metadata, inspect the rendered document for the target route.

## Retired Guidance
The old deployment appendix referenced first-time repository creation, Sanity CMS variables, and placeholder-era launch checklists. Those instructions are obsolete for this repo and have been removed from the active guide.
