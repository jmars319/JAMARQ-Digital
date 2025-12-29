# Thunder Road Bar & Grill

Custom restaurant website and admin system built for ownership, speed, and weekly menu updates.

Launched November 2025.

---

## Overview

Thunder Road Bar & Grill is a locally owned bar and restaurant in Midway, North Carolina. The business required a modern website that could clearly present its menu, reflect its identity, and allow staff to manage frequent updates without relying on third-party vendors or subscription platforms.

JAMARQ rebuilt the entire site from scratch, replacing a restrictive vendor solution with a fully owned React and PHP system deployed on shared hosting. The result is a fast public site paired with a purpose-built admin panel designed around real operational workflows.

---

## The Problem

The previous website was controlled by a vendor platform with recurring fees and limited flexibility.

Key issues included:
- Slow load times, especially on mobile
- Rigid templates that did not reflect the restaurant’s brand
- Menu organization that was difficult for customers to scan
- Weekly specials that required cumbersome updates
- No true ownership of code or data

The site had become a bottleneck rather than a tool.

---

## Goals

The rebuild focused on a small set of non-negotiable goals:

- Improve menu clarity and readability
- Reduce weekly update time for specials
- Optimize mobile performance for primary traffic
- Reflect the restaurant’s red and black rustic bar identity
- Deliver full ownership of code, data, and hosting
- Ensure the system could be maintained by non-technical staff

---

## Approach

### Workflow-First Design

The owner’s actual weekly workflow was mapped before any UI decisions were made. The admin system was designed to support how updates really happen, not how a generic CMS assumes they should happen.

This led to a minimal admin interface that prevents errors and reduces time spent per update.

### User-First Navigation

The public site was restructured around how customers actually use restaurant websites:
- Menu access prioritized
- Hours and location immediately visible
- Fewer pages, clearer sections
- Mobile navigation simplified

### Low-Maintenance Architecture

The technology stack was selected for durability and clarity rather than novelty:
- React frontend for predictable rendering
- PHP and MySQL backend for straightforward data management
- Shared hosting deployment without external service dependencies

The system avoids unnecessary abstractions and favors explicit behavior.

### Friction Removal

Every feature was evaluated through the lens of effort:
- Fewer clicks
- Fewer decisions
- Faster loads
- Clear visual hierarchy

---

## Solution

### Design System

- Minimal layout using TRBG’s red and black palette
- Typography tuned for low-light environments and quick scanning
- Clear spacing and section dividers
- Strong hierarchy for menu categories and prices

### Site Structure

- Home page with hero, hours, address, and calls to action
- Menu section organized into clear, scannable categories
- Weekly specials integrated into the menu workflow
- Contact information with map and hours
- Mobile-first navigation

### Technical Implementation

- Custom React frontend
- PHP and MySQL backend for editable content
- Purpose-built admin panel
- Static hero assets for fast first paint
- Responsive image variants with explicit sizing
- Layout stability safeguards to prevent CLS
- Mobile-first performance tuning
- Basic SEO and structured metadata
- Accessibility-aligned markup and contrast

### Admin Capabilities

- Menu category and item management
- Weekly specials updates
- Media uploads with enforced image variants
- Live previews that match the public site
- Clear save flows with visual confirmation

Weekly menu updates now take under five minutes.

---

## Before and After

**Before**
- Vendor-controlled platform
- Slow performance
- Confusing menu layout
- Time-consuming updates
- Ongoing subscription costs

**After**
- Fully custom owned system
- Fast load times on mobile
- Clear, scannable menu
- Five-minute weekly update workflow
- No vendor lock-in

---

## Results

- Load time reduced from several seconds to approximately 1.5 seconds on mobile
- Menu clarity improved through structure and spacing
- Admin update time reduced dramatically
- Owners gained full control of their digital presence

External Lighthouse and PageSpeed screenshots: **Needed**

---

## Tradeoffs and Constraints

- Shared hosting constrained certain caching strategies
- Image optimization required strict pipeline enforcement
- Layout stability relied on deliberate sizing and measurement logic
- Performance tooling is primarily used during development rather than production

These were accepted intentionally to preserve ownership and reliability.

---

## Deployment and Verification

- Frontend and backend deployed as paired zip uploads
- Environment configuration handled manually via hosting
- Verification includes build checks, admin workflows, and mobile performance testing

---

## Client Feedback

Client quote: **Needed**

---

## Project Assets

- Source code repository
- Deployment documentation
- Image pipeline specifications
- Admin handoff notes
- Launch checklist

---

## Status

Internal portfolio case study  
Prepared by JAMARQ Digital  
Last updated December 2025
