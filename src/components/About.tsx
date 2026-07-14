import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="section-label">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] leading-snug mb-6">
            Engineer who builds things that{" "}
            <span className="text-[#6EE7B7]">actually matter</span>
          </h2>
          <div className="space-y-4 text-[#64748B] leading-relaxed">
            <p>
              I am a Senior Full Stack Engineer with 6+ years of experience
              building production systems across healthcare, logistics, and
              ecommerce. I specialise in TypeScript, Node.js, React, Java, and
              AWS, with a strong and growing focus on AI-powered applications
              using RAG pipelines and LLM integration.
            </p>
            <p>
              Early in my career I spent four years building MediGuard, which is an
              internal health insurance platform serving 30,000+ enrolled members
              at a Nigerian HMO. That experience gave me a deep appreciation for
              building software where reliability and data accuracy are
              business critical.
            </p>
            <p>
              I am currently based in Stockholm, Sweden and actively looking for
              full time Senior Full Stack or Backend Engineer roles across Europe
              and beyond. I am available to start immediately and open to
              relocation.
            </p>
          </div>

          {/* Info grid */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: "Stockholm, Sweden" },
              { label: "Available", value: "Immediately" },
              { label: "Open to", value: "Relocation" },
              { label: "Job Type", value: "Full Time" },
            ].map((item) => (
              <div key={item.label} className="bg-[#13131A] border border-[#1E1E2E] rounded-lg p-4">
                <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="text-sm font-medium text-[#F1F5F9]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience timeline */}
        <div>
          <div className="flex justify-center mb-8">
             <Image
               src="/profilepic_edited.jpg"
              alt="Joseph Onyenemerem"
               width={180}
              height={180}
             className="rounded-full border-4 border-[#6EE7B7]/30 object-cover"
               />
        </div>
          <p className="section-label">Experience</p>
          <div className="space-y-6">
            {[
              {
                period: "07/2023 — Present",
                role: "Senior Full-Stack Developer",
                company: "Makaveli Technology Limited",
                location: "Nigeria / Sweden",
                color: "#6EE7B7",
              },
              {
                period: "03/2018 — 07/2022",
                role: "Full-Stack Software Developer",
                company: "Venus Medicare Limited",
                location: "Abuja, Nigeria",
                color: "#818CF8",
              },
            ].map((job, i) => (
              <div
                key={i}
                className="relative pl-6 border-l-2 border-[#1E1E2E]"
              >
                <div
                  className="absolute -left-[5px] top-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: job.color }}
                />
                <div className="text-xs font-mono text-[#64748B] mb-1">
                  {job.period}
                </div>
                <div className="font-semibold text-[#F1F5F9]">{job.role}</div>
                <div className="text-sm text-[#64748B]">
                  {job.company} · {job.location}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="mt-8">
              <p className="section-label">Education</p>
              <div className="space-y-6">
                {[
                  {
                    period: "09/2022 — 06/2023",
                    degree: "Postgraduate Studies, Computer Science",
                    school: "Linköping University",
                    location: "Sweden",
                    color: "#6EE7B7",
                  },
                  {
                    period: "09/2008 — 08/2013",
                    degree: "Bachelor of Engineering, Computer Engineering",
                    school: "Caritas University",
                    location: "Nigeria",
                    color: "#818CF8",
                  },
                ].map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l-2 border-[#1E1E2E]"
                  >
                    <div
                      className="absolute -left-[5px] top-1 w-2 h-2 rounded-full"
                      style={{ backgroundColor: edu.color }}
                    />
                    <div className="text-xs font-mono text-[#64748B] mb-1">
                      {edu.period}
                    </div>
                    <div className="font-semibold text-[#F1F5F9]">{edu.degree}</div>
                    <div className="text-sm text-[#64748B]">
                      {edu.school} · {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
