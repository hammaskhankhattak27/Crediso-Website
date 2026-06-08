import { Button } from "@/components/ui/Button";
import { Check } from "@/components/sections/website/WsIcons";

const TAGS = ["Unverbindliche Beratung", "Individuelles Konzept"];

export function WsBereit() {
  return (
    <section className="section-shell section-y">
      <div className="rounded-card bg-teal-deep px-8 py-12 md:px-14 md:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Phone mockup — angled, overflowing the card */}
          <div className="flex justify-center">
            <img
              src="/assets/images/website/bereit-phone-full.png"
              alt="Crediso Website auf einem Smartphone"
              loading="lazy"
              className="w-60 -rotate-[8deg] drop-shadow-2xl md:w-72 lg:-my-12 lg:w-80"
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="h-display-sm text-paper">
              Bereit für eine Website,
              <br />
              die wirklich funktioniert?
            </h2>
            <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-paper/90">
              Lass uns in einem kostenlosen Erstgespräch herausfinden was deine Website braucht. Kein
              Fachchinesisch, kein Druck, einfach ein ehrliches Gespräch über dein Projekt.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {TAGS.map((tag) => (
                <li key={tag} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-mint" />
                  <span className="font-display text-sm font-bold text-paper">{tag}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="#contact" variant="light">
                Jetzt Gespräch vereinbaren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
