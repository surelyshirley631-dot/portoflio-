import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { featuredProjects } from "../data/projects";
import usePageMeta from "../hooks/usePageMeta";

export default function HomePage() {
  usePageMeta(
    "Home",
    "Creative technologist portfolio featuring vibe coding and AI projects with practical depth.",
  );

  return (
    <div className="space-y-24 md:space-y-28">
      <section className="hero-glow rounded-3xl border border-white/10 bg-gradient-to-br from-panel to-black p-8 shadow-glow md:p-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">Creative Technologist</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          Shirley Liu
          <span className="mt-2 block text-white/80">I build AI products, polished prototypes, and practical systems.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Creative technologist focused on turning ideas into elegant products with clear architecture, strong execution,
          and visual taste.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="rounded-lg border border-accent bg-accent/15 px-5 py-2.5 text-sm font-medium text-accent transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-black"
          >
            View all Projects
          </Link>
          <a
            href="mailto:surelyshirley631@gmail.com"
            className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/90 transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A quick snapshot of projects that combine visual thinking, system design, and execution."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-panel/45 p-7 md:p-8">
          <SectionHeader
            eyebrow="About"
            title="About Preview"
            description="I build digital products from curiosity first. Some start as experiments, some begin with a real problem — but I’m always interested in making things that feel useful, simple, and human."
            className="mb-0"
          />
        </article>

        <article className="rounded-2xl border border-white/10 bg-panel/45 p-7 md:p-8">
          <SectionHeader eyebrow="Connect" title="Contact / Links" className="mb-4" />
          <div className="space-y-3 text-sm">
            <a className="block text-white/80 transition hover:text-accent" href="https://github.com/surelyshirley631-dot">
              GitHub: github.com/surelyshirley631-dot
            </a>
            <a className="block text-white/80 transition hover:text-accent" href="mailto:surelyshirley631@gmail.com">
              surelyshirley631@gmail.com
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
