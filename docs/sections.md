# Component & section catalog

Every routed page, section, and reusable primitive in the app, with its file and role. Sections are presentational bands; pages compose them in Figma top-to-bottom order. See [architecture.md](architecture.md) for how it all fits together and [design.md](design.md) for the visual rules.

> Naming: home/shared sections have plain names; Google Ads page sections use the **`Ga*`** prefix; Website page sections use **`Ws*`**; Crediso Care uses **`Cc*`**. A new page introduces its own `Xx*` prefix in a matching `components/sections/<x>/` folder. Sections shared across a whole service *category* live in a category folder (e.g. `sections/web/` holds the parameterized `WebHero`).

---

## Pages — [src/pages/](../src/pages/)

| Page | File | Route | Composition |
|---|---|---|---|
| Home (Startseite) | [Home.tsx](../src/pages/Home.tsx) | `/` | Hero → About → Services → CtaBanner → Projects → Offers → Sustainability → Newsletter → Certifications → SocialProof → Ticker → Blog → Testimonials → Contact |
| Google Ads | [GoogleAds.tsx](../src/pages/GoogleAds.tsx) | `/google-ads` | GaHero → GaBenefits → GaWarum → GaVersprechen → GaPartner → GaPricing → GaFormats → GaMaximiere → GaSuccessstory → **Testimonials** → GaFaq → GaLassUnsStarten → **Contact** |
| Website | [Website.tsx](../src/pages/Website.tsx) | `/website` | WsHero → WsVerkaufen → WsFahrplan → WsWert → WsWartung → WsWeCare → WsCheck → WsFoerderung → WsBereit → **Contact** |
| Crediso Care | [CredisoCare.tsx](../src/pages/CredisoCare.tsx) | `/crediso-care` | **WebHero** → CcProblem → CcWasIst → CcLeistungen → CcPreise → CcFuerWen → CcTestimonials → CcFaq → CcKontakt |
| Placeholder | [Placeholder.tsx](../src/pages/Placeholder.tsx) | (all undesigned IA paths) | Blank stub — H1 = page title + "im Aufbau" copy. Used until a page's real sections are built. |

**Bold** = shared section reused verbatim. All other IA routes (`/social-media`, `/video`, `/foto`, `/blog`, `/kontakt`, …) currently render `Placeholder`.

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
| Footer | [Footer.tsx](../src/components/sections/Footer.tsx) | Site footer (mint), social buttons, slogan. |
| Contact | [Contact.tsx](../src/components/sections/Contact.tsx) | `id="contact"` — contact form + details. The target of every `#contact` CTA. |
| Testimonials | [Testimonials.tsx](../src/components/sections/Testimonials.tsx) | Horizontal testimonial scroller. Reused on the Google Ads page. |

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
| GaFaq | [GaFaq.tsx](../src/components/sections/google-ads/GaFaq.tsx) | FAQ accordion — bordered items, open item fills `bg-mint`, `Plus` icon rotates to ×. `id="faq"`. |
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
| WebHero | [WebHero.tsx](../src/components/sections/web/WebHero.tsx) | Parameterized category hero (eyebrow pill, headline, optional large `subtitle`, lead, two CTAs, and either checkmark `badges` or up to 3 `stats`; image with rotating seal + accent square). Used by Crediso Care; intended for the other Web sub-pages too. |

## Crediso Care sections — [src/components/sections/crediso-care/](../src/components/sections/crediso-care/)

Built from the approved Crediso Care copy (problem → what-it-is → what's included → price → for-whom → testimonials → FAQ → contact).

| Section | File | Role |
|---|---|---|
| CcProblem | [CcProblem.tsx](../src/components/sections/crediso-care/CcProblem.tsx) | "Kennst du das?" — pain copy + punchline beside three sticky-note style cards (mint / lavender / sun). |
| CcWasIst | [CcWasIst.tsx](../src/components/sections/crediso-care/CcWasIst.tsx) | "Ein Fixpreis…" dark `teal-deep` band: promise + WhatsApp callout + background-monitoring chips. |
| CcLeistungen | [CcLeistungen.tsx](../src/components/sections/crediso-care/CcLeistungen.tsx) | "Was enthalten ist" interactive icon-grid explorer — selectable list (vertical desktop / horizontal chip scroller mobile, active = `teal-deep`) drives a mint spotlight panel (watermark number, icon, check grid) for each of the 4 categories. `id="enthalten"`. |
| CcPreise | [CcPreise.tsx](../src/components/sections/crediso-care/CcPreise.tsx) | "Transparent und planbar" — copy + single "Ab €229,-" price card (no fixed tiers; packages tailored in the Erstgespräch). `id="preise"`. |
| CcFuerWen | [CcFuerWen.tsx](../src/components/sections/crediso-care/CcFuerWen.tsx) | "Für wen ist Crediso Care?" — sticky heading + 5-item checklist (paper-cool). |
| CcTestimonials | [CcTestimonials.tsx](../src/components/sections/crediso-care/CcTestimonials.tsx) | Four real client quotes as a 2×2 quote-card grid (mint / paper / lavender / paper). |
| CcFaq | [CcFaq.tsx](../src/components/sections/crediso-care/CcFaq.tsx) | FAQ accordion (same recipe as GaFaq, 6 Care questions; item 5 links to `/seo`). `id="faq"`. |
| CcKontakt | [CcKontakt.tsx](../src/components/sections/crediso-care/CcKontakt.tsx) | "Deine Website in guten Händen" closing CTA band (mint, rotating seal) + e-mail/phone/address row. `id="contact"` — target of every `#contact` CTA. |
| CcIcons | [CcIcons.tsx](../src/components/sections/crediso-care/CcIcons.tsx) | Page icon set: `Shield`, `CloudBackup`, `Gauge`, `Pen`, `Pulse`, `Headset`, `Search`, `Clock`, `Check`, `Plus`, `Mail`, `Phone`, `MapPin`. |

## UI primitives — [src/components/ui/](../src/components/ui/)

| Primitive | File | Role |
|---|---|---|
| Button | [Button.tsx](../src/components/ui/Button.tsx) | The only CTA component. Renders `<a>` with `href`, else `<button>`. Variants `dark` / `outline` / `outline-light` / `light`, sizes `md` / `lg`, optional arrow. See [design.md §6](design.md). |
| Icons | [Icons.tsx](../src/components/ui/Icons.tsx) | Shared inline SVGs: `ArrowUpRight`, `ArrowRight`, `GoogleG`, `Stars`, `TikTokIcon`, `InstagramIcon`, `LinkedinIcon`, `YoutubeIcon`. `stroke`/`fill="currentColor"` so they inherit text color. |

---

*Descriptions are role-level summaries derived from each section's name and its place in the Figma frame order. When you materially change a section's purpose, update this row in the same change.*
