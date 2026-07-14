const skillCategories = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    label: "Backend & APIs",
    skills: [
      "Node.js",
      "Spring Boot",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Auth.js",
      "JWT",
      "Serverless Framework",
    ],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "DynamoDB", "Prisma", "Supabase", "S3", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "Cognito",
      "CloudWatch",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
    ],
  },
  {
    label: "AI & Architecture",
    skills: [
      "RAG",
      "OpenAI APIs",
      "Vector Databases",
      "Pinecone",
      "Claude Code",
      "Prompt Engineering",
      "Event-Driven Design",
      "Clean Architecture",
      "ONNX",
      "scikit-learn",
    ],
  },
  {
    label: "Testing & Quality",
    skills: [
      "Jest",
      "Unit Testing",
      "Integration Testing",
      "SonarQube",
      "Prometheus",
      "Grafana",
      "RabbitMQ",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#13131A]">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Technical Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
          Full-Stack Engineer{" "}
          <span className="text-[#6EE7B7]">6+ years of experience</span>
        </h2>
        <p className="text-[#64748B] mb-12 max-w-xl">
          Comfortable across the entire stack, from designing microservices
          architectures and building REST APIs to shipping polished React
          frontends and deploying to Kubernetes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl p-6 hover:border-[#2D2D44] transition-colors duration-200"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#818CF8] mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
