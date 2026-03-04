# AGENTS.md

## Cursor Cloud specific instructions

This is a **static React SPA** (no backend, no database, no Docker). All commands are documented in `CLAUDE.md` and `README.md`.

### Quick reference

| Action | Command |
|---|---|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 5173) |
| Lint | `npm run lint` |
| Build | `npm run build` (`tsc -b && vite build`) |
| Preview prod | `npm run preview` |

### Gotchas

- **Missing `src/config/site.ts`**: The latest commit references `@/config/site` but the file was not committed upstream. The update script creates it automatically. If it disappears (e.g. after a rebase), re-run the update script or create it manually — see the existing imports in `Hero.tsx`, `About.tsx`, and `Reservation.tsx` for the expected exports (`buildWhatsAppUrl`, `OPERATIONAL_HOURS`, `QUEUE_INFO`, `SITE_INFO`).
- **Lint has 18 pre-existing errors** (exit code 1). These are in the existing codebase (`react-hooks/set-state-in-effect`, `react-refresh/only-export-components`, `@typescript-eslint/no-explicit-any`, etc.). Do not attempt to fix them unless explicitly asked.
- **PostCSS `@import` warning during build**: The `@import` for Google Fonts in `src/index.css` is placed after `@tailwind` directives. This produces a warning but does **not** break the build. Do not reorder it unless the owner requests it.
- **No test framework**: There are no automated tests configured. Validation is done via `npm run lint` and `npm run build`.
- **No environment variables required for dev**: All `VITE_*` vars and `GOOGLE_MAPS_API_KEY` are optional for local development.
