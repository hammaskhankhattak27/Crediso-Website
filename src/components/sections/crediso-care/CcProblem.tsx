import { cn } from "@/lib/utils";

const NOTES = [
  { text: "„Öffnungszeiten? Stehen noch die von vor zwei Jahren.“", bg: "bg-mint", tilt: "lg:-rotate-2" },
  { text: "„Der neue Kollege fehlt noch auf der Teamseite.“", bg: "bg-lavender", tilt: "lg:rotate-1" },
  {
    text: "„Eine Änderung anfragen? Kostet Zeit, Nerven – und meist eine Extra-Rechnung.“",
    bg: "bg-sun",
    tilt: "lg:-rotate-1",
  },
];

export function CcProblem() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
            Das Problem
          </span>
          <h2 className="mt-4 h-display text-ink">Kennst du das?</h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-graphite">
            Auf der Website stehen noch die Öffnungszeiten von vor zwei Jahren. Der neue Mitarbeiter
            fehlt auf der Teamseite. Eine Änderung beantragen kostet Zeit, Nerven und meistens eine
            extra Rechnung, deren Höhe niemand vorher kennt. Also bleibt es einfach so, wie es ist.
          </p>
          <p className="mt-8 font-display text-2xl font-semibold leading-snug text-teal-deep">
            Genau dafür gibt es Crediso Care.
          </p>
        </div>

        {/* Sticky-note style problem cards */}
        <div className="flex flex-col gap-5">
          {NOTES.map((note) => (
            <div
              key={note.text}
              className={cn(
                "rounded-card border border-ink p-6 transition-transform duration-300 md:p-7",
                note.bg,
                note.tilt,
              )}
            >
              <p className="font-display text-xl font-medium leading-snug text-ink">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
