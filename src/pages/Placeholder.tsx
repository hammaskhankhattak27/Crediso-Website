interface PlaceholderProps {
  /** Page title shown as the H1 — also the route's IA label. */
  title: string;
}

/**
 * Blank page stub for IA nodes that exist in the structure but haven't been
 * designed yet. Each route renders one of these until its real sections land.
 */
export function Placeholder({ title }: PlaceholderProps) {
  return (
    <section className="section-shell section-y">
      <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
        Crediso
      </span>
      <h1 className="mt-4 h-display text-ink">{title}</h1>
      <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink">
        Diese Seite befindet sich gerade im Aufbau.
      </p>
    </section>
  );
}
