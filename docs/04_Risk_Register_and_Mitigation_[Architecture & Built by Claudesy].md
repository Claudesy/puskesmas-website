# 04 — RISK REGISTER AND MITIGATION
## Architecture & Built by Claudesy

---

| Field | Value |
|---|---|
| **Project** | Puskesmas Balowerti — Premium Healthcare Web Platform |
| **Document** | 04 — Risk Register and Mitigation |
| **Version** | 1.0.0 |
| **Author** | dr. Ferdi Iskandar / Claudesy |
| **Date** | 2026-03-03 |
| **Status** | Active — Living Document |
| **References** | PMBOK 7th Ed. · ISO 31000:2018 · ISO 21500 |

---

## Table of Contents

1. [Risk Management Approach](#1-risk-management-approach)
2. [Probability / Impact Matrix](#2-probability--impact-matrix)
3. [Risk Register](#3-risk-register)
4. [Top 5 Risks — Detailed Mitigation Plans](#4-top-5-risks--detailed-mitigation-plans)
5. [Risk Review Schedule](#5-risk-review-schedule)
6. [Issue Log](#6-issue-log)
7. [Sign-Off Block](#7-sign-off-block)

---

## 1. Risk Management Approach

I manage project risks proactively using a continuous identification, assessment, and mitigation approach aligned with ISO 31000:2018 and PMBOK 7th Edition principles.

**Risk Classification:**
- **Probability**: 1 (Very Low) → 5 (Very High)
- **Impact**: 1 (Negligible) → 5 (Critical)
- **Risk Score**: Probability × Impact (1–25)
- **Risk Level**: Green (1–6) | Yellow (7–12) | Orange (13–18) | Red (19–25)

**Risk Response Strategies:**
- **Avoid** — Eliminate the cause of the risk
- **Mitigate** — Reduce probability or impact
- **Transfer** — Shift impact to another party (e.g., insurance, SLAs)
- **Accept** — Acknowledge and monitor (low-score risks)
- **Exploit** — Turn positive risks into opportunities

---

## 2. Probability / Impact Matrix

```
IMPACT →        1-Negligible  2-Minor     3-Moderate   4-Major    5-Critical
PROBABILITY ↓
5 - Very High   [  5-Yellow ] [ 10-Yellow] [15-Orange ] [20-Red  ] [25-Red   ]
4 - High        [  4-Green  ] [  8-Yellow] [12-Yellow ] [16-Orange] [20-Red  ]
3 - Medium      [  3-Green  ] [  6-Green ] [ 9-Yellow ] [12-Yellow] [15-Orange]
2 - Low         [  2-Green  ] [  4-Green ] [ 6-Green  ] [ 8-Yellow] [10-Yellow]
1 - Very Low    [  1-Green  ] [  2-Green ] [ 3-Green  ] [ 4-Green ] [ 5-Green ]

Legend: Green = Accept/Monitor | Yellow = Mitigate | Orange = Mitigate/Avoid | Red = Avoid/Escalate
```

---

## 3. Risk Register

| ID | Risk Description | Category | Prob (1-5) | Impact (1-5) | Score | Level | Response | Owner | Status |
|---|---|---|:---:|:---:|:---:|---|---|---|---|
| R01 | Scope creep due to new feature requests during development | Scope | 4 | 3 | 12 | Yellow | Mitigate | Claudesy | Active |
| R02 | Regulatory non-compliance with UU PDP No. 27/2022 | Compliance | 2 | 5 | 10 | Yellow | Avoid/Mitigate | dr. Ferdi | Active |
| R03 | Google API quota exceeded — cost overrun or service disruption | Technical | 3 | 3 | 9 | Yellow | Mitigate | Claudesy | Active |
| R04 | Content delivery delays from Puskesmas staff | Schedule | 4 | 3 | 12 | Yellow | Mitigate | dr. Ferdi | Active |
| R05 | Railway platform outage or pricing change | Infrastructure | 2 | 4 | 8 | Yellow | Mitigate/Transfer | Claudesy | Active |
| R06 | Security vulnerability in web application (OWASP Top 10) | Security | 3 | 4 | 12 | Yellow | Mitigate | Claudesy | Active |
| R07 | AI/LLM API returns clinically inaccurate referral recommendations | Clinical | 2 | 5 | 10 | Yellow | Mitigate | dr. Ferdi | Planned |
| R08 | Poor Core Web Vitals / Lighthouse score on mobile devices | Performance | 3 | 3 | 9 | Yellow | Mitigate | Claudesy | Active |
| R09 | Browser compatibility issues (especially Safari on iOS) | Technical | 3 | 2 | 6 | Green | Accept/Monitor | Claudesy | Active |
| R10 | Loss of access to Google Reviews data (API policy change) | Technical | 2 | 2 | 4 | Green | Accept | Claudesy | Active |
| R11 | Project Sponsor unavailability for reviews and approvals | Schedule | 2 | 3 | 6 | Green | Mitigate | dr. Ferdi | Active |
| R12 | Unauthorized access to healthcare management dashboard | Security | 2 | 5 | 10 | Yellow | Mitigate/Avoid | Claudesy | Planned |
| R13 | Data breach involving patient reservation information | Compliance | 1 | 5 | 5 | Green | Mitigate | Claudesy | Active |
| R14 | ICD-10 integration errors causing wrong diagnostic codes | Clinical | 2 | 4 | 8 | Yellow | Mitigate | dr. Ferdi | Planned |
| R15 | Budget overrun in Phase 2 due to AI API costs | Budget | 3 | 3 | 9 | Yellow | Mitigate | dr. Ferdi | Planned |
| R16 | Framer Motion / animation library deprecation or breaking change | Technical | 1 | 3 | 3 | Green | Accept | Claudesy | Active |
| R17 | DNS propagation delays causing launch day disruption | Infrastructure | 2 | 2 | 4 | Green | Accept/Monitor | Claudesy | Active |
| R18 | Low public adoption of online reservation system | Business | 3 | 3 | 9 | Yellow | Mitigate | dr. Ferdi | Post-launch |
| R19 | Staff resistance to dashboard adoption (Phase 2) | Organizational | 3 | 3 | 9 | Yellow | Mitigate | dr. Ferdi | Planned |
| R20 | Legal challenge to AI diagnostic or referral system | Legal | 1 | 5 | 5 | Green | Mitigate | dr. Ferdi | Planned |

---

## 4. Top 5 Risks — Detailed Mitigation Plans

### R01 — Scope Creep (Score: 12 — Yellow)

**Description:** Additional feature requests from the sponsor or staff are added during development, expanding scope beyond the agreed plan, causing schedule and budget overruns.

**Mitigation Plan:**
1. I have implemented a formal Change Control Process (see Doc 01).
2. I will document and baseline all agreed features before each sprint begins.
3. Any new requests will be evaluated for impact before any work begins.
4. I will present a monthly scope health report to the sponsor.
5. Features not agreed in the baseline will be added to a "Phase 3 Backlog" for future consideration.

**Trigger:** Any verbal or written request for a feature not in the approved WBS.
**Owner:** Claudesy (identification + assessment) | dr. Ferdi Iskandar (approval)

---

### R04 — Content Delivery Delays (Score: 12 — Yellow)

**Description:** Doctor profiles, service descriptions, facility images, and other content required for the landing site are not delivered by Puskesmas staff on time, blocking development.

**Mitigation Plan:**
1. I have prepared a content collection checklist and delivered it to the sponsor at project kickoff.
2. I use placeholder/dummy content during development so sections can be built and tested without waiting for final content.
3. I have agreed a content deadline (1 week before the section's scheduled QA date) with the sponsor.
4. I will follow up on outstanding content weekly.
5. If content is not delivered 5 days before the milestone, I will escalate to dr. Ferdi Iskandar.

**Trigger:** Content not received 5 working days before scheduled integration date.
**Owner:** dr. Ferdi Iskandar (delivery) | Claudesy (tracking)

---

### R06 — Security Vulnerability (Score: 12 — Yellow)

**Description:** The web application contains an OWASP Top 10 vulnerability (XSS, CSRF, injection, misconfigured headers, etc.) that could be exploited, damaging the Puskesmas's reputation and violating patient trust.

**Mitigation Plan:**
1. I apply secure coding practices throughout development (input sanitization, CSP headers, HTTPS-only).
2. I run automated security scanning via GitHub Actions (npm audit, ESLint security plugin).
3. I configure secure HTTP headers via Railway/Vite (X-Frame-Options, CSP, HSTS).
4. I will conduct an OWASP ZAP baseline scan before Phase 1 launch.
5. I will conduct a full penetration test before Phase 2 launch.
6. All form inputs use Zod schema validation to prevent injection.

**Trigger:** Any critical or high finding in OWASP ZAP scan or npm audit.
**Owner:** Claudesy

---

### R07 — AI Referral Clinical Inaccuracy (Score: 10 — Yellow)

**Description:** The AI-powered referral system produces incorrect or misleading clinical referral recommendations, potentially harming patients or creating medico-legal liability.

**Mitigation Plan:**
1. I will implement the AI referral system as a **decision support tool only**, not an autonomous decision-maker. All recommendations must be reviewed and approved by a clinician.
2. I will add clear UI disclaimers: "This recommendation is for clinical support only. Final decision rests with the treating physician."
3. I will establish a clinical validation dataset with dr. Ferdi Iskandar to benchmark AI accuracy before go-live.
4. I will implement a full audit log of all AI recommendations and clinician decisions.
5. The system will refuse to make recommendations outside its trained scope and will escalate to human review.
6. I will implement a feedback loop allowing clinicians to flag incorrect recommendations.

**Trigger:** Any AI recommendation flagged as incorrect by a clinician during UAT or post-launch.
**Owner:** Claudesy (technical) | dr. Ferdi Iskandar (clinical review authority)

---

### R12 — Unauthorized Dashboard Access (Score: 10 — Yellow)

**Description:** An unauthorized person gains access to the healthcare management dashboard, exposing patient data and violating UU PDP No. 27/2022.

**Mitigation Plan:**
1. I will implement robust Role-Based Access Control (RBAC) with distinct roles: Admin, Doctor, Nurse, Reception.
2. I will enforce strong password requirements and implement session timeout (30 minutes inactivity).
3. I will implement MFA (Multi-Factor Authentication) for all dashboard users.
4. I will log all login attempts (successful and failed) with IP addresses.
5. I will implement account lockout after 5 failed login attempts.
6. I will use JWT tokens with short expiry (1 hour) and refresh token rotation.
7. I will never store sensitive patient data in browser localStorage.

**Trigger:** Any unauthorized access attempt detected in logs.
**Owner:** Claudesy

---

## 5. Risk Review Schedule

| Review | Frequency | Participants | Output |
|---|---|---|---|
| Risk Register Review | Bi-weekly | Claudesy | Updated risk register |
| Sponsor Risk Briefing | Monthly | Claudesy + dr. Ferdi | Risk status report |
| Post-Sprint Risk Review | Each sprint end | Claudesy | New/closed risks logged |
| Pre-Launch Risk Assessment | Before each phase launch | Claudesy + dr. Ferdi | Go/No-go decision |

---

## 6. Issue Log

Issues are risks that have materialized. I log them here for tracking and resolution:

| ID | Issue Description | Date Raised | Severity | Owner | Resolution | Date Closed |
|---|---|---|---|---|---|---|
| I01 | [Template: Issue description] | YYYY-MM-DD | High/Med/Low | [Name] | [Resolution steps] | YYYY-MM-DD |
| — | *No issues currently logged* | — | — | — | — | — |

---

## 7. Sign-Off Block

By signing below, I confirm that I have reviewed and approved the Risk Register and Mitigation Plan.

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Sponsor | dr. Ferdi Iskandar | ___________________ | ___________ |
| Lead Developer / Architect | Claudesy | ___________________ | 2026-03-03 |

---

---
*Prepared by: dr. Ferdi Iskandar / Claudesy — Architecture & Built by Claudesy — Date: 2026-03-03*
