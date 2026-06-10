import { cn } from "@/lib/utils";
import { Quote, Stars } from "@/components/ui/Icons";

interface Voice {
  quote: string;
  name: string;
}

interface ReviewsProps {
  /** Accent for the featured tile: brand green everywhere, lavender on social media. */
  accent?: "green" | "lavender";
  heading?: string;
  /** The large 2×2 anchor quote. */
  featured?: Voice;
  /** The three supporting quotes in the bottom row. */
  voices?: Voice[];
  photo?: { src: string; alt: string };
}

/** Brand-green default content — real Crediso client voices. Social Media passes
 *  its own copy + `accent="lavender"`; the layout stays identical everywhere. */
const DEFAULT_FEATURED: Voice = {
  quote:
    "Die Zusammenarbeit war sehr angenehm, professionell, gewissenhaft und genau. Alle Absprachen wurden zuverlässig eingehalten, und unsere Wünsche wurden manchmal sogar übertroffen.",
  name: "Österreichischer Tierärzteverlag",
};

const DEFAULT_VOICES: Voice[] = [
  {
    quote:
      "Frisch, innovativ, immer am Puls! Die Betreuung von Crediso ist ebenso top wie die Erstellung unserer neuen Homepage.",
    name: "Bernhard Faber",
  },
  {
    quote:
      "Der Weg war äußerst angenehm, professionell und sehr kundenorientiert. Wir werden die Reise gemeinsam fortsetzen.",
    name: "Jürgen Gamweger",
  },
  {
    quote:
      "Nachdem wir mehrere Werbeagenturen ausprobiert haben, sind wir froh, endlich einen Langzeitpartner in Crediso gefunden zu haben.",
    name: "Barbara Hörmann",
  },
];

const DEFAULT_PHOTO = { src: "/assets/images/about-bg.png", alt: "Das Crediso-Team" };

/** Shared "Kundenstimmen" bento used across every page — featured quote (2×2),
 *  team photo tile, then a three-up quote row. Only the featured tile's surface
 *  swaps with `accent` (mint on brand pages, lavender on social media); the rest
 *  stays neutral smoke so the design reads identically site-wide. */
export function Reviews({
  accent = "green",
  heading = "Das sagen unsere Kund:innen",
  featured = DEFAULT_FEATURED,
  voices = DEFAULT_VOICES,
  photo = DEFAULT_PHOTO,
}: ReviewsProps) {
  const featuredCard = accent === "lavender" ? "bg-lavender" : "bg-mint";

  return (
    <section id="testimonials" className="bg-paper-cool section-y">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="h-display-sm text-ink">{heading}</h2>
        </div>

        {/* Bento — featured quote (2×2), team photo tile, then a quote row */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[244px]">
          {/* Featured quote */}
          <figure
            className={cn(
              "flex flex-col justify-between rounded-card p-8 sm:col-span-2 lg:row-span-2",
              featuredCard,
            )}
          >
            <Quote className="h-10 w-10 text-ink/20" />
            <blockquote className="font-display text-2xl font-medium leading-snug text-ink md:text-[1.75rem]">
              {featured.quote}
            </blockquote>
            <figcaption className="flex items-center justify-between gap-4">
              <span className="font-display text-lg font-semibold text-ink-soft">
                {featured.name}
              </span>
              <Stars className="shrink-0" />
            </figcaption>
          </figure>

          {/* Team photo tile */}
          <div className="h-64 overflow-hidden rounded-card sm:h-72 lg:row-span-2 lg:h-auto">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Quote row */}
          {voices.map((voice) => (
            <figure
              key={voice.name}
              className="flex flex-col justify-between rounded-card bg-smoke p-6"
            >
              <Quote className="h-8 w-8 text-ink/15" />
              <blockquote className="font-body text-sm leading-relaxed text-ink">
                {voice.quote}
              </blockquote>
              <figcaption className="flex items-center justify-between gap-3">
                <span className="font-display text-sm font-semibold text-ink-soft">
                  {voice.name}
                </span>
                <Stars className="shrink-0 [&_svg]:h-3.5 [&_svg]:w-3.5" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
