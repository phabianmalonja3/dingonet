"use client";

import { Calendar, MapPin, Ticket, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    category: "Technology",
    description: "Discussing infrastructure expansion for underserved Tanzanian villages."
  },
  {
    id: "evt-003",
    title: "Community Tech Grant",
    date: "May 10, 2026",
    location: "Mwanza",
    image: "/images/impact-2.jpg",
    category: "Funding",
    description: "Providing small grants to local entrepreneurs using tech for social good."
  },
  {
    id: "evt-004",
    title: "E-Waste Recycling Drive",
    date: "June 22, 2026",
    location: "Dodoma",
    image: "/images/slider.jpg",
    category: "Environment",
    description: "Safe disposal and recycling of old electronics to protect our land."
  }
];

export default function EventsSection() {
  
  const handleClaimVoucher = async (eventId: string) => {
    // Logic to save to database as per your requirement
    console.log(`Saving voucher for event ${eventId} to database...`);
    alert("Voucher saved! You can now access this offline from your dashboard.");
  };

  return (
    <section className="py-24 lg:py-32 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        
        {/* Centered Section Header */}

        
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="text-[#038ED3] font-bold tracking-widest uppercase text-sm">Upcoming Impact</h2>
          
          <div className="inline-block bg-[#038ED3] px-8 py-2 mb-6">
          <h2 className="font-script text-4xl text-white tracking-wide">
          Latest Events & Initiatives
          </h2>
        </div>
         
          <Link href="/events" className="group flex items-center gap-2 text-slate-600 dark:text-zinc-400 font-bold hover:text-[#038ED3] transition-colors mt-2">
            View All Events 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {EVENTS.map((event) => (
  <div key={event.id} className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500">
    
    {/* 1. Wrap Image in Link for better UX */}
    <Link href={`/events/${event.id}`} className="block relative h-64 overflow-hidden">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#038ED3] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] z-10">
        {event.category}
      </div>
    </Link>

    {/* Centered Content Body */}
    <div className="p-8 lg:p-12 flex flex-col items-center text-center">
      
      {/* Centered Meta Info */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-zinc-400 mb-6">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-[#038ED3]" />
          {event.date}
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-[#038ED3]" />
          {event.location}
        </div>
      </div>

      {/* 2. Wrap Title in Link */}
      <Link href={`/events/${event.id}`}>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 hover:text-[#038ED3] transition-colors cursor-pointer">
          {event.title}
        </h4>
      </Link>
      
      <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-md">
        {event.description}
      </p>

      {/* Button stays for the direct action (Database Voucher) */}
      <button 
        onClick={() => handleClaimVoucher(event.id)}
        className="w-full max-w-xs flex items-center justify-center gap-3 bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white py-4 rounded-2xl font-bold hover:bg-[#038ED3] hover:text-white transition-all group/btn shadow-sm"
      >
        <Ticket size={20} className="group-hover/btn:rotate-12 transition-transform" />
        Claim Event Voucher
      </button>

      {/* 3. Optional: Added "View Details" text link for clarity */}
      <Link 
        href={`/events/${event.id}`} 
        className="mt-6 text-sm font-bold text-[#038ED3] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        View Event Details <ArrowRight size={14} />
      </Link>
    </div>
  </div>
))}
        </div>
      </div>
    </section>
  );
}