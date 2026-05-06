"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const target = new Date("2026-05-22T09:00:00+05:30").getTime();
export default function Hero({ onRegisterClick }: { onRegisterClick: () => void }) {
const [t,setT]=useState({d:0,h:0,m:0,s:0});
useEffect(()=>{const i=setInterval(()=>{const diff=Math.max(target-Date.now(),0);setT({d:Math.floor(diff/86400000),h:Math.floor(diff/3600000)%24,m:Math.floor(diff/60000)%60,s:Math.floor(diff/1000)%60});},1000);return()=>clearInterval(i);},[]);
return <section className="min-h-screen flex items-center pt-24 px-4"><div className="max-w-6xl mx-auto text-center w-full"><motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl md:text-7xl font-bold gradient-text">MIT Ideathon 2026</motion.h1><p className="mt-4 text-2xl">Innovate. Build. Transform.</p><p className="text-slate-300 mt-2">22 May 2026 · Maharaja Institute of Technology Mysore</p><div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">{Object.entries({Days:t.d,Hours:t.h,Minutes:t.m,Seconds:t.s}).map(([k,v])=><div key={k} className="glass-card rounded-2xl p-4"><p className="text-3xl font-bold">{String(v).padStart(2,"0")}</p><p className="text-xs text-slate-300">{k}</p></div>)}</div><button onClick={onRegisterClick} className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 text-lg">Register Now</button></div></section>
}
