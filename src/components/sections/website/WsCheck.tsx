import { ArrowUpRight } from "@/components/ui/Icons";

export function WsCheck() {
  return (
    <section className="section-shell section-y">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="h-display text-ink">
          Crediso checkt deine
          <br />
          Website. Kostenlos.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink-soft">
          Du hast bereits eine Website, weißt aber nicht ob sie wirklich performt? Wir analysieren
          sie und geben dir konkrete Tipps zu Design, Performance, SEO und Nutzerführung. Schick uns
          einfach den Link, wir melden uns.
        </p>

        {/* 3-Punkt Performance Check badge */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#EADDFF] text-[#1A1C1E]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
              </svg>
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#B0EFDD] text-[#1A1C1E]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m20 20-3.8-3.8" />
              </svg>
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#C0EDD0] text-[#1A1C1E]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 5 4 12l5 7M15 5l5 7-5 7" />
              </svg>
            </span>
          </div>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-ink-soft">
            3-Punkt Performance Check
          </span>
        </div>

        {/* URL input + submit */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 rounded-pill border border-[#EEEEF0] bg-paper p-2 sm:flex-row sm:items-center sm:pl-6"
        >
          <span className="flex flex-1 items-center gap-3 px-4 sm:px-0">
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-mute" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
            </svg>
            <input
              type="url"
              placeholder="https://deine-website.at"
              aria-label="Website URL"
              className="w-full bg-transparent py-2 font-display text-base text-ink placeholder:text-mute focus:outline-none"
            />
          </span>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-6 py-4 font-display text-base font-semibold leading-none text-paper transition-all duration-200 hover:opacity-90"
          >
            Check anfordern
            <ArrowUpRight className="h-[1.1em] w-[1.1em] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>

        <p className="mt-5 font-body text-base font-extrabold text-ink-soft">
          Kostenlos &amp; Unverbindlich. Bearbeitungszeit ca. 24h.
        </p>
      </div>
    </section>
  );
}
