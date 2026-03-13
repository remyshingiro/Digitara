"use client";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton"; 

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden pt-24 pb-12 md:pt-32 lg:pt-0">
      
      {/* 🚀 PREMIUM BACKGROUND: 
          Replacing the globe with high-end "Aurora" gradients. 
          Zero performance cost, maximum visual impact. 
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl"> 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Custom "Expo" ease for premium feel
          >
            {/* 🚀 REFINED TYPOGRAPHY:
                Using a more balanced scale that works on all devices.
            */}
            <h1 className="text-[2.8rem] leading-[1.05] md:text-6xl lg:text-8xl font-bold font-clash text-text-primary tracking-tight">
              We Build Digital <br />
              <span className="text-accent-cyan inline-block">Experiences</span> <br />
              That Convert
            </h1>
            
            <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-text-secondary max-w-md lg:max-w-xl font-jakarta leading-relaxed opacity-70">
              Digitara is a premium digital agency in Rwanda. We craft high-performance 
              interfaces for startups ready to scale their global vision.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticButton>
                <button className="bg-accent-cyan text-dark-bg px-8 py-4 rounded-xl font-bold text-base hover:brightness-110 transition-all shadow-lg shadow-accent-cyan/10 w-full sm:w-auto">
                  Start Your Project
                </button>
              </MagneticButton>
              
              <button className="glass px-8 py-4 rounded-xl font-bold text-base hover:bg-white/5 transition-all border border-white/10 w-full sm:w-auto text-text-primary">
                View Our Work
              </button>
            </div>
          </motion.div>

          {/* 🚀 ADDING "TRUST INDICATORS" (Optional but recommended for agencies) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center opacity-40 grayscale"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}