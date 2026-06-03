interface Cert {
  title: string;
  description: string;
  logo: string;
}

const CERTS: Cert[] = [
  {
    title: "KMU.DIGITAL Partner",
    description:
      "Als „Certified eCommerce and Social Media Expert – CESE\" können Projekte mit Crediso im Rahmen der KMU Digital gefördert werden.",
    logo: "/assets/images/cert-kmu-digital.png",
  },
  {
    title: "Elementor Top 10",
    description:
      "Ausgezeichnete Webentwicklung mit Elementor. Eines unserer Projekte wurde unter die Top 10 Elementor Websites weltweit gewählt. Konzipiert und umgesetzt von unserem Team.",
    logo: "/assets/images/cert-elementor.png",
  },
  {
    title: "Google Partner",
    description:
      "Wir sind deine offizielle Google Ads Partneragentur aus Graz. Über 8 Jahre Erfahrung. Mehr als 4,6 Millionen Websitebesucher für unsere Kunden generiert. Persönliche Betreuung durch unsere zertifizierten Google Ads Manager Robert und Tina.",
    logo: "/assets/images/cert-google-partner.png",
  },
];

export function Certifications() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="grid gap-6 lg:grid-cols-3">
        {CERTS.map((cert) => (
          <article
            key={cert.title}
            className="flex flex-col gap-5 rounded-[22px] border border-ink-soft p-8"
          >
            <div className="flex h-28 items-center">
              <img
                src={cert.logo}
                alt={cert.title}
                className="max-h-24 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-[clamp(1.75rem,2.4vw,2.75rem)] font-semibold leading-tight tracking-display text-ink-soft">
              {cert.title}
            </h3>
            <p className="font-body text-lg leading-relaxed text-ink-soft">{cert.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
