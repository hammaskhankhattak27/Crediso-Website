import type { ReactNode, SVGProps } from "react";
import { Button } from "@/components/ui/Button";

interface WebHeroStat {
  value: string;
  label: string;
}

interface WebHeroCta {
  label: string;
  href: string;
}

interface WebHeroProps {
  /** Headline — pass line breaks with <br />. Stays pure black per the design system. */
  title: ReactNode;
  /** Optional tagline shown large under the headline (visual subhead). */
  subtitle?: ReactNode;
  /** Lead paragraph under the headline. */
  lead: string;
  primaryCta: WebHeroCta;
  secondaryCta?: WebHeroCta;
  /** Up to three figure/label pairs shown under the CTAs. */
  stats?: WebHeroStat[];
  /** Checkmark trust badges — rendered instead of stats when provided. */
  badges?: string[];
  image: { src: string; alt: string };
}

function CheckMini(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

/**
 * Shared hero for every page in the "Web" service category (Website / Webshop /
 * Crediso Care / SEO / …). One parameterized design keeps the category visually
 * consistent — only the content differs per sub-page. Mirrors the established
 * hero language (copy left, image right with rotating seal + accent square).
 */
export function WebHero({
  title,
  subtitle,
  lead,
  primaryCta,
  secondaryCta,
  stats,
  badges,
  image,
}: WebHeroProps) {
  return (
    <section id="hero" className="section-shell pb-16 pt-12 md:pt-16 lg:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-12">
        {/* Left — copy */}
        <div>
          <h1 className="h-display text-ink">{title}</h1>

          {subtitle && (
            <p className="mt-5 font-display text-[1.5rem] font-medium leading-snug tracking-tight text-teal-deep md:text-[1.875rem]">
              {subtitle}
            </p>
          )}

          <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-graphite">{lead}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </Button>
            )}
          </div>

          {badges && badges.length > 0 ? (
            <ul className="mt-10 flex flex-col gap-3">
              {badges.map((badge) => (
                <li key={badge} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-teal-deep">
                    <CheckMini className="h-4 w-4" />
                  </span>
                  <span className="font-display text-base font-medium text-ink-soft">{badge}</span>
                </li>
              ))}
            </ul>
          ) : (
            stats &&
            stats.length > 0 && (
              <div className="mt-12 flex flex-wrap items-stretch gap-x-5 gap-y-6">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-stretch gap-x-5">
                    {i > 0 && (
                      <span aria-hidden="true" className="w-px self-stretch bg-ink-soft/20" />
                    )}
                    <div>
                      <span className="block whitespace-nowrap font-display text-[2rem] font-bold leading-none text-teal-deep md:text-[2.25rem]">
                        {stat.value}
                      </span>
                      <span className="mt-2 block max-w-[135px] font-display text-[13px] font-semibold leading-tight text-ink-soft md:text-sm">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* Right — image with rotating seal + accent square */}
        <div className="relative mx-auto w-full max-w-[640px]">
          <div className="overflow-hidden rounded-card">
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[639/582] w-full object-cover object-center"
            />
          </div>
          {/* translucent accent square peeking over the top-right corner */}
          <span
            aria-hidden="true"
            className="absolute right-5 -top-2 h-9 w-9 rounded-[7px] bg-teal-deep/20"
          />
          {/* rotating seal overlapping the top-left corner */}
          <img
            src="/assets/images/hero-circle.png"
            alt=""
            aria-hidden="true"
            className="absolute -left-3 -top-5 h-24 w-24 animate-[spin_22s_linear_infinite] md:-left-5 md:-top-7 md:h-32 md:w-32 lg:-left-8 lg:-top-9 lg:h-40 lg:w-40"
          />
        </div>
      </div>
    </section>
  );
}
