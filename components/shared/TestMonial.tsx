"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Quote, ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "Our women's group now manages finances online and reaches customers across the country.",
    author: "Mama Sophia",
    role: "Chairperson",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    quote: "Access to the internet has allowed our clinic to consult with specialists, saving lives.",
    author: "Dr. Elias",
    role: "Lead Physician",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

export default function CompactTestimonials() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const bgShapeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance & Switch Animation
      gsap.fromTo(cardRef.current, 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );

      // 2. Slow rotation for the humanitarian hub SVG
      if (bgShapeRef.current) {
        gsap.to(bgShapeRef.current, {
          rotate: 360,
          duration: 80,
          repeat: -1,
          ease: "none",
        });
      }
    });
    return () => ctx.revert();
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-16 bg-white dark:bg-black overflow-hidden relative">
      
      {/* BACKGROUND SVG: Coherent with Operational Ecosystem component */}
   {/* HUMAN CONNECTION NETWORK: Coherent with Humanitarian Mission */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] dark:opacity-[0.2] pointer-events-none z-0">
  <svg 
    ref={bgShapeRef}
    width="800" 
    height="800" 
    viewBox="0 0 100 100" 
    stroke="#d53f34" 
    fill="none" 
    strokeWidth="0.15"
  >
    {/* Organic Connection Paths */}
    <path d="M10 50 Q 30 10 50 50 T 90 50" strokeDasharray="2 2" />
    <path d="M20 20 Q 50 80 80 20" opacity="0.5" />
    <path d="M20 80 Q 50 20 80 80" opacity="0.5" />

    {/* Community Nodes (People/Villages) */}
    <g className="community-nodes">
      <circle cx="10" cy="50" r="1.5" fill="#d53f34" />
      <circle cx="50" cy="50" r="2.5" strokeWidth="0.5" /> {/* The Hub */}
      <circle cx="90" cy="50" r="1.5" fill="#d53f34" />
      <circle cx="50" cy="15" r="1" fill="#02557f" />
      <circle cx="50" cy="85" r="1" fill="#02557f" />
      
      {/* Decorative pulse on the main hub */}
      <circle cx="50" cy="50" r="4" stroke="#d53f34" opacity="0.3">
        <animate attributeName="r" from="4" to="8" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Data Flow Particles (Tiny dots along paths) */}
    <circle r="0.5" fill="#d53f34">
      <animateMotion dur="10s" repeatCount="indefinite" path="M10 50 Q 30 10 50 50 T 90 50" />
    </circle>
  </svg>
</div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#d53f34] text-[10px] font-black uppercase tracking-[0.3em]">
              <Sparkles size={12} className="animate-pulse" /> Ground Intel
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              The Human <span className="text-[#02557f] italic font-serif lowercase">Impact.</span>
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex gap-2">
            <button onClick={prev} className="p-3 rounded-2xl border border-slate-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-[#d53f34] transition-all active:scale-90 shadow-sm">
              <ChevronLeft size={20} className="text-slate-400" />
            </button>
            <button onClick={next} className="p-3 rounded-2xl bg-[#02557f] text-white hover:bg-[#d53f34] transition-all active:scale-90 shadow-lg shadow-[#02557f]/20">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div ref={cardRef} className="bg-white dark:bg-zinc-900/80 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-zinc-800 shadow-xl relative overflow-hidden">
          
          {/* Subtle Corner Accents (Targeting Brackets) */}
          <div className="absolute top-6 right-6 opacity-20">
             <div className="w-8 h-8 border-t-2 border-r-2 border-[#d53f34] rounded-tr-xl" />
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            
            {/* Visual Identity Block */}
            <div className="relative shrink-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image 
                  src={TESTIMONIALS[index].image} 
                  alt={TESTIMONIALS[index].author}
                  unoptimized
                  fill
                  className="object-cover rounded-[2rem] z-10"
                />
                {/* Decorative pulse ring */}
                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-[#d53f34]/20 animate-ping" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#d53f34] p-2 rounded-xl text-white shadow-lg z-20">
                <Heart size={14} fill="currentColor" />
              </div>
            </div>

            {/* Narrative Block */}
            <div className="flex-grow">
              <Quote size={40} className="text-[#d53f34] opacity-10 mb-4" fill="currentColor" />
              
              <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-zinc-100 leading-relaxed mb-8">
                &quot;{TESTIMONIALS[index].quote}&quot;
              </p>
              
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                  {TESTIMONIALS[index].author}
                </h4>
                <div className="flex items-center gap-3">
                   <div className="w-4 h-[1px] bg-[#d53f34]" />
                   <p className="text-[10px] font-black text-[#02557f] uppercase tracking-[0.2em]">
                    {TESTIMONIALS[index].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}