# Development Guide

Complete guide for developing and customizing your portfolio locally.

## 🎯 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Navigate to http://localhost:3000
```

## 📁 Project Structure

```
Portfolio/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with navbar
│   ├── globals.css              # Global styles and animations
│   ├── page.tsx                 # Root page redirect
│   ├── home/
│   │   └── page.tsx             # Landing page
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── projects/
│   │   └── page.tsx             # Projects showcase
│   ├── research/
│   │   └── page.tsx             # Research timeline
│   ├── experience/
│   │   └── page.tsx             # Experience page
│   ├── blog/
│   │   └── page.tsx             # Blog (coming soon)
│   └── contact/
│       └── page.tsx             # Contact form
│
├── components/                   # Reusable React components
│   ├── navbar.tsx               # Navigation bar
│   ├── hero.tsx                 # Hero section
│   ├── stats.tsx                # Statistics cards
│   ├── skills.tsx               # Skills grid
│   ├── project-card.tsx         # Project card component
│   ├── timeline.tsx             # Timeline for experience/research
│   ├── contact-form.tsx         # Contact form
│   └── common.tsx               # Shared utilities (Section, GlassCard, Footer)
│
├── lib/                          # Utility functions and constants
│   └── [utilities]
│
├── public/                       # Static assets
│   ├── images/
│   └── [static-files]
│
├── Configuration Files
│   ├── tailwind.config.ts       # Tailwind CSS configuration
│   ├── tsconfig.json            # TypeScript configuration
│   ├── next.config.mjs          # Next.js configuration
│   ├── postcss.config.js        # PostCSS configuration
│   └── package.json             # Dependencies
│
└── Documentation
    ├── README.md                # Main readme
    ├── DEPLOYMENT.md            # Deployment guide
    └── DEVELOPMENT.md           # This file
```

## 🎨 Styling System

### Tailwind CSS

All styling uses Tailwind CSS with custom configuration.

**Custom Colors** (in `tailwind.config.ts`):
```javascript
colors: {
  background: '#0B0F19',
  primary: '#6366F1',
  accent: '#8B5CF6',
  success: '#22C55E',
}
```

**Custom Utilities** (in `globals.css`):
```css
.glass { /* Glassmorphism effect */ }
.glass-sm { /* Smaller glass effect */ }
.gradient-text { /* Gradient text */ }
```

### Responsive Breakpoints

Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Usage:
```jsx
<div className="text-2xl md:text-3xl lg:text-4xl">
  Responsive text
</div>
```

## 🎬 Animations

### Framer Motion

All animations use Framer Motion. Common patterns:

**Fade In on Scroll**:
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Hover Animation**:
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### CSS Animations

Global animations available in `globals.css`:
- `animate-fadeInUp`
- `animate-fadeInDown`
- `animate-slideInLeft`
- `animate-slideInRight`
- `animate-pulse-glow`

## 🛠️ Customization

### Changing Colors

1. **Edit `tailwind.config.ts`**:
```javascript
colors: {
  background: '#0B0F19', // Dark background
  primary: '#6366F1',    // Primary color
  accent: '#8B5CF6',     // Accent color
  success: '#22C55E',    // Success color
}
```

2. **Update in components**:
```jsx
className="bg-primary text-white" // Uses configured color
```

### Changing Fonts

Edit `app/layout.tsx`:
```jsx
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'] });
```

### Changing Hero Section

Edit `components/hero.tsx`:
- Update headline
- Change profile card content
- Modify CTA buttons
- Adjust animations

### Modifying Pages

Each page is a separate file in `app/[page]/page.tsx`. Edit directly to customize content.

## 📝 Adding New Components

Create new component in `components/[name].tsx`:

```jsx
'use client';

import { motion } from 'framer-motion';

export function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Component content */}
    </motion.div>
  );
}
```

Then import in pages:
```jsx
import { MyComponent } from '@/components/my-component';

export default function Page() {
  return <MyComponent />;
}
```

## 🔍 TypeScript

The project uses TypeScript for type safety. Common patterns:

```typescript
// Component Props
interface ComponentProps {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}

// Component with Props
export function MyComponent({ title, onClick, children }: ComponentProps) {
  return <button onClick={onClick}>{title}</button>;
}
```

## 🧪 Testing Locally

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Test Production Build
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 🔗 Routes

The website uses Next.js file-based routing:

- `/` → redirects to `/home`
- `/home` → Landing page
- `/about` → About page
- `/projects` → Projects showcase
- `/research` → Research experience
- `/experience` → Work experience
- `/blog` → Blog (coming soon)
- `/contact` → Contact form

## 🌐 Environment Variables

If needed in future, create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=google-analytics-id
```

Access in code:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 📱 Mobile Responsive Testing

### Using Browser DevTools

1. Open DevTools (F12)
2. Click device toggle (Ctrl+Shift+M)
3. Select device preset or custom dimensions
4. Test interactions

### Common Breakpoints to Test

- iPhone SE: 375px
- iPhone 12: 390px
- Tablet: 768px
- Desktop: 1024px+

## 🚀 Build Optimization

### Code Splitting

Next.js automatically splits code per route. Components are lazy-loaded automatically.

### Image Optimization

If adding images, use Next.js Image component:

```jsx
import Image from 'next/image';

<Image
  src="/image.png"
  alt="Description"
  width={300}
  height={300}
/>
```

### Bundle Analysis

```bash
# Check bundle size
npm run build
# Look at .next/static output
```

## 🐛 Common Issues & Solutions

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Check types
npm run lint

# Fix issues in code or allow errors temporarily
```

### CSS Not Loading
```bash
# Clear cache and rebuild
rm -rf .next
npm run dev
```

### Framer Motion Not Working
- Ensure component has `'use client'` directive
- Check Framer Motion syntax
- See https://www.framer.com/motion/

## 📚 Useful Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs

## 🎓 File Conventions

- **Components**: PascalCase, no prefix (e.g., `Hero.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScroll.ts`)

## 🔄 Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: description"

# Push to GitHub
git push origin feature/your-feature

# Create Pull Request on GitHub
```

## 📊 Performance Tips

1. **Minimize Re-renders**: Use `React.memo` for expensive components
2. **Lazy Load Components**: Use `dynamic` import
3. **Optimize Images**: Compress before adding
4. **Defer Non-Critical Scripts**: Use `next/script`
5. **Monitor Core Web Vitals**: Check in Vercel dashboard

## 🆘 Debugging

### Debug Mode
```bash
# Run with debug output
DEBUG=* npm run dev
```

### Console Logging
```javascript
console.log('Value:', value);
console.warn('Warning:', message);
console.error('Error:', error);
```

### React DevTools
- Install React Developer Tools browser extension
- Inspect component hierarchy
- Check props and state

## 📝 Code Style

The project uses ESLint (configured by Next.js). Follow these guidelines:

- Use camelCase for variables and functions
- Use PascalCase for components
- Use meaningful variable names
- Add comments for complex logic
- Keep components focused and single-responsibility

## ✅ Before Pushing Code

```bash
# Lint code
npm run lint

# Build to check for errors
npm run build

# Test locally
npm run dev

# Commit
git add .
git commit -m "Your commit message"

# Push
git push origin branch-name
```

---

Happy coding! For questions, refer to the framework documentation or check the component examples in the codebase.
