import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Plus } from "./CcIcons";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
  link?: { label: string; to: string };
}

const FAQS: FaqItem[] = [
  {
    question: "Kann ich Crediso Care auch buchen, wenn Crediso meine Website nicht gebaut hat?",
    answer:
      "Ja, das ist auf alle Fälle möglich und auch üblich. Im Erstgespräch schauen wir uns deine Website gemeinsam an und besprechen, wie wir die Betreuung übernehmen.",
  },
  {
    question: "Wie viele Änderungen kann ich pro Monat anfordern?",
    answer:
      "Das hängt vom gewählten Paket ab. Im Erstgespräch besprechen wir deinen Bedarf und empfehlen das passende Paket. Alle Änderungen sind im Fixpreis enthalten – keine Überraschungsrechnungen.",
  },
  {
    question: "Was passiert, wenn ich mehr Änderungen brauche als im Paket enthalten sind?",
    answer:
      "Wir informieren dich rechtzeitig und besprechen gemeinsam die nächsten Schritte, bevor irgendetwas extra verrechnet wird.",
  },
  {
    question: "Wie schnell werden Änderungen umgesetzt?",
    answer:
      "Kleinere Änderungswünsche setzen wir innerhalb eines Werktags um. Für größere Umbauten oder Anpassungen machen wir gemeinsam einen konkreten Plan.",
  },
  {
    question: "Was bedeutet GEO-Überwachung?",
    answer:
      "GEO steht für Generative Engine Optimization: die Optimierung dafür, dass dein Unternehmen auch von KI-Systemen wie Google Gemini oder ChatGPT als relevante Quelle erkannt wird. Das wird 2026 immer wichtiger und ist bei Crediso Care bereits inklusive.",
    link: { label: "Mehr zu SEO & GEO erfahren", to: "/seo" },
  },
  {
    question: "Wie läuft der Start ab?",
    answer:
      "Im kostenlosen Erstgespräch lernen wir uns kennen und besprechen deinen Bedarf. Danach richten wir alles ein und übernehmen die Betreuung. Du hast von Anfang an einen fixen Ansprechpartner.",
  },
];

export function CcFaq() {
  // Allow multiple panels open at once — users often compare answers.
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index],
    );

  return (
    <section id="faq" className="section-shell section-y">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16">
        {/* Intro + CTA — sticks alongside the list on large screens */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="h-display-sm text-ink">
            Häufige Fragen
            <br />
            zu Crediso Care
          </h2>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-graphite">
            Alles Wichtige rund um Pflege, Pakete und Zusammenarbeit. Deine Frage ist nicht dabei?
          </p>
          <div className="mt-8">
            <Button href="#contact" variant="outline" size="md">
              Frag uns direkt
            </Button>
          </div>
        </div>

        {/* Accordion */}
        <dl className="flex flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = open.includes(i);
            const panelId = `cc-faq-panel-${i}`;
            const buttonId = `cc-faq-button-${i}`;

            return (
              <div
                key={item.question}
                className={cn(
                  "rounded-card border border-ink transition-colors duration-200",
                  isOpen ? "bg-mint" : "bg-paper hover:bg-mint/30",
                )}
              >
                <dt>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-5 p-6 text-left md:p-7"
                  >
                    <span className="font-display text-lg font-semibold leading-snug text-ink-soft md:text-xl">
                      {item.question}
                    </span>
                    <Plus
                      className={cn(
                        "h-6 w-6 shrink-0 text-teal-deep transition-transform duration-300 ease-out",
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
                    <div className="px-6 pb-6 md:px-7 md:pb-7">
                      <p className="font-body text-lg leading-relaxed text-graphite">
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
