import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIT Ideathon 2026",
  description: "Innovate. Build. Transform. — Maharaja Institute of Technology Mysore",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}><div className="animated-bg" />{children}</body>
    </html>
  );
}
