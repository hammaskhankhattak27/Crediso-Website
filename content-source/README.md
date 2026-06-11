# Content Source — Crediso Website 3.0

Client-provided page copy, extracted and cleaned into reusable Markdown. Each file
maps to a route in [src/lib/site.ts](../src/lib/site.ts). One file = one page.

Master content index (client's doc):
https://docs.google.com/document/d/1U10GtZYkH-OHlHZ_bU3hB8G1suxwKKoc0ebqgfgDOuQ/edit
— that doc is only a sitemap + pointers; the actual copy lives in the per-page docs below.

## Status per page

| Page | Route | Content file | Source | Status |
|---|---|---|---|---|
| Über uns | `/ueber-uns` | `ueber-uns.md` | Google Doc | ✅ ready |
| Kontakt | `/kontakt` | `kontakt.md` | Google Doc | ✅ ready |
| Karriere | `/karriere` | `karriere.md` | Google Doc | ✅ ready |
| KMU.Digital | `/kmu-digital` | `kmu-digital.md` | live page scrape | ✅ ready |
| Foto | `/foto` | `foto.md` | live page scrape | ✅ ready |
| Social Media (Übersicht) | `/social-media` | `social-media-uebersicht.md` | SM master doc | ✅ ready (page built — verify) |
| SM Betreuung | `/social-media/betreuung` | `social-media-betreuung.md` | SM master doc | ✅ **built** |
| SM Mentoring | `/social-media/mentoring` | `social-media-mentoring.md` | SM master doc | ✅ **built** (uses "neu" copy; mentor name/photo placeholder) |
| SM Workshops | `/social-media/workshops` | `social-media-workshops.md` | SM master doc + live | ✅ **built** (titles/prices scraped from live) |
| SM Content Production | `/social-media/content-production` | `social-media-content-production.md` | SharePoint | ⚠️ **built as scaffold** — full copy still auth-walled |
| Video — Image | `/video/image-video` | `video-imagevideo.md` | live page scrape | ✅ ready |
| Video — Employer Branding | `/video/employer-branding` | `video-employer-branding.md` | live page scrape | ✅ ready |
| Video — Event | `/video/eventvideo` | `video-eventvideo.md` | live page scrape | ✅ ready |
| Video — SM Content | `/video/social-media-content` | `video-social-media-content.md` | live page scrape | ✅ ready |
| Video — Produkt | `/video/produktvideo` | `video-produktvideo.md` | live page scrape | ✅ ready |
| Video — Musik | `/video/musikvideo` | `video-musikvideo.md` | live page scrape | ✅ ready |
| Video — Hochzeit | `/video/hochzeitsvideo` | `video-hochzeitsvideo.md` | live page scrape | ✅ ready |
| Video (Hub) | `/video` | `video-hub.md` | — | ⛔ blocked (Unterseite Video.docx not shared) |
| Referenzen | `/referenzen` | — | — | ⛔ blocked ("need to be defined") |
| Nachhaltigkeit | `/nachhaltigkeit` | — | live page (no URL) | ⛔ blocked (no URL given, "copy from current page") |
| Blog | `/blog` | — | live page | ⛔ blocked (dynamic, "copy from current page") |

## Already-built pages (raw source kept for reference only)
`google-docs/` holds the raw `.txt` exports for pages already built — used to verify copy:
- `crediso-startseite.txt` → Home
- `crediso-webshop.txt` → Webshop
- `crediso-care.txt` → Crediso Care
- `crediso-seo.txt` → SEO
- `crediso-social-media-master.txt` → the full 5-page SM doc (split into the `social-media-*.md` files)
- `crediso-startseite/webshop/...` plus `crediso-texte.txt` (the index doc itself)
- Website + Google Ads: source on SharePoint / not provided — pages already built.

## Still needs client
1. **Video hub** copy ("Unterseite Video.docx").
2. **Referenzen** — content to be defined.
3. **Nachhaltigkeit** — the live URL to copy from.
4. **Blog** — approach (dynamic content / which posts).
5. **SM Content Production** — public link or pasted copy (SharePoint).
