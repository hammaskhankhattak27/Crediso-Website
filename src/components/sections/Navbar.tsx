import { useState } from "react";
import type { SVGProps } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SITE_NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Chevron used on the dropdown triggers. */
function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

const leistungen = SITE_NAV[0];
const topLevel = SITE_NAV.slice(1); // everything except "Leistungen"

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-paper/85 backdrop-blur-md">
      <nav className="section-shell flex items-center justify-between py-4">
        <Link to="/" className="shrink-0" aria-label="Crediso — Startseite" onClick={close}>
          <img src="/assets/icons/logo.png" alt="Crediso" className="h-7 w-auto md:h-8" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-5 xl:flex">
          {/* Leistungen mega-menu — full-width panel anchored to the header (hover / focus) */}
          <li className="group">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1 py-2 font-display text-base font-medium text-ink-soft transition-colors hover:text-teal-deep"
            >
              {leistungen.label}
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Panel spans the full header width; the ::before strip bridges the
                gap between trigger and panel so hover doesn't drop. */}
            <div className="invisible absolute inset-x-0 top-full z-40 -translate-y-2 border-t border-black/5 bg-paper/95 opacity-0 backdrop-blur-md transition-all duration-200 ease-out before:absolute before:inset-x-0 before:-top-5 before:h-5 before:content-[''] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="section-shell grid grid-cols-2 gap-x-10 gap-y-10 py-10 md:grid-cols-4">
                {leistungen.children?.map((group) => (
                  <div key={group.label} className="flex flex-col">
                    {group.path ? (
                      <NavLink
                        to={group.path}
                        className="group/cat inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-teal-deep"
                      >
                        {group.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/cat:opacity-100" />
                      </NavLink>
                    ) : (
                      <span className="font-display text-sm font-semibold uppercase tracking-wide text-mute">
                        {group.label}
                      </span>
                    )}
                    <span className="mt-3 h-px w-8 bg-ink/15" aria-hidden="true" />
                    {group.children && (
                      <ul className="mt-4 flex flex-col gap-2.5">
                        {group.children.map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path!}
                              className="font-body text-[15px] leading-snug text-graphite transition-colors hover:text-teal-deep"
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </li>

          {topLevel.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path!}
                className={({ isActive }) =>
                  cn(
                    "font-display text-base font-medium transition-colors hover:text-teal-deep",
                    isActive ? "text-teal-deep" : "text-ink-soft",
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <Button href="/kontakt" size="md">
            jetzt starten
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span
            className={cn("h-0.5 w-6 bg-ink-soft transition-transform", open && "translate-y-2 rotate-45")}
          />
          <span className={cn("h-0.5 w-6 bg-ink-soft transition-opacity", open && "opacity-0")} />
          <span
            className={cn("h-0.5 w-6 bg-ink-soft transition-transform", open && "-translate-y-2 -rotate-45")}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-black/5 bg-paper xl:hidden">
          <ul className="section-shell flex flex-col gap-1 py-4">
            {/* Leistungen accordion */}
            <li>
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl px-2 py-3 font-display text-xl font-medium text-ink-soft hover:bg-mint/40"
              >
                {leistungen.label}
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform", servicesOpen && "rotate-180")}
                />
              </button>
              {servicesOpen && (
                <div className="flex flex-col gap-3 pb-2 pl-3">
                  {leistungen.children?.map((group) => (
                    <div key={group.label}>
                      {group.path ? (
                        <NavLink
                          to={group.path}
                          onClick={close}
                          className="block py-1.5 font-display text-base font-semibold text-ink"
                        >
                          {group.label}
                        </NavLink>
                      ) : (
                        <span className="block py-1.5 font-display text-base font-semibold text-ink-soft">
                          {group.label}
                        </span>
                      )}
                      {group.children?.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path!}
                          onClick={close}
                          className="block py-1.5 pl-3 font-body text-base text-graphite"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {topLevel.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path!}
                  onClick={close}
                  className="block rounded-xl px-2 py-3 font-display text-xl font-medium text-ink-soft hover:bg-mint/40"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="pt-2">
              <Button href="/kontakt" size="md" className="w-full" onClick={close}>
                jetzt starten
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
