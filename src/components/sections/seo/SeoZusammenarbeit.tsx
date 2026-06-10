import { Button } from "@/components/ui/Button";
import { Search } from "./SeoIcons";

interface Step {
  slug: string;
  title: string;
  body: string;
}

/** The single paragraph of the copy brief, restructured into its implicit
 *  three steps: Erstgespräch → Analyse → Maßnahmen. */
const STEPS: Step[] = [
  {
    slug: "schritt-1",
    title: "Kostenloses Erstgespräch",
    body: "Wir besprechen eure Ziele und schauen uns eure aktuelle Situation an – unverbindlich und kostenlos.",
  },
  {
    slug: "schritt-2",
    title: "Genaue Analyse",
    body: "Wir analysieren euren gesamten Online-Auftritt: Website, Google Business Profil, lokale Sichtbarkeit und mehr. Danach wissen wir, wo wir gezielt anpacken müssen.",
  },
  {
    slug: "schritt-3",
    title: "Gezielte Maßnahmen",
    body: "Manchmal sind es kleine Maßnahmen, die viel bewegen – manchmal braucht es eine umfassendere Strategie. Wir empfehlen, was zu euch passt.",
  },
];

/** So arbeiten wir — the process staged as a Google results page: a mock
 *  search bar with a blinking caret, the three steps as "Suchergebnisse"
 *  with crediso.io breadcrumbs, and the payoff as a mint #1 result carrying
 *  the CTA. A process section that only makes sense on the SEO page. */
export function SeoZusammenarbeit() {
  return (
    <section id="zusammenarbeit" className="section-shell section-y">
      <h2 className="max-w-3xl h-display text-ink">So sieht die Zusammenarbeit aus</h2>

      {/* The "results page" canvas */}
      <div className="mt-12 rounded-card bg-smoke p-6 md:p-12">
        {/* Mock search bar — decorative flavor, not a real input */}
        <div className="flex max-w-2xl items-center gap-3 rounded-pill border border-ink bg-paper px-5 py-3.5 md:gap-4 md:px-6">
          <Search className="h-5 w-5 shrink-0 text-ink-soft" />
          <span className="truncate font-display text-base font-medium text-ink md:text-lg">
            seo agentur graz
          </span>
          <span aria-hidden="true" className="h-[1.15em] w-[2px] shrink-0 animate-pulse bg-ink" />
        </div>
        <p className="mt-4 font-body text-sm text-mute">Ungefähr 3 Schritte (0,27 Sekunden)</p>

        {/* The three steps as search results */}
        <ol className="mt-4">
          {STEPS.map((step) => (
            <li key={step.slug} className="border-b border-ink/10 py-7 md:py-8">
              <span className="font-body text-sm text-teal-deep">
                crediso.io <span aria-hidden="true">›</span> {step.slug}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-display text-ink md:text-[1.75rem]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-3xl font-body text-lg leading-relaxed text-ink">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        {/* The payoff: your company as the #1 result */}
        <div className="mt-8 rounded-card bg-mint p-8 md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            <div className="flex items-start gap-5 md:gap-7">
              <span className="font-display text-[clamp(3.5rem,7vw,6rem)] font-bold leading-none tracking-display text-teal-deep">
                #1
              </span>
              <div className="pt-1">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-display text-ink md:text-[1.75rem]">
                  Euer Unternehmen – ganz oben.
                </h3>
                <p className="mt-3 font-body text-lg leading-relaxed text-ink">
                  Genau dorthin arbeiten wir. Schritt für Schritt, messbar und nachvollziehbar.
                </p>
              </div>
            </div>
            <Button href="#contact">Jetzt kostenloses Erstgespräch vereinbaren</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
