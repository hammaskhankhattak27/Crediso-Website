const QUOTE =
  "“Their campaigns in video, search and social consistently deliver high-quality leads.”";

/** Frosted video play button centred on the photo cards. */
function PlayButton() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/25 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
}

function VideoCard({ image }: { image: string }) {
  return (
    <article className="group relative flex aspect-[426/572] w-[300px] shrink-0 snap-start items-center justify-center overflow-hidden rounded-3xl sm:w-[360px] lg:w-[426px]">
      <img src={image} alt="Kundenstimme" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <PlayButton />
    </article>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell py-16 md:py-24">
      <h2 className="text-center font-display text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-display text-ink">
        Was unsere Kund:innen sagen
      </h2>

      <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 no-scrollbar">
        {/* Card 1 — video */}
        <VideoCard image="/assets/images/testimonial-1.png" />

        {/* Card 2 — mint quote card */}
        <article className="flex aspect-[426/572] w-[300px] shrink-0 snap-start flex-col justify-between rounded-3xl bg-mint p-7 sm:w-[360px] lg:w-[426px]">
          <div>
            <img
              src="/assets/images/clients/client-1.png"
              alt="H+S"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-8 font-display text-2xl font-semibold leading-snug text-ink lg:text-[2rem]">
              {QUOTE}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/assets/images/avatar-alexander-harris.png"
              alt="Alexander Harris"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="font-body text-base font-extrabold uppercase tracking-wide text-ink">
                Alexander Harris
              </p>
              <p className="font-body text-sm font-extrabold text-ink/80">
                Project Manager &amp; Design Director
              </p>
            </div>
          </div>
        </article>

        {/* Card 3 — video */}
        <VideoCard image="/assets/images/testimonial-3.png" />

        {/* Card 4 — teal quote card */}
        <article className="relative flex aspect-[426/572] w-[300px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl bg-teal-deep p-7 text-paper sm:w-[360px] lg:w-[426px]">
          <p className="relative z-10 font-display text-xl font-semibold leading-snug lg:text-2xl">
            {QUOTE}
          </p>
          <div className="relative z-10">
            <p className="font-display text-sm font-medium uppercase tracking-wide">Alexander Harris</p>
            <p className="font-display text-xs font-medium text-paper/80">
              Project Manager &amp; Design Director
            </p>
          </div>
          <img
            src="/assets/icons/testimonial-accent.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52 opacity-25"
          />
        </article>
      </div>
    </section>
  );
}
