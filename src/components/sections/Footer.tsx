import { Button } from "@/components/ui/Button";
import {
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/ui/Icons";

const SOCIALS = [
  { label: "TikTok", Icon: TikTokIcon, href: "#" },
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "Linkedin", Icon: LinkedinIcon, href: "#" },
  { label: "YouTube", Icon: YoutubeIcon, href: "#" },
];

const LEGAL = ["Impressum", "Datenschutz", "AGB"];

export function Footer() {
  return (
    <footer className="relative bg-ink-soft text-paper">
      {/* Rotating badge straddling the top-right edge (Figma: y = -129) */}
      <img
        src="/assets/images/hero-circle.png"
        alt=""
        aria-hidden="true"
        className="absolute right-6 -top-20 z-20 h-40 w-40 animate-[spin_24s_linear_infinite] sm:right-12 md:h-52 md:w-52 md:-top-28 lg:right-[9%] lg:-top-32 lg:h-64 lg:w-64"
      />

      <div className="section-shell pb-8 pt-24 md:pt-28">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
          {/* Left — headline, subtext, contact row */}
          <div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,3.9rem)] leading-[1.02] tracking-tight text-paper lg:whitespace-nowrap">
              <span className="font-bold">DON’T BE </span>
              <span className="font-light">SHY, </span>
              <span className="font-bold">SAY HI</span>
            </h2>

            <p className="mt-7 max-w-md font-body text-lg leading-relaxed text-paper/80">
              Nimm Kontakt auf und lass uns über dein Projekt quatschen. Ruf uns an oder nutze das
              Kontaktformular.
            </p>

            <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-9">
              <Button href="#contact" variant="light">Zum Kontaktformular</Button>
              <a
                href="mailto:hallo@crediso.io"
                className="font-display text-xl font-semibold text-paper hover:text-mint"
              >
                hallo@crediso.io
              </a>
              <a
                href="tel:+436648898239"
                className="font-display text-xl font-semibold text-paper hover:text-mint"
              >
                +43 664 889 823 95
              </a>
            </div>
          </div>

          {/* Socials — stacked, top-aligned with the subtext */}
          <div className="flex flex-col gap-4 lg:mt-[88px] lg:items-end">
            {SOCIALS.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex w-[150px] items-center gap-2.5 rounded-pill border-2 border-paper/25 px-3 py-1.5 transition-colors hover:border-paper/40 hover:bg-white/10"
              >
                <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-mint text-ink-soft">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="font-display text-[15px] font-semibold text-paper">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-20 border-t-2 border-paper/20 pt-6 lg:mt-28">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-body text-sm font-extrabold text-paper/70">
              © 2025 - Crediso Media GmbH | Alle Rechte vorbehalten
            </p>
            <ul className="flex gap-8">
              {LEGAL.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-base font-extrabold text-paper hover:text-mint"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
