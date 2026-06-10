import type { SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { Building, Cart, Star, Zap } from "./OsIcons";

interface Chip {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  sub: string;
  /** Absolute position inside the orbit canvas. */
  className: string;
}

const CHIPS: Chip[] = [
  { icon: Star, title: "Top Bewertungen", sub: "5.0 ★ Google", className: "left-[26%] top-0" },
  { icon: Cart, title: "100+ Shops", sub: "seit 2019", className: "left-0 top-[38%]" },
  { icon: Building, title: "OTTO Group", sub: "Expertise", className: "right-0 top-[30%]" },
  { icon: Zap, title: "Schnelle Umsetzung", sub: "Ø 4–6 Wochen", className: "bottom-0 left-[38%]" },
];

/** Decorative trust orbit — concentric rings with frosted proof chips. */
function TrustOrbit() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[480px]">
      {/* Concentric rings */}
      <span className="absolute inset-[6%] rounded-full border border-paper/[0.04] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
      <span className="absolute inset-[17%] rounded-full border border-paper/10 [border-style:dashed]" />
      <span className="absolute inset-[28%] rounded-full border border-paper/15" />
      {/* Center medallion */}
      <span className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-mint/30 bg-paper/10">
        <Cart className="h-8 w-8 text-paper" />
      </span>
      {/* Frosted proof chips */}
      {CHIPS.map((chip) => {
        const Icon = chip.icon;
        return (
          <span
            key={chip.title}
            className={`absolute flex items-center gap-3 rounded-2xl border border-paper/10 bg-paper/10 py-2.5 pl-3 pr-4 backdrop-blur-md ${chip.className}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-paper/15 text-paper">
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block whitespace-nowrap font-display text-sm font-medium leading-snug text-paper">
                {chip.title}
              </span>
              <span className="block whitespace-nowrap font-display text-xs font-light text-paper/80">
                {chip.sub}
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );
}

/** Bereit fürs nächste Level — full-width teal CTA banner: trust orbit on
 *  the left, headline + CTAs on the right (Figma's closing conversion band). */
export function OsBereit() {
  return (
    <section className="section-shell section-y">
      <div className="overflow-hidden rounded-card bg-teal-deep px-6 py-14 md:px-14 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-20">
          <TrustOrbit />

          <div>
            <h2 className="font-display text-[2rem] font-semibold leading-[1.25] tracking-tight text-paper md:text-[3rem]">
              Bereit, dein Online-Business auf das nächste Level zu bringen?
            </h2>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-paper/90">
              Starte jetzt dein E-Commerce-Erfolgskapitel! Wir helfen dir, deinen Onlineshop
              perfekt umzusetzen.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#contact" variant="light">
                Jetzt unverbindlich beraten lassen
              </Button>
              <Button href="/blog" variant="outline-light">
                Zum Artikel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
