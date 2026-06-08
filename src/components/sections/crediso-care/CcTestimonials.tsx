import { cn } from "@/lib/utils";

interface Quote {
  quote: string;
  author: string;
  surface: string;
}

const QUOTES: Quote[] = [
  {
    quote:
      "Die Zusammenarbeit war sehr angenehm, professionell, gewissenhaft und genau. Alle Absprachen wurden zuverlässig eingehalten, und unsere Wünsche wurden manchmal sogar übertroffen. Wir haben uns jederzeit gut betreut und verstanden gefühlt.",
    author: "Österreichischer Tierärzteverlag",
    surface: "bg-mint",
  },
  {
    quote:
      "Frisch, innovativ, immer am Puls! Die Betreuung von Crediso ist ebenso top wie die Erstellung unserer neuen Homepage.",
    author: "Bernhard Faber",
    surface: "border border-ink bg-paper",
  },
  {
    quote:
      "Der Weg war äußerst angenehm, professionell und sehr kundenorientiert. Es war immer Platz für unsere Lernschleifen und Ideen, die dann mit einer guten Portion Expertenempfehlungen pragmatisch umgesetzt wurden. Wir werden die Reise gemeinsam fortsetzen.",
    author: "Jürgen Gamweger",
    surface: "bg-lavender",
  },
  {
    quote: "Langjähriger Kunde – alles top. Sehr zu empfehlen!",
    author: "Philipp Nusshold",
    surface: "border border-ink bg-paper",
  },
];

export function CcTestimonials() {
  return (
    <section className="section-shell section-y">
      <div className="max-w-3xl">
        <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
          Kundenstimmen
        </span>
        <h2 className="mt-4 h-display text-ink">Was unsere Kund:innen sagen</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {QUOTES.map((item) => (
          <figure
            key={item.author}
            className={cn("flex flex-col justify-between rounded-card p-8 md:p-10", item.surface)}
          >
            <span aria-hidden="true" className="font-display text-6xl leading-none text-teal-deep">
              „
            </span>
            <blockquote className="-mt-4 font-body text-lg leading-relaxed text-ink-soft">
              {item.quote}
            </blockquote>
            <figcaption className="mt-8 font-display text-lg font-semibold text-ink">
              {item.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
