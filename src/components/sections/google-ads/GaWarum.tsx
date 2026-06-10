import { Button } from "@/components/ui/Button";

export function GaWarum() {
  return (
    <section className="section-shell section-y">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <h2 className="h-display-sm text-ink">
            Warum du
            <br />
            Google Ads Profis
            <br />
            vertrauen solltest
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ink">
            Beim Einrichten der Google Ads Kampagne gibt es viel zu beachten. Eine effektive Kampagne
            benötigt eine durchdachte Strategie und sollte unbedingt von Profis aufgesetzt werden.
            Ansonsten kann es schnell dazu führen, dass du dein Werbebudget aus dem Fenster wirfst
            und keine Erfolge feststellst. Das Akzeptieren sämtlicher Empfehlungen von Google ist
            leider keine durchdachte Strategie und führt in den meisten Fällen zu Verlusten.
            <br />
            <br />
            Das Gute? Darüber musst du dir ab sofort keine Gedanken mehr machen. Melde dich jetzt
            unverbindlich und lass uns deine Werbeziele besprechen.
          </p>
          <div className="mt-9">
            <Button href="#contact">jetzt unverbindlich anfragen</Button>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 gap-5">
          <div className="overflow-hidden rounded-card">
            <img
              src="/assets/images/google-ads/warum-1.png"
              alt="Crediso Team im Büro"
              loading="lazy"
              className="h-[260px] w-full object-cover md:h-[320px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="overflow-hidden rounded-card">
              <img
                src="/assets/images/google-ads/warum-2.png"
                alt="Strategie-Meeting bei Crediso"
                loading="lazy"
                className="h-[240px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-card">
              <img
                src="/assets/images/google-ads/warum-3.png"
                alt="Crediso Mitarbeiterin am Laptop"
                loading="lazy"
                className="h-[240px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
