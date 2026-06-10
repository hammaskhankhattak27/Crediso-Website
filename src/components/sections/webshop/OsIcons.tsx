import type { SVGProps } from "react";

/** Shared stroke style for the Webshop line icons. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Shopping cart — built shops / e-commerce. */
export function Cart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M3 4h2.2l2.1 11.2a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.3L20.8 8H6.1" />
      <circle cx="9.5" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Office building — corporate experience (OTTO Group). */
export function Building(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M5 20.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 15 5v15.5" />
      <path d="M15 9.5h3A1.5 1.5 0 0 1 19.5 11v9.5" />
      <path d="M3.5 20.5h17" />
      <path d="M8 7h1.5M11 7h1.5M8 10.5h1.5M11 10.5h1.5M8 14h1.5M11 14h1.5" />
    </svg>
  );
}

/** Star — top ratings. */
export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="m12 3.5 2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.2l-5.1 2.7 1.1-5.6-4.2-3.9 5.7-.7L12 3.5Z" />
    </svg>
  );
}

/** Lightning bolt — fast delivery. */
export function Zap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" />
    </svg>
  );
}

/** Camera — product photography. */
export function Camera(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4.5 7.5h3l1.5-2h6l1.5 2h3A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V9a1.5 1.5 0 0 1 1.5-1.5Z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  );
}

/** Trending-up chart — SEO & marketing growth. */
export function TrendUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="m3.5 16.5 5.5-5.5 3.5 3.5 7.5-7.5" />
      <path d="M14.5 7h5.5v5.5" />
    </svg>
  );
}

/** WordPress mark — the "W" in its circle, monochrome via currentColor. */
export function WordPressLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm-9 10.5c0-1.3.28-2.54.78-3.66l4.3 11.78A9.01 9.01 0 0 1 3 12Zm9 9c-.88 0-1.74-.13-2.54-.37l2.7-7.85 2.77 7.58c.02.05.04.09.06.13-.94.33-1.94.51-2.99.51Zm1.24-13.22c.54-.03 1.03-.09 1.03-.09.48-.06.43-.77-.06-.74 0 0-1.46.11-2.4.11-.88 0-2.37-.11-2.37-.11-.48-.03-.54.71-.05.74 0 0 .46.06.94.09l1.4 3.84-1.97 5.9-3.27-9.74c.54-.03 1.03-.09 1.03-.09.48-.06.43-.77-.06-.74 0 0-1.46.11-2.4.11-.17 0-.37 0-.58-.01A8.99 8.99 0 0 1 12 3c2.34 0 4.47.9 6.07 2.36-.04 0-.08-.01-.12-.01-.88 0-1.51.77-1.51 1.6 0 .74.43 1.37.88 2.11.34.6.74 1.37.74 2.48 0 .77-.3 1.66-.68 2.91l-.9 3-3.24-9.66Zm3.28 12.01 2.75-7.94c.51-1.28.68-2.31.68-3.22 0-.33-.02-.64-.06-.93A8.97 8.97 0 0 1 21 12a9 9 0 0 1-4.48 7.79Z" />
    </svg>
  );
}

/** Shopping bag — Shopify-style storefront mark, monochrome via currentColor. */
export function ShoppingBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M5.5 8h13l1 12.5h-15l1-12.5Z" />
      <path d="M8.5 10.5V6.7a3.5 3.5 0 0 1 7 0v3.8" />
    </svg>
  );
}
