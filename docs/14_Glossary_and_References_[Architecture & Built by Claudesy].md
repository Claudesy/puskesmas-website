# 14 — GLOSSARY AND REFERENCES
## Architecture & Built by Claudesy

---

| Field | Value |
|---|---|
| **Project** | Puskesmas Balowerti — Premium Healthcare Web Platform |
| **Document** | 14 — Glossary and References |
| **Version** | 1.0.0 |
| **Author** | dr. Ferdi Iskandar / Claudesy |
| **Date** | 2026-03-03 |
| **Status** | Active — Living Document |

---

## Table of Contents

1. [Technical Glossary](#1-technical-glossary)
2. [Healthcare and Clinical Glossary](#2-healthcare-and-clinical-glossary)
3. [Project Management Glossary](#3-project-management-glossary)
4. [Indonesian Regulatory Terms](#4-indonesian-regulatory-terms)
5. [Standards and Frameworks Referenced](#5-standards-and-frameworks-referenced)
6. [Technology References](#6-technology-references)
7. [Regulatory References](#7-regulatory-references)

---

## 1. Technical Glossary

| Term | Definition |
|---|---|
| **API (Application Programming Interface)** | A set of protocols and tools that allows different software applications to communicate with each other. |
| **AVIF** | AV1 Image File Format. A highly efficient image compression format, newer than WebP, providing superior compression for web images. |
| **Bun** | A fast JavaScript runtime and package manager, an alternative to Node.js + npm. Used in this project as an optional faster alternative. |
| **CI/CD** | Continuous Integration / Continuous Deployment. An automated process where code changes are tested and deployed automatically. |
| **CLS (Cumulative Layout Shift)** | A Core Web Vitals metric measuring visual stability. A score < 0.1 is considered good. |
| **Component (React)** | A reusable, self-contained piece of UI built using React. Components receive data via props and render UI elements. |
| **Content Security Policy (CSP)** | An HTTP security header that controls which resources the browser is allowed to load, protecting against XSS attacks. |
| **Core Web Vitals** | A set of metrics defined by Google to measure user experience: LCP, CLS, and INP. |
| **CORS (Cross-Origin Resource Sharing)** | A security mechanism that controls which origins can access resources on a web server. |
| **CSRF (Cross-Site Request Forgery)** | An attack where a malicious site tricks a user's browser into making unauthorized requests. |
| **Docker** | A platform for developing, shipping, and running applications in containers — isolated, portable environments. |
| **DNS (Domain Name System)** | The internet's naming system that translates human-readable domain names (e.g., puskesmasbalowerti.id) into IP addresses. |
| **Drizzle ORM** | A TypeScript-first Object Relational Mapper for interacting with SQL databases in a type-safe way. |
| **ESLint** | A static analysis tool for identifying and fixing JavaScript/TypeScript code quality issues. |
| **FCP (First Contentful Paint)** | A Core Web Vitals metric measuring the time from page load to when any content (text, image) is first rendered. |
| **Framer Motion** | A production-ready React animation library. Used for smooth, GPU-accelerated animations throughout the landing site. |
| **GitHub Actions** | A CI/CD platform integrated with GitHub that automates workflows (testing, building, deploying). |
| **HSTS (HTTP Strict Transport Security)** | An HTTP header that instructs browsers to only connect to the site via HTTPS. |
| **ICD-10** | International Classification of Diseases, 10th Revision. A WHO standard for classifying diseases and health conditions with alphanumeric codes. |
| **INP (Interaction to Next Paint)** | A Core Web Vitals metric measuring responsiveness to user interactions. Target: < 200ms. |
| **JWT (JSON Web Token)** | A compact, self-contained token format used for authentication and authorization in web applications. |
| **LCP (Largest Contentful Paint)** | A Core Web Vitals metric measuring loading performance — the time to render the largest visible content element. Target: < 2.5s. |
| **Lenis** | A smooth scroll library that provides native-like smooth scrolling behavior using JavaScript. |
| **Lighthouse** | An open-source automated auditing tool by Google that tests web pages for performance, accessibility, SEO, and best practices. |
| **LLM (Large Language Model)** | An AI model trained on large text datasets capable of understanding and generating human language. Used for the diagnostic engine and referral system. |
| **MFA (Multi-Factor Authentication)** | A security mechanism requiring users to verify identity using two or more factors (password + OTP code). |
| **Nixpacks** | Railway's build system that automatically detects the programming language and builds Docker containers accordingly. |
| **npm (Node Package Manager)** | The default package manager for Node.js. Used to install and manage JavaScript dependencies. |
| **OWASP** | Open Web Application Security Project. A nonprofit organization focused on web application security. OWASP Top 10 is a standard awareness document for the most critical web security risks. |
| **PaaS (Platform as a Service)** | A cloud computing model where a provider manages the infrastructure, allowing developers to focus on application code. Railway is a PaaS. |
| **PostgreSQL** | A powerful, open-source relational database system. The primary database for Phase 2. |
| **Puppeteer** | A Node.js library that controls a headless Chrome browser, used for generating PDF reports. |
| **Radix UI** | A collection of unstyled, accessible React component primitives. Used as the foundation for this project's component library. |
| **RBAC (Role-Based Access Control)** | A security model where access to system resources is determined by a user's assigned role. |
| **React** | A JavaScript library for building user interfaces, maintained by Meta. Version 19 is used in this project. |
| **React Hook Form** | A performant, flexible forms library for React that minimizes re-renders and provides easy validation integration. |
| **Recharts** | A composable charting library built on React components, used for the analytics dashboard (Phase 2). |
| **Railway** | A cloud Platform as a Service (PaaS) that hosts this application. Provides automatic deployments, SSL, and database services. |
| **Rollback** | The process of reverting to a previous version of the application when a new deployment causes issues. |
| **SEO (Search Engine Optimization)** | Practices to improve the visibility and ranking of a website in search engine results. |
| **shadcn/ui** | A collection of re-usable React components built on Radix UI and styled with Tailwind CSS. |
| **SLA (Service Level Agreement)** | A formal agreement defining the expected level of service, including uptime, response times, and support terms. |
| **SPA (Single Page Application)** | A web application that loads a single HTML page and dynamically updates content, providing a faster user experience. |
| **SSL/TLS (Secure Sockets Layer / Transport Layer Security)** | Cryptographic protocols that provide secure communication over a network. TLS is the current standard; "SSL" is commonly used colloquially. |
| **Tailwind CSS** | A utility-first CSS framework that provides low-level CSS classes to build custom designs without leaving HTML/JSX. |
| **TypeScript** | A typed superset of JavaScript that compiles to JavaScript. Provides static type checking to catch errors at development time. |
| **Vite** | A fast frontend build tool and development server for modern JavaScript applications. Used to build this React application. |
| **WebP** | A modern image format by Google offering superior lossless and lossy compression for web images. |
| **XSS (Cross-Site Scripting)** | A security vulnerability where malicious scripts are injected into web pages viewed by other users. |
| **Zod** | A TypeScript-first schema declaration and validation library. Used for form validation and API input validation. |

---

## 2. Healthcare and Clinical Glossary

| Term | Definition |
|---|---|
| **BPJS Kesehatan** | Badan Penyelenggara Jaminan Sosial Kesehatan. Indonesia's national health insurance program. |
| **Diagnostic Engine** | A software system that assists clinicians in identifying possible diseases based on patient symptoms, signs, and clinical data. |
| **Dinas Kesehatan** | Dinas Kesehatan Kota/Kabupaten. The local government health department responsible for overseeing Puskesmas operations. |
| **IDI** | Ikatan Dokter Indonesia. The Indonesian Medical Association. |
| **KIA/KB** | Kesehatan Ibu dan Anak / Keluarga Berencana. Maternal and Child Health / Family Planning services. |
| **Poli Gigi** | Dental clinic within a Puskesmas. |
| **Poli Umum** | General outpatient clinic within a Puskesmas. |
| **Puskesmas** | Pusat Kesehatan Masyarakat. Government-operated community health center providing primary healthcare services. |
| **Rawat Inap** | Inpatient care — hospitalization services at the Puskesmas. |
| **Rekam Medis** | Medical records. |
| **Rekam Medis Elektronik (RME)** | Electronic Medical Records. Governed by Permenkes No. 24 Tahun 2022. |
| **Referral System** | A formal process in which a primary care provider directs a patient to a specialist or higher-level facility for further diagnosis or treatment. |
| **SATU SEHAT** | Indonesia's national integrated digital health platform managed by the Ministry of Health. |
| **UGD (Unit Gawat Darurat)** | Emergency Unit — 24-hour emergency care services. |
| **USG (Ultrasonografi)** | Ultrasound imaging. A non-invasive diagnostic tool. |

---

## 3. Project Management Glossary

| Term | Definition |
|---|---|
| **Acceptance Criteria** | The conditions that must be met before a deliverable or project phase is formally accepted. |
| **Change Control** | A formal process for managing changes to project scope, schedule, or budget. |
| **Change Request (CR)** | A formal request to change any aspect of the project baseline (scope, schedule, cost). |
| **Critical Path** | The longest sequence of dependent tasks that determines the minimum project duration. |
| **Definition of Done (DoD)** | A shared set of criteria that must be met before work can be considered complete. |
| **Deliverable** | A tangible output produced as a result of project work. |
| **Float / Slack** | The amount of time a task can be delayed without affecting the project's critical path. |
| **Gantt Chart** | A bar chart that visually represents a project schedule, showing tasks, durations, and dependencies. |
| **KPI (Key Performance Indicator)** | A measurable value that indicates how effectively an objective is being achieved. |
| **Milestone** | A significant event or achievement in the project timeline, often used as a checkpoint. |
| **RACI Matrix** | A responsibility assignment matrix defining who is Responsible, Accountable, Consulted, and Informed for each task. |
| **Risk Register** | A log of identified risks, their probability, impact, and mitigation strategies. |
| **Scope Creep** | Uncontrolled expansion of project scope without corresponding adjustments to time, cost, or resources. |
| **Sprint** | A fixed time period (typically 2 weeks) during which a specific set of tasks are planned and completed. |
| **Stakeholder** | Any individual, group, or organization that can affect or be affected by the project. |
| **UAT (User Acceptance Testing)** | A phase of testing where end users verify the software meets their requirements before go-live. |
| **WBS (Work Breakdown Structure)** | A hierarchical decomposition of the total scope of work into manageable components. |
| **Warranty Period** | A period following project completion during which the developer is obligated to fix defects at no additional cost. |

---

## 4. Indonesian Regulatory Terms

| Term | Definition |
|---|---|
| **PDP (Pelindungan Data Pribadi)** | Personal Data Protection. Governed by UU No. 27 Tahun 2022. |
| **Data Pribadi** | Personal data — any information that can directly or indirectly identify a natural person. |
| **Data Pribadi Sensitif** | Sensitive personal data — includes health data, biometrics, genetic data, etc. Requires explicit consent. |
| **Izin Praktik** | Medical practice license required for all clinicians operating in Indonesia. |
| **Permenkes** | Peraturan Menteri Kesehatan. Regulation issued by the Minister of Health of Indonesia. |
| **UU** | Undang-Undang. Indonesian national law (Act of Parliament). |
| **PP** | Peraturan Pemerintah. Government Regulation (subordinate to UU). |

---

## 5. Standards and Frameworks Referenced

| Standard | Full Name | Application in This Project |
|---|---|---|
| **PMBOK 7th Ed.** | A Guide to the Project Management Body of Knowledge | Project management methodology for planning, execution, monitoring, and closing |
| **ISO 21500:2021** | Guidance on Project Management | Supplementary project management framework |
| **ISO/IEC/IEEE 42010:2022** | Systems and Software Engineering — Architecture Description | Framework for Technical Architecture Document (Doc 06) |
| **ISO/IEC/IEEE 29148:2018** | Systems and Software Engineering — Requirements Engineering | Framework for Software Requirements Specification (Doc 07) |
| **IEEE 830-1998** | Recommended Practice for Software Requirements Specifications | Legacy SRS structure reference |
| **ISO/IEC 25010:2023** | Systems and Software Quality Models | Quality characteristics framework for QA (Doc 05) |
| **ISO 31000:2018** | Risk Management — Guidelines | Risk management methodology (Doc 04) |
| **WCAG 2.2** | Web Content Accessibility Guidelines 2.2 | Accessibility standard (Level AA required) |
| **OWASP Top 10 (2025)** | OWASP Top 10 Web Application Security Risks | Security testing checklist (Doc 05 §7) |
| **OWASP Testing Guide v4.2** | OWASP Web Security Testing Guide | Security testing methodology |
| **Core Web Vitals** | Google Core Web Vitals | Performance measurement framework (LCP, CLS, INP) |
| **Schema.org** | Structured Data Vocabulary | SEO structured data (MedicalOrganization schema) |
| **Conventional Commits** | Conventional Commits Specification | Git commit message format (Doc 08 §6.1) |

---

## 6. Technology References

| Technology | Official Documentation | Version Used |
|---|---|---|
| React | https://react.dev | 19.x |
| TypeScript | https://typescriptlang.org | ~5.9 |
| Vite | https://vitejs.dev | 7.x |
| Tailwind CSS | https://tailwindcss.com | 3.4.x |
| Framer Motion | https://motion.dev | 12.x |
| Radix UI | https://radix-ui.com | Latest |
| shadcn/ui | https://ui.shadcn.com | Latest |
| React Hook Form | https://react-hook-form.com | 7.x |
| Zod | https://zod.dev | 4.x |
| Recharts | https://recharts.org | 2.x |
| Lenis | https://lenis.darkroom.engineering | 1.3.x |
| Railway | https://railway.app | Platform |
| GitHub Actions | https://docs.github.com/actions | Latest |
| OWASP ZAP | https://www.zaproxy.org | Latest |
| Lighthouse CI | https://github.com/GoogleChrome/lighthouse-ci | Latest |
| Anthropic Claude | https://docs.anthropic.com | claude-sonnet-4-6 |

---

## 7. Regulatory References

| Regulation | Full Name | Relevance |
|---|---|---|
| **UU No. 36 Tahun 2009** | Undang-Undang tentang Kesehatan | General health law governing healthcare services |
| **UU No. 27 Tahun 2022** | Undang-Undang tentang Pelindungan Data Pribadi | Personal data protection law — governs handling of patient data |
| **UU No. 11 Tahun 2008** | Undang-Undang tentang Informasi dan Transaksi Elektronik (ITE) | Electronic information and transactions law |
| **UU No. 29 Tahun 2004** | Undang-Undang tentang Praktik Kedokteran | Medical practice law — governs clinical disclaimers |
| **PP No. 71 Tahun 2013** | Peraturan Pemerintah tentang Jaminan Pemeliharaan Kesehatan | BPJS health insurance implementation |
| **Permenkes No. 75 Tahun 2014** | Peraturan Menteri Kesehatan tentang Pusat Kesehatan Masyarakat | Puskesmas standards and operational guidelines |
| **Permenkes No. 24 Tahun 2022** | Peraturan Menteri Kesehatan tentang Rekam Medis | Electronic medical records standards |
| **Permenkes No. 44 Tahun 2016** | Peraturan Menteri Kesehatan tentang Manajemen Puskesmas | Puskesmas management guidelines |

---

---
*Prepared by: dr. Ferdi Iskandar / Claudesy — Architecture & Built by Claudesy — Date: 2026-03-03*
