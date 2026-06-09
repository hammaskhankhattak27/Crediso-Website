import type { ComponentType, SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Clock } from "./SmIcons";

interface Trust {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

const TRUST: Trust[] = [
  { icon: Clock, label: "ca. 20 Minuten" },
  { icon: Check, label: "100 % kostenlos" },
  { icon: Check, label: "unverbindlich" },
];

/** "Nicht sicher, was passt?" — low-pressure consultation invitation between the
 *  service list and the testimonials. A full-bleed rounded image with a dark
 *  overlay carries the centered CTA + trust pills. */
export function SmNichtSicher() {
  return (
    <section className="section-shell section-y">
      <div className="relative overflow-hidden rounded-card">
        {/* Background image */}
        <img
          src="/assets/images/about-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center md:py-28">
          <h2 className="h-display-sm text-paper">
            Nicht sicher, was das
            <br className="hidden sm:block" /> Richtige für euch ist?
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-paper/90">
            Kein Problem. In einem kurzen{" "}
            <span className="rounded bg-lavender px-1.5 py-0.5 font-medium text-ink [box-decoration-break:clone]">
              kostenlosen Erstgespräch
            </span>{" "}
            schauen wir gemeinsam, wo ihr steht und was euch wirklich weiterbringt.
          </p>

          <div className="mt-8">
            <Button href="#contact" variant="light">
              Jetzt kostenloses Erstgespräch buchen
            </Button>
          </div>

          {/* Trust pills */}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {TRUST.map((t) => {
              const Icon = t.icon;
              return (
                <li
                  key={t.label}
                  className="inline-flex items-center gap-2 rounded-pill border border-paper/30 px-4 py-2 font-display text-sm font-medium text-paper"
                >
                  <Icon className="h-4 w-4 text-mint" />
                  {t.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
