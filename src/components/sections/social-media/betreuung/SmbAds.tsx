import type { ComponentType, SVGProps } from "react";
import { Megaphone, Target, Chart } from "../SmIcons";

interface Col {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}

const COLS: Col[] = [
  {
    icon: Megaphone,
    title: "Beitrags-Boosting",
    body: "Mit gezieltem Beitrags-Boosting präsentieren wir eure Inhalte einem breiteren Publikum. Mehr Reichweite, mehr Interaktion: Ihr müsst euch um die Technik nicht kümmern.",
  },
  {
    icon: Target,
    title: "Kampagnenplanung & Umsetzung",
    body: "Von der Zielgruppenanalyse über die Anzeigenerstellung bis zur laufenden Optimierung. Wir planen, schalten und optimieren eure Ads so, dass euer Budget wirklich arbeitet.",
  },
  {
    icon: Chart,
    title: "Reporting",
    body: "Volle Transparenz über den Erfolg eurer Kampagnen: Reichweite, Klicks, Conversions. Regelmäßige Berichte, damit ihr immer wisst, was euer Investment bringt.",
  },
];

/** "Boosting & Social Media Ads" — the page's one dark band. Three columns split
 *  by vertical hairlines on a black (ink) surface, copy inverted to paper, lavender
 *  icons. The dark full-bleed + divided-columns treatment appears nowhere else on
 *  the page. */
export function SmbAds() {
  return (
    <section className="bg-ink section-y">
      <div className="section-shell">
        <h2 className="h-display-sm max-w-3xl text-paper">Boosting &amp; Social Media Ads</h2>

        <div className="mt-12 grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-y-0 md:divide-x md:divide-paper/20">
          {COLS.map((col) => {
            const Icon = col.icon;
            return (
              <div key={col.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <Icon className="h-9 w-9 text-lavender" />
                <h3 className="mt-5 font-display text-xl font-semibold text-paper md:text-2xl">
                  {col.title}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-paper/85">
                  {col.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
