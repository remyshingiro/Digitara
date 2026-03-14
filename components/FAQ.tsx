"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  { 
    q: "How long does it take to develop a website?", 
    a: "The timeline depends on the complexity of your project. A simple website typically takes 2-4 weeks, while complex web applications can take 6-12 weeks. We provide detailed timelines during our initial consultation." 
  },
  { 
    q: "Do you offer mobile app development?", 
    a: "Yes, we develop high-performance mobile applications using React Native and Flutter for both iOS and Android platforms with native-level user experience." 
  },
  { 
    q: "Do you provide ongoing support after project completion?", 
    a: "Yes! We offer comprehensive support packages ranging from 1-6 months depending on your plan. This includes security updates, performance monitoring, and technical assistance." 
  },
  { 
    q: "What's included in your web development packages?", 
    a: "Our packages include custom design, responsive development, SEO optimization, and deployment. Higher-tier packages include user auth, database integration, and API development." 
  },
  { 
    q: "What technologies do you use for development?", 
    a: "We specialize in a high-concurrency stack including React, Go (Golang), Node.js, and TypeScript, deployed on cloud platforms like AWS and Vercel for maximum scalability." 
  },
  { 
    q: "How do you handle payments and what are your terms?", 
    a: "We typically work with a milestone-based structure. We accept bank transfers, mobile money, and international payments. Full terms are outlined in our project contracts." 
  },
  { 
    q: "Can you work with my existing website or do I need to start fresh?", 
    a: "We can definitely work with existing sites! We offer redesigns, performance optimization, and migrations to modern stacks like Vite + React." 
  },
  { 
    q: "Do you provide hosting and domain services?", 
    a: "We handle the technical setup and deployment process on edge networks like Cloudflare to ensure your site is lightning-fast for users in the EAC region and beyond." 
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden transition-colors duration-500">
      
      {/* 🚀 THEME-AWARE BLOBS: Reduced brightness for Light Mode */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 dark:bg-orange-600/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-cyan/5 dark:bg-accent-cyan/10 blur-[120px] rounded-full translate-x-1/4 transition-colors" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="mb-16">
           <h2 className="text-4xl md:text-6xl font-bold font-clash text-left text-text-primary tracking-tight">
             Frequently <span className="opacity-30 italic">asked questions</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8">
          {faqs.map((faq, i) => (
            <div key={i} className="h-fit">
              <div 
                className={cn(
                  "glass rounded-3xl transition-all duration-300 border mb-4",
                  "bg-white/40 dark:bg-surface/30",
                  openIndex === i 
                    ? "border-accent-cyan/30 shadow-lg shadow-accent-cyan/5" 
                    : "border-border-subtle hover:border-accent-cyan/20 shadow-sm"
                )}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-7 flex justify-between items-center text-left group cursor-pointer"
                >
                  <span className={cn(
                    "font-bold text-base md:text-lg transition-colors leading-tight",
                    openIndex === i ? "text-accent-cyan" : "text-text-primary"
                  )}>
                    {faq.q}
                  </span>
                  <div className="shrink-0 ml-4">
                    <div className={cn(
                      "w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center transition-all",
                      openIndex === i ? "bg-accent-cyan border-accent-cyan" : "group-hover:border-accent-cyan"
                    )}>
                      {openIndex === i ? (
                        <Minus className="text-black" size={16} />
                      ) : (
                        <Plus className="text-accent-cyan" size={16} />
                      )}
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7">
                        <p className="text-text-secondary text-sm md:text-base leading-relaxed font-jakarta font-medium opacity-90">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}