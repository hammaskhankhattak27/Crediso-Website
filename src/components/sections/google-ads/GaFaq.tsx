import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Plus } from "@/components/sections/google-ads/GaIcons";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Wie schnell sehe ich erste Ergebnisse?",
    answer:
      "Erste Klicks und Anfragen entstehen oft schon in den ersten Tagen nach dem Start. Eine belastbare Aussage über die Performance treffen wir nach rund vier bis sechs Wochen – dann liegen genug Daten vor, um die Kampagne gezielt zu optimieren.",
  },
  {
    question: "Gibt es eine Mindestlaufzeit oder kann ich jederzeit stoppen?",
    answer:
      "Du bist an keine lange Bindung gebunden – wir können jederzeit stoppen. Für aussagekräftige Ergebnisse empfehlen wir allerdings mindestens drei Monate, damit die Kampagne genug Zeit zum Lernen und Optimieren hat.",
  },
  {
    question: "Wie hoch sollte mein Werbebudget sein?",
    answer:
      "Das hängt von deiner Branche, deinen Zielen und der regionalen Konkurrenz ab. Im Erstgespräch finden wir gemeinsam ein realistisches Budget, mit dem du sinnvoll starten kannst – ohne dein Werbebudget aus dem Fenster zu werfen.",
  },
  {
    question: "Was kostet die Betreuung und wie setzt sich der Preis zusammen?",
    answer:
      "Du zahlst einen transparenten Fixpreis für unsere Betreuung – getrennt von deinem Werbebudget, das direkt an Google fließt. So hast du alle Kosten stets im Überblick, ohne böse Überraschungen.",
  },
  {
    question: "Wer betreut meine Kampagne?",
    answer:
      "Du hast feste Ansprechpartner:innen statt anonymer Betreuung. Tina und Robert kümmern sich mit knapp 10 Jahren Erfahrung persönlich um deine Kampagne – digital und persönlich im Großraum Graz.",
  },
  {
    question: "Bekomme ich regelmäßig Einblick in die Ergebnisse?",
    answer:
      "Ja. Du erhältst jeden Monat einen detaillierten Report mit einer persönlichen Einschätzung deines Ansprechpartners. So weißt du jederzeit, wie erfolgreich deine Kampagne läuft und woran wir gerade arbeiten.",
  },
  {
    question: "Wie läuft die Zusammenarbeit nach meiner Anfrage ab?",
    answer:
      "Nach deiner unverbindlichen Anfrage besprechen wir in einem kostenlosen Erstgespräch deine Werbeziele. Anschließend erstellen wir eine durchdachte Strategie, setzen die Kampagne auf und optimieren sie laufend für dich.",
  },
];

export function GaFaq() {
  // Allow multiple panels open at once — users often compare answers.
  const [open, setOpen] = useState<number[]>([0]);

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index],
    );

  return (
    <section id="faq" className="section-shell section-y">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
        {/* Plain intro — text only, sticks alongside the list on large screens */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="h-display-sm text-ink">
            Häufige
            <br />
            Fragen
          </h2>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-ink">
            Die wichtigsten Antworten rund um Google Ads, Budget und unsere
            Betreuung. Deine Frage ist nicht dabei?
          </p>
          <div className="mt-8">
            <Button href="#contact" size="md">
              Frag uns direkt
            </Button>
          </div>
        </div>

        {/* Numbered list — hairline dividers, no cards */}
        <dl className="border-t border-ink/10">
          {FAQS.map((item, i) => {
            const isOpen = open.includes(i);
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

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
