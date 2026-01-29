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
  Heart,
  Globe2
} from "lucide-react";

const FOOTER_LINKS = {
  organization: [
    { name: "Our Mission", href: "/about" },
    { name: "Field Team", href: "/members" },
    { name: "Impact Reports", href: "/impact" },
    { name: "Contact Hub", href: "/contact" },
  ],
  humanitarian: [
    { name: "Emergency Response", href: "/services" },
    { name: "Community Support", href: "/community" },
    { name: "Digital Relief", href: "/programs" },
    { name: "Volunteer", href: "/volunteer" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 dark:bg-zinc-950 dark:border-zinc-900">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Mission & Brand */}
          <div className="space-y-8">
            <Link href="/" className="relative h-12 w-40 block">
              <Image
                src="/logo.svg"
                alt="Dingonet Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-medium">
              A humanitarian force in Tanzania, leveraging technology to 
              provide essential relief and connectivity to those who need it most.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 shadow-sm text-[#02557f] hover:bg-[#d53f34] hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Organization */}
          <div>
            <h4 className="text-[#02557f] dark:text-white font-black uppercase text-xs tracking-widest mb-8">Organization</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.organization.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 dark:text-zinc-500 hover:text-[#d53f34] dark:hover:text-[#d53f34] transition-colors font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Humanitarian Action */}
          <div>
            <h4 className="text-[#02557f] dark:text-white font-black uppercase text-xs tracking-widest mb-8">Direct Action</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.humanitarian.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 dark:text-zinc-500 hover:text-[#d53f34] dark:hover:text-[#d53f34] transition-colors font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Field Contact */}
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-zinc-800">
            <h4 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-widest mb-6">Field Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-400">
                <MapPin size={18} className="text-[#d53f34] shrink-0" />
                <span className="font-bold">Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-zinc-400">
                <Phone size={18} className="text-[#d53f34] shrink-0" />
                <span className="font-bold">+255 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-zinc-400">
                <Mail size={18} className="text-[#d53f34] shrink-0" />
                <span className="font-bold">relief@dingonet.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
            <Globe2 size={14} className="text-[#02557f]" />
            <span>© {currentYear} Dingonet Humanitarian Response</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-[#d53f34]/10 rounded-full">
            <Heart size={14} className="fill-[#d53f34] text-[#d53f34]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d53f34]">Made for the People</span>
          </div>

          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <Link href="/privacy" className="hover:text-[#02557f] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#02557f] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}