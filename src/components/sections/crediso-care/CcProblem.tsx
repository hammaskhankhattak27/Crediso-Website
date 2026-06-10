import { cn } from "@/lib/utils";

/** Scattered "sticky-note" complaints. Each carries its own surface, resting
 *  tilt and an overlap offset so the cluster reads hand-pinned rather than
 *  grid-aligned. They straighten and lift on hover. */
const NOTES = [
  {
    text: "„Öffnungszeiten? Stehen noch die von vor zwei Jahren.“",
    bg: "bg-mint",
    tilt: "lg:-rotate-3",
    offset: "lg:ml-0",
  },
  {
    text: "„Der neue Kollege fehlt noch auf der Teamseite.“",
    bg: "bg-sage",
    tilt: "lg:rotate-2",
    offset: "lg:ml-16 lg:-mt-4",
  },
  {
    text: "„Eine Änderung anfragen? Kostet Zeit, Nerven – und meist eine Extra-Rechnung.“",
    bg: "bg-sun",
    tilt: "lg:-rotate-1",
    offset: "lg:ml-4 lg:-mt-3",
  },
];

export function CcProblem() {
  return (
    <section className="section-shell section-y">
      {/* Asymmetric editorial split: statement weighs more than the cluster. */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
        {/* Statement */}
        <div>
          <h2 className="h-display text-ink">Kennst du das?</h2>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink">
            Auf der Website stehen noch die Öffnungszeiten von vor zwei Jahren. Der neue Mitarbeiter
            fehlt auf der Teamseite. Eine Änderung beantragen kostet Zeit, Nerven und meistens eine
            extra Rechnung, deren Höhe niemand vorher kennt. Also bleibt es einfach so, wie es ist.
          </p>
          <p className="mt-9 max-w-md font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-snug tracking-tight text-teal-deep">
            Genau dafür gibt es Crediso&nbsp;Care.
          </p>
        </div>

        {/* Pinned note cluster — overlapping, varied tilt, straighten on hover */}
        <ul className="flex flex-col gap-5 lg:gap-0">
          {NOTES.map((note) => (
            <li
              key={note.text}
              className={cn(
                "rounded-card border border-ink p-6 transition-transform duration-300 ease-out md:p-7 lg:max-w-md lg:hover:-translate-y-1 lg:hover:rotate-0",
                note.bg,
                note.tilt,
                note.offset,
              )}
            >
              <p className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                {note.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
