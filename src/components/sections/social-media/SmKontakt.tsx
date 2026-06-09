import type { ComponentType, SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Mail, Phone } from "./SmIcons";

const EMAIL = "hallo@crediso.io";
const PHONE = "+43 664 136 47 86";

interface Channel {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
}

const CHANNELS: Channel[] = [
  { icon: Mail, label: "Schreibt uns", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Ruft an", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
];

/** Closing contact band — the target of every `#contact` CTA on the page.
 *  Two-tone split: a black (ink) message + CTA on the left, and a mint contact
 *  block on the right where e-mail / phone are big, full-height clickable rows. */
export function SmKontakt() {
  return (
    <section id="contact" className="section-shell section-y">
      <div className="overflow-hidden rounded-card bg-ink text-paper">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — invitation + primary CTA */}
          <div className="relative flex flex-col justify-center overflow-hidden px-8 py-14 md:px-14 md:py-20">
            {/* rotating seal accent, bottom-left */}
            <img
              src="/assets/images/hero-circle.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 animate-[spin_28s_linear_infinite] opacity-15 md:h-52 md:w-52"
            />
            <div className="relative z-10 max-w-md">
              <h2 className="h-display text-paper">Bereit loszulegen?</h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-paper/90">
                Egal ob ihr direkt starten oder erst mal Fragen stellen wollt: Wir sind da.
              </p>
              <div className="mt-9">
                <Button href={`mailto:${EMAIL}`} variant="light">
                  Jetzt anfragen
                </Button>
              </div>
            </div>
          </div>

          {/* Right — contact channels as big clickable rows on a grey block */}
          <div className="flex flex-col divide-y divide-ink/10 bg-smoke text-ink">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.value}
                  href={c.href}
                  className="group flex flex-1 items-center justify-between gap-4 px-8 py-8 transition-colors hover:bg-ink hover:text-paper md:px-12 md:py-10"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="h-6 w-6 shrink-0" />
                    <span className="flex flex-col">
                      <span className="font-display text-sm font-semibold uppercase tracking-wide text-ink-soft group-hover:text-paper/60">
                        {c.label}
                      </span>
                      <span className="font-display text-xl font-semibold md:text-2xl">
                        {c.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
