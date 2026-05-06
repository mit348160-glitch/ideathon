import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MIT Ideathon 2026',
  description: 'Official event website for MIT Ideathon 2026'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
