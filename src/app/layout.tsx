import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joseph Onyenemerem — Senior Full-Stack Software Engineer",
  description:
    "Senior Full-Stack Software Engineer based in Stockholm, Sweden. Specialising in TypeScript, React, Next.js, Node.js, AWS, and AI-powered applications. Available for roles in Germany.",
  keywords: [
    "Full-Stack Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Java",
    "Spring Boot",
    "Stockholm",
    "Germany",
    "Software Engineer",
  ],
  authors: [{ name: "Joseph Onyenemerem" }],
  openGraph: {
    title: "Joseph Onyenemerem — Senior Full-Stack Software Engineer",
    description:
      "Senior Full-Stack Software Engineer building scalable cloud-native applications. Based in Stockholm, available for Germany.",
    url: "https://josefportfolio.netlify.app",
    siteName: "Joseph Onyenemerem",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0A0A0F] text-[#F1F5F9] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
