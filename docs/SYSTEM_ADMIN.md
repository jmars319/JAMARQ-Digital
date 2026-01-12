# System Admin

## Current State
There is no dedicated admin console in this repo.

## Admin-Adjacent Touchpoints
- Contact submissions are handled by a server route, not a UI admin:
  - API route: `app/api/contact/route.ts`
  - Email delivery via SendGrid (see `docs/SYSTEM_OPS.md`)

## If/When Admin Is Added
Document new routes, auth model, and data sources here. Include:
- Admin URLs and access controls
- Data ownership and audit trail
- “do not break” workflows
