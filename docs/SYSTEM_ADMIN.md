# System Admin

## Current State
There is a lightweight protected admin surface at `/admin`.

## Auth Model
- `ADMIN_PASSWORD` is the bootstrap/fallback password.
- `ADMIN_SESSION_SECRET` signs the HTTP-only admin session cookie.
- In-app password changes are hashed and stored in the Turso/libSQL `admin_settings` table.

## Current Scope
- Password login and logout
- Admin password changes
- DB content module visibility for seeded public content and contact intake
- Read-only recent contact submission snapshot

## Database-Backed Modules
- `admin_settings`: stores the in-app admin password hash.
- `case_study_summaries`: stores public case study index/work cards.
- `case_study_home_cards`: stores homepage problem/build/outcome case study cards.
- `suite_links`: stores footer links across JAMARQ, Tenra, and Vaexil.
- `contact_submissions`: stores public inquiry records before SendGrid status updates.

## Admin-Adjacent Touchpoints
- Contact submissions are recorded by a server route before email delivery:
  - API route: `app/api/contact/route.ts`
  - Recent protected snapshot: `app/admin/page.tsx`
  - Email delivery via SendGrid (see `docs/SYSTEM_OPS.md`)

## Guardrails
- Long-form case study copy remains code-managed and content-locked.
- The public admin link lives only in the footer and stays small/unobtrusive.
- Future editable modules should follow the current pattern: typed seed fallback, Turso table, protected admin surface, and documented recovery path.
