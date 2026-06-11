import { SmHero } from "@/components/sections/social-media/SmHero";
import { SmwAngebote } from "@/components/sections/social-media/workshops/SmwAngebote";
import { SmwFoerderung } from "@/components/sections/social-media/workshops/SmwFoerderung";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

const FEATURED = {
  quote:
    "Wir haben mit Crediso bereits zwei Workshops gemacht und sind rundum begeistert! Die Inhalte waren praxisnah, individuell auf uns abgestimmt und direkt umsetzbar. Absolute Empfehlung!",
  name: "Stelio Panseri",
};

const VOICES = [
  {
    quote:
      "Obwohl wir selbst schon einiges an Erfahrung haben, konnten wir uns so viele Dinge mitnehmen. Einiges sofort umsetzbar, dazu jede Menge Input für die nächsten Wochen. Wirklich top!",
    name: "Alexander Stegisch",
  },
  {
    quote:
      "Lina hat uns praktische Tipps und Insights zur Konzeption und Gestaltung von Reels gegeben. Praxisnah und einfach erklärt. Absolut empfehlenswert.",
    name: "ChaCha Bas",
  },
  {
    quote:
      "Unser Strategie-Workshop hat uns ein großes Stück vorangebracht. Wir fühlen uns sehr gut begleitet und freuen uns auf die weitere Zusammenarbeit!",
    name: "Elisabeth Faustmann",
  },
];

/** Social Media Workshops — the "lernt es selbst" sub-page. Shared category hero,
 *  then the price-ledger offers, the oversized KMU.Digital funding stat, lavender
 *  testimonials and the shared closing contact band. */
export function SocialMediaWorkshops() {
  return (
    <>
      <SmHero
        title={
          <>
            Social Media Workshops
            <br />
            für dein Unternehmen
          </>
        }
        subtitle="Praxisnah, individuell, zu 50 % förderbar"
        lead="Euer Team postet, aber die Ergebnisse fehlen? Unsere praxisorientierten Workshops vermitteln genau das Wissen, das ihr für euren Alltag braucht: zugeschnitten auf euer Unternehmen, direkt umsetzbar."
        primaryCta={{ label: "Zu den Workshop-Angeboten", href: "#angebote" }}
        stats={[
          { value: "50%", label: "förderbar über KMU.Digital" },
          { value: "4", label: "Workshop-Formate" },
          { value: "100%", label: "auf euch zugeschnitten" },
        ]}
        image={{ src: "/assets/images/hero-building.png", alt: "Social Media Workshop bei Crediso" }}
      />
      <SmwAngebote />
      <SmwFoerderung />
      <Reviews accent="lavender" heading="Das sagen unsere Workshop-Teilnehmer:innen" featured={FEATURED} voices={VOICES} />
      <Contact
        heading="Welcher Workshop passt zu euch?"
        intro="Nicht sicher, welcher Workshop für euer Team am besten geeignet ist? Schreibt uns kurz, was ihr sucht – wir melden uns mit einer Empfehlung."
        select={{
          label: "Welcher Workshop interessiert dich?",
          options: [
            "Social Media 1×1",
            "Content Workshop",
            "Strategie Workshop",
            "KI Workshop",
            "Noch unsicher – beratet mich",
          ],
        }}
        submitLabel="Jetzt anfragen"
      />
    </>
  );
}
