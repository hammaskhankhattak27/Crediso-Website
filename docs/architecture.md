# Architecture

How the Crediso site is wired together at runtime and how to extend it. For the **visual** system (tokens, typography, components) see [design.md](design.md) — it is binding. This doc is the technical/structural companion.

---

## 1. Runtime flow

```
main.tsx
  └─ <App/>                         src/App.tsx
       └─ <BrowserRouter>
            ├─ <ScrollToTop/>       resets scroll on route change (skips #hash)
            └─ <Routes>
                 └─ <Route element={<Layout/>}>     shared chrome
                      ├─ "/"                → <Home/>
                      └─ …all SITE_NAV paths → real page or <Placeholder/>
```

- **Entry:** [src/main.tsx](../src/main.tsx) mounts `<App/>` in `<StrictMode>` and imports `index.css`.
- **Router host:** [src/App.tsx](../src/App.tsx) holds the router only — **no page markup**. It maps over `flattenRoutes()` from `site.ts` and renders one `<Route>` per page-bearing node.
- **Shared chrome:** [src/components/Layout.tsx](../src/components/Layout.tsx) renders `<Navbar/>` → `<main><Outlet/></main>` → `<Footer/>` around every route. Pages never render the navbar/footer themselves.
- **Scroll restoration:** [src/components/ScrollToTop.tsx](../src/components/ScrollToTop.tsx) scrolls to top on `pathname` change but **returns early when a `#hash` is present**, so in-page anchors still animate (global `scroll-behavior: smooth`).

## 2. Information architecture — the single source of truth

Everything about the page tree lives in **[src/lib/site.ts](../src/lib/site.ts)**:

```ts
export interface NavNode {
  label: string;
  path?: string;        // present → a real routable page; absent → grouping only
  children?: NavNode[];
}
export const SITE_NAV: NavNode[] = [ … ];
export function flattenRoutes(nodes?): { path; label }[]   // depth-first, path-bearing nodes
```

- **`App.tsx` derives routes** from `flattenRoutes(SITE_NAV)`. A `BUILT_PAGES` map lists paths that have a real designed component; every other path falls back to the blank [`Placeholder`](../src/pages/Placeholder.tsx).
- **`Navbar.tsx` derives the menu** from `SITE_NAV` (mega-menu for `Leistungen`, the rest as top-level links).
- ⇒ **Add/rename a page in `site.ts` and both the router and navbar update.** Never duplicate a route or nav link elsewhere.

**Grouping vs page.** A node with no `path` is a category that has no page of its own — currently **`Leistungen`** and **`Web`**. Their children are the real pages. (If a `/leistungen` overview page is ever wanted, give the node a `path` and build it.)

The full route table is maintained in [design.md §9](design.md). Current shape:

- `Leistungen` (grouping)
  - `Web` (grouping) → `/website`*, `/webshop`, `/crediso-care`, `/seo`, `/google-ads`*
  - `Social Media` → `/social-media` (+ `/social-media/{mentoring,betreuung,workshops,content-production}`)
  - `Video` → `/video` (+ 7 sub-pages)
  - `Foto` → `/foto`
- `/ueber-uns`, `/blog`, `/karriere`, `/nachhaltigkeit`, `/kontakt`, `/kmu-digital`, `/referenzen`

`*` = has a real designed page today; everything else renders `Placeholder`.

## 3. Pages vs sections

- **Page** = one file in [src/pages/](../src/pages/) that imports and composes section components in Figma top-to-bottom order. Pages hold no styling of their own. See [Home.tsx](../src/pages/Home.tsx), [GoogleAds.tsx](../src/pages/GoogleAds.tsx), [Website.tsx](../src/pages/Website.tsx).
- **Section** = one self-contained band of a page in `components/sections/`: one file, one `export function SectionName()`, named export, presentational. Page-specific data is lifted to props rather than forking a component.
- **Per-page sections** live in a prefixed subfolder: `google-ads/` (`Ga*`), `website/` (`Ws*`). A new page gets its own `Xx*` subfolder.
- **Shared/reused sections:** `Navbar`, `Footer`, `Contact` are reused across pages verbatim; the Google Ads page also reuses `Testimonials`. Reuse — don't copy.

See [sections.md](sections.md) for the full catalog.

## 4. Anchors vs routes

- In-page anchors (`#contact`, `#leistungen`, `#services`…) only work on a page that actually contains that section. The reused `Contact` section carries `id="contact"`; service-page CTAs point at `#contact`.
- For cross-page jumps use `/route` (or `/route#anchor`). The navbar uses React Router `<Link>`/`<NavLink>` for SPA navigation.

## 5. The navbar mega-menu

[src/components/sections/Navbar.tsx](../src/components/sections/Navbar.tsx) is shared chrome and fully data-driven from `SITE_NAV`:

- **Desktop (`xl+`):** `Leistungen` is a hover/focus mega-menu; its panel is `absolute inset-x-0 top-full` anchored to the sticky `<header>`, so it spans the **full page width** with inner content in `.section-shell`. A `before:` bridge strip keeps hover from dropping in the gap between trigger and panel. Category headers that are real pages link out (with a hover arrow); grouping-only `Web` is muted and non-clickable. Remaining top-level items are `NavLink`s with an active state.
- **Below `xl`:** hamburger → full-height scrollable panel; `Leistungen` is an accordion revealing the same tree.

## 6. Service-page hero convention (upcoming work)

Each service **category** shares **one hero design across all its sub-pages** — every Social Media page uses one common hero, every Web page one, Video and Foto likewise; only the content differs per sub-page. When building these out, create **one parameterized hero per category** (e.g. `SmHero`, `WebHero`) that takes content via props — do **not** hand-roll a bespoke hero per sub-page. (The existing `/google-ads` `GaHero` and `/website` `WsHero` predate this convention and keep their own heroes.)

## 7. Styling system

All visual decisions are governed by [design.md](design.md): color/typography tokens ([tailwind.config.ts](../tailwind.config.ts)), `@font-face` + `@layer` recipes ([src/index.css](../src/index.css)), the `<Button>` API, layout primitives (`.section-shell`, `.section-y`), heading classes (`.h-display`, `.h-display-sm`), radii (`rounded-card`, `rounded-pill`), and the responsive rules. Do not introduce a new token without adding it to design.md first.

## 8. Assets

Everything under [public/assets/](../public/assets/) (`images/`, `icons/`, `clients/`) is referenced with absolute paths, e.g. `src="/assets/images/google-ads/warum-1.png"`. Fonts are self-hosted in [public/fonts/](../public/fonts/). Meaningful German `alt` on content images; `alt="" aria-hidden="true"` on decorative ones; `loading="lazy"` below the fold.

---

## How to: add a new section

1. Create `src/components/sections/<page>/<Prefix><Name>.tsx` (or `sections/` for a shared one). Named export, function component, typed props interface if it takes any.
2. Wrap it: `<section className="section-shell section-y">` (or the full-bleed-bg variant for a colored band).
3. Build from tokens, primitives, `<Button>`, `.h-display*`. German copy, correct heading level (`h2` for a section, `h3` for cards), `id` if it's a nav/anchor target.
4. Import and place it in the page file in the right order.
5. `npm run build` to verify. If you introduced a visual convention, update [design.md](design.md).

## How to: add a new page

1. Add the node to `SITE_NAV` in [src/lib/site.ts](../src/lib/site.ts) with its `label` and `path` (nest under the right parent). The route appears automatically, rendering `Placeholder`, and the navbar picks it up.
2. Create its section subfolder `components/sections/<x>/` and build sections (reuse shared ones where content matches; for service categories reuse the category hero).
3. Create the page file in `src/pages/` composing those sections + reused `Contact`.
4. Register it in `BUILT_PAGES` in [src/App.tsx](../src/App.tsx) so the path renders the real page instead of `Placeholder`.
5. `npm run build`; verify no horizontal overflow at 360 / 390 / 768px.

## Conventions recap

- Function components only; **named exports** for everything except `App` (default).
- TypeScript everywhere; type props with an explicit `interface`.
- `@/` imports only; conditional/composed classes via `cn()`.
- Match surrounding code's idiom, comment density, and naming.
- Verify with `npm run build` (runs `tsc --noEmit` + `vite build`).
