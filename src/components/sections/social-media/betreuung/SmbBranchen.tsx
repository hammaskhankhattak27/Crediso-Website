const BRANCHEN = [
  "Gastronomie & Hotellerie",
  "Sport & Freizeit",
  "Ordinationen",
  "Schönheit & Wellness",
  "Kunst & Kultur",
  "Öffentlicher Sektor",
  "Immobilien & Bauträger",
  "Handel",
  "Auto & Motor",
  "E-Commerce",
  "B2B",
  "Kreativbranche",
];

/** "Wir kennen eure Branche" — the twelve industries as a free-flowing pill
 *  cluster rather than a grid. The wrapping tag cloud is its own layout idiom,
 *  used only here. */
export function SmbBranchen() {
  return (
    <section className="section-shell section-y">
      <div className="max-w-3xl">
        <h2 className="h-display text-ink">Wir kennen eure Branche</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink">
          Social Media funktioniert nicht überall gleich. Wir kennen die Besonderheiten
          verschiedener Branchen und passen unsere Arbeit entsprechend an.
        </p>
      </div>

      <ul className="mt-10 flex flex-wrap gap-3">
        {BRANCHEN.map((branche) => (
          <li
            key={branche}
            className="rounded-pill border border-ink px-5 py-2.5 font-display text-base font-medium text-ink transition-colors hover:bg-lavender"
          >
            {branche}
          </li>
        ))}
      </ul>
    </section>
  );
}
