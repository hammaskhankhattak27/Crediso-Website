import type { SVGProps } from "react";

export function Lock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 1.5a4.5 4.5 0 0 0-4.5 4.5v3H6.75A2.25 2.25 0 0 0 4.5 11.25v9A2.25 2.25 0 0 0 6.75 22.5h10.5a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 17.25 9H16.5V6A4.5 4.5 0 0 0 12 1.5zm0 2.25A2.25 2.25 0 0 1 14.25 6v3h-4.5V6A2.25 2.25 0 0 1 12 3.75zM12 14a1.5 1.5 0 0 1 .75 2.8V18a.75.75 0 0 1-1.5 0v-1.2A1.5 1.5 0 0 1 12 14z" />
    </svg>
  );
}

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
