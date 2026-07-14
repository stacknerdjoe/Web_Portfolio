const projects = [
  {
    title: "PodSearch",
    subtitle: "AI Podcast Search Engine",
    description:
      "Full stack AI audio search engine, upload any podcast episode and search inside it with natural language. Built a complete RAG pipeline: audio ingestion via AWS S3, transcription with OpenAI Whisper, semantic embeddings, Pinecone vector search, and GPT-4o-mini Q&A with timestamp-accurate results.",
    metrics: [
      "Transcribes a 27 minute episode in ~22 seconds",
      "71% match accuracy on real podcast content",
      "Redis caching cuts repeat query time from 6.9s to 1.5s",
    ],
    tags: ["Next.js 16", "TypeScript", "OpenAI Whisper", "Pinecone", "AWS S3", "Redis", "Railway"],
    live: "https://podsearch-one.vercel.app/",
    github: "https://github.com/stacknerdjoe/podsearch",
    image: "/podsearch.png",
    featured: true,
    date: "July 2026",
  },
  {
    title: "MediGuard",
    subtitle: "Health Insurance Management Platform",
    description:
      "Nigeria-based internal health insurance management platform serving a corporate HMO with over 30,000 enrolled members. Handled end-to-end client registration, healthcare plan administration, and monthly claims processing from 50+ healthcare providers including hospitals, pharmacies, and eye clinics.",
    metrics: [
      "Served 30,000+ enrolled members",
      "Reduced claim processing time from 3 days to under 1 day",
      "Reduced processing errors by ~25% through business validation rules",
      "Improved API response time from 2.2s to under 900ms",
    ],
    tags: ["Node.js", "React", "PostgreSQL", "AWS", "Docker", "REST APIs", "CI/CD"],
    live: "https://www.venusmedicare.com/",
    github: null,
    image: null,
    featured: false,
    date: "2018 — 2022",
    internal: true,
  },
  {
    title: "DeliveryFlow",
    subtitle: "Cloud Native Logistics Microservices Platform",
    description:
      "Cloud native logistics platform built from scratch using five independently deployable Spring Boot microservices, API Gateway, Order Service, Driver Service, Tracking Service, and Notification Service, each with its own PostgreSQL database. Identified and resolved a competing consumers bug by implementing a fan-out exchange pattern in RabbitMQ.",
    metrics: [
      "5 independently deployable microservices",
      "Fan out RabbitMQ messaging pattern",
      "Database-per-service pattern for true fault isolation",
      "Full Kubernetes deployment pipeline",
    ],
    tags: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "Docker", "Kubernetes", "JWT"],
    live: null,
    github: "https://github.com/stacknerdjoe/deliveryflow",
    image: null,
    featured: false,
    date: "2024",
  },
  {
    title: "Naijastore",
    subtitle: "Full Stack E-Commerce Platform",
    description:
      "Full stack ecommerce store for game-themed stickers with Google OAuth and email auth via Auth.js, live cart updates, Stripe payments in SEK, order history dashboard, and a GitHub Actions CI pipeline.",
    metrics: [
      "Reduced initial page load from ~2.3s to under 1s via Next.js SSG",
      "Zero reported payment failures post-launch",
      "Automated CI/CD on every push to Vercel",
    ],
    tags: ["Next.js 16", "TypeScript", "Stripe", "Supabase", "Prisma", "Auth.js", "Tailwind CSS"],
    live: "https://naijastore-se.vercel.app/",
    github: "https://github.com/stacknerdjoe/nextjs-ecommerce-store",
    image: "/Naijastore.jpg",
    featured: false,
    date: "April 2026",
  },
  {
    title: "Prevent Asbestos",
    subtitle: "AI Workplace Safety Application",
    description:
      "Sweden-based mobile first web tool that helps field workers assess asbestos risk on-site through an 8-step interactive wizard and GPT-4o Vision photo analysis, grounded in Swedish AFS workplace safety regulations. Built at the SÄKU/Afa Försäkring Workplace Safety Hackathon, Stockholm 2026.",
    metrics: [
      "RAG pipeline over 17 domain knowledge sources (~1,175 chunks)",
      "No external vector database required — local embeddings",
      "1st place winner, SÄKU Workplace Safety Hackathon 2026",
      "Built and demoed in under 24 hours",
    ],
    tags: ["TypeScript", "Node.js", "Express", "GPT-4o Vision", "RAG", "Docker", "React", "Vite"],
    live: null,
    github: "https://github.com/jellevlieshout/prevent-asbestos",
    image: "/prevent-asbestos.jpg",
    featured: false,
    date: "May 2026",
  },
  {
    title: "AWS Serverless Backend",
    subtitle: "Cloud Native Serverless Platform",
    description:
      "Serverless REST API built on AWS Lambda, API Gateway, DynamoDB, and Cognito with migrated authentication from Auth0, 100% test coverage across all business logic, and a GitHub Actions CI/CD pipeline.",
    metrics: [
      "Reduced deployment time from ~40 minutes to under 10 minutes",
      "100% Jest test coverage across all business logic",
      "Zero breaking changes during Auth0 to Cognito migration",
    ],
    tags: ["TypeScript", "AWS Lambda", "DynamoDB", "Cognito", "React", "GitHub Actions", "Jest"],
    live: null,
    github: "https://github.com/stacknerdjoe/aws-serverless-todo-api",
    image: null,
    featured: false,
    date: "June 2026",
  },
  {
    title: "Nairaspace",
    subtitle: "Subscription Tracker App",
    description:
      "Full stack subscription management app with per user data in Firebase Firestore, full CRUD, real time analytics dashboard, and spending breakdown by category.",
    metrics: [
      "Real time updates with Firestore listeners",
      "Per user data isolation with Firebase auth rules",
    ],
    tags: ["Next.js", "TypeScript", "Firebase", "Firestore", "Tailwind CSS"],
    live: "https://nairaspace.netlify.app/",
    github: "https://github.com/stacknerdjoe/3_nairaspace",
    image: "/nairaspace.jpg",
    featured: false,
    date: "January 2026",
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="section-label">Projects</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
        Things I have built
      </h2>
      <p className="text-[#64748B] mb-12 max-w-xl">
        A mix of production systems, AI-powered tools, and cloud native
        platforms, all built with real users and real constraints in mind.
      </p>

      {/* Featured project */}
      {featured && (
        <div className="mb-8 bg-[#13131A] border border-[#1E1E2E] rounded-2xl overflow-hidden hover:border-[#6EE7B7]/30 transition-all duration-300 group">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="bg-[#0A0A0F] flex items-center justify-center p-8 min-h-[280px]">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="rounded-lg w-full object-cover max-h-[240px]"
                />
              ) : (
                <div className="text-6xl font-bold text-[#1E1E2E] group-hover:text-[#6EE7B7]/20 transition-colors">
                  {featured.title[0]}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold bg-[#6EE7B7]/10 text-[#6EE7B7] border border-[#6EE7B7]/20 px-3 py-1 rounded-full">
                    Featured Project
                  </span>
                  <span className="text-xs text-[#64748B]">{featured.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#F1F5F9] mb-1">{featured.title}</h3>
                <p className="text-sm text-[#6EE7B7] mb-4">{featured.subtitle}</p>
                <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                  {featured.description}
                </p>
                <ul className="space-y-1 mb-6">
                  {featured.metrics.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-xs text-[#64748B]">
                      <span className="text-[#6EE7B7] mt-0.5">↗</span>
                      {m}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#0A0A0F] bg-[#6EE7B7] px-4 py-2 rounded-md hover:bg-[#5DD4A4] transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#F1F5F9] border border-[#1E1E2E] px-4 py-2 rounded-md hover:border-[#6EE7B7] hover:text-[#6EE7B7] transition-all"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((project) => (
          <div
            key={project.title}
            className="bg-[#13131A] border border-[#1E1E2E] rounded-xl overflow-hidden hover:border-[#818CF8]/30 hover:translate-y-[-2px] transition-all duration-300 flex flex-col"
          >
            {/* Project image or placeholder */}
            <div className="bg-[#0A0A0F] h-40 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-4xl font-bold text-[#1E1E2E]">
                  {project.title[0]}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#64748B]">{project.date}</span>
                {project.internal && (
                  <span className="text-xs text-[#64748B] bg-[#1E1E2E] px-2 py-0.5 rounded">
                    Internal
                  </span>
                )}
              </div>
              <h3 className="font-bold text-[#F1F5F9] mb-1">{project.title}</h3>
              <p className="text-xs text-[#818CF8] mb-3">{project.subtitle}</p>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <ul className="space-y-1 mb-4">
                {project.metrics.slice(0, 2).map((m) => (
                  <li key={m} className="flex items-start gap-2 text-xs text-[#64748B]">
                    <span className="text-[#6EE7B7] mt-0.5">↗</span>
                    {m}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
                {project.tags.length > 4 && (
                  <span className="tech-tag">+{project.tags.length - 4}</span>
                )}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#6EE7B7] hover:underline"
                  >
                    Live ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#64748B] hover:text-[#F1F5F9] transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
                {!project.live && !project.github && (
                  <span className="text-xs text-[#64748B]">Internal project</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
