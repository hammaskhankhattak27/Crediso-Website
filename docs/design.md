# Crediso Design System

The single source of truth for building new pages that look and feel identical to the existing home page. Read this before adding any page or section. Everything here is extracted from the shipped code ([tailwind.config.ts](../tailwind.config.ts), [src/index.css](../src/index.css), and the section components) — when in doubt, the code wins, and any deviation should be reflected back into this file.

**Golden rule:** never hard-code a value that already exists as a token or a component class. Reach for `bg-mint`, `rounded-card`, `h-display`, `.section-shell`, `<Button>` — not `#BFE0CC`, `28px`, a bespoke font size, or a hand-rolled `<a>` styled like a button.

---

## 1. Stack & conventions

| Thing | Choice |
|---|---|
| Framework | React 18 + TypeScript, function components only |
| Build | Vite 6 |
| Styling | Tailwind CSS 3 — utility-first, tokens in `tailwind.config.ts`, shared recipes in `src/index.css` `@layer components` |
| Class merging | `cn()` from [src/lib/utils.ts](../src/lib/utils.ts) (`clsx` + `tailwind-merge`) — use it whenever classes are conditional or composed |
| Imports | Always the `@/` alias (`@/components/...`, `@/lib/utils`) — never long relative `../../` chains |
| Content language | **German** (incl. `:innen` gender forms, `ß`, umlauts). UI labels, alt text, aria-labels all in German. Some marketing slogans stay English by design (e.g. "DON'T BE SHY, SAY HI", "create digital solutions"). |
| Icons | Inline SVG components in [src/components/ui/Icons.tsx](../src/components/ui/Icons.tsx). `stroke="currentColor"` / `fill="currentColor"` so they inherit text color. No icon libraries. |

### File layout
```
src/
  App.tsx                      # router host — derives all routes from site.ts (see §9)
  main.tsx
  index.css                    # @font-face + @layer base/components
  lib/utils.ts                 # cn()
  lib/site.ts                  # SITE_NAV — single source of truth for the page tree (§9)
  pages/                       # one file = one routed page (Home, GoogleAds, Website, Placeholder)
  components/
    ui/                        # reusable primitives (Button, Icons)
    sections/                  # one file = one section, named export, PascalCase
```
A **section** is a self-contained band of the page. One file, one `export function SectionName()`, no default exports. New sections go in `components/sections/`; truly reusable primitives go in `components/ui/`.

---

## 2. Color tokens

Defined in [tailwind.config.ts](../tailwind.config.ts). Use the token name, never the hex.

### Neutrals
| Token | Hex | Used for |
|---|---|---|
| `ink` | `#000000` | **All headlines** (`text-ink` on display type — headlines are always pure black, full heading, never tinted or partially accented), dark buttons |
| `ink-soft` | `#161616` | Card titles (`h3`), eyebrow/UI labels, borders, dark display figures |
| `ink-090` | `#090909` | Occasional near-black (pill labels) |
| `graphite` | `#333333` | **Default copy / paragraph text color** (`body` is `text-graphite`) — the client's canonical copy style: Avenir LT Std Book, 18px / 27px |
| `slate` | `#5C5B5B` | Tertiary text (rare) |
| `mute` | `#767676` | Muted hints, input borders |
| `paper` | `#FFFFFF` | Default page background, text on dark surfaces |
| `paper-warm` | `#FFFFFC` | Alternate section background (e.g. Contact) to subtly break the white |
| `paper-cool` | `#FAFAFA` | Alternate cool-white background |

### Brand greens
| Token | Hex | Used for |
|---|---|---|
| `mint` | `#BFE0CC` | **The signature accent.** Primary card surface, pills, ticker bands, footer bg, active filter chips |
| `mint-soft` | `#C0EDD0` | Slightly brighter mint variant |
| `sage` | `#D3DED9` | Muted green-grey surface |
| `teal` | `#5FBDAE` | Mid teal |
| `teal-deep` | `#067361` | Dark teal-green brand color — dark card surfaces (Partner banner, Outcome card, "Laufende Optimierung"), the format-tag checks, the "€ 450,-" / "100%" accent figures, **and the hover/link accent color** for interactive text |
| `green-ink` | `#12211F` | Near-black green for headings & stat values on light surfaces (Google Ads landing: expertise stats, format-card titles) |
| `green-900` | `#003229` | Deepest green (large dark surfaces) |
| `green-950` | `#002112` | Near-black green |

### Accents (use sparingly, one per card max)
| Token | Hex | Used for |
|---|---|---|
| `lavender` | `#D4C7FA` | Secondary card surface (alternates with mint in card grids) |
| `sun` | `#F3E200` | High-energy yellow highlight |
| `g-blue / g-green / g-yellow / g-red` | Google brand | Only the multi-color Google "G" |

### Practical color rules
- **Light card** → `bg-mint` (default) or `bg-lavender` (variety). Text stays `text-ink` / `text-ink-soft`.
- **Dark card** → `bg-teal-deep` (or a `green-900/950`). Text becomes `text-paper`, secondary text `text-paper/90` or `/80`.
- **Interactive text hover** → `hover:text-teal-deep` (links), and the dark-button hover is `hover:opacity-90`.
- Borders are almost always `border-ink` or `border-ink-soft` (and `border-black/5` for the hairline under the sticky navbar).
- Rating stars use `#F3B711` (passed into `<Stars />`), not a token — leave it as is.

---

## 3. Typography

Two brand families, both licensed and bundled in `/public/fonts/`, declared via `@font-face` in [src/index.css](../src/index.css):
- **ITC Avant Garde Gothic Std** (`font-display`) — `ITCAvantGardeStd-*.woff2/.woff`, weights 300/400/500/600/700.
- **Avenir** (`font-body`) — `Avenir-{Light,Book,Regular,Heavy,Black}.ttf`, mapped to weights 300/400/500/800/900 (Avenir's Light→Book→Roman→Heavy→Black ladder). Nunito Sans / Inter remain as fallbacks.

| Family token | Stack | Role |
|---|---|---|
| `font-display` | ITC Avant Garde Gothic Std → League Spartan → Poppins → system | **Headings + all UI/buttons/labels.** Tight, geometric. |
| `font-body` | Avenir → Nunito Sans → Inter → system | Paragraph / running copy |
| `font-inter` | Inter → system | Fallback utility family — not used directly (contact-card meta lines are `font-body`/Avenir like all other copy) |

`h1–h4` automatically get `font-display` + `text-ink` (pure black) + `text-wrap: balance` from the base layer — **headlines are always black, the full heading** (never underlined or with only a few words tinted). Body defaults to `font-body text-graphite` (copy text = Avenir LT Std Book, 18px / 27px, `#333333`).

### Display heading classes — use these, don't reinvent
Defined in `@layer components`:
- `.h-display` → `clamp(2rem, 5vw, 4rem)`, `font-bold`, `leading-[1.1]`, `-0.04em` tracking. **Primary section H2 / hero H1.**
- `.h-display-sm` → `clamp(1.9rem, 4vw, 3.25rem)`, same weight/tracking. **Secondary headings.**
- `.tracking-display` → just the `-0.04em` letter-spacing, for one-off large type.

Pair them with a color: `<h2 className="h-display text-ink">`.

### Type scale in practice
| Use | Classes |
|---|---|
| Page/section hero heading | `h-display text-ink` |
| Secondary heading | `h-display-sm text-ink` |
| In-card heading (h3) | `font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05]` (large feature) or `text-2xl font-semibold` (small card) |
| Copy / lead paragraph | `font-body text-lg leading-relaxed text-graphite` (18px / 27px, `#333` — the canonical copy style on any light surface, incl. mint/lavender cards). On dark surfaces use `text-paper` / `text-paper/90`. |
| Body paragraph | `font-body text-base leading-relaxed text-graphite` |
| Eyebrow / kicker label | `font-display text-base font-medium uppercase tracking-wide text-ink-soft` |
| Pill chip label | `font-display text-sm font-semibold` |
| Nav link | `font-display text-lg font-medium text-ink-soft hover:text-teal-deep` |
| Stat number | `font-display text-6xl font-bold leading-none` |

Font weights actually loaded: display 300/400/500/600/700 (Avant Garde XLt/Bk/Md/Demi/Bold), body 500/800. `font-light` (300) on display is used decoratively (footer slogan, the `/Mo.` price suffix).

---

## 4. Layout & spacing

### The two layout primitives (from `@layer components`)
```
.section-shell  →  mx-auto w-full max-w-page px-[var(--page-px)]
.section-y      →  py-16 md:py-24
```
- `--page-px` = `clamp(1.25rem, 4vw, 3rem)` — the responsive horizontal gutter, defined on `:root`.
- `max-w-page` = `1440px`; `max-w-content` = `1344px`.

**Every section** is either:
```tsx
// Standard: centered, gutter, vertical rhythm
<section id="…" className="section-shell section-y">…</section>

// Full-bleed background that still centers its inner content:
<section className="bg-paper-warm section-y">
  <div className="section-shell">…</div>
</section>
```
Use the second form whenever the section has a background color/image that must reach the viewport edges (Contact, Footer, Ticker do this).

The hero is the one intentional exception to `section-y` — it uses `pt-12 pb-16 md:pt-16 lg:pt-20` to sit tight under the navbar.

### Grid patterns seen in the wild
- Two-column copy/visual: `grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto]`
- Heading + paragraph split: `grid gap-8 lg:grid-cols-2 lg:gap-16`
- Card grids: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` (projects) or explicit fraction columns `lg:grid-cols-[400fr_446fr_447fr]` with `col-start/row-start` placement (Offers bento)
- Horizontal scroller: `flex snap-x gap-5 overflow-x-auto pb-4 no-scrollbar` (Testimonials)

### Spacing rhythm (vertical, inside content)
Consistent ladder — reuse these, don't invent in-betweens:
- Heading → following block: `mt-6` (tight) / `mt-10` (section heading → grid) / `mt-12`
- Paragraph → buttons: `mt-8` / `mt-9`
- Button groups: `flex flex-wrap gap-4`
- Card internal padding: `p-8`
- Grid gaps: `gap-4`, `gap-6`, or `gap-16` for big two-column splits

---

## 5. Radii, borders, effects

| Token | Value | Use |
|---|---|---|
| `rounded-card` | `28px` | **All cards, images, image wrappers, filter chips.** The house radius. |
| `rounded-pill` | `50px` | Buttons, tag chips, social buttons |
| `rounded-full` | — | Circular photos/avatars, rotating badges, play buttons |
| `rounded-3xl` | 24px | Tall testimonial cards (slightly tighter than `card` by design) |

- **Card recipe:** `rounded-card bg-mint p-8` (+ `flex flex-col justify-between` when it has a footer button so the CTA pins to the bottom).
- **Image recipe:** always wrap in `overflow-hidden rounded-card`; image uses `object-cover` with a fixed responsive height or `aspect-square` / `aspect-[426/572]`.
- **Image hover zoom:** `transition-transform duration-500 hover:scale-105` on the `<img>` inside an `overflow-hidden` wrapper.
- **Borders:** `border border-ink` (chips, outline buttons), `border-2 border-ink-soft` (footer social buttons), `border-b border-ink` (form fields, section dividers).
- **Frosted glass:** `bg-white/25 backdrop-blur-md border border-white/40` (play button); navbar is `bg-paper/85 backdrop-blur-md`.
- **No drop shadows.** The design relies on color blocks and borders, not elevation. Don't add `shadow-*` unless a future Figma frame explicitly shows one.

---

## 6. Components & recipes

### `<Button>` — [src/components/ui/Button.tsx](../src/components/ui/Button.tsx)
The only way to render a CTA. Renders `<a>` when `href` is passed, else `<button>`.

```tsx
<Button href="#contact">Erstgespräch vereinbaren</Button>          // dark, lg, arrow
<Button variant="outline" size="md">Mehr dazu</Button>             // outline on light
<Button variant="outline-light" size="md">Mehr dazu</Button>       // outline on dark cards
<Button variant="light">…</Button>                                  // solid white on dark
<Button withArrow={false}>…</Button>                                // suppress the arrow
```
| Prop | Values | Default |
|---|---|---|
| `variant` | `dark` \| `outline` \| `outline-light` \| `light` | `dark` |
| `size` | `md` (`px-5 py-3 text-base`) \| `lg` (`px-6 py-4 text-lg`) | `lg` |
| `withArrow` | append `ArrowUpRight`, animates on hover | `true` |
| `href` / `onClick` / `type` | link vs button behavior | — |

Variant rule of thumb: **dark** = primary action on light bg; **outline** = secondary on light bg / inside mint cards; **outline-light** = any action on a dark (`teal-deep`/green) card; **light** = primary on dark bg.

### Pill chip (non-interactive tag/eyebrow)
```tsx
<span className="rounded-pill bg-mint px-5 py-2 font-display text-sm font-medium text-ink-090">
  CREDISO, DIE DIGITALAGENTUR AUS GRAZ
</span>
```
On-image tag: `rounded-pill bg-paper px-4 py-1.5 font-display text-sm font-semibold text-ink`.

### Filter / toggle chip (interactive)
`rounded-card px-5 py-2.5 font-display text-base font-semibold` — active = `bg-mint text-ink`, inactive = `border border-ink text-ink hover:bg-mint/40`. Drive with `useState` + `cn()`.

### Card (the core unit)
```tsx
<article className="flex flex-col justify-between rounded-card bg-mint p-8">
  <div>
    <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">Eyebrow</span>
    <h3 className="mt-4 font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-tight tracking-display text-ink">Title</h3>
    <p className="mt-4 font-body text-lg leading-relaxed text-ink-soft">Copy…</p>
  </div>
  <div className="mt-8"><Button variant="outline" size="md">Mehr dazu</Button></div>
</article>
```
For a dark card swap to `bg-teal-deep text-paper`, eyebrow → `text-paper/80`, copy → `text-paper/90`, button → `variant="outline-light"`.

### Form fields (Contact pattern)
Underline-only inputs, no boxes:
```tsx
<label className="flex flex-col gap-2">
  <span className="font-body text-xl font-medium text-ink">Name</span>
  <input className="border-0 border-b border-ink bg-transparent pb-2 font-body text-lg text-ink focus:border-teal-deep focus:outline-none" />
</label>
```
Checkbox accent: `accent-teal-deep`. Submit: `<Button type="submit" variant="outline">`.

### Marquee / ticker
`animate-marquee` (28s linear infinite, defined in config) on a row whose sequence is duplicated and translated `-50%`. Reverse a row with inline `style={{ animationDirection: "reverse" }}`. Hide the scrollbar with `.no-scrollbar`.

### Rotating decorative badge
A circular PNG (`hero-circle.png`) absolutely positioned and spun via `animate-[spin_22s_linear_infinite]` (vary the duration). Mark `aria-hidden="true"` and empty `alt`.

---

## 7. Imagery

- All assets live under `public/assets/` (`images/`, `icons/`, `clients/`). Reference with absolute paths: `src="/assets/images/foo.png"`.
- Always set a meaningful German `alt`; decorative images get `alt="" aria-hidden="true"`.
- Below-the-fold images: `loading="lazy"`. Hero/above-fold: omit it.
- Default fit is `object-cover`; portrait crops use fixed heights, square media use `aspect-square`, testimonial cards use `aspect-[426/572]`.
- Image-overlay gradient for text legibility: `bg-gradient-to-t from-black/60 via-black/10 to-transparent`.

---

## 8. Accessibility & semantics

- One `<h1>` per page (the hero). Sections use `<h2>`, cards `<h3>`. Don't skip levels.
- Landmark structure: `<header>` (navbar, sticky) → `<main>` → `<footer>`. Each band is a `<section>`; cards are `<article>`.
- Sections that are navigation targets carry an `id` (`#hero`, `#services`, `#projects`, `#contact`, `#testimonials`, `#blog`, `#culture`). Anchor/route hrefs must match these.
- Every icon-only or decorative element: `aria-hidden="true"`. Interactive icon buttons get an `aria-label` (German), e.g. the mobile toggle `aria-label="Menü öffnen"` + `aria-expanded`.
- Links/buttons must have a visible focus path — keep `focus:outline-none` only when paired with another focus affordance (`focus:border-teal-deep` on inputs). Prefer not stripping focus elsewhere.
- `html { scroll-behavior: smooth }` is global — anchor jumps animate; account for the sticky navbar (`top-0 z-50`) when scrolling to in-page targets.

---

## 9. Pages & routing

Routing is implemented with `react-router-dom`. [App.tsx](../src/App.tsx) is the router host (`<BrowserRouter>` + `<ScrollToTop>`); it does **not** hold page markup.

**The full site IA lives in one place — [src/lib/site.ts](../src/lib/site.ts).** That `SITE_NAV` tree is the single source of truth: [App.tsx](../src/App.tsx) derives every route from it (`flattenRoutes()`), and [Navbar.tsx](../src/components/sections/Navbar.tsx) renders the menu from it. Add or rename a page **there** and both the router and the nav update together — never hard-code a route or a nav link in two places.

A node with a `path` is a real routable page; a node without one is a **grouping only** (no own page) — currently `Leistungen` and `Web`. Pages that don't have designed sections yet route to the blank [pages/Placeholder.tsx](../src/pages/Placeholder.tsx) (`App.tsx`'s `BUILT_PAGES` map lists the ones with real components). To ship a real page: build its sections, then add it to `BUILT_PAGES`.

Current IA / routes, all wrapped in the shared `Layout`:

| Route | Page | Notes |
|---|---|---|
| `/` | [pages/Home.tsx](../src/pages/Home.tsx) | Startseite — the original scrolling marketing page |
| **Leistungen** | — | grouping, no page |
| ↳ **Web** | — | grouping, no page — only its sub-services are pages |
| `/website` | [pages/Website.tsx](../src/pages/Website.tsx) | Website service landing — sections in [website/](../src/components/sections/website/) (`Ws*`) |
| `/webshop` | Placeholder | blank |
| `/crediso-care` | [pages/CredisoCare.tsx](../src/pages/CredisoCare.tsx) | Crediso Care service landing — built on the shared [web/WebHero](../src/components/sections/web/WebHero.tsx) + its own `Cc*` sections in [crediso-care/](../src/components/sections/crediso-care/) |
| `/seo` | Placeholder | blank |
| `/google-ads` | [pages/GoogleAds.tsx](../src/pages/GoogleAds.tsx) | Google Ads service landing — sections in [google-ads/](../src/components/sections/google-ads/) (`Ga*`) |
| `/social-media` | Placeholder | own page + sub-pages `/social-media/{mentoring,betreuung,workshops,content-production}` |
| `/video` | Placeholder | own page + sub-pages `/video/{image-video,employer-branding,eventvideo,social-media-content,produktvideo,musikvideo,hochzeitsvideo}` |
| `/foto` | Placeholder | own page, no sub-pages |
| `/ueber-uns` | Placeholder | blank |
| `/blog` | Placeholder | blank |
| `/karriere` | Placeholder | blank |
| `/nachhaltigkeit` | Placeholder | blank |
| `/kontakt` | Placeholder | blank (the navbar CTA + "Kontakt" point here) |
| `/kmu-digital` | Placeholder | blank |
| `/referenzen` | Placeholder | blank |

Conventions for a new page:

1. **One page = one file** in `src/pages/`, composed from section components — exactly like the existing pages.
2. **Shared chrome:** [Layout.tsx](../src/components/Layout.tsx) renders `<Navbar />` → `<main><Outlet /></main>` → `<Footer />`. Never re-render the navbar/footer inside a page — the service pages **reuse** `Navbar`, `Contact`, and `Footer` from `components/sections/`.
3. **Page-specific sections** live in a per-page subfolder of `components/sections/` with a short prefix (`Ga*`, `Ws*`), one file per section, named export. Reuse a home/shared section verbatim when the Figma content matches (both service pages reuse `Contact`; the Google Ads page reuses `Testimonials`).
4. **Anchors vs routes:** in-page anchors (`#contact`, `#leistungen`) only work on the page that contains that section. CTAs on the service pages point at `#contact` (the reused `Contact` section's id). For cross-page jumps use `/route#anchor`.
5. **Scroll restoration:** [ScrollToTop.tsx](../src/components/ScrollToTop.tsx) resets scroll on route change (skips hash navigations so in-page anchors still animate).

Every new page must still be built from the tokens, layout primitives, and component recipes above. A new section is fine and expected — a new *color*, *radius*, *font size scale*, or *button style* is not, unless it's first added as a token here.

### Responsive / mobile (non-negotiable)

Both service pages are verified for **zero horizontal overflow at 360 / 390 / 768px**. Two rules make that hold — apply them to every new section:

- **Every responsive grid needs an explicit base `grid-cols-1`** (e.g. `grid grid-cols-1 lg:grid-cols-2`). Tailwind's `grid-cols-N` resolves to `minmax(0,1fr)`; a bare `grid` with only an `lg:` column count falls back to a single `1fr` track whose `auto` minimum lets images/long German words push past the viewport. The base `grid-cols-1` caps it.
- **`html`/`body` carry `overflow-x: clip`** ([index.css](../src/index.css)) as a safety net for intentional decorative overhangs (rotating seals, accent squares, the angled phone mockup). Use `clip`, never `hidden` — `hidden` would break the sticky navbar. Decorative overhangs should still be tamed on mobile (smaller negative offsets) rather than relying on the clip alone.
- Scale fixed display sizes down for mobile: card titles like `text-[44px]` become `text-[2rem] md:text-[44px]`; full-bleed two-tone cards stack their visual above the text via the `grid-cols-1` base.

---

## 10. Quick checklist before shipping a section/page

- [ ] Wrapped in `.section-shell` + `.section-y` (or the full-bleed-bg variant).
- [ ] Headings use `.h-display` / `.h-display-sm`; body uses `font-body`.
- [ ] Colors are tokens (`bg-mint`, `text-ink-soft`, `text-teal-deep` on hover) — zero raw hex.
- [ ] Cards/images use `rounded-card`; CTAs use `<Button>` with the right variant for the surface.
- [ ] German copy, meaningful `alt`s, decorative media `aria-hidden`.
- [ ] Correct heading hierarchy, `id` on nav-target sections.
- [ ] No drop shadows (the Google Ads pricing card's hard offset shadow is the one Figma-explicit exception), no off-system font sizes/weights, no `../../` imports (use `@/`).
- [ ] Conditional classes go through `cn()`.
- [ ] **Responsive:** every grid has a base `grid-cols-1`; fixed display sizes scale down for mobile; no horizontal overflow at 360/390px.
