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
