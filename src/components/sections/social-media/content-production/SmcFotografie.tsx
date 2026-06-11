const PROZESS = [
  { nr: "01", title: "Planung & Kick-Off", desc: "Themen, Saison & Evergreens fürs Jahr." },
  { nr: "02", title: "Konzept & Moodboard", desc: "Looks, Farben & Bildsprache abgestimmt." },
  { nr: "03", title: "Fotoshooting", desc: "Location, Requisiten & Statist:innen." },
  { nr: "04", title: "Retusche", desc: "Feinschliff für ein stimmiges Feed-Bild." },
  { nr: "05", title: "Übergabe", desc: "Fertige Assets, bereit zum Posten." },
];

/** "Social Media Fotografie" — image (with an overlapping lavender pill tag) beside
 *  the copy, then the 5-step process rendered as a 35mm film strip: each step is a
 *  frame (lavender number + label + micro-copy) on a dark strip with sprocket holes
 *  along both edges. The film-strip motif is the section's photography-themed
 *  signature; it scrolls horizontally on mobile and sits as an even 5-up on desktop. */
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

      {/* Process — a 35mm film strip: each step is a frame, sprocket holes run along
          the top and bottom edge. Scrolls horizontally on mobile, even 5-up on desktop. */}
      <div className="mt-16">
        <h3 className="font-display text-xl font-semibold text-ink">
          Der Weg zu erfolgreichem Content
        </h3>
        <div className="mt-6 overflow-x-auto no-scrollbar rounded-card bg-ink">
          <ol className="flex min-w-max lg:min-w-0">
            {PROZESS.map((schritt) => (
              <li
                key={schritt.nr}
                className="flex w-44 shrink-0 snap-start flex-col border-l border-paper/10 first:border-l-0 lg:w-auto lg:flex-1"
              >
                {/* top sprocket holes */}
                <span aria-hidden="true" className="flex justify-around px-3 pt-3">
                  <i className="h-2.5 w-4 rounded-sm bg-paper/25" />
                  <i className="h-2.5 w-4 rounded-sm bg-paper/25" />
                </span>

                {/* frame */}
                <div className="flex flex-1 flex-col px-5 py-6">
                  <span className="font-display text-4xl font-bold leading-none text-lavender">
                    {schritt.nr}
                  </span>
                  <span className="mt-4 font-display text-base font-semibold text-paper">
                    {schritt.title}
                  </span>
                  <span className="mt-2 font-body text-sm leading-snug text-paper/55">
                    {schritt.desc}
                  </span>
                </div>

                {/* bottom sprocket holes */}
                <span aria-hidden="true" className="flex justify-around px-3 pb-3">
                  <i className="h-2.5 w-4 rounded-sm bg-paper/25" />
                  <i className="h-2.5 w-4 rounded-sm bg-paper/25" />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
