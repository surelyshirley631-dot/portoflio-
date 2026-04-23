import { Link, useParams } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { getProjectBySlug } from "../data/projects";
import usePageMeta from "../hooks/usePageMeta";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  usePageMeta(project?.title ?? "Project Not Found", project?.shortDescription);

  if (!project) {
    return (
      <div className="rounded-2xl border border-white/10 bg-panel/50 p-8">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-3 text-sm text-muted">The requested project does not exist.</p>
        <Link to="/projects" className="mt-6 inline-flex text-sm text-accent hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-white/10 bg-panel/50 p-7 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.category.replace("-", " ")}</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">{project.shortDescription}</p>
      </header>

      <img
        src={project.coverImage}
        alt={`${project.title} cover`}
        className="h-[280px] w-full rounded-2xl border border-white/10 object-cover md:h-[420px]"
        onError={(event) => {
          event.currentTarget.src = "/projects/gallery-a.svg";
        }}
      />

      <section className="grid gap-5 md:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-white/10 bg-panel/45 p-6">
          <SectionHeader eyebrow="Background" title="Why This Project" className="mb-0" />
          <p className="text-sm leading-relaxed text-muted">{project.background}</p>
        </div>
        <div className="space-y-6 rounded-2xl border border-white/10 bg-panel/45 p-6">
          <SectionHeader eyebrow="My Role" title="What I Built" className="mb-0" />
          <p className="text-sm leading-relaxed text-muted">{project.whatIDid}</p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-panel/45 p-6">
          <h2 className="text-xl font-semibold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/85">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-panel/45 p-6">
          <h2 className="text-xl font-semibold">Project Metadata</h2>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>Role: {project.role}</p>
            <p>Year: {project.year}</p>
            <p>Slug: {project.slug}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-panel/45 p-6">
        <h2 className="text-xl font-semibold">Key Features</h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          {project.keyFeatures.map((feature) => (
            <li key={feature} className="rounded-lg border border-white/10 bg-black/20 px-4 py-3">
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-panel/45 p-6">
          <h2 className="text-xl font-semibold">Results / Outcomes</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.results}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-panel/45 p-6">
          <h2 className="text-xl font-semibold">What I Learned</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.learnings}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-panel/45 p-6">
        <h2 className="text-xl font-semibold">Screenshots / Demo</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {project.gallery.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt={`${project.title} gallery`}
              className="h-52 w-full rounded-xl border border-white/10 object-cover"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = "/projects/gallery-a.svg";
              }}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-5 py-2.5 text-sm transition hover:border-white/45"
          >
            GitHub
          </a>
        ) : null}

        {project.caseStudyUrl ? (
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-5 py-2.5 text-sm transition hover:border-white/45"
          >
            Case Study
          </a>
        ) : null}
      </section>
    </article>
  );
}
