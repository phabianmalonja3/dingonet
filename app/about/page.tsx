"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { CheckCircle2, Users, Lightbulb, Target } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".animate-up", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <div ref={sectionRef} className="bg-white dark:bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <h1 className="animate-up text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Empowering Tanzania’s <span className="text-[#038ED3]">Digital Future.</span>
          </h1>
          <p className="animate-up text-xl text-slate-500 dark:text-zinc-400 leading-relaxed">
            Founded in 2024, Dingonet started with a simple observation: internet access isn&apos;t a luxury—it&apos;s a fundamental tool for education, health, and economic growth.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <Target className="text-[#038ED3]" />, title: "Our Mission", desc: "To provide high-speed, low-cost connectivity to rural communities." },
            { icon: <Users className="text-[#038ED3]" />, title: "Community First", desc: "We work directly with local leaders to ensure sustainable impact." },
            { icon: <Lightbulb className="text-[#038ED3]" />, title: "Innovation", desc: "Using mesh networking and solar power to reach off-grid areas." },
            { icon: <CheckCircle2 className="text-[#038ED3]" />, title: "Integrity", desc: "Transparent allocation of donor funds and resources." },
          ].map((item, i) => (
            <div key={i} className="animate-up p-8 rounded-[2.5rem] bg-slate-50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-slate-500 dark:text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Impact Section */}
        <div className="animate-up relative h-[500px] rounded-[3.5rem] overflow-hidden">
          <Image 
            src="/images/impact-2.jpg" 
            alt="Community Training" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
            <p className="text-white text-2xl font-medium max-w-xl">
              &quot;Technology is the bridge that allows our youth to compete on a global stage.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}