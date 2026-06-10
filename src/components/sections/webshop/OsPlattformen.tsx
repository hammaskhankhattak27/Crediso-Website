import type { SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { WordPressLogo, ShoppingBag } from "./OsIcons";

interface Platform {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  tagline: string;
  title: string;
  features: string[];
  idealFor: string;
  /** Visual flavor: mint header (WordPress) vs ink header (Shopify). */
  tone: "mint" | "ink";
}

const PLATFORMS: Platform[] = [
  {
    icon: WordPressLogo,
    tagline: "Flexibel & individuell anpassbar",
    title: "WordPress + WooCommerce",
    features: [
      "Volle Kontrolle über Design & Funktionen",
      "Unbegrenzte Anpassungsmöglichkeiten",
      "Ideal für komplexe Produktkataloge",
      "Eigenes Hosting – du behältst die Kontrolle",
      "Tausende Plugins & Erweiterungen",
    ],
    idealFor: "Individuelle & skalierbare Projekte",
    tone: "mint",
  },
  {
    icon: ShoppingBag,
    tagline: "Schnell & unkompliziert starten",
    title: "Shopify",
    features: [
      "Blitzschneller Start ohne Technik-Kenntnisse",
      "Hosting & Sicherheit inklusive",
      "Integrierte Payment-Lösungen",
      "Optimiert für Mobile Commerce",
      "24/7 Support & automatische Updates",
    ],
    idealFor: "Schneller Einstieg & einfache Verwaltung",
    tone: "ink",
  },
];

function PlatformCard({ platform }: { platform: Platform }) {
  const Icon = platform.icon;
  const isMint = platform.tone === "mint";
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-card border bg-paper",
        isMint ? "border-mint" : "border-ink",
      )}
    >
      {/* Header band */}
      <div className={cn("p-8 md:p-10", isMint ? "bg-mint text-ink" : "bg-ink text-paper")}>
        <Icon className="h-12 w-12" />
        <p className={cn("mt-5 font-body text-lg", isMint ? "text-ink" : "text-paper/90")}>
          {platform.tagline}
        </p>
        <h3
          className={cn(
            "mt-1 font-display text-[1.75rem] font-semibold leading-tight tracking-display md:text-[2rem]",
            isMint ? "text-ink" : "text-paper",
          )}
        >
          {platform.title}
        </h3>
      </div>

      {/* Feature list */}
      <ul className="flex flex-col gap-4 p-8 md:p-10">
        {platform.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3.5">
            <span
              aria-hidden="true"
              className={cn(
                "mt-2.5 h-2 w-2 shrink-0 rounded-full",
                isMint ? "bg-mint" : "bg-ink",
              )}
            />
            <span className="font-body text-lg leading-relaxed text-ink">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Ideal-für pill pinned to the card bottom */}
      <div className="mt-auto px-8 pb-8 md:px-10 md:pb-10">
        <p
          className={cn(
            "rounded-card px-6 py-3.5 font-body text-lg",
            isMint ? "bg-mint text-green-ink" : "bg-ink text-paper",
          )}
        >
          <span className="font-semibold">Ideal für:</span> {platform.idealFor}
        </p>
      </div>
    </article>
  );
}

/** WordPress oder Shopify — side-by-side platform comparison with a
 *  "not sure?" CTA underneath, mirroring the Figma frame. */
export function OsPlattformen() {
  return (
    <section id="plattformen" className="section-shell section-y">
      <h2 className="mx-auto max-w-4xl text-center h-display text-ink">
        WordPress oder Shopify?
        <br />
        Wir finden die beste Lösung für dich!
      </h2>

      <div className="mx-auto mt-14 grid max-w-content grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        {PLATFORMS.map((platform) => (
          <PlatformCard key={platform.title} platform={platform} />
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-6">
        <p className="text-center font-display text-[1.75rem] font-semibold text-ink md:text-[2rem]">
          Nicht sicher welche Plattform passt?
        </p>
        <Button href="#contact">Kostenlos beraten lassen</Button>
      </div>
    </section>
  );
}
