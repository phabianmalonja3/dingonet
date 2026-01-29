"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { School, Activity, Users2, Landmark, HeartHandshake, Baby, Sparkles } from "lucide-react";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Entrance
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        });
      }

      // 2. Seamless Marquee Logic
      const slider = sliderRef.current;
      if (slider) {
        // Calculate half width for the loop
        const loop = gsap.to(slider, {
          xPercent: -50,
          ease: "none",
          duration: 25, // Slower, more cinematic speed
          repeat: -1,
        });

        // Smooth speed control on hover
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
    <section ref={containerRef} className="py-24 bg-white dark:bg-black overflow-hidden relative">
      
      {/* Background Decorative "Stamps" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-zinc-800 to-transparent" />

      <div className="container mx-auto px-6 mb-20 text-center" ref={headerRef}>
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#d53f34]/10 text-[#d53f34] text-[10px] font-black uppercase tracking-[0.2em]">
          <Sparkles size={14} className="fill-[#d53f34]" /> 
          Our Ecosystem
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none mb-6">
          Impact <span className="text-[#d53f34]">Together.</span>
        </h2>
        <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto text-lg font-medium leading-relaxed">
          Connecting local wisdom with digital infrastructure through our trusted community partners.
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative group">
        {/* Side Fades for the Cinematic Look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        <div className="flex border-y border-slate-100 dark:border-zinc-900/50 py-12 bg-slate-50/30 dark:bg-zinc-900/10 backdrop-blur-sm">
          <div ref={sliderRef} className="flex whitespace-nowrap">
            {/* Double the array for seamless loop */}
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <div key={index} className="flex items-center mx-12">
                <div className="flex items-center gap-6 group/item cursor-pointer">
                  {/* Icon Container with Doodle Effect */}
                  <div className="w-20 h-20 rounded-[2.5rem] bg-white dark:bg-zinc-800 shadow-xl shadow-black/5 border border-slate-100 dark:border-zinc-700 flex items-center justify-center text-[#d53f34] group-hover/item:bg-[#d53f34] group-hover/item:text-white transition-all duration-500 transform group-hover/item:rotate-6 group-hover/item:scale-110">
                    {partner.icon}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-slate-300 dark:text-zinc-800 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-all duration-500 uppercase tracking-tighter">
                      {partner.name}
                    </span>
                    <div className="overflow-hidden">
                       <span className="block text-[9px] font-black text-[#d53f34] translate-y-full group-hover/item:translate-y-0 transition-transform duration-300 uppercase tracking-[0.3em]">
                        Active Partner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-zinc-800 to-transparent" />
    </section>
  );
}