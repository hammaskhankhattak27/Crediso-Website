import { Button } from "@/components/ui/Button";

const STATS = [
  { value: "40+", label: "erfolgreiche Projekte" },
  { value: "≤ 2s", label: "durchschnittliche Ladezeit" },
];

export function WsHero() {
  return (
    <section id="hero" className="section-shell pb-16 pt-12 md:pt-16 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-12">
        {/* Left — copy */}
        <div>
          <h1 className="h-display text-ink">
            Website
            <br />
            erstellen
            <br />
            lassen Graz
          </h1>

          <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink">
            Die Website ist das wichtigste Marketinginstrument deines Unternehmens. Egal ob
            Weiterempfehlung, Printwerbung oder Social Media, am Ende landen alle bei dir auf der
            Website. Jetzt hat sie eine Aufgabe: überzeugen. Und zum Kontakt bewegen.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact">Kostenloses Erstgespräch</Button>
            <Button href="#contact" variant="outline">
              Unsere Referenzen
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap items-stretch gap-x-8 gap-y-6">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-stretch gap-x-8">
                {i > 0 && <span aria-hidden="true" className="w-px self-stretch bg-[#92A3A0]" />}
                <div>
                  <span className="block font-display text-[2.625rem] font-bold leading-none text-teal-deep">
                    {stat.value}
                  </span>
                  <span className="mt-2 block font-display text-lg font-semibold text-ink-soft">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — iMac mockup with rotating seal */}
        <div className="relative mx-auto w-full max-w-[640px]">
          <div className="overflow-hidden rounded-card">
            <img
              src="/assets/images/website/hero-imac.png"
              alt="Crediso Website auf einem iMac"
              className="aspect-[639/582] w-full object-cover object-center"
            />
          </div>
          {/* translucent accent square peeking over the top-right corner */}
          <span
            aria-hidden="true"
            className="absolute right-5 -top-2 h-9 w-9 rounded-[7px] bg-teal-deep/20"
          />
          {/* rotating seal overlapping the top-left corner */}
          <img
            src="/assets/images/hero-circle.png"
            alt=""
            aria-hidden="true"
            className="absolute -left-3 -top-5 h-24 w-24 animate-[spin_22s_linear_infinite] md:-left-5 md:-top-7 md:h-32 md:w-32 lg:-left-8 lg:-top-9 lg:h-40 lg:w-40"
          />
        </div>
      </div>
    </section>
  );
}
