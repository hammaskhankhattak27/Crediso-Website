import { useState } from "react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Hello", href: "#hero" },
  { label: "Service", href: "#services" },
  { label: "Culture", href: "#culture" },
  { label: "Know How", href: "#blog" },
  { label: "Kontakt", href: "#contact" },
  { label: "Jobs", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-paper/85 backdrop-blur-md">
      <nav className="section-shell flex items-center justify-between py-4">
        <a href="#hero" className="shrink-0" aria-label="Crediso — Startseite">
          <img src="/assets/icons/logo.png" alt="Crediso" className="h-7 w-auto md:h-8" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-display text-lg font-medium text-ink-soft transition-colors hover:text-teal-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" size="md">
            jetzt starten
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-ink-soft transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-ink-soft transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-ink-soft transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-paper lg:hidden">
          <ul className="section-shell flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-2 py-3 font-display text-xl font-medium text-ink-soft hover:bg-mint/40"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#contact" size="md" className="w-full" onClick={() => setOpen(false)}>
                jetzt starten
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
