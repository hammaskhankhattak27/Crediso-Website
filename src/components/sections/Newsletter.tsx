import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h2 className="h-display text-ink">
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
            <Button type="submit" className="shrink-0">
              einreichen
            </Button>
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
