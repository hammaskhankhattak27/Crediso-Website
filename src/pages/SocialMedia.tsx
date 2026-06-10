import { SmHeroBento } from "@/components/sections/social-media/SmHeroBento";
import { SmTrust } from "@/components/sections/social-media/SmTrust";
import { SmLeistungen } from "@/components/sections/social-media/SmLeistungen";
import { SmNichtSicher } from "@/components/sections/social-media/SmNichtSicher";
import { Reviews } from "@/components/sections/Reviews";
import { SmKontakt } from "@/components/sections/social-media/SmKontakt";

/** Social-media voices — same shared Reviews bento as the rest of the site,
 *  but with the lavender accent the social pages own (green elsewhere). */
const SM_FEATURED = {
  quote:
    "Crediso schafft es, Kreativität und Strategie perfekt zu verbinden. Konzepte sehen nicht nur gut aus, sie funktionieren auch. Wer echte kreative Power will, sollte mit Crediso arbeiten.",
  name: "Genericon Pharma",
};

const SM_VOICES = [
  {
    quote:
      "Die Zusammenarbeit mit Crediso Media war von Anfang an äußerst professionell und angenehm. Besonders die kompetente Beratung und die lösungsorientierte Herangehensweise.",
    name: "Payam Jamil",
  },
  {
    quote:
      "Wir arbeiten seit einiger Zeit in verschiedenen Bereichen mit Crediso zusammen und sind rundum zufrieden! Alles wurde stets mit viel Sorgfalt und absoluter Zuverlässigkeit umgesetzt.",
    name: "UMJ Digital",
  },
  {
    quote:
      "Nachdem wir mehrere städtische Werbeagenturen ausprobiert haben, sind wir froh, endlich einen Langzeitpartner in Crediso gefunden zu haben.",
    name: "Barbara Hörmann",
  },
];

/** Social Media category overview — the main /social-media page. Implements the
 *  client's approved copy (Mai 2026): hero → trust badges → 4-tile service
 *  overview → "nicht sicher?" consult band → testimonials → closing contact.
 *  Built on the shared SmHero (reused by the four sub-pages) plus its own Sm*
 *  sections. */
export function SocialMedia() {
  return (
    <>
      <SmHeroBento />
      <SmTrust />
      <SmLeistungen />
      <SmNichtSicher />
      <Reviews accent="lavender" featured={SM_FEATURED} voices={SM_VOICES} />
      <SmKontakt />
    </>
  );
}
