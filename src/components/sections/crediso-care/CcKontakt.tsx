import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "./CcIcons";

const DETAILS = [
  { icon: Mail, label: "hallo@crediso.io", href: "mailto:hallo@crediso.io" },
  { icon: Phone, label: "+43 664 136 47 86", href: "tel:+436641364786" },
  { icon: MapPin, label: "Schmiedgasse 29, 8010 Graz", href: undefined },
];

export function CcKontakt() {
  return (
    <section id="contact" className="section-shell section-y">
      <div className="relative overflow-hidden rounded-card bg-teal-deep px-6 py-16 text-center text-paper md:px-12 md:py-24">
        {/* Rotating seal + accent square — decorative energy, on-system motion */}
        <img
          src="/assets/images/hero-circle.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 animate-[spin_26s_linear_infinite] opacity-80 md:-left-6 md:-top-6 md:h-36 md:w-36"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-8 right-8 h-14 w-14 rounded-[10px] bg-paper/10 md:bottom-12 md:right-12 md:h-20 md:w-20"
        />

        <div className="relative z-10">
          <h2 className="mx-auto max-w-3xl h-display text-paper">
            Deine Website in guten Händen.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-paper/90">
            Melde dich für ein kostenloses Erstgespräch. Wir schauen uns gemeinsam an, was du
            brauchst und welches Paket am besten zu dir passt – unverbindlich und kostenlos.
          </p>

          <div className="mt-10 flex justify-center">
            <Button href="mailto:hallo@crediso.io" variant="light" size="lg">
              Jetzt Erstgespräch vereinbaren
            </Button>
          </div>

          {/* Quick contact — interactive pills */}
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 border-t border-paper/20 pt-10">
            {DETAILS.map((detail) => {
              const Icon = detail.icon;
              const classes =
                "inline-flex items-center gap-2.5 rounded-pill border border-paper/30 px-5 py-3 font-display text-base font-medium text-paper";
              const content = (
                <>
                  <Icon className="h-5 w-5 shrink-0 text-paper" />
                  {detail.label}
                </>
              );
              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className={cn(classes, "transition-colors hover:bg-paper hover:text-teal-deep")}
                >
                  {content}
                </a>
              ) : (
                <span key={detail.label} className={classes}>
                  {content}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
