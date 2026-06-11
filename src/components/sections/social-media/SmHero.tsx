import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface SmHeroCta {
  label: string;
  href: string;
}

interface SmHeroStat {
  value: string;
  label: string;
}

interface SmHeroProps {
  /** Headline — pass line breaks with <br />. Sits on the dark image, so it renders white. */
  title: ReactNode;
  /** Optional tagline shown under the headline (e.g. the sub-pages' H2). */
  subtitle?: ReactNode;
  /** Lead paragraph under the headline. */
  lead: string;
  primaryCta: SmHeroCta;
  secondaryCta?: SmHeroCta;
  /** Optional trust stats — rendered as a 3-up cluster at the lower-right of the hero. */
  stats?: SmHeroStat[];
  image: { src: string; alt: string };
}

/**
 * Shared hero for every page in the "Social Media" service category. The whole
 * hero is one rounded image box: a full-bleed photo fills the `rounded-card`,
 * a bottom-weighted gradient keeps the copy legible, and the headline, lead and
 * CTAs sit inside it at the lower-left — editorial "image-as-hero". On desktop
 * the box fills the viewport below the navbar; on mobile it stays a tall,
 * immersive card. One parameterized design keeps the category consistent.
 */
export function SmHero({
  title,
  subtitle,
  lead,
  primaryCta,
  secondaryCta,
  stats,
  image,
}: SmHeroProps) {
  return (
    <section id="hero" className="section-shell pb-12 pt-4 md:pt-6">
      <div className="relative isolate flex min-h-[78svh] flex-col justify-end overflow-hidden rounded-card p-8 md:min-h-[34rem] md:p-12 lg:min-h-[calc(100svh-150px)] lg:p-16">
        {/* Background photo */}
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        {/* Legibility gradient — strongest at the bottom-left where the copy sits */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/10 to-transparent"
        />

        {/* Copy + (optional) stats share the lower band: copy lower-left, stats lower-right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <h1 className="h-display text-paper">{title}</h1>

            {subtitle && (
              <p className="mt-4 font-display text-[1.5rem] font-medium leading-snug tracking-tight text-lavender md:text-[1.875rem]">
                {subtitle}
              </p>
            )}

            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-paper/90">{lead}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={primaryCta.href} variant="light">
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline-light">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>

          {stats && stats.length > 0 && (
            <dl className="flex shrink-0 gap-6 sm:gap-8 lg:justify-end">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-paper/25 pl-4 sm:pl-5">
                  <dt className="font-display text-3xl font-bold leading-none text-paper md:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1.5 max-w-[8rem] font-display text-xs font-medium uppercase leading-tight tracking-wide text-paper/70 md:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
}
