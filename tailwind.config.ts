import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the Crediso Figma file.
 * Colors, fonts and the page max-width all live here so every
 * section component pulls from a single source of truth.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Neutrals
        ink: "#000000",
        "ink-soft": "#161616",
        "ink-090": "#090909",
        graphite: "#333333",
        slate: "#5C5B5B",
        mute: "#767676",
        paper: "#FFFFFF",
        "paper-warm": "#FFFFFC",
        "paper-cool": "#FAFAFA",
        smoke: "#F3F3F3", // neutral-grey card surface (alternates with ink in card grids)
        // Brand greens
        mint: "#BFE0CC", // primary light-green accent surface
        "mint-soft": "#C0EDD0",
        sage: "#D3DED9",
        teal: "#5FBDAE",
        "teal-deep": "#067361",
        "green-900": "#003229",
        "green-950": "#002112",
        "green-ink": "#12211F", // near-black green for headings/stat values on light surfaces (Google Ads landing)
        // Accents
        lavender: "#D4C7FA",
        sun: "#F3E200",
        // Google brand
        "g-blue": "#4285F4",
        "g-green": "#34A853",
        "g-yellow": "#FBBC05",
        "g-red": "#EA4335",
      },
      fontFamily: {
        // Headings / UI — ITC Avant Garde Gothic with safe geometric fallbacks
        display: [
          "ITC Avant Garde Gothic Std",
          "League Spartan",
          "Poppins",
          "system-ui",
          "sans-serif",
        ],
        // Body — Avenir with close fallbacks
        body: ["Avenir", "Nunito Sans", "Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1440px",
        content: "1344px",
      },
      borderRadius: {
        card: "28px",
        pill: "50px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
