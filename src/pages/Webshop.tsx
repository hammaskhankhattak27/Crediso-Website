import { WebHero } from "@/components/sections/web/WebHero";
import { OsLeistungen } from "@/components/sections/webshop/OsLeistungen";
import { OsGruenderin } from "@/components/sections/webshop/OsGruenderin";
import { OsFahrplan } from "@/components/sections/webshop/OsFahrplan";
import { OsPlattformen } from "@/components/sections/webshop/OsPlattformen";
import { OsBereit } from "@/components/sections/webshop/OsBereit";
import { Contact } from "@/components/sections/Contact";

/** Webshop / Onlineshop service page — a "Web" category page built on the
 *  shared WebHero plus its own Os* sections. Order mirrors the Figma frame:
 *  hero → Leistungen → Gründerin → Fahrplan → Plattformen → CTA → Kontakt. */
export function Webshop() {
  return (
    <>
      <WebHero
        title={
          <>
            Dein Onlineshop.
            <br />
            Professionell, Userfreundlich, Erfolgreich.
          </>
        }
        lead="E-Commerce boomt – ein Onlineshop ist heute weit mehr als nur ein Vertriebskanal. Er ist das digitale Schaufenster deines Unternehmens, rund um die Uhr geöffnet für Kund:innen weltweit. Erfolg entsteht durch mehr als schöne Bilder: Benutzerfreundlichkeit, Leistung und Strategie zählen."
        primaryCta={{ label: "Jetzt anfragen", href: "#contact" }}
        secondaryCta={{ label: "Unsere Referenzen", href: "/referenzen" }}
        stats={[
          { value: "100+", label: "Onlineshops aufgebaut" },
          { value: "Seit 2019", label: "E-Commerce-Erfahrung" },
        ]}
        image={{
          src: "/assets/images/webshop/hero.png",
          alt: "Das Crediso Team plant gemeinsam ein E-Commerce-Projekt",
        }}
      />
      <OsLeistungen />
      <OsGruenderin />
      <OsFahrplan />
      <OsPlattformen />
      <OsBereit />
      <Contact />
    </>
  );
}
