import { Heart, Chat } from "../SmIcons";

/** "Text / Captions" — the statement rendered as a stylized social-caption card:
 *  a handle row, the caption itself, and an engagement footer. The post-card motif
 *  literally embodies captions and is the page's one playful "delight" moment. */
export function SmcCaptions() {
  return (
    <section className="section-shell section-y">
      <div className="mx-auto max-w-xl rounded-card bg-smoke p-8 md:p-10">
        {/* Handle row */}
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lavender font-display text-lg font-bold text-ink">
            C
          </span>
          <div>
            <p className="font-display text-base font-semibold text-ink">crediso_media</p>
            <p className="font-body text-sm text-ink-soft">Text &amp; Captions</p>
          </div>
        </div>

        {/* Caption */}
        <h2 className="mt-6 font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-[1.875rem]">
          Wir bringen deine Botschaft auf den Punkt.
        </h2>
        <p className="mt-3 font-body text-lg leading-relaxed text-ink">
          Mit unserer Leidenschaft für Worte und Expertise im kreativen Schreiben verfassen wir
          prägnante und ansprechende Social-Media-Captions. Wir sorgen dafür, dass deine Botschaft in
          wenigen Worten klar und überzeugend vermittelt wird, um maximale Wirkung und Engagement zu
          erzielen.
        </p>

        {/* Engagement footer */}
        <div className="mt-6 flex items-center gap-6 border-t border-ink/10 pt-4">
          <span className="flex items-center gap-2 font-display text-sm font-semibold text-ink-soft">
            <Heart className="h-5 w-5" /> Gefällt mir
          </span>
          <span className="flex items-center gap-2 font-display text-sm font-semibold text-ink-soft">
            <Chat className="h-5 w-5" /> Kommentieren
          </span>
        </div>
      </div>
    </section>
  );
}
