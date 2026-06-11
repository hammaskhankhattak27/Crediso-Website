import { Button } from "@/components/ui/Button";
import { Heart } from "../SmIcons";

/** "UGC- & Influencer-Marketing" — copy on one side, a content collage on the
 *  other: a tall creator image, a square post and a lavender "@creator" tile,
 *  evoking an authentic feed. The image-collage bento is unique to this page. */
export function SmcUgc() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="h-display-sm text-ink">Kooperationen, die wirken.</h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink">
            Influencer- und Creatormarketing sind die Marketinginstrumente, wenn es darum geht,
            authentische Inhalte zu verbreiten und das Engagement im Zusammenhang mit deiner Marke zu
            fördern. Wir entwickeln maßgeschneiderte Influencer-Marketing-Strategien und
            User-Generated Content (UGC) Kampagnen, um dein Unternehmen optimal zu positionieren.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Mit gezielter Analyse und umfassendem Reporting stellen wir sicher, dass du die
            gewünschten Ergebnisse erzielst und deine Reichweite kontinuierlich steigerst. So
            maximieren wir den Erfolg deiner Social-Media-Präsenz und sorgen für nachhaltiges
            Wachstum.
          </p>
          <div className="mt-8">
            <Button href="#contact" variant="dark">
              Kampagne anfragen
            </Button>
          </div>
        </div>

        {/* Content collage */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative overflow-hidden rounded-card">
            <img
              src="/assets/images/project-akademie.png"
              alt="UGC-Kampagne von Crediso"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-pill bg-paper px-4 py-1.5 font-display text-sm font-semibold text-ink">
              UGC &amp; Influencer-Marketing Graz
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-card">
              <img
                src="/assets/images/blog-trend-analyse.png"
                alt="Creator-Content für Social Media"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between rounded-card bg-lavender p-5">
              <Heart className="h-6 w-6 text-ink" />
              <div>
                <p className="font-display text-base font-semibold text-ink">@echte Creator:innen</p>
                <p className="mt-1 font-body text-sm leading-snug text-ink">
                  Authentischer Content, der Vertrauen schafft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
