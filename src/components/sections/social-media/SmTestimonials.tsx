import { cn } from "@/lib/utils";
import { Stars } from "@/components/ui/Icons";
import { Quote } from "./SmIcons";

type Surface = "black" | "mint" | "lavender" | "smoke";

interface Voice {
  quote: string;
  name: string;
  surface: Surface;
}

const FEATURED: Voice = {
  quote:
    "Crediso schafft es, Kreativität und Strategie perfekt zu verbinden. Konzepte sehen nicht nur gut aus, sie funktionieren auch. Wer echte kreative Power will, sollte mit Crediso arbeiten.",
  name: "Genericon Pharma",
  surface: "lavender",
};

const VOICES: Voice[] = [
  {
    quote:
      "Die Zusammenarbeit mit Crediso Media war von Anfang an äußerst professionell und angenehm. Besonders die kompetente Beratung und die lösungsorientierte Herangehensweise.",
    name: "Payam Jamil",
    surface: "smoke",
  },
  {
    quote:
      "Wir arbeiten seit einiger Zeit in verschiedenen Bereichen mit Crediso zusammen und sind rundum zufrieden! Alles wurde stets mit viel Sorgfalt und absoluter Zuverlässigkeit umgesetzt.",
    name: "UMJ Digital",
    surface: "smoke",
  },
  {
    quote:
      "Nachdem wir mehrere städtische Werbeagenturen ausprobiert haben, sind wir froh, endlich einen Langzeitpartner in Crediso gefunden zu haben.",
    name: "Barbara Hörmann",
    surface: "smoke",
  },
];

const THEME: Record<Surface, { card: string; quote: string; name: string; mark: string }> = {
  black: { card: "bg-ink", quote: "text-paper", name: "text-lavender", mark: "text-lavender/40" },
  mint: { card: "bg-mint", quote: "text-ink", name: "text-ink-soft", mark: "text-ink/20" },
  lavender: { card: "bg-lavender", quote: "text-ink", name: "text-ink-soft", mark: "text-ink/20" },
  smoke: { card: "bg-smoke", quote: "text-ink", name: "text-ink-soft", mark: "text-ink/15" },
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

        {/* Bento — featured quote (2×2), two stat tiles, then a quote row */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[244px]">
          {/* Featured quote */}
          <figure
            className={cn(
              "flex flex-col justify-between rounded-card p-8 sm:col-span-2 lg:row-span-2",
              THEME[FEATURED.surface].card,
            )}
          >
            <Quote className={cn("h-10 w-10", THEME[FEATURED.surface].mark)} />
            <blockquote
              className={cn(
                "font-display text-2xl font-medium leading-snug md:text-[1.75rem]",
                THEME[FEATURED.surface].quote,
              )}
            >
              {FEATURED.quote}
            </blockquote>
            <figcaption className="flex items-center justify-between gap-4">
              <span className={cn("font-display text-lg font-semibold", THEME[FEATURED.surface].name)}>
                {FEATURED.name}
              </span>
              <Stars className="shrink-0" />
            </figcaption>
          </figure>

          {/* Team photo tile */}
          <div className="h-64 overflow-hidden rounded-card sm:h-72 lg:row-span-2 lg:h-auto">
            <img
              src="/assets/images/about-bg.png"
              alt="Das Crediso-Team"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Quote row */}
          {VOICES.map((voice) => {
            const t = THEME[voice.surface];
            return (
              <figure
                key={voice.name}
                className={cn("flex flex-col justify-between rounded-card p-6", t.card)}
              >
                <Quote className={cn("h-8 w-8", t.mark)} />
                <blockquote className={cn("font-body text-sm leading-relaxed", t.quote)}>
                  {voice.quote}
                </blockquote>
                <figcaption className="flex items-center justify-between gap-3">
                  <span className={cn("font-display text-sm font-semibold", t.name)}>
                    {voice.name}
                  </span>
                  <Stars className="shrink-0 [&_svg]:h-3.5 [&_svg]:w-3.5" />
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
