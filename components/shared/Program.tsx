"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, Heart, Zap, ArrowRight, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROGRAMS = [
  {
    title: "Emergency Tech",
    desc: "Deploying rapid response communication hubs to crisis zones within 24 hours.",
    icon: <ShieldAlert size={32} />,
    tag: "Response",
  },
  {
    title: "Digital Dignity",
    desc: "Providing solar-powered connectivity to schools and clinics in remote Tanzania.",
    icon: <Heart size={32} />,
    tag: "Social",
  },
  {
    title: "Skills Transfer",
    desc: "Mentoring local youth to maintain and build their own community infrastructures.",
    icon: <Zap size={32} />,
    tag: "Growth",
  }
];

export default function HomePrograms() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We use a context to ensure animations are scoped to this component
    let ctx = gsap.context(() => {
      
      // 1. Header Entrance
      gsap.from(".header-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".header-reveal",
          start: "top 95%",
        }
      });

      // 2. Programs Grid Entrance
      // We target the individual cards using their index-based classes
      PROGRAMS.forEach((_, i) => {
        gsap.from(`.prog-card-${i}`, {
          scrollTrigger: {
            trigger: `.prog-card-${i}`,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "back.out(1.2)",
          delay: i * 0.1 // Staggering effect
        });
      });

      // 3. Constant Floating Animation
      gsap.to(".floating-card", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.3, from: "random" }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 lg:py-32 bg-white dark:bg-black overflow-hidden min-h-[600px]"
    >
      {/* Background Hand-Drawn Spiral */}
      <div className="absolute -top-10 -left-10 opacity-10 dark:opacity-20 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" stroke="#d53f34" fill="none" strokeWidth="1">
          <path d="M50 50c-10 0-15-10-10-20s20-10 30 0 10 30-10 40-40 0-40-30 30-40 50-20" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="header-reveal inline-flex items-center gap-2 mb-6 px-4 py-1.5 font-brittany text-xl rounded-full bg-[#d53f34]/10 text-[#d53f34]  font-black  tracking-[0.2em]">
            <Sparkles size={14} className="fill-[#d53f34] font-brittany" /> 
            Humanity in Tech
          </div>
          <h2 className="header-reveal text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-tight">
            Our Impact <span className="text-[#d53f34]">Programs.</span>
          </h2>
          <p className="header-reveal text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg lg:text-xl font-medium">
            Bridging the gap for 10,000+ citizens through resilient infrastructure and digital empowerment.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((prog, i) => (
            <div 
              key={i} 
              className={`floating-card prog-card-${i} group relative p-10 rounded-[3rem] bg-slate-50/50 dark:bg-zinc-900/40 border border-slate-100 dark:border-zinc-800/50 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-2xl transition-all duration-500`}
            >
              <div className="flex flex-col h-full relative z-10">
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-[#d53f34] shadow-lg mb-8 group-hover:bg-[#d53f34] group-hover:text-white transition-colors">
                  {prog.icon}
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-black text-[#d53f34] uppercase tracking-widest bg-[#d53f34]/10 px-3 py-1 rounded-full">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
                  {prog.title}
                </h3>
                
                <p className="text-slate-500 dark:text-zinc-400 leading-relaxed mb-10 font-medium">
                  {prog.desc}
                </p>

                <div className="mt-auto flex items-center gap-3 text-sm font-black text-[#d53f34] group-hover:gap-5 transition-all cursor-pointer uppercase tracking-widest">
                  Discover Impact <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}