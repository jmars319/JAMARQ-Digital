# Developer Guide

## Local Setup
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Core Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Repo Structure (current)
- `app/` routes + layout (App Router)
- `components/` shared UI
- `content/` case study content sources
- `lib/` data helpers
- `public/` static assets

## Code Conventions
- TypeScript throughout
- Tailwind utility-first styling
- Prefer semantic HTML and accessible defaults

---

# Appendix: jamarq-copilot-docs/02-QUICK_START.md (verbatim)

# QUICK START GUIDE

## Overview
Get the JAMARQ portfolio site up and running in under 30 minutes. This guide focuses on speed - refer to other docs for detailed explanations.

---

## Prerequisites

Install these before starting:
```bash
# Check if installed
node --version  # Need v18+
npm --version   # Should come with Node
git --version   # Need Git
```

If missing, install:
- **Node.js:** [nodejs.org](https://nodejs.org) (LTS version)
- **Git:** [git-scm.com](https://git-scm.com)

---

## Phase 0: Placeholder Site (< 1 Hour)

### 1. Create Project (5 minutes)

```bash
# Create Next.js app
npx create-next-app@latest jamarq-portfolio

# Options to select:
# ✅ TypeScript
# ✅ ESLint
# ✅ Tailwind CSS
# ✅ src/ directory
# ✅ App Router
# ❌ Turbopack (optional)
# ❌ import alias (optional, or keep default @/*)

cd jamarq-portfolio
```

### 2. Configure Tailwind (5 minutes)

Edit `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jamarq-black': '#0A0A0C',
        'jamarq-charcoal': '#1A1A20',
        'jamarq-slate': '#2A2E39',
        'jamarq-white': '#F2F2F5',
        'jamarq-gray': '#9CA3AF',
        'jamarq-cyan': '#0CE3F2',
        'jamarq-magenta': '#FF3EB5',
        'jamarq-purple': '#8B4DF5',
      },
    },
  },
  plugins: [],
}

export default config
```

### 3. Create Placeholder Page (10 minutes)

Edit `src/app/page.tsx`:
```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-jamarq-black text-jamarq-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          JAMARQ
        </h1>
        
        <p className="text-xl md:text-2xl text-jamarq-gray mb-8">
          Digital + Creative Studio
        </p>
        
        <p className="text-lg mb-4">
          Websites | Brand Identity | Consulting
        </p>
        
        <a
          href="mailto:jason@jamarq.digital"
          className="inline-block bg-jamarq-cyan text-jamarq-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all mt-8"
        >
          Work With Me
        </a>
        
        <p className="text-jamarq-gray mt-12 text-sm">
          Portfolio launching soon
        </p>
      </div>
    </main>
  )
}
```

Edit `src/app/layout.tsx`:
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JAMARQ Digital - Web Development & Creative Services',
  description: 'Custom web development, brand identity, and consulting services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

### 4. Test Locally (2 minutes)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Should see your placeholder page!

### 5. Deploy to Vercel (10 minutes)

```bash
# Initialize Git
git init
git add .
git commit -m "Initial commit: JAMARQ placeholder"

# Create GitHub repo at github.com/new
# Then push:
git remote add origin https://github.com/yourusername/jamarq-portfolio.git
git branch -M main
git push -u origin main

# Deploy
# 1. Go to vercel.com
# 2. Sign in with GitHub
# 3. Import your repository
# 4. Click Deploy
```

**Done!** You now have a live site at `your-project.vercel.app`

---

## Phase 1: Full Site Setup (Day 1)

### 1. Install Dependencies (2 minutes)

```bash
npm install framer-motion
npm install sanity @sanity/image-url
npm install react-hook-form @hookform/resolvers zod
npm install @vercel/analytics
```

### 2. Set Up Sanity (10 minutes)

```bash
npm install -g @sanity/cli
sanity init

# Follow prompts:
# - Create new project
# - Name: JAMARQ Portfolio
# - Dataset: production
# - Output path: ./sanity
```

Save these values:
```
Project ID: [save this]
Dataset: production
```

### 3. Environment Variables (2 minutes)

Create `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

**Never commit `.env.local`!**

### 4. Create Folder Structure (5 minutes)

```bash
# Create all needed folders
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/portfolio
mkdir -p src/lib/sanity
mkdir -p src/lib/types
```

### 5. Quick Component Setup (15 minutes)

Create `src/components/layout/Header.tsx`:
```tsx
'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jamarq-black/80 backdrop-blur-md border-b border-jamarq-slate">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="text-2xl font-bold">
          JAMARQ
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/work" className="hover:text-jamarq-cyan transition-colors">
            Work
          </Link>
          <Link href="/about" className="hover:text-jamarq-cyan transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-jamarq-cyan transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
```

Create `src/components/layout/Footer.tsx`:
```tsx
export default function Footer() {
  return (
    <footer className="bg-jamarq-charcoal border-t border-jamarq-slate">
      <div className="container mx-auto px-4 py-8 max-w-6xl text-center">
        <p className="text-jamarq-gray text-sm">
          © {new Date().getFullYear()} JAMARQ Digital. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
```

Update `src/app/layout.tsx` to include Header and Footer:
```tsx
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-16"> {/* Offset for fixed header */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
```

### 6. Test & Push (5 minutes)

```bash
npm run dev
# Check everything works

git add .
git commit -m "Add header, footer, and basic structure"
git push origin main
```

Vercel auto-deploys!

---

## Essential Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Run production build locally
npm run lint         # Run ESLint
```

### Git Workflow
```bash
git status           # Check what changed
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push origin main # Push to GitHub (triggers deploy)
```

### Sanity
```bash
cd sanity
npm run dev          # Start Sanity Studio
```

---

## Next Steps Checklist

After placeholder is live, tackle these:

### Week 1
- [ ] Create complete homepage design
- [ ] Set up Sanity schemas
- [ ] Add 2-3 portfolio projects
- [ ] Build portfolio grid page
- [ ] Create about page
- [ ] Add contact form

### Week 2
- [ ] Add remaining portfolio projects
- [ ] Create service pages
- [ ] Implement animations
- [ ] Mobile optimization
- [ ] Add meta tags

### Week 3
- [ ] Performance optimization
- [ ] SEO setup
- [ ] Analytics integration
- [ ] Final testing
- [ ] Launch announcement

---

## Troubleshooting Quick Fixes

### Port 3000 in use
```bash
npx kill-port 3000
npm run dev
```

### TypeScript errors
```bash
npm run type-check  # See all errors
```

### Tailwind not working
```bash
# Restart dev server
npm run dev
```

### Changes not showing
```bash
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
# Or clear .next folder:
rm -rf .next
npm run dev
```

---

## File Organization Reference

```
jamarq-portfolio/
├── src/
│   ├── app/                     # Pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── work/               # Portfolio pages
│   │   ├── about/              # About page
│   │   └── contact/            # Contact page
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Page sections
│   │   └── portfolio/          # Portfolio components
│   └── lib/                    # Utilities, types
├── public/                     # Static files
├── .env.local                  # Environment variables (don't commit!)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

---

## Important Reminders

### DO ✅
- Commit often (every feature/fix)
- Test locally before pushing
- Use meaningful commit messages
- Check mobile layout always
- Keep dependencies updated

### DON'T ❌
- Commit `.env.local` file
- Push directly to main without testing
- Ignore TypeScript errors
- Skip accessibility
- Forget to test on mobile

---

## Getting Help

### Documentation
- **Main instructions:** 01-COPILOT_INSTRUCTIONS.md
- **Responsive design:** 03-RESPONSIVE_DESIGN.md
- **Accessibility:** 04-ACCESSIBILITY.md
- **Animations:** 05-ANIMATION_PATTERNS.md
- **Deployment:** 07-DEPLOYMENT.md
- **Troubleshooting:** 06-TROUBLESHOOTING.md

### Online Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Sanity Docs](https://www.sanity.io/docs)

### Community
- Next.js Discord
- Stack Overflow
- GitHub Discussions

---

## Pro Tips

1. **Use Copilot effectively:** Read main instructions first, then code with Copilot suggestions
2. **Mobile-first:** Always design for mobile, then scale up
3. **Git commits:** Small, frequent commits > large, rare commits
4. **Test early:** Don't wait until the end to test features
5. **Performance:** Run Lighthouse audit regularly
6. **Backups:** Code is on GitHub, but also back up environment variables

---

## Success Metrics

### Placeholder Launch (< 1 hour)
- ✅ Site loads at your-project.vercel.app
- ✅ Shows JAMARQ branding
- ✅ Email link works
- ✅ Mobile responsive

### Full Site Launch (3-4 weeks)
- ✅ 3+ portfolio projects
- ✅ All pages complete
- ✅ Forms working
- ✅ Lighthouse score 90+
- ✅ Custom domain live
- ✅ Analytics tracking

---

## Time Estimates

**Placeholder (Get online now):**
- Setup: 30 minutes
- Deploy: 15 minutes
- **Total: 45 minutes**

**Full Site (Production ready):**
- Week 1: Core structure + 3 projects
- Week 2: Polish + remaining content
- Week 3: Optimize + launch
- **Total: 3-4 weeks part-time**

---

Ready to build? Start with the placeholder, get it live, then iterate towards the full site using the complete instructions in 01-COPILOT_INSTRUCTIONS.md.

Good luck! 🚀

---

# Appendix: jamarq-copilot-docs/03-RESPONSIVE_DESIGN.md (verbatim)

# RESPONSIVE DESIGN GUIDE

## Overview
This document provides specific responsive design patterns and breakpoints for the JAMARQ portfolio site. Follow these guidelines to ensure consistent behavior across all devices.

---

## Tailwind Breakpoints

JAMARQ uses Tailwind's default breakpoint system:

```
sm:  640px  (small tablets, large phones)
md:  768px  (tablets)
lg:  1024px (laptops, small desktops)
xl:  1280px (desktops)
2xl: 1536px (large desktops)
```

**Mobile-First Approach:**
Always write mobile styles first (no prefix), then add larger breakpoint modifiers.

```tsx
// ✅ CORRECT: Mobile-first
<div className="text-base md:text-lg lg:text-xl">

// ❌ WRONG: Desktop-first
<div className="text-xl lg:text-lg md:text-base">
```

---

## Common Responsive Patterns

### Container Widths

```tsx
// Standard content container
<div className="container mx-auto px-4 max-w-6xl">
  {/* Content */}
</div>

// Narrow content (blog posts, long-form text)
<div className="container mx-auto px-4 max-w-4xl">
  {/* Content */}
</div>

// Wide content (portfolio grids, galleries)
<div className="container mx-auto px-4 max-w-7xl">
  {/* Content */}
</div>
```

### Grid Layouts

**Portfolio Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

**Services Grid:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* 1 column on mobile/tablet, 3 on desktop */}
</div>
```

**Two-Column Layout (Image + Text):**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Stack on mobile, side-by-side on desktop */}
</div>
```

### Typography Scaling

```tsx
// Hero Headlines
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">

// Page Titles
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">

// Section Headings
<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">

// Subsection Headings
<h3 className="text-xl md:text-2xl font-semibold">

// Body Text (usually doesn't need scaling)
<p className="text-base leading-relaxed">

// Small Text
<p className="text-sm md:text-base">
```

### Spacing Patterns

**Section Padding:**
```tsx
// Large sections (homepage hero, major dividers)
<section className="py-16 md:py-24 lg:py-32">

// Standard sections
<section className="py-12 md:py-16 lg:py-24">

// Compact sections
<section className="py-8 md:py-12">
```

**Content Gaps:**
```tsx
// Large gaps (between major sections)
className="space-y-16 md:space-y-24"

// Standard gaps (between content blocks)
className="space-y-8 md:space-y-12"

// Small gaps (between related items)
className="space-y-4 md:space-y-6"
```

### Button Sizing

```tsx
// Primary CTA (hero, major actions)
<button className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg">

// Secondary buttons
<button className="px-4 py-2 md:px-6 md:py-3 text-sm md:text-base">

// Small buttons
<button className="px-3 py-1.5 text-sm">
```

---

## Navigation Patterns

### Desktop Navigation
```tsx
<nav className="hidden md:flex items-center gap-8">
  {navigation.map((item) => (
    <Link key={item.name} href={item.href}>
      {item.name}
    </Link>
  ))}
</nav>
```

### Mobile Menu
```tsx
<button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
  {/* Hamburger icon */}
</button>

{mobileMenuOpen && (
  <div className="md:hidden">
    {/* Mobile menu items */}
  </div>
)}
```

---

## Image Handling

### Hero Images
```tsx
<div className="relative w-full aspect-video md:aspect-[21/9]">
  <Image
    src={imageSrc}
    alt={alt}
    fill
    className="object-cover"
    priority // Only for above-fold images
  />
</div>
```

### Portfolio Card Images
```tsx
<div className="relative aspect-video overflow-hidden">
  <Image
    src={imageSrc}
    alt={alt}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-105"
  />
</div>
```

### Profile/About Images
```tsx
<div className="relative w-full aspect-square md:aspect-[3/4] max-w-md mx-auto">
  <Image
    src={imageSrc}
    alt={alt}
    fill
    className="object-cover rounded-lg"
  />
</div>
```

---

## Form Layouts

### Stacked Forms (Mobile-friendly)
```tsx
<form className="space-y-6">
  <div>
    <label className="block text-sm font-medium mb-2">Name</label>
    <input className="w-full px-4 py-3" />
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Email</label>
    <input className="w-full px-4 py-3" />
  </div>
</form>
```

### Two-Column Forms (Desktop)
```tsx
<form className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium mb-2">First Name</label>
      <input className="w-full px-4 py-3" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Last Name</label>
      <input className="w-full px-4 py-3" />
    </div>
  </div>
  <div>
    <label className="block text-sm font-medium mb-2">Message</label>
    <textarea className="w-full px-4 py-3" rows={6} />
  </div>
</form>
```

---

## Card Layouts

### Service Cards
```tsx
<div className="bg-jamarq-charcoal border border-jamarq-slate rounded-lg p-6 md:p-8">
  {/* Icon */}
  <div className="text-3xl md:text-4xl mb-4">
    {icon}
  </div>
  
  {/* Title */}
  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
    {title}
  </h3>
  
  {/* Description */}
  <p className="text-sm md:text-base text-jamarq-gray">
    {description}
  </p>
</div>
```

### Portfolio Cards
```tsx
<article className="bg-jamarq-charcoal rounded-lg overflow-hidden border border-jamarq-slate">
  {/* Image */}
  <div className="relative aspect-video">
    <Image src={image} alt={title} fill className="object-cover" />
  </div>
  
  {/* Content */}
  <div className="p-4 md:p-6">
    <h3 className="text-lg md:text-xl font-semibold mb-2">
      {title}
    </h3>
    <p className="text-sm md:text-base text-jamarq-gray">
      {description}
    </p>
  </div>
</article>
```

---

## Flexbox Patterns

### Centered Content
```tsx
<div className="flex flex-col items-center justify-center min-h-screen px-4">
  <h1 className="text-center">Hero Content</h1>
  <div className="flex flex-col sm:flex-row gap-4 mt-8">
    <button>Primary</button>
    <button>Secondary</button>
  </div>
</div>
```

### Space Between (Header/Footer)
```tsx
<header className="flex items-center justify-between px-4 py-4">
  <div>Logo</div>
  <nav>Navigation</nav>
</header>
```

### Vertical Stack with Spacing
```tsx
<div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</div>
```

---

## Touch Target Sizing

**Minimum touch target size: 44x44px**

```tsx
// ✅ CORRECT: Large enough for touch
<button className="px-6 py-3 min-h-[44px]">
  Click Me
</button>

// ✅ CORRECT: Icon button with padding
<button className="p-3">
  <svg className="w-6 h-6" />
</button>

// ❌ WRONG: Too small for comfortable touch
<button className="px-2 py-1 text-xs">
  Click Me
</button>
```

---

## Text Overflow Handling

### Truncate Single Line
```tsx
<p className="truncate">
  {longText}
</p>
```

### Clamp Multiple Lines
```tsx
<p className="line-clamp-2">
  {longText}
</p>

<p className="line-clamp-3">
  {longerText}
</p>
```

---

## Visibility Utilities

### Show/Hide Based on Breakpoint
```tsx
// Show only on mobile
<div className="block md:hidden">
  Mobile Menu
</div>

// Show only on desktop
<div className="hidden md:block">
  Desktop Navigation
</div>

// Hide on mobile, show on tablet+
<div className="hidden sm:block">
  Tablet and Desktop Content
</div>
```

---

## Performance Considerations

### Image Loading Priority

```tsx
// Above-fold images (hero, first viewport)
<Image src={src} alt={alt} priority />

// Below-fold images (rest of page)
<Image src={src} alt={alt} loading="lazy" />
```

### Responsive Images with srcSet

Next.js Image component handles this automatically, but be aware:
- Mobile devices get smaller images
- Retina displays get higher resolution
- Bandwidth is optimized automatically

---

## Testing Checklist

Test responsive design at these key breakpoints:

**Mobile:**
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 12/13/14)
- [ ] 414px (iPhone Plus models)

**Tablet:**
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape)

**Desktop:**
- [ ] 1280px (small laptop)
- [ ] 1440px (standard desktop)
- [ ] 1920px (full HD)

**Test in Chrome DevTools:**
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test each breakpoint
4. Check touch targets
5. Verify text readability
6. Test form usability

---

## Common Issues & Solutions

### Issue: Text too small on mobile
**Solution:**
```tsx
// Before
<p className="text-base">

// After
<p className="text-base md:text-lg">
```

### Issue: Images too large on mobile
**Solution:**
```tsx
// Before
<div className="w-full max-w-4xl">

// After
<div className="w-full max-w-full md:max-w-4xl">
```

### Issue: Buttons overlap on mobile
**Solution:**
```tsx
// Before
<div className="flex gap-4">

// After
<div className="flex flex-col sm:flex-row gap-4">
```

### Issue: Grid too cramped on mobile
**Solution:**
```tsx
// Before
<div className="grid grid-cols-3 gap-4">

// After
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
```

### Issue: Navigation overlaps logo on mobile
**Solution:**
```tsx
<nav className="flex items-center justify-between">
  <div className="flex-shrink-0">Logo</div>
  <div className="flex items-center gap-4">
    {/* Navigation items with appropriate spacing */}
  </div>
</nav>
```

---

## Accessibility Notes

### Focus States on Mobile
```tsx
// Ensure focus states are visible (not just hover)
<button className="focus:outline-none focus:ring-2 focus:ring-jamarq-cyan">
  Button
</button>
```

### Skip Navigation Link
```tsx
// Hidden but accessible for keyboard users
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
>
  Skip to main content
</a>
```

---

## Final Responsive Principles

1. **Mobile-first always** - Design for small screens, enhance for large
2. **Touch-friendly** - Minimum 44x44px touch targets
3. **Readable text** - Never smaller than 14px on mobile
4. **Generous spacing** - Don't cram content on mobile
5. **Test on real devices** - Emulators don't catch everything
6. **Performance matters** - Mobile users often on slower connections
7. **One-handed use** - Navigation should be reachable with thumb
8. **Avoid horizontal scroll** - Everything should fit viewport width
9. **Progressive enhancement** - Core functionality works everywhere
10. **Test offline** - Mobile users lose connection

---

## Quick Reference: Common Responsive Classes

```tsx
// Padding
py-8 md:py-12 lg:py-16

// Text size
text-base md:text-lg lg:text-xl

// Grid columns
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Flex direction
flex-col md:flex-row

// Width
w-full md:w-1/2 lg:w-1/3

// Display
block md:hidden
hidden md:block

// Spacing
space-y-4 md:space-y-6 lg:space-y-8
gap-4 md:gap-6 lg:gap-8
```

Use this guide as your responsive design reference throughout the JAMARQ build. When in doubt, test on mobile first.

---

# Appendix: jamarq-copilot-docs/04-ACCESSIBILITY.md (verbatim)

# ACCESSIBILITY GUIDE

## Overview
This document covers accessibility (a11y) requirements for the JAMARQ portfolio site. Accessibility is non-negotiable - every user should be able to access and navigate the site regardless of their abilities or the assistive technologies they use.

---

## Core Principles (WCAG 2.1 AA Compliance)

1. **Perceivable** - Information must be presentable to users in ways they can perceive
2. **Operable** - Interface components must be operable by all users
3. **Understandable** - Information and interface must be understandable
4. **Robust** - Content must be robust enough to work with assistive technologies

---

## Semantic HTML

### Use Proper HTML Elements

**✅ CORRECT:**
```tsx
<header>
  <nav>
    <ul>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Page Title</h1>
    <section>
      <h2>Section Title</h2>
      <p>Content</p>
    </section>
  </article>
</main>

<footer>
  <p>Copyright information</p>
</footer>
```

**❌ WRONG:**
```tsx
<div className="header">
  <div className="nav">
    <div className="link">About</div>
  </div>
</div>
```

### Heading Hierarchy

**Maintain logical heading order:**
```tsx
<h1>Page Title</h1>           {/* Only one h1 per page */}
  <h2>Major Section</h2>
    <h3>Subsection</h3>
    <h3>Another Subsection</h3>
  <h2>Another Major Section</h2>
    <h3>Subsection</h3>

// ❌ WRONG: Skipping levels
<h1>Page Title</h1>
  <h4>Subsection</h4>  // Skipped h2 and h3
```

---

## Keyboard Navigation

### All Interactive Elements Must Be Keyboard Accessible

**Focus States:**
```tsx
// ✅ CORRECT: Visible focus indicator
<button className="focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black">
  Click Me
</button>

// ✅ CORRECT: Link focus
<a 
  href="/about"
  className="focus:outline-none focus:ring-2 focus:ring-jamarq-cyan"
>
  About
</a>

// ❌ WRONG: No visible focus indicator
<button className="outline-none">
  Click Me
</button>
```

### Skip Navigation Link

```tsx
// Add at top of layout
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-jamarq-cyan focus:text-jamarq-black focus:px-4 focus:py-2 focus:rounded"
>
  Skip to main content
</a>

// Then add id to main content
<main id="main-content">
  {/* Content */}
</main>
```

---

## ARIA Attributes

### Common ARIA Patterns

**aria-label** - Provides accessible name:
```tsx
<button aria-label="Close menu">
  <XIcon />
</button>
```

**aria-describedby** - Provides additional description:
```tsx
<input
  type="email"
  aria-describedby="email-hint"
/>
<span id="email-hint" className="text-sm text-jamarq-gray">
  We'll never share your email
</span>
```

**aria-live** - Announces dynamic content:
```tsx
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

**aria-expanded** - For collapsible content:
```tsx
<button
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
>
  Menu
</button>
```

**aria-current** - Indicates current page:
```tsx
<a
  href={item.href}
  aria-current={pathname === item.href ? 'page' : undefined}
>
  {item.name}
</a>
```

---

## Forms

### Labels

**Every input needs a label:**
```tsx
// ✅ CORRECT
<label htmlFor="email" className="block mb-2">
  Email Address
</label>
<input type="email" id="email" name="email" />

// ❌ WRONG
<input type="email" placeholder="Email" />
```

### Error Messages

```tsx
<input
  type="email"
  id="email"
  aria-invalid={!!emailError}
  aria-describedby={emailError ? "email-error" : undefined}
/>
{emailError && (
  <span id="email-error" role="alert" className="text-red-500">
    {emailError}
  </span>
)}
```

---

## Images

### Alt Text

**Every image needs appropriate alt text:**
```tsx
// ✅ CORRECT: Descriptive alt
<Image
  src="/portfolio/restaurant-site.jpg"
  alt="Thunder Road Bar & Grill website homepage showing menu and reservation form"
  width={800}
  height={600}
/>

// ✅ CORRECT: Empty alt for decorative
<Image src="/decorative.svg" alt="" width={100} height={100} />

// ❌ WRONG
<Image src="/project.jpg" width={800} height={600} />
```

---

## Color Contrast

### WCAG AA Requirements

**Minimum contrast ratios:**
- Normal text: 4.5:1
- Large text: 3:1
- UI components: 3:1

**JAMARQ Passing Combinations:**
- White (#F2F2F5) on Black (#0A0A0C): 21:1 ✅
- White on Charcoal (#1A1A20): 18.5:1 ✅
- Gray (#9CA3AF) on Black: 8.2:1 ✅
- Cyan (#0CE3F2) on Black: 12.8:1 ✅

---

## Links

### Descriptive Link Text

```tsx
// ❌ WRONG
<a href="/work/trbg">Click here</a>

// ✅ CORRECT
<a href="/work/trbg">Thunder Road Bar & Grill website</a>
```

### External Links

```tsx
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Site
  <span className="sr-only">(opens in new tab)</span>
</a>
```

---

## Motion & Animations

### Respect prefers-reduced-motion

```tsx
import { useReducedMotion } from 'framer-motion'

function Component() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      animate={{ y: shouldReduceMotion ? 0 : 20 }}
      className="motion-reduce:transform-none"
    >
      Content
    </motion.div>
  )
}
```

---

## Screen Reader Only Content

### Utility Class

```tsx
// Hide visually but keep for screen readers
<span className="sr-only">Current page</span>

// Show when focused (skip link)
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to content
</a>
```

---

## Testing Checklist

### Automated Testing
- [ ] Run Lighthouse accessibility audit (target 95+)
- [ ] Test with axe DevTools extension
- [ ] Check color contrast with WebAIM

### Manual Testing
- [ ] Navigate with keyboard only (Tab, Enter, Escape)
- [ ] Test with screen reader (NVDA/VoiceOver)
- [ ] Verify all images have alt text
- [ ] Check all forms are labeled
- [ ] Test with browser zoom at 200%
- [ ] Verify focus indicators visible
- [ ] Check heading hierarchy

---

## Common Mistakes to Avoid

1. Missing alt text
2. Low contrast text
3. Unlabeled form inputs
4. Div/span buttons instead of `<button>`
5. Links that say "Click here"
6. Missing focus indicators
7. Auto-playing content without controls
8. Icon-only buttons without labels

---

## Resources

**Testing Tools:**
- [WAVE Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Screen Readers:**
- [NVDA (Windows - Free)](https://www.nvaccess.org/)
- VoiceOver (Mac/iOS - Built-in)

---

## Final Note

Accessibility is not a feature - it's a requirement. Build it in from the start, not as an afterthought. When you're unsure if something is accessible, test it with a keyboard and screen reader. If you can't navigate it without a mouse, it's not accessible.

Remember: Making your site accessible makes it better for everyone, not just users with disabilities. Clear navigation, good contrast, and semantic HTML improve the experience for all users.

---

# Appendix: jamarq-copilot-docs/05-ANIMATION_PATTERNS.md (verbatim)

# ANIMATION PATTERNS

## Overview
This document provides reusable Framer Motion animation patterns for the JAMARQ portfolio site. All animations should be subtle, performant, and respect user preferences for reduced motion.

---

## Core Animation Principles

1. **Subtle over flashy** - Animations should enhance, not distract
2. **Fast but smooth** - Keep durations between 0.2-0.6 seconds
3. **GPU-accelerated** - Use `transform` and `opacity` only
4. **Respect preferences** - Always check `prefers-reduced-motion`
5. **Performance first** - Test on mobile devices

---

## Setup

```bash
npm install framer-motion
```

```tsx
// Import in components
import { motion, useReducedMotion } from 'framer-motion'
```

---

## Basic Patterns

### Fade In

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Fade In + Slide Up

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content
</motion.div>
```

### Fade In + Scale

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
>
  Content
</motion.div>
```

---

## Scroll-Triggered Animations

### Fade In On Scroll

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  Content appears when scrolled into view
</motion.div>
```

### Stagger Children On Scroll

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## Hover Animations

### Scale on Hover

```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Hover Me
</motion.button>
```

### Card Lift on Hover

```tsx
<motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="rounded-lg overflow-hidden"
>
  Portfolio Card
</motion.div>
```

### Glow Effect on Hover

```tsx
<motion.div
  whileHover={{ 
    boxShadow: "0 0 20px rgba(12, 227, 242, 0.3)" 
  }}
  transition={{ duration: 0.3 }}
  className="border border-jamarq-slate rounded-lg p-8"
>
  Card with glow
</motion.div>
```

---

## Page Transitions

### Simple Fade

```tsx
// In layout or page component
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>
```

### Slide + Fade

```tsx
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 20 }}
  transition={{ duration: 0.4 }}
>
  {children}
</motion.div>
```

---

## Background Animations

### Animated Grid (Hero Background)

```tsx
export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jamarq-black/50 to-jamarq-black" />
    </div>
  )
}
```

### Floating Elements

```tsx
export function FloatingShape() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute w-32 h-32 bg-jamarq-cyan/5 rounded-full blur-xl"
    />
  )
}
```

---

## Link/Button Animations

### Underline Expand

```tsx
<a href="/about" className="relative group">
  About
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jamarq-cyan transition-all duration-300 group-hover:w-full" />
</a>
```

### Button with Glow

```tsx
<motion.button
  whileHover={{
    boxShadow: "0 0 20px rgba(12, 227, 242, 0.5)"
  }}
  whileTap={{ scale: 0.95 }}
  className="bg-jamarq-cyan text-jamarq-black px-6 py-3 rounded-md"
>
  Click Me
</motion.button>
```

---

## Loading Animations

### Spinner

```tsx
export function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
      className="w-8 h-8 border-2 border-jamarq-cyan border-t-transparent rounded-full"
    />
  )
}
```

### Pulse

```tsx
<motion.div
  animate={{
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Loading...
</motion.div>
```

---

## Modal/Dialog Animations

### Modal Enter/Exit

```tsx
<AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-jamarq-charcoal p-6 rounded-lg">
          Modal Content
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
```

---

## Mobile Menu Animation

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <nav className="py-4">
        {/* Menu items */}
      </nav>
    </motion.div>
  )}
</AnimatePresence>
```

---

## Scroll Indicators

### Animated Scroll Arrow

```tsx
export function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-jamarq-cyan rounded-full flex justify-center">
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-1 h-3 bg-jamarq-cyan rounded-full mt-2"
        />
      </div>
    </motion.div>
  )
}
```

---

## Performance Best Practices

### DO ✅

```tsx
// Animate transform properties (GPU-accelerated)
<motion.div
  animate={{ x: 100, y: 50, scale: 1.2, rotate: 45 }}
/>

// Animate opacity
<motion.div
  animate={{ opacity: 0.5 }}
/>

// Use will-change sparingly
<motion.div
  style={{ willChange: "transform" }}
  animate={{ x: 100 }}
/>
```

### DON'T ❌

```tsx
// Don't animate layout properties (causes reflow)
<motion.div
  animate={{ width: 500, height: 300 }} // ❌ BAD
/>

// Don't animate top/left/right/bottom
<motion.div
  animate={{ left: 100, top: 50 }} // ❌ BAD
/>

// Use transform instead
<motion.div
  animate={{ x: 100, y: 50 }} // ✅ GOOD
/>
```

---

## Reduced Motion Support

### Check User Preference

```tsx
import { useReducedMotion } from 'framer-motion'

export function Component() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      Content
    </motion.div>
  )
}
```

### Disable Animations Entirely

```tsx
export function Component() {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div>Content without animation</div>
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Content with animation
    </motion.div>
  )
}
```

---

## Reusable Animation Components

### FadeIn Wrapper

```tsx
interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  
  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...(!shouldReduceMotion && directionOffset[direction])
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

// Usage
<FadeIn delay={0.2} direction="up">
  <h2>This fades in from below</h2>
</FadeIn>
```

### StaggerChildren Wrapper

```tsx
interface StaggerProps {
  children: React.ReactNode
  staggerDelay?: number
}

export function StaggerChildren({ children, staggerDelay = 0.1 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {children}
    </motion.div>
  )
}

// Usage
<StaggerChildren staggerDelay={0.1}>
  <StaggerItem><Card1 /></StaggerItem>
  <StaggerItem><Card2 /></StaggerItem>
  <StaggerItem><Card3 /></StaggerItem>
</StaggerChildren>
```

---

## Testing Animations

### Performance Testing

1. Open Chrome DevTools
2. Go to Performance tab
3. Record while triggering animations
4. Look for:
   - Frame drops (should maintain 60fps)
   - Long tasks (should be < 50ms)
   - Excessive repaints

### Visual Testing

- Test at different viewport sizes
- Test on actual mobile devices
- Enable "prefers-reduced-motion" and verify animations are disabled
- Check animations don't cause content shifts (CLS)

---

## Animation Duration Guide

```tsx
// Quick interactions (hover, tap)
duration: 0.2 // 200ms

// UI transitions (modals, menus)
duration: 0.3 // 300ms

// Content reveals (fade in, slide in)
duration: 0.5 // 500ms

// Hero animations, emphasis
duration: 0.8 // 800ms

// Background animations, ambient
duration: 2-6 // 2-6 seconds
```

---

## Common Animation Use Cases

### Portfolio Card Hover
```tsx
<motion.article
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3 }}
  className="group"
>
  <motion.img
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  />
</motion.article>
```

### Service Card Entrance
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
  Service Card
</motion.div>
```

### CTA Button
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-jamarq-cyan"
>
  Get Started
</motion.button>
```

---

## Final Tips

1. **Less is more** - Not everything needs to animate
2. **Test on mobile** - Animations can be janky on low-end devices
3. **Respect user preferences** - Always implement reduced motion
4. **Use transform/opacity** - Avoid animating layout properties
5. **Keep it subtle** - Animations should feel natural, not distracting
6. **Consider accessibility** - Ensure animations don't interfere with screen readers
7. **Monitor performance** - Use Chrome DevTools to check frame rate

Remember: The best animations are the ones users don't consciously notice - they just make the experience feel smooth and polished.

---

# Appendix: jamarq-copilot-docs/06-TROUBLESHOOTING.md (verbatim)

# TROUBLESHOOTING GUIDE

## Overview
Common issues you might encounter while building the JAMARQ portfolio site, with solutions and debugging strategies.

---

## Build Errors

### TypeScript Errors

**Error: Cannot find module or its type declarations**
```bash
Error: Cannot find module '@/components/Hero'
```

**Solution:**
1. Check path alias in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
2. Verify file exists at correct path
3. Restart TS server: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"

---

**Error: Type 'X' is not assignable to type 'Y'**

**Solution:**
```tsx
// Define proper types
interface Project {
  title: string
  slug: string
  // ...
}

// Use the type
const project: Project = {
  title: "My Project",
  slug: "my-project"
}
```

Run `npm run type-check` to see all type errors at once.

---

### Next.js Build Errors

**Error: Module not found**
```bash
Module not found: Can't resolve 'framer-motion'
```

**Solution:**
```bash
npm install framer-motion
# or
yarn add framer-motion
```

---

**Error: Image optimization error**
```bash
Error: Invalid src prop on `next/image`
```

**Solution:**
1. Add domain to `next.config.js`:
```javascript
module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
}
```
2. Restart dev server: `npm run dev`

---

**Error: Hydration mismatch**
```bash
Warning: Text content did not match. Server: "X" Client: "Y"
```

**Solution:**
Common causes:
- Using browser-only APIs during SSR
- Different content on server vs client

Fix:
```tsx
// ❌ WRONG: Date will differ between server/client
<p>{new Date().toString()}</p>

// ✅ CORRECT: Use useEffect or suppressHydrationWarning
<p suppressHydrationWarning>{new Date().toString()}</p>

// Or wait for client-side
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
```

---

## Sanity CMS Issues

### Connection Errors

**Error: Failed to fetch from Sanity**

**Solution:**
1. Check environment variables:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

2. Verify in `.env.local` (not `.env`)
3. Restart dev server after changing env vars

---

**Error: CORS error when accessing Sanity**

**Solution:**
1. Go to Sanity dashboard
2. Navigate to API settings
3. Add your domain to CORS origins:
   - `http://localhost:3000` (development)
   - `https://jamarq.digital` (production)

---

### Query Errors

**Error: Query returned undefined**

**Solution:**
```tsx
// Check query syntax in Sanity Vision first
// Vision tool: https://your-project.sanity.studio/vision

// Verify query
const query = `*[_type == "project"][0]`

// Add error handling
const project = await client.fetch(query).catch(error => {
  console.error('Sanity fetch error:', error)
  return null
})

if (!project) {
  // Handle missing data
}
```

---

## Styling Issues

### Tailwind Not Working

**Error: Tailwind classes not applying**

**Solution:**
1. Check `tailwind.config.ts` content paths:
```typescript
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}
```

2. Verify Tailwind directives in `globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Restart dev server

---

**Error: Custom colors not working**

**Solution:**
Check color definition in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      'jamarq-black': '#0A0A0C',
      'jamarq-cyan': '#0CE3F2',
      // etc.
    }
  }
}
```

Use in className:
```tsx
<div className="bg-jamarq-black text-jamarq-cyan">
```

---

### CSS Specificity Issues

**Problem: Styles not overriding**

**Solution:**
```tsx
// ❌ WRONG: Conflicting classes
<div className="p-4 p-8">  // p-8 wins

// ✅ CORRECT: Use conditional logic
<div className={mobile ? "p-4" : "p-8"}>

// Or use responsive utilities
<div className="p-4 md:p-8">
```

---

## Animation Issues

### Framer Motion Not Animating

**Problem: Animations not triggering**

**Solution:**
1. Check component is wrapped in motion:
```tsx
// ❌ WRONG
<div animate={{ opacity: 1 }}>

// ✅ CORRECT
<motion.div animate={{ opacity: 1 }}>
```

2. Verify AnimatePresence for exit animations:
```tsx
<AnimatePresence>
  {isOpen && <motion.div exit={{ opacity: 0 }} />}
</AnimatePresence>
```

3. Check for client component:
```tsx
'use client'  // Add this at top of file
import { motion } from 'framer-motion'
```

---

**Problem: Layout animations causing issues**

**Solution:**
```tsx
// Don't animate width/height directly
// ❌ WRONG
<motion.div animate={{ width: 500 }}>

// ✅ CORRECT: Use transform
<motion.div animate={{ scaleX: 1.5 }}>

// Or use layout prop
<motion.div layout>
```

---

## Form Issues

### Form Submission Not Working

**Problem: Form submits but nothing happens**

**Solution:**
1. Check API route exists:
```
src/app/api/contact/route.ts
```

2. Verify POST handler:
```tsx
export async function POST(req: NextRequest) {
  const body = await req.json()
  // Handle form data
  return NextResponse.json({ success: true })
}
```

3. Check fetch in component:
```tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

---

**Problem: Form validation not working**

**Solution:**
```tsx
// Use React Hook Form + Zod
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email()
})

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
})
```

---

## Image Issues

### Images Not Loading

**Problem: Next.js Image component shows broken image**

**Solution:**
1. Check image path is correct:
```tsx
// ✅ CORRECT: Public folder
<Image src="/logo.png" alt="Logo" width={100} height={100} />

// ✅ CORRECT: External URL
<Image 
  src="https://cdn.sanity.io/images/..." 
  alt="Project"
  width={800}
  height={600}
/>
```

2. Add external domains to `next.config.js`:
```javascript
module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
  },
}
```

3. Restart dev server

---

**Problem: Images too large/slow**

**Solution:**
```tsx
// Use appropriate sizes
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  quality={85}  // Reduce if needed (default 75)
  priority  // Only for above-fold images
/>

// Or use fill for responsive
<div className="relative aspect-video">
  <Image
    src="/hero.jpg"
    alt="Hero"
    fill
    className="object-cover"
  />
</div>
```

---

## Deployment Issues

### Vercel Build Failing

**Error: Build failed during compile**

**Solution:**
1. Check build locally first:
```bash
npm run build
```

2. Fix any TypeScript errors
3. Verify all dependencies are in `package.json`
4. Check environment variables in Vercel dashboard

---

**Error: Environment variables not working**

**Solution:**
1. In Vercel dashboard → Settings → Environment Variables
2. Add variables for all environments:
   - Production
   - Preview
   - Development
3. Redeploy after adding variables
4. Prefix client-side variables with `NEXT_PUBLIC_`

---

**Error: 404 on dynamic routes**

**Solution:**
```tsx
// Verify generateStaticParams exists
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Or use dynamic rendering
export const dynamic = 'force-dynamic'
```

---

## Performance Issues

### Slow Page Load

**Problem: Pages loading slowly**

**Solution:**
1. Check Lighthouse audit:
   - Open DevTools → Lighthouse tab
   - Run audit

2. Common fixes:
```tsx
// Add priority to above-fold images
<Image src="/hero.jpg" alt="Hero" priority />

// Lazy load below-fold content
<Image src="/screenshot.jpg" alt="Screenshot" loading="lazy" />

// Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />
})
```

3. Minimize client-side JavaScript:
   - Use Server Components where possible
   - Avoid unnecessary `'use client'`

---

### Layout Shift (CLS Issues)

**Problem: Content jumping around during load**

**Solution:**
```tsx
// Always specify image dimensions
<Image src="/photo.jpg" width={800} height={600} alt="Photo" />

// Or use aspect ratio containers
<div className="relative aspect-video">
  <Image src="/photo.jpg" fill className="object-cover" alt="Photo" />
</div>

// Reserve space for dynamic content
<div className="min-h-[400px]">
  {loading ? <Skeleton /> : <Content />}
</div>
```

---

## Development Issues

### Hot Reload Not Working

**Problem: Changes not reflecting**

**Solution:**
1. Restart dev server: `npm run dev`
2. Clear `.next` folder:
```bash
rm -rf .next
npm run dev
```
3. Check file isn't being cached
4. Try hard refresh: Cmd/Ctrl + Shift + R

---

### Port Already in Use

**Error: Port 3000 is already in use**

**Solution:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

---

## Browser-Specific Issues

### Safari Bugs

**Problem: Styles look different in Safari**

**Solution:**
- Test in Safari regularly
- Check for `-webkit-` prefixes needed
- Verify flexbox/grid implementations
- Test on actual iOS device, not just simulator

Common Safari fixes:
```css
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Fix input zoom on iOS */
input {
  font-size: 16px; /* Prevents zoom on focus */
}
```

---

### Firefox Issues

**Problem: Different rendering in Firefox**

**Solution:**
- Check CSS Grid implementations
- Verify backdrop-filter support
- Test animations

```tsx
// Check browser support
const supportsBackdrop = CSS.supports('backdrop-filter', 'blur(10px)')
```

---

## Debugging Strategies

### Console Logging

```tsx
// Log component renders
useEffect(() => {
  console.log('Component mounted')
}, [])

// Log prop changes
useEffect(() => {
  console.log('Prop changed:', propName)
}, [propName])

// Log API responses
const data = await fetch('/api/data')
console.log('API response:', await data.json())
```

---

### React DevTools

1. Install React DevTools extension
2. Open DevTools → Components tab
3. Inspect component props/state
4. Use Profiler to find performance issues

---

### Network Tab

1. Open DevTools → Network tab
2. Check for:
   - Failed requests (red)
   - Slow requests (long waterfall)
   - Large files (size column)
3. Filter by type (JS, CSS, Images)

---

## Common Error Messages & Fixes

### "Hydration failed"
**Fix:** Ensure server/client render same content initially

### "Cannot read property 'X' of undefined"
**Fix:** Add optional chaining: `object?.property`

### "Maximum update depth exceeded"
**Fix:** Don't call setState directly in render, use useEffect

### "Objects are not valid as React child"
**Fix:** Convert object to string/array before rendering

### "Each child in a list should have a unique key prop"
**Fix:** Add `key` prop: `<div key={item.id}>`

---

## Getting Help

### Before Asking for Help

1. Read error message carefully
2. Check this troubleshooting guide
3. Search error message in Google
4. Check Next.js/Framer Motion documentation
5. Verify you're on latest package versions

### Where to Get Help

- Next.js Discord
- Stack Overflow
- GitHub Issues for specific libraries
- Next.js Discussions on GitHub

### Information to Include

When asking for help, provide:
- Full error message
- Relevant code snippet
- Steps to reproduce
- Environment (OS, Node version, browser)
- What you've tried already

---

## Prevention Tips

1. **Commit often** - Easy to revert if something breaks
2. **Test locally before deploying** - Run `npm run build`
3. **Use TypeScript** - Catches errors before runtime
4. **Check console regularly** - Don't ignore warnings
5. **Test on multiple browsers** - Catch browser-specific issues early
6. **Keep dependencies updated** - `npm outdated` to check
7. **Read documentation** - Especially for new libraries
8. **Use linting** - ESLint catches common mistakes

---

## Emergency Fixes

### Site Down
1. Check Vercel status
2. Check recent deployments
3. Roll back to previous deployment if needed
4. Check environment variables

### Build Breaking
1. Check latest commit
2. Revert if necessary: `git revert HEAD`
3. Fix locally, test build, then push

### Critical Bug in Production
1. Hot fix in separate branch
2. Test thoroughly
3. Deploy hot fix
4. Create proper fix later

Remember: It's better to take time to fix properly than rush and break more things.
