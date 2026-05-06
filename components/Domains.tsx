"use client";
import { motion } from "framer-motion";
const items=["Cyber Security","Health Care","AI and Robotics","Sustainability","Web Development","Fintech"];
export default function Domains(){return <section id="domains" className="py-24 px-4"><div className="max-w-6xl mx-auto"><h2 className="text-4xl font-bold mb-8">Domains</h2><div className="grid md:grid-cols-3 gap-5">{items.map((d)=><motion.div whileHover={{y:-6}} key={d} className="glass-card rounded-2xl p-6"><h3 className="text-xl font-semibold">{d}</h3></motion.div>)}</div></div></section>}
