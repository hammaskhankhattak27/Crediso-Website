import { SmHero } from "@/components/sections/social-media/SmHero";
import { SmmFeatures } from "@/components/sections/social-media/mentoring/SmmFeatures";
import { SmmMentor } from "@/components/sections/social-media/mentoring/SmmMentor";
import { SmmPakete } from "@/components/sections/social-media/mentoring/SmmPakete";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

const FEATURED = {
  quote:
    "Vom Erstgespräch bis hin zur Umsetzung wurde ich vom innovativen Crediso Team betreut. Ich wusste immer über jeden Schritt Bescheid und die Kommunikation war einfach genial.",
  name: "Claudia Ruppert",
};

const VOICES = [
  {
    quote:
      "Zuerst wird mit allen Beteiligten eine ausführliche Analyse des Status Quo vorgenommen. Ich kann ein Erstgespräch mit Crediso jedem empfehlen, der online etwas weiterbringen möchte.",
    name: "Bernd Leitner",
  },
  {
    quote:
      "Mit großem Einsatz, viel Know-how und einem verlässlichen Auftreten wurden unsere Wünsche nicht nur verstanden, sondern auch hervorragend umgesetzt.",
    name: "Payam Jamil",
  },
  {
    quote:
      "Crediso schafft es, Kreativität und Strategie perfekt zu verbinden. Das Team hinterfragt, denkt weiter und bringt immer wieder neue Perspektiven ein.",
    name: "Genericon Pharma",
  },
];

/** Social Media Mentoring — the "macht's selbst, wir begleiten" sub-page. Uses the
 *  client's revised ("neu") copy. Shared category hero, then bespoke sections:
 *  stair-stepped features, portrait mentor block, two-package pricing, lavender
 *  testimonials and the page's own centered enquiry form. */
export function SocialMediaMentoring() {
  return (
    <>
      <SmHero
        title={
          <>
            Du postest. Aber der
            <br />
            Durchbruch bleibt aus.
          </>
        }
        subtitle="Social Media Mentoring Graz"
        lead="Mit persönlichem 1:1-Mentoring bekommst du die Strategie, das Feedback und die Begleitung, die deinen Social Media Auftritt in wenigen Wochen spürbar voranbringt."
        primaryCta={{ label: "Jetzt Mentoring anfragen", href: "#contact" }}
        secondaryCta={{ label: "Pakete ansehen", href: "#pakete" }}
        stats={[
          { value: "1:1", label: "persönliche Begleitung" },
          { value: "7+", label: "Jahre Praxiswissen" },
          { value: "300+", label: "Kunden im DACH-Raum" },
        ]}
        image={{ src: "/assets/images/hero-building.png", alt: "1:1 Social Media Mentoring bei Crediso" }}
      />
      <SmmFeatures />
      <SmmMentor />
      <SmmPakete />
      <Reviews accent="lavender" heading="Das sagen unsere Mentees" featured={FEATURED} voices={VOICES} />
      <Contact
        heading="Bereit für Social Media, das wirklich funktioniert?"
        intro="Du investierst bereits Zeit in Social Media – aber das Ergebnis spiegelt das noch nicht wider. Das ist kein Zeichen dafür, dass du es falsch machst. Es fehlt einfach die richtige Begleitung. Melde dich jetzt unverbindlich – du entscheidest danach in Ruhe."
        select={{
          label: "Welches Paket interessiert dich?",
          options: ["Monatliches Mentoring", "Mentoring-Paket (5 Stunden)", "Noch unsicher – beratet mich"],
        }}
        submitLabel="Jetzt unverbindlich anfragen"
      />
    </>
  );
}
