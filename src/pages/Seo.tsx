import { WebHero } from "@/components/sections/web/WebHero";
import { SeoSaeulen } from "@/components/sections/seo/SeoSaeulen";
import { SeoZusammenarbeit } from "@/components/sections/seo/SeoZusammenarbeit";
import { Reviews, DEFAULT_VOICES } from "@/components/sections/Reviews";
import { SeoFaq, FAQS } from "@/components/sections/seo/SeoFaq";
import { WebKontakt } from "@/components/sections/web/WebKontakt";

/** Structured data per the copy brief — FAQPage (built from the same FAQ list
 *  the SeoFaq section renders) + LocalBusiness + ProfessionalService. */
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
    url: "https://crediso.io/seo/",
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
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Crediso – SEO Agentur Graz",
    url: "https://crediso.io/seo/",
    image: "https://crediso.io/assets/icons/logo.png",
    email: "hallo@crediso.io",
    telephone: "+43 664 136 47 86",
    areaServed: ["Graz", "Steiermark", "Österreich", "Deutschland", "Schweiz"],
    serviceType: [
      "Suchmaschinenoptimierung",
      "Lokales SEO",
      "Generative Engine Optimization (GEO)",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schmiedgasse 29",
      postalCode: "8010",
      addressLocality: "Graz",
      addressCountry: "AT",
    },
  },
];

/** Featured tile: the most SEO-relevant client voice from the copy brief. */
const FEATURED_REVIEW = {
  quote:
    "Super Service, mega gute Beratung und extreme Freundlichkeit. Auch die Google Platzierungen und die anderen Ergebnisse konnten wir sichtbar steigern. Top!",
  name: "Sonnberg Ferienanlage",
};

/** The brief's two remaining quotes, topped up with a shared default voice. */
const REVIEW_VOICES = [
  {
    quote:
      "Es dauerte nicht lange, bis die ersten Anfragen über die Homepage eintrudelten. Crediso ist eine Herzensempfehlung für alle, die auf Professionalität und Qualität bauen.",
    name: "Claudia Ruppert",
  },
  {
    quote:
      "Die Entscheidung, mit Crediso zu arbeiten, war ein voller Erfolg. Das engagierte Team hat meine Erwartungen übertroffen. Gemeinsam haben wir eine erfolgreiche Google Ads Kampagne erstellt.",
    name: "Apu",
  },
  DEFAULT_VOICES[0],
];

/** SEO Agentur Graz — a "Web" category page built on the shared WebHero plus
 *  its own Seo* sections. Order mirrors the approved copy: hero → drei Säulen →
 *  Zusammenarbeit → Testimonials → FAQ → Kontakt. Voice stays in the brief's
 *  ihr/euch form by design. */
export function Seo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <WebHero
        title={
          <>
            Bei Google gefunden werden.
            <br />
            Heute und morgen.
          </>
        }
        lead="Suchmaschinenoptimierung verändert sich gerade grundlegend: KI-Antworten, neue Rankingfaktoren und die veränderte Google-Ergebnisseite machen SEO komplexer als je zuvor. Wer jetzt richtig aufgestellt ist, hat einen Vorsprung, der über Jahre wirkt. Wir begleiten Unternehmen aus Graz und dem DACH-Raum mit klassischem SEO, lokalem SEO und GEO für die KI-Suche."
        primaryCta={{ label: "Jetzt kostenloses Erstgespräch vereinbaren", href: "#contact" }}
        secondaryCta={{ label: "Die drei Säulen", href: "#saeulen" }}
        stats={[
          { value: "300+", label: "Unternehmen erfolgreich betreut" },
          { value: "7+", label: "Jahre Erfahrung im digitalen Marketing" },
          { value: "DACH", label: "Kunden von Graz bis Zürich" },
        ]}
        image={{
          src: "/assets/images/website/foerderung-team.png",
          alt: "SEO Agentur Graz Crediso – das Team bespricht eine SEO-Strategie",
        }}
      />
      <SeoSaeulen />
      <SeoZusammenarbeit />
      <Reviews featured={FEATURED_REVIEW} voices={REVIEW_VOICES} />
      <SeoFaq />
      <WebKontakt
        heading="Jetzt SEO-Gespräch vereinbaren"
        copy="Ihr wollt wissen, wo ihr bei Google steht und was euch wirklich weiterbringt? Meldet euch für ein kostenloses Erstgespräch. Wir lernen euch kennen, besprechen eure Ziele und erklären, wie wir vorgehen."
        ctaLabel="Jetzt kostenloses Erstgespräch vereinbaren"
      />
    </>
  );
}
