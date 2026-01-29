"use client";

import { Calendar, MapPin, Ticket, Clock, Share2, ChevronLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sample Data (In a real app, you'd fetch this based on params.id)
const CURRENT_EVENT = {
  id: "evt-001",
  title: "Digital Literacy Workshop",
  date: "March 15, 2026",
  time: "09:00 AM - 04:00 PM",
  location: "Dar es Salaam, Tanzania",
  category: "Education",
  image: "/images/impact-2.jpg",
  description: "Our Digital Literacy Workshop is designed to empower the youth of Dar es Salaam with the tools they need to navigate the digital world safely and effectively. Participants will learn basic coding, internet safety, and how to leverage online resources for entrepreneurship.",
  organizer: "Dingonet Tech Team"
};

const RELATED_EVENTS = [
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
  }
];

export default function EventPage() {
  
  const handleClaimVoucher = async () => {
    // Database logic to prevent re-scanning
    console.log("Saving voucher to database...");
    alert("Voucher saved successfully to your database!");
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/events" className="flex items-center gap-2 text-slate-500 hover:text-[#038ED3] transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
          <ChevronLeft size={20} /> Back to Events
        </Link>

        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
            <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-[3rem] shadow-2xl">
              <Image 
                src={CURRENT_EVENT.image} 
                alt={CURRENT_EVENT.title} 
                fill 
                className="object-cover" 
              />
              <div className="absolute top-8 left-8 bg-[#038ED3] text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
                {CURRENT_EVENT.category}
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                {CURRENT_EVENT.title}
              </h1>
              
              <div className="flex flex-wrap gap-8 py-6 border-y border-slate-100 dark:border-zinc-900">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 dark:bg-zinc-900 rounded-2xl text-[#038ED3]">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Date</p>
                    <p className="font-bold text-slate-800 dark:text-zinc-200">{CURRENT_EVENT.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 dark:bg-zinc-900 rounded-2xl text-[#038ED3]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Time</p>
                    <p className="font-bold text-slate-800 dark:text-zinc-200">{CURRENT_EVENT.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 dark:bg-zinc-900 rounded-2xl text-[#038ED3]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold">Location</p>
                    <p className="font-bold text-slate-800 dark:text-zinc-200">{CURRENT_EVENT.location}</p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-xl">
                  {CURRENT_EVENT.description}
                </p>
              </div>
            </div>
          </div>

          {/* Registration Sidebar (Right) */}
          <div className="lg:col-span-1">
            <div className="sticky top-40 bg-slate-50 dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Secure your spot</h3>
                <p className="text-slate-500 text-sm">Join us and receive your digital voucher instantly.</p>
              </div>

              <button 
                onClick={handleClaimVoucher}
                className="w-full flex items-center justify-center gap-3 bg-[#038ED3] text-white py-5 rounded-2xl font-bold hover:bg-[#0277b0] transition-all shadow-xl shadow-blue-500/20"
              >
                <Ticket size={22} />
                Claim Event Voucher
              </button>

              <button className="w-full flex items-center justify-center gap-3 border border-slate-200 dark:border-zinc-700 py-5 rounded-2xl font-bold text-slate-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-black transition-all">
                <Share2 size={20} />
                Share Event
              </button>

              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800">
                <p className="text-xs text-center text-slate-400 font-medium">
                  By registering, your voucher will be saved to your profile to prevent rescanning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED EVENTS SECTION */}
        <div className="mt-32 pt-20 border-t border-slate-100 dark:border-zinc-900">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block bg-[#038ED3] px-8 py-2 mb-6">
              <h2 className=" text-4xl text-white tracking-wide">
                Related Events
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {RELATED_EVENTS.map((event) => (
              <div key={event.id} className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10 flex flex-col items-center text-center">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{event.title}</h4>
                  <p className="text-slate-600 dark:text-zinc-400 mb-8 max-w-sm">{event.description}</p>
                  <Link href={`/events/${event.id}`} className="text-[#038ED3] font-bold flex items-center gap-2 hover:underline">
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}