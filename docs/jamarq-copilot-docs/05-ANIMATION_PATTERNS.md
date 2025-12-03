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
