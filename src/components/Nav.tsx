"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1E1E2E]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[#F1F5F9] font-semibold text-lg tracking-tight hover:text-[#6EE7B7] transition-colors"
        >
          JO<span className="text-[#6EE7B7]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-[#64748B] hover:text-[#F1F5F9] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/Joseph_Onyenemerem_Resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium border border-[#6EE7B7] text-[#6EE7B7] px-4 py-2 rounded-md hover:bg-[#6EE7B7]/10 transition-all duration-200"
        >
          Download CV
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#64748B] hover:text-[#F1F5F9]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#13131A] border-t border-[#1E1E2E] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#64748B] hover:text-[#F1F5F9] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Joseph_Onyenemerem_Resume.pdf"
            download
            className="text-sm font-medium text-[#6EE7B7] border border-[#6EE7B7] px-4 py-2 rounded-md text-center hover:bg-[#6EE7B7]/10 transition-all"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
