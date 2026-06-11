import { Plus } from "../SmIcons";

interface Faq {
  q: string;
  a: string;
}

const FAQS: Faq[] = [
  {
    q: "Warum ist Social Media so wichtig für mein Unternehmen?",
    a: "Plattformen wie Instagram, Facebook, LinkedIn und TikTok sind heute keine Nice-to-haves mehr. Sie sind der direkteste Kanal zu eurer Zielgruppe. Wer dort nicht sichtbar ist, wird übersehen. Gleichzeitig bieten sie die Möglichkeit, Vertrauen aufzubauen, neue Kunden zu gewinnen und bestehende Beziehungen zu vertiefen.",
  },
  {
    q: "Welche Plattformen sind für mein Unternehmen relevant?",
    a: "Das hängt von eurer Branche und Zielgruppe ab. Für die meisten KMUs sind Instagram und Facebook ein guter Start. LinkedIn eignet sich besonders für B2B, TikTok für jüngere Zielgruppen und virale Reichweite. Wir analysieren das gemeinsam mit euch und empfehlen nur Kanäle, die wirklich Sinn machen.",
  },
  {
    q: "Wie oft muss ich auf Social Media posten?",
    a: "Qualität schlägt Quantität. Lieber 2–3 hochwertige Posts pro Woche als täglich mittelmäßige Inhalte. Wir entwickeln gemeinsam einen Contentplan, der realistisch und wirksam ist.",
  },
  {
    q: "Was unterscheidet Crediso von anderen Social Media Agenturen in Graz?",
    a: "Bei uns habt ihr immer einen fixen Ansprechpartner, der euer Unternehmen wirklich kennt. Keine wechselnden Teams, kein Neustart bei jedem Briefing. Seit über 7 Jahren und mit mehr als 300 betreuten Kunden wissen wir, was nachhaltig funktioniert.",
  },
  {
    q: "Muss ich selbst Content liefern?",
    a: "Nein. Wir übernehmen die komplette Content-Produktion: von Foto- und Video-Shootings über Grafiken bis hin zu Texten. Ihr müsst euch nur um die Freigabe kümmern.",
  },
  {
    q: "Wie läuft der Start mit Crediso ab?",
    a: "Zunächst lernen wir uns in einem kostenlosen Erstgespräch kennen. Danach analysieren wir eure bisherige Präsenz und entwickeln ein Konzept. Nach dem Kick-off mit Fotoshooting und Contentplan starten wir mit der laufenden Betreuung.",
  },
];

/** "Häufige Fragen" — a single-column accordion built on native <details>/<summary>
 *  so it works without JS and stays accessible. The toggling disclosure list is
 *  the only accordion on the page. */
export function SmbFaq() {
  return (
    <section className="section-shell section-y">
      <div className="mx-auto max-w-3xl">
        <h2 className="h-display text-ink">Häufige Fragen zur Social Media Betreuung</h2>

        <div className="mt-10 border-t border-ink/15">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group border-b border-ink/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-semibold text-ink md:text-xl">
                  {faq.q}
                </span>
                <Plus className="h-6 w-6 shrink-0 text-ink transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="-mt-1 max-w-2xl pb-6 font-body text-base leading-relaxed text-ink">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
