import { Link } from "react-router-dom";
import { Check } from "./SeoIcons";

/** The four building blocks of classic SEO — restructured from the running
 *  sentence in the copy brief so the foundation layer reads as a checklist. */
const FUNDAMENT_FEATURES = [
  "Technische Basis",
  "Saubere Inhaltsstruktur",
  "Relevante Keywords",
  "Autorität durch Backlinks",
];

const KI_ENGINES = ["Google Gemini", "ChatGPT", "Perplexity"];

/** Die drei Säulen as a right-aligned Fundament-Stack: heading and lead sit
 *  in a sticky left column (the FAQ's editorial split), while the three
 *  layers stack like floors of a building on the right — GEO smallest on
 *  top, Lokales SEO wider beneath, Klassisches SEO as the widest dark
 *  foundation at the bottom, all flush to the right edge. The narrowing
 *  staircase is what cashes the "warum es zusammengehört" promise of the
 *  H2: the foundation visibly carries everything above it. DOM order stays
 *  01 → 03 (flex-col-reverse flips it visually), so screen readers hear the
 *  story foundation-first. */
export function SeoSaeulen() {
  return (
    <section id="saeulen" className="section-shell section-y">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
        {/* Sticky intro column */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="h-display-sm text-ink">
            Was wir machen und warum es zusammen&shy;gehört
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink">
            Klassisches SEO ist das Fundament, lokales SEO macht euch in Graz und der Region
            sichtbar – und GEO trägt beides in die KI-Suche. Drei Säulen, eine Strategie.
          </p>
        </div>

        {/* The stack — layers step inward from the left, flush right */}
        <div className="flex flex-col-reverse gap-4">
        {/* 01 — Klassisches SEO: the full-width dark foundation */}
        <article className="w-full rounded-card bg-teal-deep p-8 md:p-10">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-paper/60">
            01 · Das Fundament
          </span>
          <div className="mt-3 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="font-display text-[2rem] font-semibold leading-tight tracking-display text-paper md:text-[clamp(2rem,3vw,2.75rem)]">
                Klassisches SEO
              </h3>
              <p className="mt-4 font-body text-lg leading-relaxed text-paper/90">
                Das Fundament, ohne das nichts funktioniert – es trägt die lokale Sichtbarkeit
                und die KI-Suche gleich mit.
              </p>
              <Link
                to="/website"
                className="mt-6 inline-block font-display text-base font-semibold text-mint underline underline-offset-4 hover:opacity-80"
              >
                Mehr zur Website-Entwicklung
              </Link>
            </div>
            <ul className="grid grid-cols-1 content-start gap-3.5 sm:grid-cols-2">
              {FUNDAMENT_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-paper/10 text-mint">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-medium leading-tight text-paper md:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* 02 — Lokales SEO: the middle layer, carried by the foundation */}
        <article className="w-full rounded-card bg-mint p-8 md:p-10 lg:ml-auto lg:w-[85%]">
          <span className="font-display text-sm font-medium uppercase tracking-wide text-ink-soft/60">
            02 · Die Region
          </span>
          <div className="mt-3 grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
            <div>
              <h3 className="font-display text-2xl font-semibold leading-tight tracking-display text-ink">
                Lokales SEO
              </h3>
              <p className="mt-4 font-body text-lg leading-relaxed text-ink">
                Google Business Profil, NAP-Konsistenz, lokale Keywords und aktives
                Bewertungsmanagement sorgen dafür, dass ihr in Graz und der Region sichtbar
                seid.
              </p>
            </div>
            <p className="flex items-end gap-3 lg:justify-end">
              <span className="font-display text-[clamp(3rem,5vw,4.25rem)] font-bold leading-none tracking-display text-teal-deep">
                ~50&nbsp;%
              </span>
              <span className="pb-1 font-body text-base leading-snug text-ink-soft">
                aller Google-Suchen
                <br />
                haben einen lokalen Bezug.
              </span>
            </p>
          </div>
        </article>

        {/* 03 — GEO: the top layer, smallest footprint, newest discipline */}
        <article className="w-full rounded-card bg-smoke p-8 md:p-10 lg:ml-auto lg:w-[70%]">
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
