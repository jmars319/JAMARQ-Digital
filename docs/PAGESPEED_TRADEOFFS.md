# PageSpeed Tradeoffs

## Goals
- Fast, reliable loads with real-world proof (PageSpeed + Lighthouse).
- Preserve accessibility and ownership while keeping the site content-heavy but legible.

## Current Performance Strategy (code anchors)
- Static generation for public pages: `app/**/page.tsx`
- Image optimization: `next/image` usage in `components/*` and `app/*`
- Fonts loaded with `display: swap`: `app/layout.tsx`
- Minimal JS for navigation and modals; progressive enhancement
- Analytics + Speed Insights are enabled in `app/layout.tsx`

## Tradeoffs (intentional)
- Google Fonts usage trades a small external dependency for consistent typography.
- Analytics scripts add minimal overhead for visibility into Core Web Vitals.
- Case study content is text-heavy by design; keep line-lengths readable rather than overly compressed.
- Motion is used sparingly; avoid long-running animations.

## Performance Verification
- Local build + lint: `npm run build`, `npm run lint`
- Lighthouse checks per release
- Vercel Speed Insights monitoring

## Related Docs
- Ops checklists + historical performance notes: `docs/SYSTEM_OPS.md`
