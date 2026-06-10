import { Camera, TrendUp } from "./OsIcons";

const SHOP_AUFBAU = [
  "Shop-Entwicklung mit WordPress (WooCommerce) & Shopify",
  "Optimierung eines bestehenden Onlineshops",
  "Domain & Hosting",
  "Anbindung von Payment & Versandlösungen",
  "Schnittstellen zu Warenwirtschaftssystemen",
];

const DESIGN_CONTENT = [
  "Individuelles Design & UX-Optimierung",
  "Conversion-Optimierung für bessere Verkaufszahlen",
  "Produktfotografie",
  "Einschulung für dich und dein Team",
];

const SEO_MARKETING = [
  "SEO-Strategie für mehr Sichtbarkeit in Suchmaschinen",
  "Google Ads & Social-Media-Marketing für mehr Sales",
];

const KEYWORDS = ["Online Shop Graz", "Shopify Agentur", "E-Commerce Graz"];

function BulletList({ items, dotClass, textClass }: { items: string[]; dotClass: string; textClass: string }) {
  return (
    <ul className="mt-7 flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5">
          <span aria-hidden="true" className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${dotClass}`} />
          <span className={`font-body text-lg leading-relaxed ${textClass}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Mock storefront — product page peeking out of the mint card's bottom edge. */
function ShopMock() {
  return (
    <div aria-hidden="true" className="relative mt-10 h-44 overflow-hidden md:h-52">
      {/* Browser panel left — dark green storefront */}
      <div className="absolute bottom-[-1px] left-0 w-[55%] rounded-t-2xl bg-green-900 p-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-paper/20" />
          <span className="h-2 w-2 rounded-full bg-paper/20" />
          <span className="h-2 w-16 rounded-full bg-paper/15" />
        </div>
        <div className="mt-4 h-3 w-4/5 rounded-full bg-paper/20" />
        <div className="mt-2.5 h-3 w-3/5 rounded-full bg-paper/15" />
        <div className="mt-4 flex gap-2.5">
          <span className="h-8 w-20 rounded-lg bg-teal-deep/60" />
          <span className="h-8 w-16 rounded-lg bg-mint/30" />
        </div>
        <div className="mt-4 h-3 w-3/4 rounded-full bg-paper/15" />
      </div>
      {/* Product card right — checkout */}
      <div className="absolute bottom-[-1px] right-0 w-[42%] rounded-t-2xl border border-sage bg-paper p-5">
        <div className="flex items-center justify-between">
          <span className="h-9 w-9 rounded-xl bg-mint" />
          <span className="h-2.5 w-14 rounded-full bg-green-900/10" />
        </div>
        <div className="mt-3.5 h-2.5 w-full rounded-full bg-green-900/10" />
        <div className="mt-2 h-2.5 w-2/3 rounded-full bg-green-900/5" />
        <div className="mt-4 flex items-center justify-center rounded-lg bg-teal-deep py-2 font-display text-xs font-medium text-paper">
          Kaufen
        </div>
      </div>
    </div>
  );
}

/** Mock duo for the dark card — product-photo grid + UX/conversion stats. */
function DesignMock() {
  return (
    <div aria-hidden="true" className="relative mt-10 h-44 overflow-hidden md:h-52">
      {/* Produktfotos panel */}
      <div className="absolute bottom-[-1px] left-0 w-[46%] rounded-t-2xl bg-paper p-5">
        <div className="flex items-center gap-2.5">
          <Camera className="h-4 w-4 text-ink" />
          <span className="font-display text-[10px] font-medium uppercase tracking-[0.14em] text-ink">
            Produktfotos
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="aspect-square rounded-lg bg-mint" />
          ))}
        </div>
      </div>
      {/* UX / Conversion panel */}
      <div className="absolute bottom-[-1px] right-0 w-[48%] rounded-t-2xl bg-paper p-5">
        <div className="flex gap-2">
          <span className="rounded-pill bg-green-900 px-3 py-1 font-display text-[10px] font-medium text-paper">
            Design
          </span>
          <span className="rounded-pill bg-mint px-3 py-1 font-display text-[10px] font-medium text-ink">
            UX
          </span>
        </div>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <span className="block font-display text-[10px] font-medium text-slate">Conversion Rate</span>
            <span className="block font-display text-2xl font-medium leading-tight text-green-900">+42%</span>
            <span className="mt-1 block font-display text-[10px] font-light text-ink">UX Score: 94</span>
          </div>
          <div className="flex items-end gap-1 pb-1">
            {[22, 30, 25, 40, 35, 48, 53].map((h, i) => (
              <span key={i} className="w-2.5 rounded-t-sm bg-mint" style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mock duo for the SEO card — keyword rankings + ads performance. */
function SeoMock() {
  return (
    <div aria-hidden="true" className="relative h-56 overflow-hidden md:h-64">
      {/* Keyword ranking panel */}
      <div className="absolute bottom-[-1px] left-0 w-[48%] rounded-t-2xl bg-paper p-5">
        <div className="flex items-center gap-2.5">
          <TrendUp className="h-4 w-4 text-teal-deep" />
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-slate">
            Keyword Ranking
          </span>
        </div>
        <ol className="mt-4 flex flex-col gap-3.5">
          {KEYWORDS.map((keyword, i) => (
            <li key={keyword}>
              <div className="flex items-baseline gap-2.5">
                <span className="font-display text-xs font-light text-teal-deep">#{i + 1}</span>
                <span className="font-display text-xs font-light text-green-900">{keyword}</span>
              </div>
              <span
                className="mt-1.5 block h-2 rounded-pill bg-gradient-to-r from-teal-deep to-mint"
                style={{ width: `${88 - i * 14}%` }}
              />
            </li>
          ))}
        </ol>
      </div>
      {/* Ads performance panel */}
      <div className="absolute bottom-[-1px] right-0 w-[46%] rounded-t-2xl bg-mint p-5">
        <div className="flex items-center justify-between">
          <span className="font-display text-xs font-semibold text-teal-deep">Ads Performance</span>
          <span className="rounded-pill bg-teal-deep/40 px-2.5 py-0.5 font-display text-[10px] font-light text-paper">
            Live
          </span>
        </div>
        <div className="mt-3 flex gap-8">
          <div>
            <span className="block font-display text-[10px] font-medium text-teal-deep">ROAS</span>
            <span className="block font-display text-2xl font-medium text-teal-deep">4.8x</span>
          </div>
          <div>
            <span className="block font-display text-[10px] font-medium text-teal-deep">Sales</span>
            <span className="block font-display text-xl font-light text-green-900">+127%</span>
          </div>
        </div>
        <div className="mt-3 h-10 rounded-lg bg-gradient-to-b from-teal-deep/40 to-transparent" />
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Google", "Instagram", "Facebook"].map((channel) => (
            <span
              key={channel}
              className="inline-flex items-center gap-1.5 rounded-pill bg-teal-deep px-2.5 py-1 font-display text-[10px] font-light text-paper"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-paper" />
              {channel}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Unsere Leistungen im E-Commerce — bento of the three service pillars:
 *  shop build (mint), design & content (dark), SEO & marketing (teal, full
 *  width). Each card grounds its bullets with a small product-UI mock that
 *  bleeds out of the card's bottom edge, like the Figma. */
export function OsLeistungen() {
  return (
    <section id="leistungen" className="border-t border-sage">
      <div className="section-shell section-y">
        <h2 className="h-display text-ink">
          Unsere Leistungen
          <br />
          im E-Commerce
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Shop-Aufbau & Technik — mint */}
          <article className="flex flex-col overflow-hidden rounded-card bg-mint p-8 pb-0 md:p-9 md:pb-0">
            <h3 className="font-display text-[2rem] font-semibold leading-[1.12] text-ink md:text-[2.5rem]">
              Shop-Aufbau &<br />
              Technik
            </h3>
            <BulletList items={SHOP_AUFBAU} dotClass="bg-green-950" textClass="text-ink" />
            <div className="mt-auto">
              <ShopMock />
            </div>
          </article>

          {/* Design, Content & Optimierung — dark */}
          <article className="flex flex-col overflow-hidden rounded-card bg-ink-soft p-8 pb-0 md:p-9 md:pb-0">
            <h3 className="font-display text-[2rem] font-semibold leading-[1.12] text-paper md:text-[2.5rem]">
              Design, Content &<br />
              Optimierung
            </h3>
            <BulletList items={DESIGN_CONTENT} dotClass="bg-paper" textClass="text-paper" />
            <div className="mt-auto">
              <DesignMock />
            </div>
          </article>

          {/* SEO & Marketing — teal, full width */}
          <article className="overflow-hidden rounded-card bg-teal-deep lg:col-span-2">
            <div className="grid grid-cols-1 gap-10 p-8 pb-0 md:p-9 md:pb-0 lg:grid-cols-2 lg:gap-16">
              <div className="pb-8 md:pb-9">
                <span className="inline-flex items-center gap-2.5 rounded-xl bg-paper/10 px-4 py-2 font-display text-sm font-medium text-paper">
                  <TrendUp className="h-4 w-4" />
                  Sichtbarkeit, die verkauft
                </span>
                <h3 className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] text-paper md:text-[2.5rem]">
                  SEO & Marketing für
                  <br />
                  mehr Sales
                </h3>
                <BulletList items={SEO_MARKETING} dotClass="bg-paper" textClass="text-paper" />
              </div>
              <div className="self-end">
                <SeoMock />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
