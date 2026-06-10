import { type ComponentType, type SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  Shield,
  Pen,
  Search,
  Headset,
  Server,
  Lock,
  CloudBackup,
  Refresh,
  Gauge,
  LifeBuoy,
  Document,
  Blocks,
  Sparkle,
  Megaphone,
  Bulb,
  Chart,
  Report,
  Chat,
} from "./CcIcons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

interface Feature {
  icon: Icon;
  label: string;
}

interface CarePillar {
  icon: Icon;
  title: string;
  features: Feature[];
}

/** Four pillars of unequal weight — rendered as a bento, not four equal grids:
 *  the heavy "Technische Basis" pillar becomes a dark contract-style checklist,
 *  the two mid pillars stack beside it, and Support closes as a CTA band. */
const PILLARS: CarePillar[] = [
  {
    icon: Shield,
    title: "Technische Basis & Sicherheit",
    features: [
      { icon: Server, label: "Google Cloud Hosting" },
      { icon: Lock, label: "SSL-Verschlüsselung" },
      { icon: CloudBackup, label: "Tägliche Backups" },
      { icon: Shield, label: "Sicherheitschecks" },
      { icon: Refresh, label: "CMS- & Plugin-Updates" },
      { icon: Gauge, label: "Maximale Ladezeit" },
      { icon: LifeBuoy, label: "Notfall-Wiederherstellung" },
    ],
  },
  {
    icon: Pen,
    title: "Inhalte & Änderungen",
    features: [
      { icon: Pen, label: "Laufende Anpassungen" },
      { icon: Document, label: "Neue Seiten" },
      { icon: Blocks, label: "Neue Funktionen" },
      { icon: Sparkle, label: "Design-Anpassungen" },
      { icon: Megaphone, label: "Pop-ups & Aktionen" },
    ],
  },
  {
    icon: Search,
    title: "SEO & GEO",
    features: [
      { icon: Search, label: "SEO- & GEO-Überwachung" },
      { icon: Bulb, label: "Monatliche Empfehlungen" },
      { icon: Chart, label: "Tracking" },
      { icon: Report, label: "Monatliche Reports" },
    ],
  },
  {
    icon: Headset,
    title: "Support",
    features: [
      { icon: Headset, label: "Persönlicher Ansprechpartner" },
      { icon: Chat, label: "Unbegrenzte Anfragen" },
    ],
  },
];

const TOTAL_FEATURES = PILLARS.reduce((sum, pillar) => sum + pillar.features.length, 0);

interface PillarHeaderProps {
  pillar: CarePillar;
  index: number;
  dark?: boolean;
  featured?: boolean;
}

/** Index + count meta line, title, and the pillar icon — inverted per surface. */
function PillarHeader({ pillar, index, dark = false, featured = false }: PillarHeaderProps) {
  const PillarIcon = pillar.icon;
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <span
          className={cn(
            "font-display text-sm font-medium uppercase tracking-wide",
            dark ? "text-paper/60" : "text-ink-soft/60",
          )}
        >
          0{index} · {pillar.features.length} Leistungen
        </span>
        <h3
          className={cn(
            "mt-3 font-display font-semibold leading-tight tracking-display",
            featured ? "text-[clamp(1.75rem,3vw,2.75rem)]" : "text-2xl",
            dark ? "text-paper" : "text-ink",
          )}
        >
          {pillar.title}
        </h3>
      </div>
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-pill",
          dark ? "bg-mint text-teal-deep" : "bg-teal-deep text-paper",
        )}
      >
        <PillarIcon className="h-6 w-6" />
      </span>
    </div>
  );
}

function FeatureItem({ feature, dark = false }: { feature: Feature; dark?: boolean }) {
  const FeatureIcon = feature.icon;
  return (
    <li className={cn("flex items-center gap-3.5", dark && "py-4")}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-pill",
          dark ? "h-10 w-10 bg-paper/10 text-mint" : "h-9 w-9 bg-paper text-teal-deep",
        )}
      >
        <FeatureIcon className="h-5 w-5" />
      </span>
      <span
        className={cn(
          "font-display font-medium leading-tight",
          dark ? "text-lg text-paper" : "text-base text-ink-soft",
        )}
      >
        {feature.label}
      </span>
    </li>
  );
}

export function CcLeistungen() {
  return (
    <section id="enthalten" className="section-shell section-y">
      {/* Heading + the large-stat counter (computed from the pillar data) */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
        <div className="max-w-3xl">
          <h2 className="h-display text-ink">Was in Crediso Care enthalten ist</h2>
        </div>
        <p className="flex items-end gap-3">
          <span className="font-display text-[clamp(4rem,8vw,6.5rem)] font-bold leading-none tracking-display text-teal-deep">
            {TOTAL_FEATURES}
          </span>
          <span className="pb-1.5 font-body text-base leading-snug text-ink-soft">
            Leistungen,
            <br />
            ein monatlicher Fixpreis.
          </span>
        </p>
      </div>

      {/* Bento: featured dark checklist + two stacked supporting cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <article className="flex flex-col rounded-card bg-teal-deep p-8 md:p-10">
          <PillarHeader pillar={PILLARS[0]} index={1} dark featured />
          <ul className="mt-8 flex-1 divide-y divide-paper/15 border-t border-paper/15">
            {PILLARS[0].features.map((feature) => (
              <FeatureItem key={feature.label} feature={feature} dark />
            ))}
          </ul>
        </article>

        <div className="flex flex-col gap-6">
          <article className="rounded-card bg-mint p-8">
            <PillarHeader pillar={PILLARS[1]} index={2} />
            <ul className="mt-6 flex flex-col gap-3.5">
              {PILLARS[1].features.map((feature) => (
                <FeatureItem key={feature.label} feature={feature} />
              ))}
            </ul>
          </article>

          <article className="flex-1 rounded-card bg-smoke p-8">
            <PillarHeader pillar={PILLARS[2]} index={3} />
            <ul className="mt-6 flex flex-col gap-3.5">
              {PILLARS[2].features.map((feature) => (
                <FeatureItem key={feature.label} feature={feature} />
              ))}
            </ul>
          </article>
        </div>
      </div>

      {/* Support closes the bento as a full-width band and carries the CTA */}
      <article className="mt-6 rounded-card bg-sage p-8 md:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
          <div>
            <PillarHeader pillar={PILLARS[3]} index={4} />
            <ul className="mt-6 flex flex-wrap gap-3">
              {PILLARS[3].features.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <li
                    key={feature.label}
                    className="inline-flex items-center gap-3 rounded-pill bg-paper px-5 py-3"
                  >
                    <FeatureIcon className="h-5 w-5 shrink-0 text-teal-deep" />
                    <span className="font-display text-base font-semibold text-ink">
                      {feature.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Button href="#contact">Jetzt Erstgespräch vereinbaren</Button>
            <p className="font-body text-base text-ink-soft">
              Der genaue Umfang richtet sich nach deinem gewählten Paket.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
