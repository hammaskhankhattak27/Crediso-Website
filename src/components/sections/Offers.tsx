import { Button } from "@/components/ui/Button";

export function Offers() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[400fr_446fr_447fr]">
        {/* We care a lot — tall card, left column, spans both rows */}
        <article className="flex flex-col justify-between rounded-card bg-mint p-8 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div>
            <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
              Website
            </span>
            <h3 className="mt-4 font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-tight tracking-display text-ink">
              We care a lot
            </h3>
            <p className="mt-5 font-body text-lg leading-relaxed text-ink-soft">
              Das Rundum-sorglos-Paket für deinen Onlineauftritt! Damit deine Website genauso
              professionell wie dein Unternehmen bleibt, bieten wir dir einen persönlichen
              Ansprechpartner und umfassenden Service &amp; Support. Unser Team kennt deine Website und
              Ziele genau und übernimmt technische Instandhaltung, Aktualisierungen und die
              kontinuierliche Überwachung deines Google Rankings.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/crediso-care" size="md">Mehr dazu</Button>
          </div>
        </article>

        {/* Workshops — lavender, top middle */}
        <article className="flex flex-col justify-between rounded-card bg-lavender p-8 lg:col-start-2 lg:row-start-1 lg:min-h-[384px]">
          <div>
            <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
              Social Media
            </span>
            <h3 className="mt-4 font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-tight tracking-display text-ink">
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

        {/* Google Ads — teal, top right */}
        <article className="flex flex-col justify-between rounded-card bg-teal-deep p-8 text-paper lg:col-start-3 lg:row-start-1 lg:min-h-[384px]">
          <div>
            <span className="font-display text-base font-medium uppercase tracking-wide text-paper/80">
              Content
            </span>
            <h3 className="mt-4 font-display text-[clamp(2rem,3vw,2.75rem)] font-semibold leading-tight tracking-display">
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

        {/* Wir wollen dich kennen lernen — wide card, bottom of middle+right */}
        <article className="relative flex flex-col justify-between overflow-hidden rounded-card bg-mint p-8 lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:min-h-[233px]">
          <img
            src="/assets/images/offer-contact-bg.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-7 h-12 w-auto object-contain mix-blend-multiply md:h-14"
          />
          <h3 className="font-display text-[clamp(1.75rem,2.6vw,2.75rem)] font-semibold leading-tight tracking-display text-ink-soft">
            Wir wollen dich kennen lernen.
          </h3>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg font-body text-base leading-relaxed text-ink-soft">
              Ein Telefonat, ein Videocall oder ein persönliches Gespräch. Melde dich jetzt für deinen
              unverbindlichen Beratungstermin.
            </p>
            <Button href="#contact" variant="outline" size="md" className="shrink-0">
              Kontakt
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
