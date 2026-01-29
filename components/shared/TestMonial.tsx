"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    quote: "Through the digital literacy program, our women's group now manages our finances online and reaches customers across the country.",
    author: "Mama Sophia",
    role: "Chairperson, Community Women Group",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    quote: "Access to the internet has allowed our local clinic to consult with specialists in Dar es Salaam, saving lives in our village.",
    author: "Dr. Elias",
    role: "Lead Physician, Rural Health Center",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    quote: "The students are now learning coding and global history. The digital gap is finally closing for our children.",
    author: "Mwalimu Bakari",
    role: "Headmaster, Secondary School",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate the entire content block when index changes
    gsap.fromTo(containerRef.current, 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    );
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-slate-50 dark:bg-zinc-950 border-y border-slate-100 dark:border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          
          {/* Large Quote Icon Decoration */}
          <div className="absolute -top-12 -left-8 text-[#038ED3]/10">
            <Quote size={160} fill="currentColor" />
          </div>

          <div ref={containerRef} className="relative z-10 flex flex-col items-center text-center space-y-8">
            
            {/* 1. Profile Image with Animated Border */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#038ED3] to-cyan-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-zinc-900 overflow-hidden shadow-2xl">
                <Image 
                  src={TESTIMONIALS[index].image} 
                  alt={TESTIMONIALS[index].author}
                  width={60}
                  unoptimized
                  height={60}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 2. The Handwriting Quote */}
            <p className="font-script text-3xl md:text-5xl text-slate-800 dark:text-zinc-200 leading-tight px-4">
              &quot;{TESTIMONIALS[index].quote}&quot;
            </p>

            {/* 3. Author Info */}
            <div className="pt-4">
              <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                {TESTIMONIALS[index].author}
              </h4>
              <p className="text-[#038ED3] font-bold text-sm uppercase tracking-[0.2em] mt-2">
                {TESTIMONIALS[index].role}
              </p>
            </div>
          </div>

          {/* 4. Custom Controls */}
          <div className="flex justify-center items-center gap-8 mt-16">
            <button 
              onClick={prev}
              className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-[#038ED3] hover:border-[#038ED3] transition-all shadow-sm active:scale-90"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-[#038ED3]" : "w-2 bg-slate-300 dark:bg-zinc-700"}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-400 hover:text-[#038ED3] hover:border-[#038ED3] transition-all shadow-sm active:scale-90"
            >
              <ChevronRight size={28} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}