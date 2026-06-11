import { SmHero } from "@/components/sections/social-media/SmHero";
import { SmcIntro } from "@/components/sections/social-media/content-production/SmcIntro";
import { SmcFotografie } from "@/components/sections/social-media/content-production/SmcFotografie";
import { SmcVideo } from "@/components/sections/social-media/content-production/SmcVideo";
import { SmcCaptions } from "@/components/sections/social-media/content-production/SmcCaptions";
import { SmcUgc } from "@/components/sections/social-media/content-production/SmcUgc";
import { Contact } from "@/components/sections/Contact";

/** Social Media Content Production — full page on the client's approved copy:
 *  Fotografie, Video/Reels, Text/Captions and UGC/Influencer-Marketing, each as
 *  its own bespoke (and green-free) section. */
export function SocialMediaContentProduction() {
  return (
    <>
      <SmHero
        title={
          <>
            Content, der
            <br />
            Geschichten erzählt.
          </>
        }
        subtitle="Social Media Content Produktion Graz"
        lead="Erfolgreiche Inhalte leben von Emotionen und Storytelling. Wir erstellen Fotos, Videos und Texte, die deine Botschaft vermitteln und deine Zielgruppe direkt ansprechen."
        primaryCta={{ label: "Projekt anfragen", href: "#contact" }}
        stats={[
          { value: "4", label: "Content-Disziplinen" },
          { value: "300+", label: "Kunden im DACH-Raum" },
          { value: "Mio.+", label: "Views & Impressionen" },
        ]}
        image={{ src: "/assets/images/hero-building.png", alt: "Content-Produktion bei Crediso" }}
      />
      <SmcIntro />
      <SmcFotografie />
      <SmcVideo />
      <SmcCaptions />
      <SmcUgc />
      <Contact
        heading="Bereit für Content, der performt?"
        intro="Erzähl uns kurz von deinem Projekt – ob Fotoshooting, Video, Captions oder eine Influencer-Kampagne. Wir melden uns mit den nächsten Schritten."
        select={{
          label: "Wofür brauchst du Content?",
          options: ["Fotografie", "Reels / TikToks / Video", "Text / Captions", "UGC & Influencer", "Komplettpaket"],
        }}
        submitLabel="Projekt anfragen"
      />
    </>
  );
}
