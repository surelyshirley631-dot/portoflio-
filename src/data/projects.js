export const projectCategories = [
  { id: "all", label: "All" },
  { id: "vibe-coding", label: "Vibe Coding" },
  { id: "ai-projects", label: "AI Projects" },
  { id: "experiments", label: "Experiments" },
];

// Add new projects by copying `projectTemplate` and appending the object to `projects`.
// Keep `slug` unique, keep `category` in the supported list, and point images to `/public/projects`.
export const projects = [
  {
    slug: "clog",
    title: "CLOG",
    category: "vibe-coding",
    shortDescription:
      "A personal coffee companion that turns everyday brewing into a structured, installable system.",
    fullDescription:
      "CLOG is a structured coffee log for home brewers. It consolidates brew logs, bean and equipment management, cafe tracking, and local data portability into one lightweight web app designed for long-term daily use.",
    role: "Product Design, Frontend Development",
    year: "2026",
    coverImage: "/projects/clog-real-1.png",
    gallery: ["/projects/clog-real-1.png", "/projects/clog-real-2.png"],
    techStack: ["HTML", "CSS", "JavaScript", "PWA", "Service Worker"],
    featured: true,
    githubUrl: "https://github.com/surelyshirley631-dot/CLOG",
    liveUrl: "https://surelyshirley631-dot.github.io/CLOG/",
    learnings:
      "Strong personal products often come from specific everyday scenarios. This project improved my information modeling, product structuring, and ability to build a complete and sustainable experience without a complex backend.",
    background:
      "I wanted to replace fragmented coffee notes, photos, and memory-based routines with a private and structured brewing workspace focused on comparison, review, and iterative refinement over time.",
    whatIDid:
      "I designed and implemented the full product workflow around six areas: Brew, Beans, Cafes, Machines, Grinders, and Data. I built structured logging, inventory tracking, cafe records, equipment management, local import/export/reset, and a guidance layer with golden-rule logic plus local fallback suggestions.",
    keyFeatures: [
      "Structured brew logging: method, temperature, pressure, grind size, time, ratio, rating, and notes",
      "Bean inventory and freshness management for daily brewing decisions",
      "Cafe save-and-track module for personal coffee exploration",
      "Machine and grinder profiles stored in the same workspace",
      "Local-first data model with import/export/reset for backup and portability",
      "Installable PWA with service worker caching and resilient offline fallback",
    ],
    results:
      "CLOG shipped as a usable personal product prototype with a complete loop: logging, filtering, managing, backing up, and context-aware brewing guidance. It became a durable daily-use tool instead of a one-off concept demo.",
  },
  {
    slug: "chinesegpt",
    title: "ChineseGPT",
    category: "vibe-coding",
    shortDescription:
      "A structured Chinese learning workspace that brings AI tutoring, study tools, and cultural context into one product.",
    fullDescription:
      "ChineseGPT is an AI-powered Chinese learning workspace designed as a multi-mode product system rather than a single chat interface. It combines tutoring chat, PDF-based study support, pinyin workflows, cultural learning, and trending internet slang into one practical learning environment.",
    role: "Product Design, Frontend Development, AI Workflow Design",
    year: "2026",
    coverImage: "/projects/chinesegpt-01-home.png",
    gallery: [
      "/projects/chinesegpt-01-home.png",
      "/projects/chinesegpt-02-chat.png",
      "/projects/chinesegpt-03-memory-bank.png",
      "/projects/chinesegpt-04-culture.png",
      "/projects/chinesegpt-05-trending.png",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini", "Supabase", "PDF.js", "Edge TTS", "pinyin-pro"],
    featured: true,
    githubUrl: "https://github.com/surelyshirley631-dot/ChineseGPT",
    liveUrl: "https://example.com/chinesegpt",
    learnings:
      "AI learning products become significantly better when built around explicit study workflows and pedagogy, not just model responses. This project deepened my thinking on modality, pacing, and how to combine conversational AI with durable learning utilities.",
    background:
      "I wanted to build something more focused than a generic AI assistant and more flexible than a traditional language app. Language learning is non-linear, so the product needed to support conversation, custom materials, pronunciation, culture, and slang in one place.",
    whatIDid:
      "I built a structured multi-path learning product with guided Gemini tutoring, PDF text extraction and read-aloud, pinyin card generation, cultural learning modules, trending-word explanations, speech recognition, and Chinese voice playback. I also designed the tutoring prompt rules for correction style, simplified output, alignment, and pinyin formatting.",
    keyFeatures: [
      "Five-mode learning home: chat, PDF learning, culture, trending words, and pinyin cards",
      "Gemini tutoring with pedagogy-focused system prompt and structured correction behavior",
      "PDF upload with text extraction and read-aloud support for custom learning materials",
      "Pinyin editor for sentence-level breakdown, translation draft, and study notes",
      "Speech recognition and selectable Chinese TTS voices with slower playback options",
      "Cultural and internet slang modules with structured explanations and examples",
    ],
    results:
      "ChineseGPT evolved into a complete language-learning prototype with conversation practice, pronunciation support, PDF-driven study, pinyin workflows, and cultural context. It demonstrates how AI can be shaped into an intentional educational product instead of a generic prompt wrapper.",
  },
  {
    slug: "easyeat",
    title: "EasyEat",
    category: "vibe-coding",
    shortDescription:
      "A lightweight nutrition system that turns calorie planning, meal logging, and training routines into a clearer daily workflow.",
    fullDescription:
      "EasyEat is a nutrition and training companion built around daily routines. It combines metabolic planning, calorie target guidance, meal and workout tracking, and multilingual support into a structured product flow designed for consistency over time.",
    role: "Product Design, Frontend Development, Data Modeling",
    year: "2026",
    coverImage: "/projects/1.png",
    gallery: ["/projects/1.png", "/projects/2.png"],
    techStack: ["React", "TypeScript", "Vite", "Supabase", "Framer Motion", "Lucide"],
    featured: true,
    githubUrl: "https://github.com/surelyshirley631-dot/EasyEat",
    liveUrl: "https://example.com/easyeat",
    learnings:
      "This project reinforced that strong habit products come from modeling repeated user decisions and reducing daily friction, not from adding more feature surface. It improved my thinking around routine-focused state modeling, planning logic, and lightweight persistence.",
    background:
      "I wanted to build a nutrition product that felt practical rather than overwhelming. Many health apps either oversimplify planning or introduce too much input friction, so I focused on a system that structures decisions up front and makes daily logging easier.",
    whatIDid:
      "I designed and implemented onboarding-driven metabolic planning, BMR/TDEE calculation flow, training-day vs rest-day targets, meal and workout logging, multilingual UI support, custom food database upload (CSV/JSON), local saving behavior, and cloud sync messaging through Supabase.",
    keyFeatures: [
      "Onboarding flow for profile setup and metabolic planning",
      "BMR and TDEE calculation with structured calorie and macro targets",
      "Training-day and rest-day strategy switching with contextual intake guidance",
      "Meal logging and workout tracking designed for repeatable daily routines",
      "Multilingual interface with custom food database import support",
      "Local persistence plus cloud sync flow through Supabase",
    ],
    results:
      "EasyEat became a practical product experiment that turns nutrition planning into a clear loop: define targets, switch day modes, log intake, track workouts, and persist data locally or in the cloud. The outcome is a habit-friendly system rather than a static calorie tracker.",
  },
  {
    slug: "enterprise-ai-onboarding-assistant",
    title: "AI Training & Local RAG Onboarding Assistant",
    category: "ai-projects",
    shortDescription:
      "Designed and delivered an AI training and local RAG onboarding solution for a state-owned enterprise, helping 300+ employees across five departments access internal knowledge more efficiently.",
    fullDescription:
      "This project focused on building a practical onboarding and knowledge-support workflow for a state-owned enterprise. The solution combined AI training with a local RAG assistant so employees could ask grounded, department-aware questions about onboarding, SOPs, workflows, and internal policies in a secure environment.",
    role: "AI Enablement, Product Design, Knowledge Workflow Design",
    year: "2026",
    coverImage: "/projects/1.png",
    gallery: ["/projects/1.png", "/projects/2.png"],
    techStack: ["React", "Tailwind CSS", "Mock Local RAG UX", "Routing"],
    featured: true,
    githubUrl: "",
    liveUrl: "http://localhost:5869/",
    caseStudyUrl: "https://your-case-study-url.com",
    learnings:
      "The project reinforced that enterprise AI adoption succeeds when model capability is paired with workflow design, document structure, and role-specific onboarding context.",
    background:
      "The organization needed a faster way for employees across Finance, Administration, Sales, IT, and Procurement to find onboarding knowledge without repeated manual explanation and fragmented document search.",
    whatIDid:
      "I designed training sessions and an internal onboarding assistant experience centered on practical usage boundaries, department-specific Q&A, traceable references, and structured enterprise document coverage across six core content types.",
    keyFeatures: [
      "Two-layer delivery: AI training + local RAG onboarding assistant",
      "Department-aware support for Finance, Administration, Sales, IT, and Procurement",
      "Grounded Q&A with traceable source references for onboarding and policy workflows",
      "Knowledge base coverage across six document types, including FAQ, SOP, role training, and complex structured docs",
      "Training-led rollout with practical prompt usage guidance and adoption support",
      "Simulated enterprise demo module for communication and stakeholder alignment",
    ],
    results:
      "Rolled out across five departments and 300+ employees, achieved a 75%-81% internal answer hit rate, delivered through five training sessions, reached 89% satisfaction, and saved an estimated 200+ hours of repetitive support and Q&A time.",
  },
  {
    slug: "agent-orchestrator",
    title: "Agent Orchestrator",
    category: "ai-projects",
    shortDescription:
      "A multi-agent workflow system designed to coordinate planning, execution, and quality control across AI-assisted delivery.",
    fullDescription:
      "Agent Orchestrator formalizes AI collaboration with clear role separation: planner, builder, reviewer, and summarizer. It improves consistency and lowers manual coordination overhead.",
    role: "AI Engineer + Product Builder",
    year: "2025",
    coverImage: "/agent.png",
    gallery: ["/agent.png"],
    techStack: ["Python", "FastAPI", "OpenAI API", "Redis", "Docker"],
    featured: true,
    githubUrl: "https://github.com/surelyshirley631/agent-orchestrator",
    liveUrl: "https://example.com/agent-orchestrator",
    learnings:
      "AI systems become production-ready when observability and role boundaries are first-class concerns.",
    background:
      "I needed a reliable way to run repeated AI workflows with predictable quality and measurable outcomes.",
    whatIDid:
      "I designed the workflow architecture, implemented agent contracts, and shipped monitoring dashboards.",
    keyFeatures: [
      "Role-based agent pipeline",
      "Workflow state tracking and retries",
      "Evaluation layer for output quality and consistency",
    ],
    results:
      "Increased throughput for repetitive AI-enabled tasks by over 40% while preserving quality standards.",
  },
  {
    slug: "briefmate-assistant",
    title: "BriefMate Assistant",
    category: "ai-projects",
    shortDescription:
      "An AI assistant that converts messy notes into clear product briefs and implementation checklists.",
    fullDescription:
      "BriefMate Assistant helps teams move from raw idea capture to actionable project briefs. It combines summarization, structure extraction, and strategic prompting.",
    role: "AI Product Engineer",
    year: "2025",
    coverImage: "",
    gallery: [],
    techStack: ["Next.js", "TypeScript", "Supabase", "OpenAI API"],
    featured: true,
    githubUrl: "https://github.com/surelyshirley631/briefmate-assistant",
    liveUrl: "https://example.com/briefmate-assistant",
    learnings:
      "Context curation matters more than prompt complexity for recurring assistant use cases.",
    background:
      "Teams often lose momentum because initial ideas are scattered and hard to operationalize.",
    whatIDid:
      "I implemented structured brief generation, created editable output blocks, and built a lightweight knowledge memory.",
    keyFeatures: [
      "Prompt templates for different project types",
      "Auto-generated implementation checklist",
      "Editable brief sections with revision history",
    ],
    results:
      "Cut kickoff preparation time by roughly 50% and improved clarity in handoffs between design and engineering.",
  },
  {
    slug: "proto-sprint-console",
    title: "Proto Sprint Console",
    category: "experiments",
    shortDescription:
      "A rapid prototyping dashboard to compare multiple interaction concepts side by side.",
    fullDescription:
      "Proto Sprint Console is an experiment in decision velocity. It allows quick A/B/C testing for interaction ideas and keeps notes directly tied to each concept variant.",
    role: "Creative Developer",
    year: "2024",
    coverImage: "/proto.png",
    gallery: ["/proto.png"],
    techStack: ["React", "Vite", "Tailwind CSS", "Zustand"],
    featured: true,
    githubUrl: "https://github.com/surelyshirley631/proto-sprint-console",
    liveUrl: "https://example.com/proto-sprint-console",
    learnings:
      "Comparative interfaces accelerate decision making when evidence and notes stay in one surface.",
    background:
      "I wanted to avoid long feedback loops while testing multiple concept directions in early-stage design.",
    whatIDid:
      "I built a modular dashboard layout, state syncing for variant notes, and keyboard-first controls.",
    keyFeatures: [
      "Variant comparison workspace",
      "Inline annotation and scoring",
      "Quick export for review sessions",
    ],
    results:
      "Enabled same-day design decisions for concept reviews that previously took multiple meetings.",
  },
  {
    slug: "sonic-mood-ui",
    title: "Sonic Mood UI",
    category: "vibe-coding",
    shortDescription:
      "An audiovisual interface concept where UI transitions respond to music intensity.",
    fullDescription:
      "Sonic Mood UI experiments with emotional pacing in interfaces by mapping sound features to real-time visual behavior.",
    role: "Creative Technologist",
    year: "2024",
    coverImage: "/sonic.png",
    gallery: ["/sonic.png"],
    techStack: ["React", "Web Audio API", "Framer Motion"],
    featured: false,
    githubUrl: "https://github.com/surelyshirley631/sonic-mood-ui",
    liveUrl: "https://example.com/sonic-mood-ui",
    learnings:
      "Emotion-oriented interaction prototypes require clear fallback behaviors for accessibility.",
    background:
      "I wanted to investigate how rhythm and tempo could make interactions feel more human and expressive.",
    whatIDid:
      "I built audio-reactive motion logic and designed fallback interaction modes for reduced motion settings.",
    keyFeatures: [
      "Audio intensity detection",
      "Adaptive transition presets",
      "Accessibility-aware motion controls",
    ],
    results:
      "Produced a reusable pattern library for expressive yet controllable UI transitions.",
  },
  {
    slug: "prompt-lab-notebook",
    title: "Prompt Lab Notebook",
    category: "experiments",
    shortDescription:
      "A notebook-style environment for testing prompt strategies, outputs, and evaluation notes.",
    fullDescription:
      "Prompt Lab Notebook tracks prompt evolution with side-by-side output comparisons and scored evaluation notes.",
    role: "AI Experimenter",
    year: "2024",
    coverImage: "/prompt.png",
    gallery: ["/prompt.png"],
    techStack: ["React", "Node.js", "SQLite"],
    featured: false,
    githubUrl: "https://github.com/surelyshirley631/prompt-lab-notebook",
    liveUrl: "https://example.com/prompt-lab-notebook",
    learnings:
      "A lightweight evaluation rubric dramatically improves prompt iteration quality over intuition alone.",
    background:
      "I needed a simple system to capture why one prompt worked better than another across recurring tasks.",
    whatIDid:
      "I built prompt versioning, run history, and rubric-based scoring panels.",
    keyFeatures: [
      "Prompt and output version history",
      "Evaluation rubric with custom criteria",
      "Run comparison view",
    ],
    results:
      "Improved repeatability in prompt experiments and made handoff documentation significantly clearer.",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

// Development-only data template. Keep this in code, do not render on public pages.
export const projectTemplate = {
  slug: "your-project-slug",
  title: "Your Project Title",
  category: "vibe-coding", // one of: vibe-coding | ai-projects | experiments
  shortDescription: "One-sentence summary shown on cards and listing pages.",
  fullDescription: "Longer overview for detailed project context.",
  techStack: ["React", "Tailwind CSS", "Your Tech"],
  role: "Your role in this project",
  year: "2026",
  coverImage: "/projects/your-cover.svg", // local path under public/projects
  gallery: ["/projects/gallery-a.svg", "/projects/gallery-b.svg"],
  githubUrl: "https://github.com/surelyshirley631/your-project",
  liveUrl: "https://example.com/your-project",
  caseStudyUrl: "https://example.com/your-case-study", // optional
  featured: false,
  learnings: "What you learned from this project.",
  background: "Problem context and why you started this project.",
  whatIDid: "Your contribution and implementation scope.",
  keyFeatures: ["Feature one", "Feature two", "Feature three"],
  results: "Outcome, impact, or measurable results.",
};
