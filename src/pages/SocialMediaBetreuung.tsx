import { SmHero } from "@/components/sections/social-media/SmHero";
import { SmTrust } from "@/components/sections/social-media/SmTrust";
import { SmbUnterschied } from "@/components/sections/social-media/betreuung/SmbUnterschied";
import { SmbStrategie } from "@/components/sections/social-media/betreuung/SmbStrategie";
import { SmbBetreuung } from "@/components/sections/social-media/betreuung/SmbBetreuung";
import { SmbAds } from "@/components/sections/social-media/betreuung/SmbAds";
import { SmbBranchen } from "@/components/sections/social-media/betreuung/SmbBranchen";
import { SmbFaq } from "@/components/sections/social-media/betreuung/SmbFaq";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

const FEATURED = {
  quote:
    "Noch nie so persönliche tolle Betreuung im Bereich Social Media erfahren. Allen voran Lina, sie arbeitet mit dem gleichen Herzblut und der gleichen Leidenschaft, als würde ich es selber machen.",
  name: "Markus Neuhold",
};

const VOICES = [
  {
    quote:
      "Ein ganz besonderes Lob geht an Lina, die sich mit unglaublich viel Herzblut und Professionalität um meine Social Media Präsenz gekümmert hat. Ihre kreative Energie hat mich total begeistert!",
    name: "Sophie Pölzl",
  },
  {
    quote:
      "Egal ob spontane Reeltermine, monatliche Contentplanung oder generelle Hilfe: Lina steht uns zur Seite, wann immer wir sie brauchen. Danke für die tolle Zusammenarbeit.",
    name: "Sara Popo",
  },
  {
    quote:
      "Nach jahrelanger Zusammenarbeit kann ich Crediso aus vollstem Herzen empfehlen. Endlich haben wir einen Langzeitpartner gefunden.",
    name: "Barbara Hörmann",
  },
];

/** Social Media Betreuung — the "wir übernehmen alles" sub-page. Shared category
 *  hero + trust marquee, then six bespoke sections (each a distinct layout),
 *  lavender testimonials and the shared closing contact band. */
export function SocialMediaBetreuung() {
  return (
    <>
      <SmHero
        title={
          <>
            Mehr Reichweite.
            <br />
            Weniger Stress.
          </>
        }
        subtitle="Social Media Betreuung Graz"
        lead="Als Unternehmen habt ihr täglich genug zu tun. Wir übernehmen Social Media komplett: Strategie, Content, Community und Ads. Ihr kümmert euch um euer Kerngeschäft, wir um den Rest."
        primaryCta={{ label: "Jetzt kostenloses Erstgespräch vereinbaren", href: "#contact" }}
        stats={[
          { value: "300+", label: "Unternehmen betreut" },
          { value: "7+", label: "Jahre Erfahrung" },
          { value: "Mio.+", label: "Impressionen generiert" },
        ]}
        image={{ src: "/assets/images/hero-building.png", alt: "Das Crediso-Team bei der Arbeit" }}
      />
      <SmTrust />
      <SmbUnterschied />
      <SmbStrategie />
      <SmbBetreuung />
      <SmbAds />
      <SmbBranchen />
      <Reviews accent="lavender" heading="Das sagen unsere Betreuungs-Kund:innen" featured={FEATURED} voices={VOICES} />
      <SmbFaq />
      <Contact
        heading="Jetzt loslegen"
        intro="Ihr wisst, dass Social Media für euer Unternehmen wichtig ist und wollt das endlich in professionelle Hände geben? Dann meldet euch. Telefonisch, per Mail oder direkt hier."
        submitLabel="Jetzt kostenloses Erstgespräch vereinbaren"
      />
    </>
  );
}
