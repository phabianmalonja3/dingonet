"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Quote, ChevronLeft, ChevronRight, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "Through the digital literacy program, our women's group now manages our finances online and reaches customers across the country.",
    author: "Mama Sophia",
    role: "Chairperson, Community Women Group",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    quote: "Access to the internet has allowed our local clinic to consult with specialists in Dar es Salaam, saving lives in our village.",
    author: "Dr. Elias",
    role: "Lead Physician, Rural Health Center",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&h=600&auto=format&fit=crop",
  },
  {
    quote: "The students are now learning coding and global history. The digital gap is finally closing for our children.",
    author: "Mwalimu Bakari",
    role: "Headmaster, Secondary School",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&h=600&auto=format&fit=crop",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const contentRef = useRef(null);
  const bgTextRef = useRef(null);

  useEffect(() => {
    // 1. Content Transition
    gsap.fromTo(contentRef.current, 
      { opacity: 0, scale: 0.9, rotateY: 15 }, 
      { opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: "expo.out" }
    );

    // 2. Parallax Background Text effect
    gsap.to(bgTextRef.current, {
      xPercent: -10,
      scrollTrigger: {
        trigger: bgTextRef.current,
        scrub: 1,
      }
    });
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative py-32 bg-white dark:bg-black overflow-hidden perspective-1000">
      
      {/* Cinematic Background Text */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[15rem] font-black text-slate-100 dark:text-zinc-900/30 select-none pointer-events-none z-0 tracking-tighter"
      >
        REAL STORIES REAL IMPACT REAL PEOPLE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 font-brittany rounded-full bg-[#d53f34]/10 text-[#d53f34] text-xl font-black  tracking-[0.2em]">
            <Sparkles size={14} className="fill-[#d53f34]" /> 
            Voices of Change
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase leading-[0.9]">
            The Human <span className="text-[#d53f34]">Connection.</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            ref={contentRef} 
            className="grid lg:grid-cols-[1fr_1.5fr] gap-0 items-center bg-white dark:bg-zinc-900 rounded-[4rem] overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-2xl"
          >
            
            {/* Left: Visual Side */}
            <div className="relative h-[400px] lg:h-full min-h-[500px] group overflow-hidden">
              <Image 
                src={TESTIMONIALS[index].image} 
                alt={TESTIMONIALS[index].author}
                fill
                unoptimized
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#d53f34]/60 to-transparent mix-blend-multiply" />
              
              {/* Floating Role Tag */}
              <div className="absolute bottom-10 left-10 right-10 backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-3xl text-white">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Impact Focus</p>
                 <p className="text-lg font-bold leading-tight">{TESTIMONIALS[index].role}</p>
              </div>
            </div>

            {/* Right: Content Side */}
            <div className="p-10 lg:p-20 flex flex-col justify-center relative bg-slate-50 dark:bg-zinc-900/50">
              {/* Giant Watermark Quote */}
              <Quote size={120} className="absolute top-10 right-10 text-[#d53f34] opacity-5 pointer-events-none" fill="currentColor" />
              
              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#d53f34] mb-8" />
                
                <p className="font-serif italic text-2xl lg:text-4xl text-slate-800 dark:text-zinc-100 leading-[1.3] mb-12">
                  &quot;{TESTIMONIALS[index].quote}&quot;
                </p>

                <div className="flex items-center gap-6">
                  <div className="h-[2px] w-8 bg-slate-300 dark:bg-zinc-700" />
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      {TESTIMONIALS[index].author}
                    </h4>
                    <p className="text-[#d53f34] font-black text-[10px] uppercase tracking-[0.3em] mt-1">
                      Verified Story
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls inside the card */}
              <div className="flex items-center gap-4 mt-16">
                <button 
                  onClick={prev}
                  className="w-14 h-14 rounded-full flex items-center justify-center border border-slate-200 dark:border-zinc-800 text-slate-400 hover:bg-[#d53f34] hover:text-white hover:border-[#d53f34] transition-all active:scale-90"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={next}
                  className="w-14 h-14 rounded-full flex items-center justify-center bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-[#d53f34] transition-all active:scale-90 shadow-xl"
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="ml-auto flex gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-[#d53f34]" : "w-2 bg-slate-300 dark:bg-zinc-700"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}