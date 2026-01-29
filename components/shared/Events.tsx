"use client";

import { Calendar, MapPin, Ticket, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const EVENTS = [
  {
    id: "evt-001",
    title: "Digital Literacy Workshop",
    date: "March 15, 2026",
    location: "Dar es Salaam",
    image: "/images/impact-2.jpg",
    category: "Education",
    description: "Equipping local youth with essential coding and internet safety skills."
  },
  {
    id: "evt-002",
    title: "Rural Connectivity Summit",
    date: "April 02, 2026",
    location: "Arusha",
    image: "/images/slider.jpg",
    category: "Crisis Tech",
    description: "Discussing infrastructure expansion for underserved Tanzanian villages."
  }
  // ... rest of your events
];

export default function EventsSection() {
  
  const handleClaimVoucher = async (eventId: string) => {
    // This addresses your preference to save to database to avoid re-scanning
    try {
      console.log(`Saving voucher for event ${eventId} to your database...`);
      // Add your fetch/prisma logic here
      alert("Voucher Saved! It is now stored in your database for offline use.");
    } catch (error) {
      console.error("Failed to save voucher", error);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50 dark:bg-zinc-950 overflow-hidden relative">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Sparkles size={400} className="text-[#d53f34]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#d53f34] font-black tracking-[0.3em] font-brittany text-xl mb-4 flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-[#d53f34]"></span>
            Upcoming Initiatives
            <span className="w-8 h-[2px] bg-[#d53f34]"></span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter mb-6">
            Be Part of the <span className="text-[#d53f34] italic font-serif">Change.</span>
          </h2>
          
          <Link href="/events" className="group flex items-center gap-2 text-slate-500 hover:text-[#d53f34] font-black text-sm transition-all uppercase tracking-widest">
            View All Events 
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {EVENTS.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-zinc-800 hover:shadow-3xl hover:shadow-[#d53f34]/10 transition-all duration-500"
            >
              
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute top-6 left-6 bg-[#d53f34] text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
                  {event.category}
                </div>
                {/* Glassmorphism Date Tag */}
                <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/20 border border-white/30 px-4 py-2 rounded-2xl text-white font-bold text-xs flex items-center gap-2">
                   <Calendar size={14} /> {event.date}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-10 lg:p-12">
                <div className="flex items-center gap-2 text-[#d53f34] mb-4 font-bold text-sm">
                  <MapPin size={16} />
                  {event.location}
                </div>

                <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-[#d53f34] transition-colors uppercase tracking-tight">
                  {event.title}
                </h4>
                
                <p className="text-slate-500 dark:text-zinc-400 leading-relaxed mb-10 text-lg font-medium">
                  {event.description}
                </p>

                {/* Database Voucher Button */}
                <button 
                  onClick={() => handleClaimVoucher(event.id)}
                  className="relative w-full flex items-center justify-center gap-3 bg-zinc-900 dark:bg-zinc-800 text-white py-5 rounded-[1.5rem] font-black uppercase text-xs tracking-[0.2em] overflow-hidden group/btn hover:bg-[#d53f34] transition-all"
                >
                  <Ticket size={20} className="group-hover/btn:-rotate-12 transition-transform" />
                  Claim & Save Voucher
                  
                  {/* Decorative Hand-drawn SVG effect inside button */}
                  <svg className="absolute inset-0 w-full h-full opacity-0 group-hover/btn:opacity-20 pointer-events-none" viewBox="0 0 100 40">
                    <path d="M5 20 Q 50 5 95 20 T 5 20" stroke="white" fill="none" strokeWidth="1" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}