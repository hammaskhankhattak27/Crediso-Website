import { ArrowUpRight } from "@/components/ui/Icons";

interface Kachel {
  num: string;
  title: string;
  audience: string;
  href: string;
}

const KACHELN: Kachel[] = [
  {
    num: "01",
    title: "Social Media Betreuung",
    audience: "Für Unternehmen, die Social Media auslagern wollen",
    href: "/social-media/betreuung",
  },
  {
    num: "02",
    title: "Social Media Mentoring",
    audience: "Für alle, die Social Media selbst in die Hand nehmen wollen",
    href: "/social-media/mentoring",
  },
  {
    num: "03",
    title: "Social Media Workshops",
    audience: "Für Teams, die Social Media lernen wollen",
    href: "/social-media/workshops",
  },
  {
    num: "04",
    title: "Content Produktion",
    audience: "Für alle, die professionelle Fotos & Videos brauchen",
    href: "/social-media/content-production",
  },
];

export function SmLeistungen() {
  return (
    <section id="leistungen" className="section-shell section-y">
      <div className="max-w-3xl">
        <h2 className="h-display text-ink">Findet die passende Lösung</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink">
          Social Media ist nicht für jedes Unternehmen gleich. Manche brauchen jemanden, der alles
          übernimmt. Andere wollen ihr Team fit machen. Und wieder andere brauchen einfach
          professionellen Content. Schaut, was für euch passt.
        </p>
      </div>

      {/* Bold numbered index — each row links to the service sub-page */}
      <ul className="mt-12 border-b border-ink/10">
        {KACHELN.map((k) => (
          <li key={k.title}>
            <a
              href={k.href}
              className="group flex items-center gap-6 border-t border-ink/10 py-8 transition-colors hover:bg-paper-cool md:gap-10 md:py-10"
            >
              <span className="font-display text-2xl font-semibold tabular-nums text-ink/25 transition-colors group-hover:text-ink md:text-3xl">
                {k.num}
              </span>

              <div className="min-w-0 flex-1 transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink transition-colors group-hover:text-teal-deep md:text-4xl lg:text-5xl">
                  {k.title}
                </h3>
                <p className="mt-2 font-body text-base leading-relaxed text-ink md:text-lg">
                  {k.audience}
                </p>
              </div>

              <ArrowUpRight className="h-7 w-7 shrink-0 text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-deep md:h-8 md:w-8" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
