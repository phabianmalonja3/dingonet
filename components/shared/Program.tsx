"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Wifi, Users, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROGRAMS = [
  {
    title: "Digital Literacy",
    desc: "Teaching essential computer skills to youth and women to bridge the gap in the modern job market.",
    icon: <BookOpen size={32} />,
    tag: "Education"
  },
  {
    title: "Community WiFi",
    desc: "Deploying sustainable internet infrastructure to connect remote villages and schools.",
    icon: <Wifi size={32} />,
    tag: "Infrastructure"
  },
  {
    title: "Tech Mentorship",
    desc: "Connecting local talent with global experts to foster innovation and leadership in technology.",
    icon: <Users size={32} />,
    tag: "Empowerment"
  }
];

export default function HomePrograms() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal the Header (Blue box and text)
      gsap.from(".prog-reveal", {
        scrollTrigger: {
          trigger: ".prog-reveal",
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2
      });

      // 2. Complex Card Animation
      PROGRAMS.forEach((_, i) => {
        const card = `.card-${i}`;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        tl.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        })
        .from(`${card} .icon-box`, {
          scale: 0,
          rotation: -45,
          duration: 0.5,
          ease: "back.out(1.7)"
        }, "-=0.4")
        .from(`${card} .text-content`, {
          x: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4
        }, "-=0.2");
      });

      // 3. Hover Effect: Floating Animation
      gsap.to(".prog-card", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-block bg-[#038ED3] px-8 py-2 mb-6 prog-reveal">
            <h2 className="font-script text-4xl text-white tracking-wide">
              Our Core Programs
            </h2>
          </div>
          <p className="text-slate-500 dark:text-zinc-400 max-w-xl mx-auto text-lg prog-reveal">
            We focus on sustainable tech solutions that empower local communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((prog, i) => (
            <div 
              key={i} 
              className={`prog-card card-${i} group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800 hover:border-[#038ED3] transition-all duration-500`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="icon-box w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-[#038ED3] shadow-sm group-hover:bg-[#038ED3] group-hover:text-white transition-all duration-500">
                  {prog.icon}
                </div>
                <span className="text-content text-[10px] font-bold text-[#038ED3] uppercase tracking-[0.2em] bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  {prog.tag}
                </span>
              </div>

              <h3 className="text-content text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
                {prog.title}
              </h3>
              
              <p className="text-content text-slate-500 dark:text-zinc-400 leading-relaxed mb-6">
                {prog.desc}
              </p>

              <div className="text-content flex items-center gap-2 text-sm font-bold text-[#038ED3] cursor-pointer group-hover:gap-4 transition-all">
                LEARN MORE <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50/50 dark:bg-zinc-900/20">
          <p className="text-slate-600 dark:text-zinc-400 font-medium">
            Want to support our initiatives or partner with Dingonet?
          </p>
          <button className="bg-[#038ED3] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#038ED3]/20">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
}