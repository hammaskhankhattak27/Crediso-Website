/**
 * Crediso information architecture — the single source of truth for the site's
 * page tree. Both the router ([App.tsx]) and the navbar ([Navbar.tsx]) are
 * derived from this, so the structure can never drift between them.
 *
 * `path` present  → a real, routable page.
 * `path` absent   → a grouping node with no own page (e.g. "Leistungen", "Web").
 *
 * Mirrors the agreed IA:
 *  - Web is a category WITHOUT its own page — only its sub-services are pages.
 *  - Social Media, Video and Foto each have their OWN page (plus sub-pages where shown).
 */
export interface NavNode {
  label: string;
  /** Route path; omit for grouping-only nodes that have no page of their own. */
  path?: string;
  children?: NavNode[];
}

export const SITE_NAV: NavNode[] = [
  {
    label: "Leistungen",
    children: [
      {
        // Category only — no own page, just sub-services.
        label: "Web",
        children: [
          { label: "Website", path: "/website" },
          { label: "Webshop", path: "/webshop" },
          { label: "Crediso Care", path: "/crediso-care" },
          { label: "SEO", path: "/seo" },
          { label: "Google Ads", path: "/google-ads" },
        ],
      },
      {
        // Own page + sub-pages.
        label: "Social Media",
        path: "/social-media",
        children: [
          { label: "Social Media Mentoring", path: "/social-media/mentoring" },
          { label: "Social Media Betreuung", path: "/social-media/betreuung" },
          { label: "Social Media Workshops", path: "/social-media/workshops" },
          { label: "Social Media Content Production", path: "/social-media/content-production" },
        ],
      },
      {
        // Own page + sub-pages.
        label: "Video",
        path: "/video",
        children: [
          { label: "Image Video", path: "/video/image-video" },
          { label: "Employer Branding Video", path: "/video/employer-branding" },
          { label: "Eventvideo", path: "/video/eventvideo" },
          { label: "Social Media Content", path: "/video/social-media-content" },
          { label: "Produktvideo", path: "/video/produktvideo" },
          { label: "Musikvideo", path: "/video/musikvideo" },
          { label: "Hochzeitsvideo", path: "/video/hochzeitsvideo" },
        ],
      },
      // Own page, no sub-pages.
      { label: "Foto", path: "/foto" },
    ],
  },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Blog", path: "/blog" },
  { label: "Karriere", path: "/karriere" },
  { label: "Nachhaltigkeit", path: "/nachhaltigkeit" },
  { label: "Kontakt", path: "/kontakt" },
  { label: "KMU. Digital", path: "/kmu-digital" },
  { label: "Referenzen", path: "/referenzen" },
];

/** Flatten the tree to every routable (path-bearing) node, depth-first. */
export function flattenRoutes(nodes: NavNode[] = SITE_NAV): { path: string; label: string }[] {
  const out: { path: string; label: string }[] = [];
  const walk = (list: NavNode[]) => {
    for (const node of list) {
      if (node.path) out.push({ path: node.path, label: node.label });
      if (node.children) walk(node.children);
    }
  };
  walk(nodes);
  return out;
}
