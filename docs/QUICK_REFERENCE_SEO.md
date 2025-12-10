# Quick Reference: SEO & Accessibility Checklist

## 🚀 Pre-Launch Checklist

### Google Search Console Setup
1. Add verification meta tag to `app/layout.tsx`:
```typescript
verification: {
  google: 'your-google-verification-code-here',
}
```
2. Visit [Google Search Console](https://search.google.com/search-console)
3. Add property: `https://jamarq.digital`
4. Submit sitemap: `https://jamarq.digital/sitemap.xml`

### Testing Before Launch
```bash
# Build and verify no errors
npm run build

# Test locally
npm run dev

# Visit these pages and verify:
# - Skip to content link appears on Tab
# - All navigation works without JavaScript
# - Focus indicators visible on Tab navigation
# - All images load with alt text
```

### Online Validators
- Structured Data: https://validator.schema.org/
- Rich Results: https://search.google.com/test/rich-results
- Security Headers: https://securityheaders.com/?q=https://jamarq.digital
- SSL Test: https://www.ssllabs.com/ssltest/analyze.html?d=jamarq.digital
- Accessibility: https://wave.webaim.org/

---

## 📊 Weekly Monitoring (5 minutes)

### Google Search Console
- [ ] Check for crawl errors (Coverage tab)
- [ ] Review new indexed pages (Sitemaps tab)
- [ ] Note any security issues (Security & Manual Actions)

### Vercel Analytics
- [ ] Check traffic trends (up/down from last week)
- [ ] Review top pages (which pages getting most visits)
- [ ] Monitor bounce rate (target: <70%)

### Vercel Speed Insights
- [ ] Core Web Vitals still green? (LCP, FID, CLS)
- [ ] Any new performance warnings?

**Log results in a simple spreadsheet:**
| Date | Organic Visitors | Pages/Session | Bounce Rate | Indexed Pages |
|------|-----------------|---------------|-------------|---------------|
| Jan 27 | TBD | 9.0 | 70% | 8 |

---

## 🎯 Monthly Deep Dive (30 minutes)

### SEO Performance Review
1. **Google Search Console → Performance**
   - Top queries bringing traffic
   - Click-through rate (CTR) by page
   - Pages with good impressions but low CTR (opportunity to improve title/description)

2. **Keyword Tracking**
   - Search "web development Lexington NC" - where do you rank?
   - Search "custom website design Winston-Salem" - where do you rank?
   - Track top 5 target keywords monthly

3. **Backlink Check** (Use Ahrefs free or Google Search Console)
   - How many sites link to you?
   - Any new backlinks this month?
   - Quality of referring domains

### Accessibility Audit
```bash
# Run Lighthouse in Chrome DevTools
# Ctrl+Shift+I → Lighthouse tab → Run audit
# Target scores:
# Performance: 90+
# Accessibility: 100
# Best Practices: 100
# SEO: 100
```

If scores drop, investigate and fix immediately.

### Content Updates
- [ ] Update meta descriptions if CTR is low (<2%)
- [ ] Add new case study if completed project this month
- [ ] Update sitemap if new pages added
- [ ] Check for broken links (online tool or browser extension)

---

## 🔒 Quarterly Security Review (15 minutes)

### Security Headers Check
Visit: https://securityheaders.com/?q=https://jamarq.digital

**Target Grade: A+**

If grade drops:
1. Check `next.config.ts` → headers still configured?
2. Verify CSP not blocking legitimate resources
3. Check browser console for CSP violations

### SSL/TLS Certificate
Visit: https://www.ssllabs.com/ssltest/analyze.html?d=jamarq.digital

**Target Grade: A+**

Vercel handles this automatically, but verify:
- Certificate valid and not expiring soon
- TLS 1.2+ only
- No weak ciphers

### Dependency Updates
```bash
# Check for security updates
npm audit

# Update dependencies
npm update

# Rebuild and test
npm run build
npm run dev
```

---

## 🎨 Accessibility Maintenance

### Annual WCAG Audit
- [ ] Full keyboard navigation test (Tab through entire site)
- [ ] Screen reader test (NVDA on Windows or VoiceOver on Mac)
- [ ] Color contrast check all new content
- [ ] Test with JavaScript disabled
- [ ] Mobile accessibility (touch targets, zoom, orientation)

### Ongoing
- When adding images: Always include descriptive alt text
- When adding links: Ensure link text describes destination
- When adding forms: Label all inputs properly
- When adding interactive elements: Test with keyboard

---

## 📈 Growth Metrics to Track

### Primary KPIs
1. **Organic Search Traffic** (Google Search Console)
   - Goal: 100+ monthly visitors by month 3
   - Goal: 500+ monthly visitors by month 6

2. **Keyword Rankings** (Manual search or tool)
   - Goal: First page (top 10) for primary keywords by month 3
   - Goal: Top 3 for primary keywords by month 6

3. **Conversion Rate** (Contact form submissions ÷ visitors)
   - Goal: 2-5% conversion rate
   - Track via Vercel Analytics + manual counting

4. **Pages per Session** (Vercel Analytics)
   - Current: 9.0 (excellent!)
   - Maintain: 8.0+

5. **Bounce Rate** (Vercel Analytics)
   - Current: 70%
   - Goal: <60% by month 3

### Secondary Metrics
- Backlinks acquired per month (goal: 5-10)
- Domain authority growth (use Moz or Ahrefs)
- Local search visibility (Google Business Profile insights)
- Social shares/referrals

---

## 🚨 Alerts to Set Up

### Google Search Console Alerts
Settings → Email notifications → Enable:
- Critical site issues
- New security issues
- Manual actions
- Search appearance issues

### Vercel Monitoring
Project Settings → Notifications → Enable:
- Build failures
- Performance degradation
- Unusual traffic spikes

---

## 🛠️ Common Issues & Fixes

### "Why isn't my site showing in Google?"
1. Check robots.txt: https://jamarq.digital/robots.txt (should allow all)
2. Check Search Console Coverage for errors
3. Submit sitemap manually in Search Console
4. Wait 2-4 weeks for initial indexing

### "Lighthouse score dropped"
1. Check what changed recently (git log)
2. Run audit in Incognito mode (browser extensions can affect score)
3. Check Vercel Speed Insights for specific issues
4. Verify no large images added without optimization

### "Security Headers grade dropped"
1. Verify `next.config.ts` headers still present
2. Check for CSP violations in browser console
3. Ensure no conflicting headers from Vercel config

### "Accessibility issues reported"
1. Run WAVE browser extension on affected page
2. Check specific WCAG criterion failing
3. Test fix locally before deploying
4. Re-run Lighthouse to verify fix

---

## 📚 Learning Resources

### SEO
- [Google Search Central](https://developers.google.com/search)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Search Engine Journal](https://www.searchenginejournal.com/)

### Accessibility
- [WebAIM Articles](https://webaim.org/articles/)
- [A11y Project](https://www.a11yproject.com/)
- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)

### Security
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)

---

## 🎯 6-Month SEO Roadmap

### Month 1: Foundation
- ✅ Technical SEO (completed!)
- ✅ Structured data (completed!)
- ✅ Sitemap & robots.txt (completed!)
- Submit to Google Search Console
- Set up Google Business Profile (local SEO)

### Month 2: Content
- Add blog with 4-8 articles (keyword-targeted)
- Create 2 more case studies
- Add client testimonials page with Review schema
- Build first 5-10 backlinks (directories, partnerships)

### Month 3: Optimization
- Analyze Search Console data
- Optimize low-performing pages
- Improve CTR with better titles/descriptions
- Add FAQ section with FAQ schema

### Months 4-6: Growth
- Publish 2-4 blog posts per month
- Guest post on relevant sites (backlinks)
- Monitor keyword rankings, adjust strategy
- A/B test CTAs and conversion optimization
- Consider paid ads (Google Ads, Facebook) if budget allows

---

**Quick Win:** The hardest part (technical setup) is done. Now focus on:
1. Content creation (case studies, blog posts)
2. Backlink building (guest posts, partnerships)
3. Local SEO (Google Business Profile)

These three will drive the most organic traffic growth.

---

**Questions?** Check `/docs/SEO_ACCESSIBILITY_SECURITY.md` for full details.
