Architected and built by the one and only Claudesy.
# CLAUDE.md — Puskesmas Balowerti Website

## Project Overview

Public-facing landing website for **UPTD Puskesmas Poned Balowerti** (a healthcare clinic in Kediri, Indonesia). Single-page application showcasing services, doctor profiles, facilities, patient flow guides, testimonials, and WhatsApp-based appointment reservations.

**Production URL:** `puskesmas-website-production.up.railway.app`

## Tech Stack

- **Framework:** React 19 + TypeScript 5.9
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3.4 with CSS variables (HSL-based)
- **UI Components:** shadcn/ui (new-york style) + Radix UI primitives
- **Animation:** Framer Motion, Lenis smooth scroll, IntersectionObserver reveals
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Package Manager:** npm (bun.lock also present)
- **Deployment:** Railway (nixpacks, Node.js 20, static serve)

## Quick Commands

```bash
npm run dev          # Start Vite dev server (localhost:5173)
npm run build        # TypeScript check + Vite production build
npm run lint         # ESLint (flat config, TS/TSX files)
npm run preview      # Preview production build locally
npm run sync:reviews # Sync Google Places API reviews to public/data/google-reviews.json
```

The build command runs `tsc -b && vite build` — TypeScript must compile cleanly before Vite builds.

## Project Structure

```
src/
├── main.tsx                  # Entry point: smooth scroll + IntersectionObserver setup
├── App.tsx                   # Root component: ReactLenis wrapper + section composition
├── index.css                 # Global styles, Tailwind directives, CSS variables, custom classes
├── sections/                 # Full-width page sections (13 files)
│   ├── Navigation.tsx        # Floating header with mobile sheet menu
│   ├── Hero.tsx              # Hero banner with doctor search + service FAB panel
│   ├── About.tsx             # Clinic overview
│   ├── Doctors.tsx           # Doctor profiles and schedules
│   ├── PatientFlow.tsx       # BPJS patient flow step diagrams (Framer Motion)
│   ├── Diseases.tsx          # Disease information cards
│   ├── Services.tsx          # Healthcare services offered
│   ├── Facilities.tsx        # Facility showcase
│   ├── USG.tsx               # Ultrasound services
│   ├── Testimonials.tsx      # Google reviews integration
│   ├── Reservation.tsx       # WhatsApp booking form
│   ├── Location.tsx          # Maps and contact info
│   └── Footer.tsx            # Site footer
├── components/
│   ├── ui/                   # shadcn/ui components (button, badge, card, sheet, floating-header)
│   ├── LuxuryChatbox.tsx     # ABBY AI chatbot component
│   └── StoryScroll.tsx       # Right-side scroll progress indicator
├── hooks/
│   ├── use-mobile.ts         # Mobile breakpoint detection (media query)
│   └── useSmoothImage.ts     # Image lazy-load + parallax + scale animation hooks
└── lib/
    └── utils.ts              # cn() utility (clsx + tailwind-merge)
```

## Architecture

### Single-Page Scroll Architecture

- No client-side router — navigation uses hash-based anchor links (`#hero`, `#services`, `#reservation`)
- Lenis provides global smooth scrolling; exposed via `window.__lenis` for the anchor click handler
- `NAV_HEIGHT = 72` px offset is used for scroll positioning
- Sections are wrapped in `<div data-reveal="left|right">` for staggered entrance animations

### Section Reveal System

Global IntersectionObserver in `main.tsx` watches `[data-reveal]` elements and adds `.revealed` class when in viewport (threshold 0.12). Each section animates in from left or right. Hero section is always visible (no reveal wrapper).

### State Management

No centralized store (no Redux/Zustand/Context). All state is component-local via `useState`. Data is either:
- Hardcoded arrays within section components (doctors, services, facilities)
- Fetched from static JSON (`/public/data/google-reviews.json`)
- Collected via local form state and sent to WhatsApp

### External Integrations

- **WhatsApp:** Reservations use `https://wa.me/{phone}?text={message}` links
- **Google Places API:** Review sync script (`scripts/sync-google-reviews.mjs`) fetches reviews to `public/data/google-reviews.json`
- **Crew Portal:** External dashboard link via `VITE_CREW_PORTAL_URL` env var

## Code Conventions

### File Naming

- Components & sections: **PascalCase** (`Hero.tsx`, `PatientFlow.tsx`)
- Hooks: **camelCase** with `use` prefix (`useSmoothImage.ts`, `use-mobile.ts`)
- Utilities: **lowercase** (`utils.ts`)

### Import Order

```tsx
// 1. React / third-party
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. UI components
import { Button } from '@/components/ui/button';

// 3. Custom hooks
import { useSmoothImage } from '@/hooks/useSmoothImage';

// 4. Utilities
import { cn } from '@/lib/utils';
```

### Path Aliases

`@/` maps to `./src/` (configured in `vite.config.ts` and `tsconfig.json`). Always use `@/` for imports from `src/`.

### Styling

- Use Tailwind utility classes as primary approach
- Custom CSS classes in `index.css`: `.neo-card`, `.neo-card-hover`, `.neo-control`, `.neo-inset`, `.neo-chip`, `.frosted-glass`, `.grain-overlay`
- Color palette is cream-based with primary `#C9A87C`. Core colors are defined as CSS variables in `:root`
- Use `cn()` from `@/lib/utils` to merge Tailwind classes conditionally
- Responsive design via Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`)

### Component Patterns

- Section components are self-contained with their own data, types, and layout
- Types are defined at the top of each file, then constants, then the component
- Comments follow the pattern: `// Chief's [Feature] — [description]`
- Content is in Bahasa Indonesia (the website serves an Indonesian community)

### Constants

- `UPPER_CASE` for module-level constants (`NAV_HEIGHT`, `WA_NUMBER`)
- `camelCase` for all variables and functions

## shadcn/ui

- Style: **new-york**
- Base color: **slate**
- RSC: **false**
- Icon library: **lucide**
- Add new components via: `npx shadcn@latest add <component-name>`
- Components go in `src/components/ui/`

## Environment Variables

```bash
# Required for review sync script
GOOGLE_MAPS_API_KEY=          # Google Places API key

# Optional
GOOGLE_PLACE_QUERY=           # Default: "Puskesmas Balowerti Kediri"
GOOGLE_REVIEW_PAGE_URL=       # Override Google review page URL
GOOGLE_REVIEWS_OUTPUT=        # Override output path (default: public/data/google-reviews.json)
VITE_CREW_PORTAL_URL=         # Crew Portal dashboard link (exposed to client via Vite)
```

Only `VITE_`-prefixed variables are exposed to the browser at build time.

## Deployment

Deployed to **Railway** via `railway.toml`:
- **Build:** nixpacks with Node.js 20, runs `npm install && npm run build`
- **Serve:** `npx serve -s dist -l $PORT` (static file server)
- **Restart:** on_failure, max 3 retries

Output is a fully static site in `dist/` — no server-side rendering.

## Linting

ESLint flat config (`eslint.config.js`):
- Extends: `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`
- Targets: `**/*.{ts,tsx}`
- Ignores: `dist/`

Run `npm run lint` before committing. There is no Prettier — formatting relies on ESLint rules.

## Testing

No test framework is currently configured. There are no test files or testing dependencies.

## Key Gotchas

1. **Lenis bridge pattern:** `App.tsx` exposes the Lenis instance to `window.__lenis` so the global anchor handler in `main.tsx` can use it. Don't remove the `LenisBridge` component.
2. **Reveal animations require DOM timing:** The IntersectionObserver in `main.tsx` runs after a `requestAnimationFrame` + `setTimeout(100ms)` to wait for React's first render.
3. **Google reviews are static JSON:** They aren't fetched live from Google. Run `npm run sync:reviews` to update them. The component fetches from `/data/google-reviews.json` with `cache: 'no-store'`.
4. **No backend:** This is a purely static frontend. Form submissions go to WhatsApp, not to a server.
5. **Content language:** All user-facing text is in **Bahasa Indonesia**. Comments mix Indonesian and English.
6. **Image formats:** The project uses a mix of `.webp`, `.avif`, `.png`, and `.jpg`. Prefer `.webp` for new images.
