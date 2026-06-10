export function About() {
  return (
    <section id="culture" className="section-shell section-y">
      <div className="overflow-hidden rounded-card">
        <img
          src="/assets/images/about-bg.png"
          alt="Das Team von Crediso"
          className="h-[280px] w-full object-cover md:h-[420px] lg:h-[520px]"
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 border-b border-ink-soft pb-12 lg:grid-cols-2 lg:gap-16">
        <h2 className="h-display-sm text-ink">
          Hi, wir sind Crediso, deine Digitalagentur aus Graz.
        </h2>
        <p className="max-w-xl font-body text-lg leading-relaxed text-ink lg:pt-2">
          Während du dich um dein Business kümmerst, übernehmen wir deinen kompletten Onlineauftritt.
          Websites, Social Media, Google Ads, SEO, Foto & Video aus einer Hand, mit einem persönlichen
          Ansprechpartner der dich und dein Unternehmen wirklich kennt.
        </p>
      </div>
    </section>
  );
}
