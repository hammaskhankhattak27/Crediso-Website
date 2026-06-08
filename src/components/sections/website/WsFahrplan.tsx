import { Button } from "@/components/ui/Button";

interface Step {
  num: string;
  title: [string, string];
  body: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: ["Strategie", "& Konzept"],
    body: "Wir definieren gemeinsam Ziele, Funktionen und Anforderungen und legen die ideale Seitenstruktur fest.",
  },
  {
    num: "02",
    title: ["Content", "Erstellung"],
    body: "Texte, Fotos, Corporate Design. Wir erstellen Inhalte oder optimieren und integrieren dein bestehendes Material.",
  },
  {
    num: "03",
    title: ["Design &", "Entwicklung"],
    body: "Wir gestalten deine Website und setzen sie nach deiner Freigabe technisch um. Dein Feedback fließt in jeden Schritt ein.",
  },
  {
    num: "04",
    title: ["Go", "Live"],
    body: "Wir testen alle Funktionen, optimieren die Performance und stellen sicher, dass deine Website fehlerfrei und DSGVO-konform online geht.",
  },
  {
    num: "05",
    title: ["Crediso", "Care"],
    body: "Mit Crediso Care bleibt deine Website sicher, aktuell und leistungsfähig.",
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <article className="flex flex-col rounded-[26px] border border-ink bg-paper p-8">
      <span className="font-display text-6xl font-bold leading-none text-teal-deep md:text-[78px]">
        {step.num}
      </span>
      <h3 className="mt-5 font-display text-[2rem] font-semibold leading-[1.05] tracking-tight text-ink-soft md:text-[2.5rem]">
        {step.title[0]}
        <br />
        {step.title[1]}
      </h3>
      <p className="mt-5 font-body text-lg leading-relaxed text-ink/80">{step.body}</p>
    </article>
  );
}

export function WsFahrplan() {
  return (
    <section className="section-shell section-y">
      <div className="text-center">
        <h2 className="h-display text-ink">Dein Fahrplan zum Erfolg</h2>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-graphite">
          Wir nehmen dich Schritt für Schritt mit und sorgen für einen klaren, stressfreien Ablauf.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.slice(0, 3).map((step) => (
          <StepCard key={step.num} step={step} />
        ))}
      </div>
      <div className="mx-auto mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-[66%]">
        {STEPS.slice(3).map((step) => (
          <StepCard key={step.num} step={step} />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-5">
        <p className="font-display text-2xl font-semibold text-teal-deep">
          bereit für eine neue Website?
        </p>
        <Button href="#contact">jetzt starten</Button>
      </div>
    </section>
  );
}
