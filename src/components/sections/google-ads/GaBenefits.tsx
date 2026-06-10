import { Check } from "@/components/sections/google-ads/GaIcons";

const PAY_POINTS = [
  "Du zahlst nur bei Klicks",
  "Keine Kosten ohne Interaktion",
  "Effizienter Einsatz deines Budgets",
];

export function GaBenefits() {
  return (
    <section className="section-shell section-y">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="h-display text-ink">
          Wieso du auf Google Ads
          <br />
          setzen solltest?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink">
          Wir haben die volle Kontrolle und bezahlen nur für Ergebnisse – du bestimmst Budget,
          Zielgruppe und Reichweite.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* 01 — mint */}
        <article className="flex min-h-[512px] flex-col justify-between rounded-card border border-sage/50 bg-mint p-8">
          <div>
            <span className="font-display text-[2.75rem] md:text-[52px] font-bold leading-none text-teal-deep">01</span>
            <h3 className="mt-6 font-display text-[2rem] md:text-[2.5rem] font-semibold leading-none text-ink">
              Messbare
              <br />
              Ergebnisse
            </h3>
            <p className="mt-6 font-body text-base leading-relaxed text-ink">
              Wir betreuen und optimieren deine Kampagnen laufend. Im Dashboard kannst du die
              Entwicklung und Ergebnisse jederzeit transparent mitverfolgen.
            </p>
          </div>
          <div className="mt-8 w-[258px] max-w-full">
            <span className="block font-display text-[clamp(5rem,7vw,6.5rem)] font-bold leading-[0.8] tracking-[-0.04em] text-teal-deep">
              100%
            </span>
            <span className="mt-1 block text-right font-display text-[21px] font-semibold text-teal-deep">
              Transparent
            </span>
          </div>
        </article>

        {/* 02 — deep green */}
        <article className="flex min-h-[512px] flex-col justify-between rounded-card border border-white/10 bg-teal-deep p-8 text-paper">
          <div>
            <span className="font-display text-[2.75rem] md:text-[52px] font-bold leading-none text-mint">02</span>
            <h3 className="mt-6 font-display text-[2rem] md:text-[2.5rem] font-semibold leading-none text-paper">
              Nur für Klicks zahlen
            </h3>
            <p className="mt-6 font-body text-base leading-relaxed text-mint">
              Du zahlst ausschließlich, wenn jemand auf deine Anzeige klickt und auf deine Website
              gelangt.
            </p>
          </div>
          <ul className="mt-8 space-y-3">
            {PAY_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-teal-deep">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-display text-[15px] font-medium text-paper/90">{point}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* 03 — black */}
        <article className="flex min-h-[512px] flex-col justify-between rounded-card border border-white/10 bg-ink p-8 text-paper">
          <div>
            <span className="font-display text-[2.75rem] md:text-[52px] font-bold leading-none text-paper-cool">03</span>
            <h3 className="mt-6 font-display text-[2rem] md:text-[2.5rem] font-semibold leading-none text-paper">
              Volle Kontrolle
            </h3>
            <p className="mt-6 font-body text-base leading-relaxed text-paper">
              Gemeinsam legen wir fest, welche Zielgruppen du erreichen möchtest und wie viel Budget
              dafür eingesetzt wird.
            </p>
          </div>
          {/* Budget widget */}
          <div className="mt-8 rounded-2xl bg-paper p-5 text-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]">
            <p className="font-display text-sm font-semibold text-ink-soft">Monatsbudget</p>
            <p className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-[2rem] md:text-[2.5rem] font-bold leading-none text-teal-deep">
                ab 500€
              </span>
              <span className="font-display text-xl font-light text-mute">/Mo.</span>
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-pill border border-sage bg-paper-cool px-3 py-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal text-paper">
                <Check className="h-3 w-3" />
              </span>
              <span className="font-display text-sm font-medium text-ink-soft">Flexibel anpassbar</span>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}
