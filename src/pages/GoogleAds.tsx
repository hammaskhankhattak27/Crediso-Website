import { GaHero } from "@/components/sections/google-ads/GaHero";
import { GaBenefits } from "@/components/sections/google-ads/GaBenefits";
import { GaWarum } from "@/components/sections/google-ads/GaWarum";
import { GaVersprechen } from "@/components/sections/google-ads/GaVersprechen";
import { GaPartner } from "@/components/sections/google-ads/GaPartner";
import { GaPricing } from "@/components/sections/google-ads/GaPricing";
import { GaFormats } from "@/components/sections/google-ads/GaFormats";
import { GaMaximiere } from "@/components/sections/google-ads/GaMaximiere";
import { GaSuccessstory } from "@/components/sections/google-ads/GaSuccessstory";
import { GaFaq } from "@/components/sections/google-ads/GaFaq";
import { GaLassUnsStarten } from "@/components/sections/google-ads/GaLassUnsStarten";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

/** Google Ads landing page — order mirrors the Figma frame top to bottom. */
export function GoogleAds() {
  return (
    <>
      <GaHero />
      <GaBenefits />
      <GaWarum />
      <GaVersprechen />
      <GaPartner />
      <GaPricing />
      <GaFormats />
      <GaMaximiere />
      <GaSuccessstory />
      <Reviews />
      <GaFaq />
      <GaLassUnsStarten />
      <Contact />
    </>
  );
}
