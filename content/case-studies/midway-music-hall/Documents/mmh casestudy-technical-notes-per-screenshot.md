MMH — TECHNICAL NOTES BY SCREENSHOT

PUBLIC SITE & PERFORMANCE

mmh-public-homepagebefore-source

Technical note:
Legacy layout relied on unoptimized assets and non-deterministic image loading, resulting in inconsistent performance and accessibility scores.

⸻

mmh-public-homepageafter-source

Technical note:
Homepage rebuilt as part of the React SPA with deterministic layout, responsive media helpers, and cached CMS defaults to ensure consistent rendering and improved Lighthouse results.

⸻

mmh-public-homepagemobile-source

Technical note:
Mobile layout uses the same component system as desktop, with responsive breakpoints and reduced interaction density to preserve clarity and performance on constrained devices.

⸻

mmh-pagespeed-desktopbefore-source

Technical note:
Pre-optimization scores reflect legacy image handling, unused JavaScript, and missing cache headers on static assets.

⸻

mmh-pagespeed-desktopafter-source

Technical note:
Post-optimization scores achieved through hashed static assets, long-lived cache headers, responsive image variants, and elimination of dead /uploads references.

⸻

mmh-pagespeed-mobilebefore-source

Technical note:
Mobile performance was previously impacted by render-blocking assets and lack of responsive image sizing.

⸻

mmh-pagespeed-mobileafter-source

Technical note:
Mobile improvements prioritize real-world constraints, balancing image fidelity with bandwidth while preserving accessibility and SEO signals.

⸻

EVENT DISCOVERY & PUBLIC FEATURES

mmh-public-archive-source

Technical note:
Archive view is driven by shared SQL lifecycle rules so public listings and admin filters remain consistent across upcoming, past, and archived events.

⸻

mmh-public-schedule-source

Technical note:
Schedule data is served via unauthenticated JSON endpoints with server-side date filtering to avoid client clock drift issues.

⸻

mmh-public-schedulemobile-source

Technical note:
Mobile schedule uses simplified card density and tap targets while preserving the same data source and filtering logic as desktop.

⸻

mmh-public-tgphomepage-source

Technical note:
Related venue content shares branding and layout components while remaining independently configurable through CMS settings.

⸻

ADMIN DASHBOARD & OPERATIONS

mmh-admin-dashboard-source

Technical note:
Admin dashboard is a React SPA rendered post-authentication, polling authenticated /api/dashboard endpoints and maintaining idle and hard session expirations.

⸻

mmh-admin-dashboardmobile-source

Technical note:
Mobile admin view reuses the same dashboard components with responsive layout adjustments, enabling limited operational access without a separate code path.

⸻

mmh-admin-auditlog-source

Technical note:
Audit log records every administrative mutation with actor, action, entity, and metadata, stored in an append-only table for traceability.

⸻

EVENT MANAGEMENT

mmh-admin-eventdashboard-source

Technical note:
Event dashboard queries support timeframe, venue, and archive filters with pagination to handle large historical datasets efficiently.

⸻

mmh-admin-eventeditor-source

Technical note:
Event editor snapshots seating layout versions at save time to prevent layout drift between reservation requests and approvals.

⸻

mmh-admin-eventcategories-source

Technical note:
Event categories are normalized entities referenced by events to ensure consistent classification across public and admin views.

⸻

SEATING SYSTEM & LAYOUTS

mmh-admin-seatinglayouts-source

Technical note:
Reusable seating templates serve as the base for events, with one designated default layout and controlled mutation history.

⸻

mmh-admin-seatinglayouteditor-source

Technical note:
Layout editor persists canvas settings, seat geometry, and stage locks, and records changes in layout history for rollback and debugging.

⸻

mmh-admin-seatinglayoutsmobile-source

Technical note:
Mobile layout editor supports inspection and minor adjustments, while complex edits are intentionally optimized for desktop interaction.

⸻

mmh-admin-seat-requests-queue-source

Technical note:
Seat request queue reflects transactional reservation state, surfacing conflict reasons returned by backend FOR UPDATE locking logic.

⸻

RESERVATION WORKFLOWS

mmh-admin-manualreservation-source

Technical note:
Manual reservation tools allow staff to override automated flows while still enforcing conflict detection and audit logging.

⸻

mmh-admin-manageusers-source

Technical note:
User management enforces role-based access, session expiration, and administrative safeguards without exposing credential data client-side.

⸻

MEDIA & CONTENT MANAGEMENT

mmh-admin-mediamanager-source

Technical note:
Media uploads stream through a PHP GD pipeline that generates responsive and WebP variants, storing manifest metadata for consistent <picture> rendering.

⸻

mmh-admin-sitecontent-source

Technical note:
Site content editor updates CMS-backed copy and homepage sections without requiring redeploys, with safe fallbacks if API data is unavailable.

⸻

HOW TO USE THESE (QUICK REMINDER)
	•	Website: show as expandable “Technical note” under each image
	•	PDF/DOCX: use as numbered footnotes or italicized sub-captions
	•	Engineering review: reference directly by filename

Nothing here duplicates marketing language.
Everything reinforces credibility without adding noise.