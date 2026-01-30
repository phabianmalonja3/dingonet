"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  ShieldCheck, 
  Globe2 
} from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your Formspree or API logic here
    console.log("Mission report sent to Dingonet HQ");
  };

  return (
    <div className="bg-white dark:bg-black pt-32 pb-24 font-sans selection:bg-[#d53f34] selection:text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[#d53f34] font-black tracking-[0.3em] uppercase text-[10px] mb-6 flex items-center gap-3"
              >
                <span className="w-10 h-[2px] bg-[#d53f34]"></span>
                Humanitarian Response Hub
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-8">
                GET IN <br />
                <span className="text-[#d53f34] font-brittany lowercase text-7xl lg:text-8xl block mt-6">
                  Touch.
                </span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-zinc-400 font-medium leading-relaxed max-w-md">
                Our field units are active across Tanzania. Reach out for 
                partnerships, emergency aid coordination, or to join our volunteer network.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-8">
              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#02557f]/5 flex items-center justify-center text-[#02557f] group-hover:bg-[#02557f] group-hover:text-white transition-all duration-500 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">HQ Office</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                    Posta, Dar es Salaam, TZ
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#d53f34]/5 flex items-center justify-center text-[#d53f34] group-hover:bg-[#d53f34] group-hover:text-white transition-all duration-500 shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Response Line</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                    +255 123 456 789
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-[1.5rem] bg-slate-100 dark:bg-zinc-900 flex items-center justify-center text-slate-600 dark:text-zinc-400 group-hover:bg-black dark:group-hover:bg-white dark:group-hover:text-black group-hover:text-white transition-all duration-500 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Email</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white leading-tight">
                    relief@dingonet.org
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Card */}
            <div className="p-10 rounded-[3rem] bg-slate-50 dark:bg-zinc-950 border border-slate-100 dark:border-zinc-900 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Globe2 size={80} />
              </div>
              <MessageCircle className="text-[#d53f34] mb-6" size={40} />
              <h4 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-[0.2em] mb-3">Field Coordination</h4>
              <p className="text-sm text-slate-500 dark:text-zinc-500 mb-6 font-medium leading-relaxed">
                For rapid support regarding logistics or community needs, 
                our WhatsApp channel is the fastest way to reach regional leads.
              </p>
              <button className="flex items-center gap-2 text-[#02557f] dark:text-[#038ED3] font-black text-[10px] uppercase tracking-[0.2em] hover:gap-4 transition-all">
                Launch Secure Chat <Send size={14} />
              </button>
            </div>
          </div>

          {/* Right Side: Mission Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-zinc-900 p-8 lg:p-16 rounded-[4.5rem] shadow-2xl border border-slate-50 dark:border-zinc-800 relative"
          >
            {/* Form Header */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-[#d53f34] mb-4">
                <ShieldCheck size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Secure Mission Reporting</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                How can we <span className="text-[#02557f]">assist</span> today?
              </h2>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Your Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-8 py-5 rounded-[1.5rem] bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-[#02557f] dark:text-white font-bold placeholder:text-slate-300 transition-all" 
                    placeholder="Full Name" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Contact Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-8 py-5 rounded-[1.5rem] bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-[#02557f] dark:text-white font-bold placeholder:text-slate-300 transition-all" 
                    placeholder="email@example.com" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Mission Category</label>
                <div className="relative">
                  <select className="w-full px-8 py-5 rounded-[1.5rem] bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-[#02557f] dark:text-white font-bold appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Emergency Aid Request</option>
                    <option>Volunteer Application</option>
                    <option>Partnership Proposal</option>
                    <option>Press & Media</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ShieldCheck size={18} />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Situation / Proposal Details</label>
                <textarea 
                  required
                  rows={5} 
                  className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-[#02557f] dark:text-white font-bold placeholder:text-slate-300 transition-all resize-none" 
                  placeholder="Tell us how we can collaborate or provide relief..." 
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-4 bg-[#d53f34] text-white py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#d53f34] transition-all shadow-2xl shadow-[#02557f]/20 active:scale-[0.97] group"
              >
                Dispatch Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}