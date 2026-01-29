"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, Heart, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import Mission from "@/components/shared/Mission";
import ClientsSection from "./Clients";
import TestimonialSection from "./TestMonial";
import HomePrograms from "./Program";
import EventsSection from "./Events";


const SLIDE_IMAGES = [
  "/images/slider.jpg", 
  "/images/impact-2.jpg", 
  "/impact-3.jpg",
];


export default function Hero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(textRef.current, 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2 }
      ).fromTo(imageRef.current, 
        { scale: 1.2, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.5 }, 
        "-=0.8"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { clipPath: "inset(0 0 0 100%)", scale: 1.1 },
      { clipPath: "inset(0 0 0 0%)", scale: 1, duration: 1.2, ease: "expo.out" }
    );
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);

  return (
    <div className="bg-white dark:bg-black font-sans">
      {/* 1. HERO SECTION - Added responsive padding and standardized gaps */}
      <main ref={containerRef} className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        
        {/* NGO Theme Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#038ED3]/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
          
          {/* Left Side: NGO Mission Content */}
          <div ref={textRef} className="space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#038ED3]/10 text-[#038ED3] text-sm font-bold border border-[#038ED3]/10">
              <Heart size={16} className="fill-[#038ED3]" />
              <span className="tracking-wide">Empowering Communities through Technology</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black  text-slate-900 dark:text-white leading-[0.95] tracking-tight">
                Bridging the <br /><br />
                <span className="text-[#038ED3] font-brittany">Digital Divide</span>
              </h1>

              <p className="text-xl text-slate-500 dark:text-zinc-400 max-w-lg leading-relaxed">
                Dingonet is a non-profit dedicated to providing affordable internet 
                access and digital skills to underserved communities across Tanzania. 
                Together, we create opportunities for a brighter future.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 pt-2">
              <Link 
                href="/donate" 
                className="group flex items-center gap-3 bg-[#038ED3] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#0277b0] transition-all shadow-xl shadow-blue-500/20"
              >
                Support Our Mission
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="px-10 py-5 rounded-2xl border border-slate-200 dark:border-zinc-800 font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all flex items-center gap-2"
              >
                Learn More
              </Link>
            </div>

            {/* NGO Statistics - Added padding-top for breathing room */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-100 dark:border-zinc-900">
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-[#038ED3]">10k+</h3>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Impacted</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-[#038ED3]">50+</h3>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Villages</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-[#038ED3]">15+</h3>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Partners</p>
              </div>
            </div>
          </div>

          {/* Right Side: Impact Slider */}
          <div className="relative group lg:pl-10">
            <div className="relative h-[500px] lg:h-[650px] w-full overflow-hidden rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] bg-zinc-100 dark:bg-zinc-900">
              <div ref={imageRef} className="relative h-full w-full">
                <Image
                  src={SLIDE_IMAGES[index]}
                  alt={`Dingonet Impact ${index + 1}`}
                  fill
                  className="object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>

              {/* Slider Controls - Balanced positioning */}
              <div className="absolute bottom-10 right-10 flex gap-4">
                <button 
                  onClick={prevSlide}
                  className="p-5 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl hover:bg-[#038ED3] hover:text-white transition-all shadow-xl"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-5 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-2xl hover:bg-[#038ED3] hover:text-white transition-all shadow-xl"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Status Indicators */}
              <div className="absolute bottom-12 left-12 flex gap-3">
                {SLIDE_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === index ? "w-12 bg-[#038ED3]" : "w-3 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* NGO Float Badge - Adjusted Offset */}
            <div className="absolute -top-6 -left-6 bg-white dark:bg-zinc-900 p-7 rounded-[2.5rem] shadow-2xl hidden lg:flex items-center justify-center border border-slate-50 dark:border-zinc-800">
               <Globe size={40} className="text-[#038ED3] animate-spin-slow" />
            </div>
          </div>
        </div>
      </main>

      {/* 2. MISSION SECTION - Wrapped in a container with vertical padding */}
      <div className="py-24 lg:py-32 border-t border-slate-50 dark:border-zinc-900">
        <Mission />
      </div>



      <HomePrograms />
<EventsSection />

      {/* 3. CLIENTS & TESTIMONIALS SECTION */} 
      {/* <div className="py-24 lg:py-32 border-t border-slate-50 dark:border-zinc-900"> */}
        <ClientsSection />
      {/* </div> */}
      <div className="py-24 lg:py-32 border-t border-slate-50 dark:border-zinc-900">
        <TestimonialSection />
      </div>
    </div>
  );
}