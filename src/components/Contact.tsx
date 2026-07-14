export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-4">
          Let us work together
        </h2>
        <p className="text-[#64748B] leading-relaxed mb-10">
          I am actively looking for Senior Full Stack or Backend Engineer roles
          across Europe and beyond. I am available to start immediately and 
          open to relocation. Feel free to reach out via email or connect on LinkedIn..
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:josephonyenemerem1510@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-[#6EE7B7] text-[#0A0A0F] font-semibold px-8 py-3 rounded-md hover:bg-[#5DD4A4] transition-all duration-200"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-onyenemerem-946201b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#1E1E2E] text-[#F1F5F9] font-medium px-8 py-3 rounded-md hover:border-[#818CF8] hover:text-[#818CF8] transition-all duration-200"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>

        {/* Quick info cards */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Location", value: "Stockholm, Sweden" },
            { label: "Available", value: "Immediately" },
            { label: "Open to", value: "Relocation" }, 
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#13131A] border border-[#1E1E2E] rounded-lg p-4"
            >
              <div className="text-xs text-[#64748B] uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-sm font-medium text-[#F1F5F9]">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
