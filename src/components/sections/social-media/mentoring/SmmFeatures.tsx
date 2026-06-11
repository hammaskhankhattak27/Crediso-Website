import { cn } from "@/lib/utils";

interface Feature {
  num: string;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    num: "01",
    title: "Strategie statt Raten",
    body: "Du weißt endlich, was du wann und warum postest. Kein Leerlauf mehr, keine Content-Blockaden.",
  },
  {
    num: "02",
    title: "Sichtbare Fortschritte",
    body: "Unsere Mentees berichten im Schnitt von deutlich mehr Reichweite und Anfragen – bereits nach den ersten Sessions.",
  },
  {
    num: "03",
    title: "Ehrliches Feedback, das weiterbringt",
    body: "Kein höfliches Nicken. Du bekommst einen klaren, externen Blick auf deinen Auftritt – und konkrete Schritte zur Verbesserung.",
  },
];

/** "Was dich im Mentoring erwartet" — three reasons as oversized, zig-zagging
 *  editorial rows: a giant lavender numeral on one side, the title + copy on the
 *  other, sides alternating per row, divided by full-width hairlines. The
 *  big-numeral alternating-rows treatment is unique to this page. */
export function SmmFeatures() {
  return (
    <section className="section-shell section-y">
      <h2 className="h-display max-w-3xl text-ink">Was dich im Mentoring erwartet</h2>

      <div className="mt-10 border-t border-ink/15">
        {FEATURES.map((feature, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={feature.num}
              className={cn(
                "flex flex-col gap-4 border-b border-ink/15 py-10 md:flex-row md:items-center md:gap-14 md:py-16",
                flip && "md:flex-row-reverse",
              )}
            >
              <span
                className={cn(
                  "font-display text-[clamp(4.5rem,13vw,9rem)] font-bold leading-[0.8] tracking-tight text-lavender md:w-64 md:shrink-0",
                  flip && "md:text-right",
                )}
              >
                {feature.num}
              </span>

              <div className="flex-1">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-ink">
                  {feature.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
