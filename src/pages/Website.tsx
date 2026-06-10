import { WsHero } from "@/components/sections/website/WsHero";
import { WsVerkaufen } from "@/components/sections/website/WsVerkaufen";
import { WsFahrplan } from "@/components/sections/website/WsFahrplan";
import { WsWert } from "@/components/sections/website/WsWert";
import { WsWartung } from "@/components/sections/website/WsWartung";
import { WsWeCare } from "@/components/sections/website/WsWeCare";
import { WsCheck } from "@/components/sections/website/WsCheck";
import { WsFoerderung } from "@/components/sections/website/WsFoerderung";
import { WsBereit } from "@/components/sections/website/WsBereit";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

/** Website-creation service page — order mirrors the Figma frame top to bottom. */
export function Website() {
  return (
    <>
      <WsHero />
      <WsVerkaufen />
      <WsFahrplan />
      <WsWert />
      <WsWartung />
      <WsWeCare />
      <WsCheck />
      <WsFoerderung />
      <Reviews />
      <WsBereit />
      <Contact />
    </>
  );
}
