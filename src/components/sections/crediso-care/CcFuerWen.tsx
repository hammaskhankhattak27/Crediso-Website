const ITEMS = [
  "Du hast eine professionelle Website und willst sicherstellen, dass sie es bleibt.",
  "Dein Team braucht regelmäßig Änderungen, aber niemand intern ist dafür zuständig.",
  "Du willst keine bösen Überraschungen bei Rechnungen.",
  "Du weißt, dass SEO wichtig ist, hast aber keine Zeit, dich selbst darum zu kümmern.",
  "Du willst einen Partner, der dein Unternehmen kennt und langfristig mitdenkt.",
];

export function CcFuerWen() {
  return (
    <section className="bg-paper-cool section-y">
      <div className="section-shell">
        <div className="max-w-3xl">
          <h2 className="h-display text-ink">Für wen ist Crediso Care?</h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink">
            Crediso Care ist das Richtige für dich, wenn dir mindestens einer dieser Punkte bekannt
            vorkommt.
          </p>
        </div>

        {/* Editorial numbered list — big index figures, hairline rows, hover highlight */}
        <ul className="mt-12 border-t border-ink/10">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 border-b border-ink/10 py-6 transition-colors duration-200 hover:bg-mint/30 md:gap-10 md:py-8"
            >
              <span className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-teal-deep/40 transition-colors duration-200 group-hover:text-teal-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[clamp(1.25rem,2.6vw,1.875rem)] font-medium leading-snug tracking-tight text-ink-soft">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
