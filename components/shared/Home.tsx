"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Heart,
  ChevronLeft,
  ChevronRight,
  HandHeart,
} from "lucide-react";

// Components
import Mission from "@/components/shared/Mission";
import ClientsSection from "./Clients";
import TestimonialSection from "./TestMonial";
import HomePrograms from "./Program";
import EventsSection from "./Events";
import ImpactCarousel from "./ImpactCarousel";

const SLIDE_DATA = [
  {
    src: "/images/slider.jpg",
    title: "Digital Inclusion",
    description: "Bringing high-speed connectivity to rural learning centers.",
  },
  {
    src: "/images/impact-2.jpg",
    title: "Local Empowerment",
    description: "Training the next generation of Tanzanian tech leaders.",
  },
  {
    src: "/images/rescue-pic.jpg",
    title: "Future Ready",
    description: "Sustainable infrastructure for a connected community.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      tl.fromTo(textRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2 }
      ).fromTo(imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=0.8"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Slide Transition Animation (Clip Path)
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { clipPath: "inset(0 0 0 100%)" },
        { clipPath: "inset(0 0 0 0%)", duration: 1.2, ease: "expo.out" }
      );
    }
    const timer = setInterval(() => nextSlide(), 8000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDE_DATA.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);

  return (
    <div className="bg-white dark:bg-black font-sans overflow-x-hidden">
      <ImpactCarousel />
      
      <main ref={containerRef} className="relative min-h-[95vh] flex items-center pt-28 pb-16 lg:pt-20 lg:pb-20">
        
        {/* Soft Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#02557f]/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
          
          {/* Left Side Content */}
          <div ref={textRef} className="space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#02557f]/10 text-[#02557f] text-sm font-bold border border-[#02557f]/10">
              <Heart size={16} className="fill-[#02557f]" />
              <span className="tracking-wide font-brittany text-lg">
                Empowering Communities through Technology
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl lg:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[0.9] tracking-tight">
                Humanity <br />
                <span className="text-[#d53f34] font-brittany block mt-4 lowercase">
                  In Every Connection
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-500 dark:text-zinc-400 max-w-lg leading-relaxed pt-4">
                Dingonet is a humanitarian organization dedicated to providing
                essential relief and digital empowerment to vulnerable
                communities across Tanzania.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/donate"
                className="group flex items-center gap-3 bg-[#d53f34] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#d53f34] transition-all shadow-xl shadow-[#02557f]/20 active:scale-95"
              >
                Support Our Mission
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-10 py-5 rounded-2xl border-2 border-slate-100 dark:border-zinc-800 font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all flex items-center gap-2"
              >
                Learn More
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-100 dark:border-zinc-900">
              {[
                { label: "Impacted", val: "10k+" },
                { label: "Villages", val: "50+" },
                { label: "Partners", val: "15+" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="text-3xl font-black text-[#02557f] dark:text-[#038ED3]">{stat.val}</h3>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Slider */}
          <div className="relative group lg:pl-10">
            <div className="relative h-[500px] lg:h-[680px] w-full overflow-hidden rounded-[3.5rem] shadow-2xl bg-zinc-100 dark:bg-zinc-900 border-[10px] border-white dark:border-zinc-950">
              <div ref={imageRef} className="relative h-full w-full">
                <Image
                  src={SLIDE_DATA[index].src}
                  alt={SLIDE_DATA[index].title}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                  priority
                />

                {/* Overlay with Framer Motion Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-14 pb-20 lg:pb-28">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "circOut" }}
                    >
                      <h3 className="text-white text-3xl lg:text-5xl font-black mb-3 uppercase tracking-tighter">
                        {SLIDE_DATA[index].title}
                      </h3>
                      <p className="text-white/80 text-base lg:text-lg max-w-xs leading-snug font-medium">
                        {SLIDE_DATA[index].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                <button onClick={prevSlide} className="p-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl hover:bg-[#d53f34] transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl hover:bg-[#d53f34] transition-all">
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-10 left-10 flex gap-2 z-20">
                {SLIDE_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === index ? "w-10 bg-[#d53f34]" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Humanitarian Response Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-[2.5rem] shadow-2xl hidden lg:flex flex-col items-center justify-center border border-slate-50 dark:border-zinc-800 z-30">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-[#d53f34]/20 animate-ping"></span>
                <div className="relative bg-[#d53f34]/10 p-3 rounded-2xl">
                  <HandHeart size={40} className="text-[#d53f34]" />
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Humanitarian</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#d53f34]">Response</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sections Sequence */}
      <Mission />
      <HomePrograms />
      <EventsSection />
      <ClientsSection />
      <TestimonialSection />
    </div>
  );
}