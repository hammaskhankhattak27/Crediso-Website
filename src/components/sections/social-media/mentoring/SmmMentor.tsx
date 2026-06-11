/** "Lerne von erfahrenen Profis" — portrait-led layout. A tall portrait carries
 *  an overlapping lavender name-plate at its lower edge (desktop), with the
 *  supporting copy alongside. The overlapping plate is unique to this section.
 *
 *  NOTE: placeholder portrait + name — client to supply the real mentor photo,
 *  name and 2-sentence bio (see content-source/social-media-mentoring.md). */
export function SmmMentor() {
  return (
    <section className="bg-paper-cool section-y">
      <div className="section-shell grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        {/* Portrait with overlapping name-plate */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="overflow-hidden rounded-card">
            <img
              src="/assets/images/contact-sara.png"
              alt="Deine Social Media Mentorin bei Crediso"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="rounded-card bg-lavender p-6 lg:absolute lg:-bottom-8 lg:-right-8 lg:max-w-[16rem] lg:p-7">
            <p className="font-display text-xl font-semibold leading-tight text-ink">
              [Name des Mentors]
            </p>
            <p className="mt-1 font-body text-sm leading-relaxed text-ink">
              Deine persönliche Begleitung durch das Mentoring.
            </p>
          </div>
        </div>

        <div className="lg:pl-4">
          <h2 className="h-display-sm text-ink">
            Lerne von jemandem, der Social Media täglich selbst umsetzt
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink">
            [Kurze Bio, 2 Sätze: Erfahrung, Spezialisierung, was diese Person besonders macht.
            Beispiel: „Sara hat in den letzten 8 Jahren über 120 Unternehmen im DACH-Raum dabei
            geholfen, ihren Social Media Auftritt professionell aufzubauen. Sie kennt die
            Plattformen, die Algorithmen – und vor allem die Fehler, die du nicht machen musst.“]
          </p>
          <p className="mt-4 font-body text-lg leading-relaxed text-ink">
            Du bekommst keine Theorie aus dem Lehrbuch, sondern Praxiswissen aus erster Hand.
          </p>
        </div>
      </div>
    </section>
  );
}
