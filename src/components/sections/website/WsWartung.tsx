export function WsWartung() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="overflow-hidden rounded-card">
          <img
            src="/assets/images/website/wartung.png"
            alt="Crediso Mitarbeiter pflegt eine Website am Laptop"
            loading="lazy"
            className="h-[320px] w-full object-cover md:h-[460px]"
          />
        </div>

        {/* Copy */}
        <div>
          <h2 className="h-display text-ink">Einfache Wartung, volle Kontrolle</h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-graphite">
            Wir entwickeln Websites die du selbst pflegen kannst, ganz ohne Programmierkenntnisse.
            Wir zeigen dir wie du Inhalte bearbeitest, Seiten anlegst und Bilder austauschst. Deine
            Website, deine Kontrolle.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <img
              src="/assets/images/website/wordpress.png"
              alt="WordPress"
              loading="lazy"
              className="h-12 w-12 object-contain"
            />
            <img
              src="/assets/images/website/elementor.png"
              alt="Elementor"
              loading="lazy"
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
