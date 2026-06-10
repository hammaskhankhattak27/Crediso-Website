import { cn } from "@/lib/utils";
import { Lock, Check } from "@/components/sections/website/WsIcons";

const SEO_METRICS = [
  { label: "Organischer Traffic", value: "↑ 148%" },
  { label: "Google Ranking", value: "Top 3" },
  { label: "Ladezeit", value: "< 1.2s" },
];

const AI_TOOLS = ["ChatGPT", "Claude", "Gemini", "Perplexity"];

const numCls = "font-display text-[2.75rem] font-bold uppercase leading-none md:text-[3.5rem]";
const titleCls =
  "mt-3 font-display text-[2rem] font-semibold leading-[1.05] tracking-tight md:text-[3.25rem]";
const bodyCls = "mt-5 max-w-xl font-body text-lg leading-relaxed";

export function WsWert() {
  return (
    <section className="section-shell section-y">
      <h2 className="h-display text-ink">Darauf legen wir besonders Wert</h2>

      <div className="mt-10 flex flex-col gap-6">
        {/* 01 — Datenschutz (mint) */}
        <article className="grid grid-cols-1 items-center gap-8 rounded-card bg-mint p-8 text-ink md:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <span className={cn(numCls, "text-ink")}>01</span>
            <h3 className={cn(titleCls, "text-ink")}>Datenschutz</h3>
            <p className={cn(bodyCls, "text-ink")}>
              Datenschutz ist bei uns kein Zusatz, sondern von Anfang an eingeplant. Cookie-Banner,
              Tracking, Google Analytics, Meta Pixel. Alles rechtlich sauber, damit du auf der
              sicheren Seite bist.
            </p>
          </div>
          <div className="flex justify-center lg:pr-6">
            <span className="flex h-56 w-56 items-center justify-center rounded-full bg-[#025A4D]/50 md:h-64 md:w-64 lg:h-72 lg:w-72">
              <Lock className="h-20 w-20 text-mint md:h-24 md:w-24 lg:h-28 lg:w-28" />
            </span>
          </div>
        </article>

        {/* 02 — SEO & Sichtbarkeit (teal-deep, with darker metrics panel) */}
        <article className="grid grid-cols-1 items-stretch overflow-hidden rounded-card bg-teal-deep text-paper lg:grid-cols-[minmax(0,38%)_1fr]">
          <div className="flex flex-col justify-center gap-3 bg-[#025A4D] p-8 md:p-12">
            {SEO_METRICS.map((m) => (
              <div
                key={m.label}
                className="flex items-center justify-between rounded-xl border border-white/20 bg-[#037361] px-5 py-3.5"
              >
                <span className="font-display text-sm font-light text-paper">{m.label}</span>
                <span className="font-display text-sm font-bold text-mint">{m.value}</span>
              </div>
            ))}
          </div>
          <div className="p-8 md:p-12">
            <span className={cn(numCls, "text-paper")}>02</span>
            <h3 className={cn(titleCls, "text-paper")}>SEO &amp; Sichtbarkeit</h3>
            <p className={cn(bodyCls, "text-paper/90")}>
              Eine gute Website bringt nur dann Ergebnisse, wenn sie auch gefunden wird. Wir
              optimieren deine Website technisch und inhaltlich für Google. Keyword-Strategie,
              strukturierte Inhalte, saubere Meta-Daten und optimierte Überschriften. Damit deine
              Website nachhaltig rankt und organisch Anfragen generiert.
            </p>
          </div>
        </article>

        {/* 03 — Barrierefreiheit (black) */}
        <article className="grid grid-cols-1 items-center gap-8 rounded-card bg-ink p-8 text-paper md:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <span className={cn(numCls, "text-paper")}>03</span>
            <h3 className={cn(titleCls, "text-paper")}>Barrierefreiheit</h3>
            <p className={cn(bodyCls, "max-w-2xl text-paper/90")}>
              Digitale Zugänglichkeit betrifft uns alle. Seit 2025 ist Barrierefreiheit für viele
              Websites verpflichtend, bei Nichteinhaltung drohen Strafen. Wir setzen Websites nach
              den Anforderungen des Barrierefreiheitsgesetzes um. Klare Kontraste, gute Lesbarkeit,
              einfache Navigation.
            </p>
          </div>
          {/* Accessibility widget mockup */}
          <div className="w-full rounded-2xl border-2 border-white/15 p-6 lg:w-80">
            <div className="flex items-start gap-4">
              <div className="flex-1 space-y-3">
                <span className="block h-3 w-2/3 rounded-full bg-white/35" />
                <span className="block h-3 w-full rounded-full bg-white/20" />
                <span className="block h-3 w-1/2 rounded-full bg-white/20" />
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                <Check className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-6 flex gap-3">
              <span className="h-7 w-24 rounded-full bg-teal-deep" />
              <span className="h-7 w-16 rounded-full bg-mint" />
            </div>
          </div>
        </article>

        {/* 04 — Optimiert für KI-Suchen (mint) */}
        <article className="grid grid-cols-1 items-center gap-8 rounded-card bg-mint p-8 text-ink-soft md:p-12 lg:grid-cols-[auto_1fr]">
          <div className="w-full max-w-sm space-y-3 lg:w-80">
            {AI_TOOLS.map((tool, i) => (
              <div
                key={tool}
                className="flex items-center gap-3 rounded-xl bg-white/50 px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-deep font-display text-[11px] font-bold text-paper">
                  {i + 1}
                </span>
                <span className="font-display text-[15px] font-semibold text-green-950">{tool}</span>
                <span className="ml-auto font-display text-xs font-semibold text-teal-deep">
                  Optimiert ✓
                </span>
              </div>
            ))}
          </div>
          <div>
            <span className={cn(numCls, "text-ink-soft")}>04</span>
            <h3 className={cn(titleCls, "text-ink-soft")}>Optimiert für KI-Suchen</h3>
            <p className={cn(bodyCls, "text-ink-soft")}>
              Immer mehr Menschen suchen nicht mehr nur auf Google, sondern fragen direkt bei
              ChatGPT, Claude, Gemini oder Perplexity nach Empfehlungen. Wir bauen deine Website so
              auf, dass sie auch von KI-Systemen verstanden, zitiert und weiterempfohlen wird.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
