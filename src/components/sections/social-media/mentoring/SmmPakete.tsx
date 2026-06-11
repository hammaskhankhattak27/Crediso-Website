import { Button } from "@/components/ui/Button";
import { Check } from "../SmIcons";

interface Paket {
  name: string;
  badge?: string;
  body: string;
  features: string[];
  featured: boolean;
}

const PAKETE: Paket[] = [
  {
    name: "Monatliches Mentoring",
    badge: "Beliebteste Wahl",
    body: "Drei Stunden pro Monat, die wirklich etwas verändern. Praxisnahes Feedback, klare Empfehlungen und persönliche Begleitung – flexibel online oder direkt in Graz.",
    features: [
      "3 Stunden individuelles 1:1 Mentoring pro Monat",
      "Online oder persönlich in Graz",
      "Inklusive Vor- und Nachbereitung durch deinen Mentor",
      "Keine Mindestlaufzeit – jederzeit kündbar",
    ],
    featured: true,
  },
  {
    name: "Mentoring-Paket",
    body: "Fünf Stunden persönliches Mentoring, die du dir frei einteilen kannst – innerhalb eines Jahres, ganz nach deinem Tempo. Ideal, wenn du gezielt an einem Thema arbeiten willst.",
    features: [
      "5 Stunden individuelles 1:1 Mentoring",
      "Online oder persönlich in Graz",
      "Inklusive Vor- und Nachbereitung durch deinen Mentor",
      "Frei einteilbar innerhalb von 12 Monaten",
    ],
    featured: false,
  },
];

/** The two mentoring packages, side by side. The popular plan is the dark
 *  black (ink) card with a floating lavender badge; the flexible plan stays light.
 *  A two-card pricing pair appears only here. */
export function SmmPakete() {
  return (
    <section id="pakete" className="section-shell section-y">
      <div className="max-w-3xl">
        <h2 className="h-display text-ink">Wähle dein Mentoring</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-ink">
          Zwei Modelle, ein Ziel: Social Media, das für dich funktioniert. Du entscheidest, wie eng
          die Begleitung sein soll.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {PAKETE.map((paket) => {
          const dark = paket.featured;
          return (
            <article
              key={paket.name}
              className={
                dark
                  ? "relative flex flex-col rounded-card bg-ink p-8 text-paper md:p-10"
                  : "relative flex flex-col rounded-card border border-ink p-8 text-ink md:p-10"
              }
            >
              {paket.badge && (
                <span className="absolute -top-3 right-8 rounded-pill bg-lavender px-4 py-1.5 font-display text-sm font-semibold text-ink">
                  ★ {paket.badge}
                </span>
              )}
              <h3
                className={
                  dark
                    ? "font-display text-2xl font-semibold text-paper md:text-3xl"
                    : "font-display text-2xl font-semibold text-ink md:text-3xl"
                }
              >
                {paket.name}
              </h3>
              <p
                className={
                  dark
                    ? "mt-4 font-body text-base leading-relaxed text-paper/85"
                    : "mt-4 font-body text-base leading-relaxed text-ink"
                }
              >
                {paket.body}
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                {paket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={
                        dark
                          ? "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lavender text-ink"
                          : "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lavender text-ink"
                      }
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span
                      className={
                        dark
                          ? "font-body text-base leading-relaxed text-paper/90"
                          : "font-body text-base leading-relaxed text-ink"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-2">
                <Button href="#contact" variant={dark ? "light" : "outline"}>
                  {dark ? "Mentoring anfragen" : "Paket anfragen"}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
