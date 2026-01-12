# Deployment Guide

## Current Deployment Target
- Vercel (auto-deploy on push to main)

## Required Environment Variables
See `docs/SYSTEM_OPS.md` (SendGrid variables).

## Build + Verify (local)
```bash
npm run lint
npm run build
```

---

# Appendix: jamarq-copilot-docs/07-DEPLOYMENT.md (verbatim)

# DEPLOYMENT GUIDE

## Overview
Step-by-step guide to deploying the JAMARQ portfolio site to production on Vercel with custom domain configuration.

---

## Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript errors resolved (`npm run type-check`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] All tests passing (if applicable)
- [ ] No console errors in browser
- [ ] Code committed to Git

### Content
- [ ] All placeholder text replaced
- [ ] All images optimized and compressed
- [ ] Favicon and app icons created
- [ ] OG image created (1200x630px)
- [ ] All portfolio projects added to Sanity
- [ ] Contact form tested

### Performance
- [ ] Lighthouse score 90+ (run locally)
- [ ] Images using Next.js Image component
- [ ] No unnecessarily large dependencies
- [ ] Code splitting implemented where needed

### SEO
- [ ] Meta tags on all pages
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Structured data (JSON-LD) added
- [ ] Alt text on all images

### Functionality
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] Portfolio filtering works
- [ ] Mobile menu functions correctly
- [ ] All external links have `rel="noopener noreferrer"`

---

## Part 1: Prepare Repository

### 1. Create GitHub Repository

```bash
# Initialize git if not already done
git init

# Create .gitignore (should already exist from Next.js)
# Verify it includes:
# /node_modules
# /.next
# /out
# .env*.local

# Add all files
git add .

# Commit
git commit -m "Initial commit: JAMARQ portfolio site"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/jamarq-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Environment Variables

Create `.env.local` file (never commit this):
```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Email service (if using)
EMAIL_SERVICE_API_KEY=your-api-key

# Any other secrets
```

**Important:** Variables starting with `NEXT_PUBLIC_` are exposed to the browser. Never put secrets in them.

---

## Part 2: Deploy to Vercel

### 1. Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize Vercel to access your repositories

### 2. Import Project

1. Click "Add New..." → "Project"
2. Select your GitHub repository
3. Vercel will auto-detect Next.js

### 3. Configure Project

**Framework Preset:** Next.js (should be auto-detected)

**Root Directory:** `./` (leave as default unless monorepo)

**Build Command:** 
```bash
npm run build
```

**Output Directory:**
```bash
.next
```

**Install Command:**
```bash
npm install
```

### 4. Add Environment Variables

In Vercel dashboard:

1. Go to Settings → Environment Variables
2. Add each variable from `.env.local`
3. Select which environments (Production, Preview, Development)

**Critical:** Add all environment variables BEFORE first deployment.

Example variables to add:
```
NEXT_PUBLIC_SANITY_PROJECT_ID = your-project-id
NEXT_PUBLIC_SANITY_DATASET = production
SANITY_API_TOKEN = your-api-token
```

For each:
- **Key:** Variable name
- **Value:** Variable value
- **Environments:** Check all (Production, Preview, Development)

### 5. Deploy

1. Click "Deploy"
2. Wait for build to complete (usually 1-3 minutes)
3. Vercel provides temporary URL: `your-project.vercel.app`

---

## Part 3: Custom Domain Setup

### 1. Purchase Domain

If you haven't already:
- Recommended: Namecheap, Google Domains, Cloudflare
- Purchase: `jamarq.digital`

### 2. Add Domain to Vercel

In Vercel dashboard:

1. Go to project → Settings → Domains
2. Enter domain: `jamarq.digital`
3. Click "Add"

### 3. Configure DNS

Vercel will show DNS instructions. You need to add:

**For apex domain (jamarq.digital):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain (www.jamarq.digital):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4. DNS Provider Setup

#### Namecheap:
1. Log in to Namecheap
2. Go to Domain List → Manage
3. Advanced DNS tab
4. Add records as shown above
5. Wait 24-48 hours (usually faster)

#### Cloudflare:
1. Log in to Cloudflare
2. Select your domain
3. DNS tab
4. Add records as shown above
5. Ensure proxy status is "DNS only" (gray cloud)
6. Wait 1-2 hours

#### Google Domains:
1. Log in to Google Domains
2. DNS tab
3. Manage custom records
4. Add records as shown above
5. Wait 24-48 hours

### 5. Verify Domain

In Vercel:
1. Wait for DNS propagation
2. Vercel will automatically verify
3. SSL certificate automatically issued
4. Domain shows as "Valid"

Check status:
```bash
# Verify DNS propagation
nslookup jamarq.digital

# Or use online tool
# https://www.whatsmydns.net/
```

---

## Part 4: Post-Deployment Configuration

### 1. Verify SSL Certificate

1. Visit https://jamarq.digital
2. Should show padlock in browser
3. Certificate should be valid
4. Vercel provides free SSL via Let's Encrypt

### 2. Set Up Redirects

In Vercel dashboard → Settings → Domains:

**Redirect www to non-www (or vice versa):**
- Add `www.jamarq.digital`
- Vercel will prompt to set up redirect
- Choose: Redirect to `jamarq.digital` (recommended)

### 3. Configure Headers

Create `vercel.json` in project root (optional but recommended):

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
```

Commit and push to trigger redeploy.

---

## Part 5: Analytics Setup

### Option A: Vercel Analytics (Recommended)

1. In Vercel dashboard → Analytics
2. Click "Enable"
3. Free tier includes:
   - Page views
   - Top pages
   - Referrers
   - Devices

Add to app:
```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Option B: Plausible (Privacy-Friendly)

1. Sign up at plausible.io
2. Add your domain
3. Add script to layout:

```tsx
// app/layout.tsx
<Script
  defer
  data-domain="jamarq.digital"
  src="https://plausible.io/js/script.js"
/>
```

### Option C: Google Analytics

```bash
npm install @next/third-parties
```

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

---

## Part 6: SEO Configuration

### 1. Submit Sitemap to Google

**Generate sitemap** (Next.js 14+):

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jamarq.digital',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://jamarq.digital/work',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://jamarq.digital/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Add all pages
  ]
}
```

**Submit to Google:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `jamarq.digital`
3. Verify ownership (Vercel DNS record method)
4. Go to Sitemaps
5. Submit: `https://jamarq.digital/sitemap.xml`

### 2. robots.txt

```tsx
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://jamarq.digital/sitemap.xml',
  }
}
```

### 3. Verify OG Tags

Test with:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

## Part 7: Monitoring & Maintenance

### 1. Set Up Error Tracking (Optional)

**Sentry:**
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

Follow wizard to configure.

### 2. Monitor Performance

**Vercel Speed Insights:**
1. Vercel dashboard → Speed Insights
2. Enable (free)
3. Monitor Core Web Vitals

**Lighthouse CI:**
Run regularly:
```bash
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

### 3. Set Up Uptime Monitoring

**Options:**
- [UptimeRobot](https://uptimerobot.com/) (Free tier)
- [Vercel Monitoring](https://vercel.com/docs/monitoring)

Configure to check `https://jamarq.digital` every 5 minutes.

---

## Part 8: Continuous Deployment

### Automatic Deployments

Vercel automatically deploys on:
- **Push to main branch** → Production deployment
- **Pull requests** → Preview deployments
- **Other branches** → Preview deployments

### Preview Deployments

Every PR gets a unique URL:
```
https://jamarq-portfolio-abc123.vercel.app
```

Benefits:
- Test changes before merging
- Share with clients for feedback
- No impact on production

### Branch Protection (Recommended)

On GitHub:
1. Repository → Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request before merging
   - Require status checks to pass (Vercel deployment)
   - Require branches to be up to date

---

## Part 9: Backup & Recovery

### 1. Database Backups (Sanity)

Sanity auto-backs up, but also:

```bash
# Export dataset
sanity dataset export production backup.tar.gz

# Import if needed
sanity dataset import backup.tar.gz production
```

### 2. Code Backups

- Already backed up on GitHub
- Consider enabling GitHub private repo backups
- Download local copy periodically

### 3. Environment Variables Backup

Save a copy of environment variables securely:
1. Vercel dashboard → Settings → Environment Variables
2. Export to secure password manager
3. Don't commit to repository

---

## Part 10: Launch Checklist

Final verification before announcing launch:

### Technical
- [ ] Site loads at https://jamarq.digital
- [ ] SSL certificate valid
- [ ] www redirects to non-www (or vice versa)
- [ ] All pages load without errors
- [ ] Forms submit successfully
- [ ] Images load correctly
- [ ] Mobile responsive on all pages

### Performance
- [ ] Lighthouse score 90+ on all pages
- [ ] Load time < 3 seconds
- [ ] Images optimized
- [ ] No console errors

### Content
- [ ] All content proofread
- [ ] Contact information correct
- [ ] Social links work
- [ ] Portfolio pieces complete
- [ ] No "coming soon" placeholders

### SEO
- [ ] Sitemap submitted to Google
- [ ] Meta tags on all pages
- [ ] OG images display correctly
- [ ] robots.txt allows indexing

### Analytics
- [ ] Analytics installed and tracking
- [ ] Conversion tracking set up (form submissions)
- [ ] Goal tracking configured

---

## Updating the Site

### Making Changes

```bash
# Make changes locally
git add .
git commit -m "Update: description of changes"
git push origin main

# Vercel automatically deploys
# Check deployment status in Vercel dashboard
```

### Rollback if Needed

In Vercel dashboard:
1. Go to Deployments
2. Find previous working deployment
3. Click menu → Promote to Production

---

## Common Deployment Issues

### Build Fails

**Check:**
1. Build logs in Vercel
2. Try building locally: `npm run build`
3. Verify all dependencies in package.json
4. Check environment variables

### Domain Not Resolving

**Check:**
1. DNS records correct
2. DNS propagation complete (24-48 hours)
3. Vercel domain status shows "Valid"
4. Try incognito/private browsing

### SSL Certificate Issues

**Usually auto-resolves within 24 hours**

If not:
1. Remove domain from Vercel
2. Wait 1 hour
3. Re-add domain
4. DNS must be correctly configured first

### Images Not Loading

**Check:**
1. Image domains in next.config.js
2. Sanity API credentials in environment variables
3. Image paths correct

---

## Post-Launch

### 1. Update DNS TTL

After DNS propagation confirmed:
1. Lower TTL to 300 seconds (5 minutes)
2. Makes future DNS changes faster

### 2. Enable DDoS Protection

Vercel includes basic protection, but consider:
- Cloudflare (free tier) in front of domain
- Rate limiting for API routes

### 3. Set Up Monitoring Alerts

Configure alerts for:
- Site downtime
- Failed deployments
- Performance degradation
- Error spikes (if using Sentry)

---

## Costs

### Vercel
- Free tier includes:
  - Unlimited deployments
  - Automatic SSL
  - 100GB bandwidth/month
  - Serverless functions

- Pro tier ($20/month) adds:
  - More bandwidth
  - More serverless function execution time
  - Password protection
  - Advanced analytics

### Domain
- $10-15/year typically

### Analytics
- Vercel Analytics: Free
- Plausible: $9/month
- Google Analytics: Free

**Total minimum cost:** ~$10-15/year (just domain)

---

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Discord](https://vercel.com/discord)
- [Vercel Status Page](https://www.vercel-status.com/)

---

## Quick Reference Commands

```bash
# Build locally
npm run build

# Start production build locally
npm run start

# Type check
npm run type-check

# Push to deploy
git push origin main

# Check deployment status
vercel ls

# View logs
vercel logs
```

---

You're now live! 🚀

Remember: Monitor performance, keep dependencies updated, and continue adding portfolio pieces as you complete projects.
