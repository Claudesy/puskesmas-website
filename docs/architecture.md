<!-- Claudesy's vision, brought to life. -->

# Architecture Overview — Puskesmas Balowerti Website

> This document mirrors and extends `ARCHITECTURE.md` in the repository root.
> For the authoritative architecture document, see [`/ARCHITECTURE.md`](../ARCHITECTURE.md).
> Architecture Decision Records are in [`/docs/adr/`](./adr/).

---

## System Context

The Puskesmas Balowerti website is a **purely static single-page application** (SPA) serving as
the public digital presence for UPTD Puskesmas Poned Balowerti, Kediri, East Java, Indonesia.

### System Actors

| Actor | Description |
|---|---|
| **General Public** | Patients and community members seeking clinic information |
| **BPJS Patients** | Indonesian national health insurance members navigating the patient flow |
| **Clinic Staff** | Access the internal Crew Portal via a nav link (`VITE_CREW_PORTAL_URL`) |
| **ABBY (AI Chatbot)** | Intelligent assistant embedded in the page for visitor guidance |

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────────┐
│                  User's Browser                      │
│  React 19 SPA (index.html + bundled JS/CSS)         │
│  Lenis smooth scroll + Framer Motion animations     │
└────────────────────┬────────────────────────────────┘
                     │  HTTP(S)
                     ▼
┌─────────────────────────────────────────────────────┐
│              Railway (Static Hosting)                │
│  npx serve -s dist -l $PORT                         │
│  Auto-restart on failure, max 3 retries             │
│  Production: puskesmas-website-production.up.railway.app │
└────────────────────┬────────────────────────────────┘
                     │  GitHub push triggers Railway deploy
                     ▼
┌─────────────────────────────────────────────────────┐
│              GitHub (Source + CI)                    │
│  Branch: master (production) / feature/* (dev)      │
│  CI: lint → brand-compliance → build (GitHub Actions) │
│  Security: npm audit + secrets scan (weekly + PR)   │
└─────────────────────────────────────────────────────┘

External Services (build-time only):
┌─────────────────────────────────────────────────────┐
│  Google Places API → public/data/google-reviews.json │
│  (npm run sync:reviews — manual, not automated)      │
└─────────────────────────────────────────────────────┘

External Services (client-side, no credentials):
┌─────────────────────────────────────────────────────┐
│  WhatsApp (wa.me links) — appointment reservations   │
│  Google Maps embed — location section                │
└─────────────────────────────────────────────────────┘
```

---

## Frontend Architecture

### Component Hierarchy

```
App.tsx (ReactLenis wrapper)
├── Navigation.tsx          — Floating header, mobile sheet menu
├── Hero.tsx                — Full-screen banner, doctor search, service FAB
├── About.tsx               — Clinic overview, accreditation
├── Doctors.tsx             — Profiles and schedules
├── PatientFlow.tsx         — Animated BPJS flow diagrams
├── Diseases.tsx            — Disease information cards
├── Services.tsx            — Healthcare services list
├── Facilities.tsx          — Facility showcase with gallery
├── USG.tsx                 — Ultrasound services
├── Testimonials.tsx        — Google reviews (static JSON)
├── Reservation.tsx         — WhatsApp booking form
├── Location.tsx            — Map embed + contact info
├── Footer.tsx              — Site footer with nav links
├── LuxuryChatbox.tsx       — ABBY AI assistant chatbot
├── StoryScroll.tsx         — Right-side scroll progress indicator
└── WAFloatingButton.tsx    — WhatsApp floating action button
```

### State Architecture

No centralized state management. All state is component-local:

| Component | State | Purpose |
|---|---|---|
| `Hero.tsx` | `searchQuery`, `filteredDoctors`, `isPanelOpen` | Doctor search + FAB panel |
| `Reservation.tsx` | Form fields (`name`, `phone`, `date`, etc.) | WhatsApp booking form |
| `Testimonials.tsx` | `reviews[]`, `isLoading`, `error` | Reviews fetched from static JSON |
| `Diseases.tsx` | `searchQuery`, `activeCategory` | Disease card filtering |
| `Navigation.tsx` | `isMenuOpen`, `isScrolled` | Mobile menu + scroll header state |
| `LuxuryChatbox.tsx` | `messages[]`, `input`, `isOpen` | Chatbot conversation |

### Animation System

| Layer | Technology | Usage |
|---|---|---|
| Smooth scroll | Lenis v1.3 | Global smooth scroll; instance at `window.__lenis` |
| Section reveals | IntersectionObserver | `[data-reveal]` elements → `.revealed` class at 0.12 threshold |
| Section animations | Framer Motion v12 | Patient flow steps, card stagger effects |
| Image effects | `useSmoothImage` hook | Lazy-load, parallax, scale-on-scroll |

---

## Build Pipeline

```
Source (TypeScript + TSX)
    ↓  tsc -b (type check, composite build)
    ↓  vite build
         ↓  Terser (minification, drop console/debugger)
         ↓  Code splitting:
              vendor-react    (react, react-dom)
              vendor-ui       (@radix-ui, cva, clsx, tailwind-merge)
              vendor-animation (framer-motion, lenis)
              vendor-icons    (lucide-react)
              index           (application code)
    ↓  dist/ (static files)
```

---

## Architecture Decision Records

See [`docs/adr/`](./adr/) for individual ADRs:

- [ADR-001](./adr/001-static-spa.md) — Static SPA with no backend
- [ADR-002](./adr/002-hash-navigation.md) — Hash-based anchor navigation
- [ADR-003](./adr/003-tailwind-shadcn.md) — Tailwind CSS + shadcn/ui
- [ADR-004](./adr/004-static-reviews.md) — Google reviews as static JSON

---

## Future Considerations

| Area | Recommendation | Priority |
|---|---|---|
| Testing | Add Vitest + React Testing Library | High |
| Observability | Add Web Vitals reporting (Core Web Vitals) | Medium |
| SEO | Implement OG image generation | Medium |
| Reviews | Automate review sync via GitHub Actions scheduled workflow | Low |
| i18n | Consider `react-i18next` if English translation is needed | Low |
