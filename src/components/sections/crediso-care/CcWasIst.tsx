import { Pulse } from "./CcIcons";

const MONITORED = ["Sicherheit", "Ladezeit", "Google-Ranking"];

export function CcWasIst() {
  return (
    <section className="bg-teal-deep section-y text-paper">
      <div className="section-shell">
        <span className="font-display text-base font-medium uppercase tracking-wide text-paper/70">
          Was Crediso Care ist
        </span>
        <h2 className="mt-6 max-w-4xl h-display text-paper">
          Ein Fixpreis. Kein Zögern. Keine Überraschungen.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — the promise + the WhatsApp callout */}
          <div>
            <p className="font-body text-lg leading-relaxed text-paper/90">
              Crediso Care ist das Rundum-sorglos-Paket für deinen Onlineauftritt. Jeder in deinem
              Team kann sich jederzeit melden: ein neues Produkt kommt raus, eine Aktion startet am
              Montag, jemand hat eine Idee für ein Pop-up. Alles ist im Fixpreis enthalten – ohne
              zusätzliche Rechnung, ohne komplizierte Freigabeprozesse.
            </p>
            <blockquote className="mt-8 rounded-card border border-paper/20 p-6 md:p-7">
              <p className="font-display text-xl font-medium leading-snug text-paper md:text-2xl">
                „Du schickst uns deine Idee während der Autofahrt als WhatsApp-Sprachnachricht? Kein
                Problem – wir sind schon dran.“
              </p>
            </blockquote>
          </div>

          {/* Right — what we watch in the background */}
          <div className="flex flex-col">
            <p className="font-body text-lg leading-relaxed text-paper/90">
              Dabei bleibt es nicht bei den Inhalten. Im Hintergrund überwachen wir laufend:
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {MONITORED.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2.5 rounded-pill border border-paper/30 px-5 py-3"
                >
                  <Pulse className="h-5 w-5 text-paper" />
                  <span className="font-display text-base font-semibold text-paper">{item}</span>
                </span>
              ))}
            </div>
            <p className="mt-8 font-display text-2xl font-medium leading-snug text-paper md:text-[1.75rem]">
              Damit deine Website immer einen Schritt voraus ist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
