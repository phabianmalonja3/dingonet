"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-black pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Info */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8">
              Get in <span className="text-[#038ED3]">Touch.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-zinc-400 mb-12">
              Have questions about our connectivity programs or want to partner with us? We&apos;d love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#038ED3]/10 flex items-center justify-center text-[#038ED3]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Our Office</h4>
                  <p className="text-slate-500">Dar es Salaam, Tanzania</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#038ED3]/10 flex items-center justify-center text-[#038ED3]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Email Us</h4>
                  <p className="text-slate-500">info@dingonet.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-50 dark:bg-zinc-900 p-8 lg:p-12 rounded-[3rem] border border-slate-100 dark:border-zinc-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 dark:text-zinc-400">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl border-none bg-white dark:bg-black focus:ring-2 focus:ring-[#038ED3] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 dark:text-zinc-400">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl border-none bg-white dark:bg-black focus:ring-2 focus:ring-[#038ED3] outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 dark:text-zinc-400">Subject</label>
                <select className="w-full p-4 rounded-2xl border-none bg-white dark:bg-black focus:ring-2 focus:ring-[#038ED3] outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Voucher Support</option>
                  <option>Partnership</option>
                  <option>Donations</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 dark:text-zinc-400">Message</label>
                <textarea rows={4} placeholder="How can we help?" className="w-full p-4 rounded-2xl border-none bg-white dark:bg-black focus:ring-2 focus:ring-[#038ED3] outline-none transition-all" />
              </div>

              <button className="w-full flex items-center justify-center gap-3 bg-[#038ED3] text-white py-5 rounded-2xl font-bold hover:bg-[#0277b0] transition-all shadow-xl shadow-blue-500/20">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}