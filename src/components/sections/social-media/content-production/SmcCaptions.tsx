import { Heart, Chat } from "../SmIcons";

const QUALITAETEN = ["Hook", "Klarheit", "Call-to-Action"];

/** "Text / Captions" — an editorial two-column band: a real, demonstrative
 *  social post-card on the left (handle, an example caption, engagement footer)
 *  paired with the framing copy on the right. The post-card *shows* the craft
 *  instead of describing it, and is the page's one playful "delight" moment. */
export function SmcCaptions() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Example post-card — the caption made tangible */}
        <div className="rounded-card bg-smoke p-8 md:p-10">
          {/* Handle row */}
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lavender font-display text-lg font-bold text-ink">
              C
            </span>
            <div>
              <p className="font-display text-base font-semibold text-ink">crediso_media</p>
              <p className="font-body text-sm text-ink-soft">Graz · Steiermark</p>
            </div>
          </div>

          {/* Example caption */}
          <p className="mt-6 font-body text-lg leading-relaxed text-ink">
            Neue Saison, neuer Look ✨ Ab sofort findest du unsere Herbst-Kollektion online und im
            Store in der Grazer Innenstadt. Welches Teil wird dein Favorit?{" "}
            <span className="font-medium text-ink-soft">
              #graz #steiermark #newcollection #shoplocal
            </span>
          </p>

          {/* Engagement footer */}
          <div className="mt-6 flex items-center gap-6 border-t border-ink/10 pt-4">
            <span className="flex items-center gap-2 font-display text-sm font-semibold text-ink-soft">
              <Heart className="h-5 w-5" /> 1.248
            </span>
            <span className="flex items-center gap-2 font-display text-sm font-semibold text-ink-soft">
              <Chat className="h-5 w-5" /> 86
            </span>
            <span className="ml-auto font-body text-xs uppercase tracking-wide text-mute">
              vor 2 Std.
            </span>
          </div>
        </div>

        {/* Framing copy */}
        <div>
          <h2 className="h-display-sm text-ink">Wir bringen deine Botschaft auf den Punkt.</h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-ink">
            Mit unserer Leidenschaft für Worte und Expertise im kreativen Schreiben verfassen wir
            prägnante und ansprechende Social-Media-Captions. Wir sorgen dafür, dass deine Botschaft
            in wenigen Worten klar und überzeugend vermittelt wird, um maximale Wirkung und
            Engagement zu erzielen.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {QUALITAETEN.map((q) => (
              <li
                key={q}
                className="rounded-pill bg-lavender px-5 py-2 font-display text-sm font-medium text-ink-090"
              >
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
