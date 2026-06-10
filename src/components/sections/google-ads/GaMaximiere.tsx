import { Button } from "@/components/ui/Button";

export function GaMaximiere() {
  return (
    <section className="section-shell section-y">
      <div className="overflow-hidden rounded-card bg-mint">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
          {/* Copy */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <h2 className="h-display text-ink">
              Maximiere Deinen
              <br />
              Google Ads Erfolg
            </h2>
            <p className="mt-6 font-display text-xl font-semibold uppercase leading-snug tracking-[0.16em] text-ink-soft">
              Mehr Sichtbarkeit,
              <br />
              mehr qualifizierte Anfragen.
            </p>
            <div className="mt-6 max-w-lg space-y-5 font-body text-lg leading-relaxed text-ink">
              <p>
                Wir richten deine Google Ads so ein, dass dein Unternehmen genau dann sichtbar ist,
                wenn potenzielle Kund:innen aktiv nach deinen Produkten oder Leistungen suchen.
              </p>
              <p>
                Mit klarer Strategie, Smart Bidding und transparentem Reporting wird dein Budget in
                messbare Anfragen und Verkäufe verwandelt, während du dich auf dein Kerngeschäft
                konzentrierst.
              </p>
            </div>
            <div className="mt-9">
              <Button href="#contact">jetzt starten</Button>
            </div>
          </div>

          {/* Image */}
          <div className="min-h-[280px] lg:min-h-0">
            <img
              src="/assets/images/google-ads/cta-content.png"
              alt="Crediso Mitarbeiterin im Gespräch"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
