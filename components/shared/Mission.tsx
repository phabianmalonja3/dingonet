"use client";

import { Heart, ShieldAlert, Zap, Users2 } from "lucide-react";
import { motion } from 'motion/react';

const PILLARS = [
  {
    title: "Emergency Response",
    description: "Rapid deployment of communication infrastructure to coordinate life-saving relief in crisis zones.",
    icon: <ShieldAlert className="text-[#d53f34]" size={28} />,
  },
  {
    title: "Digital Dignity",
    description: "Restoring hope by providing underserved communities with the digital tools needed for a better future.",
    icon: <Heart className="text-[#d53f34]" size={28} />,
  },
  {
    title: "Community Resilience",
    description: "Empowering local populations with skills and technology to withstand future humanitarian challenges.",
    icon: <Zap className="text-[#d53f34]" size={28} />,
  },
  {
    title: "Humanitarian Support",
    description: "Creating a network of mentorship and technical aid for Tanzania's most vulnerable innovators.",
    icon: <Users2 className="text-[#d53f34]" size={28} />,
  },
];

export default function Mission() {
  return (
    <section className="relative py-24 bg-white dark:bg-black overflow-hidden">
      
      {/* --- DOODLE BACKGROUND ELEMENTS --- */}
      <div className="absolute top-10 right-10 opacity-20 dark:opacity-40 animate-pulse pointer-events-none">
         <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#d53f34" strokeWidth="3">
            <path d="M50 50c-10 0-15-10-10-20s20-10 30 0 10 30-10 40-40 0-40-30 30-40 50-20" />
         </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#d53f34] font-black tracking-[0.2em] uppercase text-xs mb-4"
          >
            Our Humanitarian Mandate
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight"
          >
            Humanity through <span className="text-[#d53f34] italic font-brittany lowercase">Action.</span>
          </motion.h3>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group relative p-8 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-2xl hover:shadow-[#d53f34]/10 transition-all"
            >
              {/* Icon Container */}
              <div className="mb-8 p-5 bg-white dark:bg-zinc-900 rounded-2xl w-fit shadow-md group-hover:bg-[#d53f34] transition-colors duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>

              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                {item.title}
              </h4>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Decorative "Doodle" Dot */}
              <div className="absolute top-6 right-8 w-2 h-2 rounded-full bg-[#d53f34]/20 group-hover:scale-[3] transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}