# Repository Guidelines

## Project Structure & Module Organization
- Core app code lives in `src/`.
- Page composition is in `src/App.tsx`, with section-level UI in `src/sections/` (for example `Hero.tsx`, `Services.tsx`, `Reservation.tsx`).
- Reusable primitives and shared UI components are in `src/components/` and `src/components/ui/`.
- Shared hooks and utilities are in `src/hooks/` and `src/lib/`.
- Static assets and runtime content are in `public/` (`public/images/`, `public/data/google-reviews.json`).
- Utility scripts are in `scripts/` (for example Google review sync).

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start local dev server (default `http://localhost:5173`).
- `npm run build`: run TypeScript project build (`tsc -b`) and create production bundle via Vite.
- `npm run preview`: serve the production build locally for final checks.
- `npm run lint`: run ESLint across the project.
- `npm run sync:reviews`: refresh local Google review JSON using configured env values.

## Coding Style & Naming Conventions
- Language stack: TypeScript + React (ES modules).
- Follow ESLint flat config in `eslint.config.js` (TypeScript ESLint + React Hooks + React Refresh rules).
- Use 2-space indentation and keep components focused and composable.
- Component files use `PascalCase` (`PatientFlow.tsx`), hooks use `camelCase` with `use` prefix (`useSmoothImage.ts`), helpers use `camelCase`.
- Prefer Tailwind utility classes and existing UI primitives before adding new styling patterns.

## Testing Guidelines
- No dedicated automated test command is currently defined in `package.json`.
- Minimum quality gate for every change: `npm run lint` and `npm run build` must pass.
- For UI changes, verify behavior in `npm run dev` and `npm run preview` before opening a PR.

## Commit & Pull Request Guidelines
- Follow the existing history style: Conventional Commit-like messages such as `feat(reservation): ...` and `fix: ...`.
- Keep commits scoped to one logical change.
- PRs should include:
  - Clear summary of user-facing and technical changes
  - Linked issue/task when available
  - Screenshots or short video for UI changes
  - Notes on env/config updates (if any)

## Security & Configuration Tips
- Copy from `.env.example`; never commit secrets.
- Treat `public/data/google-reviews.json` as generated content and review diffs before merge.
