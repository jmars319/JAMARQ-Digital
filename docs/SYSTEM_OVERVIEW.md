# System Overview

## Purpose
JAMARQ Digital’s primary brand site: authority, continuity, long-form thinking, and ongoing partnership.

## Tech Stack (current)
- Next.js App Router (TypeScript)
- Tailwind CSS v4
- Hosting: Vercel
- Analytics: @vercel/analytics, @vercel/speed-insights

## System Map
- Public pages (App Router): `app/**/page.tsx`
- Layout + global metadata: `app/layout.tsx`
- Global styling + tokens: `app/globals.css`
- Shared components: `components/*`
- Case study content sources:
  - Summaries + display order: `lib/caseStudySummaries.ts`
  - Long-form content: `content/case-studies/**`
- Contact API (SendGrid): `app/api/contact/route.ts`
- SEO infra: `app/robots.ts`, `app/sitemap.ts`, `next.config.ts`

## Public Routes (high level)
- `/` Home: `app/page.tsx`
- `/services`: `app/services/page.tsx`
- `/process`: `app/process/page.tsx`
- `/work`: `app/work/page.tsx`
- `/case-studies`: `app/case-studies/page.tsx`
- `/case-studies/*`: `app/case-studies/*/page.tsx`
- `/contact`: `app/contact/page.tsx`
- `/mission`: `app/mission/page.tsx`

## Content Guardrails
- Case study content is locked; only shared layout/navigation changes are allowed.
- “Build with intention.” must remain unchanged wherever it appears.

## Documentation Spine (canonical)
- `docs/SYSTEM_PUBLIC.md`
- `docs/SYSTEM_ADMIN.md`
- `docs/SYSTEM_OPS.md`
- `docs/DEPLOYMENT_GUIDE.md`
- `docs/DEVELOPER_GUIDE.md`
- `docs/PAGESPEED_TRADEOFFS.md`
- `docs/COPILOT_INSTRUCTIONS_SUMMARY.md`

## Where To Start
- Product map + UI details: `docs/SYSTEM_PUBLIC.md`
- Day-2 ops + SEO/monitoring: `docs/SYSTEM_OPS.md`
- Deploy and environment setup: `docs/DEPLOYMENT_GUIDE.md`
- Dev setup + conventions: `docs/DEVELOPER_GUIDE.md`

---

# Appendix: Legacy README.md (verbatim)

# JAMARQ Digital Portfolio

Professional portfolio and business website for JAMARQ Digital - a web development and creative services agency.

**Domain:** jamarq.digital

## Current Status: Phase 0 - Placeholder Site

This is a minimal placeholder site designed to get JAMARQ online immediately. The full production site with portfolio, case studies, and CMS integration will be built in Phase 1.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## SEO Verification

Use these checks after running `npm run dev` or a production preview:

- View rendered head tags: `curl -s http://localhost:3000 | rg -n "<title>|<meta|<link rel=\"canonical\"|<script type=\"application/ld\\+json\""`
- Confirm robots.txt: `curl -s http://localhost:3000/robots.txt`
- Confirm sitemap.xml: `curl -s http://localhost:3000/sitemap.xml`
- Confirm OG image size: `sips -g pixelWidth -g pixelHeight public/og.jpg` (expect 1200x630)

## Phase 0 Features

✅ Single-page layout  
✅ Hero section with JAMARQ branding  
✅ Service offerings (Websites | Brand Identity | Consulting)  
✅ "Work With Me" CTA button  
✅ Contact email link  
✅ Mobile responsive  
✅ JAMARQ color scheme (synthwave-inspired dark theme)  

## Phase 1 - Coming Next

When ready to build the full production site:

- Multi-page site structure
- Sanity CMS integration
- Portfolio grid with filtering
- Case study detail pages
- Service pages (Web Dev, Brand Identity, Consulting)
- Contact form with API route
- Framer Motion animations
- Full component library

## Documentation

Complete build documentation is available in `/docs/jamarq-copilot-docs/`:

- `00-README.md` - Documentation overview
- `01-COPILOT_INSTRUCTIONS.md` - Complete technical specifications
- `02-QUICK_START.md` - Quick start guide
- `03-RESPONSIVE_DESIGN.md` - Responsive design patterns
- `04-ACCESSIBILITY.md` - Accessibility guidelines
- `05-ANIMATION_PATTERNS.md` - Framer Motion patterns
- `06-TROUBLESHOOTING.md` - Common issues and solutions
- `07-DEPLOYMENT.md` - Deployment guide

## Deployment

This site is configured for automatic deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Configure custom domain: jamarq.digital
4. Deploy automatically on push to main

See `docs/jamarq-copilot-docs/07-DEPLOYMENT.md` for detailed deployment instructions.

## Contact

**Jason Marshall**  
Email: jason@jamarq.digital  
Domain: jamarq.digital

---

**Built with:** Next.js 16 + TypeScript + Tailwind CSS  
**License:** Private - JAMARQ Digital  
**Year:** 2025
