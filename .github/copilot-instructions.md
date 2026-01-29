# DingoNet - AI Coding Agent Instructions

## Project Overview

**DingoNet** is a modern Next.js web application using React 19 with TypeScript and Tailwind CSS. It's a minimal, production-ready setup using Next.js 16's App Router and latest web technologies.

### Tech Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5 with strict mode enabled
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss` plugin
- **React**: React 19.2.3 with React DOM
- **Linting**: ESLint 9 with Next.js and TypeScript rules

## Project Structure

```
app/
  layout.tsx          # Root layout with Geist fonts and metadata
  page.tsx            # Home page component
  globals.css         # Global Tailwind styles
public/               # Static assets
.github/              # GitHub workflows and configs (minimal)
```

## Key Architectural Patterns

### 1. **App Router Structure**
- All routes live in `app/` directory following Next.js 13+ App Router convention
- Use `layout.tsx` for persistent UI (header, sidebar, providers)
- Each page gets its own `page.tsx` file
- Server Components are the default; use `'use client'` only when needed

### 2. **Styling with Tailwind CSS 4**
- All styling uses Tailwind utility classes (no CSS modules)
- Configure dark mode variants in `tailwind.config.ts` if created
- Global CSS is imported in [app/globals.css](app/globals.css)
- PostCSS configured in [postcss.config.mjs](postcss.config.mjs) with Tailwind plugin

### 3. **Font Optimization**
- Uses Next.js `next/font` for automatic Google Font optimization
- Geist Sans and Mono fonts pre-configured in [app/layout.tsx](app/layout.tsx#L5-L12)
- CSS variables injected: `--font-geist-sans`, `--font-geist-mono`

### 4. **TypeScript Configuration**
- Strict mode enabled (`"strict": true`)
- Path alias configured: `@/*` maps to project root for imports
- ES2017 target with ESNext modules for bundler

## Developer Workflows

### Development Server
```bash
npm run dev
```
Starts Next.js dev server on `http://localhost:3000` with hot module reload.

### Production Build & Start
```bash
npm run build     # Compile TypeScript, optimize assets
npm start         # Run production server
```

### Linting
```bash
npm run lint
```
Runs ESLint using Next.js + TypeScript configurations.

## Code Conventions

### Component Patterns
- **Prefer Server Components** by default in `app/` routes
- Functional components with TypeScript interfaces for props
- Use Next.js `Image` component for static/dynamic images (see [app/page.tsx](app/page.tsx#L1))
- Export metadata object for SEO per route

### Imports
- Use `@/` alias for imports: `import { foo } from '@/components/foo'`
- Import types separately: `import type { Metadata } from "next"`

### TypeScript
- No `any` types (caught by eslint-config-next)
- Define component props as interfaces
- Leverage strict mode to catch null/undefined issues early

## External Dependencies & Integration Points

- **Next.js Fonts API**: Auto-optimizes Google Fonts, loaded asynchronously
- **Image Optimization**: Next.js `Image` component handles responsive images and WebP conversion
- **Tailwind CSS 4**: Latest version with simplified config syntax
- No external databases, APIs, or authentication setup (greenfield project)

## Important Notes for AI Agents

1. **File Naming**: TSX/TS files only. Next.js automatically routes `page.tsx` and `layout.tsx` files.
2. **No Config Customization Yet**: `next.config.ts` is minimal. Only expand if adding features like image domains.
3. **Styling**: Never create CSS modules or inline styles—always use Tailwind classes.
4. **Metadata**: Update `metadata` export in layouts/pages for each route's SEO.
5. **New Routes**: Create `app/feature/page.tsx` for new routes (auto-routed by Next.js).

## Common Task Examples

- **Add a new page**: Create `app/feature/page.tsx` with exports `default` and optional `metadata`
- **Modify styles**: Edit Tailwind classes in JSX or extend `globals.css`
- **Add a component**: Create reusable TSX in `app/components/` and import via `@/` alias
- **Fix lint errors**: Run `npm run lint` to see issues; most are auto-fixable with ESLint

---

For more information, refer to the [Next.js documentation](https://nextjs.org/docs).
