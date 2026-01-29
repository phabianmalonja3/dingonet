"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the GSAP plugin for smooth scrolling
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { 
      duration: 0.8, 
      scrollTo: 0, 
      ease: "power3.inOut" 
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[99] p-4 rounded-2xl bg-[#d53f34] text-white shadow-[0_20px_50px_rgba(3,142,211,0.3)] transition-all duration-500 transform ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      } hover:bg-[#0277b0] hover:-translate-y-2 active:scale-95`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} strokeWidth={3} />
    </button>
  );
}