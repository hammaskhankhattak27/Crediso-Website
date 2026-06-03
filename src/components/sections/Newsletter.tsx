import { useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] font-bold leading-[1.08] tracking-display text-ink">
            Mehr Anfragen, mehr Sichtbarkeit, mehr Umsatz.
          </h2>
          <p className="font-display text-2xl font-medium text-ink md:text-3xl">
            Der Praxisguide für Unternehmen 2026
          </p>
          <p className="mt-2 font-body text-lg text-ink-soft">
            Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen diesen Guide kostenlos zu.
          </p>

          <form
            className="mt-4 flex w-full max-w-lg flex-col gap-4 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-1 items-center rounded-pill border border-ink px-5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail-Adresse"
                className="w-full bg-transparent py-3.5 font-body text-lg text-ink-soft placeholder:text-slate focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-7 py-4 font-display text-lg font-semibold text-paper transition-opacity hover:opacity-90"
            >
              einreichen
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>

          <p className="mt-4 font-body text-base text-ink">
            Website · SEO · GEO · Social Media · Google Ads · Content · Corporate Design
          </p>
        </div>

        <div className="relative overflow-hidden rounded-card bg-mint">
          <img
            src="/assets/images/newsletter-feature.png"
            alt="Praxisguide für Unternehmen 2026"
            className="h-[380px] w-full object-cover md:h-[520px] lg:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
