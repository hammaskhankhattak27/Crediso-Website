import { Button } from "@/components/ui/Button";

/** "Reels / TikToks / Videoproduktion" — a cinematic full-bleed image card with a
 *  dark overlay, the copy and two CTAs (Videoseite + Anfrage) sitting on top. The
 *  image-as-stage treatment with twin CTAs is unique to this section. */
export function SmcVideo() {
  return (
    <section className="section-shell section-y">
      <div className="relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-card p-8 md:min-h-[32rem] md:p-14">
        <img
          src="/assets/images/blog-storytelling.png"
          alt="Videoproduktion von Crediso – Reels und TikToks"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/20"
        />

        <div className="max-w-2xl">
          <span className="font-display text-base font-medium uppercase tracking-wide text-lavender">
            Reels · TikToks · Videoproduktion
          </span>
          <h2 className="mt-3 h-display-sm text-paper">Klappe zu und ACTION!</h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-paper/90">
            Videos sind das beliebteste Format auf Social Media und der Schlüssel, um die
            Aufmerksamkeit deiner Zielgruppe zu gewinnen. Wir bieten die perfekte Kombination aus
            professionellen Video- sowie authentischen Reel- und TikTok-Drehs.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-paper/85">
            Von hochwertigen Produktionen bis zu authentischen Smartphone-Aufnahmen liefern wir
            maßgeschneiderte Lösungen für deine Bedürfnisse. Mit einem klaren Fokus auf aktuelle
            Social-Media-Trends fangen wir spontane, fesselnde Momente ein, die deine Zielgruppe
            begeistern und nachhaltig beeindrucken.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/video" variant="light">
              Zur Videoseite
            </Button>
            <Button href="#contact" variant="outline-light">
              Projekt anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
