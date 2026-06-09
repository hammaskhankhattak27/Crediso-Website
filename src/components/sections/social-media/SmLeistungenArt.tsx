import type { SVGProps } from "react";

/**
 * Abstract, human-free illustrations for the Leistungsübersicht cards. Each is a
 * flat-geometric SVG drawn only from the design tokens (via fill-/stroke-
 * utilities) so it stays on-system. They sit on a white "screen" panel inside
 * each service card. viewBox is 200×150; pass a sizing className.
 */

/** Betreuung — a managed social feed: device, post grid, engagement badges. */
export function ArtBetreuung(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true" {...props}>
      {/* comment bubble, floating lower-left */}
      <g>
        <rect x="30" y="92" width="40" height="30" rx="10" className="fill-lavender" />
        <path d="M44 120l-2 9 10-7z" className="fill-lavender" />
        <circle cx="44" cy="107" r="2.5" className="fill-ink" />
        <circle cx="52" cy="107" r="2.5" className="fill-ink" />
        <circle cx="60" cy="107" r="2.5" className="fill-ink" />
      </g>
      {/* device / feed */}
      <rect x="66" y="14" width="70" height="122" rx="16" className="stroke-ink" strokeWidth="3" />
      <circle cx="101" cy="24" r="2" className="fill-ink" />
      {/* post grid */}
      <rect x="77" y="34" width="22" height="22" rx="5" className="fill-ink" />
      <path d="M85 40l8 5-8 5z" className="fill-paper" />
      <rect x="103" y="34" width="22" height="22" rx="5" className="fill-lavender" />
      <rect x="77" y="60" width="22" height="22" rx="5" className="fill-lavender" />
      <rect x="103" y="60" width="22" height="22" rx="5" className="fill-ink" />
      {/* caption lines */}
      <rect x="77" y="92" width="48" height="6" rx="3" className="fill-lavender" />
      <rect x="77" y="104" width="32" height="6" rx="3" className="fill-lavender" />
      {/* heart badge, floating upper-right */}
      <circle cx="138" cy="30" r="16" className="fill-lavender" />
      <path
        d="M138 38c-6-4-10-7-10-11a5 5 0 0 1 10-2 5 5 0 0 1 10 2c0 4-4 7-10 11z"
        className="fill-ink"
      />
    </svg>
  );
}

/** Mentoring — a 1:1 growth path: rising bars, a dotted route, a star goal. */
export function ArtMentoring(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true" {...props}>
      {/* rising bars */}
      <rect x="34" y="92" width="20" height="36" rx="5" className="fill-lavender" />
      <rect x="60" y="74" width="20" height="54" rx="5" className="fill-lavender" />
      <rect x="86" y="52" width="20" height="76" rx="5" className="fill-lavender" />
      {/* dotted ascending route */}
      <path
        d="M40 118C70 112 92 96 112 74s28-30 44-44"
        className="stroke-ink"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 9"
      />
      {/* milestone dots */}
      <circle cx="74" cy="100" r="6" className="fill-lavender stroke-ink" strokeWidth="2.5" />
      <circle cx="112" cy="74" r="6" className="fill-lavender stroke-ink" strokeWidth="2.5" />
      {/* star goal */}
      <path
        d="M156 18l5.3 10.7 11.8 1.7-8.5 8.3 2 11.8L156 45l-10.6 5.6 2-11.8-8.5-8.3 11.8-1.7z"
        className="fill-lavender stroke-ink"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Workshops — an idea taking shape: a lightbulb, sparks and stacked modules. */
export function ArtWorkshops(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true" {...props}>
      {/* sparks */}
      <path d="M100 8v12M70 20l7 9M130 20l-7 9M52 54h12M136 54h12" className="stroke-ink" strokeWidth="3" strokeLinecap="round" />
      {/* bulb */}
      <circle cx="100" cy="60" r="30" className="fill-lavender stroke-ink" strokeWidth="3" />
      {/* filament */}
      <path d="M92 58l5 7 6-10 5 7" className="stroke-ink" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* base */}
      <rect x="88" y="90" width="24" height="7" rx="2" className="fill-ink" />
      <rect x="90" y="99" width="20" height="7" rx="2" className="fill-ink" />
      {/* stacked modules */}
      <rect x="64" y="116" width="72" height="12" rx="4" className="fill-lavender" />
      <rect x="76" y="130" width="48" height="10" rx="4" className="fill-ink" />
    </svg>
  );
}

/** Content Produktion — production gear: a lens, film strip and a spark. */
export function ArtContent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 150" fill="none" aria-hidden="true" {...props}>
      {/* film strip */}
      <rect x="34" y="104" width="132" height="26" rx="5" className="fill-ink" />
      {[44, 64, 84, 104, 124, 144].map((x) => (
        <rect key={x} x={x} y="110" width="10" height="14" rx="2" className="fill-paper" />
      ))}
      {/* lens */}
      <circle cx="100" cy="58" r="36" className="fill-paper stroke-ink" strokeWidth="3" />
      <circle cx="100" cy="58" r="26" className="fill-ink" />
      <circle cx="100" cy="58" r="13" className="fill-lavender" />
      <circle cx="92" cy="50" r="4" className="fill-paper" />
      {/* aperture ticks */}
      <path d="M100 22v8M136 58h-8M100 94v-8M64 58h8" className="stroke-ink" strokeWidth="3" strokeLinecap="round" />
      {/* spark */}
      <path
        d="M150 24c.5 4 3 6.5 7 7-4 .5-6.5 3-7 7-.5-4-3-6.5-7-7 4-.5 6.5-3 7-7z"
        className="fill-lavender"
      />
    </svg>
  );
}
