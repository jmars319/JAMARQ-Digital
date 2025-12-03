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
