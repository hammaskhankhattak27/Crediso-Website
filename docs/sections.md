# Component & section catalog

Every routed page, section, and reusable primitive in the app, with its file and role. Sections are presentational bands; pages compose them in Figma top-to-bottom order. See [architecture.md](architecture.md) for how it all fits together and [design.md](design.md) for the visual rules.

> Naming: home/shared sections have plain names; Google Ads page sections use the **`Ga*`** prefix; Website page sections use **`Ws*`**; Crediso Care uses **`Cc*`**; Webshop uses **`Os*`** (Onlineshop). A new page introduces its own `Xx*` prefix in a matching `components/sections/<x>/` folder. Sections shared across a whole service *category* live in a category folder (e.g. `sections/web/` holds the parameterized `WebHero`).

---

## Pages — [src/pages/](../src/pages/)

| Page | File | Route | Composition |
|---|---|---|---|
| Home (Startseite) | [Home.tsx](../src/pages/Home.tsx) | `/` | Hero → About → Services → CtaBanner → Projects → Offers → Sustainability → Newsletter → Certifications → SocialProof → Ticker → Blog → **Reviews** → Contact |
| Google Ads | [GoogleAds.tsx](../src/pages/GoogleAds.tsx) | `/google-ads` | GaHero → GaBenefits → GaWarum → GaVersprechen → GaPartner → GaPricing → GaFormats → GaMaximiere → GaSuccessstory → **Reviews** → GaFaq → GaLassUnsStarten → **Contact** |
| Website | [Website.tsx](../src/pages/Website.tsx) | `/website` | WsHero → WsVerkaufen → WsFahrplan → WsWert → WsWartung → WsWeCare → WsCheck → WsFoerderung → **Reviews** → WsBereit → **Contact** |
| Webshop | [Webshop.tsx](../src/pages/Webshop.tsx) | `/webshop` | **WebHero** → OsLeistungen → OsGruenderin → OsFahrplan → OsPlattformen → OsBereit → **Contact** |
| Crediso Care | [CredisoCare.tsx](../src/pages/CredisoCare.tsx) | `/crediso-care` | **WebHero** → CcProblem → CcWasIst → CcLeistungen → CcPreise → CcFuerWen → **Reviews** → CcFaq → CcKontakt |
| Social Media | [SocialMedia.tsx](../src/pages/SocialMedia.tsx) | `/social-media` | SmHeroBento → SmTrust → SmLeistungen → SmNichtSicher → **Reviews** (`accent="lavender"`) → SmKontakt |
| Placeholder | [Placeholder.tsx](../src/pages/Placeholder.tsx) | (all undesigned IA paths) | Blank stub — H1 = page title + "im Aufbau" copy. Used until a page's real sections are built. |

**Bold** = shared section reused verbatim. All other IA routes (`/video`, `/foto`, `/blog`, `/kontakt`, …) currently render `Placeholder`.

## Shared chrome & utilities — [src/components/](../src/components/)

| Component | File | Role |
|---|---|---|
| Layout | [Layout.tsx](../src/components/Layout.tsx) | Wraps every route: `<Navbar/>` → `<main><Outlet/></main>` → `<Footer/>`. |
| ScrollToTop | [ScrollToTop.tsx](../src/components/ScrollToTop.tsx) | Scrolls to top on route change; skips `#hash` navigations. |

## Shared sections — [src/components/sections/](../src/components/sections/)

Reused across multiple pages — never fork these.

| Section | File | Role |
|---|---|---|
| Navbar | [Navbar.tsx](../src/components/sections/Navbar.tsx) | Sticky header; full-width `Leistungen` mega-menu (desktop) + accordion (mobile), data-driven from `SITE_NAV`. |
| Footer | [Footer.tsx](../src/components/sections/Footer.tsx) | Site footer — dark `ink-soft` (#161616) background, `paper` text, mint accents/hover; social buttons, slogan. |
| Contact | [Contact.tsx](../src/components/sections/Contact.tsx) | `id="contact"` — contact form + details. The target of every `#contact` CTA. |
| Reviews | [Reviews.tsx](../src/components/sections/Reviews.tsx) | Shared "Kundenstimmen" bento used on **every** page — featured quote (2×2) + team-photo tile + three-up quote row, quote mark + stars, `id="testimonials"`. Brand-green default content; `accent` prop swaps only the featured tile's surface (`mint` everywhere, `lavender` on Social Media). Pass `featured` / `voices` / `photo` / `heading` to override copy. |

## Home-only sections — [src/components/sections/](../src/components/sections/)

| Section | File | Role |
|---|---|---|
| Hero | [Hero.tsx](../src/components/sections/Hero.tsx) | Home hero (the page's single `<h1>`). |
| About | [About.tsx](../src/components/sections/About.tsx) | Agency intro. |
| Services | [Services.tsx](../src/components/sections/Services.tsx) | Services overview (`#services`). |
| CtaBanner | [CtaBanner.tsx](../src/components/sections/CtaBanner.tsx) | Mid-page call-to-action banner. |
| Projects | [Projects.tsx](../src/components/sections/Projects.tsx) | Project/case-study card grid. |
| Offers | [Offers.tsx](../src/components/sections/Offers.tsx) | Offerings bento grid. |
| Sustainability | [Sustainability.tsx](../src/components/sections/Sustainability.tsx) | Nachhaltigkeit section. |
| Newsletter | [Newsletter.tsx](../src/components/sections/Newsletter.tsx) | Newsletter signup. |
| Certifications | [Certifications.tsx](../src/components/sections/Certifications.tsx) | Certifications / badges. |
| SocialProof | [SocialProof.tsx](../src/components/sections/SocialProof.tsx) | Logos / proof strip. |
| Ticker | [Ticker.tsx](../src/components/sections/Ticker.tsx) | Marquee ticker band. |
| Blog | [Blog.tsx](../src/components/sections/Blog.tsx) | Blog/know-how teasers (`#blog`). |

## Google Ads sections — [src/components/sections/google-ads/](../src/components/sections/google-ads/)

| Section | File | Role |
|---|---|---|
| GaHero | [GaHero.tsx](../src/components/sections/google-ads/GaHero.tsx) | Page hero with the multi-colour Google wordmark trusted-by row. |
| GaBenefits | [GaBenefits.tsx](../src/components/sections/google-ads/GaBenefits.tsx) | Benefit list with check markers. |
| GaWarum | [GaWarum.tsx](../src/components/sections/google-ads/GaWarum.tsx) | "Warum … vertrauen solltest" copy + image grid. |
| GaVersprechen | [GaVersprechen.tsx](../src/components/sections/google-ads/GaVersprechen.tsx) | "Unser Versprechen" bento (expertise stats, Betreuung, Fixpreis, Optimierung). `id="leistungen"`. |
| GaPartner | [GaPartner.tsx](../src/components/sections/google-ads/GaPartner.tsx) | Google Partner banner (dark). |
| GaPricing | [GaPricing.tsx](../src/components/sections/google-ads/GaPricing.tsx) | Pricing card. **The one Figma-explicit hard-offset shadow exception** to the no-shadow rule. |
| GaFormats | [GaFormats.tsx](../src/components/sections/google-ads/GaFormats.tsx) | Ad-format cards with format-tag checks. |
| GaMaximiere | [GaMaximiere.tsx](../src/components/sections/google-ads/GaMaximiere.tsx) | "Maximiere …" value section. |
| GaSuccessstory | [GaSuccessstory.tsx](../src/components/sections/google-ads/GaSuccessstory.tsx) | Success-story / outcome card. |
| GaFaq | [GaFaq.tsx](../src/components/sections/google-ads/GaFaq.tsx) | FAQ — same recipe as `CcFaq`: plain text intro on the left (sticky, no card) + numbered accordion on the right (hairline dividers, no cards; number + question, `Plus` toggle). `id="faq"`. |
| GaLassUnsStarten | [GaLassUnsStarten.tsx](../src/components/sections/google-ads/GaLassUnsStarten.tsx) | Big "Lass uns starten" CTA (teal-deep, feature list + button). |
| GaIcons | [GaIcons.tsx](../src/components/sections/google-ads/GaIcons.tsx) | Page icon set: `Check`, `Clock`, `Plus`, `GoogleWordmark`, `Sparkle`. |

## Website sections — [src/components/sections/website/](../src/components/sections/website/)

| Section | File | Role |
|---|---|---|
| WsHero | [WsHero.tsx](../src/components/sections/website/WsHero.tsx) | Page hero. |
| WsVerkaufen | [WsVerkaufen.tsx](../src/components/sections/website/WsVerkaufen.tsx) | "Website that sells" pitch. |
| WsFahrplan | [WsFahrplan.tsx](../src/components/sections/website/WsFahrplan.tsx) | Process / roadmap (Fahrplan). |
| WsWert | [WsWert.tsx](../src/components/sections/website/WsWert.tsx) | Value proposition section. |
| WsWartung | [WsWartung.tsx](../src/components/sections/website/WsWartung.tsx) | Maintenance (Wartung). |
| WsWeCare | [WsWeCare.tsx](../src/components/sections/website/WsWeCare.tsx) | "We care" support section. |
| WsCheck | [WsCheck.tsx](../src/components/sections/website/WsCheck.tsx) | Checklist / "send us the link" prompt. |
| WsFoerderung | [WsFoerderung.tsx](../src/components/sections/website/WsFoerderung.tsx) | Funding (Förderung) info. |
| WsBereit | [WsBereit.tsx](../src/components/sections/website/WsBereit.tsx) | "Bereit?" closing CTA. |
| WsIcons | [WsIcons.tsx](../src/components/sections/website/WsIcons.tsx) | Page icon set. |

## Web-category shared sections — [src/components/sections/web/](../src/components/sections/web/)

Shared by every page in the "Web" service category — pass content via props, never fork.

| Section | File | Role |
|---|---|---|
| WebHero | [WebHero.tsx](../src/components/sections/web/WebHero.tsx) | Parameterized category hero (headline, optional large `subtitle`, lead, two CTAs, and either checkmark `badges` or up to 3 `stats`; image with rotating seal + accent square). No kicker/pill above the H1 — matches the Ga/Ws heroes. Used by Crediso Care; intended for the other Web sub-pages too. |

## Crediso Care sections — [src/components/sections/crediso-care/](../src/components/sections/crediso-care/)

Built from the approved Crediso Care copy (problem → what-it-is → what's included → price → for-whom → testimonials → FAQ → contact).

| Section | File | Role |
|---|---|---|
| CcProblem | [CcProblem.tsx](../src/components/sections/crediso-care/CcProblem.tsx) | "Kennst du das?" — pain copy + punchline beside three sticky-note style cards (mint / lavender / sun). |
| CcWasIst | [CcWasIst.tsx](../src/components/sections/crediso-care/CcWasIst.tsx) | "Ein Fixpreis…" — light two-column: promise + animated background-monitoring chips (teal ping) on the left, portrait image on the right with the WhatsApp voice-note as a mint chat-bubble card overlapping its corner. |
| CcLeistungen | [CcLeistungen.tsx](../src/components/sections/crediso-care/CcLeistungen.tsx) | "Was enthalten ist" bento — heading + large total-count stat (`teal-deep`, computed from the data), then the 4 pillars at their real weights: featured dark `teal-deep` checklist (Technische Basis, divider rows) + stacked mint/smoke cards (Inhalte, SEO & GEO) + full-width sage Support band with pill chips and the section CTA. `id="enthalten"`. |
| CcPreise | [CcPreise.tsx](../src/components/sections/crediso-care/CcPreise.tsx) | "Transparent und planbar" — copy + single "Ab €229,-" price card (no fixed tiers; packages tailored in the Erstgespräch). `id="preise"`. |
| CcFuerWen | [CcFuerWen.tsx](../src/components/sections/crediso-care/CcFuerWen.tsx) | "Für wen ist Crediso Care?" — sticky heading + 5-item checklist (paper-cool). |
| CcFaq | [CcFaq.tsx](../src/components/sections/crediso-care/CcFaq.tsx) | FAQ — plain text intro on the left (sticky, no card) + numbered accordion on the right (hairline dividers, no cards; number + question, `Plus` toggle, multiple panels open). 6 Care questions; item 5 links to `/seo`. `id="faq"`. |
| CcKontakt | [CcKontakt.tsx](../src/components/sections/crediso-care/CcKontakt.tsx) | "Deine Website in guten Händen" closing band — dark `teal-deep` card, white CTA, and interactive e-mail/phone/address pills. `id="contact"` — target of every `#contact` CTA. |
| CcIcons | [CcIcons.tsx](../src/components/sections/crediso-care/CcIcons.tsx) | Page icon set: `Shield`, `CloudBackup`, `Gauge`, `Pen`, `Pulse`, `Headset`, `Search`, `Clock`, `Check`, `Plus`, `Mail`, `Phone`, `MapPin`. |

## Webshop sections — [src/components/sections/webshop/](../src/components/sections/webshop/)

The Webshop/Onlineshop service page (`Os*` = Onlineshop) — Figma frame "Dein Onlineshop", built on the shared `WebHero`.

| Section | File | Role |
|---|---|---|
| OsLeistungen | [OsLeistungen.tsx](../src/components/sections/webshop/OsLeistungen.tsx) | "Unsere Leistungen im E-Commerce" bento (sage top hairline) — three pillar cards: Shop-Aufbau (`mint`), Design/Content (`ink-soft`), SEO & Marketing (`teal-deep`, full width). Each grounds its bullet list with a decorative product-UI mock (storefront, photo grid + UX stats, keyword ranking + ads panel) bleeding out of the card's bottom edge. `id="leistungen"`. |
| OsGruenderin | [OsGruenderin.tsx](../src/components/sections/webshop/OsGruenderin.tsx) | "Sara, unsere Gründerin" — editorial magazine profile: tall portrait left (bottom gradient + name plate), her career as a CV-style ledger right (oversized teal display figures — OTTO / 100+ / Product Owner / 2019 — with hairline dividers), closed by the brand quote in large italic display type. |
| OsFahrplan | [OsFahrplan.tsx](../src/components/sections/webshop/OsFahrplan.tsx) | "Unser Fahrplan" — the five project phases as an expanding accordion row: active phase = wide `teal-deep` panel (number, title, copy), the rest collapse into slim teal-bordered cards with vertical titles (horizontal on mobile). `id="fahrplan"`. |
| OsPlattformen | [OsPlattformen.tsx](../src/components/sections/webshop/OsPlattformen.tsx) | "WordPress oder Shopify?" — two comparison cards (mint-toned WordPress vs ink-toned Shopify: header band with logo/tagline/title, bullet list, bottom "Ideal für:" pill), then the "Nicht sicher?" CTA. `id="plattformen"`. |
| OsBereit | [OsBereit.tsx](../src/components/sections/webshop/OsBereit.tsx) | Closing conversion band — full-width `teal-deep` card: decorative trust orbit (concentric rings + frosted proof chips) left, headline + light/outline-light CTAs right. |
| OsIcons | [OsIcons.tsx](../src/components/sections/webshop/OsIcons.tsx) | Page icon set: `Cart`, `Building`, `Star`, `Zap`, `Camera`, `TrendUp`, `WordPressLogo`, `ShoppingBag`. |

## Social Media sections — [src/components/sections/social-media/](../src/components/sections/social-media/)

The Social Media category overview — implements the client's approved copy (Mai 2026). `SmHero` is the parameterized category hero (intended for the four sub-pages too); the rest are overview-only `Sm*` bands.

| Section | File | Role |
|---|---|---|
| SmHeroBento | [SmHeroBento.tsx](../src/components/sections/social-media/SmHeroBento.tsx) | **Overview hero** (`/social-media` only) — a bento: a top text band (eyebrow + headline left, lead + dark CTA right) over a 60/20/20 card row. One large featured image card (Betreuung, 60%) with the copy at the bottom + arrow, and two narrow colour-block **stat cards** (Workshops `teal-deep` / Content `lavender`, two figures each). The three cards mirror the client's intro (auslagern / lernen / Content) and link to the sub-pages. `id="hero"`. |
| SmHero | [SmHero.tsx](../src/components/sections/social-media/SmHero.tsx) | Reusable **sub-page** category hero (headline, optional `subtitle`, lead, two CTAs, image). The whole hero is **one rounded image box**: a full-bleed photo fills the `rounded-card`, a bottom/left-weighted legibility gradient darkens the copy zone, and the white headline + lead + light/outline-light CTAs sit inside it at the lower-left. Intended for the four Social Media sub-pages (the overview uses `SmHeroBento`). |
| SmTrust | [SmTrust.tsx](../src/components/sections/social-media/SmTrust.tsx) | Full-bleed **trust band** right below the hero — the client's five trust badges as a continuous mint `animate-marquee` (homepage-Ticker style). Moving strip is `aria-hidden`; an `sr-only` list carries the badges. |
| SmLeistungen | [SmLeistungen.tsx](../src/components/sections/social-media/SmLeistungen.tsx) | The client's 4-tile **Leistungsübersicht** as a colour-blocked 2×2 bento (Betreuung `teal-deep` / Mentoring `mint` / Workshops `lavender` / Content `ink`). Each card leads with a white "screen" panel holding a custom abstract illustration (see `SmLeistungenArt`) + a number badge, then audience tag, title, copy and a sub-page link. No icons, no photos. `id="leistungen"`. |
| SmLeistungenArt | [SmLeistungenArt.tsx](../src/components/sections/social-media/SmLeistungenArt.tsx) | The four human-free, flat-geometric SVG illustrations for the cards (`ArtBetreuung` managed feed · `ArtMentoring` growth path · `ArtWorkshops` idea lightbulb · `ArtContent` camera lens), drawn only from tokens via `fill-`/`stroke-` utilities. |
| SmNichtSicher | [SmNichtSicher.tsx](../src/components/sections/social-media/SmNichtSicher.tsx) | "Nicht sicher, was passt?" low-pressure consultation band — a dark `teal-deep` panel with copy + a light CTA to `#contact`. |
| SmKontakt | [SmKontakt.tsx](../src/components/sections/social-media/SmKontakt.tsx) | Closing **"Bereit loszulegen?"** contact band — the target of every `#contact` CTA. Dark `teal-deep` panel, light primary CTA, interactive e-mail/phone pills, rotating-seal accent. `id="contact"`. |
| SmIcons | [SmIcons.tsx](../src/components/sections/social-media/SmIcons.tsx) | Page icon set: `Compass`, `Care`, `Presentation`, `Camera`, `Spark`, `Check`, `Mail`, `Phone`, `Quote`. |

## UI primitives — [src/components/ui/](../src/components/ui/)

| Primitive | File | Role |
|---|---|---|
| Button | [Button.tsx](../src/components/ui/Button.tsx) | The only CTA component. Renders `<a>` with `href`, else `<button>`. Variants `dark` / `outline` / `outline-light` / `light`, sizes `md` / `lg`, optional arrow. See [design.md §6](design.md). |
| Icons | [Icons.tsx](../src/components/ui/Icons.tsx) | Shared inline SVGs: `ArrowUpRight`, `ArrowRight`, `GoogleG`, `Stars`, `TikTokIcon`, `InstagramIcon`, `LinkedinIcon`, `YoutubeIcon`. `stroke`/`fill="currentColor"` so they inherit text color. |

---

*Descriptions are role-level summaries derived from each section's name and its place in the Figma frame order. When you materially change a section's purpose, update this row in the same change.*
