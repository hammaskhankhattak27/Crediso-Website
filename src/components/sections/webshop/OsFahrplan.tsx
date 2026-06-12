import { cn } from "@/lib/utils";

interface Phase {
  num: string;
  title: string;
  body: string;
}

const PHASES: Phase[] = [
  {
    num: "01",
    title: "Strategie & Konzeption",
    body: "Jeder Webshop hat individuelle Anforderungen. Gemeinsam definieren wir Ziele, Funktionen und technische Rahmenbedingungen, um eine maßgeschneiderte Lösung zu entwickeln. Eine durchdachte Strategie legt den Grundstein für nachhaltigen Erfolg.",
  },
  {
    num: "02",
    title: "Content-Erstellung",
    body: "Produkttexte, Fotos und Kategorieseiten: Wir erstellen Inhalte, die deine Produkte optimal präsentieren – oder optimieren dein bestehendes Material gezielt für den Verkauf.",
  },
  {
    num: "03",
    title: "Design & Entwicklung",
    body: "Wir gestalten deinen Onlineshop und setzen ihn nach deiner Freigabe technisch um. Dein Feedback fließt in jeden Schritt ein – bis Design, Bedienung und Technik perfekt zusammenspielen.",
  },
  {
    num: "04",
    title: "Go Live & Qualitätskontrolle",
    body: "Vor dem Start testen wir alle Funktionen: Bestellprozess, Payment, Versand und Performance. Dein Shop geht fehlerfrei, schnell und DSGVO-konform online.",
  },
  {
    num: "05",
    title: "Kontinuierliche Betreuung & Optimierung",
    body: "Nach dem Launch lassen wir dich nicht allein: Wir betreuen deinen Shop laufend, spielen Updates ein und optimieren kontinuierlich für mehr Umsatz.",
  },
];

/** Unser Fahrplan — the five project phases as an alternating timeline: a
 *  centered dashed spine threads numbered teal nodes from 01 down to the mint
 *  "Ziel" node, with steps zig-zagging to either side. On mobile the spine
 *  shifts to a single left rail so every step stays readable. */
export function OsFahrplan() {
  const last = PHASES.length - 1;

  return (
    <section id="fahrplan" className="section-shell section-y">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <h2 className="h-display text-ink">
          Unser Fahrplan für dein
          <br />
          E-Commerce-Projekt
        </h2>
        <p className="max-w-xl font-body text-lg leading-relaxed text-ink lg:justify-self-end lg:self-center">
          Ein erfolgreicher Onlineshop entsteht nicht zufällig – er erfordert eine präzise
          Strategie, hochwertige Inhalte und eine technisch einwandfreie Umsetzung. Wir begleiten
          dich durch alle Phasen.
        </p>
      </div>

      <ol className="mt-12 lg:mt-16">
        {PHASES.map((phase, i) => {
          const isGoal = i === last;
          const rightSide = i % 2 === 0; // at md+: 01/03/05 right, 02/04 left
          return (
            <li
              key={phase.num}
              className="grid grid-cols-[3rem_1fr] gap-x-6 md:grid-cols-[1fr_3rem_1fr] md:gap-x-10"
            >
              {/* centered rail: numbered node + dashed spine down to the next node */}
              <div className="col-start-1 row-start-1 flex flex-col items-center md:col-start-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold",
                    isGoal ? "bg-mint text-ink-soft" : "bg-teal-deep text-paper",
                  )}
                >
                  {phase.num}
                </span>
                {!isGoal && (
                  <span aria-hidden="true" className="w-0 flex-1 border-l-2 border-dashed border-teal-deep" />
                )}
              </div>

              {/* content — pad the bottom to give the spine its length between steps */}
              <div
                className={cn(
                  "col-start-2 row-start-1 flex flex-col",
                  isGoal ? "pb-2" : "pb-12",
                  rightSide
                    ? "md:col-start-3 md:items-start md:text-left"
                    : "md:col-start-1 md:items-end md:text-right",
                )}
              >
                <div
                  className={cn(
                    "flex flex-wrap items-center gap-x-4 gap-y-2",
                    !rightSide && "md:flex-row-reverse",
                  )}
                >
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
                    {phase.title}
                  </h3>
                  {isGoal && (
                    <span className="rounded-pill bg-mint px-4 py-1.5 font-display text-sm font-semibold text-ink">
                      ZIEL
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-md font-body text-base leading-relaxed text-ink md:text-lg">
                  {phase.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
