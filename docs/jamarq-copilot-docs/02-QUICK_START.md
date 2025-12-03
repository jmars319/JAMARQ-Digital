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
