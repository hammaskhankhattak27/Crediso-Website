import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Plus } from "./SeoIcons";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
  link?: { label: string; to: string };
}

/** Exported so the page can build its FAQPage structured data from the same list. */
export const FAQS: FaqItem[] = [
  {
    question: "Wie lange dauert es, bis SEO Ergebnisse zeigt?",
    answer:
      "Lokales SEO und technische Quick Wins zeigen oft innerhalb von 4 bis 8 Wochen erste Wirkung. Für nachhaltige Rankings bei umkämpften Keywords braucht es 6 bis 12 Monate kontinuierlicher Arbeit.",
  },
  {
    question: "Was sind AI Overviews und wie beeinflussen sie mein Ranking?",
    answer:
      "AI Overviews sind KI-generierte Antworten, die Google seit März 2025 auch in Österreich direkt auf der Suchergebnisseite zeigt. Für lokale Suchanfragen und transaktionale Keywords, wo jemand konkret einen Anbieter sucht, ist der Effekt deutlich geringer als bei reinen Informationssuchen.",
  },
  {
    question: "Was ist der Unterschied zwischen SEO und Google Ads?",
    answer:
      "Google Ads sind bezahlte Anzeigen: Ihr zahlt pro Klick, und sobald das Budget endet, verschwindet die Sichtbarkeit. SEO baut organische Sichtbarkeit auf, die dauerhaft wirkt.",
    link: { label: "Mehr zu Google Ads erfahren", to: "/google-ads" },
  },
  {
    question: "Muss ich für SEO viel Geld ausgeben?",
    answer:
      "Nicht unbedingt. In vielen Fällen stecken die größten Potenziale in einfachen Maßnahmen: ein optimiertes Google Business Profil, korrekte NAP-Daten, saubere Seitentitel. Wir schauen uns zuerst an, wo ihr steht, und empfehlen Maßnahmen, die zu eurem Budget passen.",
  },
  {
    question: "Was ist GEO und brauche ich das?",
    answer:
      "GEO steht für Generative Engine Optimization: die Optimierung dafür, von KI-Systemen wie Google Gemini oder ChatGPT als vertrauenswürdige Quelle zitiert zu werden. Wer klassisches SEO sauber macht, hat automatisch eine gute Grundlage für GEO.",
  },
];

export function SeoFaq() {
  // Allow multiple panels open at once — users often compare answers.
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index],
    );

  return (
    <section id="faq" className="section-shell section-y">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
        {/* Plain intro — text only, sticks alongside the list on large screens */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          {/* Soft hyphen lets the long compound break inside the narrow column. */}
          <h2 className="h-display-sm text-ink">
            Häufige Fragen zur Such&shy;maschinen&shy;optimierung
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink">
            Alles Wichtige zu SEO, lokalem SEO und GEO. Eure Frage ist nicht dabei?
          </p>
          <div className="mt-8">
            <Button href="#contact" size="md">
              Fragt uns direkt
            </Button>
          </div>
        </div>

        {/* Numbered list — hairline dividers, no cards */}
        <dl className="border-t border-ink/10">
          {FAQS.map((item, i) => {
            const isOpen = open.includes(i);
            const panelId = `seo-faq-panel-${i}`;
            const buttonId = `seo-faq-button-${i}`;

            return (
              <div key={item.question} className="border-b border-ink/10">
                <dt>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="group flex w-full items-start gap-5 py-6 text-left"
                  >
                    <span className="w-8 shrink-0 font-display text-lg font-bold leading-snug text-teal-deep md:text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "flex-1 font-display text-lg font-semibold leading-snug transition-colors duration-200 md:text-xl",
                        isOpen ? "text-ink" : "text-ink-soft group-hover:text-teal-deep",
                      )}
                    >
                      {item.question}
                    </span>
                    <Plus
                      className={cn(
                        "mt-0.5 h-6 w-6 shrink-0 text-teal-deep transition-transform duration-300 ease-out",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                </dt>
                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pl-[calc(2rem+1.25rem)] pr-6">
                      <p className="max-w-2xl font-body text-lg leading-relaxed text-ink">
                        {item.answer}
                      </p>
                      {item.link && (
                        <Link
                          to={item.link.to}
                          className="mt-3 inline-block font-display text-base font-semibold text-teal-deep underline underline-offset-4 hover:opacity-80"
                        >
                          {item.link.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
