import { Button } from "@/components/ui/Button";
import { GoogleG, Stars } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section id="hero" className="section-shell pt-12 pb-16 md:pt-16 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
        {/* Left column — copy */}
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1.06] tracking-display text-ink">
            Dein Unternehmen verdient einen Onlineauftritt, der Kunden bringt.
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-graphite">
            Crediso macht digitale Kommunikation sichtbar, verständlich und wirksam. Für Unternehmen,
            die mehr erreichen wollen. Bist du bereit durchzustarten?
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact">Erstgespräch vereinbaren</Button>
            <Button href="#services" variant="outline">
              Unsere Leistungen
            </Button>
          </div>
        </div>

        {/* Right column — image + stats + rating */}
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center lg:gap-5">
          {/* Image with rotating badge */}
          <div className="relative shrink-0">
            <div className="overflow-hidden rounded-card">
              <img
                src="/assets/images/hero-building.png"
                alt="Zufriedene Crediso Kund:innen"
                className="h-[460px] w-[300px] object-cover md:h-[505px] md:w-[330px]"
              />
            </div>
            <img
              src="/assets/images/hero-circle.png"
              alt=""
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-32 w-32 animate-[spin_22s_linear_infinite] md:-right-12 md:-top-10 md:h-44 md:w-44"
            />
          </div>

          {/* Stats card + Google rating */}
          <div className="flex w-full flex-col gap-7 sm:w-auto sm:pt-40 lg:pt-44">
            <div className="rounded-card bg-mint px-7 py-6 sm:w-[238px]">
              <div className="font-display text-6xl font-bold leading-none text-ink-soft">40+</div>
              <p className="mt-3 font-display text-sm font-medium text-ink-soft">
                abgeschlossene Projekte
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <GoogleG className="h-10 w-10 shrink-0" />
                <Stars />
              </div>
              <p className="mt-1 font-display text-base font-semibold text-ink-soft">
                5/5 auf Google bewertet
              </p>
              <a
                href="#testimonials"
                className="font-display text-base font-semibold text-ink-soft/70 underline-offset-2 hover:underline"
              >
                sieh dir unsere Bewertungen an
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
