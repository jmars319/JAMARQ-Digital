# System Public

## Purpose
Public-facing JAMARQ Digital site: authority, continuity, long-form thinking, and partnership clarity.

## Core Routes
- `/` Home: `app/page.tsx`
- `/services`: `app/services/page.tsx`
- `/process`: `app/process/page.tsx`
- `/work`: `app/work/page.tsx`
- `/case-studies`: `app/case-studies/page.tsx`
- `/case-studies/trbg`: `app/case-studies/trbg/page.tsx`
- `/case-studies/mmh`: `app/case-studies/mmh/page.tsx`
- `/case-studies/mms`: `app/case-studies/mms/page.tsx`
- `/case-studies/mjr`: `app/case-studies/mjr/page.tsx`
- `/contact`: `app/contact/page.tsx`
- `/mission`: `app/mission/page.tsx`

## Navigation + Shared Layout
- Header: `components/Header.tsx`
- Footer: `components/Footer.tsx`
- Root layout + metadata template: `app/layout.tsx`

## Typography + Visual System
- Primary font: IBM Plex Sans
- Tokens: `app/globals.css`
- Background colors and brand palette: `app/globals.css`

## Content Sources
- Structured public content repository: `lib/content-repository.ts`
- Case study summaries/order seed fallback: `lib/caseStudySummaries.ts`
- Homepage case study problem/build/outcome cards: Turso `case_study_home_cards`, seeded from `lib/content-repository.ts`
- Cross-site suite footer links: Turso `suite_links`, seeded from `lib/content-repository.ts`
- MMH long-form content: `content/case-studies/midway-music-hall/**`, loaded through `lib/mmhCaseStudyContent.ts` and `lib/mmhScreenshots.ts`
- TRBG long-form content: `content/case-studies/thunder-road-bar-and-grill/**`, loaded through `lib/trbgCaseStudyContent.ts` and `lib/trbgScreenshots.ts`
- MMS page copy and screenshot tabs: `app/case-studies/mms/page.tsx`, with supporting summaries in `content/case-studies/midway-mobile-storage/*.md`
- MJR page copy and screenshot tabs: `app/case-studies/mjr/page.tsx`

## Case Study Conventions
- Document-backed case studies should keep source copy and screenshot notes under `content/case-studies/<client>/` and expose typed data through `lib/*CaseStudyContent.ts` or `lib/*Screenshots.ts`.
- Page-local case studies may keep the route copy, metadata, and screenshot tab data in the page component when the case study is small and does not have a matching full document set.
- MJR intentionally follows the page-local convention because its case study is compact service-site proof and the source assets live directly under `public/case-studies/mjr/**`.
- Add every public case study route to `app/sitemap.ts`, `lib/caseStudySummaries.ts`, `lib/content-repository.ts`, and this document.

## Copy Guardrails
- "Build with intention." remains unchanged wherever it appears.
- Long-form case study content is content-locked; avoid edits unless content work is explicitly requested.
- DB-backed public records should keep code seed fallbacks so local builds and recovery remain simple.
