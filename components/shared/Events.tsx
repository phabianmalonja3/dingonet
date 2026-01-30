"use client";

import React, { useRef } from "react";
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
  
  // Parallax Logic for the Background SVG
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const handleJoinInitiative = (initId: string) => {
    console.log(`Joining Initiative: ${initId}`);
  };

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-white dark:bg-black overflow-hidden relative">
      
      {/* 1. BACKGROUND SVG: Humanitarian Impact Hub */}
    <motion.div 
  style={{ y: bgY }} // Keeps the scroll parallax for depth
  className="absolute top-0 -left-10 opacity-[0.1] dark:opacity-[0.25] pointer-events-none z-0"
>
  <svg 
    width="900" 
    height="900" 
    viewBox="0 0 100 100" 
    stroke="#d53f34" 
    fill="none" 
    strokeWidth="0.05"
    className="animate-[spin_120s_linear_infinite]" // Slow, constant rotation
  >
    {/* Background Grid Points */}
    <pattern id="plus-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 5 2 L 5 8 M 2 5 L 8 5" stroke="#d53f34" strokeWidth="0.1" opacity="0.5"/>
    </pattern>
    <rect width="100" height="100" fill="url(#plus-grid)" />

    {/* Focal Target Rings */}
    <circle cx="50" cy="50" r="48" strokeDasharray="0.5 2" />
    <circle cx="50" cy="50" r="35" />
    <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
    
    {/* Scanning Radar Line */}
    <line x1="50" y1="50" x2="50" y2="2" strokeWidth="0.2" stroke="#d53f34">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="10s"
            repeatCount="indefinite"
        />
    </line>

    {/* Primary Mission Nodes */}
    <circle cx="50" cy="50" r="1.5" fill="#d53f34" />
    <circle cx="80" cy="20" r="1" fill="#02557f" />
    <circle cx="20" cy="80" r="1" fill="#02557f" />
  </svg>
</motion.div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-24 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#d53f34] font-black tracking-[0.3em] uppercase text-[10px] flex items-center gap-3"
          >
            <span className="w-12 h-[2px] bg-[#d53f34]"></span>
            Active Field Operations
          </motion.div>
          
          <div className="max-w-4xl">
            <h2 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase">
              Humanitarian <br />
              <span className="text-[#d53f34] font-brittany lowercase block mt-2 text-7xl lg:text-9xl">
                Initiatives.
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
            <p className="max-w-md text-slate-500 dark:text-zinc-400 font-medium leading-relaxed text-lg italic">
              Deploying technology and resources to the frontlines of Tanzanian 
              connectivity for crisis response and education.
            </p>

            <Link 
              href="/initiatives" 
              className="group flex items-center justify-center gap-4 bg-zinc-900 dark:bg-white text-white dark:text-black px-12 py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:bg-[#d53f34] dark:hover:bg-[#d53f34] dark:hover:text-white shadow-xl active:scale-95"
            >
              Explore All Missions 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* INITIATIVES GRID */}
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
              {/* Image Side */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <Image 
                  src={init.image} 
                  unoptimized
                  fill
                  alt={init.title} 
                  className="object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border border-slate-100 dark:border-zinc-800">
                  {init.category}
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest">
                    <Calendar size={14} className="text-[#d53f34]" /> {init.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest">
                    <MapPin size={14} className="text-[#d53f34]" /> {init.location}
                  </div>
                </div>

                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter leading-tight group-hover:text-[#d53f34] transition-colors">
                  {init.title}
                </h4>
                
                <p className="text-slate-500 dark:text-zinc-400 leading-relaxed mb-8 text-sm font-medium">
                  {init.description}
                </p>

                <button 
                  onClick={() => handleJoinInitiative(init.id)}
                  className="mt-auto w-full flex items-center justify-center gap-3 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] group/btn hover:bg-[#d53f34] hover:border-[#d53f34] hover:text-white transition-all shadow-sm"
                >
                  <Users size={16} className="group-hover/btn:scale-110 transition-transform" />
                  Join This Initiative
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SUPPORT BANNER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 lg:p-16 rounded-[3.5rem] bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Subtle Background Net */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="#d53f34" fill="none" strokeWidth="0.2">
              <circle cx="10" cy="10" r="15" />
              <circle cx="90" cy="90" r="20" />
              <path d="M10 10 Q 50 50 90 90" strokeDasharray="2 2" />
              <path d="M90 10 Q 50 50 10 90" strokeDasharray="1 1" opacity="0.5" />
            </svg>
          </div>

          <div className="relative z-10 text-center lg:text-left flex flex-col gap-2">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#d53f34] text-[10px] font-black uppercase tracking-[0.3em] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#d53f34] animate-pulse" />
              Remote Participation
            </div>
            <h3 className="text-slate-900 dark:text-white text-3xl lg:text-5xl font-black tracking-tighter leading-none mb-2">
              CANNOT ATTEND <br />
              <span className="text-[#02557f] font-brittany lowercase text-4xl lg:text-6xl">in person?</span>
            </h3>
            <p className="text-slate-500 dark:text-zinc-400 font-medium max-w-lg leading-relaxed">
              You can still fuel our humanitarian response. Support the logistics of 
              field operations and digital infrastructure from anywhere.
            </p>
          </div>

          <Link 
            href="/donate" 
            className="group relative z-10 bg-[#d53f34] text-white px-10 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] transition-all active:scale-95 flex items-center gap-4 overflow-hidden shadow-xl shadow-[#d53f34]/20"
          >
            <div className="absolute inset-0 bg-[#02557f] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative flex items-center gap-3">
              <HeartHandshake size={20} className="group-hover:rotate-12 transition-transform" />
              Support Effort
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}