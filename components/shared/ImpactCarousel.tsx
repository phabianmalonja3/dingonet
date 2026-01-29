"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "/images/slider.jpg",
    tag: "Emergency Relief",
    title: "Connectivity in Crisis",
    description: "When disasters strike, we deploy rapid digital infrastructure to coordinate rescue and relief efforts in rural Tanzania.",
  },
  {
    id: 2,
    image: "/images/impact-2.jpg",
    tag: "Education",
    title: "Digital Dignity for Youth",
    description: "Bridging the gap for 10,000+ students by providing solar-powered internet hubs to underserved schools.",
  },
  {
    id: 3,
    image: "/impact-3.jpg",
    tag: "Community",
    title: "Building Resilience",
    description: "Empowering local leaders with the tools and training needed to lead their communities into a digital future.",
  },
];

export default function ImpactCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const slidePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(slideNext, 7000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "20%" : "-20%",
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "20%" : "-20%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[650px] lg:h-[850px] w-full bg-white overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* 1. CLEAR IMAGE: Opacity 100% and removed heavy dark overlays */}
          <div className="relative h-full w-full">
            <Image
              src={SLIDES[current].image}
              alt={SLIDES[current].title}
              fill
              className="object-cover transition-transform duration-[7000ms] scale-100 group-hover:scale-105"
              priority
            />
            {/* 2. SUBTLE GRADIENT: Only at the bottom to protect the text/buttons */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:to-transparent" />
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d53f34] text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg"
                >
                  <Heart size={12} className="fill-white" />
                  {SLIDES[current].tag}
                </motion.div>
                
                {/* 3. TEXT SHADOW: Added drop-shadow so white text pops on light areas of photos */}
                <motion.h2 
                  className="text-5xl py-6 font-brittany lg:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                >
                  {SLIDES[current].title}
                </motion.h2>

                <motion.p 
                  className="text-lg lg:text-2xl text-white/90 max-w-xl leading-relaxed font-medium drop-shadow-md"
                >
                  {SLIDES[current].description}
                </motion.p>

                <div className="flex items-center gap-6 pt-4">
                  <button className="group flex items-center gap-3 bg-[#d53f34] text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all shadow-2xl">
                    Our Mission
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* --- UI NAVIGATION (Glassmorphism) --- */}
      <div className="absolute bottom-12 right-12 z-20 flex items-center gap-3">
        <button 
          onClick={slidePrev}
          className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#d53f34] transition-all active:scale-95"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={slideNext}
          className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-[#d53f34] transition-all active:scale-95"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 w-full flex h-1 z-20">
        {SLIDES.map((_, i) => (
          <div key={i} className="flex-1 bg-white/20 relative overflow-hidden">
            {i === current && (
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="absolute inset-0 bg-[#d53f34]"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}