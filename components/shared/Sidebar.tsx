
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Map, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ShieldCheck,
  Zap,
  Bell
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Field Map", href: "/dashboard/map", icon: Map },
  { name: "Teams", href: "/dashboard/teams", icon: Users },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-[#02557f] text-white rounded-2xl shadow-xl"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Container */}
      <motion.aside 
        initial={false}
        animate={{ width: isOpen ? "280px" : "88px" }}
        className="fixed left-0 top-0 h-screen bg-white dark:bg-zinc-950 border-r border-slate-100 dark:border-zinc-900 z-40 flex flex-col transition-all duration-300 ease-in-out"
      >
        {/* Logo Section */}
        <div className="p-6 mb-8 flex items-center gap-4 overflow-hidden">
          <div className="min-w-[40px] h-10 rounded-xl bg-[#d53f34] flex items-center justify-center text-white shadow-lg shadow-[#d53f34]/20">
            <ShieldCheck size={24} />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-black text-xl tracking-tighter text-slate-900 dark:text-white uppercase"
              >
                Dingo<span className="text-[#02557f]">Net</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow px-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`group flex items-center gap-4 p-4 rounded-2xl transition-all relative ${
                  isActive 
                  ? "bg-[#02557f]/5 text-[#02557f] dark:text-white" 
                  : "text-slate-400 hover:bg-slate-50 dark:hover:bg-zinc-900 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <item.icon size={22} className={isActive ? "text-[#02557f]" : "group-hover:text-[#d53f34] transition-colors"} />
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-bold text-[11px] uppercase tracking-widest"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-6 bg-[#d53f34] rounded-r-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions & User Profile */}
        <div className="p-4 border-t border-slate-50 dark:border-zinc-900 space-y-4">
          {/* Quick Alert Card (Collapsed/Expanded) */}
          {isOpen ? (
            <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-2xl border border-slate-100 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-[#d53f34] mb-2">
                <Bell size={14} className="animate-bounce" />
                <span className="text-[9px] font-black uppercase tracking-widest">Live Alert</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight mb-3 font-medium">Network outage reported in Arusha District.</p>
              <button className="text-[9px] font-black text-[#02557f] uppercase tracking-tighter hover:underline">View Intel →</button>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-10 h-10 rounded-xl bg-[#d53f34]/10 text-[#d53f34] flex items-center justify-center cursor-pointer">
                <Zap size={18} />
              </div>
            </div>
          )}

          {/* User Profile */}
          <div className={`flex items-center gap-3 p-2 rounded-2xl ${isOpen ? "hover:bg-slate-50 dark:hover:bg-zinc-900" : "justify-center"} transition-colors cursor-pointer group`}>
            <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-zinc-800 border-2 border-white dark:border-zinc-900 overflow-hidden shrink-0">
               <img src="https://ui-avatars.com/api/?name=Admin+User&background=02557f&color=fff" alt="User" />
            </div>
            {isOpen && (
              <div className="flex-grow overflow-hidden">
                <p className="text-xs font-black text-slate-900 dark:text-white truncate uppercase tracking-tighter">Admin Agent</p>
                <p className="text-[9px] font-bold text-slate-400 truncate uppercase">Field HQ • TZ</p>
              </div>
            )}
            {isOpen && <LogOut size={16} className="text-slate-300 hover:text-[#d53f34] transition-colors" />}
          </div>
        </div>
      </motion.aside>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
}