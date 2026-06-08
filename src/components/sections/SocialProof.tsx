import { Button } from "@/components/ui/Button";
import { GoogleG, Stars } from "@/components/ui/Icons";

// Ordered to match the Figma grid grid-cols-1 (4 rows × 3 columns):
// H+S, GRAZ, MORAWA / AMS, giga sport, NEUROTH /
// Börni, 3 Goldene Kugeln, JUMP25 / Schloss Vasoldsberg, tierlando, Projekt Wohnen
const LOGO_ROWS = [
  ["client-1", "client-2", "client-3"],
  ["client-4", "client-5", "client-6"],
  ["client-7", "client-8", "client-9"],
  ["client-10", "client-12", "client-11"],
].map((row) => row.map((n) => `/assets/images/clients/${n}.png`));

export function SocialProof() {
  return (
    <section className="section-shell section-y">
      {/* Two columns, vertically centred against each other (Figma alignItems: center) */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-24">
        {/* Left — heading, rating, CTA */}
        <div className="flex flex-col">
          <h2 className="h-display text-ink">
            Unternehmen
            <br />
            die auf uns zählen.
          </h2>

          <div className="mt-7 flex items-center gap-3">
            <GoogleG className="h-11 w-11 shrink-0" />
            <div>
              <Stars />
              <p className="mt-1 font-display text-sm font-semibold text-ink-soft">
                5/5 auf Google bewertet
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-[108px]">
            <Button href="#testimonials" variant="outline" size="md">
              Was Kund:innen über uns sagen?
            </Button>
          </div>
        </div>

        {/* Right — plain colour logos, 4 rows of 3, rows overlap like the Figma */}
        <div className="flex w-full flex-col lg:w-[560px]">
          {LOGO_ROWS.map((row, ri) => (
            <div
              key={ri}
              className={`flex items-center gap-6 sm:gap-10 ${ri > 0 ? "-mt-3 lg:-mt-5" : ""}`}
            >
              {row.map((logo, ci) => (
                <div
                  key={logo}
                  className="flex h-24 flex-1 items-center justify-center md:h-32 lg:h-36"
                >
                  <img
                    src={logo}
                    alt={`Kundenlogo ${ri * 3 + ci + 1}`}
                    className="max-h-full w-auto max-w-[170px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
