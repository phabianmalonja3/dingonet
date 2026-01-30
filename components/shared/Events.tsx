"use client";

import React, { Suspense, useRef } from "react";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake 
} from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// --- SKELETON COMPONENT (The "Ghost" state) ---
const MissionSkeleton = () => (
  <div className="grid lg:grid-cols-2 gap-10 w-full">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="flex flex-col md:flex-row bg-slate-50 dark:bg-zinc-900/50 rounded-[3rem] h-[300px] animate-pulse overflow-hidden border border-slate-100 dark:border-zinc-800">
        <div className="w-full md:w-2/5 bg-slate-200 dark:bg-zinc-800" />
        <div className="w-full md:w-3/5 p-10 flex flex-col gap-4">
          <div className="h-4 w-1/3 bg-slate-200 dark:bg-zinc-800 rounded-full" />
          <div className="h-8 w-full bg-slate-200 dark:bg-zinc-800 rounded-xl" />
          <div className="h-20 w-full bg-slate-200 dark:bg-zinc-800 rounded-2xl" />
          <div className="mt-auto h-12 w-full bg-slate-200 dark:bg-zinc-800 rounded-2xl" />
        </div>
      </div>
    ))}
  </div>
);

const INITIATIVES = [
  {
    id: "init-001",
    title: "Digital Literacy Workshop",
    date: "March 15, 2026",
    location: "Dar es Salaam",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop",
    category: "Education",
    description: "Equipping local youth with essential coding and internet safety skills to bridge the digital divide."
  },
  {
    id: "init-002",
    title: "Rural Connectivity Summit",
    date: "April 02, 2026",
    location: "Arusha",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    category: "Infrastructure",
    description: "Strategic planning for deploying mesh networks in underserved Tanzanian villages."
  },
  {
    id: "init-003",
    title: "Community Health Outreach",
    date: "April 18, 2026",
    location: "Mwanza",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=800&auto=format&fit=crop",
    category: "Health",
    description: "Providing essential health services and education in underserved communities."
  },
  {
    id: "init-004",
    title: "Innovation Lab Launch",
    date: "May 10, 2026",
    location: "Dodoma",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    category: "Tech",
    description: "Empowering local youth with essential digital skills and internet safety knowledge."
  }
];

export default function EventsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-white dark:bg-black overflow-hidden relative">
      
      {/* TACTICAL BACKGROUND GRID */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-0 -left-10 opacity-[0.1] dark:opacity-[0.25] pointer-events-none z-0"
      >
        <svg width="900" height="900" viewBox="0 0 100 100" stroke="#d53f34" fill="none" strokeWidth="0.05" className="animate-[spin_120s_linear_infinite]">
          <pattern id="plus-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 5 2 L 5 8 M 2 5 L 8 5" stroke="#d53f34" strokeWidth="0.1" opacity="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#plus-grid)" />
          <circle cx="50" cy="50" r="48" strokeDasharray="0.5 2" />
          <line x1="50" y1="50" x2="50" y2="2" strokeWidth="0.2" stroke="#d53f34">
              <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
          </line>
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">

        
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col items-start mb-24 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="text-[#d53f34] font-black tracking-[0.3em] uppercase text-[10px] flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#d53f34]"></span>
            Active Field Operations
          </motion.div>
          <h2 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase">
            Humanitarian <br />
            <span className="text-[#d53f34] font-brittany lowercase block mt-2 text-7xl lg:text-9xl">Initiatives.</span>
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
            <p className="max-w-md text-slate-500 dark:text-zinc-400 font-medium leading-relaxed text-lg italic">
              Deploying technology to the frontlines of Tanzanian connectivity.
            </p>
            <Link href="/initiatives" className="group flex items-center justify-center gap-4 bg-[#d53f34] dark:bg-white text-white dark:text-black px-12 py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:bg-[#d53f34] dark:hover:bg-[#d53f34] dark:hover:text-white shadow-xl active:scale-95">
              Explore All Missions <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* --- SUSPENSE WRAPPER --- */}
        <Suspense fallback={<MissionSkeleton />}>
          <div className="grid lg:grid-cols-2 gap-10">
            {INITIATIVES.map((init, index) => (
              <motion.div 
                key={init.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group flex flex-col md:flex-row bg-white dark:bg-zinc-950 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-zinc-900 hover:border-[#d53f34]/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <Image src={init.image} unoptimized fill alt={init.title} className="object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border border-slate-100 dark:border-zinc-800">{init.category}</div>
                </div>

                <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-6 text-slate-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#d53f34]" /> {init.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#d53f34]" /> {init.location}</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter group-hover:text-[#d53f34] transition-colors">{init.title}</h4>
                  <p className="text-slate-500 dark:text-zinc-400 leading-relaxed mb-8 text-sm font-medium">{init.description}</p>
                  <button className="mt-auto w-full flex items-center justify-center gap-3 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] group/btn hover:bg-[#d53f34] hover:border-[#d53f34] hover:text-white transition-all shadow-sm">
                    <Users size={16} /> Join This Initiative
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Suspense>

        {/* SUPPORT BANNER */}
        <div className="mt-20 p-10 lg:p-16 rounded-[3.5rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="#d53f34" fill="none" strokeWidth="0.2">
              <circle cx="10" cy="10" r="15" /><circle cx="90" cy="90" r="20" />
              <path d="M10 10 Q 50 50 90 90" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-slate-900 dark:text-white text-3xl lg:text-5xl font-black tracking-tighter mb-2 uppercase">Cannot attend <span className="text-[#d53f34] font-brittany lowercase">in person?</span></h3>
            <p className="text-slate-500 dark:text-zinc-400 font-medium max-w-lg leading-relaxed">Support the logistics of our field operations from anywhere.</p>
          </div>
          <Link href="/donate" className="group relative z-10 bg-[#d53f34] text-white px-10 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center gap-4 overflow-hidden shadow-xl shadow-[#d53f34]/20">
            <div className="absolute inset-0 bg-[#02557f] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative flex items-center gap-3"><HeartHandshake size={20} /> Support Effort</span>
          </Link>
        </div>
      </div>
    </section>
  );
}