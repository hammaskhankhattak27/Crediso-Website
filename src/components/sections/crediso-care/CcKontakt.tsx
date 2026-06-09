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
      <div className="rounded-card bg-teal-deep px-6 py-16 text-center text-paper md:px-12 md:py-24">
        <span className="font-display text-base font-medium uppercase tracking-wide text-paper/70">
          Kontakt
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl h-display text-paper">
          Deine Website in guten Händen.
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-paper/90">
          Melde dich für ein kostenloses Erstgespräch. Wir schauen uns gemeinsam an, was du brauchst
          und welches Paket am besten zu dir passt – unverbindlich und kostenlos.
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
    </section>
  );
}
