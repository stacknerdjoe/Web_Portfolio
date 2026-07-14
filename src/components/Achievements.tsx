export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-[#13131A]">
      <div className="max-w-6xl mx-auto">
        <p className="section-label">Recognition</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-12">
          Achievements &amp; Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "1st Place",
              event: "SÄKU/Afa Försäkring Workplace Safety Hackathon",
              location: "Stockholm, Sweden",
              year: "2026",
              project: "Prevent Asbestos — AI-powered asbestos risk assessment tool for field workers",
              color: "#6EE7B7",
              certificate: "https://cillers.credentials.erigo.se/view/694147576672526",
            },
            {
              title: "3rd Place",
              event: "Vidda Solutions AML Compliance Hackathon",
              location: "Stockholm, Sweden",
              year: "2026",
              project: "Vidda AML Pipeline — Human-in-the-loop AI compliance training platform",
              color: "#818CF8",
              certificate: "https://cillers.credentials.erigo.se/view/693481491519829",
            },
          ].map((award) => (
            <div
              key={award.event}
              className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl p-6 hover:border-[#2D2D44] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="text-4xl font-black"
                  style={{ color: award.color }}
                >
                  {award.title}
                </div>
                <span className="text-xs text-[#64748B] bg-[#1E1E2E] px-3 py-1 rounded-full">
                  {award.year}
                </span>
              </div>
              <div className="font-semibold text-[#F1F5F9] mb-1">{award.event}</div>
              <div className="text-sm text-[#64748B] mb-3">{award.location}</div>
              <div className="text-sm text-[#64748B] leading-relaxed border-t border-[#1E1E2E] pt-3 flex items-start justify-between gap-4">
                <span>{award.project}</span>
                {award.certificate && (
                  <a
                    href={award.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#6EE7B7] border border-[#6EE7B7]/30 px-3 py-1 rounded-full hover:bg-[#6EE7B7]/10 transition-all whitespace-nowrap"
                  >
                    View Certificate ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl p-6">
          <h3 className="text-sm font-semibold text-[#818CF8] uppercase tracking-widest mb-6">
            Language Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { lang: "English", level: "Mother tongue", pct: 100 },
              { lang: "Swedish", level: "B1", pct: 55 },
              { lang: "German", level: "A1 — Learning", pct: 15 },
              { lang: "Igbo", level: "Mother tongue", pct: 100 },
            ].map((l) => (
              <div key={l.lang}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[#F1F5F9]">{l.lang}</span>
                  <span className="text-xs text-[#64748B]">{l.level}</span>
                </div>
                <div className="h-1.5 bg-[#1E1E2E] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#6EE7B7] to-[#818CF8]"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}