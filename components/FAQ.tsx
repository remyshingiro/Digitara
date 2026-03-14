"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  { 
    q: "How long does it take to develop a website?", 
    a: "The timeline depends on the complexity of your project. A simple website typically takes 2-4 weeks, while complex web applications can take 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process." 
  },
  { 
    q: "Do you offer mobile app development?", 
    a: "Yes, we develop both web applications that are mobile-responsive and dedicated mobile applications using React Native and Flutter. We can create apps for both iOS and Android platforms with native performance and user experience." 
  },
  { 
    q: "Do you provide ongoing support after project completion?", 
    a: " Yes! We offer comprehensive support packages ranging from 1-6 months depending on your plan. This includes bug fixes, security updates, performance monitoring, and technical assistance. We also offer extended maintenance contracts for long-term partnerships." 
  },
  { 
    q: "What's included in your web development packages?", 
    a: "Our packages include custom design, responsive development, SEO optimization, security implementation, testing, deployment, and initial training. Higher-tier packages also include advanced features like user authentication, database integration, and API development." 
  },
  { 
    q: "What technologies do you use for development?", 
    a: "We use modern, industry-standard technologies including React, Node.js, Next.js, TypeScript, MongoDB, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best technology stack based on your specific requirements and scalability needs." 
  },
  { 
    q: "How do you handle payments and what are your terms?", 
    a: "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments. We accept bank transfers, mobile money, and international payment methods. Full terms are outlined in our project contracts." 
  },
  { 
    q: "Can you work with my existing website or do I need to start fresh?", 
    a: "We can definitely work with your existing website! We offer website redesigns, performance optimization, feature additions, and migrations to modern platforms. During our consultation, we'll assess your current site and recommend the best approach."  },
  { 
    q: "Do you provide hosting and domain services?", 
    a: "While we don't provide hosting directly, we can help you choose the best hosting solution for your needs and handle the deployment process. We work with various hosting providers and can manage the technical setup to ensure optimal performance." 
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-surface/30">
      {/* 🚀 Visual Background Blobs from Screenshot */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-600/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-cyan/10 blur-[120px] rounded-full translate-x-1/4" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="mb-16">
           <h2 className="text-4xl md:text-6xl font-bold font-clash text-left text-text-primary tracking-tight">
             Frequently <span className="opacity-40 italic">asked questions</span>
           </h2>
        </div>

        {/* 🚀 Grid Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-8 lg:gap-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="h-fit">
              <div 
                className={cn(
                  "glass rounded-2xl transition-all duration-300 border border-white/5",
                  openIndex === i ? "bg-white/[0.05] border-white/10" : "hover:bg-white/[0.02]"
                )}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left group"
                >
                  <span className={cn(
                    "font-bold text-base md:text-lg transition-colors",
                    openIndex === i ? "text-accent-cyan" : "text-text-primary"
                  )}>
                    {faq.q}
                  </span>
                  <div className="shrink-0 ml-4">
                    {openIndex === i ? (
                      <Minus className="text-accent-cyan" size={20} />
                    ) : (
                      <Plus className="text-accent-cyan/40 group-hover:text-accent-cyan transition-colors" size={20} />
                    )}
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
                      <p className="p-6 pt-0 text-text-secondary text-sm md:text-base leading-relaxed font-jakarta">
                        {faq.a}
                      </p>
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