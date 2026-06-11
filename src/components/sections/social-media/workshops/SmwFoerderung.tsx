/** KMU.Digital funding explainer, anchored by an oversized "50%" figure. A
 *  stat-led split: the giant percentage fills the left, the explanation sits
 *  right. The big-number treatment appears only here. */
export function SmwFoerderung() {
  return (
    <section className="bg-lavender section-y">
      <div className="section-shell grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-20">
        <p className="font-display text-[clamp(6rem,18vw,13rem)] font-bold leading-none tracking-tighter text-ink">
          50<span className="align-top text-[0.4em]">%</span>
        </p>

        <div>
          <h2 className="h-display-sm text-ink">Zu 50 % gefördert über KMU.Digital</h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink">
            Mit der KMU.DIGITAL Beratungsförderung bekommt ihr die Hälfte zurück. Unsere Workshops
            sind förderfähig – ihr investiert in das Know-how eures Teams und holt euch die Hälfte
            der Kosten über das Förderprogramm wieder.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Wir unterstützen euch beim Antrag und erklären den Ablauf Schritt für Schritt. So bleibt
            der Aufwand für euch minimal.
          </p>
        </div>
      </div>
    </section>
  );
}
