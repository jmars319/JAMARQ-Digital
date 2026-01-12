# Copilot Instructions Summary

## Context
This file preserves legacy Copilot and rebuild instruction sets that were previously scattered across `/docs/jamarq-copilot-docs` and `/docs/portfolio-instructions-v2`.

## Important Notes (legacy)
- Some references in the legacy docs may not match current implementation (e.g., Next.js 14, Sanity CMS, Framer Motion, Inter/Montserrat). Treat them as historical context unless explicitly re-adopted.
- “Build with intention.” must remain unchanged wherever it appears.

---

# Appendix: jamarq-copilot-docs/00-README.md (verbatim)

# JAMARQ Portfolio - Copilot Documentation

## Overview
Complete documentation bundle for building the JAMARQ portfolio website with GitHub Copilot assistance.

## Files Included

### 1. 01-COPILOT_INSTRUCTIONS.md (70KB) - **START HERE**
The master document. Contains everything Copilot needs to build the site:
- Complete technical specifications
- Full component code examples
- TypeScript schemas
- Design system
- Both placeholder and full site instructions
- Content strategy

**Use this as your primary reference when coding.**

### 2. 02-QUICK_START.md (12KB)
Get up and running in under 30 minutes:
- Placeholder site setup (< 1 hour)
- Essential commands
- Quick troubleshooting
- Success checklist

**Use this to get your placeholder live immediately.**

### 3. 03-RESPONSIVE_DESIGN.md (12KB)
Mobile-first responsive patterns:
- Breakpoint strategy
- Common layouts (grids, cards, forms)
- Typography scaling
- Touch target sizing
- Testing checklist

**Reference when building any component.**

### 4. 04-ACCESSIBILITY.md (7KB)
WCAG 2.1 AA compliance guide:
- Semantic HTML patterns
- Keyboard navigation
- ARIA attributes
- Color contrast requirements
- Screen reader support
- Testing procedures

**Check against this for every component.**

### 5. 05-ANIMATION_PATTERNS.md (13KB)
Framer Motion reusable patterns:
- Basic animations (fade, slide, scale)
- Scroll-triggered animations
- Hover effects
- Performance best practices
- Reduced motion support
- Reusable components

**Copy/paste these patterns for consistent animations.**

### 6. 06-TROUBLESHOOTING.md (13KB)
Solutions to common issues:
- Build errors (TypeScript, Next.js)
- Sanity CMS problems
- Styling issues
- Form problems
- Performance optimization
- Debugging strategies

**Reference when something breaks.**

### 7. 07-DEPLOYMENT.md (14KB)
Complete deployment guide:
- Pre-deployment checklist
- Vercel setup step-by-step
- Custom domain configuration
- SSL/DNS setup
- Analytics integration
- Post-launch monitoring

**Follow this when you're ready to launch.**

## How to Use

### Phase 0: Placeholder (< 1 Hour)
1. Read: 02-QUICK_START.md
2. Follow steps to create placeholder
3. Deploy to get site live immediately

### Phase 1: Full Site (3-4 Weeks)
1. Read: 01-COPILOT_INSTRUCTIONS.md (full master doc)
2. Reference as needed:
   - 03-RESPONSIVE_DESIGN.md when building layouts
   - 04-ACCESSIBILITY.md for a11y compliance
   - 05-ANIMATION_PATTERNS.md for smooth interactions
   - 06-TROUBLESHOOTING.md when issues arise
3. When ready to launch: 07-DEPLOYMENT.md

## Document Hierarchy

```
01-COPILOT_INSTRUCTIONS.md (master reference)
├── 02-QUICK_START.md (get started fast)
├── 03-RESPONSIVE_DESIGN.md (mobile-first patterns)
├── 04-ACCESSIBILITY.md (a11y requirements)
├── 05-ANIMATION_PATTERNS.md (Framer Motion)
├── 06-TROUBLESHOOTING.md (common issues)
└── 07-DEPLOYMENT.md (go live)
```

## Quick Reference

### Essential Commands
```bash
npm run dev          # Start development
npm run build        # Build for production
npm run type-check   # Check TypeScript
git push origin main # Deploy (auto-triggers Vercel)
```

### File Sizes
- Total: ~140KB of documentation
- Main instructions: 70KB
- Supplementary: 70KB
- All markdown for easy reading

## Tips for Success

1. **Start with placeholder** - Get something live immediately
2. **Reference main instructions constantly** - It has everything
3. **Mobile-first always** - Test on mobile throughout
4. **Commit frequently** - Small commits are better
5. **Test before pushing** - Run `npm run build` locally
6. **Check accessibility** - Use the checklist
7. **Monitor performance** - Run Lighthouse regularly

## Support

If you get stuck:
1. Check 06-TROUBLESHOOTING.md first
2. Search the main 01-COPILOT_INSTRUCTIONS.md
3. Consult official documentation:
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind Docs](https://tailwindcss.com/docs)
   - [Framer Motion](https://www.framer.com/motion/)

## Project Structure

These docs assume this structure:
```
jamarq-portfolio/
├── src/
│   ├── app/              # Pages (Next.js App Router)
│   ├── components/       # React components
│   └── lib/             # Utilities, types, Sanity
├── public/              # Static assets
├── sanity/              # Sanity Studio
└── [config files]       # tailwind, tsconfig, etc.
```

## Timeline Estimates

**Placeholder:** 45 minutes  
**Full MVP:** 2-3 weeks  
**Polish & Launch:** 3-4 weeks total

## What's Not Included

These docs don't cover:
- Advanced CMS features beyond basics
- Complex e-commerce integration
- Authentication systems
- Advanced API integrations

For those, extend the base architecture documented here.

## Version

**Created:** December 2024  
**For:** JAMARQ Digital Portfolio Site  
**Tech Stack:** Next.js 14, TypeScript, Tailwind, Sanity, Framer Motion

## License

These documentation files are for your use in building the JAMARQ portfolio site.

---

## Getting Started Right Now

1. Extract this archive
2. Open 02-QUICK_START.md
3. Follow the placeholder setup
4. Get your site live in < 1 hour
5. Then use 01-COPILOT_INSTRUCTIONS.md to build the full site

Good luck building JAMARQ! 🚀

---

# Appendix: jamarq-copilot-docs/01-COPILOT_INSTRUCTIONS.md (verbatim)

# COPILOT INSTRUCTIONS: JAMARQ Portfolio Website

## CRITICAL: READ THIS FIRST

**BUILD SEQUENCE:**
1. **FIRST:** Build the placeholder site ONLY (Phase 0)
2. **WAIT:** Do NOT start building the final site until explicitly instructed
3. **THEN:** Build the full production site when requested (Phase 1)

This is a two-phase build. The placeholder gets us live immediately. The final site is the complete brand expression.

---

## PROJECT OVERVIEW

**Project Name:** JAMARQ Portfolio Website  
**Domain:** jamarq.digital  
**Purpose:** Professional portfolio and business website for JAMARQ Digital, a web development and creative services agency  
**Developer:** Jason (using GitHub Copilot for assistance)  
**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Sanity CMS, Framer Motion

---

## BRAND IDENTITY

### What JAMARQ Represents
- Sleek, modern web development and creative services
- Synthwave-tinted aesthetic (subtle, not overwhelming)
- Professional with creative edge
- Clean minimalism with intentional accent colors
- Technical credibility with artistic sensibility

### Brand Personality
- Direct and confident
- No fluff or buzzwords
- Quiet intensity
- Future-forward
- Problem-solving focused

### Target Audience
- Small business owners needing websites
- Restaurants, service businesses, logistics companies
- Entrepreneurs needing brand identity
- Companies wanting business automation systems
- Tech-savvy clients who appreciate quality design

---

## DESIGN SYSTEM

### Color Palette

**Base Colors (Primary Usage):**
```css
--jamarq-black: #0A0A0C        /* Main background */
--jamarq-charcoal: #1A1A20     /* Section backgrounds, cards */
--jamarq-slate: #2A2E39        /* Borders, subtle divisions */
--jamarq-white: #F2F2F5        /* Primary text color */
--jamarq-gray: #9CA3AF         /* Secondary text, descriptions */
```

**Accent Colors (Synthwave - Use Sparingly):**
```css
--jamarq-cyan: #0CE3F2         /* Primary accent - CTAs, links, highlights */
--jamarq-magenta: #FF3EB5      /* Secondary accent - hover states */
--jamarq-purple: #8B4DF5       /* Tertiary accent - special elements */
```

**Color Usage Rules:**
- Background: Always `jamarq-black` or `jamarq-charcoal`
- Text: `jamarq-white` for primary, `jamarq-gray` for secondary
- Accents: Use ONLY for:
  - Active links (cyan)
  - Hover effects (cyan glow)
  - Section dividers (subtle cyan/purple)
  - CTA buttons (cyan)
  - Small geometric accent shapes
- **NEVER:** Use gradients everywhere, full-screen accent colors, or overwhelming neon effects
- **GOAL:** Professional dark theme with tasteful synthwave touches

### Typography

**Font Stack:**
```css
/* Headings and Body */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Code/Technical Elements */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

**Type Scale:**
- Hero headline: 3.5rem (56px) / font-weight: 700
- H1: 2.5rem (40px) / font-weight: 700
- H2: 2rem (32px) / font-weight: 600
- H3: 1.5rem (24px) / font-weight: 600
- Body: 1rem (16px) / font-weight: 400
- Small: 0.875rem (14px) / font-weight: 400

**Typography Rules:**
- Line height: 1.5 for body text, 1.2 for headings
- Letter spacing: -0.02em for large headings, normal for body
- Generous whitespace between sections
- Use monospace font for: code snippets, technical details, file paths

### Spacing System

Use Tailwind's spacing scale consistently:
- Section padding: `py-24` (96px) or `py-32` (128px)
- Container max-width: `max-w-6xl` (1152px)
- Grid gaps: `gap-8` (32px) or `gap-12` (48px)
- Card padding: `p-8` (32px)
- Button padding: `px-6 py-3` (24px/12px)

### Component Styling Patterns

**Cards:**
```tsx
className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8 hover:border-jamarq-cyan transition-all duration-300"
```

**Buttons (Primary CTA):**
```tsx
className="bg-jamarq-cyan text-jamarq-black px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
```

**Buttons (Secondary):**
```tsx
className="border border-jamarq-cyan text-jamarq-cyan px-6 py-3 rounded-md font-semibold hover:bg-jamarq-cyan hover:text-jamarq-black transition-all duration-200"
```

**Links:**
```tsx
className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors duration-200 underline underline-offset-4"
```

**Section Dividers:**
```tsx
className="h-px bg-gradient-to-r from-transparent via-jamarq-cyan to-transparent opacity-30"
```

---

## PHASE 0: PLACEHOLDER SITE

### Overview
**Purpose:** Get JAMARQ online immediately with a minimal, professional presence  
**Timeline:** Build this FIRST, deploy within hours  
**Complexity:** Single page, no animations, no CMS, minimal dependencies

### Technical Stack (Placeholder)
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- NO Sanity CMS (hardcoded content)
- NO Framer Motion (no animations)
- NO complex components

### File Structure (Placeholder)
```
jamarq-placeholder/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage (only page)
│   │   └── globals.css         # Tailwind + custom styles
│   └── components/             # (minimal, if needed)
├── public/
│   └── favicon.ico
├── tailwind.config.ts          # JAMARQ color scheme
├── tsconfig.json
└── package.json
```

### Placeholder Content Structure

**Page Sections (top to bottom):**

1. **Hero Section**
   ```
   JAMARQ
   Digital + Creative Studio
   
   Websites | Brand Identity | Consulting
   
   [Work With Me] button
   ```
   - Centered layout
   - Solid black background (#0A0A0C)
   - No animations
   - "JAMARQ" in large, bold text
   - Subtitle in regular weight
   - Service list separated by pipes (|)
   - Single CTA button

2. **Brief About Section**
   ```
   I help individuals and brands build clean, modern digital identities.
   Synthwave-inspired minimalism meets practical execution.
   ```
   - 2-3 sentences maximum
   - Centered text
   - Subtle separation from hero

3. **Coming Soon Section**
   ```
   Portfolio launching soon.
   Full case studies and project details coming shortly.
   ```
   - Simple text
   - Sets expectation for future content

4. **Footer**
   - Email: jason@jamarq.digital (mailto link)
   - Social links (if available): GitHub, LinkedIn, Twitter
   - Copyright: © 2024 JAMARQ Digital
   - Minimal, single line if possible

### Placeholder Code Requirements

**layout.tsx:**
```tsx
// Root layout with metadata
export const metadata = {
  title: 'JAMARQ Digital - Web Development & Creative Services',
  description: 'Custom web development, brand identity, and consulting services. Clean, modern digital solutions.',
  keywords: 'web development, brand identity, consulting, Lexington NC, Winston-Salem NC',
}

// Include Inter font from next/font/google
// Set background to bg-jamarq-black
// Text color to text-jamarq-white
```

**page.tsx (Homepage):**
- Single component file
- All content hardcoded (no props, no data fetching)
- Responsive: mobile-first, stack vertically on mobile
- Clean, semantic HTML
- Accessibility: proper heading hierarchy, ARIA labels where needed

**Styling Approach:**
- Use Tailwind utility classes exclusively
- No custom CSS beyond Tailwind config
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

**Work With Me Button:**
- Should be a mailto link: `mailto:jason@jamarq.digital?subject=Project Inquiry`
- Styled as primary CTA button
- Centered below hero text

### Placeholder Deployment

**Deployment Target:** Vercel  
**Steps:**
1. Push to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically
4. Configure custom domain: jamarq.digital
5. Verify SSL certificate is active
6. Test on mobile and desktop

**Environment Variables:** None needed for placeholder

**Performance Targets:**
- Lighthouse score: 95+ (should be easy with minimal content)
- First Contentful Paint: < 1 second
- Time to Interactive: < 1.5 seconds

---

## PHASE 1: FULL PRODUCTION SITE

### ⚠️ IMPORTANT: DO NOT BUILD THIS UNTIL EXPLICITLY REQUESTED

Wait for explicit instruction: "Start building the full production site" or similar directive.

### Overview
**Purpose:** Complete brand expression with portfolio, case studies, full service offerings  
**Timeline:** 3-4 weeks after placeholder launch  
**Complexity:** Multi-page site, CMS integration, animations, full component library

### Technical Stack (Full Site)
- Next.js 14 (App Router)
- TypeScript (strict mode)
- Tailwind CSS + custom configuration
- Sanity CMS for content management
- Framer Motion for animations
- shadcn/ui for base components
- React Hook Form for forms
- Zod for validation

### File Structure (Full Site)
```
jamarq-portfolio/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                    # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── work/
│   │   │   │   ├── page.tsx                # Portfolio grid
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx            # Case study detail
│   │   │   ├── services/
│   │   │   │   ├── web-development/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── brand-identity/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── consulting/
│   │   │   │       └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts                # Contact form handler
│   ├── components/
│   │   ├── ui/                             # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactCTA.tsx
│   │   ├── portfolio/
│   │   │   ├── PortfolioGrid.tsx
│   │   │   ├── PortfolioCard.tsx
│   │   │   ├── PortfolioFilter.tsx
│   │   │   └── CaseStudyLayout.tsx
│   │   └── animations/
│   │       ├── GridBackground.tsx
│   │       ├── FadeIn.tsx
│   │       └── ParallaxSection.tsx
│   ├── lib/
│   │   ├── sanity/
│   │   │   ├── client.ts
│   │   │   ├── queries.ts
│   │   │   └── schemas/
│   │   │       ├── project.ts
│   │   │       ├── service.ts
│   │   │       └── testimonial.ts
│   │   ├── types/
│   │   │   ├── portfolio.ts
│   │   │   └── common.ts
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── sanity/                                  # Sanity Studio
│   ├── schema.ts
│   └── sanity.config.ts
├── public/
│   ├── images/
│   └── favicon.ico
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### TypeScript Configuration

**tsconfig.json settings:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

### Data Models & Schemas

#### Project Schema (Sanity)
```typescript
// lib/types/portfolio.ts

export type ServiceType = 'web-dev' | 'brand-identity' | 'consulting' | 'creative'

export interface Project {
  _id: string
  _type: 'project'
  title: string
  slug: {
    current: string
  }
  tagline: string
  serviceTypes: ServiceType[]
  client: {
    name: string
    industry: string
    logo?: {
      asset: {
        url: string
      }
    }
    testimonial?: string
  }
  challenge: string
  solution: string
  results?: Array<{
    metric: string
    value: string
  }>
  techStack: string[]
  features: string[]
  media: {
    hero: {
      asset: {
        url: string
      }
    }
    screenshots: Array<{
      asset: {
        url: string
      }
      caption?: string
    }>
    videos?: Array<{
      asset: {
        url: string
      }
    }>
  }
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  completedAt: string
  _createdAt: string
  _updatedAt: string
}
```

#### Sanity Schema Definition
```typescript
// sanity/schemas/project.ts

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'One-line project description for portfolio grid',
      validation: (Rule) => Rule.required().max(100)
    },
    {
      name: 'serviceTypes',
      title: 'Service Types',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Web Development', value: 'web-dev'},
          {title: 'Brand Identity', value: 'brand-identity'},
          {title: 'Consulting', value: 'consulting'},
          {title: 'Creative Services', value: 'creative'}
        ]
      },
      validation: (Rule) => Rule.required().min(1)
    },
    {
      name: 'client',
      title: 'Client Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Client Name',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'industry',
          title: 'Industry',
          type: 'string',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'logo',
          title: 'Client Logo',
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          name: 'testimonial',
          title: 'Client Testimonial',
          type: 'text',
          rows: 4
        }
      ]
    },
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
      description: 'What problem did this project solve?',
      rows: 5,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'solution',
      title: 'The Solution',
      type: 'text',
      description: 'How did you solve it?',
      rows: 5,
      validation: (Rule) => Rule.required()
    },
    {
      name: 'results',
      title: 'Results & Metrics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'metric',
            title: 'Metric Name',
            type: 'string',
            placeholder: 'e.g., Load Time Improvement'
          },
          {
            name: 'value',
            title: 'Value',
            type: 'string',
            placeholder: 'e.g., 60% faster'
          }
        ]
      }]
    },
    {
      name: 'techStack',
      title: 'Technology Stack',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Technologies used (React, Node, MongoDB, etc.)'
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Major features built (Admin Panel, Booking System, etc.)'
    },
    {
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        {
          name: 'hero',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true
          },
          validation: (Rule) => Rule.required()
        },
        {
          name: 'screenshots',
          title: 'Screenshots',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true }
              },
              {
                name: 'caption',
                title: 'Caption',
                type: 'string'
              }
            ]
          }]
        },
        {
          name: 'videos',
          title: 'Videos',
          type: 'array',
          of: [{type: 'file'}]
        }
      ]
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      description: 'Link to the live project'
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link to GitHub repository (if public)'
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Display on homepage?',
      initialValue: false
    },
    {
      name: 'completedAt',
      title: 'Completion Date',
      type: 'datetime',
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client.name',
      media: 'media.hero'
    },
    prepare({title, client, media}) {
      return {
        title: title,
        subtitle: client,
        media: media
      }
    }
  }
}
```

### Homepage Structure (Full Site)

**Section Order:**

1. **Hero Section**
   - Animated grid background (subtle, slow-moving)
   - Large headline: "Creative engineering for digital identity"
   - Subheadline: "Brand | Web | Systems"
   - Two CTAs: "View Work" (primary) + "Work With Me" (secondary)
   - Scroll indicator at bottom

2. **Services Grid**
   - Three cards side-by-side (desktop), stacked (mobile)
   - Card 1: Brand Systems
     - Icon: Custom geometric logo icon
     - Title: "Brand Systems"
     - Description: "Logos, identity kits, stylescapes, creative direction"
     - Link: "/services/brand-identity"
   - Card 2: Web + Digital
     - Icon: Code/browser icon
     - Title: "Web + Digital"
     - Description: "Website design, front-end builds, UX structure, content systems"
     - Link: "/services/web-development"
   - Card 3: Creative Consulting
     - Icon: Lightbulb/strategy icon
     - Title: "Creative Consulting"
     - Description: "Messaging, positioning, project oversight, digital architecture"
     - Link: "/services/consulting"
   - Each card has cyan accent underline animation on hover

3. **Featured Work**
   - H2: "Recent Projects"
   - Grid of 3 featured portfolio pieces
   - Each shows: hero image, title, client name, service type tags
   - Click goes to full case study
   - "View All Work" link at bottom

4. **About Section**
   - Portrait/silhouette image (left side on desktop)
   - Text content (right side):
     - "I'm Jason — a digital generalist with a creative core"
     - List of capabilities
     - Brief background mention
   - "Learn More About Me" link to /about

5. **Contact CTA**
   - Centered section with cyan accent border
   - Headline: "Let's build something that feels like the future"
   - Contact button
   - Email: jason@jamarq.digital

6. **Footer**
   - Links: About, Work, Services, Contact
   - Social media icons
   - Copyright
   - Built with [tech stack] mention (optional)

### Component Requirements

#### Hero Component (with Animation)
```tsx
// components/sections/Hero.tsx

'use client'

import { motion } from 'framer-motion'
import GridBackground from '@/components/animations/GridBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <GridBackground />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Creative engineering for<br />
          <span className="text-jamarq-cyan">digital identity</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-jamarq-gray mb-12">
          Brand | Web | Systems
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-jamarq-cyan text-jamarq-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all"
          >
            View Work
          </motion.a>
          
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-jamarq-cyan text-jamarq-cyan px-8 py-4 rounded-md font-semibold text-lg hover:bg-jamarq-cyan hover:text-jamarq-black transition-all"
          >
            Work With Me
          </motion.a>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-jamarq-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-jamarq-cyan rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
```

#### Grid Background Animation
```tsx
// components/animations/GridBackground.tsx

'use client'

import { motion } from 'framer-motion'

export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(12, 227, 242, 0.1)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
      
      {/* Optional: Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jamarq-black/50 to-jamarq-black" />
    </div>
  )
}
```

#### Service Card Component
```tsx
// components/sections/ServiceCard.tsx

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8 h-full transition-all duration-300 hover:border-jamarq-cyan hover:shadow-lg hover:shadow-jamarq-cyan/20"
      >
        <div className="text-jamarq-cyan mb-4 text-4xl">
          {icon}
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 relative inline-block">
          {title}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-jamarq-cyan"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </h3>
        
        <p className="text-jamarq-gray leading-relaxed">
          {description}
        </p>
      </motion.div>
    </Link>
  )
}
```

#### Portfolio Grid Component
```tsx
// components/portfolio/PortfolioGrid.tsx

'use client'

import { useState } from 'react'
import { Project, ServiceType } from '@/lib/types/portfolio'
import PortfolioCard from './PortfolioCard'
import PortfolioFilter from './PortfolioFilter'

interface PortfolioGridProps {
  projects: Project[]
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [filter, setFilter] = useState<ServiceType | 'all'>('all')
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.serviceTypes.includes(filter))
  
  return (
    <div className="space-y-12">
      <PortfolioFilter
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project._id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-jamarq-gray text-lg">
            No projects found for this filter.
          </p>
        </div>
      )}
    </div>
  )
}
```

#### Portfolio Card Component
```tsx
// components/portfolio/PortfolioCard.tsx

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/types/portfolio'

interface PortfolioCardProps {
  project: Project
}

const serviceTypeLabels = {
  'web-dev': 'Web Development',
  'brand-identity': 'Brand Identity',
  'consulting': 'Consulting',
  'creative': 'Creative Services'
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Link href={`/work/${project.slug.current}`}>
      <motion.article
        whileHover={{ y: -8 }}
        className="group bg-jamarq-charcoal rounded-lg overflow-hidden border border-jamarq-slate hover:border-jamarq-cyan transition-all duration-300"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.media.hero.asset.url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.serviceTypes.map((type) => (
              <span
                key={type}
                className="text-xs px-2 py-1 rounded bg-jamarq-slate text-jamarq-cyan"
              >
                {serviceTypeLabels[type]}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-jamarq-cyan transition-colors">
            {project.title}
          </h3>
          
          <p className="text-jamarq-gray text-sm mb-3">
            {project.client.name}
          </p>
          
          <p className="text-jamarq-gray line-clamp-2">
            {project.tagline}
          </p>
        </div>
      </motion.article>
    </Link>
  )
}
```

### Case Study Page Structure

**Layout:**
1. Hero section with large project image
2. Project metadata (client, services, tech stack, live URL)
3. The Challenge section
4. The Solution section
5. Results & Metrics (if available)
6. Screenshot gallery
7. Key Features list
8. Client testimonial (if available)
9. Tech Stack details
10. Other projects CTA

**Implementation:**
```tsx
// app/(marketing)/work/[slug]/page.tsx

import { getProject, getAllProjectSlugs } from '@/lib/sanity/queries'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function CaseStudyPage({
  params
}: {
  params: { slug: string }
}) {
  const project = await getProject(params.slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <article className="py-24">
      {/* Hero */}
      <section className="mb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <Link
              href="/work"
              className="text-jamarq-cyan hover:text-jamarq-magenta transition-colors inline-flex items-center gap-2"
            >
              ← Back to Work
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-jamarq-gray mb-8">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <div>
              <span className="text-jamarq-gray text-sm">Client</span>
              <p className="font-semibold">{project.client.name}</p>
            </div>
            <div>
              <span className="text-jamarq-gray text-sm">Industry</span>
              <p className="font-semibold">{project.client.industry}</p>
            </div>
            <div>
              <span className="text-jamarq-gray text-sm">Services</span>
              <p className="font-semibold">
                {project.serviceTypes.map(type => 
                  serviceTypeLabels[type]
                ).join(', ')}
              </p>
            </div>
            {project.liveUrl && (
              <div>
                <span className="text-jamarq-gray text-sm">Live Site</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-jamarq-cyan hover:text-jamarq-magenta"
                >
                  View Project →
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="relative w-full aspect-video max-w-7xl mx-auto">
          <Image
            src={project.media.hero.asset.url}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>
      
      {/* Content sections... */}
      <div className="container mx-auto px-4 max-w-4xl space-y-16">
        {/* The Challenge */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-jamarq-cyan">
            The Challenge
          </h2>
          <p className="text-lg text-jamarq-gray leading-relaxed whitespace-pre-line">
            {project.challenge}
          </p>
        </section>
        
        {/* The Solution */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-jamarq-cyan">
            The Solution
          </h2>
          <p className="text-lg text-jamarq-gray leading-relaxed whitespace-pre-line">
            {project.solution}
          </p>
        </section>
        
        {/* Results (if available) */}
        {project.results && project.results.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-jamarq-cyan">
              Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-6"
                >
                  <p className="text-3xl font-bold text-jamarq-cyan mb-2">
                    {result.value}
                  </p>
                  <p className="text-jamarq-gray">{result.metric}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Screenshots */}
        {project.media.screenshots && project.media.screenshots.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-jamarq-cyan">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.media.screenshots.map((screenshot, index) => (
                <div key={index} className="relative aspect-video">
                  <Image
                    src={screenshot.asset.url}
                    alt={screenshot.caption || `Screenshot ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Features */}
        {project.features && project.features.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-jamarq-cyan">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-jamarq-gray"
                >
                  <span className="text-jamarq-cyan mt-1">→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}
        
        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-jamarq-cyan">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-jamarq-charcoal border border-jamarq-slate rounded text-jamarq-white font-mono text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}
        
        {/* Testimonial */}
        {project.client.testimonial && (
          <section className="bg-jamarq-charcoal border border-jamarq-cyan/30 rounded-lg p-8">
            <blockquote className="text-xl text-jamarq-gray italic mb-4">
              "{project.client.testimonial}"
            </blockquote>
            <p className="text-jamarq-white font-semibold">
              — {project.client.name}
            </p>
          </section>
        )}
      </div>
      
      {/* Other Projects CTA */}
      <section className="mt-24 py-16 bg-jamarq-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Explore More Work
          </h2>
          <Link
            href="/work"
            className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </article>
  )
}
```

### Service Page Template

All service pages follow the same structure:

**Sections:**
1. Hero with service name and tagline
2. Service overview (what it includes)
3. Process/approach (how you work)
4. Relevant portfolio samples
5. Pricing guidance (optional)
6. FAQ section
7. Contact CTA

**Example: Web Development Service Page**
```tsx
// app/(marketing)/services/web-development/page.tsx

export const metadata = {
  title: 'Web Development Services | JAMARQ Digital',
  description: 'Custom web development with React, Next.js, and modern tools. Admin panels, booking systems, and business automation.',
}

export default function WebDevelopmentPage() {
  return (
    <div className="py-24">
      {/* Hero */}
      <section className="container mx-auto px-4 max-w-4xl mb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Web Development
        </h1>
        <p className="text-xl text-jamarq-gray">
          Custom websites and web applications built with modern tools.
          From simple landing pages to complex business management systems.
        </p>
      </section>
      
      {/* What's Included */}
      <section className="container mx-auto px-4 max-w-6xl mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What's Included
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-jamarq-cyan">
              Custom Design
            </h3>
            <p className="text-jamarq-gray">
              Unique, on-brand designs tailored to your business.
              No templates, no shortcuts.
            </p>
          </div>
          
          <div className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-jamarq-cyan">
              Modern Tech Stack
            </h3>
            <p className="text-jamarq-gray">
              React, Next.js, TypeScript, and cutting-edge tools for
              fast, reliable performance.
            </p>
          </div>
          
          <div className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-jamarq-cyan">
              Admin Panels
            </h3>
            <p className="text-jamarq-gray">
              Custom admin dashboards so you can manage your content
              without touching code.
            </p>
          </div>
          
          <div className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-jamarq-cyan">
              Mobile Responsive
            </h3>
            <p className="text-jamarq-gray">
              Perfect display on all devices. Mobile-first design approach.
            </p>
          </div>
          
          <div className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-jamarq-cyan">
              SEO Optimized
            </h3>
            <p className="text-jamarq-gray">
              Built-in SEO best practices. Meta tags, structured data,
              and performance optimization.
            </p>
          </div>
          
          <div className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-jamarq-cyan">
              Ongoing Support
            </h3>
            <p className="text-jamarq-gray">
              Post-launch support and maintenance plans available.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="container mx-auto px-4 max-w-4xl mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          How We Work
        </h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-jamarq-cyan flex items-center justify-center text-jamarq-black font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-jamarq-gray">
                We start with a conversation about your business, goals,
                and what you need from your website.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-jamarq-cyan flex items-center justify-center text-jamarq-black font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-jamarq-gray">
                We create a detailed project plan, sitemap, and feature list.
                Clear timeline and deliverables.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-jamarq-cyan flex items-center justify-center text-jamarq-black font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-jamarq-gray">
                Visual design mockups for key pages. Iterate until
                it matches your vision.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-jamarq-cyan flex items-center justify-center text-jamarq-black font-bold text-xl">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-jamarq-gray">
                Build your site with clean, professional code. Regular
                progress updates throughout.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-jamarq-cyan flex items-center justify-center text-jamarq-black font-bold text-xl">
              5
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-jamarq-gray">
                Testing, optimization, and deployment. Training on how
                to manage your site.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Work */}
      <section className="container mx-auto px-4 max-w-6xl mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Web Development Projects
        </h2>
        {/* Portfolio grid filtered to web-dev projects */}
        {/* This would fetch from Sanity in real implementation */}
        <div className="text-center">
          <Link
            href="/work?filter=web-dev"
            className="text-jamarq-cyan hover:text-jamarq-magenta underline"
          >
            View all web development work →
          </Link>
        </div>
      </section>
      
      {/* Pricing Guidance (Optional) */}
      <section className="container mx-auto px-4 max-w-4xl mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Investment
        </h2>
        <div className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-8">
          <p className="text-jamarq-gray text-lg mb-4">
            Project pricing varies based on complexity, features, and timeline.
            Most projects range from $3,500 to $15,000.
          </p>
          <p className="text-jamarq-gray text-lg">
            All projects include responsive design, basic SEO, and post-launch
            support. Ongoing maintenance plans available.
          </p>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-jamarq-gray mb-8">
          Let's discuss your project and see if we're a good fit.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
```

### Contact Form Implementation

**Contact Page Structure:**
- Hero with headline
- Multi-field form
- Contact information (email, social links)
- Response time expectation

**Form Fields:**
- Name (required)
- Email (required)
- Service interest (select: Web Development, Brand Identity, Consulting, Other)
- Project details (textarea, required)
- Budget range (optional)
- Timeline (optional)

**API Route Handler:**
```typescript
// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  service: z.enum(['web-dev', 'brand-identity', 'consulting', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate input
    const data = contactSchema.parse(body)
    
    // TODO: Send email notification (use service like Resend, SendGrid, etc.)
    // TODO: Store in database (Supabase, etc.)
    
    // For now, just log (REPLACE IN PRODUCTION)
    console.log('Contact form submission:', data)
    
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
```

**Contact Form Component:**
```tsx
// components/sections/ContactForm.tsx

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  service: z.enum(['web-dev', 'brand-identity', 'consulting', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit form')
      }
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-jamarq-charcoal border border-jamarq-slate rounded-md focus:border-jamarq-cyan focus:outline-none focus:ring-1 focus:ring-jamarq-cyan transition-colors"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-jamarq-charcoal border border-jamarq-slate rounded-md focus:border-jamarq-cyan focus:outline-none focus:ring-1 focus:ring-jamarq-cyan transition-colors"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          Service Interest *
        </label>
        <select
          {...register('service')}
          id="service"
          className="w-full px-4 py-3 bg-jamarq-charcoal border border-jamarq-slate rounded-md focus:border-jamarq-cyan focus:outline-none focus:ring-1 focus:ring-jamarq-cyan transition-colors"
        >
          <option value="">Select a service</option>
          <option value="web-dev">Web Development</option>
          <option value="brand-identity">Brand Identity</option>
          <option value="consulting">Consulting</option>
          <option value="other">Other</option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
        )}
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Project Details *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full px-4 py-3 bg-jamarq-charcoal border border-jamarq-slate rounded-md focus:border-jamarq-cyan focus:outline-none focus:ring-1 focus:ring-jamarq-cyan transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      
      {/* Budget (Optional) */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium mb-2">
          Budget Range (Optional)
        </label>
        <select
          {...register('budget')}
          id="budget"
          className="w-full px-4 py-3 bg-jamarq-charcoal border border-jamarq-slate rounded-md focus:border-jamarq-cyan focus:outline-none focus:ring-1 focus:ring-jamarq-cyan transition-colors"
        >
          <option value="">Prefer not to say</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-15k">$10,000 - $15,000</option>
          <option value="over-15k">Over $15,000</option>
        </select>
      </div>
      
      {/* Timeline (Optional) */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
          Timeline (Optional)
        </label>
        <select
          {...register('timeline')}
          id="timeline"
          className="w-full px-4 py-3 bg-jamarq-charcoal border border-jamarq-slate rounded-md focus:border-jamarq-cyan focus:outline-none focus:ring-1 focus:ring-jamarq-cyan transition-colors"
        >
          <option value="">Select timeline</option>
          <option value="asap">ASAP</option>
          <option value="1-2-months">1-2 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-jamarq-cyan text-jamarq-black px-6 py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-500/10 border border-green-500 rounded-md p-4 text-green-500">
          Thanks for reaching out! I'll get back to you within 24 hours.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-500/10 border border-red-500 rounded-md p-4 text-red-500">
          Something went wrong. Please try again or email me directly at jason@jamarq.digital.
        </div>
      )}
    </form>
  )
}
```

### Navigation & Layout

**Header Component:**
```tsx
// components/layout/Header.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jamarq-black/80 backdrop-blur-md border-b border-jamarq-slate">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          JAMARQ
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-colors ${
                  isActive ? 'text-jamarq-cyan' : 'text-jamarq-white hover:text-jamarq-cyan'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-jamarq-cyan"
                  />
                )}
              </Link>
            )
          })}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-jamarq-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-jamarq-charcoal border-t border-jamarq-slate"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-jamarq-white hover:text-jamarq-cyan transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
```

**Footer Component:**
```tsx
// components/layout/Footer.tsx

import Link from 'next/link'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: 'twitter' },
]

const footerLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-jamarq-charcoal border-t border-jamarq-slate">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">JAMARQ</h3>
            <p className="text-jamarq-gray">
              Creative engineering for digital identity.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-jamarq-gray hover:text-jamarq-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <a
              href="mailto:jason@jamarq.digital"
              className="text-jamarq-gray hover:text-jamarq-cyan transition-colors block mb-4"
            >
              jason@jamarq.digital
            </a>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jamarq-gray hover:text-jamarq-cyan transition-colors"
                  aria-label={social.name}
                >
                  {/* Add actual icon components here */}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-jamarq-slate pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-jamarq-gray text-sm">
            © {new Date().getFullYear()} JAMARQ Digital. All rights reserved.
          </p>
          <p className="text-jamarq-gray text-sm">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
```

### Sanity Configuration

**Sanity Setup:**
```bash
npm install sanity @sanity/image-url
npx sanity init
```

**sanity.config.ts:**
```typescript
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'JAMARQ Portfolio',
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
```

**Sanity Client (lib/sanity/client.ts):**
```typescript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
```

**Sanity Queries (lib/sanity/queries.ts):**
```typescript
import { client } from './client'
import type { Project } from '@/lib/types/portfolio'

export async function getAllProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project"] | order(completedAt desc) {
      _id,
      _type,
      title,
      slug,
      tagline,
      serviceTypes,
      client,
      challenge,
      solution,
      results,
      techStack,
      features,
      media,
      liveUrl,
      githubUrl,
      featured,
      completedAt,
      _createdAt,
      _updatedAt
    }
  `)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(`
    *[_type == "project" && featured == true] | order(completedAt desc) [0...3] {
      _id,
      _type,
      title,
      slug,
      tagline,
      serviceTypes,
      client,
      media,
      featured,
      completedAt
    }
  `)
}

export async function getProject(slug: string): Promise<Project | null> {
  return client.fetch(
    `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      tagline,
      serviceTypes,
      client,
      challenge,
      solution,
      results,
      techStack,
      features,
      media,
      liveUrl,
      githubUrl,
      featured,
      completedAt,
      _createdAt,
      _updatedAt
    }
  `,
    { slug }
  )
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await client.fetch(`
    *[_type == "project"] {
      "slug": slug.current
    }
  `)
  return projects.map((p: { slug: string }) => p.slug)
}

export async function getProjectsByServiceType(serviceType: string): Promise<Project[]> {
  return client.fetch(
    `
    *[_type == "project" && $serviceType in serviceTypes] | order(completedAt desc) {
      _id,
      _type,
      title,
      slug,
      tagline,
      serviceTypes,
      client,
      media,
      completedAt
    }
  `,
    { serviceType }
  )
}
```

### Performance & SEO

**Next.js Configuration (next.config.js):**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add your Sanity CDN domain
    formats: ['image/avif', 'image/webp'],
  },
  // Enable React strict mode
  reactStrictMode: true,
}

module.exports = nextConfig
```

**SEO Metadata Template:**
```typescript
// app/layout.tsx or individual pages

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JAMARQ Digital - Web Development & Creative Services',
  description: 'Custom web development, brand identity, and consulting services in Lexington and Winston-Salem, NC. Specializing in React, Next.js, and modern web technologies.',
  keywords: [
    'web development',
    'brand identity',
    'consulting',
    'React developer',
    'Next.js',
    'Lexington NC',
    'Winston-Salem NC',
    'custom websites',
    'admin panels',
  ],
  authors: [{ name: 'Jason Marshall' }],
  creator: 'Jason Marshall',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jamarq.digital',
    siteName: 'JAMARQ Digital',
    title: 'JAMARQ Digital - Web Development & Creative Services',
    description: 'Custom web development and creative services',
    images: [
      {
        url: '/og-image.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: 'JAMARQ Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JAMARQ Digital',
    description: 'Custom web development and creative services',
    images: ['/og-image.jpg'],
    creator: '@yourusername',
  },
}
```

**Structured Data (JSON-LD):**
```tsx
// components/StructuredData.tsx

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JAMARQ Digital',
    description: 'Custom web development and creative services',
    url: 'https://jamarq.digital',
    email: 'jason@jamarq.digital',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lexington',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    areaServed: [
      'Lexington, NC',
      'Winston-Salem, NC',
      'North Carolina',
      'United States',
    ],
    serviceType: [
      'Web Development',
      'Brand Identity',
      'Consulting',
      'Creative Services',
    ],
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Add to layout.tsx in <head>
```

### Animation Performance Guidelines

**Framer Motion Best Practices:**
1. Use `transform` and `opacity` for animations (GPU-accelerated)
2. Avoid animating `width`, `height`, `top`, `left` (causes reflow)
3. Use `layoutId` for shared element transitions
4. Add `will-change` CSS property sparingly
5. Test on mobile devices for performance

**Animation Examples:**

```tsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Deployment Checklist

**Before Launching:**
- [ ] All images optimized and compressed
- [ ] Favicon and app icons created
- [ ] OG image created (1200x630px)
- [ ] All forms tested and working
- [ ] All links tested (internal and external)
- [ ] Mobile responsiveness verified on multiple devices
- [ ] Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Lighthouse audit (target 90+ scores)
- [ ] SEO meta tags on all pages
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] 404 page created
- [ ] Analytics installed (Plausible, Fathom, or Google Analytics)
- [ ] Contact form email notifications working
- [ ] Environment variables configured in Vercel
- [ ] Custom domain DNS configured
- [ ] SSL certificate verified

**Vercel Deployment Steps:**
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy
5. Add custom domain
6. Verify deployment

**Environment Variables Needed:**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN= (for write operations)
EMAIL_SERVICE_API_KEY= (for contact form)
```

---

## CONTENT GUIDELINES

### Voice & Tone
- **Direct and confident** - No filler words, no hedging
- **Clear over clever** - Communicate value, not ego
- **Professional but human** - Warm without being casual
- **Solution-focused** - Emphasize outcomes, not just process

### Writing Examples

**Good:**
> "I build custom web applications that solve real business problems. No templates, no shortcuts."

**Bad:**
> "I'm passionate about creating amazing digital experiences that leverage cutting-edge technologies to deliver unparalleled value!"

**Good:**
> "Your website needs to work for your business, not against it. That means fast load times, easy updates, and a design that actually converts visitors into customers."

**Bad:**
> "In today's digital landscape, having a robust online presence is absolutely essential for businesses looking to maximize their potential and reach their target audience effectively."

### Taglines & Headlines
- Short, punchy, memorable
- Focus on transformation/outcomes
- Avoid jargon and buzzwords
- Examples:
  - "Creative engineering for digital identity"
  - "Build it right the first time"
  - "Websites that work as hard as you do"
  - "Let's build something that feels like the future"

---

## ONGOING MAINTENANCE STRATEGY

### Regular Updates
- **Weekly:** Add new blog post or case study (once content system is active)
- **Monthly:** Review analytics, optimize underperforming pages
- **Quarterly:** Refresh featured work, update services if expanded
- **Annually:** Design refresh if needed, technology stack update

### Content Addition Workflow
1. Complete project
2. Immediately gather: screenshots, client feedback, metrics
3. Write case study in Sanity (mobile or desktop)
4. Publish to portfolio
5. Share on social media
6. Update service pages if new capabilities demonstrated

---

## TROUBLESHOOTING & COMMON ISSUES

### Build Errors
- **TypeScript errors:** Run `npm run type-check` to see all errors
- **Sanity fetch errors:** Check environment variables and Sanity dashboard
- **Image optimization errors:** Verify image domains in next.config.js

### Performance Issues
- Use Next.js Image component for all images
- Implement lazy loading for below-fold content
- Minimize client-side JavaScript
- Use static generation where possible

### SEO Issues
- Verify meta tags with Facebook Sharing Debugger
- Test structured data with Google Rich Results Test
- Submit sitemap to Google Search Console
- Monitor Core Web Vitals

---

## EXPANSION ROADMAP

### Phase 2 Features (Post-Launch)
- Blog/content system with categories and tags
- Newsletter signup and email automation
- Client portal for project tracking
- Testimonials collection system
- Project cost calculator
- Booking calendar integration

### Phase 3 Features (Long-term)
- Multi-language support
- Dark/light mode toggle (currently dark only)
- Case study template generator
- Portfolio piece voting/favorites
- Resource library (tools, templates, guides)
- Video testimonials integration
- Live chat support

---

## CRITICAL REMINDERS

1. **Build placeholder FIRST** - Get online immediately
2. **Wait for explicit instruction** before starting full site
3. **Follow the design system strictly** - Consistency is key
4. **TypeScript types first** - Define data models before components
5. **Mobile-first always** - Test on mobile throughout development
6. **Performance matters** - Every animation, every image, every byte counts
7. **Accessibility is non-negotiable** - Semantic HTML, ARIA labels, keyboard navigation
8. **SEO from day one** - Meta tags, structured data, sitemap
9. **Content workflow matters** - Make it easy to add new work
10. **Document as you go** - Comment complex logic, explain architectural decisions

---

## FINAL NOTES

This is a comprehensive guide, but you (Jason) are the final authority on all decisions. If something doesn't feel right, trust your instinct and adjust. The goal is a portfolio that:

1. Gets you clients NOW (placeholder phase)
2. Represents your capabilities ACCURATELY (full site phase)
3. Grows WITH you as JAMARQ expands
4. Works HARD for you (SEO, conversions, credibility)

Copilot: You now have everything you need to build this site. Start with the placeholder, get it live, then wait for the green light to build the full production site.

Good luck, Jason. Let's build something great.

---

# Appendix: portfolio-instructions-v2/README.md (verbatim)

# JAMARQ PORTFOLIO REBUILD - INSTRUCTION FILES

Complete GitHub Copilot instruction set for rebuilding the JAMARQ portfolio site.

---

## 📋 WHAT THIS IS

These instruction files guide you (and GitHub Copilot) through building an enhanced portfolio site that:
- Reduces bounce rate from 90% to 60-70%
- Adds context and depth without losing minimalism
- Builds trust through transparency and process
- Positions JAMARQ as a premium, systems-focused studio

---

## 📁 FILE STRUCTURE

Read these files **in order:**

### Core Instructions
1. **00_MASTER_PORTFOLIO_REBUILD.md** - Start here. Overview of entire project.
2. **01_HOMEPAGE_STRUCTURE.md** - Homepage layout, sections, and flow
3. **02_HOMEPAGE_COPY.md** - All homepage copy, ready to copy/paste
4. **03_SERVICES_PAGE.md** - Services page structure and copy
5. **04_PROCESS_PAGE.md** - Process page structure and copy
6. **05_CONTACT_PAGE.md** - Contact page with form specs
7. **06_CASE_STUDIES_PAGE.md** - Work/portfolio placeholder page
8. **07_COMPONENTS.md** - Reusable component specifications
9. **08_STYLING_TOKENS.md** - Complete design system tokens
10. **09_IMPLEMENTATION_CHECKLIST.md** - Step-by-step build checklist

---

## 🎯 HOW TO USE THESE FILES

### For You (Manual Development)
1. Read `00_MASTER_PORTFOLIO_REBUILD.md` first
2. Open `09_IMPLEMENTATION_CHECKLIST.md` 
3. Follow the checklist, referencing other files as needed
4. Copy/paste copy from `02_HOMEPAGE_COPY.md` and similar files
5. Use `07_COMPONENTS.md` and `08_STYLING_TOKENS.md` as reference

### For GitHub Copilot
1. Open your project in VS Code
2. Open the relevant instruction file (e.g., `02_HOMEPAGE_COPY.md`)
3. Start typing a comment about what you're building
4. Copilot will suggest code based on the instructions in the file
5. Accept, modify, or reject suggestions as needed

**Example:**
```javascript
// Create the sub-hero section with tagline
// [Copilot will suggest code based on 02_HOMEPAGE_COPY.md]
```

---

## 🏗️ QUICK START GUIDE

### Phase 1: Setup (Day 1)
1. Review all instruction files
2. Set up design tokens from `08_STYLING_TOKENS.md`
3. Create component folder structure from `07_COMPONENTS.md`
4. Export and optimize logo assets

### Phase 2: Homepage (Days 2-4)
1. Follow `01_HOMEPAGE_STRUCTURE.md` for layout
2. Use `02_HOMEPAGE_COPY.md` for all text content
3. Build components as needed from `07_COMPONENTS.md`
4. Test mobile responsiveness

### Phase 3: Secondary Pages (Days 5-7)
1. Build Contact page (`05_CONTACT_PAGE.md`)
2. Build Services page (`03_SERVICES_PAGE.md`)
3. Build Process page (`04_PROCESS_PAGE.md`)
4. Build Case Studies page (`06_CASE_STUDIES_PAGE.md`)

### Phase 4: Polish & Launch (Days 8-10)
1. Follow checklist in `09_IMPLEMENTATION_CHECKLIST.md`
2. Run accessibility audits
3. Test performance
4. Deploy

---

## 📊 EXPECTED RESULTS

### Before (Current Site)
- 90% bounce rate
- Minimal engagement
- No context about services
- No process explanation
- No portfolio (case studies)

### After (New Site)
- 60-70% bounce rate (target)
- Multiple engagement points
- Clear service offerings
- Transparent process
- Professional placeholder for portfolio
- 5 pages instead of 1
- More scroll depth
- Better conversion path

---

## 🎨 DESIGN PRINCIPLES

All instructions follow these principles:

1. **Minimal but not empty** - Add depth without clutter
2. **Confident but not arrogant** - Show expertise without bragging
3. **Specific but not verbose** - Precision over word count
4. **Modern but not trendy** - Timeless, not following fads
5. **Fast but not rushed** - Performance is non-negotiable

---

## 📝 COPY VOICE GUIDELINES

All copy in these files follows JAMARQ voice:
- Short sentences
- No fluff or filler
- Active voice
- Direct language
- Technical but accessible
- Confident but humble
- Specific over vague

**Examples of JAMARQ voice:**
✅ "Hand-built, modern, responsive. Zero templates."
❌ "We leverage cutting-edge technologies to deliver robust solutions."

✅ "Build with intention."
❌ "We're passionate about creating innovative digital experiences."

---

## 🔧 TECHNICAL STACK

These instructions are **framework-agnostic** but assume:
- React (or similar component-based framework)
- Modern CSS (custom properties, Flexbox, Grid)
- Semantic HTML
- Accessibility-first approach
- Performance optimization

You can adapt to:
- Next.js
- Gatsby
- Vue
- Svelte
- Plain HTML/CSS/JS

---

## ✅ QUALITY STANDARDS

Every file includes specifications for:

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Focus states

### Performance
- <2 second load time
- 90+ Lighthouse scores
- Optimized images
- Minimal JavaScript
- Fast First Contentful Paint

### SEO
- Proper heading hierarchy
- Meta tags
- Alt text
- Semantic HTML
- Clean URL structure

---

## 📞 CONTACT INFORMATION IN FILES

All instruction files use these standard emails:
- `hello@jamarq.digital` - New projects, general inquiries
- `jason@jamarq.digital` - Active project communication
- `support@jamarq.digital` - Post-launch support

**Update these** in your actual implementation if needed.

---

## 🚫 WHAT'S NOT INCLUDED

These files do **not** include:
- Backend code (APIs, databases)
- CMS integration
- E-commerce functionality
- Blog system
- Advanced animations
- Video content
- Third-party integrations (beyond basic forms)

These can be added later as needed.

---

## 🔄 UPDATING THESE FILES

As you build and learn:

1. **Found a better approach?** Update the relevant file
2. **Copy needs tweaking?** Edit `02_HOMEPAGE_COPY.md`
3. **New component needed?** Add to `07_COMPONENTS.md`
4. **Design token changed?** Update `08_STYLING_TOKENS.md`

Keep these files as your **single source of truth**.

---

## 📈 MEASURING SUCCESS

After launch, track:

### Analytics
- Bounce rate (target: 60-70%)
- Average session duration (target: 2+ minutes)
- Pages per session (target: 2.5+)
- Conversion rate (track baseline)

### Performance
- Lighthouse Performance score (target: 90+)
- Load time (target: <2 seconds)
- First Contentful Paint (target: <1.5 seconds)
- Cumulative Layout Shift (target: <0.1)

### Engagement
- Scroll depth
- Time on homepage
- Contact form submissions
- Email clicks

---

## 🐛 TROUBLESHOOTING

**If something isn't working:**

1. Re-read the relevant instruction file
2. Check the implementation checklist
3. Verify you're using correct design tokens
4. Test in different browsers
5. Check browser console for errors
6. Verify all files are properly linked

**Common issues:**
- Copy not showing: Check file paths
- Styling broken: Verify CSS custom properties loaded
- Layout issues: Check responsive breakpoints
- Form not working: Verify backend connection

---

## 🎓 LEARNING RESOURCES

If you need to learn more about concepts in these files:

- **Design Systems:** [Design Systems Handbook](https://www.designbetter.co/design-systems-handbook)
- **Accessibility:** [WebAIM](https://webaim.org/)
- **Performance:** [Web.dev](https://web.dev/performance/)
- **React:** [React Docs](https://react.dev/)
- **CSS Grid/Flexbox:** [CSS-Tricks](https://css-tricks.com/)

---

## 💡 PRO TIPS

1. **Read all files before starting** - Understand the full scope
2. **Follow the checklist** - Don't skip phases
3. **Test constantly** - Mobile, accessibility, performance
4. **Keep it minimal** - When in doubt, simplify
5. **Use components** - Build once, reuse everywhere
6. **Copy/paste copy** - Don't rewrite the provided text
7. **Trust the process** - These instructions are battle-tested

---

## 🚀 READY TO BUILD?

1. ✅ Read `00_MASTER_PORTFOLIO_REBUILD.md`
2. ✅ Review `09_IMPLEMENTATION_CHECKLIST.md`
3. ✅ Set up your development environment
4. ✅ Export logo assets
5. ✅ Start with Phase 1 (Setup)

**Let's build something intentional.**

---

## 📄 FILE SIZES (for reference)

- Master: ~800 lines
- Homepage Structure: ~300 lines
- Homepage Copy: ~500 lines
- Services Page: ~400 lines
- Process Page: ~350 lines
- Contact Page: ~400 lines
- Case Studies Page: ~350 lines
- Components: ~600 lines
- Styling Tokens: ~500 lines
- Implementation Checklist: ~400 lines

**Total: ~4,600 lines of comprehensive instructions**

---

## 📧 QUESTIONS?

If you're stuck or need clarification on any instruction:

1. Re-read the relevant section
2. Check the implementation checklist
3. Review the component specs
4. Look at usage examples
5. Ask specific questions based on what you've tried

---

**Version:** 1.0  
**Last Updated:** December 2024  
**Created for:** JAMARQ Digital Portfolio Rebuild  
**Build with intention.**

---

# Appendix: portfolio-instructions-v2/00_MASTER_PORTFOLIO_REBUILD.md (verbatim)

# JAMARQ Portfolio Rebuild - Copilot Instructions

## Context
You are helping rebuild the JAMARQ Digital portfolio site. The goal is to reduce the 90% bounce rate by adding engagement and depth while maintaining the minimal, intentional aesthetic.

## Brand Voice & Style
- **Tagline:** "Build with intention"
- **Tone:** Confident, minimal, deliberate. Short sentences. No fluff.
- **Never use:** Corporate buzzwords, excessive adjectives, apologetic language
- **Always use:** Concrete specifics, direct statements, intentional phrasing

## Design System
```
Colors:
- JAMARQ Black: #0D0D0F (primary background)
- Accent Cyan: #09A6D6 (highlights, hover states, accents)
- Steel: #1E1E22 (secondary background)
- Slate: #2C2C30 (tertiary background)
- Mist: #E6E6E8 (light text, subtle elements)

Typography:
- Font: Inter
- Headings: Semi-Bold (600)
- Body: Regular (400)
- Base size: 16px
- Line height: 1.6

Spacing:
- Section padding: 120px top/bottom (desktop), 60px (mobile)
- Element spacing: 40px between major elements
- Grid gaps: 40px (desktop), 20px (mobile)
```

## Component Patterns

### When creating buttons:
```tsx
// Primary CTA
className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded transition-colors duration-200"

// Secondary/Ghost button
className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold px-8 py-4 rounded transition-colors duration-200"
```

### When creating section headings:
```tsx
<h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
  {heading}
</h2>
```

### When creating cards:
```tsx
<div className="bg-steel p-8 rounded border-l-2 border-cyan-500 hover:border-cyan-400 transition-colors">
  <h3 className="text-2xl font-semibold mb-4">{title}</h3>
  <p className="text-mist">{description}</p>
</div>
```

### When creating grid layouts:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {/* cards */}
</div>
```

## Code Style Preferences

### Component structure:
```tsx
// Always use TypeScript
interface ComponentProps {
  // props
}

export default function Component({ props }: ComponentProps) {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* content */}
      </div>
    </section>
  )
}
```

### Naming conventions:
- Components: PascalCase (`HeroSection.tsx`)
- Files: kebab-case for pages (`contact-page.tsx`)
- CSS classes: Tailwind utilities preferred
- Variables: camelCase

### Imports order:
1. React/Next.js imports
2. Third-party libraries
3. Local components
4. Types/interfaces
5. Utilities/helpers

## Homepage Structure to Build

```
1. Hero (existing - keep)
2. SubHero (new - adds context)
3. WhatIBuild (new - 3 services)
4. HowIWork (new - 3-step process)
5. WhatYouGet (new - 4 value points)
6. Work (new - case studies placeholder)
7. ContactCTA (enhanced)
8. Footer (simplified)
```

## Copy Guidelines

### For headings:
- Keep under 8 words
- No questions unless intentional
- Use periods sparingly
- Examples: "A clean, structured process." / "Services built with intention."

### For body copy:
- 2-3 sentences per paragraph maximum
- One idea per sentence
- No semicolons
- Examples: "Hand-built, modern, and responsive. Lightweight architecture. Zero templates."

### For CTAs:
- Direct, action-oriented
- Examples: "Get in Touch" / "Start a Project" / "View Process"

## Accessibility Requirements

### Always include:
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels where needed
- Alt text for all images
- Keyboard navigation support (focus states)
- Color contrast minimum 4.5:1

### Focus states:
```tsx
className="focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
```

## Performance Requirements

### Images:
- Use WebP format
- Always include width/height attributes
- Implement lazy loading for below-fold images
- Use Next.js Image component

### Code splitting:
- Dynamic imports for heavy components
- Lazy load sections below the fold

### Target metrics:
- Lighthouse Performance: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## Responsive Behavior

### Breakpoints:
```tsx
// Mobile: < 768px
// Tablet: 768px - 1199px  
// Desktop: 1200px+

// Tailwind classes to use:
// md:  -> 768px+
// lg:  -> 1024px+
// xl:  -> 1280px+
```

### Mobile-first approach:
- Base styles are mobile
- Add complexity at larger breakpoints
- Test on 375px width (iPhone SE)

## Animation Guidelines

### When to animate:
- Hover states (buttons, links, cards)
- Page transitions
- Scroll-triggered reveals (subtle)

### When NOT to animate:
- Initial page load (keep fast)
- Text content
- Critical UI elements

### Duration limits:
- Hover transitions: 200ms
- All other animations: <300ms
- Use `transition-colors duration-200` for most hovers

## File Organization

```
/components
  /sections
    Hero.tsx
    SubHero.tsx
    WhatIBuild.tsx
    HowIWork.tsx
    WhatYouGet.tsx
    Work.tsx
    ContactCTA.tsx
    Footer.tsx
  /ui
    Button.tsx
    Card.tsx
    SectionHeading.tsx
    
/pages
  index.tsx (homepage)
  services.tsx
  process.tsx
  contact.tsx
  work.tsx
  
/styles
  globals.css
  
/public
  /images
    logo-dark.svg
    logo-light.svg
    q-icon-dark.svg
    q-icon-light.svg
```

## Common Patterns

### Section wrapper:
```tsx
<section className="py-32 px-6 bg-black">
  <div className="max-w-7xl mx-auto">
    {/* content */}
  </div>
</section>
```

### Content max-width (for text-heavy sections):
```tsx
<div className="max-w-3xl mx-auto">
  {/* centered content */}
</div>
```

### Grid with proper gaps:
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
  {/* items */}
</div>
```

## What NOT to Do

❌ Don't use images without alt text
❌ Don't create animations longer than 300ms
❌ Don't use `any` types in TypeScript
❌ Don't inline large chunks of CSS
❌ Don't create components over 200 lines
❌ Don't forget mobile responsiveness
❌ Don't use corporate buzzwords in copy
❌ Don't add unnecessary complexity

## When Writing Copy

### Good examples:
✅ "Hand-built, modern, and responsive."
✅ "No templates. No page builders."
✅ "A clean foundation made specifically for your business."

### Bad examples:
❌ "We leverage cutting-edge technologies to deliver innovative solutions"
❌ "Providing best-in-class experiences for our valued clients"
❌ "Synergizing digital transformation with agile methodologies"

## Testing Checklist

Before committing any component:
- [ ] Test on mobile (375px width)
- [ ] Test keyboard navigation
- [ ] Verify color contrast
- [ ] Check Lighthouse score
- [ ] Test with slow 3G
- [ ] Verify all links work
- [ ] Check hover states
- [ ] Validate HTML semantics

## Priority Order

Build in this sequence:
1. SubHero section (quick win)
2. WhatIBuild section (shows services)
3. HowIWork section (builds trust)
4. WhatYouGet section (value prop)
5. Work section (sets expectation)
6. ContactCTA enhancement
7. Footer simplification
8. Secondary pages (Services, Process, Contact)

## Reference Files

Check these files for full copy and structure details:
- `HOMEPAGE_COPY.md` - All homepage copy
- `SERVICES_PAGE.md` - Services page structure
- `PROCESS_PAGE.md` - Process page structure
- `CONTACT_PAGE.md` - Contact page structure

---

# Appendix: portfolio-instructions-v2/01_HOMEPAGE_STRUCTURE.md (verbatim)

# HOMEPAGE STRUCTURE

## Layout Flow

```
1. Hero (existing - keep as-is)
2. Sub-Hero (new - adds context)
3. What I Build (new - 3 services)
4. Transition Line 1
5. How I Work (new - 3-step process)
6. Transition Line 2
7. What You Get (new - value proposition)
8. Transition Line 3
9. Work / Case Studies (new - placeholder)
10. Start a Conversation (enhanced CTA)
11. Footer (simplified)
```

## Section Specifications

### 1. Hero
**Status:** Keep existing implementation
**Notes:** 
- Dark background
- JAMARQ dark-mode wordmark prominently displayed
- Existing CTA button
- No changes to this section

---

### 2. Sub-Hero
**Position:** Directly under existing hero
**Purpose:** Provide immediate context about what JAMARQ does

**Layout:**
- Centered text
- Dark background continues from hero
- Generous spacing (100px top/bottom padding)

**Content Structure:**
```
[Large heading - 32px]
Build with intention.

[Subheading - 20px, slightly muted color (#E6E6E8)]
Modern digital systems designed for clarity, speed, and long-term stability.

[Supporting line - 16px, more muted (#A0A0A0)]
Custom websites. Thoughtful design. No templates. No noise.
```

**Styling Notes:**
- Use Inter Semi-Bold for main tagline
- Inter Regular for supporting lines
- Line height: 1.6
- Max width: 800px centered

---

### 3. What I Build
**Purpose:** Show core services without overwhelming

**Layout:** 3-column grid (1 column on mobile)
**Background:** Slightly lighter than hero (#1E1E22)
**Padding:** 120px top/bottom, 80px sides

**Structure:**
```
[Section intro - centered]
[Heading]
[Optional supporting line]

[3-column grid below]
[Service 1] [Service 2] [Service 3]
```

**Each Service Card:**
- Icon or small visual element (optional)
- Service title (24px, Semi-Bold)
- 2-3 sentence description (16px, Regular)
- Subtle cyan underline on hover
- No borders, minimal card styling

---

### 4. Transition Line 1
**Purpose:** Connect sections smoothly

**Layout:**
- Centered text
- 60px padding top/bottom
- Background matches previous section

**Content:**
```
Every project follows a clear, structured process.
```

**Styling:**
- 18px, Regular weight
- Slightly muted color
- Single line, centered

---

### 5. How I Work
**Purpose:** Show process and build trust

**Layout:** 3-column grid OR vertical stacked (your choice)
**Background:** Back to darker (#0D0D0F)
**Padding:** 120px top/bottom

**Structure:**
```
[Section heading - centered]

[3 process steps]
[01 - Discovery] [02 - Build] [03 - Launch & Support]
```

**Each Process Step:**
- Step number (large, cyan accent)
- Step title (24px, Semi-Bold)
- 2-3 sentence description
- Optional small icon

---

### 6. Transition Line 2
**Purpose:** Lead into value proposition

**Content:**
```
The result: a system you can rely on.
```

**Styling:** Same as Transition Line 1

---

### 7. What You Get
**Purpose:** Value proposition without overselling

**Layout:** 2x2 grid (1 column on mobile)
**Background:** Slightly lighter (#1E1E22)
**Padding:** 120px top/bottom

**Structure:**
```
[Section intro]
You get a modern digital system that feels clean, fast, and intentional.

[4 value points in grid]
```

**Each Value Point:**
- Title (20px, Semi-Bold)
- 2-3 sentence description
- No heavy borders
- Subtle left accent line (2px cyan)

---

### 8. Transition Line 3
**Purpose:** Lead into work section

**Content:**
```
See how this approach creates real results.
```

---

### 9. Work / Case Studies
**Purpose:** Set expectation for portfolio (placeholder until ready)

**Layout:** Centered content block
**Background:** Dark (#0D0D0F)
**Padding:** 120px top/bottom

**Structure:**
```
[Section heading]
Work

[Intro paragraph]

[Placeholder cards OR single message block]
```

**Content Approach:**
- Honest about case studies being in development
- Turn it into confidence, not weakness
- Offer private preview via email
- Clean, minimal presentation

---

### 10. Start a Conversation (Enhanced CTA)
**Purpose:** Convert visitors to leads

**Layout:** Centered block
**Background:** Dark with subtle gradient (optional)
**Padding:** 100px top/bottom

**Structure:**
```
[Heading]
Start a Conversation

[Supporting paragraph]
[Context about when to reach out]

[Email]
hello@jamarq.digital

[CTA button]
[Keep existing CTA or enhance]
```

---

### 11. Footer (Simplified)
**Purpose:** Navigation and essential links without clutter

**Layout:** 3-column on desktop, stacked on mobile
**Background:** Slightly lighter than page (#1E1E22)
**Padding:** 60px top/bottom

**Structure:**
```
Column 1:
JAMARQ logo (dark mode Q icon or wordmark)
Build with intention.

Column 2:
Navigation links
- Home
- Services
- Process
- Work
- Contact

Column 3:
Contact
hello@jamarq.digital

Legal
Privacy | Terms

Copyright
© 2024 JAMARQ Digital
```

**Styling Notes:**
- Keep links minimal
- Cyan on hover
- Small text (14px)
- Plenty of breathing room

---

## Responsive Behavior

**Desktop (1200px+):**
- Full 3-column grids
- Generous spacing
- Wider max-widths

**Tablet (768px - 1199px):**
- 2-column grids where possible
- Reduced padding
- Maintain readability

**Mobile (<768px):**
- Single column everything
- Stack all grids
- Reduce padding by 50%
- Maintain font sizes for readability

---

## Spacing System

Use consistent spacing:
- Section padding: 120px (desktop), 60px (mobile)
- Element spacing: 40px between major elements
- Paragraph spacing: 20px
- Grid gaps: 40px (desktop), 20px (mobile)

---

## Implementation Priority

1. Add Sub-Hero (quick win, immediate context)
2. Add What I Build (shows services)
3. Add How I Work (builds trust)
4. Add What You Get (value prop)
5. Add Work placeholder (sets future expectation)
6. Enhance CTA section
7. Simplify footer

---

## Performance Checklist

After implementation:
- [ ] Test load time (target: <2 seconds)
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Test on mobile devices
- [ ] Verify keyboard navigation
- [ ] Check color contrast ratios
- [ ] Test with slow 3G connection
- [ ] Verify all links work
- [ ] Test form submissions (if applicable)

---

# Appendix: portfolio-instructions-v2/02_HOMEPAGE_COPY.md (verbatim)

# HOMEPAGE_COPY.md

All copy below is production-ready. Reference this when building homepage components.

---

## SUB-HERO

```tsx
// Main tagline
"Build with intention."

// Subheading  
"Modern digital systems designed for clarity, speed, and long-term stability."

// Supporting line
"Custom websites. Thoughtful design. No templates. No noise."
```

---

## WHAT I BUILD

```tsx
// Section heading (optional)
"What I Build"

// Service 1
{
  title: "Custom Websites",
  description: "Hand-built, modern, and responsive. Lightweight architecture. Zero templates. Zero bloat."
}

// Service 2
{
  title: "Digital Systems",
  description: "Workflows, integrations, and infrastructure that support how your business actually works."
}

// Service 3
{
  title: "Ongoing Support",
  description: "Maintenance plans, updates, monitoring, and performance care for long-term stability."
}
```

---

## TRANSITION 1

```tsx
"Every project follows a clear, structured process."
```

---

## HOW I WORK

```tsx
// Section heading
"How I Work"

// Step 1
{
  number: "01",
  title: "Discovery",
  description: "We define your goals, constraints, and what the system needs to accomplish. Clarity first. Design second."
}

// Step 2
{
  number: "02",
  title: "Build",
  description: "A clean, intentional design translated into a fast, modern digital system. Every component is built from scratch."
}

// Step 3
{
  number: "03",
  title: "Launch & Support",
  description: "A structured rollout, documentation, and a support window. Everything you need to run your site with confidence."
}
```

---

## TRANSITION 2

```tsx
"The result: a system you can rely on."
```

---

## WHAT YOU GET

```tsx
// Section intro
"You get a modern digital system that feels clean, fast, and intentional."

// Value 1
{
  title: "A Website Built for Clarity",
  description: "Focused design. Precise typography. A layout that directs attention, not distracts from it."
}

// Value 2
{
  title: "A System You Can Rely On",
  description: "Stable infrastructure. Clean code. A foundation built for long-term use, not short-term workarounds."
}

// Value 3
{
  title: "A Process That Respects Your Time",
  description: "Clear communication. Structured milestones. No guesswork."
}

// Value 4
{
  title: "Documentation & Support",
  description: "A full handoff. Training if needed. A support window to keep everything stable after launch."
}
```

---

## TRANSITION 3

```tsx
"See how this approach creates real results."
```

---

## WORK / CASE STUDIES

```tsx
// Section heading
"Work"

// Placeholder copy (choose one):

// Option 1 (Detailed):
`A closer look at how JAMARQ builds modern digital systems.

Every case study will show:
• The problem the client needed solved
• The system designed to solve it
• The structure behind the build
• The final result and measurable improvements

Case studies are in development and will be added soon.
Each one will highlight decision-making, clarity of design, and the systems-first approach behind every JAMARQ project.`

// Option 2 (Confident):
`Selected case studies are being prepared.

I'm currently documenting recent builds so you can see:
• The design decisions
• The systems architecture
• The performance improvements
• The before/after comparisons

In the meantime:
If you want a private preview of current work, email me directly at jason@jamarq.digital.`
```

---

## CONTACT CTA

```tsx
// Heading
"Start a Conversation"

// Supporting paragraph
"Whether you're starting from scratch or rebuilding something outdated, I can help you design a clear, modern digital system that fits your business."

// Email
"hello@jamarq.digital"

// Button text options
"Get in Touch"
// or
"Start a Project"
```

---

## FOOTER

```tsx
// Brand section
{
  brand: "JAMARQ",
  tagline: "Build with intention."
}

// Navigation
{
  heading: "Navigation",
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" }
  ]
}

// Contact
{
  heading: "Contact",
  email: "hello@jamarq.digital"
}

// Legal
{
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" }
  ]
}

// Copyright
"© 2024 JAMARQ Digital. All rights reserved."
```

---

## IMAGE ALT TEXT

```tsx
// Logo variants
"JAMARQ wordmark with cyan accent - dark mode"
"JAMARQ wordmark with cyan accent - light mode"
"JAMARQ Q icon with cyan glow - dark mode"
"JAMARQ Q icon with cyan glow - light mode"

// Background images (if used)
"Dark geometric background with subtle cyan accents"
```

---

## SEO METADATA

```tsx
// Homepage
{
  title: "JAMARQ Digital — Modern Web Development & Digital Systems",
  description: "Clean, intentional digital systems built for clarity and speed. Custom websites, workflows, and infrastructure. No templates. No shortcuts. Build with intention.",
  ogTitle: "JAMARQ — Build with intention",
  ogDescription: "Modern digital systems designed for clarity, speed, and long-term stability.",
  twitterTitle: "JAMARQ Digital — Modern Web Development",
  twitterDescription: "Clean, intentional digital systems. Custom websites. Thoughtful design. No templates."
}
```

---

# Appendix: portfolio-instructions-v2/03_SERVICES_PAGE.md (verbatim)

# SERVICES_PAGE.md

Reference this when building the Services page.

---

## PAGE STRUCTURE

```
1. Hero
2. Core Services (4 cards in 2x2 grid)
3. What Makes JAMARQ Different (6 differentiators)
4. Pricing Philosophy
5. CTA
```

---

## HERO

```tsx
{
  title: "Services built with intention.",
  subtitle: "Clean, modern digital systems. Built to last. Designed for clarity."
}
```

---

## CORE SERVICES

```tsx
// Service 1
{
  title: "Custom Website Design & Development",
  description: "Hand-built, fast, and stable. No templates. No page builders. A clean foundation made specifically for your business.",
  included: [
    "Modern, responsive design",
    "Performance optimization",
    "Accessibility considerations",
    "SEO-ready structure",
    "Clean, maintainable code"
  ]
}

// Service 2
{
  title: "Digital System Architecture",
  description: "Workflows, integrations, automation, and hosting structures. Your digital infrastructure — simplified, unified, intentional.",
  included: [
    "System planning and architecture",
    "API integrations",
    "Workflow automation",
    "Infrastructure setup",
    "Documentation"
  ]
}

// Service 3
{
  title: "Maintenance & Support",
  description: "Ongoing reliability. Backups, updates, monitoring, and priority support.",
  included: [
    "Regular security updates",
    "Performance monitoring",
    "Backup management",
    "Priority bug fixes",
    "Content updates (plan-dependent)"
  ],
  cta: {
    text: "View Maintenance Plans →",
    href: "/maintenance"
  }
}

// Service 4
{
  title: "Content & Structure Consulting",
  description: "Clear hierarchy, improved messaging, and intentional content layouts.",
  included: [
    "Content architecture planning",
    "Information hierarchy design",
    "Messaging guidance",
    "Tone and clarity improvements",
    "SEO content strategy"
  ]
}
```

---

## WHAT MAKES JAMARQ DIFFERENT

```tsx
// Section heading
"What Makes JAMARQ Different"

// Differentiator 1
{
  title: "No Templates",
  description: "Every site is hand-coded from scratch. No WordPress themes. No page builders. No drag-and-drop tools. Custom architecture built for your specific needs."
}

// Differentiator 2
{
  title: "Performance First",
  description: "Sub-2-second load times. 90+ Lighthouse scores. Optimized by default. Fast sites aren't an add-on — they're the baseline."
}

// Differentiator 3
{
  title: "Full Documentation",
  description: "You get complete handoff guides, support protocols, and system documentation. No mysteries. No locked-in dependencies."
}

// Differentiator 4
{
  title: "Transparent Process",
  description: "Clear milestones. Predictable timelines. Structured communication. You always know what's happening and what comes next."
}

// Differentiator 5
{
  title: "Accessibility Minded",
  description: "WCAG 2.1 AA standards built in. Keyboard navigation, contrast ratios, semantic HTML — not optional."
}

// Differentiator 6
{
  title: "Long-Term Thinking",
  description: "Built for years, not months. Clean code. Scalable structure. Future-proof foundations."
}
```

---

## PRICING PHILOSOPHY

```tsx
{
  heading: "A clear, transparent approach to pricing.",
  body: "JAMARQ does not compete on price.\n\nEvery project is scoped intentionally, based on complexity, features, and timeline. You always receive a detailed Scope of Work before development begins.\n\nNo surprises. No hidden fees. No scope creep.",
  priceRange: "Typical projects range from $3,500 to $15,000 depending on scope.",
  cta: {
    text: "View Process →",
    href: "/process"
  }
}
```

---

## CTA SECTION

```tsx
{
  heading: "Ready to start?",
  body: "Let's talk about what you need to build.",
  email: "hello@jamarq.digital",
  button: {
    text: "Get in Touch",
    href: "/contact"
  }
}
```

---

## COMPONENT STRUCTURE

```tsx
// Service Card Component
interface ServiceCard {
  title: string;
  description: string;
  included: string[];
  cta?: {
    text: string;
    href: string;
  };
}

// Differentiator Card Component
interface DifferentiatorCard {
  title: string;
  description: string;
}
```

---

## LAYOUT NOTES

```tsx
// Services Grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
  {services.map(service => <ServiceCard {...service} />)}
</div>

// Differentiators Grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
  {differentiators.map(diff => <DifferentiatorCard {...diff} />)}
</div>
```

---

## STYLING NOTES

- Service cards: left border (2px cyan), padding 32px, hover glow
- Differentiators: clean, minimal, left-aligned
- Section padding: 120px top/bottom (desktop), 60px (mobile)
- Max width for pricing philosophy: 700px centered

---

## SEO METADATA

```tsx
{
  title: "Services — JAMARQ Digital",
  description: "Custom web development, digital systems, and ongoing support. No templates. No shortcuts. Clean, intentional architecture built to last.",
  h1: "Services built with intention."
}
```

---

# Appendix: portfolio-instructions-v2/04_PROCESS_PAGE.md (verbatim)

# PROCESS_PAGE.md

Reference this when building the Process page.

---

## PAGE STRUCTURE

```
1. Hero
2. Process Steps (6 phases)
3. Timeline Context
4. What This Prevents
5. CTA
```

---

## HERO

```tsx
{
  title: "A clean, structured process.",
  subtitle: "Clear milestones. Predictable timelines. No guesswork."
}
```

---

## PROCESS STEPS

```tsx
// Step 01
{
  number: "01",
  title: "Discovery",
  whatHappens: [
    "Project goals defined",
    "Requirements gathered",
    "Timeline estimated",
    "Initial structure outlined"
  ],
  outcome: "A clear plan and shared understanding."
}

// Step 02
{
  number: "02",
  title: "Architecture & Design",
  architecture: [
    "Site map",
    "Content structure",
    "Workflows",
    "Integrations planning"
  ],
  design: [
    "Layout direction",
    "Typography system",
    "Spacing rules",
    "Brand implementation"
  ],
  outcome: "A blueprint for the build."
}

// Step 03
{
  number: "03",
  title: "Development",
  whatHappens: [
    "Custom build using clean, modern code",
    "Responsive behavior",
    "Performance optimization",
    "Accessibility considerations"
  ],
  outcome: "A functional system built from scratch."
}

// Step 04
{
  number: "04",
  title: "Review & Revisions",
  whatHappens: [
    "You receive a working version",
    "Feedback is gathered",
    "Revisions are applied",
    "Final approval required before launch"
  ],
  outcome: "A refined system ready for launch."
}

// Step 05
{
  number: "05",
  title: "Launch",
  whatHappens: [
    "Domain connection",
    "SSL setup",
    "Forms tested",
    "Search Console submitted",
    "Live handoff provided"
  ],
  outcome: "Your site goes live with full support."
}

// Step 06
{
  number: "06",
  title: "Support Window",
  whatHappens: [
    "Technical questions answered",
    "Minor fixes handled",
    "Content corrections made",
    "Stability checks performed"
  ],
  outcome: "A smooth transition to ownership.",
  cta: {
    text: "View Maintenance Plans →",
    href: "/maintenance"
  }
}
```

---

## TIMELINE CONTEXT

```tsx
{
  heading: "Timeline",
  body: "Most projects take 4–8 weeks from kickoff to launch.\n\nTimeline depends on:\n• Scope and complexity\n• Content readiness\n• Response time during review phases\n\nYou'll receive a detailed timeline during the Discovery phase."
}
```

---

## WHAT THIS PREVENTS

```tsx
{
  heading: "What This Process Prevents",
  points: [
    "Scope creep",
    "Miscommunication",
    "Missed deadlines",
    "Surprise costs",
    "Unclear expectations",
    "Post-launch confusion"
  ]
}
```

---

## CTA SECTION

```tsx
{
  heading: "Ready to start?",
  body: "Let's talk about your project and map out a timeline.",
  email: "hello@jamarq.digital",
  button: {
    text: "Get in Touch",
    href: "/contact"
  }
}
```

---

## COMPONENT STRUCTURE

```tsx
// Process Step Component
interface ProcessStep {
  number: string;
  title: string;
  whatHappens: string[];
  outcome: string;
  cta?: {
    text: string;
    href: string;
  };
}

// Step 02 is special (has architecture + design)
interface ArchitectureDesignStep extends Omit<ProcessStep, 'whatHappens'> {
  architecture: string[];
  design: string[];
}
```

---

## LAYOUT OPTIONS

**Option A: Vertical Timeline (Recommended)**
```tsx
<div className="space-y-24">
  {steps.map((step, index) => (
    <ProcessStep key={index} {...step} />
  ))}
</div>
```

**Option B: Grid Layout**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
  {steps.map((step, index) => (
    <ProcessStep key={index} {...step} />
  ))}
</div>
```

---

## STYLING NOTES

```tsx
// Step number styling
className="text-6xl font-semibold text-cyan-500"

// Step title
className="text-3xl font-semibold mt-4 mb-6"

// Outcome text
className="text-lg text-mist mt-6 italic"

// Vertical connecting line (if using vertical layout)
className="absolute left-8 top-0 bottom-0 w-px bg-cyan-500 opacity-30"
```

---

## RESPONSIVE BEHAVIOR

**Desktop:**
- Vertical timeline OR 2-column grid
- Connecting line between steps (if vertical)
- Full padding and spacing

**Mobile:**
- Always vertical/stacked
- Remove or simplify connecting line
- Reduce step number size to 48px
- Reduce padding

---

## VISUAL ENHANCEMENTS (Optional)

- Animated step numbers that highlight on scroll
- Connecting dots on the timeline
- Subtle hover states on each step
- Progress indicator at top

**Keep animations < 300ms**

---

## SEO METADATA

```tsx
{
  title: "Process — JAMARQ Digital",
  description: "A clear, structured process for every project. Discovery, design, development, launch, and support. Predictable timelines, no surprises.",
  h1: "A clean, structured process."
}
```

---

# Appendix: portfolio-instructions-v2/05_CONTACT_PAGE.md (verbatim)

# CONTACT PAGE

## Purpose
Make it easy to start a project conversation. Remove friction, build confidence.

---

## Page Structure

```
1. Hero
2. Contact Options (Email + Form)
3. What Happens Next
4. CTA
```

---

## SECTION 1: HERO

### Layout
- Centered text
- Dark background
- Simple, direct

### Copy

**Title:**
```
Start a project.
```

**Sub-copy:**
```
Tell me about what you want to build.
You'll get a clear reply within one business day.
```

---

## SECTION 2: CONTACT OPTIONS

### Layout
- Two columns on desktop (1 column on mobile)
- Left: Email options
- Right: Contact form

---

### Left Column: Email Options

**Heading:**
```
Email
```

**Primary Contact:**
```
hello@jamarq.digital
New projects and general inquiries
```

**Active Projects:**
```
jason@jamarq.digital
For clients with active builds
```

**Support:**
```
support@jamarq.digital
For launched sites and maintenance clients
```

**Note:**
```
Response time: Within 1 business day
```

---

### Right Column: Contact Form

**Form Fields:**

1. **Name** (required)
   - Text input
   - Placeholder: "Your name"
   - Label: "Name"

2. **Email** (required)
   - Email input
   - Placeholder: "your@email.com"
   - Label: "Email"

3. **Business Name** (optional)
   - Text input
   - Placeholder: "Your business or organization"
   - Label: "Business Name (optional)"

4. **What do you need built?** (required)
   - Textarea (4-5 rows)
   - Placeholder: "Tell me about your project..."
   - Label: "Project Description"

5. **Timeline** (optional)
   - Dropdown
   - Label: "Timeline"
   - Options:
     - "Select a timeline"
     - "ASAP (1-2 weeks)"
     - "1-2 months"
     - "3+ months"
     - "Just exploring options"

6. **Current Website** (optional)
   - Text input
   - Placeholder: "https://yoursite.com"
   - Label: "Current Website (optional)"

**Submit Button:**
```
Send Message
```

**Form Styling:**
- Dark inputs with light text
- Cyan border on focus
- Clear error states (red border + message)
- Success message after submission
- Clean, minimal design

---

## SECTION 3: WHAT HAPPENS NEXT

### Layout
- Centered content block
- Background: slightly lighter (#1E1E22)
- Max width: 800px

### Copy

**Heading:**
```
What Happens Next
```

**Steps:**
```
01 — You receive a confirmation message
I'll confirm I received your inquiry within a few hours.

02 — I review your project
I'll look over what you need and determine if it's a good fit.

03 — We schedule a call (optional)
A short conversation to clarify goals, timeline, and scope.

04 — You receive a Project Overview
A clear outline of deliverables, timeline, and estimated cost.
```

**Supporting Line:**
```
Intentional. Calm. Structured.
```

---

## SECTION 4: AVAILABILITY NOTICE (Optional)

### Layout
- Small banner or callout box
- Subtle styling

### Copy (Use if needed)
```
Current Availability: Booking for [Month/Quarter]
```

or

```
Currently accepting new projects.
Typical start date: 2-4 weeks from agreement.
```

---

## SECTION 5: CTA (Alternative to form)

### Copy

**Heading:**
```
Prefer email?
```

**Body:**
```
Send your project details directly to hello@jamarq.digital
and I'll reply within one business day.
```

---

## FORM VALIDATION

### Required Fields
- Name (cannot be empty)
- Email (must be valid email format)
- Project Description (minimum 20 characters)

### Error Messages

**Name field empty:**
```
Please enter your name
```

**Email invalid:**
```
Please enter a valid email address
```

**Project description too short:**
```
Please provide more details about your project (at least 20 characters)
```

**General error:**
```
Something went wrong. Please try again or email hello@jamarq.digital directly.
```

### Success Message
```
Message sent successfully!
I'll reply within one business day.
```

---

## FORM BACKEND

### Submission Endpoint
Route form submissions to your preferred service:
- Formspree
- Netlify Forms
- Custom backend
- Email service

### Data to Collect
```json
{
  "name": "string",
  "email": "string",
  "businessName": "string",
  "projectDescription": "string",
  "timeline": "string",
  "currentWebsite": "string",
  "submittedAt": "timestamp"
}
```

### Auto-Response Email (Optional)
```
Subject: Project Inquiry Received - JAMARQ Digital

Hi [Name],

Thanks for reaching out. I've received your project inquiry and will review it shortly.

I'll reply within one business day with next steps.

— Jason Marshall
JAMARQ Digital
hello@jamarq.digital
```

---

## SEO METADATA

**Page Title:**
```
Contact — JAMARQ Digital
```

**Meta Description:**
```
Start a project with JAMARQ. Clear communication, predictable timelines, intentional design. Get a reply within one business day.
```

**H1:**
```
Start a project.
```

---

## RESPONSIVE NOTES

**Desktop:**
- Two-column layout (email left, form right)
- Form fields full width within column

**Tablet:**
- Maintain two-column if space allows
- Or stack with email options on top

**Mobile:**
- Single column
- Stack email options above form
- Full-width form fields
- Larger tap targets for inputs

---

## ACCESSIBILITY NOTES

- All form fields have associated labels (not just placeholders)
- Tab order is logical
- Error messages announced to screen readers
- Success message announced to screen readers
- Focus visible on all inputs
- Sufficient color contrast on all elements

---

## STYLING NOTES

- Input background: #1E1E22
- Input text: #E6E6E8
- Border: 1px solid #2C2C30
- Focus border: 2px solid #09A6D6 (cyan)
- Error border: 2px solid #DC2626 (red)
- Label text: #E6E6E8
- Placeholder text: #6B7280
- Submit button: Cyan background (#09A6D6)
- Submit button hover: Slightly lighter cyan

---

## SPAM PROTECTION

Implement one or more:
- Honeypot field (hidden field that bots fill out)
- reCAPTCHA v3 (invisible)
- Rate limiting
- Email verification

**Recommended:** Honeypot + rate limiting (least intrusive for users)

---

## IMPLEMENTATION PRIORITY

1. Hero
2. Email options display
3. Contact form (all fields)
4. Form validation
5. Form submission
6. What Happens Next section
7. Success/error states

---

## COMPONENTS NEEDED

- `ContactForm` - full form component
- `FormField` - reusable input component
- `FormSelect` - dropdown component
- `FormTextarea` - textarea component
- `SubmitButton` - form submit button
- `ErrorMessage` - validation error display
- `SuccessMessage` - submission success display

---

## TESTING CHECKLIST

- [ ] Form validates required fields
- [ ] Form accepts valid submissions
- [ ] Error messages display correctly
- [ ] Success message displays after submission
- [ ] Email is sent to correct address
- [ ] Auto-response works (if implemented)
- [ ] Mobile layout works
- [ ] Keyboard navigation works
- [ ] Screen reader announces errors/success
- [ ] Spam protection works

---

# Appendix: portfolio-instructions-v2/06_CASE_STUDIES_PAGE.md (verbatim)

# CASE STUDIES PAGE

## Purpose
Set expectation for portfolio work while case studies are in development. Turn "missing portfolio" into confidence.

---

## Page Structure

```
1. Hero
2. Coming Soon Message (confident placeholder)
3. Optional: Preview Cards (empty state)
4. What Case Studies Will Show
5. CTA
```

---

## SECTION 1: HERO

### Layout
- Centered text
- Dark background
- Simple, minimal

### Copy

**Title:**
```
Work
```

or

```
Case Studies
```

**Sub-copy:**
```
A closer look at the systems behind the work.
```

---

## SECTION 2: COMING SOON MESSAGE (Confident Placeholder)

### Layout
- Centered content block
- Max width: 800px
- Generous padding

### Copy - Version 1 (Recommended)

**Body:**
```
Selected case studies are being prepared.

I'm currently documenting recent builds so you can see:
• The design decisions
• The systems architecture
• The performance improvements
• The before/after comparisons

In the meantime:
If you want a private preview of current work, email me directly at jason@jamarq.digital.
```

---

### Copy - Version 2 (Alternative)

**Body:**
```
A closer look at how JAMARQ builds modern digital systems.

Every case study will show:
• The problem the client needed solved
• The system designed to solve it
• The structure behind the build
• The final result and measurable improvements

Case studies are in development and will be added soon.
Each one will highlight decision-making, clarity of design, and the systems-first approach behind every JAMARQ project.
```

**Choose:** Version 1 is more confident and actionable. Version 2 is more explanatory.

---

## SECTION 3: PREVIEW CARDS (Optional Empty State)

### Layout
- 2 or 3 column grid
- Ghost/placeholder cards
- Subtle styling

### Card Content (Placeholder)

**Card 1:**
```
Thunder Road Bar & Grill
Restaurant management system
Coming soon
```

**Card 2:**
```
Midway Mobile Storage
Business platform with inventory system
Coming soon
```

**Card 3:**
```
Midway Music Hall
Event venue digital system
Coming soon
```

**Styling:**
- Subtle border
- Muted colors
- "Coming soon" badge
- Not clickable
- Low opacity or grayscale

**Alternative:** Skip the cards entirely and only show the message. Cleaner approach.

---

## SECTION 4: WHAT CASE STUDIES WILL SHOW

### Layout
- Centered list or grid
- Clean, minimal styling

### Copy

**Heading:**
```
What Each Case Study Will Include
```

**Points:**
```
01 — The Challenge
What wasn't working and why the client needed help.

02 — The Approach
How JAMARQ solved the problem through intentional design and architecture.

03 — The Build
Technical decisions, system structure, and implementation details.

04 — The Results
Performance metrics, before/after comparisons, and measurable improvements.

05 — Visual Gallery
Screenshots, design mockups, and system architecture diagrams.
```

---

## SECTION 5: CTA

### Layout
- Centered
- Dark background
- Simple and direct

### Copy

**Heading:**
```
Want to see current work?
```

**Body:**
```
I'm happy to share private previews of recent projects.
Email me at jason@jamarq.digital for examples.
```

**Alternative CTA:**
```
Ready to build something?
Let's talk about your project.
hello@jamarq.digital
```

---

## FUTURE CASE STUDY STRUCTURE (When Ready)

When you add real case studies, each should follow this structure:

### Individual Case Study Page

**Sections:**
1. Hero (project name + category)
2. Project Overview (client, timeline, services)
3. The Challenge (problem statement)
4. The Approach (solution strategy)
5. The Build (technical implementation)
6. Results (metrics and outcomes)
7. Visual Gallery (screenshots/mockups)
8. Testimonial (if available)
9. Tech Stack (tools and frameworks used)
10. CTA (Start your project)

**Example URL Structure:**
```
/work/thunder-road
/work/midway-mobile-storage
/work/midway-music-hall
```

---

## CASE STUDY CARD TEMPLATE (For Future Grid)

When case studies exist, each grid card should include:

```
[Featured Image]

[Project Name]
[Category badge: Website | System | Integration]

[One-sentence description]

[View Case Study →]
```

**Example:**
```
[Screenshot of Thunder Road site]

Thunder Road Bar & Grill
Website

A modern restaurant management system with menu integration and event calendar.

View Case Study →
```

---

## SEO METADATA

**Page Title:**
```
Work — JAMARQ Digital
```

or

```
Case Studies — JAMARQ Digital
```

**Meta Description:**
```
Selected case studies of modern digital systems built by JAMARQ. See the design decisions, architecture, and results behind each project.
```

**H1:**
```
Work
```

---

## RESPONSIVE NOTES

**Desktop:**
- 3-column grid for preview cards (if using)
- Centered content blocks

**Tablet:**
- 2-column grid
- Maintain readability

**Mobile:**
- Single column
- Stack all cards
- Full-width content

---

## STYLING NOTES

- Keep minimal and clean
- Don't overdesign the placeholder state
- Use subtle borders and muted colors for "coming soon" cards
- Cyan accents sparingly
- Generous white space
- Let the confidence of the copy carry the page

---

## IMPLEMENTATION PRIORITY

1. Hero
2. Coming Soon message (choose version)
3. What Case Studies Will Show
4. CTA
5. Optional: Preview cards (only if you want the visual placeholder)

---

## PSYCHOLOGICAL STRATEGY

**Why this approach works:**
- Acknowledges the gap honestly
- Turns it into intentionality ("being prepared")
- Offers alternative (private preview)
- Shows what's coming (builds anticipation)
- Maintains confidence (not apologetic)

**What to avoid:**
- "Sorry, no portfolio yet"
- "Under construction"
- Generic stock images
- Fake/placeholder projects
- Over-explaining the absence

---

## TRANSITION TO REAL CASE STUDIES

When ready to add real case studies:

1. Replace "Coming Soon" message with case study grid
2. Add 1-2 case studies at a time (don't wait for all 3)
3. Use real screenshots and metrics
4. Keep the same confident, minimal voice
5. Update meta description to reflect actual work

**First case study priority:** Thunder Road (most complete, good visuals)

---

## COMPONENTS NEEDED

- `CaseStudyCard` - grid card component (for future)
- `PlaceholderCard` - empty state card (optional)
- `SectionHeading` - consistent headers
- `CTABlock` - reusable CTA

---

## LINKS TO OTHER PAGES

- Private preview email → `jason@jamarq.digital`
- Start a project → `/contact`
- View services → `/services`

---

# Appendix: portfolio-instructions-v2/07_COMPONENTS.md (verbatim)

# REUSABLE COMPONENTS

## Purpose
Define all reusable components for consistency across the site. Build once, use everywhere.

---

## COMPONENT 1: SectionHeading

### Purpose
Consistent heading style across all sections

### Props
- `title` (string, required) - The heading text
- `subtitle` (string, optional) - Supporting text below heading
- `align` (string, optional) - "left" | "center" | "right" (default: "center")
- `theme` (string, optional) - "dark" | "light" (default: "dark")

### Structure
```jsx
<div className="section-heading">
  <h2>{title}</h2>
  {subtitle && <p>{subtitle}</p>}
</div>
```

### Styling
- Title: 40px (desktop), 32px (mobile), Semi-Bold
- Subtitle: 18px, Regular, slightly muted (#E6E6E8)
- Margin bottom: 60px
- Max width: 800px (if centered)

---

## COMPONENT 2: ServiceCard

### Purpose
Display service offerings in grid layouts

### Props
- `title` (string, required)
- `description` (string, required)
- `icon` (component, optional)
- `link` (string, optional)

### Structure
```jsx
<div className="service-card">
  {icon && <div className="icon">{icon}</div>}
  <h3>{title}</h3>
  <p>{description}</p>
  {link && <a href={link}>Learn more →</a>}
</div>
```

### Styling
- Background: #1E1E22
- Padding: 40px
- Border: 1px solid #2C2C30
- Border-radius: 8px
- Hover: subtle cyan glow on left border
- Title: 24px, Semi-Bold
- Description: 16px, Regular, line-height 1.6

---

## COMPONENT 3: ProcessStep

### Purpose
Display process steps in timeline or grid

### Props
- `number` (string, required) - "01", "02", etc.
- `title` (string, required)
- `description` (string or array, required)
- `outcome` (string, optional)

### Structure
```jsx
<div className="process-step">
  <div className="step-number">{number}</div>
  <div className="step-content">
    <h3>{title}</h3>
    {Array.isArray(description) ? (
      <ul>
        {description.map(item => <li>{item}</li>)}
      </ul>
    ) : (
      <p>{description}</p>
    )}
    {outcome && <p className="outcome">{outcome}</p>}
  </div>
</div>
```

### Styling
- Number: 48px, Semi-Bold, cyan (#09A6D6)
- Title: 28px, Semi-Bold
- Description: 16px, Regular
- Outcome: 18px, Regular, highlighted background
- Padding: 40px vertical between steps

---

## COMPONENT 4: ValueCard

### Purpose
Display value propositions in "What You Get" section

### Props
- `title` (string, required)
- `description` (string, required)
- `accent` (boolean, optional) - Show left accent line

### Structure
```jsx
<div className="value-card">
  {accent && <div className="accent-line"></div>}
  <h4>{title}</h4>
  <p>{description}</p>
</div>
```

### Styling
- Accent line: 2px width, cyan (#09A6D6), full height
- Padding: 30px
- Title: 20px, Semi-Bold
- Description: 16px, Regular, line-height 1.6
- Background: subtle (#1E1E22)

---

## COMPONENT 5: CTABlock

### Purpose
Reusable call-to-action sections

### Props
- `heading` (string, required)
- `body` (string, optional)
- `email` (string, optional)
- `buttonText` (string, optional)
- `buttonLink` (string, optional)

### Structure
```jsx
<div className="cta-block">
  <h2>{heading}</h2>
  {body && <p>{body}</p>}
  {email && <a href={`mailto:${email}`}>{email}</a>}
  {buttonText && buttonLink && (
    <a href={buttonLink} className="cta-button">{buttonText}</a>
  )}
</div>
```

### Styling
- Background: #0D0D0F or gradient
- Padding: 100px vertical, 40px horizontal
- Heading: 36px, Semi-Bold
- Body: 18px, Regular
- Email: 20px, cyan (#09A6D6)
- Button: cyan background, white text, 16px padding

---

## COMPONENT 6: FormField

### Purpose
Consistent form input styling

### Props
- `label` (string, required)
- `name` (string, required)
- `type` (string, optional) - "text" | "email" | "textarea" (default: "text")
- `placeholder` (string, optional)
- `required` (boolean, optional)
- `error` (string, optional)
- `value` (string, required)
- `onChange` (function, required)

### Structure
```jsx
<div className="form-field">
  <label htmlFor={name}>
    {label} {required && <span className="required">*</span>}
  </label>
  {type === 'textarea' ? (
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  ) : (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  )}
  {error && <span className="error-message">{error}</span>}
</div>
```

### Styling
- Label: 14px, Semi-Bold, #E6E6E8
- Required star: cyan (#09A6D6)
- Input/textarea background: #1E1E22
- Input text: #E6E6E8
- Border: 1px solid #2C2C30
- Focus border: 2px solid #09A6D6
- Error border: 2px solid #DC2626
- Error message: 14px, red (#DC2626)
- Padding: 12px inside inputs
- Border radius: 4px

---

## COMPONENT 7: Button

### Purpose
Consistent button styling across site

### Props
- `text` (string, required)
- `onClick` (function, optional)
- `href` (string, optional)
- `variant` (string, optional) - "primary" | "secondary" | "ghost" (default: "primary")
- `size` (string, optional) - "small" | "medium" | "large" (default: "medium")

### Structure
```jsx
{href ? (
  <a href={href} className={`button ${variant} ${size}`}>
    {text}
  </a>
) : (
  <button onClick={onClick} className={`button ${variant} ${size}`}>
    {text}
  </button>
)}
```

### Styling

**Primary:**
- Background: #09A6D6 (cyan)
- Text: #0D0D0F (black)
- Hover: Slightly lighter cyan
- Border: none

**Secondary:**
- Background: transparent
- Text: #09A6D6
- Border: 2px solid #09A6D6
- Hover: Cyan background with black text

**Ghost:**
- Background: transparent
- Text: #E6E6E8
- Border: none
- Hover: Underline

**Sizes:**
- Small: 12px padding, 14px text
- Medium: 16px padding, 16px text
- Large: 20px padding, 18px text

---

## COMPONENT 8: Logo

### Purpose
Consistent logo usage with proper variants

### Props
- `variant` (string, required) - "wordmark-dark" | "wordmark-light" | "icon-dark" | "icon-light"
- `size` (string, optional) - "small" | "medium" | "large" (default: "medium")
- `link` (boolean, optional) - Wrap in link to home? (default: true)

### Structure
```jsx
{link ? (
  <a href="/" className="logo-link">
    <img src={logoSrc} alt={logoAlt} className={`logo ${size}`} />
  </a>
) : (
  <img src={logoSrc} alt={logoAlt} className={`logo ${size}`} />
)}
```

### Logo Sources
- `wordmark-dark`: "/assets/logos/jamarq-wordmark-dark.svg"
- `wordmark-light`: "/assets/logos/jamarq-wordmark-light.svg"
- `icon-dark`: "/assets/logos/jamarq-icon-dark.svg"
- `icon-light`: "/assets/logos/jamarq-icon-light.svg"

### Alt Text
- Wordmark: "JAMARQ wordmark with cyan accent"
- Icon: "JAMARQ Q icon with cyan glow"

### Sizes
- Small: 120px width (wordmark), 40px width (icon)
- Medium: 180px width (wordmark), 60px width (icon)
- Large: 240px width (wordmark), 80px width (icon)

---

## COMPONENT 9: Footer

### Purpose
Consistent footer across all pages

### Props
- None (static content)

### Structure
```jsx
<footer>
  <div className="footer-content">
    <div className="footer-brand">
      <Logo variant="icon-dark" size="small" link={false} />
      <p>Build with intention.</p>
    </div>
    
    <div className="footer-nav">
      <h4>Navigation</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/process">Process</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    
    <div className="footer-contact">
      <h4>Contact</h4>
      <a href="mailto:hello@jamarq.digital">hello@jamarq.digital</a>
    </div>
  </div>
  
  <div className="footer-bottom">
    <p>© 2024 JAMARQ Digital. All rights reserved.</p>
    <div className="footer-legal">
      <a href="/privacy">Privacy Policy</a>
      <span>|</span>
      <a href="/terms">Terms of Service</a>
    </div>
  </div>
</footer>
```

### Styling
- Background: #1E1E22
- Padding: 60px vertical, 40px horizontal
- Text: 14px, Regular, #A0A0A0
- Links: #E6E6E8, hover cyan
- Grid: 3 columns on desktop, stack on mobile
- Bottom border: 1px solid #2C2C30 above legal section

---

## COMPONENT 10: Navigation

### Purpose
Consistent header navigation

### Props
- `currentPage` (string, optional) - Highlight active page

### Structure
```jsx
<nav>
  <Logo variant="wordmark-dark" size="medium" />
  <ul className="nav-links">
    <li><a href="/" className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
    <li><a href="/services" className={currentPage === 'services' ? 'active' : ''}>Services</a></li>
    <li><a href="/process" className={currentPage === 'process' ? 'active' : ''}>Process</a></li>
    <li><a href="/work" className={currentPage === 'work' ? 'active' : ''}>Work</a></li>
    <li><a href="/contact" className={currentPage === 'contact' ? 'active' : ''}>Contact</a></li>
  </ul>
</nav>
```

### Styling
- Background: #0D0D0F (dark) or transparent
- Padding: 20px vertical, 40px horizontal
- Links: 16px, Regular, #E6E6E8
- Active link: cyan (#09A6D6) or underline
- Hover: cyan text
- Logo: Left aligned
- Nav links: Right aligned
- Mobile: Hamburger menu (if needed)

---

## COMPONENT ORGANIZATION

### File Structure
```
/components
  /common
    - SectionHeading.jsx
    - Button.jsx
    - Logo.jsx
    - Navigation.jsx
    - Footer.jsx
  /cards
    - ServiceCard.jsx
    - ValueCard.jsx
    - ProcessStep.jsx
  /forms
    - FormField.jsx
    - ContactForm.jsx
  /sections
    - CTABlock.jsx
    - Hero.jsx
```

---

## COMPONENT USAGE EXAMPLES

### Example 1: Using ServiceCard
```jsx
<ServiceCard
  title="Custom Websites"
  description="Hand-built, modern, and responsive. Zero templates."
  icon={<WebIcon />}
  link="/services#custom-websites"
/>
```

### Example 2: Using ProcessStep
```jsx
<ProcessStep
  number="01"
  title="Discovery"
  description={[
    "Project goals defined",
    "Requirements gathered",
    "Timeline estimated"
  ]}
  outcome="A clear plan and shared understanding."
/>
```

### Example 3: Using CTABlock
```jsx
<CTABlock
  heading="Ready to start?"
  body="Let's talk about your project."
  email="hello@jamarq.digital"
  buttonText="Get in Touch"
  buttonLink="/contact"
/>
```

---

## ACCESSIBILITY REQUIREMENTS

All components must:
- Use semantic HTML
- Include proper ARIA labels where needed
- Support keyboard navigation
- Have sufficient color contrast
- Include focus states
- Work with screen readers
- Scale text properly
- Maintain touch target sizes (44x44px minimum)

---

## PERFORMANCE NOTES

- Use React.memo() for components that don't need frequent re-renders
- Lazy load images in cards
- Optimize SVG logos
- Minimize prop passing depth
- Use proper key props in lists
- Avoid inline styles where possible

---

# Appendix: portfolio-instructions-v2/08_STYLING_TOKENS.md (verbatim)

# STYLING TOKENS & DESIGN SYSTEM

## Purpose
Define all design tokens for consistency. Single source of truth for colors, typography, spacing, and more.

---

## COLOR PALETTE

### Primary Colors
```css
--jamarq-black: #0D0D0F;
--jamarq-cyan: #09A6D6;
```

### Neutral Grays
```css
--steel: #1E1E22;
--slate: #2C2C30;
--mist: #E6E6E8;
--gray-light: #A0A0A0;
--gray-dark: #6B7280;
```

### Semantic Colors
```css
--error: #DC2626;
--success: #10B981;
--warning: #F59E0B;
--info: #3B82F6;
```

### Background Colors
```css
--bg-primary: var(--jamarq-black);
--bg-secondary: var(--steel);
--bg-tertiary: var(--slate);
```

### Text Colors
```css
--text-primary: #FFFFFF;
--text-secondary: var(--mist);
--text-muted: var(--gray-light);
--text-inverted: var(--jamarq-black);
```

### Border Colors
```css
--border-default: var(--slate);
--border-focus: var(--jamarq-cyan);
--border-error: var(--error);
```

---

## TYPOGRAPHY

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-secondary: 'Merriweather', Georgia, serif; /* Optional for long-form content */
```

### Font Weights
```css
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

### Font Sizes

**Desktop:**
```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 28px;
--text-4xl: 32px;
--text-5xl: 40px;
--text-6xl: 48px;
```

**Mobile (adjust as needed):**
```css
@media (max-width: 768px) {
  --text-4xl: 28px;
  --text-5xl: 32px;
  --text-6xl: 40px;
}
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

### Letter Spacing
```css
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
```

---

## SPACING SYSTEM

### Base Unit
```css
--spacing-unit: 4px;
```

### Spacing Scale (4px increments)
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-30: 120px;
```

### Section Padding
```css
--section-padding-desktop: var(--space-30); /* 120px */
--section-padding-tablet: var(--space-20); /* 80px */
--section-padding-mobile: var(--space-16); /* 64px */
```

### Container Padding
```css
--container-padding-desktop: var(--space-10); /* 40px */
--container-padding-mobile: var(--space-5); /* 20px */
```

---

## LAYOUT

### Max Widths
```css
--max-width-xs: 480px;
--max-width-sm: 640px;
--max-width-md: 768px;
--max-width-lg: 1024px;
--max-width-xl: 1280px;
--max-width-2xl: 1440px;
--max-width-full: 100%;
```

### Content Widths (for text-heavy sections)
```css
--content-width: 800px;
--content-width-narrow: 600px;
```

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## BORDERS

### Border Widths
```css
--border-width-thin: 1px;
--border-width-default: 2px;
--border-width-thick: 4px;
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

## SHADOWS

### Box Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-default: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

### Cyan Glow (for hover states)
```css
--glow-cyan: 0 0 20px rgba(9, 166, 214, 0.3);
--glow-cyan-intense: 0 0 30px rgba(9, 166, 214, 0.5);
```

---

## Z-INDEX SYSTEM

```css
--z-base: 0;
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

---

## TRANSITIONS

### Duration
```css
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;
```

### Easing
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Transitions
```css
--transition-colors: color var(--duration-base) var(--ease-in-out),
                     background-color var(--duration-base) var(--ease-in-out),
                     border-color var(--duration-base) var(--ease-in-out);
--transition-transform: transform var(--duration-base) var(--ease-in-out);
--transition-all: all var(--duration-base) var(--ease-in-out);
```

---

## COMPONENT-SPECIFIC TOKENS

### Buttons
```css
--button-padding-sm: 12px 20px;
--button-padding-md: 16px 32px;
--button-padding-lg: 20px 40px;
--button-radius: var(--radius-sm);
```

### Cards
```css
--card-padding: var(--space-10);
--card-radius: var(--radius-md);
--card-border: var(--border-width-thin) solid var(--border-default);
```

### Forms
```css
--input-padding: 12px 16px;
--input-radius: var(--radius-sm);
--input-border: var(--border-width-thin) solid var(--border-default);
--input-focus-border: var(--border-width-default) solid var(--border-focus);
```

### Navigation
```css
--nav-height: 80px;
--nav-padding: var(--space-5) var(--space-10);
```

---

## GRID SYSTEM

### Grid Gaps
```css
--grid-gap-sm: var(--space-4); /* 16px */
--grid-gap-md: var(--space-8); /* 32px */
--grid-gap-lg: var(--space-10); /* 40px */
```

### Grid Columns
```css
--grid-cols-2: repeat(2, 1fr);
--grid-cols-3: repeat(3, 1fr);
--grid-cols-4: repeat(4, 1fr);
```

---

## ACCESSIBILITY

### Focus Rings
```css
--focus-ring: 0 0 0 3px rgba(9, 166, 214, 0.3);
--focus-ring-offset: 2px;
```

### Minimum Touch Targets
```css
--touch-target-min: 44px;
```

### Contrast Ratios (for reference)
```
Normal text: 4.5:1 minimum
Large text: 3:1 minimum
UI components: 3:1 minimum
```

---

## USAGE EXAMPLES

### Example 1: Using Color Tokens
```css
.card {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border: var(--border-width-thin) solid var(--border-default);
}

.card:hover {
  border-color: var(--border-focus);
  box-shadow: var(--glow-cyan);
}
```

### Example 2: Using Spacing Tokens
```css
.section {
  padding: var(--section-padding-desktop) var(--container-padding-desktop);
}

@media (max-width: 768px) {
  .section {
    padding: var(--section-padding-mobile) var(--container-padding-mobile);
  }
}
```

### Example 3: Using Typography Tokens
```css
h1 {
  font-family: var(--font-primary);
  font-size: var(--text-5xl);
  font-weight: var(--weight-semibold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
}

p {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}
```

### Example 4: Using Transition Tokens
```css
.button {
  transition: var(--transition-colors);
}

.button:hover {
  background-color: var(--jamarq-cyan);
  transform: translateY(-2px);
  transition: var(--transition-all);
}
```

---

## CSS CUSTOM PROPERTIES (Variables)

### Root Declaration
```css
:root {
  /* Colors */
  --jamarq-black: #0D0D0F;
  --jamarq-cyan: #09A6D6;
  --steel: #1E1E22;
  --slate: #2C2C30;
  --mist: #E6E6E8;
  
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --text-base: 16px;
  --weight-semibold: 600;
  --leading-relaxed: 1.625;
  
  /* Spacing */
  --space-4: 16px;
  --space-10: 40px;
  --section-padding-desktop: 120px;
  
  /* Borders */
  --radius-md: 8px;
  --border-default: #2C2C30;
  
  /* Transitions */
  --duration-base: 200ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## TAILWIND CONFIG (If Using Tailwind)

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'jamarq-black': '#0D0D0F',
        'jamarq-cyan': '#09A6D6',
        'steel': '#1E1E22',
        'slate': '#2C2C30',
        'mist': '#E6E6E8',
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'secondary': ['Merriweather', 'serif'],
      },
      spacing: {
        '30': '120px',
      },
      maxWidth: {
        'content': '800px',
      },
    },
  },
}
```

---

## SCSS VARIABLES (If Using SCSS)

```scss
// Colors
$jamarq-black: #0D0D0F;
$jamarq-cyan: #09A6D6;
$steel: #1E1E22;
$slate: #2C2C30;
$mist: #E6E6E8;

// Typography
$font-primary: 'Inter', sans-serif;
$text-base: 16px;
$weight-semibold: 600;

// Spacing
$space-4: 16px;
$space-10: 40px;
$section-padding: 120px;

// Breakpoints
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
```

---

## RESPONSIVE DESIGN APPROACH

### Mobile First
```css
/* Base styles (mobile) */
.element {
  font-size: var(--text-base);
  padding: var(--space-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    font-size: var(--text-lg);
    padding: var(--space-8);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    font-size: var(--text-xl);
    padding: var(--space-10);
  }
}
```

---

## PERFORMANCE NOTES

- Use CSS custom properties for dynamic theming
- Minimize custom property usage in hot paths (animations)
- Group related properties in a single :root declaration
- Use SCSS/CSS modules for component-scoped styles
- Avoid inline styles; prefer utility classes or component styles
- Optimize custom property inheritance depth

---

## MAINTENANCE

### Adding New Tokens
1. Define in this document first
2. Add to CSS custom properties
3. Document usage examples
4. Update components using new token
5. Test across all breakpoints

### Deprecating Tokens
1. Mark as deprecated in comments
2. Provide migration path
3. Update all usages
4. Remove after one release cycle

### Token Naming Convention
- Use semantic names (`--text-primary`) over literal (`--color-white`)
- Use consistent prefixes (`--space-`, `--text-`, `--border-`)
- Use scale-based naming for sizes (`--text-sm`, `--text-md`, `--text-lg`)

---

# Appendix: portfolio-instructions-v2/09_IMPLEMENTATION_CHECKLIST.md (verbatim)

# IMPLEMENTATION CHECKLIST

## Purpose
Step-by-step checklist for building the JAMARQ portfolio site rebuild. Check off items as you complete them.

---

## PHASE 1: SETUP & FOUNDATION

### Design System Setup
- [ ] Create CSS custom properties file with all tokens
- [ ] Set up color variables
- [ ] Set up typography variables
- [ ] Set up spacing system
- [ ] Test variables in browser dev tools
- [ ] Create base CSS reset/normalize

### Component Architecture
- [ ] Set up component folder structure
- [ ] Create base component templates
- [ ] Set up component style approach (CSS Modules, Tailwind, etc.)
- [ ] Test component rendering

### Assets
- [ ] Export all logo variants (SVG preferred)
  - [ ] Wordmark dark mode
  - [ ] Wordmark light mode
  - [ ] Q icon dark mode
  - [ ] Q icon light mode
  - [ ] Single-color Q marks
- [ ] Optimize logo file sizes
- [ ] Set up asset directory structure
- [ ] Create favicon set (16x16, 32x32, 180x180, 192x192)

---

## PHASE 2: CORE COMPONENTS

### Build Reusable Components
- [ ] Logo component
- [ ] Button component (all variants)
- [ ] SectionHeading component
- [ ] FormField component
- [ ] Navigation component
- [ ] Footer component
- [ ] Test all components in isolation

---

## PHASE 3: HOMEPAGE (Priority 1)

### Hero Section
- [ ] Keep existing hero implementation
- [ ] Verify logo displays correctly
- [ ] Test CTA button functionality
- [ ] Check mobile responsiveness

### Sub-Hero Section
- [ ] Add tagline ("Build with intention")
- [ ] Add subheading copy
- [ ] Add supporting line
- [ ] Style with proper spacing
- [ ] Test on mobile

### What I Build Section
- [ ] Create 3-column grid layout
- [ ] Build ServiceCard component
- [ ] Add all 3 service cards with copy
- [ ] Add hover states
- [ ] Test grid responsiveness (mobile: 1 column)
- [ ] Add section heading (optional)

### Transition Line 1
- [ ] Add centered transition text
- [ ] Style with muted color
- [ ] Test spacing above/below

### How I Work Section
- [ ] Create ProcessStep component
- [ ] Add all 3 process steps
- [ ] Style step numbers (large, cyan)
- [ ] Add section heading
- [ ] Test layout (vertical or grid)
- [ ] Test mobile responsiveness

### Transition Line 2
- [ ] Add centered transition text
- [ ] Match styling to Transition 1

### What You Get Section
- [ ] Create ValueCard component
- [ ] Add all 4 value points
- [ ] Add cyan accent lines
- [ ] Create 2x2 grid layout
- [ ] Test mobile responsiveness (1 column)
- [ ] Add section intro paragraph

### Transition Line 3
- [ ] Add centered transition text
- [ ] Match styling to previous transitions

### Work Section
- [ ] Add section heading
- [ ] Add "coming soon" copy (choose version 1 or 2)
- [ ] Style centered content block
- [ ] Test readability
- [ ] Optional: Add placeholder cards (or skip)

### CTA Section
- [ ] Use CTABlock component
- [ ] Add heading and body copy
- [ ] Display email prominently
- [ ] Add button (or keep existing)
- [ ] Test email link functionality

### Footer
- [ ] Implement Footer component
- [ ] Add logo (Q icon dark)
- [ ] Add navigation links
- [ ] Add contact email
- [ ] Add copyright
- [ ] Add legal links (Privacy, Terms)
- [ ] Test all links
- [ ] Test mobile layout

### Homepage Final Checks
- [ ] Test full page scroll experience
- [ ] Verify all sections have proper spacing
- [ ] Check color contrast ratios (WCAG AA)
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices
- [ ] Test on tablet
- [ ] Verify load time (<2 seconds)

---

## PHASE 4: CONTACT PAGE (Priority 2)

### Hero
- [ ] Add page title
- [ ] Add sub-copy
- [ ] Style consistently with other pages

### Contact Options
- [ ] Display 3 email addresses clearly
- [ ] Distinguish between email purposes
- [ ] Add response time note

### Contact Form
- [ ] Create ContactForm component
- [ ] Add Name field (required)
- [ ] Add Email field (required, validated)
- [ ] Add Business Name field (optional)
- [ ] Add Project Description textarea (required)
- [ ] Add Timeline dropdown (optional)
- [ ] Add Current Website field (optional)
- [ ] Add Submit button
- [ ] Implement form validation
- [ ] Add error messages
- [ ] Add success message
- [ ] Test form submission
- [ ] Set up backend/email service
- [ ] Test all validation cases
- [ ] Test mobile form usability

### What Happens Next
- [ ] Add section heading
- [ ] Add all 4 steps
- [ ] Style with proper spacing
- [ ] Test readability

### Contact Page Final Checks
- [ ] Test form on mobile
- [ ] Verify email links work
- [ ] Test with keyboard only
- [ ] Run accessibility audit
- [ ] Test spam protection

---

## PHASE 5: SERVICES PAGE (Priority 3)

### Hero
- [ ] Add page title
- [ ] Add sub-copy

### Core Services
- [ ] Create 2x2 grid (or 4-card layout)
- [ ] Add all 4 service cards
- [ ] Add "What's Included" lists
- [ ] Add "View Maintenance Plans" link
- [ ] Test hover states
- [ ] Test mobile layout (1 column)

### What Makes JAMARQ Different
- [ ] Create 2-column grid
- [ ] Add all 6 differentiators
- [ ] Use specific copy (not buzzwords)
- [ ] Test mobile layout

### Pricing Philosophy
- [ ] Add centered content block
- [ ] Add heading and body copy
- [ ] Add pricing range mention
- [ ] Add CTA to Process page
- [ ] Test readability

### Services Page Final Checks
- [ ] Verify all internal links work
- [ ] Test on mobile
- [ ] Check content accuracy
- [ ] Run Lighthouse audit

---

## PHASE 6: PROCESS PAGE (Priority 4)

### Hero
- [ ] Add page title
- [ ] Add sub-copy

### Process Steps
- [ ] Use ProcessStep component (already built)
- [ ] Add all 6 process steps
- [ ] Style as vertical timeline OR grid
- [ ] Add connecting line (if vertical)
- [ ] Test mobile layout
- [ ] Verify step numbers display correctly (cyan)

### Timeline Context
- [ ] Add timeline heading
- [ ] Add timeline factors (3 bullet points)
- [ ] Add supporting text
- [ ] Style content block

### What This Process Prevents
- [ ] Add heading
- [ ] Add 6 prevention points
- [ ] Style as simple list
- [ ] Test readability

### Process Page Final Checks
- [ ] Test all internal links
- [ ] Verify timeline content accuracy
- [ ] Test mobile scrolling
- [ ] Run accessibility check

---

## PHASE 7: CASE STUDIES PAGE (Priority 5)

### Hero
- [ ] Add page title ("Work" or "Case Studies")
- [ ] Add sub-copy

### Coming Soon Message
- [ ] Choose version 1 or version 2
- [ ] Add confident placeholder copy
- [ ] Center content block
- [ ] Test readability
- [ ] Verify email link works

### Optional Preview Cards
- [ ] Decide: show placeholder cards or skip?
- [ ] If showing: add 3 placeholder cards
- [ ] Style with muted colors
- [ ] Add "Coming soon" badges
- [ ] Make non-clickable
- [ ] OR skip cards entirely (cleaner)

### What Case Studies Will Include
- [ ] Add section heading
- [ ] Add all 5 case study components
- [ ] Style as numbered list
- [ ] Test spacing

### CTA
- [ ] Add heading
- [ ] Add body copy
- [ ] Add email or CTA button
- [ ] Test functionality

### Case Studies Page Final Checks
- [ ] Verify tone is confident, not apologetic
- [ ] Test email link
- [ ] Check mobile layout
- [ ] Prepare structure for future real case studies

---

## PHASE 8: GLOBAL ELEMENTS

### Navigation
- [ ] Add Navigation component to all pages
- [ ] Highlight active page
- [ ] Test all nav links
- [ ] Test mobile menu (if applicable)
- [ ] Verify logo links to home
- [ ] Test sticky header (if applicable)

### Footer
- [ ] Add Footer component to all pages
- [ ] Verify consistent across all pages
- [ ] Test all footer links
- [ ] Update copyright year dynamically

### Meta Tags (All Pages)
- [ ] Homepage: title, description, OG tags
- [ ] Services: title, description, OG tags
- [ ] Process: title, description, OG tags
- [ ] Work: title, description, OG tags
- [ ] Contact: title, description, OG tags
- [ ] Add Twitter Card tags
- [ ] Add favicon links
- [ ] Test social sharing preview

---

## PHASE 9: SEO & PERFORMANCE

### On-Page SEO
- [ ] Verify one H1 per page
- [ ] Check heading hierarchy (H1 → H2 → H3)
- [ ] Add alt text to all images
- [ ] Verify all links have descriptive text
- [ ] Create XML sitemap
- [ ] Create robots.txt
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (if desired)

### Performance
- [ ] Optimize all images (WebP format)
- [ ] Lazy load below-fold images
- [ ] Minify CSS
- [ ] Minify JavaScript
- [ ] Remove unused code
- [ ] Test load time on 3G connection
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Test with slow CPU throttling

### Accessibility
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader
- [ ] Verify all color contrast ratios (4.5:1 minimum)
- [ ] Check focus indicators on all interactive elements
- [ ] Verify form labels and ARIA attributes
- [ ] Test with browser zoom (200%)
- [ ] Run axe DevTools audit

---

## PHASE 10: CROSS-BROWSER TESTING

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari iOS
- [ ] Chrome Android
- [ ] Samsung Internet

### Responsive Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13/14 (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1280px)
- [ ] Large Desktop (1920px)

---

## PHASE 11: PRE-LAUNCH

### Content Review
- [ ] Proofread all copy
- [ ] Verify all emails are correct
- [ ] Check all phone numbers (if any)
- [ ] Verify business hours (if mentioned)
- [ ] Update copyright year
- [ ] Check for placeholder text

### Functionality Testing
- [ ] Test all internal links
- [ ] Test all external links
- [ ] Test contact form submission
- [ ] Test email links (mailto:)
- [ ] Verify no 404 errors
- [ ] Test form validation
- [ ] Test error states

### Legal Pages
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Link from footer
- [ ] Verify compliant with regulations

### Analytics & Tracking
- [ ] Set up Google Analytics (optional)
- [ ] Set up Google Search Console
- [ ] Test tracking implementation
- [ ] Verify GDPR compliance (if applicable)

---

## PHASE 12: LAUNCH

### Pre-Launch Checklist
- [ ] Final Lighthouse audit
- [ ] Final accessibility check
- [ ] Final cross-browser test
- [ ] Backup current site (if replacing existing)
- [ ] Set up 301 redirects (if applicable)
- [ ] Verify DNS settings
- [ ] Test SSL certificate

### Launch Day
- [ ] Deploy to production
- [ ] Verify site loads correctly
- [ ] Test all pages in production
- [ ] Submit sitemap to Google
- [ ] Monitor for errors (first 24 hours)
- [ ] Check analytics tracking

### Post-Launch (First Week)
- [ ] Monitor site performance
- [ ] Check for any reported issues
- [ ] Review analytics data
- [ ] Test contact form submissions
- [ ] Monitor search console for errors

---

## PHASE 13: POST-LAUNCH OPTIMIZATION

### Week 1-2
- [ ] Review bounce rate data
- [ ] Check time on site metrics
- [ ] Review most visited pages
- [ ] Test conversion paths
- [ ] Make minor adjustments based on data

### Month 1
- [ ] Review full analytics
- [ ] Identify high-exit pages
- [ ] Test A/B variations (if needed)
- [ ] Begin work on first case study
- [ ] Update case studies page when ready

### Ongoing
- [ ] Add case studies as completed
- [ ] Update testimonials (when received)
- [ ] Refine copy based on user feedback
- [ ] Keep maintenance plans updated
- [ ] Monitor site speed monthly
- [ ] Update content as services evolve

---

## SUCCESS METRICS

### Target Goals
- [ ] Bounce rate: 60-70% (down from 90%)
- [ ] Average session duration: 2+ minutes
- [ ] Pages per session: 2.5+
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse Best Practices: 90+
- [ ] Lighthouse SEO: 90+
- [ ] Page load time: <2 seconds
- [ ] Contact form submissions: Track baseline

---

## NOTES & DECISIONS

### Document Key Decisions Here
- Font loading strategy: _______________
- Hosting provider: _______________
- Form backend service: _______________
- Analytics tool: _______________
- Image optimization approach: _______________
- CSS approach (Tailwind/Custom/CSS Modules): _______________

### Known Issues to Address Later
- [ ] Issue 1: _______________
- [ ] Issue 2: _______________
- [ ] Issue 3: _______________

### Future Enhancements (Post-Launch)
- [ ] Blog section (if desired)
- [ ] Client testimonials section
- [ ] Project filtering on work page
- [ ] Dark/light mode toggle
- [ ] Interactive pricing calculator
- [ ] Video content
- [ ] Newsletter signup

---

## ESTIMATED TIMELINE

**Phase 1-2 (Setup + Components):** 1-2 days  
**Phase 3 (Homepage):** 2-3 days  
**Phase 4 (Contact):** 1 day  
**Phase 5 (Services):** 1 day  
**Phase 6 (Process):** 1 day  
**Phase 7 (Case Studies):** 0.5 days  
**Phase 8-10 (Polish + Testing):** 1-2 days  
**Phase 11-12 (Pre-Launch + Launch):** 0.5 days  

**Total Estimated Time:** 8-12 days of focused work

---

## QUESTIONS TO ANSWER BEFORE STARTING

- [ ] What's your preferred CSS approach? (Tailwind, custom CSS, CSS Modules, Styled Components?)
- [ ] Do you need a CMS or just static content?
- [ ] What form backend will you use? (Formspree, Netlify Forms, custom?)
- [ ] Do you want Google Analytics or similar?
- [ ] What's your hosting setup? (Vercel, Netlify, custom server?)
- [ ] Do you have all logo assets ready to go?
- [ ] Do you need legal pages drafted (Privacy, Terms)?

---

**Remember:** This is a marathon, not a sprint. Check off items as you complete them. Take breaks. Test thoroughly. Ship confidently.
