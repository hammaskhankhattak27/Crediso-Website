import { Button } from "@/components/ui/Button";
import { Check } from "./CcIcons";

const INCLUDED = [
  "Hosting, Sicherheit & tägliche Backups",
  "Unbegrenzte Anfragen per Mail, Telefon & WhatsApp",
  "Laufende SEO- & GEO-Optimierung",
  "Persönlicher Ansprechpartner",
];

export function CcPreise() {
  return (
    <section id="preise" className="bg-mint section-y">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          {/* Copy + what's included */}
          <div>
            <h2 className="h-display text-ink">Transparent und planbar.</h2>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
              Crediso Care gibt es ab €229 pro Monat. Je nach Bedarf und Größe deines Unternehmens
              stellen wir dir das passende Paket zusammen – welches das ist, besprechen wir im
              kostenlosen Erstgespräch.
            </p>

            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" />
                  <span className="font-body text-base leading-snug text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="#contact">Jetzt Erstgespräch vereinbaren</Button>
            </div>
          </div>

          {/* Price slab — the figure does the talking (large-stat treatment) */}
          <article className="rounded-card border-2 border-ink bg-paper p-8 md:p-10">
            <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
              Crediso Care
            </span>

            <p className="mt-6 flex items-end gap-2 font-display font-bold leading-none tracking-tight text-teal-deep">
              <span className="pb-2 font-display text-2xl font-medium text-ink-soft">ab</span>
              <span className="text-[clamp(4rem,11vw,8rem)]">€229</span>
              <span className="pb-3 font-display text-2xl font-light text-ink-soft">/Mo.</span>
            </p>
            <p className="mt-4 font-body text-lg text-ink">
              zzgl. MwSt. · individuell auf dich abgestimmt · monatlich kündbar
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-ink/15 pt-8">
              <span className="font-display text-[clamp(2.5rem,6vw,3.5rem)] font-bold leading-none text-teal-deep">
                0&nbsp;€
              </span>
              <span className="font-body text-base leading-snug text-ink-soft">
                Erstgespräch – unverbindlich
                <br />
                und komplett kostenlos.
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
