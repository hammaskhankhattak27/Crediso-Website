# CLAUDE.md

Guidance for Claude Code when working in this repository.

## ⚠️ Read this first: the design system is binding

**[docs/design.md](docs/design.md) is the single source of truth for all visual and structural decisions.** Read it before adding or editing any page, section, or component. Every new page must be built from its tokens, layout primitives, and component recipes — consistency with the existing home page is the top priority.

Non-negotiables (full detail in [docs/design.md](docs/design.md)):
- **No raw values that already exist as tokens.** Use `bg-mint`, `text-ink-soft`, `rounded-card`, `.h-display`, not `#BFE0CC` / `28px` / bespoke font sizes.
- **Use the primitives:** `.section-shell` + `.section-y` for section layout, `<Button>` for every CTA (pick the variant that matches the surface), `.h-display` / `.h-display-sm` for headings.
- **No drop shadows.** The design uses color blocks and borders, not elevation.
- **German content** (UI labels, alt text, aria-labels), meaningful `alt`s, decorative media `aria-hidden`.
- **`@/` imports** (never `../../`); conditional classes go through `cn()` from `@/lib/utils`.
- A new **section** is expected and fine. A new **color / radius / font size / button style is not** — add it to `docs/design.md` as a token first, then use it.

When you change a design convention, update [docs/design.md](docs/design.md) in the same change so the doc never drifts from the code.

### Related docs
- [docs/README.md](docs/README.md) — docs index + reading order.
- [docs/architecture.md](docs/architecture.md) — runtime flow, routing/IA model, how to add a page or section.
- [docs/sections.md](docs/sections.md) — catalog of every page, section, and UI primitive.
- [AGENTS.md](AGENTS.md) — same context for non-Claude agents (Codex, Cursor, …).

## Project

Crediso Redesign — marketing site. React 18 + TypeScript, Vite 6, Tailwind CSS 3.

- Design tokens: [tailwind.config.ts](tailwind.config.ts)
- Shared CSS recipes (`@font-face`, `@layer base/components`): [src/index.css](src/index.css)
- `cn()` class merge helper: [src/lib/utils.ts](src/lib/utils.ts)

### Structure
```
src/
  App.tsx                 # router host — derives every route from src/lib/site.ts (see design.md §9)
  lib/site.ts             # SITE_NAV — single source of truth for the whole page tree (routes + navbar)
  pages/                  # one file = one routed page (Home, GoogleAds, Website, Placeholder)
  components/ui/          # reusable primitives (Button, Icons)
  components/sections/    # one file = one section, named export, PascalCase
```
New pages are built as **real routes** — see [docs/design.md](docs/design.md) §9. The IA lives in [src/lib/site.ts](src/lib/site.ts): add/rename a page there and both the router and the navbar update together (never hard-code a route or nav link twice). Pages without designed sections yet route to the blank `Placeholder`.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc --noEmit && vite build
npm run preview  # preview the production build
npm run lint     # eslint
```

## Conventions

- Function components only; named exports for sections/components (no default exports except `App`).
- TypeScript everywhere; type props with an explicit interface.
- Match the surrounding code's idiom, comment density, and naming. Sections are presentational and self-contained — lift page-specific data to props rather than forking a component.
