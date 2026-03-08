"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Content - Appears first on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left z-10"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-clash leading-tight text-text-primary">
            We Build Digital <br />
            <span className="text-accent-cyan">Experiences</span> <br className="hidden lg:block" />
            That Convert
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-lg mx-auto lg:mx-0 font-jakarta">
            Digitara provides high-end web development and design for startups ready to scale.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-accent-cyan text-dark-bg px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,212,255,0.2)]">
              Start Your Project
            </button>
            <button className="glass px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* Visual - Appears below content on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative"
        >
          <div className="relative z-10 glass rounded-2xl p-2 aspect-[16/10] overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-surface to-dark-bg flex items-center justify-center border border-white/5 rounded-xl">
              <span className="text-accent-cyan font-mono text-sm opacity-50">DIGITARA_DASHBOARD_V1</span>
            </div>
          </div>
          {/* Background Glow for Mobile */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-cyan/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-amber/10 blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}