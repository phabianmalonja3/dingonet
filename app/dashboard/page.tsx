"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Globe2, 
  Activity, 
  ShieldAlert, 
  Map as MapIcon, 
  Zap, 
  ArrowUpRight,
  Plus
} from "lucide-react";

const STATS = [
  { label: "Active Operations", value: "12", icon: <Activity className="text-[#d53f34]" />, trend: "+2 this week" },
  { label: "Communities Reached", value: "148", icon: <Globe2 className="text-[#02557f]" />, trend: "+12% growth" },
  { label: "Field Volunteers", value: "842", icon: <Users className="text-[#02557f]" />, trend: "Active now" },
  { label: "Critical Alerts", value: "3", icon: <ShieldAlert className="text-[#d53f34]" />, trend: "Needs attention" },
];

const RECENT_MIDS = [
  { id: "M-902", mission: "Arusha Mesh Grid", status: "Deploying", priority: "High" },
  { id: "M-901", mission: "Coastal Education", status: "Active", priority: "Medium" },
  { id: "M-899", mission: "Flood Response", status: "Completed", priority: "Critical" },
];

export default function HumanitarianDashboard() {
  return (
    /* 1. Added transition-all for smooth movement when sidebar collapses 
       2. Added lg:pl-[280px] to push content away from the sidebar
    */
    <div className="min-h-screen bg-slate-50 dark:bg-black p-4 lg:p-12 lg:pl-[300px] transition-all duration-300 font-sans">
      
      {/* This wrapper ensures the content is centered within the 
         available space left over by the sidebar 
      */}
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header Block */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#d53f34] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#d53f34] animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Live HQ Feed</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
              Mission <span className="text-[#02557f] italic font-serif lowercase">Control.</span>
            </h1>
          </div>
          
          <button className="flex items-center gap-3 bg-[#02557f] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#d53f34] transition-all shadow-xl shadow-[#02557f]/20 active:scale-95">
            <Plus size={18} /> New Operation
          </button>
        </header>

        {/* Stats Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-zinc-800 shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800">
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.trend}</span>
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Block */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Active Missions List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-zinc-900 rounded-[3rem] border border-slate-100 dark:border-zinc-800 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 dark:border-zinc-800 flex justify-between items-center">
                <h2 className="font-black uppercase text-xs tracking-[0.2em] text-slate-900 dark:text-white">Active Operations</h2>
                <button className="text-[10px] font-black uppercase text-[#02557f] hover:text-[#d53f34] transition-colors">View All</button>
              </div>
              <div className="divide-y divide-slate-50 dark:divide-zinc-800">
                {RECENT_MIDS.map((item) => (
                  <div key={item.id} className="p-8 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#02557f]/5 flex items-center justify-center text-[#02557f] font-black text-xs">
                        {item.id}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 dark:text-white uppercase text-sm group-hover:text-[#02557f] transition-colors">{item.mission}</h4>
                        <div className="flex gap-3 items-center mt-1">
                          <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                            item.priority === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-slate-100 dark:bg-zinc-800 text-slate-500'
                          }`}>
                            {item.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                       <span className="hidden md:inline text-[10px] font-black text-[#02557f] uppercase tracking-widest">{item.status}</span>
                       <button className="p-2 text-slate-300 group-hover:text-[#d53f34] transition-all group-hover:translate-x-1"><ArrowUpRight size={20}/></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar-within-Dashboard Block */}
          <div className="space-y-8">
            <div className="bg-[#02557f] p-10 rounded-[3rem] text-white relative overflow-hidden group shadow-xl shadow-[#02557f]/20">
              <Zap className="absolute -right-4 -bottom-4 text-white opacity-10 w-32 h-32 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4 italic">Power Operations</h3>
              <p className="text-white/70 text-sm mb-8 font-medium">Request resources or deploy emergency connectivity units instantly.</p>
              <div className="space-y-3">
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Request Supply</button>
                <button className="w-full py-4 bg-[#d53f34] hover:bg-black rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Emergency Beacon</button>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[3rem] border border-slate-100 dark:border-zinc-800 shadow-sm">
               <div className="flex items-center gap-3 mb-6">
                  <MapIcon className="text-[#02557f]" size={20} />
                  <h3 className="font-black uppercase text-xs tracking-widest">Regional Spread</h3>
               </div>
               <div className="aspect-square bg-slate-100 dark:bg-zinc-800 rounded-3xl flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-zinc-700">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Map Interface Ready</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}