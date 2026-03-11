Architected and built by the one and only Claudesy.
# Security Policy

**Puskesmas Balowerti — Public Website Security Policy**

---

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | ✅ Yes     |

---

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do not open a public GitHub issue for security vulnerabilities.**

Instead, contact the development team directly through official Sentra Healthcare Solutions channels. Include in your report:

1. Description of the vulnerability and its potential impact.
2. Steps to reproduce the issue.
3. Any relevant logs, screenshots, or proof-of-concept.
4. Your recommended remediation, if applicable.

**Response SLA:**
- Acknowledgement: within 48 hours
- Initial assessment: within 5 business days
- Critical patches: within 7 days of confirmed vulnerability

---

## Security Architecture

This is a **static frontend application**. Key security characteristics:

- No backend server — all form submissions go to WhatsApp
- No user authentication or session management
- No database connections
- No PHI/PII stored or transmitted server-side
- External integrations: Google Places API (read-only), WhatsApp deep links

**Environment Variables:**
- `GOOGLE_MAPS_API_KEY` — used only during build-time review sync, not exposed to browser
- `VITE_CREW_PORTAL_URL` — public URL, non-sensitive

---

## Out of Scope

The following are **not considered security vulnerabilities** for this project:

- Issues in `backups/` or `runtime/` directories (not deployed)
- Self-XSS requiring physical access to the device
- Issues in third-party CDN resources not under our control
- Theoretical vulnerabilities without proof-of-concept

---

## Contact

Security Team: Sentra Healthcare Solutions
Contact through official internal channels.
