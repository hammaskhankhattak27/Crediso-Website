import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "./CcIcons";

const DETAILS = [
  { icon: Mail, label: "hallo@crediso.io", href: "mailto:hallo@crediso.io" },
  { icon: Phone, label: "+43 664 136 47 86", href: "tel:+436641364786" },
  { icon: MapPin, label: "Schmiedgasse 29, 8010 Graz", href: undefined },
];

export function CcKontakt() {
  return (
    <section id="contact" className="section-shell section-y">
      <div className="relative overflow-hidden rounded-card bg-mint px-6 py-16 text-center md:px-12 md:py-20">
        {/* rotating seal accent overlapping a corner */}
        <img
          src="/assets/images/hero-circle.png"
          alt=""
          aria-hidden="true"
          className="absolute -right-6 -top-6 h-24 w-24 animate-[spin_26s_linear_infinite] md:-right-8 md:-top-8 md:h-36 md:w-36"
        />

        <h2 className="mx-auto max-w-3xl h-display text-ink">Deine Website in guten Händen.</h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-graphite">
          Melde dich für ein kostenloses Erstgespräch. Wir schauen uns gemeinsam an, was du brauchst
          und welches Paket für dich am besten passt.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="mailto:hallo@crediso.io">Jetzt Erstgespräch vereinbaren</Button>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-x-10 gap-y-4 border-t border-ink/15 pt-10 sm:flex-row sm:flex-wrap">
          {DETAILS.map((detail) => {
            const Icon = detail.icon;
            const content = (
              <span className="inline-flex items-center gap-2.5 font-display text-base font-medium text-ink-soft">
                <Icon className="h-5 w-5 text-teal-deep" />
                {detail.label}
              </span>
            );
            return detail.href ? (
              <a key={detail.label} href={detail.href} className="hover:text-teal-deep">
                {content}
              </a>
            ) : (
              <span key={detail.label}>{content}</span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
