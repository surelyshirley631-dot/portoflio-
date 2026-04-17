import SectionHeader from "../components/SectionHeader";
import usePageMeta from "../hooks/usePageMeta";

const focusAreas = [
  "Creative interaction systems",
  "AI workflow and automation design",
  "Product-oriented rapid prototyping",
];

const skills = [
  "React / Next.js",
  "TypeScript / JavaScript",
  "Python / FastAPI",
  "LLM APIs and agent workflows",
  "UI Motion / Framer Motion",
  "System design and product thinking with business needs",
];

const workflow = [
  "Start from problem framing and expected outcomes",
  "Prototype fast to validate direction early",
  "Turn successful concepts into maintainable systems",
  "Document decisions for scalable iteration",
];

export default function AboutPage() {
  usePageMeta("About", "About page with focus areas, methods, skills, and contact information.");

  const introText = [
    "I create AI tools, digital products, and refined prototypes.",
    "Less noise, more clarity.",
    "Build work with substance, precision, and presence.",
  ].join(" ");

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-panel/50 p-7 md:p-10">
        <SectionHeader
          eyebrow="About"
          title="Creative Technologist / Builder with AI"
          description={introText}
        />
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-panel/45 p-6">
          <h2 className="text-xl font-semibold">What I Focus On</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {focusAreas.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-white/10 bg-panel/45 p-6">
          <h2 className="text-xl font-semibold">Skills / Tools</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/85">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-white/10 bg-panel/45 p-6">
        <h2 className="text-xl font-semibold">How I Work</h2>
        <ul className="mt-4 space-y-3 text-sm text-muted">
          {workflow.map((item) => (
            <li key={item} className="rounded-lg border border-white/10 bg-black/20 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-panel/45 p-6">
        <h2 className="text-xl font-semibold">Contact</h2>
        <div className="mt-4 space-y-2 text-sm">
          <a className="block text-white/80 transition hover:text-accent" href="mailto:surelyshirley631@gmail.com">
            surelyshirley631@gmail.com
          </a>
          <a
            className="block text-white/80 transition hover:text-accent"
            href="https://github.com/surelyshirley631-dot"
            target="_blank"
            rel="noreferrer"
          >
            github.com/surelyshirley631-dot
          </a>
        </div>
      </section>
    </div>
  );
}
