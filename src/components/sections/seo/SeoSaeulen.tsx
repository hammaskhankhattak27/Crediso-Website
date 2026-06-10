import { Link } from "react-router-dom";
import { Check } from "./SeoIcons";

/** The four building blocks of classic SEO — restructured from the running
 *  sentence in the copy brief so the featured card reads as a checklist. */
const FUNDAMENT_FEATURES = [
  "Technische Basis",
  "Saubere Inhaltsstruktur",
  "Relevante Keywords",
  "Autorität durch Backlinks",
];

const KI_ENGINES = ["Google Gemini", "ChatGPT", "Perplexity"];

/** Die drei Säulen — Klassisches SEO / Lokales SEO / GEO as a deliberately
 *  unequal bento: the dark foundation card carries the most visual weight,
 *  the two lighter cards stack beside it. The composition (not three equal
 *  siblings) is what cashes the "warum es zusammengehört" promise of the H2. */
export function SeoSaeulen() {
  return (
    <section id="saeulen" className="section-shell section-y">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
        <h2 className="h-display text-ink">Was wir machen und warum es zusammengehört</h2>
        <p className="max-w-xl font-body text-lg leading-relaxed text-ink">
          Klassisches SEO ist das Fundament, lokales SEO macht euch in Graz und der Region
          sichtbar – und GEO trägt beides in die KI-Suche. Drei Säulen, eine Strategie.
        </p>
      </div>

      {/* Bento: the two lighter pillars stack left, the dark foundation card
          anchors the right — mirrored vs. CcLeistungen so the Web-category
          pages don't read as the same template. */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* 01 — Klassisches SEO (featured, dark). First in DOM for reading order. */}
        <article className="flex flex-col rounded-card bg-teal-deep p-8 md:p-10 lg:col-start-2 lg:row-start-1">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-paper/60">
            01 · Das Fundament
          </span>
          <h3 className="mt-3 font-display text-[2rem] font-semibold leading-tight tracking-display text-paper md:text-[clamp(2rem,3vw,2.75rem)]">
            Klassisches SEO
          </h3>
          <p className="mt-4 font-body text-lg leading-relaxed text-paper/90">
            Technische Basis, saubere Inhaltsstruktur, relevante Keywords und der Aufbau von
            Autorität durch Backlinks – das Fundament, ohne das nichts funktioniert.
          </p>
          <ul className="mt-8 flex-1 divide-y divide-paper/15 border-t border-paper/15">
            {FUNDAMENT_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3.5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-paper/10 text-mint">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-medium leading-tight text-paper">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="/website"
            className="mt-8 inline-block self-start font-display text-base font-semibold text-mint underline underline-offset-4 hover:opacity-80"
          >
            Mehr zur Website-Entwicklung
          </Link>
        </article>

        {/* 02 + 03 stack */}
        <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-1">
          {/* 02 — Lokales SEO with the large-stat treatment */}
          <article className="rounded-card bg-mint p-8">
            <span className="font-display text-sm font-medium uppercase tracking-wide text-ink-soft/60">
              02 · Die Region
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-display text-ink">
              Lokales SEO
            </h3>
            <p className="mt-6 flex items-end gap-3">
              <span className="font-display text-[clamp(3rem,5vw,4.25rem)] font-bold leading-none tracking-display text-teal-deep">
                ~50&nbsp;%
              </span>
              <span className="pb-1 font-body text-base leading-snug text-ink-soft">
                aller Google-Suchen
                <br />
                haben einen lokalen Bezug.
              </span>
            </p>
            <p className="mt-5 font-body text-lg leading-relaxed text-ink">
              Google Business Profil, NAP-Konsistenz, lokale Keywords und aktives
              Bewertungsmanagement sorgen dafür, dass ihr in Graz und der Region sichtbar seid.
            </p>
          </article>

          {/* 03 — GEO with the AI-engine chips */}
          <article className="flex-1 rounded-card bg-smoke p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-display text-sm font-medium uppercase tracking-wide text-ink-soft/60">
                03 · Die KI-Suche
              </span>
              <span className="rounded-pill bg-teal-deep px-4 py-1.5 font-display text-sm font-semibold text-paper">
                Seit 2025
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-display text-ink">
              GEO: Optimierung für die KI-Suche
            </h3>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink">
              Seit 2025 beantwortet Google viele Suchanfragen direkt mit KI-generierten
              Zusammenfassungen, sogenannten AI Overviews. GEO, kurz für Generative Engine
              Optimization, sorgt dafür, dass euer Unternehmen auch dort als vertrauenswürdige
              Quelle auftaucht:
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {KI_ENGINES.map((engine) => (
                <li
                  key={engine}
                  className="rounded-pill border border-ink px-4 py-2 font-display text-sm font-semibold text-ink"
                >
                  {engine}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
