const PARAGRAPHS = [
  "Für ein bekanntes Grazer Unternehmen setzen wir gezielte Google-Ads-Kampagnen ein, um für jeden Standort unseres Kunden mehr Kontaktanfragen zu generieren. Jede Kampagne enthält standortrelevante Keywords und ist auf einen Radius von 50 km beschränkt, um gezielt Personen aus der Umgebung anzusprechen und unnötige Klicks zu vermeiden.",
  "Conversion-Aktionen wie Klicks auf die Telefonnummer, E-Mail-Adresse oder das Kontaktformular werden mithilfe des Google Tag Managers erfasst, um genau zu verfolgen, ob die Anzeigen zu tatsächlichen Anfragen führen. Diese Daten fließen in Smart Bidding ein, um die Effizienz der Kampagnen stetig zu verbessern und das Ziel – mehr Kontaktanfragen – erfolgreich zu erreichen.",
];

export function GaSuccessstory() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Story copy */}
        <div>
          <h2 className="h-display text-ink">Successstory</h2>
          <div className="mt-8 space-y-6">
            {PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="font-body text-lg leading-relaxed text-ink"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Metric card + outcome */}
        <div className="flex flex-col gap-6">
          {/* Main metric card */}
          <div className="rounded-card border border-sage bg-paper p-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4">
              {/* Left — growth metric */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-[18px] w-[18px] rounded-full bg-mint" />
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-ink">
                    Monthly Growth
                  </span>
                </div>
                <p className="mt-4 font-display text-6xl font-bold leading-none text-teal-deep md:text-8xl">
                  100%
                </p>
                <p className="mt-4 font-display text-2xl font-semibold leading-tight text-teal-deep">
                  Neukundenanfragen
                  <br />
                  pro Monat
                </p>
              </div>

              {/* Right — supporting metrics */}
              <div className="flex justify-between gap-6 sm:flex-col sm:items-end sm:justify-between sm:text-right">
                <div>
                  <p className="font-display text-4xl font-bold leading-none text-ink-soft">50 km</p>
                  <p className="mt-1.5 font-display text-xs font-bold uppercase tracking-wide text-slate">
                    Target Radius
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold leading-none text-ink-soft">GTM</p>
                  <p className="mt-1.5 font-display text-xs font-bold uppercase tracking-wide text-slate">
                    Tracking Active
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Outcome */}
          <div className="rounded-card bg-teal-deep p-8">
            <p className="font-display text-2xl font-semibold uppercase text-mint">The Outcome</p>
            <p className="mt-3 font-body text-xl leading-relaxed text-paper">
              Das Ergebnis: Unser Kunde erhält durch dieses Setup im Schnitt knapp hundert
              Neukundenanfragen pro Monat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
