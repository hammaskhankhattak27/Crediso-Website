import { Button } from "@/components/ui/Button";
import { GoogleWordmark } from "@/components/sections/google-ads/GaIcons";

const STATS = [
  { value: "5.0", label: "Google Bewertung" },
  { value: "150+", label: "Neue Kunden / Jahr" },
  { value: "2.4M", label: "Verwaltetes Budget" },
];

export function GaHero() {
  return (
    <section id="hero" className="section-shell pb-16 pt-12 md:pt-16 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,587px)_minmax(0,1fr)] lg:gap-16">
        {/* Left — copy, CTAs, stats, trusted-by */}
        <div>
          <h1 className="h-display text-ink">
            Google Ads
            <br />
            Agentur aus Graz
          </h1>

          <p className="mt-8 max-w-[586px] font-body text-lg leading-relaxed text-ink">
            Deine Website ist das wichtigste Marketinginstrument. Egal ob Empfehlung, Werbung oder
            Social Media, am Ende zählt, dass sie überzeugt und zum Kontakt führt.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#contact">Jetzt starten!</Button>
            <Button href="#leistungen" variant="outline">
              Mehr erfahren
            </Button>
          </div>

          {/* Stat row */}
          <div className="mt-12 grid grid-cols-3 gap-x-3 md:gap-x-5">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? "border-l border-ink-soft/20 pl-3 md:pl-5" : ""}
              >
                <span className="block font-display text-[1.5rem] font-bold leading-none text-teal-deep md:text-[2.5rem]">
                  {stat.value}
                </span>
                <span className="mt-2 block font-display text-[13px] font-semibold leading-tight text-ink-soft md:text-[17px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div className="mt-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-ink-soft">
              Vertraut von
            </p>
            <div className="mt-4 flex items-center gap-6 opacity-60">
              <GoogleWordmark className="text-2xl" />
              <span className="font-display text-sm font-medium text-ink-soft">Google Partner</span>
              <span className="font-display text-sm font-medium text-ink-soft">Google Ads</span>
            </div>
          </div>
        </div>

        {/* Right — team photo with rotating-seal badge */}
        <div className="relative">
          <div className="overflow-hidden rounded-card">
            <img
              src="/assets/images/google-ads/hero-googleads.png"
              alt="Das Crediso Google-Ads-Team bei der Arbeit"
              className="aspect-[639/582] w-full object-cover"
            />
          </div>
          {/* Translucent accent square peeking over the top-right corner */}
          <span
            aria-hidden="true"
            className="absolute right-5 -top-2 h-9 w-9 rounded-[7px] bg-teal-deep/20"
          />
          <img
            src="/assets/images/google-ads/hero-badge.png"
            alt=""
            aria-hidden="true"
            className="absolute -left-3 -top-6 h-24 w-24 animate-[spin_22s_linear_infinite] md:-left-6 md:-top-10 md:h-36 md:w-36 lg:-left-10 lg:-top-12 lg:h-44 lg:w-44"
          />
        </div>
      </div>
    </section>
  );
}
