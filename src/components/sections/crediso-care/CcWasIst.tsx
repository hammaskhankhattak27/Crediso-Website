import { Pulse, Chat } from "./CcIcons";

const MONITORED = ["Sicherheit", "Ladezeit", "Google-Ranking"];

export function CcWasIst() {
  return (
    <section className="section-shell section-y">
      <div className="max-w-3xl">
        <h2 className="h-display text-ink">
          Ein Fixpreis. Kein Zögern. Keine Überraschungen.
        </h2>
      </div>

      {/* Copy left, image right — vertically centred against a landscape photo. */}
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Promise + what we watch in the background */}
        <div className="flex flex-col">
          <p className="font-body text-lg leading-relaxed text-ink">
            Crediso Care ist das Rundum-sorglos-Paket für deinen Onlineauftritt. Jeder in deinem
            Team kann sich jederzeit melden – neues Produkt, Aktion am Montag, Idee für ein Pop-up.
            Alles ist im Fixpreis enthalten, ohne zusätzliche Rechnung.
          </p>

          <p className="mt-8 font-display text-base font-medium uppercase tracking-wide text-ink-soft">
            Im Hintergrund überwachen wir laufend
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {MONITORED.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2.5 rounded-pill border border-ink/15 bg-paper px-5 py-3"
              >
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-deep/50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-deep" />
                </span>
                <span className="font-display text-base font-semibold text-ink">{item}</span>
                <Pulse className="h-5 w-5 text-teal-deep" />
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-md font-display text-[clamp(1.25rem,2.4vw,1.75rem)] font-medium leading-snug tracking-tight text-teal-deep">
            Damit deine Website immer einen Schritt voraus ist.
          </p>
        </div>

        {/* Landscape photo in a fixed-aspect card; the WhatsApp voice-note sits
            in a mint chat-bubble below it (overlapping the corner on desktop). */}
        <div className="relative">
          <div className="overflow-hidden rounded-card">
            <img
              src="/assets/images/website/foerderung-team.png"
              alt="Das Crediso-Team kümmert sich um die Website seiner Kund:innen"
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <figure className="mt-5 rounded-card border border-ink/10 bg-mint p-6 lg:absolute lg:-bottom-6 lg:-left-6 lg:mt-0 lg:max-w-xs">
            <figcaption className="flex items-center gap-2 text-teal-deep">
              <Chat className="h-5 w-5 shrink-0" />
              <span className="font-display text-sm font-semibold uppercase tracking-wide">
                WhatsApp-Sprachnachricht
              </span>
            </figcaption>
            <blockquote className="mt-3 font-display text-lg font-medium leading-snug text-ink">
              „Idee während der Autofahrt durchgegeben? Kein Problem – wir sind schon dran.“
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  );
}
