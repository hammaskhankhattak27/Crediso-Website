import { Button } from "@/components/ui/Button";

export function Sustainability() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-card">
          <img
            src="/assets/images/sustainability.png"
            alt="Crediso Engagement für die Umwelt"
            className="h-[320px] w-full object-cover md:h-[480px] lg:h-[560px]"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="h-display text-ink">Unser Engagement für die Umwelt.</h2>
          <div className="flex flex-col gap-11">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              Als Mitglied der Organisation „1% for the Planet" spenden wir jährlich 1% unseres
              Umsatzes an österreichische Umweltorganisationen. Zudem kompensiert das Unternehmen seine
              Treibhausgasemissionen als ClimatePartner-zertifiziertes Unternehmen, indem es
              Klimaschutzprojekte finanziell unterstützt. Zuletzt förderte Crediso ein
              Meeresschutzprojekt, das zur CO2-Reduktion und den UN-Nachhaltigkeitszielen beiträgt.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <Button size="md">Mehr dazu</Button>
              <img
                src="/assets/images/one-percent-planet.png"
                alt="1% for the Planet"
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
