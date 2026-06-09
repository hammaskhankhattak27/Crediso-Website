import { cn } from "@/lib/utils";
import { Stars } from "@/components/ui/Icons";

type Surface = "grey" | "black";

interface Voice {
  num: string;
  quote: string;
  name: string;
  surface: Surface;
}

const VOICES: Voice[] = [
  {
    num: "01",
    quote:
      "Crediso schafft es, Kreativität und Strategie perfekt zu verbinden. Konzepte sehen nicht nur gut aus, sie funktionieren auch. Wer echte kreative Power will, sollte mit Crediso arbeiten.",
    name: "Genericon Pharma",
    surface: "grey",
  },
  {
    num: "02",
    quote:
      "Die Zusammenarbeit mit Crediso Media war von Anfang an äußerst professionell und angenehm. Besonders hervorheben möchte ich die kompetente Beratung und die lösungsorientierte Herangehensweise. So stellt man sich eine erfolgreiche Partnerschaft vor.",
    name: "Payam Jamil",
    surface: "black",
  },
  {
    num: "03",
    quote:
      "Wir arbeiten bereits seit einiger Zeit in verschiedenen Bereichen mit Crediso zusammen und sind rundum zufrieden! Egal ob großes oder kleines Projekt: Alles wurde stets mit viel Sorgfalt und absoluter Zuverlässigkeit umgesetzt.",
    name: "UMJ Digital",
    surface: "grey",
  },
  {
    num: "04",
    quote:
      "Nachdem wir mehrere städtische Werbeagenturen ausprobiert haben, sind wir als Firma froh darüber, endlich einen Langzeitpartner in Crediso gefunden zu haben.",
    name: "Barbara Hörmann",
    surface: "black",
  },
];

const THEME: Record<Surface, { card: string; badge: string; quote: string; name: string }> = {
  grey: {
    card: "bg-smoke",
    badge: "border-ink/15 text-ink",
    quote: "text-ink",
    name: "text-ink-soft",
  },
  black: {
    card: "bg-ink",
    badge: "border-paper/25 text-paper",
    quote: "text-paper",
    name: "text-lavender",
  },
};

export function SmTestimonials() {
  return (
    <section id="testimonials" className="bg-paper-cool section-y">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
            Kundenstimmen
          </span>
          <h2 className="mt-4 h-display-sm text-ink">Das sagen unsere Kund:innen</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VOICES.map((voice) => {
            const t = THEME[voice.surface];
            return (
              <figure
                key={voice.name}
                className={cn("flex flex-col rounded-card p-6", t.card)}
              >
                {/* Numbered badge top-left, rating top-right */}
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full border font-display text-xs font-bold",
                      t.badge,
                    )}
                  >
                    {voice.num}
                  </span>
                  <Stars className="shrink-0" />
                </div>

                <blockquote
                  className={cn("mt-6 font-body text-base leading-relaxed", t.quote)}
                >
                  {voice.quote}
                </blockquote>

                <figcaption className="mt-auto pt-6">
                  <span className={cn("font-display text-base font-semibold", t.name)}>
                    {voice.name}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
