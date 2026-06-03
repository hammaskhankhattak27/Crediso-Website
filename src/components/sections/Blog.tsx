import { Button } from "@/components/ui/Button";

interface Post {
  title: string;
  image: string;
}

const POSTS: Post[] = [
  { title: "Storytellung & Video", image: "/assets/images/blog-storytelling.png" },
  { title: "Trend Analyse 2024", image: "/assets/images/blog-trend-analyse.png" },
  { title: "Warum Websites wichtig sind?", image: "/assets/images/blog-websites.png" },
];

export function Blog() {
  return (
    <section id="blog" className="section-shell py-16 md:py-24">
      {/* Header — heading left, description right (Figma) */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-display text-ink">
          Unser Blog
        </h2>
        <p className="max-w-[620px] font-body text-lg leading-relaxed text-ink-soft lg:pt-3 lg:text-right">
          Bereit, neues Wissen zu erlangen und mehr über die neuesten Technologien und Tools zur
          Optimierung deines Onlineauftritts zu erfahren?
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="group flex flex-col overflow-hidden rounded-card border border-ink-soft/15"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Content — title on top, button stacked below */}
            <div className="flex flex-1 flex-col border-t border-ink-soft/15 bg-paper px-6 py-6">
              <h3 className="font-display text-2xl font-semibold leading-snug text-ink-soft">
                {post.title}
              </h3>
              <div className="mt-8">
                <Button href="#blog" size="md">
                  Mehr dazu
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
