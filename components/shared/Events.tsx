"use client";

import { Calendar, MapPin, Users, ArrowRight, Sparkles, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const INITIATIVES = [
  {
    id: "init-001",
    title: "Digital Literacy Workshop",
    date: "March 15, 2026",
    location: "Dar es Salaam",
    image: "/images/impact-2.jpg",
    category: "Education",
    description: "Equipping local youth with essential coding and internet safety skills to bridge the digital divide."
  },
  {
    id: "init-002",
    title: "Rural Connectivity Summit",
    date: "April 02, 2026",
    location: "Arusha",
    image: "/images/slider.jpg",
    category: "Infrastructure",
    description: "Strategic planning for deploying mesh networks in underserved Tanzanian villages."
  },
  {
    id: "init-003",
    title: "Community Health Outreach",
    date: "April 18, 2026",
    location: "Mwanza",
    image: "/images/slider.jpg",
    category: "Infrastructure",
    description: "Providing essential health services and education in underserved communities."
  },
  {
    id: "init-004",
    title: "Digital Literacy Workshop",
    date: "May 10, 2026",
    location: "Dodoma",
    image: "/images/impact-1.jpg",
    category: "Education",
    description: "Empowering local youth with essential digital skills and internet safety knowledge."
  }
];

export default function EventsSection() {
  
  // Refocused logic: Joining a humanitarian movement
  const handleJoinInitiative = (initId: string) => {
    console.log(`User expressing interest in Humanitarian Initiative: ${initId}`);
    // Logic for volunteer sign-up or local coordination
  };

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-black overflow-hidden relative">
      
      {/* Decorative Branding Element */}
      <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
        <Sparkles size={600} className="text-[#d53f34]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
      <div className="flex flex-col items-start mb-24 gap-10">
  
  {/* Top Block: Label */}
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="text-[#d53f34] font-black tracking-[0.3em] uppercase text-[10px] flex items-center gap-3"
  >
    <span className="w-12 h-[2px] bg-[#d53f34]"></span>
    Active Field Operations
  </motion.div>
  
  {/* Middle Block: Main Title */}
  <div className="max-w-4xl">
    <h2 className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
      Humanitarian <br />
      <span className="text-[#d53f34] font-brittany lowercase block mt-2 text-7xl lg:text-9xl">
        Initiatives.
      </span>
    </h2>
  </div>

  {/* Bottom Block: Description & Link */}
  <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-8">
    <p className="max-w-md text-slate-500 dark:text-zinc-400 font-medium leading-relaxed text-lg">
      We deploy technology and resources to the frontlines, ensuring Tanzanian 
      communities have the connectivity they need for crisis response and education.
    </p>

    <Link 
      href="/initiatives" 
      className="group flex items-center justify-center gap-4 bg-zinc-900 dark:bg-white text-white dark:text-black px-12 py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:bg-[#d53f34] dark:hover:bg-[#d53f34] dark:hover:text-white shadow-xl active:scale-95 shrink-0"
    >
      Explore All Missions 
      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
    </Link>
  </div>
</div>

        {/* Initiatives Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {INITIATIVES.map((init, index) => (
            <motion.div 
              key={init.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row bg-slate-50 dark:bg-zinc-950 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-zinc-900 hover:border-[#d53f34]/30 transition-all duration-500"
            >
              
              {/* Image Section */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <Image 
                  src={init.image} 
                  unoptimized
                  fill
                  alt={init.title} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md text-slate-900 dark:text-white text-[9px] font-black px-4 py-2 rounded-xl uppercase tracking-widest">
                  {init.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                    <Calendar size={14} className="text-[#d53f34]" /> {init.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                    <MapPin size={14} className="text-[#d53f34]" /> {init.location}
                  </div>
                </div>

                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight uppercase tracking-tight group-hover:text-[#d53f34] transition-colors">
                  {init.title}
                </h4>
                
                <p className="text-slate-500 dark:text-zinc-400 leading-relaxed mb-8 text-sm font-medium">
                  {init.description}
                </p>

                {/* Join Movement Button */}
                <button 
                  onClick={() => handleJoinInitiative(init.id)}
                  className="mt-auto w-full flex items-center justify-center gap-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] group/btn hover:bg-[#d53f34] hover:border-[#d53f34] hover:text-white transition-all shadow-sm"
                >
                  <Users size={16} className="group-hover/btn:scale-110 transition-transform" />
                  Join This Initiative
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-20 p-10 lg:p-16 rounded-[4rem] bg-[#02557f] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
           <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23fff'/%3E%3C/svg%3E")` }} 
           />
           <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-white text-3xl lg:text-5xl font-black tracking-tighter mb-4">Cannot attend in person?</h3>
              <p className="text-white/70 font-medium max-w-xl">You can still fuel our humanitarian response by supporting the logistics of these field operations.</p>
           </div>
           <Link href="/donate" className="relative z-10 bg-white text-[#02557f] px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#d53f34] hover:text-white transition-all active:scale-95 flex items-center gap-3">
              <HeartHandshake size={20} />
              Support Effort
           </Link>
        </div>
      </div>
    </section>
  );
}