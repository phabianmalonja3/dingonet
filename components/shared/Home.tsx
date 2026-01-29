"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion"; // For smooth text transitions
import {
  ArrowRight,
  Heart,
  ChevronLeft,
  ChevronRight,
  Globe,
  HandHeart,
} from "lucide-react";
import Mission from "@/components/shared/Mission";
import ClientsSection from "./Clients";
import TestimonialSection from "./TestMonial";
import HomePrograms from "./Program";
import EventsSection from "./Events";
import ImpactCarousel from "./ImpactCarousel";

// 1. Updated Data Structure for Sliders
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
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2 },
      ).fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=0.8",
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { clipPath: "inset(0 0 0 100%)", scale: 1.1 },
      {
        clipPath: "inset(0 0 0 0%)",
        scale: 1,
        duration: 1.2,
        ease: "expo.out",
      },
    );
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDE_DATA.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);

  return (
    <div className="bg-white dark:bg-black font-sans">
      <ImpactCarousel />
      <main
        ref={containerRef}
        className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#02557f]/10 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
          {/* Left Side Content */}
          <div ref={textRef} className="space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#02557f]/10 text-[#02557f] text-sm font-bold border border-[#02557f]/10">
              <Heart size={16} className="fill" />
              <span className="tracking-wide font-brittany">
                Empowering Communities through Technology
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] tracking-tight">
                Humanity <br />
                <br />
                <span className="text-[#d53f34] font-brittany">
                  In Every Connection
                </span>
              </h1>

              <p className="text-xl text-slate-500 dark:text-zinc-400 max-w-lg leading-relaxed">
                Dingonet is a humanitarian organization dedicated to providing
                essential relief and digital empowerment to vulnerable
                communities across Tanzania. We stand at the forefront of
                community response, ensuring no one is left behind in times of
                need.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-2">
              <Link
                href="/donate"
                className="group flex items-center gap-3 bg-[#02557f] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#0277b0] transition-all shadow-xl shadow-blue-500/20"
              >
                Support Our Mission
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/about"
                className="px-10 py-5 rounded-2xl border border-slate-200 dark:border-zinc-800 font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all flex items-center gap-2"
              >
                Learn More
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-100 dark:border-zinc-900">
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-[#02557f]">10k+</h3>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">
                  Impacted
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-[#02557f]">50+</h3>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">
                  Villages
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-[#02557f]">15+</h3>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">
                  Partners
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Impact Slider with Titles */}
          <div className="relative group lg:pl-10">
            <div className="relative h-[500px] lg:h-[650px] w-full overflow-hidden rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] bg-zinc-100 dark:bg-zinc-900">
              <div ref={imageRef} className="relative h-full w-full">
                <Image
                  src={SLIDE_DATA[index].src}
                  alt={SLIDE_DATA[index].title}
                  fill
                  className="object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  priority
                />

                {/* 2. Text Overlay for Slider */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12 pb-24">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-white text-3xl lg:text-4xl font-bold mb-2">
                        {SLIDE_DATA[index].title}
                      </h3>
                      <p className="text-white/70 text-base max-w-xs leading-snug">
                        {SLIDE_DATA[index].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="absolute bottom-10 right-10 flex gap-4 z-20">
                <button
                  onClick={prevSlide}
                  className="p-5 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl hover:bg-[#02557f] hover:text-white transition-all shadow-xl"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-5 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl hover:bg-[#02557f] hover:text-white transition-all shadow-xl"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Status Indicators */}
              <div className="absolute bottom-12 left-12 flex gap-3 z-20">
                {SLIDE_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === index ? "w-12 bg-[#02557f]" : "w-3 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-[2.5rem] shadow-2xl hidden lg:flex flex-col items-center justify-center border border-slate-50 dark:border-zinc-800 z-30">
              <div className="relative">
                {/* Pulse effect to draw attention to the humanitarian mission */}
                <span className="absolute inset-0 rounded-full bg-[#d53f34]/20 animate-ping"></span>
                <div className="relative bg-[#d53f34]/10 p-3 rounded-2xl">
                  <HandHeart size={40} className="text-[#d53f34]" />
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Humanitarian
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#d53f34]">
                  Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Other Sections */}
      <div className="py-24 lg:py-32 border-t border-slate-50 dark:border-zinc-900">
        <Mission />
      </div>
      <HomePrograms />
      <EventsSection />
      <ClientsSection />
      <div className="py-24 lg:py-32 border-t border-slate-50 dark:border-zinc-900">
        <TestimonialSection />
      </div>
    </div>
  );
}
