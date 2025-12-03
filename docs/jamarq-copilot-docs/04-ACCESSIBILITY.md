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
