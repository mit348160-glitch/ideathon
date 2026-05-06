'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const eventDate = new Date('2026-05-22T09:00:00+05:30');
const registrationLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdExampleMitIdeathon2026/viewform';

const domains = ['AI/ML', 'Healthcare', 'Sustainability', 'Web Development', 'IoT', 'Fintech'];
const timeline = [
  'Registration opens - 1 May 2026',
  'Registration closes - 18 May 2026',
  'Idea submission deadline - 20 May 2026',
  'Event day - 22 May 2026',
  'Final presentation - 22 May 2026',
  'Winner announcement - 22 May 2026'
];

const faqs = [
  ['Who can participate?', 'Open to all UG/PG students across disciplines.'],
  ['Is there any registration fee?', 'No, registration is completely free.'],
  ['Can we have cross-branch teams?', 'Yes, interdisciplinary teams are encouraged.'],
  ['How do we submit ideas?', 'Use the registration form and add your idea title + description.']
];

function useCountdown(target: Date) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  return useMemo(() => {
    const diff = Math.max(target.getTime() - now, 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }, [now, target]);
}

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const timer = useCountdown(eventDate);

  return (
    <main className="relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10 opacity-60 bg-[radial-gradient(circle_at_20%_20%,#7c3aed_0,#0f172a_35%,#030712_100%)]" />
      <nav className="sticky top-0 z-30 glass mx-4 mt-4 rounded-full px-6 py-3 flex items-center justify-between">
        <span className="font-semibold">MIT Ideathon 2026</span>
        <div className="hidden md:flex gap-4 text-sm">
          {['about', 'domains', 'timeline', 'rules', 'faq', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-violet-300">{item}</a>
          ))}
        </div>
        <button onClick={() => setShowForm(true)} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500">Register</button>
      </nav>

      <section className="min-h-screen px-6 pt-24 pb-16 max-w-6xl mx-auto text-center flex flex-col justify-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-300 to-violet-400 text-transparent bg-clip-text">MIT Ideathon 2026</motion.h1>
        <p className="mt-6 text-2xl">Innovate. Build. Transform.</p>
        <p className="mt-2 text-gray-300">22 May 2026 • Maharaja Institute of Technology Mysore</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
          {Object.entries(timer).map(([k, v]) => (
            <div key={k} className="glass rounded-xl p-4"><p className="text-3xl font-bold">{v}</p><p className="uppercase text-xs">{k}</p></div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-4">About</h2><p className="glass rounded-2xl p-6">MIT Ideathon 2026 is a high-energy innovation sprint where students collaborate to solve real problems, build entrepreneurial mindsets, and transform ideas into meaningful prototypes through teamwork and mentorship.</p></section>

      <section id="domains" className="max-w-6xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-8">Problem Statements / Domains</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{domains.map((domain) => <motion.div whileHover={{ y: -8, scale: 1.02 }} key={domain} className="glass rounded-2xl p-6 shadow-glow"><h3 className="text-xl font-semibold">{domain}</h3><p className="text-gray-300 mt-2">Build innovative solutions in {domain}.</p></motion.div>)}</div></section>

      <section id="timeline" className="max-w-4xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-8">Timeline</h2><ol className="relative border-l border-violet-400 pl-6 space-y-6">{timeline.map((item) => <li key={item} className="glass rounded-xl p-4 relative"><span className="absolute -left-[34px] top-5 h-3 w-3 rounded-full bg-violet-400" />{item}</li>)}</ol></section>

      <section id="rules" className="max-w-6xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-8">Rules</h2><ul className="grid md:grid-cols-2 gap-4">{['Team size: 2–4 members','Free registration','Original ideas only','PPT/demo presentation required','No plagiarism','Judges’ decision final'].map((r) => <li key={r} className="glass rounded-xl p-4">{r}</li>)}</ul></section>

      <section className="max-w-6xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-8">Prizes & Benefits</h2><div className="grid md:grid-cols-3 gap-4">{['Certificates','Recognition','Networking opportunities'].map((p)=><div key={p} className="glass p-6 rounded-2xl">{p}</div>)}</div></section>

      <section className="max-w-6xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-8">Event Gallery</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{[1,2,3,4,5,6].map((n)=><div key={n} className="h-44 rounded-2xl glass flex items-center justify-center text-gray-400">Previous Event {n}</div>)}</div></section>

      <section className="max-w-6xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-8">Sponsors</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{['Sponsor A','Sponsor B','Sponsor C','Sponsor D'].map((s)=><div key={s} className="glass rounded-xl h-24 flex items-center justify-center">{s}</div>)}</div></section>

      <section id="faq" className="max-w-4xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-8">FAQ</h2><div className="space-y-4">{faqs.map(([q,a])=><div key={q} className="glass rounded-xl p-4"><p className="font-semibold">{q}</p><p className="text-gray-300">{a}</p></div>)}</div></section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16"><h2 className="text-3xl font-semibold mb-8">Contact</h2><div className="grid md:grid-cols-2 gap-4"><div className="glass rounded-xl p-5"><p>Student Coordinators: Aditi Rao, Karthik S</p><p>Faculty Coordinator: Dr. N. Prakash</p><p>Email: ideathon@mitmysore.edu.in</p><p>Phone: +91 98765 43210</p></div><div className="glass rounded-xl p-5"><p>Follow us:</p><p>Instagram • LinkedIn • X</p></div></div></section>

      <footer className="text-center text-sm py-8 text-gray-400">© 2026 Maharaja Institute of Technology Mysore — MIT Ideathon 2026</footer>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/70 p-4 flex items-center justify-center" onClick={() => setShowForm(false)}>
          <div className="bg-slate-900 w-full max-w-4xl rounded-2xl p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between mb-3"><h3 className="text-xl font-semibold">Register for MIT Ideathon 2026</h3><button onClick={() => setShowForm(false)}>Close</button></div>
            <p className="text-sm text-gray-300 mb-3">Submit details through Google Form. Responses are automatically stored in Google Sheets.</p>
            <iframe src={registrationLink} className="w-full h-[70vh] rounded-lg" title="Registration Form" />
            <a href={registrationLink} target="_blank" className="inline-block mt-3 text-violet-300 underline" rel="noreferrer">Open form in new tab</a>
          </div>
        </div>
      )}
    </main>
  );
}
