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
  ArrowRight 
} from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Team", href: "/members" },
  { name: "Vouchers", href: "/vouchers" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full shadow-sm">
      {/* LAYER 1: Social & Contact (Blue Bar) */}
      <div className="bg-[#038ED3] text-white py-2 px-6">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium">
          {/* Email */}
          <a 
            href="mailto:info@dingonet.com" 
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <Mail size={14} />
            <span>info@dingonet.com</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:scale-110 transition-transform"><Linkedin size={14} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Twitter size={14} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      {/* LAYER 2: Main Navigation (White/Glass Bar) */}
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 dark:bg-zinc-950/90 dark:border-zinc-800 px-6">
        <div className="container mx-auto flex h-16 items-center justify-between">
          
          {/* Logo from Public */}
          <Link href="/" className="relative h-10 w-32">
            <Image
              src="/logo.svg"
              alt="Dingonet Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-[#038ED3] dark:text-slate-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-lg bg-[#038ED3] px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#0277b0] shadow-md"
            >
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b p-6 space-y-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold text-slate-900 dark:text-white"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}