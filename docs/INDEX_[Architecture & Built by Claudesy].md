# PROJECT DOSSIER — MASTER INDEX
## Architecture & Built by Claudesy

---

| Field | Value |
|---|---|
| **Project** | Puskesmas Balowerti — Premium Healthcare Web Platform |
| **Version** | 1.0.0 |
| **Author** | dr. Ferdi Iskandar / Claudesy |
| **Date** | 2026-03-03 |
| **Brand** | Architecture & Built by Claudesy |
| **Classification** | Internal / Operational |

---

## Document Manifest

| # | Filename | Format | Purpose | Owner |
|---|---|---|---|---|
| INDEX | `INDEX_[Architecture & Built by Claudesy].md` | MD | This master index and file manifest | dr. Ferdi Iskandar |
| 00 | `00_Project_Overview_[Architecture & Built by Claudesy].md` | MD | Executive summary, objectives, scope, KPIs | dr. Ferdi Iskandar |
| 01 | `01_Project_Governance_and_Roles_[Architecture & Built by Claudesy].md` | MD | RACI matrix, stakeholders, approvals, sign-offs | dr. Ferdi Iskandar |
| 02 | `02_Project_Plan_and_Schedule_[Architecture & Built by Claudesy].md` | MD | Milestones, Gantt sample, critical path | Claudesy |
| 03 | `03_Budget_and_Cost_Estimate_[Architecture & Built by Claudesy].md` | MD | Cost breakdown, contingency planning | dr. Ferdi Iskandar |
| 04 | `04_Risk_Register_and_Mitigation_[Architecture & Built by Claudesy].md` | MD | Risk log, probability/impact matrix | Claudesy |
| 05 | `05_Quality_Assurance_and_Test_Plan_[Architecture & Built by Claudesy].md` | MD | Acceptance criteria, QA processes, test cases | Claudesy |
| 06 | `06_Technical_Architecture_Document_[Architecture & Built by Claudesy].md` | MD | Architecture diagrams, components, NFRs | Claudesy |
| 07 | `07_Software_Requirements_Specification_[Architecture & Built by Claudesy].md` | MD | Use cases, functional & non-functional requirements | Claudesy |
| 08 | `08_Implementation_Scaffold_Readme_[Architecture & Built by Claudesy].md` | MD | Folder structure, repo layout, naming conventions | Claudesy |
| 09 | `09_Code_Scaffold_and_Configuration_[Architecture & Built by Claudesy]/` | DIR | Config files, CI pipeline, Dockerfile, env templates | Claudesy |
| 10 | `10_Deployment_and_Operations_Plan_[Architecture & Built by Claudesy].md` | MD | Deployment checklist, rollback plan, monitoring | Claudesy |
| 11 | `11_Handover_and_Maintenance_Package_[Architecture & Built by Claudesy].md` | MD | Handover checklist, support SLAs, maintenance schedule | dr. Ferdi Iskandar |
| 12 | `12_Communication_Plan_and_Stakeholder_Engagement_[Architecture & Built by Claudesy].md` | MD | Meeting cadence, escalation path | dr. Ferdi Iskandar |
| 13 | `13_Project_Closure_Report_[Architecture & Built by Claudesy].md` | MD | Lessons learned, final acceptance, sign-off forms | dr. Ferdi Iskandar |
| 14 | `14_Glossary_and_References_[Architecture & Built by Claudesy].md` | MD | Terms, standards referenced | Claudesy |

---

## Folder Tree

```
puskesmas-website/
├── docs/
│   ├── INDEX_[Architecture & Built by Claudesy].md           ← You are here
│   ├── 00_Project_Overview_[Architecture & Built by Claudesy].md
│   ├── 01_Project_Governance_and_Roles_[Architecture & Built by Claudesy].md
│   ├── 02_Project_Plan_and_Schedule_[Architecture & Built by Claudesy].md
│   ├── 03_Budget_and_Cost_Estimate_[Architecture & Built by Claudesy].md
│   ├── 04_Risk_Register_and_Mitigation_[Architecture & Built by Claudesy].md
│   ├── 05_Quality_Assurance_and_Test_Plan_[Architecture & Built by Claudesy].md
│   ├── 06_Technical_Architecture_Document_[Architecture & Built by Claudesy].md
│   ├── 07_Software_Requirements_Specification_[Architecture & Built by Claudesy].md
│   ├── 08_Implementation_Scaffold_Readme_[Architecture & Built by Claudesy].md
│   ├── 09_Code_Scaffold_and_Configuration_[Architecture & Built by Claudesy]/
│   │   ├── .env.example
│   │   ├── Dockerfile
│   │   ├── docker-compose.yml
│   │   ├── .gitignore
│   │   ├── railway.toml
│   │   └── .github/
│   │       └── workflows/
│   │           └── ci.yml
│   ├── 10_Deployment_and_Operations_Plan_[Architecture & Built by Claudesy].md
│   ├── 11_Handover_and_Maintenance_Package_[Architecture & Built by Claudesy].md
│   ├── 12_Communication_Plan_and_Stakeholder_Engagement_[Architecture & Built by Claudesy].md
│   ├── 13_Project_Closure_Report_[Architecture & Built by Claudesy].md
│   └── 14_Glossary_and_References_[Architecture & Built by Claudesy].md
├── src/
├── public/
├── scripts/
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── ...
```

---

## Export Commands

Run any of the following to convert this dossier to other formats (requires `pandoc` installed):

```bash
# Export all docs to PDF (requires LaTeX / wkhtmltopdf)
for f in docs/*.md; do
  pandoc "$f" -o "${f%.md}.pdf" --pdf-engine=wkhtmltopdf
done

# Export all docs to DOCX
for f in docs/*.md; do
  pandoc "$f" -o "${f%.md}.docx"
done

# Export single file example
pandoc "docs/00_Project_Overview_[Architecture & Built by Claudesy].md" \
  -o "docs/00_Project_Overview_[Architecture & Built by Claudesy].docx"
```

---

## Compliance References

| Standard | Application |
|---|---|
| PMBOK 7th Edition | Project management framework |
| ISO 21500:2021 | Guidance on project management |
| ISO/IEC/IEEE 42010:2022 | Architecture descriptions |
| IEEE 830 / ISO/IEC/IEEE 29148 | Software requirements |
| UU No. 27 Tahun 2022 (PDP Law) | Indonesian personal data protection |
| UU No. 36 Tahun 2009 | Indonesian Health Law |
| Permenkes No. 75 Tahun 2014 | Puskesmas operational standards |
| WCAG 2.2 AA | Web accessibility |
| OWASP Top 10 (2025) | Web application security |

---

---
*Prepared by: dr. Ferdi Iskandar / Claudesy — Architecture & Built by Claudesy — Date: 2026-03-03*
