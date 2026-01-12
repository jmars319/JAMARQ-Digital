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
- `/contact`: `app/contact/page.tsx`
- `/mission`: `app/mission/page.tsx`

## Navigation + Shared Layout
- Header: `components/Header.tsx`
- Footer: `components/Footer.tsx`
- Root layout + metadata template: `app/layout.tsx`

## Typography + Visual System (current)
- Primary font: IBM Plex Sans (Regular for body, Medium/Semibold for headings)
- Tokens: `app/globals.css`
- Background colors and brand palette: `app/globals.css`

## Content Sources
- Case study summaries/order: `lib/caseStudySummaries.ts`
- Case study long-form markdown: `content/case-studies/**`

## Copy Guardrails
- “Build with intention.” remains unchanged wherever it appears.
- Case study content is content-locked; avoid edits.

---

# Appendix: Legacy Brand Style Guide (verbatim)

JAMARQ Brand Style Guide

Build with intention.
 
01 — Brand Essence

JAMARQ builds clean, intentional, modern digital systems.
Work is guided by precision, clarity, and purpose.
We do not use templates, shortcuts, or trends for their own sake.

Tone: confident, minimal, deliberate.
 
02 — Logo System

DARK MODE 	LIGHT MODE
 	 
Use this version for:
• Headers on dark backgrounds
• Website top-left on dark headers
• Digital materials with black or near-black canvases
• High-contrast needs
• Any application where the light-mode version loses contrast	Use this version for:
• Headers on white or light backgrounds
• Website top-left when the header is light
• Documents, proposals, and printed materials
• Digital layouts with bright or neutral backgrounds
• Any application where the dark-mode version loses contrast

DARK MODE	LIGHT MODE
 	 
Use this version for:
• Favicons
• Social avatars
• Watermarks
• Small-scale placements
• Internal tooling and dashboards
• App icons and badges
	Use this version for:
• Light backgrounds
• Print contexts
• White or near-white documents
• Systems where the dark icon becomes visually heavy

 
03 — Logo Clear Space

To protect visual integrity, maintain a minimum clear space around all logo forms.

Rule:
Clear space = height of the Q’s inner stroke (the angled bar width).

Nothing — text, UI elements, borders, images — may enter this area.

Clear space applies to:
•	All edges of the wordmark
•	All edges of the Q Icon (light and dark)
•	Horizontal underline segment of the brand mark
•	Stacked or centered compositions

This ensures readability and preserves the premium engineered aesthetic.
 
04 — Minimum Sizes

Wordmark:
Use at any size where all letters remain crisp.
If legibility is compromised — switch to the Q Icon.

Q Icon:
May be used at extremely small scales (e.g., 32×32 px, 16×16 px).
Avoid usage below 12 px to prevent glow distortion or edge clipping.
 
05 — Logo Usage Guidelines

Correct Usage
•	Use only approved JAMARQ logos
•	Use dark version on dark/neutral backgrounds
•	Use light version on white/light backgrounds
•	Maintain original aspect ratio
•	Use scalable vector whenever possible (SVG, PDF)

Incorrect Usage

Never:
•	Recolor the logo (until official recolors exist)
•	Stretch, squash, rotate, or alter proportions
•	Add outlines, glows, drop-shadows, or external effects
•	Place on busy photographic backgrounds
•	Crop the Q icon or remove the cyan underline
•	Change the glow intensity or metallic texture
•	Remove the Q’s angled stroke or modify geometry
•	Use AI-generated variations or reinterpretations
•	Replace the cyan accent with off-brand hues
 
06 — File Formats

Official asset formats include:
•	SVG — preferred for all digital use (scales cleanly)
•	PNG (Transparent) — general-purpose digital
•	JPG — non-transparent documentation
•	PDF — print and high-quality exports

Use SVG whenever possible for UI and responsive layout.
 
07 — Color System

Primary Colors
•	JAMARQ Black — #0D0D0F
•	Accent Cyan — #09A6D6

Supporting Grayscale
•	Steel — #4A4D52
•	Slate — #6E7176
•	Mist — #D1D3D6
•	Paper White — #FAFAFA

Use grayscale neutrals for clean, minimal layouts.
 
08 — Typography

Headings:
 Montserrat Bold

Clean, geometric, confident.

Body:
 Inter Regular

Modern, efficient, highly readable.

(If Montserrat or Inter are not available, Source Sans Pro is acceptable.)

Typesetting Rules
•	Prefer short sentences
•	Avoid filler adjectives
•	No exclamation marks unless quoting
•	Avoid conversational fluff or salesy language

Example:

❌ “JAMARQ Digital provides cutting-edge, innovative solutions…”
✅ “JAMARQ builds fast, secure digital systems.”
 
09 — Language Standards

Write with clarity, purpose, and intent.
Avoid verbosity, clichés, and ungrounded claims.

Tone principles:
•	Minimal
•	Direct
•	High-agency
•	Systematic
•	Confident, never arrogant
 
10 — Brand Boundaries

JAMARQ does not:
•	Compete on price
•	Use templates or page builders
•	Overpromise timelines
•	Build for clients without clear goals
•	Accept projects with vague scope or unclear ownership
•	Prioritize aesthetics over system clarity
•	Allow brand assets to be altered, recolored, or remixed

Boundaries protect the quality of outcomes and reduce risk.
 
11 — Asset Usage Scenarios

Use Wordmark When:
•	The name “JAMARQ” must be prominent
•	Signing official documents
•	On the website header
•	In client-facing presentations
•	On marketing materials

Use Q Icon When:
•	Space is limited
•	Creating favicons or app icons
•	Using overlays or watermarks
•	Printing in very small sizes
•	Building component libraries
•	Assigning brand identity to tools or dashboards
 
12 — Brand Assets Library

Until a full asset hub is built, assets are delivered directly to clients per project.

Future expansion:
•	Asset portal for downloads
•	Scoped access per client
•	Alternate colorways
•	Alternate lockups

Requests for custom formats:
hello@jamarq.digital
 
13 — Photography Style (Optional Future Section)

(Include now as a placeholder with no restrictions)

High-contrast, minimal compositions.
Avoid generic stock imagery featuring people unless necessary.
Prefer geometric forms, clean environments, and subtle gradients.
 
14 — Versioning

This brand guide evolves with the system itself.
Each update should be documented with a version number and date.

