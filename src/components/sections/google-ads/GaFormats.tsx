import { Check } from "@/components/sections/google-ads/GaIcons";

const FORMATS = [
  {
    title: "Google Search Ads",
    body: "Erscheine bei relevanten Suchanfragen genau dann, wenn potenzielle Kund:innen aktiv suchen.",
    tags: ["Suchanzeigen", "Anruferweiterungen", "Sitelinks"],
  },
  {
    title: "Google Shopping",
    body: "Präsentiere deine Produkte mit Foto und Preis direkt in den Suchergebnissen.",
    tags: ["Produktanzeigen", "Shopping-Feed", "Performance Max"],
  },
  {
    title: "Google Display Ads",
    body: "Erreiche Nutzer:innen auch außerhalb der Suche – über das größte Werbenetzwerk der Welt.",
    tags: ["Bannerwerbung", "Zielgruppen", "Remarketing"],
  },
  {
    title: "YouTube Ads",
    body: "Baue Markenbekanntheit auf und gewinne neue Kund:innen mit zielgruppengenauer Videowerbung.",
    tags: ["Video Ads", "Skippable Ads", "Bumper Ads"],
  },
];

export function GaFormats() {
  return (
    <section className="section-shell section-y">
      <h2 className="h-display text-ink">
        Welche Google Ads
        <br />
        Formate bieten wir an?
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {FORMATS.map((format) => (
          <article
            key={format.title}
            className="flex min-h-[266px] flex-col rounded-card border border-sage bg-paper p-8"
          >
            <h3 className="font-display text-[2rem] font-semibold leading-tight tracking-tight text-green-ink md:text-[2.4rem]">
              {format.title}
            </h3>
            <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-ink">
              {format.body}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-sage pt-6">
              {format.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-deep text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-display text-base font-semibold text-ink">{tag}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
