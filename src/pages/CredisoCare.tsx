import { WebHero } from "@/components/sections/web/WebHero";
import { CcProblem } from "@/components/sections/crediso-care/CcProblem";
import { CcWasIst } from "@/components/sections/crediso-care/CcWasIst";
import { CcLeistungen } from "@/components/sections/crediso-care/CcLeistungen";
import { CcPreise } from "@/components/sections/crediso-care/CcPreise";
import { CcFuerWen } from "@/components/sections/crediso-care/CcFuerWen";
import { Reviews } from "@/components/sections/Reviews";
import { CcFaq, FAQS } from "@/components/sections/crediso-care/CcFaq";
import { WebKontakt } from "@/components/sections/web/WebKontakt";

/** Structured data for the page — FAQPage (built from the same FAQ list the
 *  CcFaq section renders) + LocalBusiness, per the copy brief. */
const STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Crediso",
    url: "https://crediso.io/crediso-care/",
    image: "https://crediso.io/assets/icons/logo.png",
    email: "hallo@crediso.io",
    telephone: "+43 664 136 47 86",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schmiedgasse 29",
      postalCode: "8010",
      addressLocality: "Graz",
      addressCountry: "AT",
    },
  },
];

/** Crediso Care — website-care subscription. A "Web" category page built on the
 *  shared WebHero plus its own Cc* sections. Order mirrors the approved copy:
 *  hero → problem → what it is → what's included → price → for whom →
 *  testimonials → FAQ → contact. */
export function CredisoCare() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <WebHero
        title="Crediso Care"
        subtitle="Das Rundum-sorglos-Paket für deine Website."
        lead="Viele Websites veralten still und leise: Inhalte werden nicht aktualisiert, Sicherheitslücken bleiben offen, das Google-Ranking sinkt. Stell dir die Instandhaltung wie das Service beim Auto vor – ohne regelmäßige Pflege bleibt das System irgendwann stehen. Mit Crediso Care passiert dir das nicht. Wir kümmern uns um alles, damit du es nicht musst."
        primaryCta={{ label: "Jetzt Erstgespräch vereinbaren", href: "#contact" }}
        secondaryCta={{ label: "Was ist enthalten?", href: "#enthalten" }}
        stats={[
          { value: "300+", label: "betreute Unternehmen" },
          { value: "7+", label: "Jahre Erfahrung" },
          { value: "ab €229", label: "im Monat, zzgl. MwSt." },
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
      <Reviews />
      <CcFaq />
      <WebKontakt
        heading="Deine Website in guten Händen."
        copy="Melde dich für ein kostenloses Erstgespräch. Wir schauen uns gemeinsam an, was du brauchst und welches Paket am besten zu dir passt – unverbindlich und kostenlos."
      />
    </>
  );
}
