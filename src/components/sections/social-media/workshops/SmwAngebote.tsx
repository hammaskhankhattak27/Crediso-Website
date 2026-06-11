import { Button } from "@/components/ui/Button";

interface Workshop {
  title: string;
  body: string;
  dauer: string;
  normal: string;
  foerder: string;
}

const WORKSHOPS: Workshop[] = [
  {
    title: "Social Media 1×1",
    body: "Die relevanten Maßnahmen, Trends und Tools für erfolgreiches Social Media Marketing – für mehr Reichweite und Engagement.",
    dauer: "2 Stunden",
    normal: "890",
    foerder: "445",
  },
  {
    title: "Content Workshop",
    body: "Kurzvideos für Social Media professionell erstellen und schneiden – mit den passenden Tools und Gadgets.",
    dauer: "2–3 Stunden",
    normal: "890",
    foerder: "445",
  },
  {
    title: "Strategie Workshop",
    body: "Optimiert eure Social Media Strategie durch präzise Analysen, Empfehlungen und Benchmark-Auswertungen.",
    dauer: "3 Std. Analyse + 1,5 Std. Workshop",
    normal: "1.190",
    foerder: "595",
  },
  {
    title: "KI Workshop",
    body: "Wie künstliche Intelligenz eure Social Media Präsenz optimiert und die Content-Erstellung spürbar verbessert.",
    dauer: "1,5 Stunden",
    normal: "790",
    foerder: "395",
  },
];

/** Workshop offers as a 2×2 grid of hard-offset-shadow cards (the site's
 *  Google-Ads-pricing card style), recoloured green-free: ink border + lavender
 *  accents. Each card pins its price block to the bottom — struck Normalpreis,
 *  large Förderpreis and a CTA. */
export function SmwAngebote() {
  return (
    <section id="angebote" className="section-shell section-y">
      <div className="max-w-3xl">
        <h2 className="h-display text-ink">Unsere Workshop-Angebote</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink">
          Alle Workshops sind zu 50 % über KMU.Digital förderbar. Auf jeder Karte seht ihr den
          Normalpreis und den geförderten Preis – einmalig, exkl. USt.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
        {WORKSHOPS.map((workshop) => (
          <article
            key={workshop.title}
            className="flex flex-col rounded-card border-2 border-ink bg-paper p-8 shadow-[5px_5px_0_0_rgba(0,0,0,1)] md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
                  {workshop.title}
                </h3>
                <span className="mt-2 inline-block font-display text-sm font-medium uppercase tracking-wide text-ink-soft">
                  {workshop.dauer}
                </span>
              </div>
              <span className="shrink-0 rounded-pill bg-lavender px-3 py-1.5 font-display text-xs font-bold text-ink">
                −50 %
              </span>
            </div>

            <p className="mt-5 flex-1 font-body text-base leading-relaxed text-ink">
              {workshop.body}
            </p>

            <div className="mt-8 border-t border-ink/15 pt-6">
              <div className="flex items-end gap-3">
                <span className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                  € {workshop.foerder}
                </span>
                <span className="mb-1.5 font-body text-lg text-mute line-through">
                  € {workshop.normal}
                </span>
              </div>
              <p className="mt-2 font-body text-sm text-ink-soft">
                einmalig · exkl. USt. · 50 % über KMU.Digital gefördert
              </p>
              <div className="mt-6">
                <Button href="#contact" variant="dark" size="md">
                  Jetzt anfragen
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
