"use client";

import { motion } from "framer-motion";
import { Globe, Users, BookOpen, BarChart } from "lucide-react";

const MISSIONS = [
  {
    title: "Digital Inclusion",
    description: "Providing high-speed internet access to rural and underserved communities in Tanzania.",
    icon: <Globe className="text-[#038ED3]" size={28} />,
  },
  {
    title: "Community Literacy",
    description: "Training youth and adults in essential digital skills to compete in the modern economy.",
    icon: <BookOpen className="text-[#038ED3]" size={28} />,
  },
  {
    title: "Youth Empowerment",
    description: "Creating hubs where young innovators can access tools and mentorship to build local solutions.",
    icon: <Users className="text-[#038ED3]" size={28} />,
  },
  {
    title: "Impact Tracking",
    description: "Using data-driven approaches to ensure our resources reach those who need them most.",
    icon: <BarChart className="text-[#038ED3]" size={28} />,
  },
];

export default function Mission() {
  return (
    <section className="py-11 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl ">
          <h2 className="text-[#038ED3] font-bold tracking-widest uppercase text-sm mb-4">
            Our Core Pillars
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            How we are changing the landscape of <span className="text-[#038ED3]">Connectivity.</span>
          </h3>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MISSIONS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/30 hover:border-[#038ED3] transition-colors group"
            >
              <div className="mb-6 p-4 bg-white dark:bg-zinc-800 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h4>
              <p className="text-slate-500 dark:text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}