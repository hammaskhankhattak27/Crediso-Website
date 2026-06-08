import { Button } from "@/components/ui/Button";

export function WsFoerderung() {
  return (
    <section className="section-shell section-y">
      <div className="relative overflow-hidden rounded-card">
        {/* Background image + dark tint */}
        <img
          src="/assets/images/website/foerderung-team.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        {/* Content */}
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <h2 className="h-display text-paper">
            Hol dir bis
            <br />
            zu € 7.400,- Förderung
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-paper/90">
            Geförderte Projekte sind über KMU.DIGITAL möglich. Wir begleiten dich durch den gesamten
            Prozess, damit du das Maximum aus deinem Budget rausholst.
          </p>
          <p className="mt-8 font-display text-[clamp(2.75rem,6vw,5rem)] font-bold leading-none tracking-tight text-paper">
            50% Zuschuss
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#contact" variant="light">
              Jetzt Fördercheck anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
