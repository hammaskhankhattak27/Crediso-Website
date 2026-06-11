interface Step {
  num: string;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Analyse",
    body: "Wir schauen uns euer Business und eure bisherigen Social Media Aktivitäten genau an. Was funktioniert, was nicht, und wo liegt echtes Potenzial?",
  },
  {
    num: "02",
    title: "Strategie",
    body: "Basierend auf der Analyse entwickeln wir ein Konzept, das auf eure Ziele einzahlt. Welche Zielgruppe, welche Kanäle, welche Inhalte? Das legen wir gemeinsam fest.",
  },
  {
    num: "03",
    title: "Umsetzung",
    body: "Wir starten mit der laufenden Betreuung und passen die Strategie kontinuierlich an. Was funktioniert, wird ausgebaut. Was nicht, wird angepasst.",
  },
];

/** "Konzept & Strategie" — a 3-node process line. Numbered nodes sit on a lavender
 *  top-rail (one rail per column), reading as connected steps left-to-right on
 *  desktop and as a stepped stack on mobile. The only horizontal-timeline layout
 *  on the site. */
export function SmbStrategie() {
  return (
    <section className="section-shell section-y">
      <div className="max-w-3xl">
        <h2 className="h-display text-ink">Konzept &amp; Strategie</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink">
          Als Social Media Agentur aus Graz entwickeln wir maßgeschneiderte Strategien: von der
          Analyse bis zur laufenden Umsetzung.
        </p>
      </div>

      <ol className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {STEPS.map((step) => (
          <li key={step.num} className="border-t-2 border-lavender pt-7">
            <span className="-mt-[3.1rem] inline-flex h-12 w-12 items-center justify-center rounded-full bg-lavender font-display text-base font-bold tabular-nums text-ink">
              {step.num}
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
              {step.title}
            </h3>
            <p className="mt-3 font-body text-base leading-relaxed text-ink">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
