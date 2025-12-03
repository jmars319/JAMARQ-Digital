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
