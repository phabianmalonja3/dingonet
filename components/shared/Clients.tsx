"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { School, Activity, Users2, Landmark, HeartHandshake, Baby, Sparkles } from "lucide-react";
import { motion } from 'framer-motion';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PARTNERS = [
  { name: "Public Schools", icon: <School size={32} /> },
  { name: "Rural Clinics", icon: <Activity size={32} /> },
  { name: "Youth Centers", icon: <Users2 size={32} /> },
  { name: "Local Councils", icon: <Landmark size={32} /> },
  { name: "Orphanages", icon: <Baby size={32} /> },
  { name: "Women Groups", icon: <HeartHandshake size={32} /> },
];

export default function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bgShapeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Organic Background Animation (The Path you provided)
      if (bgShapeRef.current) {
        // Slow constant rotation
        gsap.to(bgShapeRef.current, {
          rotate: 360,
          duration: 60,
          repeat: -1,
          ease: "none",
        });

        // Drift based on scroll
        gsap.to(bgShapeRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
          x: 100,
          y: -50,
        });
      }

      // 2. Header Entrance
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
          },
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        });
      }

      // 3. Marquee Logic
      const slider = sliderRef.current;
      if (slider) {
        const loop = gsap.to(slider, {
          xPercent: -50,
          ease: "none",
          duration: 25,
          repeat: -1,
        });

        const handleMouseEnter = () => gsap.to(loop, { timeScale: 0.2, duration: 0.8 });
        const handleMouseLeave = () => gsap.to(loop, { timeScale: 1, duration: 0.8 });

        slider.addEventListener("mouseenter", handleMouseEnter);
        slider.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          slider.removeEventListener("mouseenter", handleMouseEnter);
          slider.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-white dark:bg-black overflow-hidden relative">
      
      {/* Dynamic Background Organic Shape */}
    {/* Humanitarian Impact Hub Shape */}
<div className="absolute top-10 -left-20 opacity-15 dark:opacity-25 pointer-events-none z-0">
  <svg 
    ref={bgShapeRef}
    width="800" 
    height="800" 
    viewBox="0 0 100 100" 
    stroke="#d53f34" 
    fill="none" 
    strokeWidth="0.15"
  >
    {/* Concentric Impact Zones */}
    <circle cx="50" cy="50" r="45" strokeDasharray="1 3" />
    <circle cx="50" cy="50" r="30" />
    <circle cx="50" cy="50" r="15" strokeDasharray="4 2" />

    {/* Distribution Radiants (Aid & Connection paths) */}
    <line x1="50" y1="5" x2="50" y2="95" opacity="0.5" />
    <line x1="5" y1="50" x2="95" y2="50" opacity="0.5" />
    
    {/* Strategic Community Nodes */}
    <g className="nodes">
      <circle cx="50" cy="5" r="1.5" fill="#d53f34" />
      <circle cx="50" cy="95" r="1.5" fill="#d53f34" />
      <circle cx="95" cy="50" r="1.5" fill="#d53f34" />
      <circle cx="5" cy="50" r="1.5" fill="#d53f34" />
      
      {/* Central Command Node */}
      <circle cx="50" cy="50" r="3" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="1" fill="#d53f34" className="animate-pulse" />
    </g>

    {/* Field Operation Coordinates (Visual decoration) */}
    <path d="M20 20 L30 20 M20 20 L20 30" strokeWidth="0.5" />
    <path d="M80 80 L70 80 M80 80 L80 70" strokeWidth="0.5" />
  </svg>
</div>

      {/* Grid Overlay for extra "Mission HQ" texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#d53f34 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 mb-24 text-center relative z-10" ref={headerRef}>
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-[#d53f34]/5 text-[#d53f34] text-[10px] font-black uppercase tracking-[0.3em] border border-[#d53f34]/10">
          <Sparkles size={14} className="fill-[#d53f34] animate-pulse" /> 
          The Collaborative Ecosystem
        </div>
        
        <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.85] mb-8">
          Stronger <br />
          <span className="text-[#d53f34] font-brittany lowercase text-6xl md:text-9xl block my-2">together.</span>
        </h2>
        
        <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed italic">
          &quot;Bridging local wisdom with global technology through a network of 
          trusted field partners across the continent.&quot;
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative group z-10">
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white dark:from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white dark:from-black to-transparent z-20 pointer-events-none" />

        <div className="flex border-y border-slate-100 dark:border-zinc-900/50 py-16 bg-white/50 dark:bg-zinc-900/10 backdrop-blur-md">
          <div ref={sliderRef} className="flex whitespace-nowrap">
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div key={index} className="flex items-center mx-16">
                <div className="flex items-center gap-8 group/item cursor-pointer">
                  
                  {/* Floating Icon Box */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 rounded-[2.5rem] bg-white dark:bg-zinc-800 shadow-2xl shadow-black/5 border border-slate-100 dark:border-zinc-700 flex items-center justify-center text-[#d53f34] group-hover/item:bg-[#d53f34] group-hover/item:text-white transition-all duration-500"
                  >
                    {partner.icon}
                  </motion.div>
                  
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-slate-200 dark:text-zinc-800 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-all duration-500 uppercase tracking-tighter">
                      {partner.name}
                    </span>
                    <div className="overflow-hidden h-4">
                       <span className="block text-[10px] font-black text-[#02557f] translate-y-full group-hover/item:translate-y-0 transition-transform duration-500 uppercase tracking-[0.4em]">
                        Certified Node
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-zinc-800 to-transparent" />
    </section>
  );
}