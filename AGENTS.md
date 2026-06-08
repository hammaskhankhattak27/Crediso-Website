# AGENTS.md

Entry point for **any** AI agent or developer working in this repo (Codex, Cursor, Claude Code, etc.). Claude Code users: [CLAUDE.md](CLAUDE.md) holds the same expectations. Read this first, then the doc it points you to.

> ⚠️ **The design system is binding.** [docs/design.md](docs/design.md) is the single source of truth for every visual and structural decision. Read it before adding or editing any page, section, or component. Consistency with the existing pages beats novelty, always.

## What this is

**Crediso Redesign** — a German-language marketing site (a digital agency from Graz, Austria). Multi-page, built with React 18 + TypeScript, Vite 6, Tailwind CSS 3, React Router 6.

## Quick facts

| | |
|---|---|
| Framework | React 18 + TypeScript (function components only) |
| Build | Vite 6 |
| Styling | Tailwind 3 — tokens in [tailwind.config.ts](tailwind.config.ts), recipes in [src/index.css](src/index.css) |
| Routing | `react-router-dom` 6 — routes derived from [src/lib/site.ts](src/lib/site.ts) |
| Class merge | `cn()` from [src/lib/utils.ts](src/lib/utils.ts) (`clsx` + `tailwind-merge`) |
| Imports | always the `@/` alias — never `../../` |
| Content language | **German** (incl. `:innen` forms, `ß`, umlauts) — UI labels, `alt`, `aria-label` |
| Icons | inline SVG components, no icon libraries |

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc --noEmit && vite build  ← run this to verify a change compiles
npm run preview  # preview the production build
npm run lint     # eslint (binary may not be installed locally; build is the reliable gate)
```

## The golden rules (non-negotiable)

1. **No raw values that already exist as tokens.** Use `bg-mint`, `text-ink-soft`, `rounded-card`, `.h-display` — never `#BFE0CC`, `28px`, or a bespoke font size.
2. **Use the primitives:** `.section-shell` + `.section-y` for section layout, `<Button>` (right variant for the surface) for every CTA, `.h-display` / `.h-display-sm` for headings.
3. **No drop shadows.** The look is color blocks + borders, not elevation.
4. **German content**, meaningful `alt`s, decorative media `aria-hidden`.
5. **`@/` imports**; conditional classes go through `cn()`.
6. A new **section** is fine and expected. A new **color / radius / font-size / button style is not** — add it to [docs/design.md](docs/design.md) as a token first, then use it.
7. **Responsive:** every grid needs a base `grid-cols-1`; scale fixed display sizes down on mobile; zero horizontal overflow at 360 / 390 / 768px.
8. When you change a convention, **update the docs in the same change** so they never drift.

## Repo map

```
src/
  main.tsx                 # React entry
  App.tsx                  # router host — derives all routes from src/lib/site.ts
  index.css                # @font-face + @layer base/components
  lib/
    utils.ts               # cn()
    site.ts                # SITE_NAV — single source of truth for the page tree (routes + navbar)
  pages/                   # one file = one routed page (Home, GoogleAds, Website, Placeholder)
  components/
    Layout.tsx             # shared chrome: <Navbar/> → <main><Outlet/></main> → <Footer/>
    ScrollToTop.tsx        # scroll reset on route change (skips hash anchors)
    ui/                    # reusable primitives (Button, Icons)
    sections/              # one file = one section (PascalCase, named export)
      google-ads/          # Google Ads page sections, "Ga*" prefix
      website/             # Website page sections, "Ws*" prefix
public/
  assets/{images,icons,clients}/   # referenced as /assets/...
  fonts/                           # ITC Avant Garde + Avenir (self-hosted)
docs/                              # see docs/README.md
```

## Information architecture lives in one file

[src/lib/site.ts](src/lib/site.ts) exports `SITE_NAV`, the whole page tree. **Both the router and the navbar derive from it** — add or rename a page there and both update together. Never hard-code a route or a nav link in two places. A node with a `path` is a real page; a node without one is a grouping (no own page). Pages without designed sections yet route to the blank [Placeholder](src/pages/Placeholder.tsx).

## Adding things (short version — full detail in [docs/architecture.md](docs/architecture.md))

- **New section:** new file in the right `components/sections/...` folder, named export, wrap in `.section-shell .section-y`, build from tokens/primitives, compose it into the page file.
- **New page:** add the node to `SITE_NAV` (route appears automatically as a `Placeholder`), then build its sections and register the real component in `App.tsx`'s `BUILT_PAGES`.
- **Reuse shared sections** (`Navbar`, `Footer`, `Contact`, `Testimonials`) verbatim when content matches — don't fork them.

## Docs index

- [docs/design.md](docs/design.md) — **binding** design system: tokens, typography, layout, components, a11y, routing.
- [docs/architecture.md](docs/architecture.md) — technical architecture, routing model, how to add pages/sections.
- [docs/sections.md](docs/sections.md) — catalog of every page, section, and primitive.
- [docs/README.md](docs/README.md) — docs index + reading order.
