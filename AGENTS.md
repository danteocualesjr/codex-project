# Agents

## Cursor Cloud specific instructions

### Overview

Codex is a **frontend-only** React 19 + Vite 7 landing page. There is no backend, database, or Docker. The single service is the Vite dev server.

### Key dependency note

`@tailwindcss/vite` and `tailwindcss` were originally missing from `package.json` but are required by `vite.config.js`. They have been added as devDependencies. If the install was reverted, re-run `npm install @tailwindcss/vite tailwindcss --save-dev`.

### Commands

Standard commands are in `package.json` scripts and `README.md`:

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves on `http://localhost:5173`) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Preview build | `npm run preview` |

### Gotchas

- The dev server binds to `localhost` by default. Use `npm run dev -- --host 0.0.0.0` to expose on all interfaces.
- There are no automated tests configured in this project. Validation is done via lint + build + manual browser testing.
- The standalone `changles.html` viewer is not part of the Vite app — serve it separately with a static file server (e.g. `python3 -m http.server 8000`).
