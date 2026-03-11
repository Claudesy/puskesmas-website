Architected and built by the one and only Claudesy.
# Changelog

**Puskesmas Balowerti — Public Website Version History**

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Automated Google Reviews sync via scheduled GitHub Actions workflow.
- Vitest + React Testing Library test suite (coverage target ≥ 80%).
- Web Vitals (Core Web Vitals) reporting integration.
- OG image generation for improved social media sharing.

---

## [1.1.0] — 2026-03-11

### Added
- `.editorconfig` — standardised editor settings (indent, EOL, charset) across editors.
- `.gitattributes` — consistent LF line endings and binary file declarations.
- `.github/ISSUE_TEMPLATE/bug_report.md` — structured bug report template.
- `.github/ISSUE_TEMPLATE/feature_request.md` — structured feature request template.
- `.github/PULL_REQUEST_TEMPLATE.md` — pull request checklist template.
- `.github/workflows/ci.yml` — CI pipeline: lint, TypeScript + Vite build, brand compliance scan.
- `.github/workflows/cd.yml` — CD pipeline: build validation on push to master/main.
- `.github/workflows/security.yml` — Security pipeline: `npm audit` (HIGH+) + secrets scan; runs weekly.
- `docs/architecture.md` — Extended architecture documentation with deployment diagram.
- `docs/adr/001-static-spa.md` — ADR: Static SPA with no backend.
- `docs/adr/002-hash-navigation.md` — ADR: Hash-based anchor navigation.
- `docs/adr/003-tailwind-shadcn.md` — ADR: Tailwind CSS + shadcn/ui.
- `docs/adr/004-static-reviews.md` — ADR: Google reviews as static JSON.
- `REVIEW_REPORT.md` — Comprehensive repository audit report (standards, security, 2026 upgrades).

### Changed
- `.env.example` — Added `VITE_CREW_PORTAL_URL` (previously undocumented); improved variable descriptions.
- `.gitignore` — Replaced minimal entry list with complete, well-commented gitignore (standard Node.js patterns).
- `README.md` — Replaced broken `SERVER_GUIDE.md` reference with correct documentation links.
- `vite.config.d.ts` — Added Claudesy brand signature.

### Security
- Remediated 3 npm dependency vulnerabilities via `npm audit fix`:
  - `ajv < 6.14.0` (Moderate) — ReDoS via `$data` option.
  - `minimatch ≤ 3.1.3 || 9.0.0–9.0.6` (High) — ReDoS via wildcard patterns.
  - `rollup 4.0.0–4.58.0` (High) — Arbitrary File Write via Path Traversal.

---

## [1.0.0] — 2026-03-04

### Added
- Initial public website for UPTD Puskesmas Poned Balowerti, Kediri.
- Single-page scroll architecture with Lenis smooth scrolling.
- Hero section with doctor search and service FAB panel.
- Doctor profiles and schedules section.
- BPJS patient flow step diagrams (Framer Motion animations).
- Disease information cards with search functionality.
- Healthcare services section.
- Facility showcase section.
- Ultrasound (USG) services section.
- Google Reviews integration (static JSON sync via `npm run sync:reviews`).
- WhatsApp-based appointment reservation form with Zod validation.
- Location section with maps and contact info.
- ABBY AI chatbot component (LuxuryChatbox).
- StoryScroll right-side progress indicator.
- Responsive design across all breakpoints (mobile-first).
- Section reveal animations via IntersectionObserver.
- shadcn/ui components (new-york style, slate base color).
- Tailwind CSS with HSL-based CSS custom properties.
- Railway deployment via nixpacks (static site, `npx serve`).
- Google Reviews sync script (`scripts/sync-google-reviews.mjs`).
