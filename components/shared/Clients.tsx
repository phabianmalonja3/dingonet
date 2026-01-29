"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { School, Activity, Users2, Landmark, HeartHandshake, Baby } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// NGO-specific partners with icons for guaranteed visibility
const PARTNERS = [
  { name: "Public Schools", icon: <School size={32} />, id: 1 },
  { name: "Rural Clinics", icon: <Activity size={32} />, id: 2 },
  { name: "Youth Centers", icon: <Users2 size={32} />, id: 3 },
  { name: "Local Councils", icon: <Landmark size={32} />, id: 4 },
  { name: "Orphanages", icon: <Baby size={32} />, id: 5 },
  { name: "Women Groups", icon: <HeartHandshake size={32} />, id: 6 },
];

export default function ClientsSection() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation for the text
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // 2. GSAP Infinite Sliding Loop
      const slider = sliderRef.current;
      const loop = gsap.to(slider, {
        xPercent: -50, // Moves halfway through the duplicated array
        ease: "none",
        duration: 20, // Speed of the slide (lower = faster)
        repeat: -1,
      });

      // 3. Hover Interactions: Stops sliding when you want to read/see a partner
      slider?.addEventListener("mouseenter", () => gsap.to(loop, { timeScale: 0, duration: 0.5 }));
      slider?.addEventListener("mouseleave", () => gsap.to(loop, { timeScale: 1, duration: 0.5 }));

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className=" bg-white dark:bg-black overflow-hidden border-t border-slate-100 dark:border-zinc-900">
      <div className="container mx-auto px-6 mb-16 text-center" ref={headerRef}>
        
        {/* Your requested box-heading style with font-script */}
        <div className="inline-block bg-[#038ED3] px-8 py-2 mb-6">
          <h2 className="font-script text-4xl text-white tracking-wide">
            Our Impact Partners
          </h2>
        </div>
        
        <p className="text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
          We collaborate with community leaders and institutions to bring 
          digital opportunities to the heart of Tanzania.
        </p>
      </div>

      {/* The Sliding Track */}
      <div className="relative flex border-y border-slate-100 dark:border-zinc-900 py-16 bg-slate-50/50 dark:bg-zinc-900/20">
        <div ref={sliderRef} className="flex whitespace-nowrap">
          {/* Mapping twice for seamless loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center mx-16"
            >
              <div className="flex items-center gap-6 group cursor-default">
                {/* Visual Icon Box - Guarantees you see "something" even without images */}
                <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-zinc-800 shadow-xl shadow-[#038ED3]/5 border border-slate-100 dark:border-zinc-700 flex items-center justify-center text-[#038ED3] group-hover:bg-[#038ED3] group-hover:text-white transition-all duration-500 transform group-hover:-rotate-12 group-hover:scale-110">
                  {partner.icon}
                </div>
                
                {/* Partner Name with custom styling */}
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-bold text-[#038ED3] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.2em]">
                    Community Impact
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}