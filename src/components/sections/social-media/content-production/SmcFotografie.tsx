const PROZESS = [
  "Planung & Kick-Off",
  "Konzept & Moodboard",
  "Fotoshooting",
  "Retusche",
  "Übergabe",
];

/** "Social Media Fotografie" — image (with an overlapping lavender pill tag) beside
 *  the copy, then a connected 5-node process ribbon spanning the full width: numbered
 *  lavender circles strung on one continuous line. The ribbon is the section's
 *  signature (distinct from Betreuung's per-column rails). */
export function SmcFotografie() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-card">
          <img
            src="/assets/images/project-akademie.png"
            alt="Social Media Fotoshooting von Crediso in Graz"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute left-5 top-5 rounded-pill bg-lavender px-4 py-1.5 font-display text-sm font-semibold text-ink">
            Social Media Fotografie Graz
          </span>
        </div>

        <div>
          <h2 className="h-display-sm text-ink">Momente einfangen, die auf Social Media wirken</h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink">
            Wir bieten dir ein umfassendes Rundum-Sorglos-Paket, das die Planung, Organisation und
            Durchführung von Fotoshootings vollständig abdeckt. Dabei arbeiten wir mit erfahrenen
            Fotograf:innen zusammen, die sich auf Social Media Content spezialisiert haben und genau
            wissen, worauf es bei emotionalem und authentischem Storytelling ankommt. Denn in den
            sozialen Medien geht es nicht nur um das eine perfekte Bild, sondern um echte, greifbare
            Emotionen und Geschichten, die deine Marke lebendig machen.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Vor jedem Shooting führen wir ein ausführliches Kick-Off-Gespräch, in dem wir die Themen
            für das Jahr, saisonale Schwerpunkte und Evergreen-Content planen. Anschließend stimmen
            wir ein detailliertes Moodboard mit dir ab.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Wir übernehmen die gesamte Organisation des Shootings – von Location und Requisiten bis zu
            Statist:innen. Unser Ziel: hochwertige, authentische Bilder, die deine Marke langfristig
            und wirkungsvoll präsentieren.
          </p>
        </div>
      </div>

      {/* Connected process ribbon */}
      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 bg-lavender lg:block"
        />
        <ol className="relative grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {PROZESS.map((schritt, i) => (
            <li key={schritt} className="flex flex-col items-center px-2 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender font-display text-lg font-bold text-ink">
                {i + 1}
              </span>
              <span className="mt-4 font-display text-sm font-semibold text-ink">{schritt}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
