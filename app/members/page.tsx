"use client";

import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Added Variants import

const TEAM_MEMBERS = [
  {
    id: "1",
    name: "John Doe",
    role: "Founder & CEO",
    bio: "Passionate about building community-driven solutions at Dingonet.",
    imageUrl: "/team/john.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "john@dingonet.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Lead Developer",
    bio: "Turning complex problems into elegant, efficient code.",
    imageUrl: null,
    linkedin: "https://linkedin.com/in/janesmith",
    twitter: null,
    email: "jane@dingonet.com",
  },
];

// Explicitly typed as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Explicitly typed as Variants
const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" // TypeScript now knows this is a valid easing string
    }
  },
};

export default function MembersPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Our Dedicated Team</h1>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          The passionate individuals behind Dingonet working daily to make a difference in our community.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {TEAM_MEMBERS.map((member) => (
          <motion.div 
            key={member.id} 
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-md dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800"
          >
            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-zinc-800">
              {member.imageUrl ? (
                <Image 
                  src={member.imageUrl} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-slate-400">
                  No Image
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mt-1">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-slate-500 line-clamp-2">
                {member.bio}
              </p>

              <div className="mt-6 flex justify-center gap-4 text-slate-400">
                {member.linkedin && (
                  <motion.a 
                    whileHover={{ y: -3, color: "#2563eb" }}
                    href={member.linkedin} target="_blank" rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                )}
                {member.twitter && (
                  <motion.a 
                    whileHover={{ y: -3, color: "#38bdf8" }}
                    href={member.twitter} target="_blank" rel="noopener noreferrer"
                  >
                    <Twitter size={18} />
                  </motion.a>
                )}
                {member.email && (
                  <motion.a 
                    whileHover={{ y: -3, color: "#f43f5e" }}
                    href={`mailto:${member.email}`}
                  >
                    <Mail size={18} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}