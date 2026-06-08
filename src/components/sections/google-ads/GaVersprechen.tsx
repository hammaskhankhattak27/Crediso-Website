import { Clock } from "@/components/sections/google-ads/GaIcons";

const EXPERT_STATS = [
  { value: "~10 Jahre", label: "Erfahrung" },
  { value: "150+", label: "Kunden betreut" },
  { value: "Mio. €", label: "Budget verwaltet" },
];

export function GaVersprechen() {
  return (
    <section id="leistungen" className="section-shell section-y">
      <h2 className="h-display text-ink">Unser Versprechen</h2>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,459px)_minmax(0,1fr)]">
        {/* Tall expertise card */}
        <article className="flex flex-col rounded-card bg-mint p-8 text-ink-soft">
          <span className="font-display text-lg font-medium uppercase tracking-wide text-ink-soft">
            Expertise
          </span>
          <h3 className="mt-4 font-display text-[2rem] md:text-[44px] font-semibold leading-[0.95] tracking-display text-ink-soft">
            Echte Expert:innen
          </h3>
          <p className="mt-5 font-body text-lg leading-[29px] text-graphite">
            Für Tina &amp; Robert ist das Verwalten von Google Ads pure Leidenschaft. Knapp 10 Jahre
            Erfahrung und das Verwalten von Budgets in Millionenhöhe sprechen für sich. Wie
            erfolgreich deine Kampagne läuft, bekommst du jeden Monat als detaillierten Report mit
            persönlicher Einschätzung deines Ansprechpartners.
          </p>

          {/* Expert avatars — Tina & Robert */}
          <img
            src="/assets/images/google-ads/experts-pair.png"
            alt="Tina und Robert, Google Ads Expert:innen bei Crediso"
            loading="lazy"
            width={568}
            height={340}
            className="mt-8 h-[99px] w-auto self-start"
          />

          {/* Stat rows — value left, label right; hairline under all but the last */}
          <dl className="mt-auto pt-10">
            {EXPERT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-baseline justify-between py-3 ${
                  i < EXPERT_STATS.length - 1 ? "border-b border-green-ink/10" : ""
                }`}
              >
                <dt className="font-display text-2xl font-semibold text-green-ink">{stat.value}</dt>
                <dd className="font-display text-[13.5px] font-medium text-green-ink">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* Persönliche Betreuung */}
          <article className="rounded-card bg-mint p-8 text-ink-soft">
            <span className="font-display text-lg font-medium uppercase tracking-wide text-ink-soft">
              Betreuung
            </span>
            <h3 className="mt-4 font-display text-[2rem] md:text-[44px] font-semibold leading-[0.95] tracking-display text-ink-soft">
              Persönliche Betreuung
            </h3>
            <p className="mt-5 max-w-xl font-body text-lg leading-[29px] text-graphite">
              Du möchtest deine Kampagne besprechen? Wir sind jederzeit für dich da – digital &amp;
              persönlich im Großraum Graz.
            </p>
            <span className="mt-6 inline-flex items-center gap-3 rounded-pill border border-white/40 bg-white/40 px-5 py-2.5 font-display text-[17px] font-bold text-teal-deep backdrop-blur-md">
              <Clock className="h-5 w-5" />
              Ø Antwortzeit: &lt; 24h
            </span>
          </article>

          {/* Two small cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <article className="rounded-card bg-lavender p-8 text-ink-soft">
              <span className="font-display text-lg font-medium uppercase tracking-wide text-ink-soft">
                Social Media
              </span>
              <h3 className="mt-4 font-display text-[2rem] md:text-[44px] font-semibold leading-[1.08] tracking-display text-ink-soft">
                Fixpreis &amp;
                <br />
                kurze Laufzeit
              </h3>
              <p className="mt-6 font-body text-lg leading-[27px] text-graphite">
                Du hast alle Kosten stets im Überblick – keine bösen Überraschungen. Du denkst,
                Google Ads ist doch nicht das Richtige für dich? Kein Problem, wir können jederzeit
                stoppen. Wir empfehlen mindestens 3 Monate.
              </p>
            </article>

            <article className="rounded-card bg-teal-deep p-8 text-paper">
              <span className="font-display text-lg font-medium uppercase tracking-wide text-paper">
                Social Media
              </span>
              <h3 className="mt-4 font-display text-[2rem] md:text-[44px] font-semibold leading-[1.08] tracking-display text-paper">
                Laufende
                <br />
                Optimierung
              </h3>
              <p className="mt-6 font-body text-lg leading-[27px] text-paper">
                Mit dem einmaligen Aufsetzen der Kampagne ist es nicht getan. Unsere Experten
                arbeiten laufend daran, mehr aus deiner Kampagne herauszuholen. Deine Marketingziele
                verändern sich? Wir passen deine Kampagne umgehend an.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
