import type { SVGProps } from "react";

/** Shared stroke style for the Crediso Care line icons. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Shield with a check — updates & security. */
export function Shield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 2.5 4.5 5.5v5.2c0 4.6 3.2 8 7.5 9.3 4.3-1.3 7.5-4.7 7.5-9.3V5.5L12 2.5Z" />
      <path d="m9 11.5 2 2 4-4.2" />
    </svg>
  );
}

/** Cloud with a down arrow — backups & restore. */
export function CloudBackup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M7 18.5a4 4 0 0 1-.4-7.98 5 5 0 0 1 9.7-1.2A3.75 3.75 0 0 1 17 18.5H7Z" />
      <path d="M12 9.5v5m0 0-2-2m2 2 2-2" />
    </svg>
  );
}

/** Speed gauge — performance & load time. */
export function Gauge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="M12 16 16 9" />
      <circle cx="12" cy="16" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Pen — content care & editing. */
export function Pen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M14.5 5.5 18.5 9.5 9 19l-4.5 1 1-4.5 9-9Z" />
      <path d="m13 7 4 4" />
    </svg>
  );
}

/** Heartbeat pulse — uptime monitoring. */
export function Pulse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M3 12h3.5l2-5.5 3.5 11 2.5-7 1.5 1.5H21" />
    </svg>
  );
}

/** Headset — personal support. */
export function Headset(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
      <path d="M5 13h2.2v5H6a1.8 1.8 0 0 1-1.8-1.8V13Zm14 0h-2.2v5H18a1.8 1.8 0 0 0 1.8-1.8V13Z" />
      <path d="M19 17.5v.5a3 3 0 0 1-3 3h-2" />
    </svg>
  );
}

/** Clock — response-time badge. */
export function Clock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/** Bold check used in feature lists. */
export function Check(props: SVGProps<SVGSVGElement>) {
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

/** Plus marker for the FAQ accordion — rotate 45° on open to read as a close. */
export function Plus(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

/** Magnifier — SEO & GEO. */
export function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.8-3.8" />
    </svg>
  );
}

/** Envelope — contact e-mail. */
export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
  );
}

/** Handset — contact phone. */
export function Phone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M6.5 3.5 9 4l1 3.6-1.9 1.4a12 12 0 0 0 5.5 5.5L16 12.5l3.6 1 .5 2.5a2 2 0 0 1-2.1 2.4A14.6 14.6 0 0 1 4.1 5.6 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

/** Map pin — contact address. */
export function MapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature icons for the "Was enthalten ist" icon grid.                */
/* ------------------------------------------------------------------ */

/** Stacked server — Google Cloud Hosting. */
export function Server(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="3.5" y="4" width="17" height="6" rx="1.8" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.8" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  );
}

/** Padlock — SSL-Verschlüsselung. */
export function Lock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="4.5" y="10" width="15" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v2" />
    </svg>
  );
}

/** Circular arrows — CMS- & Plugin-Updates. */
export function Refresh(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4.5 9a7.5 7.5 0 0 1 12.9-3.2L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M19.5 15a7.5 7.5 0 0 1-12.9 3.2L4 16" />
      <path d="M4 20v-4h4" />
    </svg>
  );
}

/** Lifebuoy — Notfall-Wiederherstellung. */
export function LifeBuoy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m6 6 3.5 3.5M14.5 14.5 18 18M18 6l-3.5 3.5M9.5 14.5 6 18" />
    </svg>
  );
}

/** Page with a plus — Neue Seiten. */
export function Document(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M6 3h7l5 5v13H6z" />
      <path d="M13 3v5h5" />
      <path d="M12 12v5M9.5 14.5h5" />
    </svg>
  );
}

/** Module grid — Neue Funktionen. */
export function Blocks(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}

/** Four-point star — Design-Anpassungen. */
export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z" />
    </svg>
  );
}

/** Megaphone — Pop-ups & Aktionen. */
export function Megaphone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M5 10 17 5v14L5 14z" />
      <path d="M5 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1" />
      <path d="M17 8.5a3.5 3.5 0 0 1 0 7" />
      <path d="M7 14.5V18a1.5 1.5 0 0 0 3 0v-2" />
    </svg>
  );
}

/** Lightbulb — Monatliche Empfehlungen. */
export function Bulb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2h5c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
      <path d="M9.5 18h5M10.5 21h3" />
    </svg>
  );
}

/** Bar chart — Tracking. */
export function Chart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 20h16" />
      <rect x="6" y="11" width="3" height="6" rx="0.6" />
      <rect x="11" y="7" width="3" height="10" rx="0.6" />
      <rect x="16" y="13" width="3" height="4" rx="0.6" />
    </svg>
  );
}

/** Lined page — Monatliche Reports. */
export function Report(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M6 3h12v18H6z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

/** Speech bubble — Unbegrenzte Anfragen. */
export function Chat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}
