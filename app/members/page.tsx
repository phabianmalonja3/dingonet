"use client";

import { Linkedin, Mail, Twitter, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const TEAM_MEMBERS = [
  {
    id: "1",
    name: "John Doe",
    role: "Mission Director",
    bio: "Leading field operations and strategic relief efforts across the Tanzanian coastal regions.",
    imageUrl: "/images/avatar.png", // Replace with your actual path
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "john@dingonet.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Technical Lead",
    bio: "Specializing in emergency communication networks and solar-powered digital infrastructure.",
    imageUrl: "/images/avatar.png", 
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: null,
    email: "jane@dingonet.com",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function MembersPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen pt-32 pb-24 font-sans">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d53f34]/10 text-[#d53f34] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <ShieldCheck size={14} />
            <span>Humanitarian Field Force</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[0.9] tracking-tighter mb-6">
            The Hearts <br />
            <span className="text-[#d53f34] font-brittany lowercase text-7xl lg:text-8xl block mt-4">
              behind the mission.
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
            Our team is comprised of dedicated specialists, local leaders, and 
            technologists working on the frontlines to bridge the digital divide in Tanzania.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div 
              key={member.id} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full bg-slate-50 dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-zinc-800 p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-[#02557f]/10"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden rounded-[2.5rem] bg-slate-200 dark:bg-zinc-800">
                {member.imageUrl ? (
                  <Image 
                    src={member.imageUrl} 
                    alt={member.name} 
                    fill 
                    className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-zinc-800 dark:to-zinc-900">
                    <span className="font-brittany text-4xl text-slate-400 dark:text-zinc-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" className="p-3 bg-white rounded-2xl text-[#02557f] hover:bg-[#02557f] hover:text-white transition-all transform hover:scale-110">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="p-3 bg-white rounded-2xl text-[#d53f34] hover:bg-[#d53f34] hover:text-white transition-all transform hover:scale-110">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-grow p-6 text-center">
                <p className="text-[#d53f34] font-black uppercase text-[10px] tracking-[0.25em] mb-2">
                  {member.role}
                </p>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-3">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-zinc-400 font-medium leading-relaxed italic">
                  &quot;{member.bio}&quot;
                </p>
              </div>

              {/* Decorative Bottom Bar */}
              <div className="h-1.5 w-1/3 bg-[#02557f]/20 group-hover:bg-[#02557f] group-hover:w-full mx-auto rounded-full transition-all duration-700 mb-4" />
            </motion.div>
          ))}
        </motion.div>

        {/* Support Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-20 rounded-[4rem]  text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0 L15 30 M0 15 L30 15' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")` }} 
          />
          <h2 className="text-4xl lg:text-6xl font-black  tracking-tighter mb-8">
            Want to join the <span className="font-brittany lowercase text-[#d53f34]">field team?</span>
          </h2>
          <p className="text-[#02557f] max-w-xl mx-auto mb-10 font-medium">
            We are always looking for passionate volunteers and professionals 
            to help us expand our humanitarian operations across Tanzania.
          </p>
          <button className="bg-[#d53f34] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#d53f34] hover:text-white transition-all active:scale-95">
            Become a Volunteer
          </button>
        </motion.div>
      </div>
    </div>
  );
}