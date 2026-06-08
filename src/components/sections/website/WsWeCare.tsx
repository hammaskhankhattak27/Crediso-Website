import { Button } from "@/components/ui/Button";

const ITEMS = [
  {
    title: ["Technische", "Instandhaltung"],
    body: "Updates, Sicherheits-Patches, Hosting-Überwachung — alles läuft im Hintergrund.",
  },
  {
    title: ["Inhalte", "aktualisieren"],
    body: "Neue Leistungen, aktuelle Preise, frische Bilder. Wir halten deine Website lebendig.",
  },
  {
    title: ["Google", "Ranking"],
    body: "Wir behalten deine SEO-Performance im Blick und reagieren auf Veränderungen.",
  },
];

export function WsWeCare() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[2fr_3fr]">
        {/* Left — maintenance list */}
        <div className="flex flex-col justify-between gap-8 rounded-card border border-ink bg-paper p-8 md:p-10">
          {ITEMS.map((item) => (
            <div key={item.title[1]}>
              <h3 className="font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-ink-soft md:text-[2.5rem]">
                {item.title[0]}
                <br />
                {item.title[1]}
              </h3>
              <p className="mt-3 font-body text-lg leading-relaxed text-graphite">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Right — We Care A Lot. */}
        <div className="flex flex-col rounded-card bg-[#004B3E] p-8 text-paper md:p-12">
          <h2 className="text-right font-display text-[clamp(4rem,11vw,9.25rem)] font-semibold leading-[0.92]">
            We Care
            <br />
            A Lot.
          </h2>
          <p className="mt-8 max-w-md self-end text-right font-display text-2xl font-medium leading-snug text-paper">
            Damit deine Website genauso professionell bleibt wie dein Unternehmen — technische
            Instandhaltung, Inhalte aktualisieren, Google-Ranking im Blick behalten. Alles aus einer
            Hand.
          </p>
          <div className="mt-8 self-end">
            <Button href="#contact" variant="light">
              Mehr über Crediso Care
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
