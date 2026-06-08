import { Check } from "./CcIcons";

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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
          {/* Heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
              Für wen
            </span>
            <h2 className="mt-4 h-display text-ink">Für wen ist Crediso Care?</h2>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-graphite">
              Crediso Care ist das Richtige für dich, wenn dir mindestens einer dieser Punkte bekannt
              vorkommt.
            </p>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-4">
            {ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-card border border-ink bg-paper p-6"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint text-teal-deep">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-body text-lg leading-snug text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
