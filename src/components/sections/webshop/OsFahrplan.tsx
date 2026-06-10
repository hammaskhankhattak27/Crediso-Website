import { useState } from "react";
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

/** Unser Fahrplan — the five project phases as an expanding accordion row:
 *  the active phase opens into a wide teal panel, the rest collapse into
 *  slim cards with vertically set titles (horizontal again on mobile). */
export function OsFahrplan() {
  const [active, setActive] = useState(0);

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

      <div className="mt-12 flex flex-col gap-4 lg:h-[424px] lg:flex-row">
        {PHASES.map((phase, i) => {
          const isActive = i === active;
          return isActive ? (
            <article
              key={phase.num}
              className="relative flex-1 overflow-hidden rounded-card bg-teal-deep p-8 text-paper md:p-11 lg:min-w-0"
            >
              <span
                aria-hidden="true"
                className="absolute right-8 top-8 font-display text-4xl font-bold tracking-display text-paper md:right-11 md:top-10 md:text-5xl"
              >
                {phase.num}
              </span>
              <h3 className="max-w-[calc(100%-5rem)] font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-paper md:text-[3rem]">
                {phase.title}
              </h3>
              <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-paper md:mt-10">
                {phase.body}
              </p>
            </article>
          ) : (
            <button
              key={phase.num}
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={false}
              className={cn(
                "flex items-center rounded-card border border-teal-deep px-7 py-5 text-left transition-colors hover:bg-teal-deep/5",
                "lg:w-[143px] lg:shrink-0 lg:justify-center lg:px-0",
              )}
            >
              <span
                className={cn(
                  "font-display text-xl font-semibold leading-tight tracking-tight text-teal-deep md:text-2xl",
                  "lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-center",
                )}
              >
                {phase.title}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
