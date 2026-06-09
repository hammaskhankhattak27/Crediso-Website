import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";

const LEAD =
  "Ob ihr Social Media komplett auslagern, euer Team schulen oder einfach besseren Content produzieren wollt – bei Crediso findet ihr die passende Lösung.";

interface Stat {
  value: string;
  label: string;
}

interface NarrowCard {
  name: string;
  href: string;
  surface: "black" | "lavender";
  stats: [Stat, Stat];
}

const NARROW: NarrowCard[] = [
  {
    name: "Workshops",
    href: "/social-media/workshops",
    surface: "black",
    stats: [
      { value: "50%", label: "über KMU.Digital förderbar" },
      { value: "100%", label: "praxisnah & individuell" },
    ],
  },
  {
    name: "Content",
    href: "/social-media/content-production",
    surface: "lavender",
    stats: [
      { value: "1 Mio.+", label: "Impressionen generiert" },
      { value: "100+", label: "Reels, Fotos & Ads" },
    ],
  },
];

function ArrowChip({ tone }: { tone: "light" | "dark" }) {
  return (
    <span
      className={
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 " +
        (tone === "light" ? "bg-paper text-ink" : "bg-ink text-paper")
      }
    >
      <ArrowUpRight className="h-5 w-5" />
    </span>
  );
}

const NARROW_THEME = {
  black: { card: "bg-ink", name: "text-paper", stat: "text-lavender", label: "text-paper/80", divide: "border-white/15", chip: "light" as const },
  lavender: { card: "bg-lavender", name: "text-ink", stat: "text-ink", label: "text-ink-soft", divide: "border-ink/10", chip: "dark" as const },
};

/**
 * Overview hero for /social-media — a bento: a top text band (eyebrow + headline
 * left, lead + CTA right) over a card row. A large featured image card
 * (Betreuung, 60% width) with the copy at the bottom, plus two narrow
 * colour-block stat cards (Workshops / Content). The three cards mirror the
 * client's intro — auslagern / lernen / Content. Overview-only; the sub-pages
 * use the reusable boxed `SmHero`.
 */
export function SmHeroBento() {
  return (
    <section id="hero" className="section-shell pb-16 pt-10 md:pt-12">
      {/* Top band */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-12">
        <div>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">
            Social Media Agentur Graz
          </span>
          <h1 className="mt-3 h-display text-ink">Social Media, das wirklich funktioniert.</h1>
        </div>
        <div className="lg:pb-3">
          <p className="font-body text-lg leading-relaxed text-graphite">{LEAD}</p>
          <div className="mt-6">
            <Button href="#contact">Kostenlos beraten lassen</Button>
          </div>
        </div>
      </div>

      {/* Card bento — featured 60%, two narrow stat cards 20% each */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr]">
        {/* Featured — Betreuung, copy at the bottom */}
        <a
          href="/social-media/betreuung"
          className="group relative h-[380px] overflow-hidden rounded-card sm:col-span-2 sm:h-[400px] lg:col-span-1 lg:h-[460px]"
        >
          <img
            src="/assets/images/about-bg.png"
            alt="Das Crediso-Team, das eure Social-Media-Kanäle betreut"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
          />

          <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-9">
            <div className="max-w-lg">
              <h2 className="font-display text-[1.75rem] font-semibold leading-tight text-paper md:text-3xl">
                Komplett-Betreuung
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-paper/85">
                Wir übernehmen Strategie, Content und Community – ihr müsst nur freigeben.
              </p>
            </div>
          </div>

          <span className="absolute right-6 top-6 z-10">
            <ArrowChip tone="light" />
          </span>
        </a>

        {/* Narrow — stat cards */}
        {NARROW.map((c) => {
          const t = NARROW_THEME[c.surface];
          return (
            <a
              key={c.name}
              href={c.href}
              className={`group relative flex h-[300px] flex-col justify-between overflow-hidden rounded-card p-6 sm:h-[400px] lg:h-[460px] ${t.card}`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className={`font-display text-2xl font-semibold ${t.name}`}>{c.name}</h3>
                <ArrowChip tone={t.chip} />
              </div>

              <dl className="space-y-5">
                {c.stats.map((stat, i) => (
                  <div key={stat.label} className={i > 0 ? `border-t pt-5 ${t.divide}` : ""}>
                    <dt className={`font-display text-[2.25rem] font-bold leading-none ${t.stat}`}>
                      {stat.value}
                    </dt>
                    <dd className={`mt-2 font-display text-sm font-medium leading-snug ${t.label}`}>
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </a>
          );
        })}
      </div>
    </section>
  );
}
