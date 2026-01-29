"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  Heart,
  ShieldAlert,
  Globe,
  Users
} from "lucide-react";

// 1. Navigation Data with Submenus
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "Our Impact", 
    href: "#", 
    submenu: [
      { 
        name: "Emergency Response", 
        href: "/impact/emergency", 
        desc: "Rapid humanitarian aid in crisis.",
        icon: <ShieldAlert size={18} className="text-[#d53f34]" /> 
      },
      { 
        name: "Digital Dignity", 
        href: "/impact/digital", 
        desc: "Empowering through connectivity.",
        icon: <Globe size={18} className="text-blue-500" /> 
      },
      { 
        name: "Community Support", 
        href: "/impact/community", 
        desc: "Building local resilience.",
        icon: <Users size={18} className="text-green-500" /> 
      },
    ]
  },
  { name: "Our Team", href: "/members" },
  { name: "Vouchers", href: "/vouchers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* LAYER 1: Social & Contact (Blue Bar) */}
      <div className="bg-[#d53f34] text-white py-2 px-6">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          <a 
            href="mailto:info@dingonet.com" 
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <Mail size={14} />
            <span className="hidden sm:inline">info@dingonet.com</span>
          </a>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:scale-110 transition-transform"><Linkedin size={14} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Twitter size={14} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* LAYER 2: Main Navigation (White/Glass Bar) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 dark:bg-zinc-950/95 dark:border-zinc-800 px-6">
        <div className="container mx-auto flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative h-10 w-32 transition-transform hover:scale-105">
            <Image
              src="/logo.svg"
              alt="Dingonet Logo"
              fill
              className="object-contain dark:invert"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className="relative flex items-center h-full"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.submenu ? (
                  <button className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-[#d53f34] dark:text-slate-300 transition-colors">
                    {link.name}
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-[#d53f34]' : ''}`} 
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-slate-600 hover:text-[#d53f34] dark:text-slate-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {/* DROPDOWN MENU */}
                <AnimatePresence>
                  {link.submenu && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[80%] left-0 w-72 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
                    >
                      <div className="grid gap-1">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="group flex items-start gap-4 rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all"
                          >
                            <div className="mt-1 p-2 rounded-lg bg-slate-100 dark:bg-zinc-700 group-hover:bg-white dark:group-hover:bg-zinc-600 transition-colors">
                              {sub.icon}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">{sub.name}</p>
                              <p className="text-[11px] text-slate-500 dark:text-zinc-500 leading-tight">{sub.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Link
              href="/donate"
              className="group flex items-center gap-2 rounded-xl bg-[#d53f34] px-6 py-2.5 text-sm font-black text-white transition-all hover:bg-black dark:hover:bg-white dark:hover:text-black shadow-lg shadow-[#d53f34]/20"
            >
              <Heart size={16} className="fill-white group-hover:fill-current" />
              Donate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b overflow-hidden shadow-xl"
          >
            <div className="p-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="space-y-3">
                  {link.submenu ? (
                    <>
                      <p className="text-xs font-black text-[#d53f34] uppercase tracking-widest">{link.name}</p>
                      <div className="grid gap-4 pl-4 border-l-2 border-slate-100 dark:border-zinc-800">
                        {link.submenu.map(sub => (
                          <Link 
                            key={sub.href} 
                            href={sub.href} 
                            onClick={() => setIsOpen(false)} 
                            className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white"
                          >
                            {sub.icon} {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-black text-slate-900 dark:text-white"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-[#d53f34] py-4 rounded-xl text-white font-bold text-lg"
              >
                <Heart className="fill-white" /> Support Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}