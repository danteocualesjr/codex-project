# Codex

A modern knowledge platform for developers. Capture, organize, and instantly retrieve everything you know.

## Tech Stack

- **React 19** with Vite 7
- **Tailwind CSS v4** for utility-first styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Viewing the Changles

Changles are displayed via a single-page HTML viewer that reads from `changles.json`.

### Option 1 — Local file server (recommended)

Any static file server works. For example, with Python:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/changles.html](http://localhost:8000/changles.html) in your browser.

### Option 2 — Live Server (VS Code / Cursor)

If you have the **Live Server** extension installed, right-click `changles.html` and choose **Open with Live Server**.

### Option 3 — Open directly

You can open `changles.html` directly in a browser, though some browsers block `fetch` for `file://` URLs. If the changles don't load, use one of the server options above.

## Adding New Changles

Edit `changles.json` and add entries to the appropriate version block. Each entry has a `type` and a `description`:

```json
{
  "type": "added",
  "description": "Describe what was added"
}
```

Supported types: **added**, **changed**, **fixed**, **removed**.

To create a new version, add a new object at the top of the array:

```json
{
  "version": "0.3.0",
  "date": "2026-03-01",
  "entries": [
    { "type": "fixed", "description": "Resolved a bug" }
  ]
}
```

## Project Structure

```
src/
  components/
    Navbar.jsx       — Sticky navigation with mobile menu
    Hero.jsx         — Hero section with animated dashboard preview
    Features.jsx     — Feature cards grid
    HowItWorks.jsx   — Three-step workflow section
    Stats.jsx        — Key metrics banner
    Pricing.jsx      — Pricing tiers
    CTA.jsx          — Call-to-action section
    Footer.jsx       — Site footer with links
  App.jsx            — Main app layout
  main.jsx           — Entry point
  index.css          — Tailwind imports and theme config
changles.html        — Changles viewer (open this in a browser)
changles.json        — Changles data
```
