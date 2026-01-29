"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from "lucide-react";

const FOOTER_LINKS = {
  company: [
    { name: "Our Team", href: "/members" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Vouchers", href: "/vouchers" },
    { name: "Network Solutions", href: "/services" },
    { name: "Community", href: "/community" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 dark:bg-zinc-950 dark:border-zinc-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="relative h-10 w-32 block">
              <Image
                src="/logo.svg"
                alt="Dingonet Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Working daily to make a difference in our community through 
              innovative network solutions and dedicated support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white shadow-sm text-[#038ED3] hover:bg-[#038ED3] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white shadow-sm text-[#038ED3] hover:bg-[#038ED3] hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white shadow-sm text-[#038ED3] hover:bg-[#038ED3] hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-[#038ED3] dark:text-slate-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-[#038ED3] dark:text-slate-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={18} className="text-[#038ED3] shrink-0" />
                <span>Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Phone size={18} className="text-[#038ED3] shrink-0" />
                <span>+255 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Mail size={18} className="text-[#038ED3] shrink-0" />
                <span>info@dingonet.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} Dingonet. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-[#038ED3]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#038ED3]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}