import { SmHeroBento } from "@/components/sections/social-media/SmHeroBento";
import { SmTrust } from "@/components/sections/social-media/SmTrust";
import { SmLeistungen } from "@/components/sections/social-media/SmLeistungen";
import { SmNichtSicher } from "@/components/sections/social-media/SmNichtSicher";
import { SmTestimonials } from "@/components/sections/social-media/SmTestimonials";
import { SmKontakt } from "@/components/sections/social-media/SmKontakt";

/** Social Media category overview — the main /social-media page. Implements the
 *  client's approved copy (Mai 2026): hero → trust badges → 4-tile service
 *  overview → "nicht sicher?" consult band → testimonials → closing contact.
 *  Built on the shared SmHero (reused by the four sub-pages) plus its own Sm*
 *  sections. */
export function SocialMedia() {
  return (
    <>
      <SmHeroBento />
      <SmTrust />
      <SmLeistungen />
      <SmNichtSicher />
      <SmTestimonials />
      <SmKontakt />
    </>
  );
}
