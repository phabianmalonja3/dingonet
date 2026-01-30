"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, Zap, Heart } from "lucide-react";
import Mission from "@/components/shared/Mission";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
              BEYOND <br />
              <span className="text-[#d53f34] font-brittany lowercase block mt-2 text-7xl lg:text-9xl">
                The Connection.
              </span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-zinc-400 leading-relaxed font-medium max-w-lg">
              Founded in Tanzania, Dingonet was born from a simple realization: 
              in the modern age, digital access is a human right, and humanitarian 
              aid must evolve to include digital empowerment.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-[4rem] overflow-hidden border-[12px] border-slate-50 dark:border-zinc-900 shadow-2xl"
          >
            <Image 
              src="/images/rescue-pic.jpg" 
              alt="Dingonet Field Work" 
              fill 
              className="object-cover grayscale-[20%]"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats/Values Grid */}
      <section className="py-24 bg-slate-50 dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="text-[#02557f]" />, title: "100% Local", desc: "Operations run by Tanzanians for Tanzanian communities." },
              { icon: <Zap className="text-[#d53f34]" />, title: "Rapid Response", desc: "Deploying tech relief within 48 hours of crisis." },
              { icon: <Users className="text-[#02557f]" />, title: "Community Led", desc: "We listen to village elders before we build." },
              { icon: <ShieldCheck className="text-[#d53f34]" />, title: "Sustainable", desc: "Long-term infrastructure, not just temporary fixes." },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-zinc-800">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Mission />

      {/* Call to Action */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex p-4 rounded-3xl bg-[#d53f34]/10 mb-8">
            <Heart className="text-[#d53f34] fill-[#d53f34]" size={40} />
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">
            Ready to fuel <br /> our next <span className="text-[#02557f] italic font-serif">mission?</span>
          </h2>
          <button className="bg-[#d53f34] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-[#d53f34]/20">
            Join the movement
          </button>
        </div>
      </section>
    </div>
  );
}