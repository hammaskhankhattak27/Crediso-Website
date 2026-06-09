import { useState, type ComponentType, type SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Shield, Pen, Search, Headset, Check } from "./CcIcons";

interface CareCategory {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  intro: string;
  items: string[];
}

const CATEGORIES: CareCategory[] = [
  {
    icon: Shield,
    title: "Technische Basis & Sicherheit",
    intro:
      "Das Fundament: schnell, stabil und rundum abgesichert – damit deine Website jederzeit erreichbar bleibt.",
    items: [
      "Leistungsstarkes Google Cloud Hosting",
      "SSL-Verschlüsselung",
      "Tägliche Backups",
      "Regelmäßige Sicherheitschecks",
      "Updates für CMS und Plugins",
      "Maximale Ladegeschwindigkeit",
      "Kostenlose Wiederherstellung im Notfall",
    ],
  },
  {
    icon: Pen,
    title: "Inhalte & Änderungen",
    intro: "Sag uns Bescheid, wir setzen es um – neue Inhalte, Funktionen und Aktionen, alles im Fixpreis.",
    items: [
      "Laufende Website-Anpassungen im monatlichen Kontingent",
      "Neue Seiten erstellen und befüllen",
      "Neue Funktionen einbinden",
      "Design-Anpassungen",
      "Pop-ups und Aktionen",
    ],
  },
  {
    icon: Search,
    title: "SEO & GEO",
    intro:
      "Damit dich Menschen und KI-Systeme finden: laufende Optimierung mit klaren, monatlichen Empfehlungen.",
    items: [
      "Laufende SEO- und GEO-Überwachung",
      "Monatliche Empfehlungen zur Verbesserung",
      "Tracking (Matomo oder Google Analytics)",
      "Monatliche Reports",
    ],
  },
  {
    icon: Headset,
    title: "Support",
    intro:
      "Ein Ansprechpartner, der dein Unternehmen kennt – erreichbar, wann immer du ihn brauchst, ohne Limit.",
    items: [
      "Persönlicher Ansprechpartner, der dein Unternehmen kennt",
      "Unbegrenzte Anfragen per Mail, Telefon oder WhatsApp",
    ],
  },
];

export function CcLeistungen() {
  const [active, setActive] = useState(0);
  const category = CATEGORIES[active];
  const ActiveIcon = category.icon;
  const num = String(active + 1).padStart(2, "0");

  return (
    <section id="enthalten" className="section-shell section-y">
      <div className="max-w-3xl">
        <span className="font-display text-base font-medium uppercase tracking-wide text-ink-soft">
          Was alles enthalten ist
        </span>
        <h2 className="mt-4 h-display text-ink">Was in Crediso Care enthalten ist</h2>
        <p className="mt-6 font-body text-lg leading-relaxed text-graphite">
          Ein Fixpreis, ein Paket – und darin steckt alles, was deine Website braucht. Wähl einen
          Bereich und sieh, was wir konkret für dich übernehmen.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-8">
        {/* Selector + reassurance — scroller on mobile, vertical list on desktop */}
        <div className="flex flex-col gap-4">
          <div
            role="tablist"
            aria-label="Was in Crediso Care enthalten ist"
            className="no-scrollbar -mx-[var(--page-px)] flex gap-3 overflow-x-auto px-[var(--page-px)] pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {CATEGORIES.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === i;
              return (
                <button
                  key={item.title}
                  id={`enthalten-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="enthalten-panel"
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex shrink-0 items-center gap-3 rounded-card px-5 py-4 text-left transition-colors duration-200 lg:w-full",
                    isActive
                      ? "bg-teal-deep text-paper"
                      : "border border-ink text-ink-soft hover:bg-mint/40",
                  )}
                >
                  <Icon className="h-6 w-6 shrink-0" />
                  <span className="whitespace-nowrap font-display text-base font-semibold lg:whitespace-normal lg:text-lg">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Reassurance — grows to fill the column so it matches the panel height */}
          <div className="hidden rounded-card border border-ink bg-mint p-6 lg:flex lg:flex-1 lg:items-center">
            <p className="font-body text-base leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">Gut zu wissen:</span> All das steckt in
              Crediso Care – der genaue Umfang richtet sich nach deinem gewählten Paket.
            </p>
          </div>
        </div>

        {/* Spotlight panel for the active category */}
        <div
          id="enthalten-panel"
          role="tabpanel"
          aria-labelledby={`enthalten-tab-${active}`}
          className="relative overflow-hidden rounded-card bg-mint p-8 md:p-12"
        >
          {/* Oversized watermark number */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-[9rem] font-bold leading-none text-teal-deep/10 md:text-[12rem]"
          >
            {num}
          </span>

          <div className="relative z-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-pill bg-paper text-teal-deep">
              <ActiveIcon className="h-7 w-7" />
            </span>

            <h3 className="mt-6 max-w-xl font-display text-[2rem] font-semibold leading-tight tracking-tight text-ink md:text-[2.5rem]">
              {category.title}
            </h3>
            <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
              {category.intro}
            </p>

            <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" />
                  <span className="font-body text-base leading-snug text-graphite">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="#contact" variant="outline" size="md">
                Jetzt Erstgespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
