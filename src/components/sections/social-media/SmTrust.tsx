import { Check } from "./SmIcons";

const TRUST_BADGES = [
  "Über 300 Unternehmen erfolgreich betreut",
  "Über 7 Jahre Erfahrung im Social Media Management",
  "Millionenfach Impressionen für unsere Kunden generiert",
  "Hunderte Beiträge, Reels und Ads für lokale und internationale Marken",
  "Von Graz bis Zürich: Kunden aus dem gesamten DACH-Raum",
];

function MarqueeRow() {
  // Quadruple the sequence so the -50% translate loops seamlessly.
  const sequence = [...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES];
  return (
    <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8 md:gap-12 md:pr-12">
      {sequence.map((badge, i) => (
        <li key={`${badge}-${i}`} className="flex items-center gap-8 md:gap-12">
          <span className="flex items-center gap-3 whitespace-nowrap">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
              <Check className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold text-ink-soft md:text-xl">
              {badge}
            </span>
          </span>
          <span aria-hidden="true" className="text-2xl leading-none text-ink">
            &bull;
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Full-bleed trust band right below the hero — the client's five trust badges
 *  as a continuous lavender marquee (homepage-Ticker style). The moving strip is
 *  decorative; an sr-only list carries the badges for assistive tech. */
export function SmTrust() {
  return (
    <section className="flex overflow-hidden bg-lavender py-5 md:py-6">
      <ul className="sr-only">
        {TRUST_BADGES.map((badge) => (
          <li key={badge}>{badge}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="flex overflow-hidden">
        <MarqueeRow />
      </div>
    </section>
  );
}
