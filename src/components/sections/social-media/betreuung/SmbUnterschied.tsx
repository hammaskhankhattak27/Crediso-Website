/** "Was uns unterscheidet" — a borderless typographic feature band. No card, no
 *  grid of points: a single oversized statement runs nearly full width with the
 *  decisive phrases highlighted in lavender. Distinct from every other section on
 *  the page, which all carry structure (steps, rows, columns, pills). */
export function SmbUnterschied() {
  return (
    <section className="section-shell section-y">
      <div className="border-y border-ink/15 py-12 md:py-16">
        <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Was uns unterscheidet
        </h2>
        <p className="mt-8 max-w-5xl font-display text-[clamp(1.6rem,3.6vw,2.9rem)] font-medium leading-[1.18] tracking-tight text-ink">
          Bei Crediso habt ihr immer einen{" "}
          <span className="rounded bg-lavender px-2 py-0.5 [box-decoration-break:clone]">
            fixen Ansprechpartner
          </span>
          , der euer Unternehmen wirklich kennt. Wir lernen eure Marke, eure Werte und eure Ziele
          von Grund auf kennen und denken langfristig mit. Wie ein{" "}
          <span className="rounded bg-lavender px-2 py-0.5 [box-decoration-break:clone]">
            Mitglied eures Teams
          </span>
          , das immer auf dem neuesten Stand ist.
        </p>
      </div>
    </section>
  );
}
