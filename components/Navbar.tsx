"use client";
import { motion } from "framer-motion";
const links = ["about","domains","timeline","rules","prizes","faq","contact"];
export default function Navbar({ onRegisterClick }: { onRegisterClick: () => void }) {
return <motion.nav initial={{y:-80}} animate={{y:0}} className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-7xl glass rounded-full px-6 py-3 flex justify-between items-center"><p className="font-semibold">MIT Ideathon 2026</p><div className="hidden md:flex gap-6 text-sm text-slate-300">{links.map((i)=><a key={i} href={`#${i}`} className="hover:text-white">{i}</a>)}</div><button onClick={onRegisterClick} className="px-5 py-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500">Register</button></motion.nav>;
}
