import { Button } from "@/components/ui/Button";

const SIDE_SERVICES = ["SEO & GEO", "Social Media", "Google Ads", "Video & Foto"];

export function Services() {
  return (
    <section id="services" className="section-shell py-16 md:py-24">
      <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-display text-ink">
        Unsere Leistungen
      </h2>

      <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
        {/* Feature card */}
        <article className="flex min-h-[424px] flex-col justify-between rounded-card bg-mint p-8 md:p-12">
          <div>
            <h3 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] text-ink">
              Webdesign &amp;<br />Entwicklung
            </h3>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink">
              Von der Strategie bis zur Umsetzung. Wir betreuen deine Social-Media-Kanäle und erstellen
              Content der funktioniert. Oder wir zeigen dir in unseren Workshops wie du es selbst
              machst.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="outline">Mehr erfahren</Button>
          </div>
        </article>

        {/* Vertical service tags */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:flex lg:flex-row">
          {SIDE_SERVICES.map((label) => (
            <div
              key={label}
              className="flex min-h-[140px] items-center justify-center rounded-card border border-ink-soft p-5 transition-colors hover:bg-mint/40 lg:min-h-0 lg:w-[125px]"
            >
              <span className="text-center font-display text-2xl font-semibold leading-tight text-ink-soft lg:whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-[2.4rem]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
