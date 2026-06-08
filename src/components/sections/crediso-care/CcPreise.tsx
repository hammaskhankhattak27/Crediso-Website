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
    <section id="preise" className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
            Preise
          </span>
          <h2 className="mt-4 h-display text-ink">Transparent und planbar.</h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-graphite">
            Crediso Care gibt es ab €229 pro Monat. Je nach Bedarf und Größe deines Unternehmens
            stellen wir dir das passende Paket zusammen. Welches das ist, besprechen wir in einem
            kostenlosen Erstgespräch.
          </p>
          <div className="mt-8">
            <Button href="#contact">Jetzt Erstgespräch vereinbaren</Button>
          </div>
        </div>

        {/* Price card */}
        <article className="rounded-card border-2 border-ink bg-mint p-8 md:p-10">
          <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
            Crediso Care
          </span>
          <p className="mt-5 font-display font-bold leading-none tracking-tight text-teal-deep">
            <span className="align-top text-2xl text-ink-soft">Ab </span>
            <span className="text-6xl">€ 229,-</span>
          </p>
          <p className="mt-4 font-body text-lg text-ink">
            monatlich · zzgl. MwSt. · individuell auf dich abgestimmt
          </p>

          <ul className="mt-8 space-y-3.5 border-t border-ink/15 pt-8">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" />
                <span className="font-body text-base leading-snug text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
