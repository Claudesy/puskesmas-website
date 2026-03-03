# 12 — COMMUNICATION PLAN AND STAKEHOLDER ENGAGEMENT
## Architecture & Built by Claudesy

---

| Field | Value |
|---|---|
| **Project** | Puskesmas Balowerti — Premium Healthcare Web Platform |
| **Document** | 12 — Communication Plan and Stakeholder Engagement |
| **Version** | 1.0.0 |
| **Author** | dr. Ferdi Iskandar / Claudesy |
| **Date** | 2026-03-03 |
| **Status** | Active |
| **References** | PMBOK 7th Ed. — Stakeholder Engagement |

---

## Table of Contents

1. [Communication Objectives](#1-communication-objectives)
2. [Stakeholder Communication Matrix](#2-stakeholder-communication-matrix)
3. [Meeting Cadence](#3-meeting-cadence)
4. [Communication Channels](#4-communication-channels)
5. [Status Reporting](#5-status-reporting)
6. [Escalation Path](#6-escalation-path)
7. [Change Communication](#7-change-communication)
8. [Meeting Minutes Template](#8-meeting-minutes-template)
9. [Weekly Status Report Template](#9-weekly-status-report-template)
10. [Sign-Off Block](#10-sign-off-block)

---

## 1. Communication Objectives

I manage project communications to ensure that:
1. All stakeholders receive timely, accurate, and relevant project information.
2. Decisions are made by the appropriate authority at the appropriate time.
3. Risks and issues are surfaced and escalated promptly.
4. The project sponsor (dr. Ferdi Iskandar) maintains full visibility of progress.
5. Content review and approval cycles are managed efficiently.

---

## 2. Stakeholder Communication Matrix

| Stakeholder | Role | Information Needs | Frequency | Format | Channel |
|---|---|---|---|---|---|
| dr. Ferdi Iskandar | Sponsor | Progress, risks, decisions, sign-offs | Bi-weekly | Status report + meeting | WhatsApp + Video call |
| Puskesmas Admin Staff | Content + UAT | Content requests, UAT schedule | As needed | Task list + messages | WhatsApp / In-person |
| Clinical Staff | Profile subjects | Photo + profile submission requests | Once (Phase 1) | Request form | WhatsApp / In-person |
| Claudesy | Lead Developer | All project communications | Daily | Self-managed | All channels |

---

## 3. Meeting Cadence

| Meeting | Frequency | Participants | Duration | Format | Purpose |
|---|---|---|---|---|---|
| Weekly Technical Update | Weekly | Claudesy (async) | — | WhatsApp message | Brief progress + blockers |
| Bi-Weekly Sponsor Review | Every 2 weeks | dr. Ferdi + Claudesy | 30–45 min | Google Meet video call | Milestone review, decisions, sign-offs |
| Content Review Session | As needed | Puskesmas Staff + Claudesy | 1 hour | Video or in-person | Review content before publishing |
| Sprint Retrospective | End of each sprint | Claudesy | 30 min | Self-review + brief note to sponsor | What went well, what to improve |
| Phase Sign-Off Meeting | End of each phase | All stakeholders | 1–2 hours | Formal meeting | UAT results, acceptance, sign-off |
| Incident Review | After P1/P2 incident | Claudesy + dr. Ferdi | 30 min | Video call or WhatsApp | Root cause, prevention |
| Post-Launch Review | 30 days post-launch | dr. Ferdi + Claudesy | 45 min | Video call | KPI review, lessons learned |

---

## 4. Communication Channels

| Channel | Purpose | Users | Response SLA |
|---|---|---|---|
| WhatsApp (primary) | Urgent updates, quick decisions, status | All | < 2 hours (business hours) |
| Email | Formal communications, documents, sign-offs | dr. Ferdi + Claudesy | < 24 hours |
| Google Meet | Scheduled video calls, reviews, demos | dr. Ferdi + Claudesy | Per scheduled time |
| GitHub | Code changes, issues, PR reviews, technical documentation | Claudesy (primary) | Per CI/CD |
| GitHub Issues | Bug reports, feature requests, task tracking | Claudesy + dr. Ferdi | < 48 hours |
| Shared Drive (Google Drive) | Document sharing, video recordings, assets | All | As uploaded |

**Communication Language:**
- **Indonesian (Bahasa Indonesia):** All verbal communications, WhatsApp messages, meeting notes
- **English:** Technical documentation, code comments, GitHub issues

---

## 5. Status Reporting

### 5.1 Weekly Status Update (WhatsApp — Async)

Every Monday morning (or start of work week), I send a brief WhatsApp status update to dr. Ferdi Iskandar containing:

1. **What I completed last week** (2–3 bullet points)
2. **What I'm working on this week** (2–3 bullet points)
3. **Blockers or items needing sponsor input** (if any)
4. **Overall status:** 🟢 On Track | 🟡 At Risk | 🔴 Off Track

### 5.2 Bi-Weekly Sponsor Review Agenda

```
BI-WEEKLY SPONSOR REVIEW — AGENDA TEMPLATE
Project: Puskesmas Balowerti Platform
Date: YYYY-MM-DD | Time: [HH:MM] WIB | Format: Google Meet

1. Progress Update (10 min)
   - Completed since last review
   - Current sprint status
   - Demo of completed features

2. Upcoming Work (5 min)
   - Next sprint plan
   - Content/input needed from sponsor

3. Risks and Issues (5 min)
   - Active risks (from Risk Register)
   - Open issues requiring decisions

4. Schedule and Budget Status (5 min)
   - On track / variance report
   - Any budget concerns

5. Decisions Required (10 min)
   - Items requiring sponsor approval
   - Sign-offs required

6. Any Other Business (5 min)
```

---

## 6. Escalation Path

I manage escalations through the following path. I will escalate within the stated timeframe if resolution is not achieved at the current level:

```
Level 1 — Self Resolution (Claudesy)
  Technical issues, minor blockers
  Timeframe: Same day
        ↓ (if unresolved within 1 day)

Level 2 — Sponsor Decision (dr. Ferdi Iskandar)
  Content disputes, scope questions, budget queries
  Timeframe: 2 business days
        ↓ (if unresolved within 3 days)

Level 3 — Formal Discussion (Scheduled meeting)
  Major disagreements, significant scope changes
  Timeframe: Within 5 business days
        ↓ (if unresolved)

Level 4 — External Mediation / Legal
  Contractual disputes, regulatory questions
  Timeframe: Per legal/regulatory requirements
```

**Escalation Communication Template:**

> "Dear dr. Ferdi, I am escalating the following issue for your decision as it is outside my authority to resolve unilaterally:
>
> **Issue:** [Description]
> **Context:** [Background]
> **Options:** [Option A] vs [Option B]
> **My Recommendation:** [If applicable]
> **Decision needed by:** [Date]
>
> Please confirm your decision at your earliest convenience.
> — Claudesy, Architecture & Built by Claudesy"

---

## 7. Change Communication

When a change request is raised, I communicate it as follows:

1. **Identify the change:** I document it using the Change Request template (Doc 01 §7.2).
2. **Impact assessment:** I assess schedule, budget, and scope impact within 2 business days.
3. **Present to sponsor:** I present the change and impact via WhatsApp summary or scheduled meeting.
4. **Sponsor decision:** dr. Ferdi Iskandar approves, rejects, or defers.
5. **Document and proceed:** I update the project plan and proceed or archive the rejected CR.
6. **Notify affected parties:** If approved, I notify any other stakeholders affected by the change.

---

## 8. Meeting Minutes Template

```
MEETING MINUTES
Project:    Puskesmas Balowerti Premium Healthcare Web Platform
Meeting:    [Meeting type — e.g., Bi-Weekly Sponsor Review]
Date/Time:  YYYY-MM-DD HH:MM WIB
Format:     [Google Meet / In-person]
Recorded:   [ ] Yes  [ ] No

Attendees:
  - [Name, Role]
  - [Name, Role]

Agenda Items Discussed:
1. [Item 1]
   Discussion: [Summary]
   Decision:   [If applicable]
   Action:     [Task] — Owner: [Name] — Due: YYYY-MM-DD

2. [Item 2]
   Discussion: [Summary]
   Decision:   [If applicable]
   Action:     [Task] — Owner: [Name] — Due: YYYY-MM-DD

Open Actions from this Meeting:
  [ ] [Action 1] — [Owner] — Due: YYYY-MM-DD
  [ ] [Action 2] — [Owner] — Due: YYYY-MM-DD

Next Meeting:  YYYY-MM-DD [HH:MM] WIB
Prepared by:   Claudesy — Architecture & Built by Claudesy
Distributed:   [YYYY-MM-DD] via [channel]
```

---

## 9. Weekly Status Report Template

```
WEEKLY STATUS UPDATE
Project:  Puskesmas Balowerti Platform
Week:     YYYY-WW (YYYY-MM-DD to YYYY-MM-DD)
Author:   Claudesy — Architecture & Built by Claudesy

Overall Status: 🟢 On Track | 🟡 At Risk | 🔴 Off Track
Phase:          Phase 1 — Landing Website

─── Completed This Week ────────────────────────────────────────
• [Completed item 1]
• [Completed item 2]
• [Completed item 3]

─── In Progress / This Week's Focus ───────────────────────────
• [Item in progress 1] — [% completion]
• [Item in progress 2] — [% completion]

─── Blockers / Items Needing Sponsor Input ─────────────────────
• [Blocker 1 — if none: "None this week"]

─── Upcoming (Next Week) ───────────────────────────────────────
• [Upcoming item 1]
• [Upcoming item 2]

─── Key Metrics ────────────────────────────────────────────────
• Sprint progress:     [N]% of sprint tasks complete
• Schedule status:     On track / [N] days ahead/behind
• Lighthouse score:    [N] (desktop) | [N] (mobile) — last run [date]
• Open bugs:          [N] Critical | [N] High | [N] Medium | [N] Low

─── Actions Required from Sponsor ─────────────────────────────
• [Action required — if none: "No actions required from sponsor this week"]

───────────────────────────────────────────────────────────────
Claudesy — Architecture & Built by Claudesy
YYYY-MM-DD
```

---

## 10. Sign-Off Block

By signing below, I confirm that I have reviewed and approved the Communication Plan and Stakeholder Engagement strategy.

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Sponsor | dr. Ferdi Iskandar | ___________________ | ___________ |
| Lead Developer | Claudesy | ___________________ | 2026-03-03 |

---

---
*Prepared by: dr. Ferdi Iskandar / Claudesy — Architecture & Built by Claudesy — Date: 2026-03-03*
