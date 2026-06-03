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
    <footer className="relative bg-mint">
      {/* Rotating badge straddling the top-right edge (Figma: y = -129) */}
      <img
        src="/assets/images/hero-circle.png"
        alt=""
        aria-hidden="true"
        className="absolute right-6 -top-24 z-20 h-44 w-44 animate-[spin_24s_linear_infinite] md:right-16 md:-top-32 md:h-56 md:w-56 lg:right-28"
      />

      <div className="section-shell py-16 md:py-20">
        {/* Headline */}
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.9rem)] leading-[1.02] tracking-tight text-ink-soft">
          <span className="font-bold">DON'T BE </span>
          <span className="font-light">SHY, </span>
          <span className="font-bold">SAY HI</span>
        </h2>

        <p className="mt-5 max-w-md font-body text-lg text-ink-soft">
          Nimm Kontakt auf und lass uns über dein Projekt quatschen. Ruf uns an oder nutze das
          Kontaktformular.
        </p>

        {/* Contact row + socials, divided by a bottom border */}
        <div className="mt-12 flex flex-col gap-10 border-b-2 border-ink-soft pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-9">
            <Button href="#contact">Zum Kontaktformular</Button>
            <a
              href="mailto:hallo@crediso.io"
              className="font-display text-xl font-semibold text-ink-soft hover:text-teal-deep"
            >
              hallo@crediso.io
            </a>
            <a
              href="tel:+436648898239"
              className="font-display text-xl font-semibold text-ink-soft hover:text-teal-deep"
            >
              +43 664 889 823 95
            </a>
          </div>

          {/* Social buttons stacked vertically */}
          <div className="flex flex-col gap-3 lg:items-end">
            {SOCIALS.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex w-[150px] items-center gap-3 rounded-pill border-2 border-ink-soft px-4 py-1.5 font-display text-base font-semibold text-ink-soft transition-colors hover:bg-ink-soft hover:text-mint"
              >
                <Icon className="h-[18px] w-[18px] shrink-0" />
                <span className="flex-1 text-right">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm font-extrabold text-ink-soft">
            © 2025 - Crediso Media GmbH | Alle Rechte vorbehalten
          </p>
          <ul className="flex gap-7">
            {LEGAL.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-body text-base font-extrabold text-graphite hover:text-ink-soft"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
