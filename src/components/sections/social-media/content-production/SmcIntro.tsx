/** Opening for the Content Production page — a full-width oversized statement with
 *  a lavender-highlighted keyword, and the supporting copy pushed to the right
 *  margin. The asymmetric "big headline + offset copy" composition is its own
 *  layout on the page. */
export function SmcIntro() {
  return (
    <section className="section-shell section-y">
      <h2 className="h-display max-w-4xl text-ink">
        Wir erzählen Geschichten, die{" "}
        <span className="rounded bg-lavender px-2 [box-decoration-break:clone]">fesseln</span>.
      </h2>

      <div className="mt-10 lg:ml-auto lg:max-w-lg">
        <p className="font-body text-lg leading-relaxed text-ink">
          Erfolgreiche Social Media Inhalte leben von Emotionen und packendem Storytelling. Besonders
          bei Fotos, Reels (Videos) und TikToks ist es entscheidend, Geschichten zu erzählen, die
          deine Zielgruppe fesseln.
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-ink">
          Mit gezielter Content-Produktion kannst du nachhaltig Engagement und deine Reichweite
          steigern. Unser erfahrenes Social Media Team unterstützt dich dabei, die richtigen Inhalte
          zu erstellen, um deine Botschaft effektiv zu vermitteln und deine Zielgruppe direkt
          anzusprechen.
        </p>
      </div>
    </section>
  );
}
