export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#64748B]">
          Joseph Onyenemerem · Stockholm, Sweden ·{" "}
          <span className="text-[#6EE7B7]">Available for Germany</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/stacknerdjoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#64748B] hover:text-[#F1F5F9] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-onyenemerem-946201b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#64748B] hover:text-[#F1F5F9] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:josephonyenemerem1510@gmail.com"
            className="text-xs text-[#64748B] hover:text-[#F1F5F9] transition-colors"
          >
            Email
          </a>
          <a
            href="/Joseph_Onyenemerem_Resume.pdf"
            download
            className="text-xs text-[#64748B] hover:text-[#6EE7B7] transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
