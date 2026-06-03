const ROW_ONE = ["Websites", "Social Media", "Google Ads", "Foto", "Videos"];
const ROW_TWO = ["create", "digital", "solutions"];

function MarqueeRow({ words, reverse = false }: { words: string[]; reverse?: boolean }) {
  // Repeat the sequence so the -50% translate loops seamlessly.
  const sequence = [...words, ...words, ...words, ...words];
  return (
    <div className="flex overflow-hidden bg-mint py-3 md:py-4">
      <ul
        className="flex shrink-0 animate-marquee items-center gap-8 pr-8 md:gap-12 md:pr-12"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {sequence.map((word, i) => (
          <li key={`${word}-${i}`} className="flex items-center gap-8 md:gap-12">
            <span className="whitespace-nowrap font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-ink-soft">
              {word}
            </span>
            <span className="text-3xl leading-none text-ink-soft md:text-4xl" aria-hidden="true">
              &bull;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Ticker() {
  return (
    <section className="relative overflow-hidden bg-paper py-16 md:py-24">
      {/* Two mint bands crossing on the diagonal, like the Figma. */}
      <div className="relative">
        <div className="relative z-10 -ml-[15%] w-[130%] rotate-3">
          <MarqueeRow words={ROW_ONE} />
        </div>
        <div className="relative z-0 -mt-2 -ml-[15%] w-[130%] -rotate-3 md:-mt-3">
          <MarqueeRow words={ROW_TWO} reverse />
        </div>
      </div>
    </section>
  );
}
