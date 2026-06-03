# Brand fonts

The design uses two licensed typefaces. Drop the font files in **this folder**
with the exact names below (woff2 is preferred for the web; .otf/.ttf also work
if you update the `format()` in `src/index.css`). Until the files are present,
the site renders with the free fallbacks declared in `tailwind.config.ts`
(League Spartan / Poppins for headings, Nunito Sans / Inter for body), so the
layout already looks right — only the exact letterforms differ.

| File name                         | Typeface                        | Weight |
| --------------------------------- | ------------------------------- | ------ |
| `AvantGardeGothic-Medium.woff2`   | ITC Avant Garde Gothic Std      | 500    |
| `AvantGardeGothic-Demi.woff2`     | ITC Avant Garde Gothic Std      | 600    |
| `AvantGardeGothic-Bold.woff2`     | ITC Avant Garde Gothic Std      | 700    |
| `Avenir-Medium.woff2`             | Avenir                          | 500    |
| `Avenir-Heavy.woff2`              | Avenir                          | 800    |

`Inter` (used for a couple of contact details / the footer headline) is pulled
from the system / Google Fonts fallback and needs no file.

If your files have different names, just update the `@font-face` `src:` URLs at
the top of `src/index.css`.
