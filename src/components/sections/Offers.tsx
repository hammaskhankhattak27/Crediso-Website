import { Button } from "@/components/ui/Button";

export function Offers() {
  return (
    <section className="section-shell py-8 md:py-12">
      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
        {/* Social Media Workshops */}
        <article className="flex flex-col justify-between rounded-card bg-lavender p-8 lg:col-start-1 lg:row-start-1">
          <div>
            <span className="font-display text-sm font-medium uppercase tracking-wide text-ink-soft">
              Social Media
            </span>
            <h3 className="mt-3 font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-tight tracking-display text-ink">
              Workshops
            </h3>
            <p className="mt-4 font-body text-lg leading-relaxed text-ink-soft">
              Lerne in unseren Social Media Workshops, wie du die Präsenz deines Unternehmens stärken
              und deine Zielgruppen effektiv erreichen kannst.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="outline" size="md">
              Mehr dazu
            </Button>
          </div>
        </article>

        {/* Google Ads Content (teal) */}
        <article className="flex flex-col justify-between rounded-card bg-teal-deep p-8 text-paper lg:col-start-2 lg:row-start-1">
          <div>
            <span className="font-display text-sm font-medium uppercase tracking-wide text-paper/80">
              Content
            </span>
            <h3 className="mt-3 font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-tight tracking-display">
              Google Ads
            </h3>
            <p className="mt-4 font-body text-lg leading-relaxed text-paper/90">
              Hochwertiger Content, um die Botschaft deines Unternehmens besser zu vermitteln.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="outline-light" size="md">
              Mehr dazu
            </Button>
          </div>
        </article>

        {/* We care a lot — tall right card */}
        <article className="relative flex flex-col justify-between overflow-hidden rounded-card bg-mint p-8 lg:col-start-3 lg:row-span-2 lg:row-start-1">
          <div>
            <span className="font-display text-sm font-medium uppercase tracking-wide text-ink-soft">
              Website
            </span>
            <h3 className="mt-3 font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-tight tracking-display text-ink">
              We care a lot
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
              Das Rundum-sorglos-Paket für deinen Onlineauftritt! Damit deine Website genauso
              professionell wie dein Unternehmen bleibt, bieten wir dir einen persönlichen
              Ansprechpartner und umfassenden Service &amp; Support. Unser Team kennt deine Website und
              Ziele genau und übernimmt technische Instandhaltung, Aktualisierungen und die
              kontinuierliche Überwachung deines Google Rankings.
            </p>
          </div>
          <div className="mt-8">
            <Button size="md">Mehr dazu</Button>
          </div>
        </article>

        {/* Consultation CTA — wide bottom card */}
        <article className="relative flex flex-col justify-between overflow-hidden rounded-card bg-mint p-8 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:flex-row lg:items-end">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url(/assets/images/offer-contact-bg.png)" }}
            aria-hidden="true"
          />
          <div className="relative max-w-xl">
            <h3 className="font-display text-[clamp(1.75rem,2.6vw,2.75rem)] font-semibold leading-tight tracking-display text-ink-soft">
              Wir wollen dich kennen lernen.
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
              Ein Telefonat, ein Videocall oder ein persönliches Gespräch. Melde dich jetzt für deinen
              unverbindlichen Beratungstermin.
            </p>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <Button href="#contact" variant="outline" size="md">
              Kontakt
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
