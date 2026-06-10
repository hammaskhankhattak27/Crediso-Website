interface LedgerRow {
  /** The oversized editorial figure — a stat or a name, set in display type. */
  figure: string;
  /** Small line under the figure (optional unit/context). */
  sub?: string;
  body: string;
}

const LEDGER: LedgerRow[] = [
  {
    figure: "OTTO",
    sub: "Group",
    body: "Erfahrung beim größten europäischen E-Commerce-Händler",
  },
  {
    figure: "100+",
    sub: "Onlineshops",
    body: "Analysiert, aufgebaut & optimiert im Laufe ihrer Karriere",
  },
  {
    figure: "Product",
    sub: "Owner",
    body: "E-Commerce-Managerin für international bekannte Onlineshops",
  },
  {
    figure: "2019",
    sub: "Crediso",
    body: "Gründerin mit Fokus auf nachhaltige E-Commerce-Lösungen",
  },
];

/** Sara, unsere Gründerin — editorial magazine profile: tall portrait on the
 *  left (name plate over a bottom gradient), her career as a CV-style ledger
 *  on the right (oversized teal figures + hairline dividers), closed by the
 *  brand quote in large display type. */
export function OsGruenderin() {
  return (
    <section id="gruenderin" className="section-shell section-y">
      <h2 className="h-display text-ink">Sara, unsere Gründerin</h2>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-20">
        {/* Portrait — fills the ledger's height on desktop */}
        <div className="relative overflow-hidden rounded-card">
          <img
            src="/assets/images/webshop/sara.png"
            alt="Sara Caroline Friedrich, Gründerin und CEO von Crediso, mit aufgeklapptem Laptop"
            className="aspect-[4/5] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-7 px-8 text-paper">
            <p className="font-display text-2xl font-semibold leading-tight">
              Sara Caroline Friedrich
            </p>
            <p className="mt-1 font-body text-base text-paper/90">Gründerin & CEO · Crediso</p>
          </div>
        </div>

        {/* Career ledger — editorial rows, hairline dividers, oversized figures */}
        <div className="flex flex-col justify-center">
          {LEDGER.map((row, i) => (
            <div
              key={row.figure}
              className={
                i === 0
                  ? "grid grid-cols-1 gap-2 py-7 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-center sm:gap-8 lg:pt-0"
                  : "grid grid-cols-1 gap-2 border-t border-ink/10 py-7 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-center sm:gap-8"
              }
            >
              <div>
                <span className="block font-display text-4xl font-bold leading-none tracking-display text-teal-deep md:text-5xl">
                  {row.figure}
                </span>
                {row.sub && (
                  <span className="mt-1.5 block font-display text-base font-semibold text-ink-soft">
                    {row.sub}
                  </span>
                )}
              </div>
              <p className="font-body text-lg leading-relaxed text-ink">{row.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing brand quote — full-width display type */}
      <blockquote className="mt-14 max-w-4xl">
        <p className="font-display text-[1.75rem] font-medium italic leading-[1.25] tracking-tight text-teal-deep md:text-[2.5rem]">
          „Wir gestalten digitale Einkaufserlebnisse, die verkaufen.“
        </p>
      </blockquote>
    </section>
  );
}
