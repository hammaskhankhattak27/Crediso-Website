import type { ComponentType, SVGProps } from "react";
import { Pen, Layers, Chat, Chart } from "../SmIcons";

interface Row {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}

const ROWS: Row[] = [
  {
    icon: Pen,
    title: "Postings",
    body: "Individuelle Contentpläne aus Fotos, Videos, Grafiken und Texten: zugeschnitten auf eure Marke und Zielgruppe. Regelmäßig, konsistent und immer auf dem aktuellen Stand der Plattformen.",
  },
  {
    icon: Layers,
    title: "Content",
    body: "Wir übernehmen die komplette Content-Produktion: Planung und Umsetzung von Foto- und Video-Shootings, Grafikerstellung und suchmaschinenoptimierte Captions. Ihr müsst nur freigeben.",
  },
  {
    icon: Chat,
    title: "Community",
    body: "Wir betreuen eure Kanäle aktiv: Kommentare beantworten, Nachrichten bearbeiten, Community aufbauen. Eine engagierte Community entsteht durch Konsistenz, die liefern wir.",
  },
  {
    icon: Chart,
    title: "Reporting",
    body: "Monatliche Auswertung eurer Performance. Was hat funktioniert, was nicht, und wie geht es weiter? Transparenz ist für uns selbstverständlich.",
  },
];

/** "Laufende Content- & Community Betreuung" — a sticky heading column on the left
 *  pinned beside a divided stack of icon rows on the right. The heading stays in
 *  view while the four deliverables scroll past. Unique sticky-split layout. */
export function SmbBetreuung() {
  return (
    <section className="bg-paper-cool section-y">
      <div className="section-shell grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="h-display-sm text-ink">
            Laufende Content- &amp; Community Betreuung
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink">
            Unsere Social Media Expert:innen Lina, Anina und Max sind eure direkten
            Ansprechpartner: in Graz, der Steiermark und im gesamten DACH-Raum.
          </p>
        </div>

        <ul className="-mt-4">
          {ROWS.map((row) => {
            const Icon = row.icon;
            return (
              <li
                key={row.title}
                className="flex gap-5 border-b border-ink/12 py-8 first:border-t md:gap-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lavender text-ink">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {row.title}
                  </h3>
                  <p className="mt-2 font-body text-base leading-relaxed text-ink">{row.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
