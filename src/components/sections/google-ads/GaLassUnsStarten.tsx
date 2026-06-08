import { Button } from "@/components/ui/Button";

const ITEMS = [
  {
    title: "Persönliche Betreuung",
    body: "Direkte Ansprechpartner:innen statt anonymer Betreuung",
  },
  {
    title: "Transparente Zusammenarbeit",
    body: "Klare Einblicke in Strategie, Budget und Entwicklung",
  },
  {
    title: "Laufende Optimierung",
    body: "Wir betreuen und verbessern deine Kampagnen fortlaufend",
  },
];

export function GaLassUnsStarten() {
  return (
    <section className="section-shell section-y">
      <div className="rounded-card bg-teal-deep p-8 md:p-12 lg:p-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Headline + image */}
          <div className="flex flex-col">
            <img
              src="/assets/images/google-ads/lass-uns-starten.png"
              alt=""
              aria-hidden="true"
              className="h-28 w-28 rounded-full object-cover md:h-40 md:w-40"
            />
            <h2 className="mt-8 font-display text-[clamp(3.5rem,8vw,6.75rem)] font-bold leading-[0.95] tracking-display text-paper">
              Lass uns
              <br />
              starten.
            </h2>
          </div>

          {/* Feature list + CTA */}
          <div className="flex flex-col">
            {ITEMS.map((item, i) => (
              <div
                key={item.title}
                className={i > 0 ? "mt-6 border-t border-paper/15 pt-6" : ""}
              >
                <h3 className="font-display text-2xl font-semibold text-paper md:text-[1.75rem]">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-base text-paper/80">{item.body}</p>
              </div>
            ))}
            <div className="mt-9">
              <Button href="#contact" variant="light">
                Jetzt anfragen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
