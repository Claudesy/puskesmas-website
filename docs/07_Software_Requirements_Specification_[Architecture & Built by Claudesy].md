# 07 — SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
## Architecture & Built by Claudesy

---

| Field | Value |
|---|---|
| **Project** | Puskesmas Balowerti — Premium Healthcare Web Platform |
| **Document** | 07 — Software Requirements Specification |
| **Version** | 1.0.0 |
| **Author** | dr. Ferdi Iskandar / Claudesy |
| **Date** | 2026-03-03 |
| **Status** | Active |
| **References** | IEEE 830 / ISO/IEC/IEEE 29148:2018 · UU No. 36/2009 · Permenkes 75/2014 |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [User Classes and Characteristics](#3-user-classes-and-characteristics)
4. [Functional Requirements — Phase 1 (Landing Site)](#4-functional-requirements--phase-1-landing-site)
5. [Functional Requirements — Phase 2 (Dashboard + AI)](#5-functional-requirements--phase-2-dashboard--ai)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Use Cases](#7-use-cases)
8. [Interface Requirements](#8-interface-requirements)
9. [Data Requirements](#9-data-requirements)
10. [Regulatory & Compliance Requirements](#10-regulatory--compliance-requirements)
11. [Assumptions and Dependencies](#11-assumptions-and-dependencies)
12. [Requirements Traceability Matrix](#12-requirements-traceability-matrix)
13. [Sign-Off Block](#13-sign-off-block)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) defines the functional and non-functional requirements for the **Puskesmas Balowerti Premium Healthcare Web Platform**. I have authored this document to serve as the authoritative reference for all design, development, testing, and acceptance activities. It follows the IEEE 830 / ISO/IEC/IEEE 29148:2018 standard structure.

### 1.2 Scope

This SRS covers:
- **Phase 1:** Public-facing interactive landing website for Puskesmas Balowerti
- **Phase 2:** Healthcare management dashboard, auto-report generator, diagnostic engine, and AI-powered referral system

This SRS does NOT cover: EMR integration with SATU SEHAT, pharmacy management, LIS, or mobile native applications.

### 1.3 Definitions, Acronyms, Abbreviations

| Term | Definition |
|---|---|
| SPA | Single Page Application |
| RBAC | Role-Based Access Control |
| ICD-10 | International Classification of Diseases, 10th Revision |
| UAT | User Acceptance Testing |
| LCP | Largest Contentful Paint |
| WCAG | Web Content Accessibility Guidelines |
| PDP | Pelindungan Data Pribadi (Indonesian Personal Data Protection Law) |
| Puskesmas | Pusat Kesehatan Masyarakat (Community Health Center) |
| Poli | Polyclinic / outpatient clinic unit |

### 1.4 References

- IEEE Std 830-1998 (Software Requirements Specifications)
- ISO/IEC/IEEE 29148:2018 (Systems and Software Engineering — Requirements Engineering)
- UU No. 36 Tahun 2009 (Undang-Undang Kesehatan)
- Permenkes No. 75 Tahun 2014 (Puskesmas)
- UU No. 27 Tahun 2022 (Pelindungan Data Pribadi)
- Permenkes No. 24 Tahun 2022 (Rekam Medis Elektronik)
- WCAG 2.2 (Web Content Accessibility Guidelines)

---

## 2. Overall Description

### 2.1 Product Perspective

The Puskesmas Balowerti platform is a standalone web application. It does not currently integrate with external hospital information systems (SATU SEHAT integration is a future phase). It integrates with:
- Google Maps Platform (location display)
- Google Places API (reviews sync)
- Anthropic Claude API (Phase 2 AI features)

### 2.2 Product Functions Summary

**Phase 1:**
- Display comprehensive health service information
- Show doctor profiles and availability
- Display facility information with imagery
- Enable online appointment reservation
- Show patient Google reviews
- Display location and directions
- Provide AI-powered chat assistance

**Phase 2:**
- Healthcare staff dashboard
- Patient queue management
- Service utilization analytics
- Automated report generation (PDF/XLSX)
- AI-assisted diagnostic suggestion
- AI-powered referral recommendation

### 2.3 Constraints

1. The system must be web-based (browser-accessible, no mobile app required).
2. The system must operate within Railway platform constraints.
3. Patient data must comply with UU PDP No. 27/2022.
4. Clinical AI features must position as "decision support only" per Indonesian medical practice law.

---

## 3. User Classes and Characteristics

| User Class | Description | Technical Level | Frequency of Use |
|---|---|---|---|
| **Public Visitor** | General citizens seeking health info, booking appointments | Low | Occasional |
| **Patient** | Individuals booking or managing appointments | Low | Occasional |
| **Reception Staff** | Manages reservations, queues, patient registration | Medium | Daily |
| **Nurse** | Views patient queue, accesses basic clinical info | Medium | Daily |
| **Doctor** | Uses diagnostic engine, makes referral decisions | Medium | Daily |
| **Admin / Manager** | Generates reports, manages staff access, views analytics | Medium-High | Weekly |
| **System Administrator** | Manages platform configuration, deployments | High | As needed |

---

## 4. Functional Requirements — Phase 1 (Landing Site)

Requirements are labeled: **FR** = Functional Requirement | **Priority:** M=Must Have, S=Should Have, C=Could Have

### 4.1 Navigation

| ID | Requirement | Priority |
|---|---|---|
| FR-NAV-01 | I shall provide a sticky navigation bar visible at all viewport widths | M |
| FR-NAV-02 | The navigation shall include links to all major sections: Home, About, Services, Doctors, Facilities, Reservasi, Lokasi | M |
| FR-NAV-03 | On mobile viewports (< 768px), navigation shall collapse to a hamburger menu | M |
| FR-NAV-04 | Clicking a navigation link shall smooth-scroll to the target section | M |
| FR-NAV-05 | The active section shall be highlighted in the navigation during scroll | S |
| FR-NAV-06 | Navigation shall be fully keyboard-accessible with visible focus indicators | M |

### 4.2 Hero Section

| ID | Requirement | Priority |
|---|---|---|
| FR-HERO-01 | The hero section shall display the Puskesmas name, tagline, and primary call-to-action | M |
| FR-HERO-02 | The hero shall feature an animated entry using Framer Motion | S |
| FR-HERO-03 | The primary CTA shall link to the Reservation section | M |
| FR-HERO-04 | The hero image shall be the Largest Contentful Paint element and load within 2.5 seconds | M |
| FR-HERO-05 | The hero shall display operating hours or a key highlight | S |

### 4.3 Services

| ID | Requirement | Priority |
|---|---|---|
| FR-SVC-01 | The system shall display all healthcare services offered by Puskesmas Balowerti | M |
| FR-SVC-02 | Each service shall include: name, brief description, and icon or image | M |
| FR-SVC-03 | Services shall include at minimum: Poli Umum, Poli Gigi, KIA/KB, Rawat Inap, UGD 24 Jam, USG | M |
| FR-SVC-04 | Services shall be displayed in a responsive card or grid layout | M |

### 4.4 Doctors

| ID | Requirement | Priority |
|---|---|---|
| FR-DOC-01 | The system shall display profiles for all active doctors at Puskesmas Balowerti | M |
| FR-DOC-02 | Each doctor profile shall include: name, specialization, photo, and schedule | M |
| FR-DOC-03 | Doctor profiles shall be provided and approved by dr. Ferdi Iskandar | M |
| FR-DOC-04 | Doctor photos shall be optimized (WebP, < 50KB each) | M |

### 4.5 Facilities

| ID | Requirement | Priority |
|---|---|---|
| FR-FAC-01 | The system shall display facility images and descriptions | M |
| FR-FAC-02 | Facilities section shall be visually premium with high-quality imagery | M |
| FR-FAC-03 | A gallery or carousel format shall be used for multiple facility images | S |

### 4.6 Testimonials / Google Reviews

| ID | Requirement | Priority |
|---|---|---|
| FR-TEST-01 | The system shall display patient reviews sourced from Google Reviews | M |
| FR-TEST-02 | Reviews shall be automatically synced via the `sync-google-reviews.mjs` script | M |
| FR-TEST-03 | Each review shall display: reviewer name, rating (stars), review text, date | M |
| FR-TEST-04 | Reviews shall be displayed in an auto-advancing carousel | S |
| FR-TEST-05 | The carousel shall be operable by keyboard and assistive technology | M |

### 4.7 Reservation / Appointment Booking

| ID | Requirement | Priority |
|---|---|---|
| FR-RES-01 | The system shall provide an online appointment reservation form | M |
| FR-RES-02 | The form shall collect: full name, phone number, service type, preferred date, optional notes | M |
| FR-RES-03 | All form fields shall be validated using Zod schema before submission | M |
| FR-RES-04 | The form shall display inline, real-time validation error messages in Indonesian | M |
| FR-RES-05 | On successful submission, the user shall receive a confirmation message | M |
| FR-RES-06 | The form shall not submit without all required fields being valid | M |
| FR-RES-07 | Phone number field shall accept Indonesian mobile number formats (08xx, +628xx) | M |
| FR-RES-08 | The submission shall be protected against XSS and injection attacks | M |

### 4.8 Location & Map

| ID | Requirement | Priority |
|---|---|---|
| FR-LOC-01 | The system shall display an interactive Google Map centered on Puskesmas Balowerti | M |
| FR-LOC-02 | The map shall include a marker for the Puskesmas location | M |
| FR-LOC-03 | A "Get Directions" link shall open Google Maps navigation in a new tab | M |
| FR-LOC-04 | The address, operating hours, and contact number shall be displayed alongside the map | M |

### 4.9 AI Chatbox (LuxuryChatbox)

| ID | Requirement | Priority |
|---|---|---|
| FR-CHAT-01 | A floating AI-powered chatbox shall be available on all pages | S |
| FR-CHAT-02 | The chatbox shall answer common questions about Puskesmas services and hours | S |
| FR-CHAT-03 | The chatbox shall display a clear disclaimer that it is not a medical advice tool | M |
| FR-CHAT-04 | The chatbox shall be closeable and minimizable | S |
| FR-CHAT-05 | The chatbox shall be keyboard accessible | M |

### 4.10 SEO & Metadata

| ID | Requirement | Priority |
|---|---|---|
| FR-SEO-01 | Every page shall have a descriptive `<title>` tag | M |
| FR-SEO-02 | Meta description shall be present and relevant | M |
| FR-SEO-03 | Open Graph tags shall be set for social media sharing | S |
| FR-SEO-04 | Structured data (Schema.org MedicalOrganization) shall be implemented | S |
| FR-SEO-05 | A `sitemap.xml` and `robots.txt` shall be present | M |

---

## 5. Functional Requirements — Phase 2 (Dashboard + AI)

### 5.1 Authentication & Authorization

| ID | Requirement | Priority |
|---|---|---|
| FR-AUTH-01 | The system shall implement username/password authentication for staff | M |
| FR-AUTH-02 | The system shall implement MFA (TOTP or SMS) for all staff accounts | M |
| FR-AUTH-03 | The system shall implement RBAC with roles: Admin, Doctor, Nurse, Reception | M |
| FR-AUTH-04 | Sessions shall expire after 30 minutes of inactivity | M |
| FR-AUTH-05 | The system shall lock accounts after 5 consecutive failed login attempts | M |
| FR-AUTH-06 | All authentication events shall be logged with timestamp and IP address | M |

### 5.2 Patient Queue Management

| ID | Requirement | Priority |
|---|---|---|
| FR-QUE-01 | Reception staff shall register walk-in and online patients into a daily queue | M |
| FR-QUE-02 | The queue shall display patient name, registration time, and assigned poli | M |
| FR-QUE-03 | Doctors and nurses shall see the current queue for their poli in real-time | M |
| FR-QUE-04 | Queue status shall update to: Waiting → In Progress → Complete | M |

### 5.3 Analytics Dashboard

| ID | Requirement | Priority |
|---|---|---|
| FR-ANA-01 | The dashboard shall display monthly patient visit counts by service type | M |
| FR-ANA-02 | Charts shall be rendered using Recharts | M |
| FR-ANA-03 | Dashboard shall show: daily visits, top 10 diagnoses, referral rate, poli utilization | M |
| FR-ANA-04 | Data shall be filterable by date range | S |

### 5.4 Auto-Report Generator

| ID | Requirement | Priority |
|---|---|---|
| FR-REP-01 | The system shall generate a monthly service utilization report | M |
| FR-REP-02 | Reports shall be exportable as PDF and XLSX | M |
| FR-REP-03 | Reports shall be generated within 30 seconds | M |
| FR-REP-04 | Reports shall include Puskesmas branding (logo, name, date) | M |
| FR-REP-05 | Generated reports shall be stored and retrievable for 12 months | M |

### 5.5 Diagnostic Engine

| ID | Requirement | Priority |
|---|---|---|
| FR-DIAG-01 | The system shall suggest differential diagnoses based on patient complaints and vitals | M |
| FR-DIAG-02 | All suggestions shall include ICD-10 codes | M |
| FR-DIAG-03 | The system shall display a confidence level for each suggestion | M |
| FR-DIAG-04 | A clear disclaimer shall state: "Decision support only — not a diagnostic device" | M |
| FR-DIAG-05 | The clinician's final diagnosis shall override all system suggestions | M |
| FR-DIAG-06 | All diagnostic interactions shall be logged to an audit trail | M |

### 5.6 AI-Powered Referral System

| ID | Requirement | Priority |
|---|---|---|
| FR-REF-01 | The system shall provide referral recommendations based on diagnosis and patient profile | M |
| FR-REF-02 | Recommendations shall specify: specialist type, urgency level, supporting rationale | M |
| FR-REF-03 | All referral recommendations shall be generated by Claude AI (claude-sonnet-4-6) | M |
| FR-REF-04 | The clinician must explicitly accept, modify, or reject each recommendation | M |
| FR-REF-05 | A complete audit log of all referral recommendations and decisions shall be maintained | M |
| FR-REF-06 | The system shall not generate a referral document automatically; doctor action is required | M |

---

## 6. Non-Functional Requirements

| ID | Category | Requirement | Metric |
|---|---|---|---|
| NFR-01 | Performance | Page load (desktop, 4G) | LCP < 2.5s |
| NFR-02 | Performance | Page load (mobile, 3G) | LCP < 4.0s |
| NFR-03 | Performance | Lighthouse Performance | ≥ 90 desktop, ≥ 80 mobile |
| NFR-04 | Availability | Production uptime | ≥ 99.5% monthly |
| NFR-05 | Security | OWASP Top 10 compliance | 0 Critical, 0 High vulnerabilities |
| NFR-06 | Accessibility | WCAG compliance | 2.2 Level AA |
| NFR-07 | Compatibility | Browser support | Evergreen Chrome, Firefox, Safari, Edge |
| NFR-08 | Maintainability | Code quality | TypeScript strict mode, ESLint clean |
| NFR-09 | Scalability | Concurrent users (Phase 1) | ≥ 500 concurrent |
| NFR-10 | Scalability | Concurrent users (Phase 2) | ≥ 200 concurrent (dashboard) |
| NFR-11 | Data Privacy | PDP Law compliance | UU 27/2022 compliant |
| NFR-12 | Internationalization | Primary language | Indonesian (Bahasa Indonesia) |
| NFR-13 | Response Time | API response (Phase 2) | < 500ms for 95th percentile |
| NFR-14 | Report Generation | PDF/XLSX generation | < 30 seconds |
| NFR-15 | Session Security | Idle session timeout | 30 minutes (Phase 2) |

---

## 7. Use Cases

### UC-01: Public User Views Doctor Schedule

**Actor:** Public Visitor
**Precondition:** Site is live and accessible
**Main Flow:**
1. I navigate to the Puskesmas Balowerti website.
2. I click "Dokter" in the navigation.
3. The system smooth-scrolls to the Doctors section.
4. I see a list of doctor profiles with names, specializations, photos, and schedules.
5. I select a doctor to view their availability.

**Post-condition:** I have the information I need to plan my visit.
**Alternate Flow:** Doctor profile data not loaded → placeholder/skeleton shown with contact information for direct inquiry.

---

### UC-02: Patient Books an Appointment

**Actor:** Patient
**Precondition:** Site is live; reservation form is functional
**Main Flow:**
1. I navigate to the Reservation section (via navigation or CTA button).
2. I fill in my full name, phone number, desired service (Poli), preferred date, and optional notes.
3. The system validates each field in real-time using Zod.
4. I submit the form.
5. The system confirms my submission with a success message and reference number.
6. The admin receives a notification of the new reservation.

**Post-condition:** Reservation is recorded; patient expects to be contacted for confirmation.
**Alternate Flow A:** Validation fails → inline error messages guide the patient to correct inputs.
**Alternate Flow B:** Network error on submission → error message with retry button.

---

### UC-03: Doctor Uses Diagnostic Engine (Phase 2)

**Actor:** Doctor
**Precondition:** Doctor is logged into the dashboard
**Main Flow:**
1. I select a patient from the active queue.
2. I navigate to the Diagnostic Engine module.
3. I enter the patient's chief complaint, vital signs, and relevant history.
4. The system queries the Claude AI API and ICD-10 database.
5. The system displays differential diagnoses ranked by confidence with ICD-10 codes.
6. I review the suggestions and select or modify the diagnosis.
7. I document my final diagnosis; the system records it to the patient record.

**Post-condition:** Diagnosis documented; audit log updated.
**Alternate Flow:** AI API unavailable → rule-based suggestions only; AI features degrade gracefully.
**Constraint:** System displays disclaimer: "Ini adalah alat bantu diagnosis. Keputusan akhir ada pada dokter."

---

### UC-04: Admin Generates Monthly Report (Phase 2)

**Actor:** Admin / Manager
**Precondition:** Admin is logged in; month has completed
**Main Flow:**
1. I navigate to the Reports module.
2. I select "Monthly Report" and choose the target month.
3. I click "Generate Report."
4. The system queries the database, aggregates data, and renders the report template.
5. Within 30 seconds, the report is ready.
6. I download the report as PDF or XLSX.

**Post-condition:** Report saved to storage; download link provided.

---

## 8. Interface Requirements

### 8.1 User Interface Requirements

| Requirement | Description |
|---|---|
| Responsive Design | Site must render correctly from 320px (mobile) to 2560px (large desktop) |
| Premium Aesthetic | Design must reflect medical professionalism and premium brand standards |
| Indonesian Language | All public-facing content in Bahasa Indonesia |
| Branding | Puskesmas Balowerti logo, Kediri city identity, IDI logo visible per brand guidelines |
| Dark/Light Mode | next-themes integration for theme preference |
| Loading States | Skeleton loaders or spinners for async content |
| Error States | Friendly Indonesian-language error messages for all error states |

### 8.2 Hardware Interface Requirements

- No proprietary hardware required.
- The application runs in a standard web browser on any device with internet connectivity.

### 8.3 Software Interface Requirements

| Interface | Protocol | Format | Notes |
|---|---|---|---|
| Google Maps | HTTPS / REST | JSON | iframe embed or JS API |
| Google Places | HTTPS / REST | JSON | Via Node.js sync script |
| Anthropic Claude API | HTTPS / REST | JSON | Phase 2; claude-sonnet-4-6 |
| PostgreSQL | TCP (Railway internal) | SQL | Phase 2 |

### 8.4 Communication Interface Requirements

- All external communications over HTTPS (TLS 1.2+)
- Railway provides automatic SSL/TLS termination
- API keys stored as Railway environment variables (never in source code)

---

## 9. Data Requirements

### 9.1 Phase 1 — Data Entities

| Entity | Type | Storage | Sensitivity |
|---|---|---|---|
| Google Reviews | Static JSON | `public/data/google-reviews.json` | Public |
| Doctor Profiles | Static JSON / hardcoded | Component props | Public |
| Service Descriptions | Static content | Component props | Public |
| Reservation Submissions | Form data | TBD (email / Phase 2 DB) | Personal Data |
| Google Maps API Key | Secret | Railway env var | Secret |

### 9.2 Phase 2 — Data Entities

| Entity | Attributes | Privacy Level | Retention |
|---|---|---|---|
| Patient | name, dob, phone, address, BPJS number | Personal Data (PDP) | 5 years per Permenkes |
| Reservation | patient_id, service, date, status, notes | Personal Data | 2 years |
| Diagnosis | patient_id, doctor_id, icd10_code, date, notes | Sensitive Personal Data | 5 years |
| Referral | patient_id, doctor_id, recommendation, decision, audit_log | Sensitive Personal Data | 5 years |
| Report | type, date_range, generated_by, file_url | Internal | 1 year |
| User (Staff) | name, email, role, hashed_password, mfa_secret | Confidential | Duration of employment |

---

## 10. Regulatory & Compliance Requirements

| Regulation | Requirement | Implementation |
|---|---|---|
| UU No. 27/2022 (PDP Law) | Consent before collecting personal data | Privacy notice + explicit checkbox on reservation form |
| UU No. 27/2022 (PDP Law) | Data minimization | Only collect name + phone + service for reservations |
| UU No. 27/2022 (PDP Law) | Right to erasure | Admin can delete patient records on request |
| UU No. 36/2009 (Kesehatan) | No unauthorized medical advice | AI chatbox and diagnostic engine include mandatory disclaimers |
| Permenkes 24/2022 (Rekam Medis) | Electronic medical records standards | Phase 2 records meet required fields |
| Permenkes 75/2014 (Puskesmas) | Service information accuracy | All content approved by dr. Ferdi Iskandar |
| WCAG 2.2 AA | Digital accessibility | Verified by axe-core + Lighthouse + manual audit |

---

## 11. Assumptions and Dependencies

### 11.1 Assumptions

1. I assume all content provided by Puskesmas staff is accurate and legally cleared for publication.
2. I assume the Google Maps and Places APIs will remain available on the agreed pricing tier.
3. I assume the Anthropic Claude API (claude-sonnet-4-6) is available for Phase 2 development.
4. I assume patient data volumes will not exceed 10,000 records in the first year (Phase 2 planning).

### 11.2 Dependencies

| Dependency | Required For | Status |
|---|---|---|
| Google Maps API key | FR-LOC-01 through FR-LOC-04 | Active |
| Google Places API key | FR-TEST-01 through FR-TEST-02 | Active |
| Doctor profile photos | FR-DOC-01 through FR-DOC-04 | Awaiting content |
| ICD-10 dataset / API | FR-DIAG-01 through FR-DIAG-06 | Phase 2 — TBD |
| Anthropic API key | FR-REF-01 through FR-REF-06 | Phase 2 — TBD |
| Railway PostgreSQL | All Phase 2 FR | Phase 2 — TBD |

---

## 12. Requirements Traceability Matrix

| Requirement ID | Description | Design Doc | Test Case | Status |
|---|---|---|---|---|
| FR-NAV-01 | Sticky navigation | Doc 06 §4.1 | TC001–TC007 | Implemented |
| FR-RES-01 | Reservation form | Doc 06 §4.7 | TC020–TC027 | Implemented |
| FR-RES-08 | XSS protection | Doc 06 §7.1 | TC026 | Implemented |
| NFR-01 | LCP < 2.5s | Doc 06 §8 | Lighthouse CI | In Progress |
| NFR-05 | OWASP compliance | Doc 05 §7 | OWASP ZAP | In Progress |
| NFR-06 | WCAG 2.2 AA | Doc 05 §6 | axe-core + Manual | In Progress |
| FR-AUTH-01 | Staff authentication | Doc 06 §11.2 | TBD | Phase 2 |
| FR-DIAG-01 | Diagnostic engine | Doc 06 §11.1 | TBD | Phase 2 |
| FR-REF-03 | Claude AI referral | Doc 06 §5.2 | TBD | Phase 2 |
| NFR-11 | PDP Law compliance | Doc 07 §10 | Manual audit | Ongoing |

---

## 13. Sign-Off Block

By signing below, I confirm that I have reviewed and approved the Software Requirements Specification.

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Sponsor / Clinical Authority | dr. Ferdi Iskandar | ___________________ | ___________ |
| Lead Developer / Requirements Author | Claudesy | ___________________ | 2026-03-03 |

---

---
*Prepared by: dr. Ferdi Iskandar / Claudesy — Architecture & Built by Claudesy — Date: 2026-03-03*
