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
- Empty managed-modules state for future database-backed tools

## Admin-Adjacent Touchpoints
- Contact submissions are handled by a server route, not a UI admin:
  - API route: `app/api/contact/route.ts`
  - Email delivery via SendGrid (see `docs/SYSTEM_OPS.md`)

## Guardrails
- Public content and case studies remain code-managed.
- Do not add public admin links without an explicit request.
- Document any future data modules, access controls, and audit needs here before moving content into the database.
