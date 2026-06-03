import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Filter = "All" | "Web" | "Social Media" | "Google Ads";

const FILTERS: Filter[] = ["All", "Web", "Social Media", "Google Ads"];

interface Project {
  title: string;
  image: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Schloss Vasoldsberg",
    image: "/assets/images/project-schloss-vasoldsberg.png",
    tags: ["Website", "Social Media"],
  },
  {
    title: "H+S Zaun",
    image: "/assets/images/project-hs-zaun.png",
    tags: ["Website", "Google Ads"],
  },
  {
    title: "Akademie der Nachhaltigkeit",
    image: "/assets/images/project-akademie.png",
    tags: ["Video + Foto"],
  },
];

const tagMatches = (tags: string[], filter: Filter) => {
  if (filter === "All") return true;
  if (filter === "Web") return tags.includes("Website");
  return tags.includes(filter);
};

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const visible = PROJECTS.filter((p) => tagMatches(p.tags, active));

  return (
    <section id="projects" className="section-shell py-16 md:py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-bold tracking-display text-ink">
          Unsere Projekte
        </h2>

        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                "rounded-card px-5 py-2.5 font-display text-base font-semibold transition-colors",
                active === f
                  ? "bg-mint text-ink"
                  : "border border-ink text-ink hover:bg-mint/40",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <article key={project.title} className="flex flex-col">
            <div className="relative overflow-hidden rounded-card">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-pill bg-paper px-4 py-1.5 font-display text-sm font-semibold text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold text-ink-soft">{project.title}</h3>
              <Button variant="outline" size="md">
                Mehr dazu
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
