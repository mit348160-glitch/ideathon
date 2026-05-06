"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Domains from "@/components/Domains";
import Timeline from "@/components/Timeline";
import Rules from "@/components/Rules";
import Prizes from "@/components/Prizes";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (<main><Navbar onRegisterClick={() => setOpen(true)} /><Hero onRegisterClick={() => setOpen(true)} /><About /><Domains /><Timeline /><Rules /><Prizes /><Gallery /><Sponsors /><FAQ /><Contact /><Footer /><RegistrationModal isOpen={open} onClose={() => setOpen(false)} /></main>);
}
