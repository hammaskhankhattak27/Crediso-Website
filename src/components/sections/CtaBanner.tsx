import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="section-shell py-20 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="rounded-pill bg-mint px-5 py-2 font-display text-sm font-medium text-ink-090 md:text-lg">
          CREDISO, DIE DIGITALAGENTUR AUS GRAZ
        </span>
        <h2 className="mt-6 font-display text-[clamp(1.9rem,4.5vw,3.25rem)] font-bold leading-[1.12] tracking-display text-ink">
          Wir sorgen für deinen professionellen Onlineauftritt und machen deine User:innen zu
          Kund:innen.
        </h2>
        <div className="mt-8">
          <Button href="#contact">Jetzt digital durchstarten</Button>
        </div>
      </div>
    </section>
  );
}
