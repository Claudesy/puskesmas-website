# 08 — IMPLEMENTATION SCAFFOLD README
## Architecture & Built by Claudesy

---

| Field | Value |
|---|---|
| **Project** | Puskesmas Balowerti — Premium Healthcare Web Platform |
| **Document** | 08 — Implementation Scaffold Readme |
| **Version** | 1.0.0 |
| **Author** | dr. Ferdi Iskandar / Claudesy |
| **Date** | 2026-03-03 |
| **Status** | Active |
| **Stack** | React 19 · TypeScript 5.9 · Vite 7 · Tailwind CSS 3 · Railway |

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Prerequisites](#2-prerequisites)
3. [Repository Structure](#3-repository-structure)
4. [Getting Started](#4-getting-started)
5. [Folder Structure — Detailed](#5-folder-structure--detailed)
6. [Naming Conventions](#6-naming-conventions)
7. [Component Architecture Guidelines](#7-component-architecture-guidelines)
8. [Adding a New Section](#8-adding-a-new-section)
9. [Environment Variables](#9-environment-variables)
10. [Available Scripts](#10-available-scripts)
11. [Deployment](#11-deployment)
12. [Brand Assets & Design Tokens](#12-brand-assets--design-tokens)
13. [Documentation Management](#13-documentation-management)
14. [Contributing Guidelines](#14-contributing-guidelines)

---

## 1. Project Overview

This is the official repository for **Puskesmas Balowerti Premium Healthcare Web Platform** — designed and built by **Claudesy** under the sponsorship of **dr. Ferdi Iskandar**.

**Brand:** Architecture & Built by Claudesy

**Tech Stack at a Glance:**
- Frontend: React 19 + TypeScript + Vite 7
- Styling: Tailwind CSS 3 + Radix UI (shadcn/ui)
- Animation: Framer Motion 12 + Lenis (smooth scroll)
- Forms: React Hook Form 7 + Zod 4
- Charts: Recharts 2 (Phase 2)
- Deployment: Railway (PaaS)

---

## 2. Prerequisites

Before working on this project, ensure you have the following installed:

| Tool | Version | Install |
|---|---|---|
| Node.js | ≥ 20.x LTS | https://nodejs.org |
| npm | ≥ 10.x | (bundled with Node) |
| bun (optional) | ≥ 1.x | https://bun.sh |
| git | ≥ 2.x | https://git-scm.com |
| VS Code (recommended) | Latest | https://code.visualstudio.com |

**Recommended VS Code Extensions:**
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- TypeScript + JavaScript Language Features
- GitLens

---

## 3. Repository Structure

```
puskesmas-website/
├── .env.example              ← Environment variable template (copy to .env)
├── .gitignore                ← Git ignore rules
├── bun.lock                  ← Bun lockfile (use npm or bun)
├── package-lock.json         ← npm lockfile
├── package.json              ← Project metadata + scripts + dependencies
├── tsconfig.json             ← TypeScript compiler configuration
├── vite.config.ts            ← Vite build configuration
├── tailwind.config.js        ← Tailwind CSS configuration + custom tokens
├── postcss.config.js         ← PostCSS configuration
├── eslint.config.js          ← ESLint configuration
├── components.json           ← shadcn/ui component configuration
├── index.html                ← HTML entry point (Vite)
├── railway.toml              ← Railway deployment configuration
├── SERVER_GUIDE.md           ← Server / deployment guide
│
├── public/                   ← Static assets (served as-is, no bundling)
│   ├── images/               ← Optimized images (WebP/AVIF preferred)
│   │   ├── ferdi.png         ← Doctor profile photos
│   │   ├── puskesmas-building.png
│   │   └── ...
│   └── data/
│       └── google-reviews.json   ← Auto-synced Google Reviews data
│
├── scripts/                  ← Utility scripts (Node.js, run manually or via CI)
│   └── sync-google-reviews.mjs  ← Sync Google Reviews from Places API
│
├── src/                      ← Application source code
│   ├── main.tsx              ← Application entry point (mounts React)
│   ├── App.tsx               ← Root component (composes all sections)
│   ├── App.css               ← Global app styles (minimal; prefer Tailwind)
│   ├── index.css             ← Global CSS reset + Tailwind base + custom properties
│   │
│   ├── components/           ← Shared, reusable UI components
│   │   ├── ui/               ← shadcn/ui generated components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   └── ...
│   │   ├── LuxuryChatbox.tsx ← AI-powered floating chatbox
│   │   └── StoryScroll.tsx   ← Narrative scroll experience component
│   │
│   ├── sections/             ← Full-page section components (one per landing section)
│   │   ├── Navigation.tsx    ← Sticky navigation bar
│   │   ├── Hero.tsx          ← Hero / banner section
│   │   ├── About.tsx         ← About Puskesmas section
│   │   ├── Services.tsx      ← Healthcare services section
│   │   ├── Doctors.tsx       ← Doctor profiles section
│   │   ├── Facilities.tsx    ← Facilities showcase section
│   │   ├── USG.tsx           ← USG service highlight section
│   │   ├── PatientFlow.tsx   ← Patient journey visualization
│   │   ├── Diseases.tsx      ← Public health information section
│   │   ├── Testimonials.tsx  ← Google Reviews / testimonials
│   │   ├── Reservation.tsx   ← Appointment booking form
│   │   ├── Location.tsx      ← Google Maps + contact info
│   │   └── Footer.tsx        ← Site footer
│   │
│   ├── hooks/                ← Custom React hooks
│   │   ├── use-mobile.ts     ← Mobile viewport detection
│   │   └── useSmoothImage.ts ← Image loading transition hook
│   │
│   └── lib/                  ← Utility functions and helpers
│       └── utils.ts          ← cn() class merge utility (clsx + tailwind-merge)
│
└── docs/                     ← Project documentation dossier
    ├── INDEX_[Architecture & Built by Claudesy].md
    ├── 00_Project_Overview_[Architecture & Built by Claudesy].md
    ├── ...                   ← All 14+ project documents
    └── 09_Code_Scaffold_and_Configuration_[Architecture & Built by Claudesy]/
        ├── .env.example
        ├── Dockerfile
        ├── docker-compose.yml
        ├── .gitignore
        └── .github/workflows/ci.yml
```

---

## 4. Getting Started

### 4.1 Clone the Repository

```bash
git clone https://github.com/[your-org]/puskesmas-website.git
cd puskesmas-website
```

### 4.2 Install Dependencies

```bash
# Using npm (recommended)
npm install

# Or using bun (faster)
bun install
```

### 4.3 Set Up Environment Variables

```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your actual values
# GOOGLE_MAPS_API_KEY=your_actual_key
# GOOGLE_PLACE_QUERY=Puskesmas Balowerti Kediri
```

### 4.4 Sync Google Reviews (Optional — requires API key)

```bash
npm run sync:reviews
```

### 4.5 Start Development Server

```bash
npm run dev
# → Local server starts at http://localhost:5173
```

### 4.6 Build for Production

```bash
npm run build
# → Outputs to dist/
```

### 4.7 Preview Production Build

```bash
npm run preview
# → Preview server at http://localhost:4173
```

---

## 5. Folder Structure — Detailed

### 5.1 `src/sections/` — Section Components

Each file in `sections/` represents one full-page section of the landing site. Sections:
- Are imported and composed in `App.tsx`
- Have their own Tailwind styles (no external CSS files)
- May import from `src/components/` for shared sub-components
- Receive no props from App.tsx (sections manage their own data / imports)

### 5.2 `src/components/` — Reusable Components

- `ui/` — Auto-generated by shadcn/ui CLI. **Do not manually edit these.** Add them via:
  ```bash
  npx shadcn@latest add button
  ```
- Custom components (LuxuryChatbox, StoryScroll) are hand-crafted and live here.

### 5.3 `src/hooks/` — Custom Hooks

Place all custom React hooks here. Hooks must:
- Be prefixed with `use` (e.g., `useAnalytics.ts`)
- Contain only React hook logic (no UI)
- Be thoroughly typed in TypeScript

### 5.4 `src/lib/` — Utilities

Pure utility functions with no React dependencies. The `utils.ts` file exports the `cn()` utility used throughout for merging Tailwind class names.

### 5.5 `public/` — Static Assets

Files in `public/` are served directly. Image files here should be:
- Optimized (WebP or AVIF format preferred)
- Sized appropriately for their display context
- Named descriptively in kebab-case

### 5.6 `scripts/` — Node.js Utility Scripts

Standalone Node.js scripts (ES modules) run outside the React application. Do not import React or Vite-specific modules here.

---

## 6. Naming Conventions

| Item | Convention | Example |
|---|---|---|
| React component files | PascalCase | `HeroSection.tsx`, `DoctorCard.tsx` |
| Non-component TS files | camelCase | `useScrollPosition.ts`, `formatDate.ts` |
| CSS / style files | camelCase | `hero.module.css` (avoid; prefer Tailwind) |
| Image files | kebab-case | `puskesmas-building.webp`, `ferdi-iskandar.webp` |
| Environment variables | UPPER_SNAKE_CASE | `GOOGLE_MAPS_API_KEY` |
| Section IDs (HTML) | kebab-case | `id="tentang-kami"`, `id="reservasi"` |
| Git branches | `feature/`, `fix/`, `docs/` | `feature/reservation-form` |
| Git commit messages | Conventional Commits | `feat: add reservation form validation` |

### 6.1 Conventional Commit Types

| Type | Usage |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation change |
| `style:` | Formatting, no logic change |
| `refactor:` | Code change without feature/fix |
| `perf:` | Performance improvement |
| `test:` | Adding or updating tests |
| `chore:` | Build, config, dependency changes |

---

## 7. Component Architecture Guidelines

### 7.1 Section Component Template

```tsx
// src/sections/ExampleSection.tsx
// Architecture & Built by Claudesy

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ExampleSection = () => {
  return (
    <section
      id="example-section"
      aria-labelledby="example-heading"
      className="relative py-20 bg-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          id="example-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900"
        >
          Section Title
        </motion.h2>
        {/* Section content */}
      </div>
    </section>
  );
};

export default ExampleSection;
```

### 7.2 Key Patterns

1. **Motion on scroll:** Use `whileInView` + `viewport={{ once: true }}` for entrance animations.
2. **Responsive layout:** Always design mobile-first. Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`.
3. **Section IDs:** Every section must have an `id` attribute matching the navigation anchor.
4. **ARIA:** Every section must have `aria-labelledby` pointing to its heading.
5. **Images:** Always include `alt`, `width`, `height`. Use `loading="lazy"` for below-fold images.

---

## 8. Adding a New Section

Follow these steps to add a new section to the landing page:

1. **Create the component:**
   ```bash
   touch src/sections/NewSection.tsx
   ```

2. **Build the component** following the template in §7.1.

3. **Import and add to App.tsx:**
   ```tsx
   import NewSection from "@/sections/NewSection";
   // Add <NewSection /> at the desired position
   ```

4. **Add navigation link** in `Navigation.tsx`:
   ```tsx
   { href: "#new-section", label: "New Section" }
   ```

5. **Test** across breakpoints (320px, 768px, 1280px).

6. **Run QA checks:**
   ```bash
   npm run build  # Must pass
   npm run lint   # Must pass
   ```

---

## 9. Environment Variables

All environment variables are documented in `.env.example`. Never commit `.env` to git.

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_MAPS_API_KEY` | Yes (for maps) | Google Maps Platform API key |
| `GOOGLE_PLACE_QUERY` | Yes (for reviews) | Google Places search query for the Puskesmas |
| `GOOGLE_REVIEW_PAGE_URL` | No | Override URL for review scraping |
| `GOOGLE_REVIEWS_OUTPUT` | No | Override output path for reviews JSON |

**For Phase 2 (planned additions):**

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (Railway auto-provides) |
| `JWT_SECRET` | Secret for JWT token signing |
| `JWT_REFRESH_SECRET` | Secret for refresh token signing |
| `ANTHROPIC_API_KEY` | Anthropic Claude API key (AI features) |
| `SMTP_HOST` | Email server for notifications |
| `SMTP_USER` | Email username |
| `SMTP_PASS` | Email password |

---

## 10. Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server (hot reload)

# Build
npm run build            # TypeScript check + Vite production build

# Preview
npm run preview          # Serve production build locally

# Code Quality
npm run lint             # ESLint check

# TypeScript
npx tsc --noEmit         # Type check only (no output)

# Reviews Sync
npm run sync:reviews     # Fetch and update Google Reviews JSON

# Bundle Analysis
npx vite-bundle-visualizer  # (install separately if needed)
```

---

## 11. Deployment

### 11.1 Automatic Deployment (Railway)

Every push to the `master` branch triggers an automatic Railway deployment:

```
git push origin master
→ Railway detects push
→ Railway builds with nixpacks (Node.js detected)
→ npm run build executes
→ dist/ served as static site
→ Health check at / passes
→ Traffic switches to new deployment
```

### 11.2 Manual Deployment

```bash
# Build locally
npm run build

# Deploy using Railway CLI
railway up
```

### 11.3 Preview Deployments

Feature branches pushed to GitHub automatically generate Railway Preview URLs for review before merging. See Doc 10 for full deployment operations.

---

## 12. Brand Assets & Design Tokens

### 12.1 Color Palette (Tailwind Config)

I have defined the Puskesmas Balowerti brand colors in `tailwind.config.js`:

```js
// tailwind.config.js (custom colors — extend as needed)
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#[PRIMARY_HEX]',    // Main brand color
        secondary: '#[SECONDARY_HEX]', // Accent color
        dark: '#[DARK_HEX]',
        light: '#[LIGHT_HEX]',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],     // Primary font
      heading: ['[Heading Font]', 'serif'], // Headings
    }
  }
}
```

### 12.2 Logo Assets

| Asset | Path | Usage |
|---|---|---|
| Puskesmas Logo | `public/images/logookm.png` | Navigation + footer |
| Kediri City Logo | `public/images/logokediri.png` | Footer / accreditation |
| IDI Logo | `public/images/idi.png` | Doctor accreditation section |

### 12.3 Brand Statement

The string **"Architecture & Built by Claudesy"** appears in:
- All documentation headers and footers
- The application footer component
- HTML `<meta name="generator">` or equivalent attribution comment

---

## 13. Documentation Management

All project documentation lives in `docs/`. To export to other formats:

```bash
# Prerequisites: install pandoc
# Linux: sudo apt install pandoc
# macOS: brew install pandoc

# Export all markdown docs to DOCX
for f in docs/*.md; do
  pandoc "$f" -o "${f%.md}.docx" --reference-doc=docs/template.docx 2>/dev/null || \
  pandoc "$f" -o "${f%.md}.docx"
done

# Export single doc to PDF (requires wkhtmltopdf)
pandoc "docs/00_Project_Overview_[Architecture & Built by Claudesy].md" \
  -o "docs/00_Project_Overview_[Architecture & Built by Claudesy].pdf" \
  --pdf-engine=wkhtmltopdf

# Export all to PDF (batch)
for f in docs/*.md; do
  pandoc "$f" -o "${f%.md}.pdf" --pdf-engine=wkhtmltopdf 2>/dev/null
done
```

---

## 14. Contributing Guidelines

As this is primarily a single-developer project (Claudesy), contributions are managed as follows:

1. **Branches:** Create a feature branch from `master` using naming convention: `feature/[description]`
2. **Commits:** Use Conventional Commits format (see §6.1)
3. **Pull Requests:** Create a PR to `master`; include a description of changes
4. **QA Gate:** All PRs must pass: TypeScript check + ESLint + Vite build
5. **Deployment:** Merge to `master` triggers automatic Railway deployment
6. **Documentation:** Update relevant docs in `docs/` when making significant changes

---

---
*Prepared by: dr. Ferdi Iskandar / Claudesy — Architecture & Built by Claudesy — Date: 2026-03-03*
