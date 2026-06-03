import { Button } from "@/components/ui/Button";

export function Sustainability() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-[32px]">
          <img
            src="/assets/images/sustainability.png"
            alt="Crediso Engagement für die Umwelt"
            className="h-[320px] w-full object-cover md:h-[480px] lg:h-[560px]"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.1] tracking-display text-ink">
            Unser Engagement für die Umwelt.
          </h2>
          <p className="font-body text-lg leading-relaxed text-ink-soft">
            Als Mitglied der Organisation „1% for the Planet" spenden wir jährlich 1% unseres Umsatzes
            an österreichische Umweltorganisationen. Zudem kompensiert das Unternehmen seine
            Treibhausgasemissionen als ClimatePartner-zertifiziertes Unternehmen, indem es
            Klimaschutzprojekte finanziell unterstützt. Zuletzt förderte Crediso ein
            Meeresschutzprojekt, das zur CO2-Reduktion und den UN-Nachhaltigkeitszielen beiträgt.
          </p>
          <div>
            <Button>Mehr dazu</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
