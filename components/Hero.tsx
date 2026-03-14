"use client";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton"; 
import { cn } from "@/lib/utils";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-12 md:pt-40 lg:pt-20">
      
      {/* 🚀 DYNAMIC AURORA BACKGROUND: Optimized for Light & Dark Mode */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Right Glow - Cyan wash */}
        <div className={cn(
          "absolute top-[10%] right-[-5%] w-[40%] h-[40%] blur-[120px] rounded-full animate-pulse transition-colors duration-700",
          "bg-accent-cyan/10 dark:bg-accent-cyan/15", 
          "light:bg-accent-cyan/20"
        )} />

        {/* Bottom Left Glow - Sky Blue wash */}
        <div className={cn(
          "absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] blur-[100px] rounded-full transition-colors duration-700",
          "bg-blue-500/5 dark:bg-blue-600/5",
          "light:bg-blue-400/10"
        )} />

        {/* Center-Left Glow - Soft Amber wash (Light Mode Exclusive) */}
        <div className="absolute top-[20%] left-[10%] w-[25%] h-[25%] bg-accent-amber/10 blur-[100px] rounded-full opacity-0 light:opacity-100 transition-opacity duration-700" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl"> 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[2.8rem] leading-[1.05] md:text-6xl lg:text-8xl font-bold font-clash text-text-primary tracking-tight">
              We Build Digital <br />
              <span className="text-accent-cyan inline-block italic">Experiences</span> <br />
              That Convert
            </h1>
            
            <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-text-secondary max-w-md lg:max-w-xl font-jakarta leading-relaxed opacity-80">
              Digitara is a premium digital agency in Rwanda. We craft high-performance 
              interfaces for startups ready to scale their global vision.
            </p>
            
            <div className="mt-10">
              <MagneticButton>
                <button 
                  type="button"
                  onClick={scrollToContact}
                  className="bg-accent-cyan text-dark-bg px-10 py-5 rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-accent-cyan/20 w-full sm:w-auto active:scale-95 cursor-pointer"
                >
                  Start Your Project
                </button>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Trust Indicators Divider */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 pt-8 border-t border-border-subtle flex flex-wrap gap-8 items-center opacity-40 grayscale"
          >
            {/* Trust Indicators can be added here */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}