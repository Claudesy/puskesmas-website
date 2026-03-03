# 05 — QUALITY ASSURANCE AND TEST PLAN
## Architecture & Built by Claudesy

---

| Field | Value |
|---|---|
| **Project** | Puskesmas Balowerti — Premium Healthcare Web Platform |
| **Document** | 05 — Quality Assurance and Test Plan |
| **Version** | 1.0.0 |
| **Author** | dr. Ferdi Iskandar / Claudesy |
| **Date** | 2026-03-03 |
| **Status** | Active |
| **References** | ISO/IEC 25010:2023 · OWASP Testing Guide v4.2 · WCAG 2.2 |

---

## Table of Contents

1. [QA Strategy Overview](#1-qa-strategy-overview)
2. [Quality Standards and Targets](#2-quality-standards-and-targets)
3. [Test Types and Coverage](#3-test-types-and-coverage)
4. [Test Cases — Phase 1 Landing Site](#4-test-cases--phase-1-landing-site)
5. [Performance Testing](#5-performance-testing)
6. [Accessibility Testing](#6-accessibility-testing)
7. [Security Testing](#7-security-testing)
8. [Cross-Browser / Device Testing Matrix](#8-cross-browser--device-testing-matrix)
9. [User Acceptance Testing (UAT) Plan](#9-user-acceptance-testing-uat-plan)
10. [Bug Severity Classification](#10-bug-severity-classification)
11. [Definition of Done](#11-definition-of-done)
12. [QA Acceptance Checklist](#12-qa-acceptance-checklist)
13. [Sign-Off Block](#13-sign-off-block)

---

## 1. QA Strategy Overview

I approach quality assurance as a continuous, shift-left practice integrated into every development sprint — not a final gate. I define quality across five dimensions aligned with ISO/IEC 25010:2023:

1. **Functional Suitability** — Does the application do what it is specified to do?
2. **Performance Efficiency** — Does it respond within acceptable time limits under expected load?
3. **Compatibility** — Does it work across target browsers and devices?
4. **Usability & Accessibility** — Is it usable by all citizens, including those with disabilities?
5. **Security** — Is it protected against common web vulnerabilities?

**QA Responsibility:** I (Claudesy) am responsible for all internal QA. dr. Ferdi Iskandar and Puskesmas staff are responsible for clinical content verification and User Acceptance Testing (UAT).

---

## 2. Quality Standards and Targets

| Quality Dimension | Standard | Target | Tool |
|---|---|---|---|
| Performance — Desktop | Core Web Vitals / Lighthouse | Score ≥ 90 | Lighthouse CI |
| Performance — Mobile | Core Web Vitals / Lighthouse | Score ≥ 80 | Lighthouse CI |
| Accessibility | WCAG 2.2 Level AA | Score ≥ 95 | axe-core + Lighthouse |
| SEO | Lighthouse SEO | Score ≥ 90 | Lighthouse CI |
| Best Practices | Lighthouse | Score ≥ 90 | Lighthouse CI |
| LCP (Largest Contentful Paint) | Core Web Vitals | < 2.5 seconds | PageSpeed Insights |
| FCP (First Contentful Paint) | Core Web Vitals | < 1.5 seconds | PageSpeed Insights |
| CLS (Cumulative Layout Shift) | Core Web Vitals | < 0.1 | PageSpeed Insights |
| INP (Interaction to Next Paint) | Core Web Vitals | < 200ms | PageSpeed Insights |
| Security | OWASP Top 10 | 0 Critical / 0 High | OWASP ZAP |
| TypeScript | Strict mode | 0 type errors | tsc --strict |
| ESLint | Configured rules | 0 errors | ESLint |
| Bundle Size (JS) | Performance budget | < 500KB gzipped | Vite bundle analyzer |
| Image Optimization | WebP/AVIF format | All images optimized | sharp (in build) |

---

## 3. Test Types and Coverage

| Test Type | Phase | Automated | Manual | Tools |
|---|---|---|---|---|
| Unit Testing | 1 & 2 | Planned | — | Vitest (to be added) |
| Component Testing | 1 & 2 | Planned | — | Vitest + Testing Library |
| Integration Testing | 2 | Planned | — | Vitest |
| End-to-End (E2E) Testing | 1 & 2 | Planned | — | Playwright (to be added) |
| Visual Regression | 1 & 2 | Planned | — | Playwright screenshots |
| Performance Testing | 1 & 2 | Yes | — | Lighthouse CI |
| Accessibility Testing | 1 & 2 | Yes | Yes | axe-core + Manual |
| Security Testing | 1 & 2 | Yes | Manual | npm audit + OWASP ZAP |
| Cross-Browser Testing | 1 & 2 | Partial | Yes | Manual + BrowserStack |
| User Acceptance Testing | Phase end | No | Yes | Test scripts + forms |
| Content Review | 1 & 2 | No | Yes | Manual review |

---

## 4. Test Cases — Phase 1 Landing Site

### 4.1 Navigation

| TC# | Test Case | Steps | Expected Result | Pass/Fail |
|---|---|---|---|---|
| TC001 | Navigation renders on desktop | Load site on 1920px viewport | Nav visible, all links visible | — |
| TC002 | Navigation renders on mobile | Load site on 375px viewport | Hamburger menu visible | — |
| TC003 | Mobile menu opens | Click hamburger | Menu slides open with all links | — |
| TC004 | Mobile menu closes | Click close or outside | Menu slides closed | — |
| TC005 | Smooth scroll to section | Click nav link | Page scrolls smoothly to section | — |
| TC006 | Active link highlighting | Scroll to each section | Active nav link highlighted | — |
| TC007 | Navigation keyboard accessible | Tab through nav | All links focusable with keyboard | — |

### 4.2 Hero Section

| TC# | Test Case | Steps | Expected Result | Pass/Fail |
|---|---|---|---|---|
| TC010 | Hero animation plays | Load page | Framer Motion animation runs without jank | — |
| TC011 | CTA button navigates | Click primary CTA | Scrolls to Reservation section | — |
| TC012 | Hero image loads | Load page | Hero image visible within 2.5s (LCP) | — |
| TC013 | Hero responsive | Resize 320px–2560px | Layout intact at all sizes | — |

### 4.3 Reservation Form

| TC# | Test Case | Steps | Expected Result | Pass/Fail |
|---|---|---|---|---|
| TC020 | Form renders | Navigate to reservation | All form fields visible | — |
| TC021 | Name field validation | Submit empty name | Error: "Nama wajib diisi" | — |
| TC022 | Phone validation | Enter invalid phone | Error: "Nomor HP tidak valid" | — |
| TC023 | Service selection | Choose a service | Service selected, visible in form | — |
| TC024 | Date picker | Select a date | Date populates correctly | — |
| TC025 | Form submission | Fill all fields + submit | Success confirmation shown | — |
| TC026 | Form XSS prevention | Enter `<script>alert(1)</script>` in name | Script not executed, sanitized | — |
| TC027 | Form CSRF protection | Check form for CSRF token | Token present (if applicable) | — |

### 4.4 Google Reviews / Testimonials

| TC# | Test Case | Steps | Expected Result | Pass/Fail |
|---|---|---|---|---|
| TC030 | Reviews display | Load testimonials section | Reviews carousel renders | — |
| TC031 | Review data populated | Check review content | Names, ratings, text visible | — |
| TC032 | Auto-scroll / carousel | Wait or interact | Carousel advances | — |

### 4.5 Google Maps

| TC# | Test Case | Steps | Expected Result | Pass/Fail |
|---|---|---|---|---|
| TC040 | Map loads | Navigate to location section | Map renders with Puskesmas marker | — |
| TC041 | Map interactive | Click/drag on map | Map responds to interaction | — |
| TC042 | Directions link | Click "Get Directions" | Opens Google Maps in new tab | — |

### 4.6 Footer & Legal

| TC# | Test Case | Steps | Expected Result | Pass/Fail |
|---|---|---|---|---|
| TC050 | Footer renders | Scroll to bottom | All footer content visible | — |
| TC051 | Privacy notice link | Click privacy link | Privacy notice page / modal opens | — |
| TC052 | Contact information | Check footer | Phone, address, hours correct | — |
| TC053 | Social media links | Click social links | Correct social pages open | — |

---

## 5. Performance Testing

### 5.1 Lighthouse CI Configuration

I have configured (or will configure) Lighthouse CI in the GitHub Actions pipeline to run on every pull request and block merges if scores fall below thresholds:

```yaml
# .lighthouserc.json (in project root or docs/09)
{
  "ci": {
    "collect": {
      "url": ["http://localhost:4173/"],
      "startServerCommand": "npm run preview",
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.95}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

### 5.2 Performance Test Scenarios

| Scenario | Network | Device | Target LCP | Target FCP |
|---|---|---|---|---|
| Desktop optimal | Fast 4G | Desktop (1920px) | < 1.5s | < 0.8s |
| Desktop standard | 4G | Desktop | < 2.0s | < 1.2s |
| Mobile optimal | 4G | Mobile (375px) | < 2.5s | < 1.5s |
| Mobile constrained | 3G | Mobile (375px) | < 4.0s | < 2.5s |

### 5.3 Image Optimization Checklist

- [ ] All images converted to WebP or AVIF format where possible
- [ ] Hero image: ≤ 200KB at full resolution
- [ ] Doctor photos: ≤ 50KB each (WebP)
- [ ] Facility images: ≤ 150KB each (WebP)
- [ ] `width` and `height` attributes set on all `<img>` elements to prevent CLS
- [ ] `loading="lazy"` applied to all below-fold images
- [ ] `loading="eager"` applied to hero/LCP image

---

## 6. Accessibility Testing

I follow WCAG 2.2 Level AA as the minimum accessibility standard. I conduct both automated and manual tests:

### 6.1 Automated Accessibility Tests

- **axe-core** integrated via browser DevTools (axe browser extension)
- **Lighthouse Accessibility** score ≥ 95 enforced in CI
- **eslint-plugin-jsx-a11y** configured in ESLint for development-time warnings

### 6.2 Manual Accessibility Checklist

| Test | Standard | Status |
|---|---|---|
| All images have meaningful `alt` text | WCAG 1.1.1 | To verify |
| Color contrast ratio ≥ 4.5:1 for text | WCAG 1.4.3 | To verify |
| Color contrast ratio ≥ 3:1 for large text | WCAG 1.4.3 | To verify |
| Keyboard navigation works for all interactive elements | WCAG 2.1.1 | To verify |
| Focus indicator visible on all focusable elements | WCAG 2.4.7 | To verify |
| No keyboard trap | WCAG 2.1.2 | To verify |
| Page has descriptive `<title>` | WCAG 2.4.2 | To verify |
| All form inputs have associated `<label>` | WCAG 1.3.1 | To verify |
| Error messages clearly identified | WCAG 3.3.1 | To verify |
| Language of page specified (`lang="id"`) | WCAG 3.1.1 | To verify |
| Headings in logical order (h1→h2→h3) | WCAG 1.3.1 | To verify |
| Skip navigation link present | WCAG 2.4.1 | To verify |
| Animation can be paused (Framer Motion) | WCAG 2.2.2 | To verify |
| Reduced motion media query respected | WCAG 2.3.3 | To verify |

---

## 7. Security Testing

### 7.1 Automated Security Checks (CI/CD)

```bash
# Run on every push via GitHub Actions
npm audit --audit-level=high   # Dependency vulnerability scan
npx eslint . --rule '{"security/*": "error"}'  # Security linting
```

### 7.2 Pre-Launch Security Checklist

| Check | Tool | Expected Result | Status |
|---|---|---|---|
| Dependency vulnerabilities | npm audit | 0 critical, 0 high | To verify |
| HTTP security headers | SecurityHeaders.com | Grade A | To configure |
| Content Security Policy (CSP) | Browser DevTools | CSP header present | To configure |
| HTTPS enforcement | Browser | Redirect HTTP → HTTPS | Railway default |
| XSS prevention (form inputs) | Manual test | Scripts sanitized | To verify |
| Sensitive data in console.log | Code review | No secrets logged | To verify |
| Sensitive data in localStorage | Code review | No patient data stored | To verify |
| CORS configuration | Browser DevTools | Correct origins only | To configure |
| Robots.txt configured | `/robots.txt` | Proper directives | To add |
| Admin routes protected | Manual test | 401/403 on unauth access | Phase 2 |

### 7.3 OWASP ZAP Baseline Scan

I will run OWASP ZAP baseline scan before Phase 1 production launch:

```bash
# OWASP ZAP baseline scan command
docker run -t owasp/zap2docker-stable zap-baseline.py \
  -t https://puskesmasbalowerti.example.com \
  -r zap-report.html
```

**Acceptance Criteria:** 0 FAIL items in ZAP report; WARN items reviewed and documented.

---

## 8. Cross-Browser / Device Testing Matrix

| Browser / Device | OS | Version | Priority | Status |
|---|---|---|---|---|
| Chrome | Windows 11 | 120+ | P1 | To test |
| Chrome | Android 13 | 120+ | P1 | To test |
| Safari | macOS Sonoma | 17+ | P1 | To test |
| Safari | iOS 17 | 17+ | P1 | To test |
| Firefox | Windows 11 | 120+ | P2 | To test |
| Edge | Windows 11 | 120+ | P2 | To test |
| Samsung Internet | Android | 23+ | P2 | To test |
| Chrome | macOS | 120+ | P2 | To test |

**Viewport Breakpoints Tested:**

| Breakpoint | Width | Device Example |
|---|---|---|
| xs | 320px | iPhone SE |
| sm | 375px | iPhone 14 |
| md | 768px | iPad portrait |
| lg | 1024px | iPad landscape / laptop |
| xl | 1280px | Desktop |
| 2xl | 1920px | Large desktop |

---

## 9. User Acceptance Testing (UAT) Plan

### 9.1 UAT Participants

| Role | Name | Responsibilities |
|---|---|---|
| UAT Lead | dr. Ferdi Iskandar | Final acceptance decision |
| Administrative Staff | TBD | Task-based usability testing |
| Clinical Staff (1–2 doctors) | TBD | Content accuracy review |

### 9.2 UAT Scenarios

| Scenario | User | Task | Expected Outcome |
|---|---|---|---|
| UAT-01 | Public user | Find information about Poli Umum service | Information found in ≤ 3 clicks |
| UAT-02 | Public user | Book an appointment for a specific doctor | Reservation form completed and confirmed |
| UAT-03 | Public user | Find Puskesmas location and get directions | Map loaded, directions link works |
| UAT-04 | Admin staff | View and manage reservations (Phase 2) | Reservations listed and manageable |
| UAT-05 | Doctor | Use diagnostic engine for a common complaint (Phase 2) | Suggestion displayed with ICD-10 code |
| UAT-06 | Admin | Generate a monthly service report (Phase 2) | PDF report downloaded within 30s |

### 9.3 UAT Sign-Off Form Template

```
UAT ACCEPTANCE FORM
Project:    Puskesmas Balowerti Premium Healthcare Web Platform
Phase:      [ ] Phase 1   [ ] Phase 2
Date:       YYYY-MM-DD
UAT Lead:   [Name]

UAT Result: [ ] PASS — All scenarios passed. Approved for production launch.
            [ ] CONDITIONAL PASS — Minor issues logged; approved pending fixes.
            [ ] FAIL — Critical issues found; not approved for production.

Issues Logged: [List issue IDs or "None"]

Signed: ___________________ Date: ___________________
```

---

## 10. Bug Severity Classification

| Severity | Definition | Resolution SLA | Example |
|---|---|---|---|
| **S1 — Critical** | Site is down or completely unusable | Within 4 hours | Blank page, broken deployment |
| **S2 — High** | Major feature broken, no workaround | Within 24 hours | Reservation form not submitting |
| **S3 — Medium** | Feature partially broken, workaround exists | Within 3 days | Map not loading in Firefox |
| **S4 — Low** | Minor visual issue, no functional impact | Next sprint | Minor spacing issue on edge case |
| **S5 — Enhancement** | Nice-to-have improvement | Backlog | Animation timing tweak |

---

## 11. Definition of Done

I consider a feature "Done" only when all of the following criteria are met:

- [ ] Feature is implemented and working on all P1 browsers/devices
- [ ] TypeScript strict mode: no type errors
- [ ] ESLint: no errors (warnings may be documented)
- [ ] No new npm audit critical or high vulnerabilities introduced
- [ ] Lighthouse performance score maintained (≥ 90 desktop, ≥ 80 mobile)
- [ ] Lighthouse accessibility score maintained (≥ 95)
- [ ] All related test cases pass
- [ ] Code reviewed (self-review for single-developer engagement)
- [ ] Feature is deployed to staging/preview environment
- [ ] Relevant documentation updated

---

## 12. QA Acceptance Checklist

### Phase 1 — Go-Live Checklist

- [ ] All 18 sections rendered correctly on desktop and mobile
- [ ] Lighthouse Performance ≥ 90 (desktop) | ≥ 80 (mobile)
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Core Web Vitals: LCP < 2.5s | CLS < 0.1 | INP < 200ms
- [ ] 0 OWASP ZAP FAIL findings
- [ ] 0 npm audit critical vulnerabilities
- [ ] Reservation form submits successfully and data is captured
- [ ] Google Reviews displaying correctly (minimum 3 reviews)
- [ ] Google Maps rendering with correct location marker
- [ ] Site renders correctly on iOS Safari (latest)
- [ ] Site renders correctly on Android Chrome (latest)
- [ ] Privacy notice accessible and compliant with UU PDP
- [ ] All doctor profiles accurate and approved by dr. Ferdi Iskandar
- [ ] All service information accurate and approved
- [ ] SEO title and meta description set correctly
- [ ] robots.txt and sitemap.xml present
- [ ] Custom 404 page exists
- [ ] HTTPS enforced, no mixed content warnings
- [ ] UAT sign-off from dr. Ferdi Iskandar received
- [ ] All P1 test cases: PASS

---

## 13. Sign-Off Block

By signing below, I confirm that the QA and Test Plan defined in this document is approved and will be followed for the Puskesmas Balowerti Premium Healthcare Web Platform.

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Sponsor | dr. Ferdi Iskandar | ___________________ | ___________ |
| Lead Developer / QA Lead | Claudesy | ___________________ | 2026-03-03 |

---

---
*Prepared by: dr. Ferdi Iskandar / Claudesy — Architecture & Built by Claudesy — Date: 2026-03-03*
