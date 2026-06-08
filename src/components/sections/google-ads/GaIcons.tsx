import type { SVGProps } from "react";

/** Checkmark used in benefit/feature lists. */
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

/** Clock used in the "Ø Antwortzeit" badge. */
export function Clock(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/** Plus marker for the FAQ accordion — rotate 45° on open to read as a close (×). */
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

/** Multi-colour "Google" wordmark used in the hero trusted-by row. */
export function GoogleWordmark({ className }: { className?: string }) {
  return (
    <span
      className={`font-display font-medium leading-none tracking-tight ${className ?? ""}`}
      aria-label="Google"
    >
      <span className="text-g-blue">G</span>
      <span className="text-g-red">o</span>
      <span className="text-g-yellow">o</span>
      <span className="text-g-blue">g</span>
      <span className="text-g-green">l</span>
      <span className="text-g-red">e</span>
    </span>
  );
}

/** Small dot/bullet marker used in format-tag rows. */
export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2c.5 4.5 3.5 7.5 8 8-4.5.5-7.5 3.5-8 8-.5-4.5-3.5-7.5-8-8 4.5-.5 7.5-3.5 8-8z" />
    </svg>
  );
}
