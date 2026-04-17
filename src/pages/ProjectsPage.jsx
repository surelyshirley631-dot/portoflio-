import { useMemo, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { projectCategories, projects } from "../data/projects";
import usePageMeta from "../hooks/usePageMeta";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  usePageMeta("Projects", "Browse portfolio projects by category: vibe coding, AI projects, and experiments.");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <SectionHeader
        eyebrow="All Work"
        title="Projects"
        description="Filter projects by category and open each detail page for methodology, implementation, and outcomes."
      />
      <CategoryFilter categories={projectCategories} activeCategory={activeCategory} onChange={setActiveCategory} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 ? (
        <p className="mt-10 rounded-xl border border-white/10 bg-panel/40 p-5 text-sm text-muted">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
