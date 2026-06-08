import { Button } from "@/components/ui/Button";
import { GoogleG } from "@/components/ui/Icons";

export function GaPartner() {
  return (
    <section className="section-shell section-y">
      <div className="overflow-hidden rounded-card bg-teal-deep px-8 py-12 md:px-14 md:py-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,666px)_minmax(0,1fr)]">
          {/* Copy */}
          <div>
            <h2 className="h-display text-paper">Google Ads Partner</h2>
            <p className="mt-4 max-w-2xl font-body text-lg leading-[1.9] text-paper/80">
              Als Google Partner werden wir dafür anerkannt, dass wir den Kampagnenerfolg unserer
              Kund:innen steigern, die Wachstumschancen bei den Kampagnen unserer Kund:innen erkennen
              und wir unsere Google Ads-Kenntnisse sowie unser Fachwissen mit Zertifizierungen unter
              Beweis stellen.
            </p>
            <div className="mt-9">
              <Button href="#contact" variant="light">
                jetzt Analyse anfragen
              </Button>
            </div>
          </div>

          {/* Badge — concentric rings around a white logo disc */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex aspect-square w-[280px] items-center justify-center rounded-full border-[6px] border-white/20 md:w-[340px] lg:w-[400px]">
              <div className="flex aspect-square w-[72%] flex-col items-center justify-center rounded-full border-[3px] border-white/30 bg-white">
                <GoogleG className="h-12 w-12 md:h-14 md:w-14" />
                <span className="mt-3 font-body text-lg font-medium text-slate md:text-xl">
                  Google Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
