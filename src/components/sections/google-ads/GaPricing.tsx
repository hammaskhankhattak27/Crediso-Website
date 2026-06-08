import { Button } from "@/components/ui/Button";

const FEATURES = [
  "Persönliche Strategieberatung & Kampagnenplanung",
  "Professionelles Kampagnen-Setup & Optimierung",
  "Handlungsempfehlungen",
  "Conversion-Tracking via Google Tag Manager",
  "Smart Bidding & laufende Performance-Optimierung",
  "Persönliche:r Ansprechpartner:in – digital & vor Ort in Graz",
];

export function GaPricing() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <h2 className="h-display text-ink">
            Maximiere
            <br />
            Deinen Erfolg
          </h2>
          <p className="mt-6 max-w-[483px] font-body text-lg leading-relaxed text-graphite">
            Wir übernehmen deine Google Ads Kampagnen – von der Strategie bis zur laufenden
            Optimierung – damit du dich auf dein Kerngeschäft konzentrieren kannst.
          </p>
        </div>

        {/* Pricing card — hard offset shadow per Figma */}
        <article className="rounded-card border-2 border-ink bg-paper p-8 shadow-[5px_5px_0_0_rgba(0,0,0,1)] md:p-10">
          <h3 className="font-display text-[2rem] font-semibold leading-none tracking-tight text-ink-soft md:text-5xl">
            Google Ads Betreuung
          </h3>

          <ul className="mt-8 space-y-4">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-ink-soft" />
                <span className="font-body text-xl leading-snug text-graphite">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Divider + price + terms + CTA */}
          <div className="mt-8 border-t border-sage pt-8">
            <p className="text-center font-display text-[2.5rem] font-bold leading-none tracking-tight md:text-6xl">
              <span className="text-green-ink">Ab </span>
              <span className="text-teal-deep">€ 450,-</span>
            </p>
            <p className="mt-4 text-center font-body text-xl text-ink">
              monatlich · exkl. Ust. · flexibel kündbar
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="#contact">Jetzt loslegen</Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
