export function About() {
  return (
    <section id="culture" className="section-shell py-16 md:py-24">
      <div className="overflow-hidden rounded-[32px]">
        <img
          src="/assets/images/about-bg.png"
          alt="Das Team von Crediso"
          className="h-[280px] w-full object-cover md:h-[420px] lg:h-[520px]"
        />
      </div>

      <div className="mt-12 grid gap-8 border-b border-ink-soft pb-12 lg:grid-cols-2 lg:gap-16">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.12] tracking-display text-ink">
          Hi, wir sind Crediso, deine Digitalagentur aus Graz.
        </h2>
        <p className="max-w-xl font-body text-lg leading-relaxed text-graphite lg:pt-2">
          Während du dich um dein Business kümmerst, übernehmen wir deinen kompletten Onlineauftritt.
          Websites, Social Media, Google Ads, SEO, Foto & Video aus einer Hand, mit einem persönlichen
          Ansprechpartner der dich und dein Unternehmen wirklich kennt.
        </p>
      </div>
    </section>
  );
}
