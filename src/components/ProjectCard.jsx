import { Link } from "react-router-dom";

const categoryLabelMap = {
  "vibe-coding": "Vibe Coding",
  "ai-projects": "AI Projects",
  experiments: "Experiments",
};

export default function ProjectCard({ project }) {
  return (
    <article className="premium-card group rounded-2xl border border-white/10 bg-panel/60 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-white/25">
      <div className="relative h-44 overflow-hidden bg-black/50">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        <img
          src={project.coverImage}
          alt={`${project.title} cover`}
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = "/projects/gallery-a.svg";
          }}
        />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent">
            {categoryLabelMap[project.category] || project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.shortDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/80">
              {tech}
            </span>
          ))}
        </div>
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center rounded-lg border border-white/20 px-3 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
