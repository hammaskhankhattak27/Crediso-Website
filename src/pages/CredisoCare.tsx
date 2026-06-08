import { WebHero } from "@/components/sections/web/WebHero";
import { CcProblem } from "@/components/sections/crediso-care/CcProblem";
import { CcWasIst } from "@/components/sections/crediso-care/CcWasIst";
import { CcLeistungen } from "@/components/sections/crediso-care/CcLeistungen";
import { CcPreise } from "@/components/sections/crediso-care/CcPreise";
import { CcFuerWen } from "@/components/sections/crediso-care/CcFuerWen";
import { CcTestimonials } from "@/components/sections/crediso-care/CcTestimonials";
import { CcFaq } from "@/components/sections/crediso-care/CcFaq";
import { CcKontakt } from "@/components/sections/crediso-care/CcKontakt";

/** Crediso Care — website-care subscription. A "Web" category page built on the
 *  shared WebHero plus its own Cc* sections. Order mirrors the approved copy:
 *  hero → problem → what it is → what's included → price → for whom →
 *  testimonials → FAQ → contact. */
export function CredisoCare() {
  return (
    <>
      <WebHero
        eyebrow="Web · Crediso Care"
        title="Crediso Care"
        subtitle="Das Rundum-sorglos-Paket für deine Website."
        lead="Viele Websites veralten still und leise: Inhalte werden nicht aktualisiert, Sicherheitslücken bleiben offen, das Google-Ranking sinkt. Stell dir die Instandhaltung wie das Service beim Auto vor – ohne regelmäßige Pflege bleibt das System irgendwann stehen. Mit Crediso Care passiert dir das nicht. Wir kümmern uns um alles, damit du es nicht musst."
        primaryCta={{ label: "Jetzt Erstgespräch vereinbaren", href: "#contact" }}
        secondaryCta={{ label: "Was ist enthalten?", href: "#enthalten" }}
        badges={[
          "Über 300 Unternehmen erfolgreich betreut",
          "Über 7 Jahre Erfahrung im digitalen Marketing",
          "Ab €229 pro Monat, zzgl. MwSt.",
        ]}
        image={{
          src: "/assets/images/website/wartung.png",
          alt: "Crediso Mitarbeiter pflegt eine Website am Laptop",
        }}
      />
      <CcProblem />
      <CcWasIst />
      <CcLeistungen />
      <CcPreise />
      <CcFuerWen />
      <CcTestimonials />
      <CcFaq />
      <CcKontakt />
    </>
  );
}
