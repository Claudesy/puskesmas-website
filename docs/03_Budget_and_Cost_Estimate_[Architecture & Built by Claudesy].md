# 03 — BUDGET AND COST ESTIMATE
## Architecture & Built by Claudesy

---

| Field | Value |
|---|---|
| **Project** | Puskesmas Balowerti — Premium Healthcare Web Platform |
| **Document** | 03 — Budget and Cost Estimate |
| **Version** | 1.0.0 |
| **Author** | dr. Ferdi Iskandar / Claudesy |
| **Date** | 2026-03-03 |
| **Status** | Confidential — Sponsor Review |
| **Currency** | Indonesian Rupiah (IDR) |

---

## Table of Contents

1. [Budget Summary](#1-budget-summary)
2. [Cost Breakdown — Phase 1](#2-cost-breakdown--phase-1)
3. [Cost Breakdown — Phase 2](#3-cost-breakdown--phase-2)
4. [Recurring / Operational Costs](#4-recurring--operational-costs)
5. [Contingency Planning](#5-contingency-planning)
6. [Budget Control & Reporting](#6-budget-control--reporting)
7. [Cost Assumptions](#7-cost-assumptions)
8. [Sign-Off Block](#8-sign-off-block)

---

## 1. Budget Summary

> **Confidentiality Notice:** The specific monetary values in this document are confidential between dr. Ferdi Iskandar and Claudesy. Placeholders are used where exact figures are under negotiation. This document structure is provided for international-standard compliance.

| Category | Phase 1 (IDR) | Phase 2 (IDR) | Recurring/Month (IDR) | Total Estimate (IDR) |
|---|---|---|---|---|
| Development Labor | [CONFIDENTIAL] | [TBD] | — | [TBD] |
| Infrastructure | ~500,000 | ~500,000 | ~1,000,000 | [TBD] |
| Third-Party APIs | ~300,000 | ~500,000 | ~800,000 | [TBD] |
| AI/LLM API Costs | — | [TBD] | [TBD] | [TBD] |
| Domain & SSL | ~150,000 | — | ~150,000/yr | [TBD] |
| Testing Tools | Included | Included | — | — |
| Contingency (15%) | [CALCULATED] | [CALCULATED] | — | [TBD] |
| **Total** | **[TBD]** | **[TBD]** | **~2,000,000+** | **[TBD]** |

---

## 2. Cost Breakdown — Phase 1

| # | Item | Category | Unit | Qty | Unit Cost (IDR) | Total (IDR) | Notes |
|---|---|---|---|---|---|---|---|
| 1.1 | Lead Developer (Claudesy) | Labor | Hour | [N] | [RATE] | [CONFIDENTIAL] | Full-stack + design + docs |
| 1.2 | Railway Starter Plan | Infrastructure | Month | 2 | ~500,000 | ~1,000,000 | Phase 1 duration |
| 1.3 | Google Maps API | API | Month | 2 | ~150,000 | ~300,000 | Estimated usage |
| 1.4 | Google Places API | API | Month | 2 | ~75,000 | ~150,000 | Reviews sync |
| 1.5 | Domain Registration (.id) | Domain | Year | 1 | ~150,000 | ~150,000 | e.g., puskesmasbalowerti.id |
| 1.6 | SSL Certificate | Security | Year | 1 | Included | — | Railway provides free SSL |
| 1.7 | Image/Asset Optimization | Tools | — | — | Included | — | Built into Vite build |
| 1.8 | Lighthouse CI | Testing | — | — | Free | — | GitHub Actions |
| **Phase 1 Subtotal** | | | | | | **[SUBTOTAL]** | |
| **Contingency (15%)** | | | | | | **[15%]** | |
| **Phase 1 TOTAL** | | | | | | **[TOTAL]** | |

---

## 3. Cost Breakdown — Phase 2

| # | Item | Category | Unit | Qty | Unit Cost (IDR) | Total (IDR) | Notes |
|---|---|---|---|---|---|---|---|
| 2.1 | Lead Developer (Claudesy) — Dashboard | Labor | Hour | [N] | [RATE] | [TBD] | Auth, analytics, queue |
| 2.2 | Lead Developer — Report Generator | Labor | Hour | [N] | [RATE] | [TBD] | PDF/XLSX export |
| 2.3 | Lead Developer — Diagnostic Engine | Labor | Hour | [N] | [RATE] | [TBD] | ICD-10 integration |
| 2.4 | Lead Developer — AI Referral System | Labor | Hour | [N] | [RATE] | [TBD] | LLM API integration |
| 2.5 | Railway Pro Plan (upgrade) | Infrastructure | Month | 4 | ~1,000,000 | ~4,000,000 | Estimated |
| 2.6 | AI/LLM API (Claude / OpenAI) | API | Month | 4 | [TBD] | [TBD] | Based on usage volume |
| 2.7 | ICD-10 Database / License | Data | One-time | 1 | [TBD] | [TBD] | WHO free / MOH Indonesia |
| 2.8 | Database (PostgreSQL on Railway) | Infrastructure | Month | 4 | ~200,000 | ~800,000 | Estimated |
| 2.9 | Security Penetration Testing | Security | Engagement | 1 | [TBD] | [TBD] | Pre-launch Phase 2 |
| **Phase 2 Subtotal** | | | | | | **[SUBTOTAL]** | |
| **Contingency (15%)** | | | | | | **[15%]** | |
| **Phase 2 TOTAL** | | | | | | **[TOTAL]** | |

---

## 4. Recurring / Operational Costs

These costs are incurred monthly after launch and must be budgeted for operations:

| Item | Monthly Cost (IDR) | Annual Cost (IDR) | Notes |
|---|---|---|---|
| Railway hosting | ~1,000,000 | ~12,000,000 | Scales with traffic |
| Google Maps API | ~150,000 | ~1,800,000 | Based on monthly calls |
| Google Places API | ~75,000 | ~900,000 | Reviews sync |
| AI/LLM API (Phase 2) | [TBD] | [TBD] | Per-call pricing |
| Domain renewal | ~12,500/mo | ~150,000 | Annual billing |
| Backup storage | Included | — | Railway included |
| Maintenance labor | [TBD] | [TBD] | Per maintenance agreement |
| **Total Monthly Estimate** | **~1,237,500+** | **~14,850,000+** | Pre-Phase 2 AI costs |

---

## 5. Contingency Planning

I have applied a **15% contingency** on all estimated costs to account for:

| Risk Scenario | Potential Cost Impact | Mitigation |
|---|---|---|
| Scope creep (minor features) | +10–20% labor | Change control process |
| API pricing increases (Google) | +5–15% API costs | Monitor and alert at 80% quota |
| AI/LLM API cost overrun | +20–50% AI costs | Usage caps and budgeted limits in API config |
| Timeline extension (Phase 2) | +additional labor months | Buffer weeks in schedule |
| Regulatory compliance additions | +5–10% labor | Early compliance review |
| Infrastructure scaling needs | +50–100% infra costs | Railway auto-scaling monitoring |

**Contingency Release Process:**
1. I identify and document the cost overrun trigger.
2. I prepare a cost impact assessment.
3. I present to dr. Ferdi Iskandar for approval to release contingency funds.
4. Approved contingency usage is recorded in this budget register.

---

## 6. Budget Control & Reporting

### 6.1 Budget Tracking Template

| Month | Planned Spend (IDR) | Actual Spend (IDR) | Variance (IDR) | Notes |
|---|---|---|---|---|
| January 2026 | [TBD] | [TBD] | [TBD] | Setup + Sprint 0–1 |
| February 2026 | [TBD] | [TBD] | [TBD] | Sprint 2–3 |
| March 2026 | [TBD] | [TBD] | [TBD] | QA + Phase 1 Launch |
| April 2026 | [TBD] | [TBD] | [TBD] | Phase 2 Design |
| May 2026 | [TBD] | [TBD] | [TBD] | Dashboard Core |
| June 2026 | [TBD] | [TBD] | [TBD] | AI Features |
| July 2026 | [TBD] | [TBD] | [TBD] | Phase 2 Launch |
| August 2026 | [TBD] | [TBD] | [TBD] | Handover |

### 6.2 Budget Alert Thresholds

| Threshold | Action |
|---|---|
| 70% of phase budget consumed | I will notify sponsor; review remaining scope |
| 85% of phase budget consumed | I will initiate formal budget review meeting |
| 100% of phase budget consumed | I will halt non-critical work; seek sponsor approval for contingency use |
| Contingency > 50% consumed | I will initiate scope reduction or timeline adjustment discussion |

---

## 7. Cost Assumptions

I have prepared this budget estimate under the following assumptions:

1. Labor rates are per the agreed professional services agreement between Claudesy and dr. Ferdi Iskandar.
2. API costs are estimated based on projected traffic: ≤ 10,000 map loads/month, ≤ 1,000 Places API calls/month.
3. Railway pricing is based on the current published Railway pricing as of March 2026.
4. AI/LLM API costs (Phase 2) are highly variable and will be re-estimated once usage patterns from Phase 1 are known.
5. The ICD-10 code database from WHO is available free of charge; only integration labor is costed.
6. No hardware procurement is required for this project.
7. Tax treatment (PPN) is to be confirmed per the professional services agreement.

---

## 8. Sign-Off Block

By signing below, I confirm that I have reviewed and approved the budget and cost estimates defined in this document. I authorize expenditure up to the approved budget amounts for each phase.

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Sponsor (Budget Authority) | dr. Ferdi Iskandar | ___________________ | ___________ |
| Lead Developer | Claudesy | ___________________ | 2026-03-03 |

---

---
*Prepared by: dr. Ferdi Iskandar / Claudesy — Architecture & Built by Claudesy — Date: 2026-03-03*
