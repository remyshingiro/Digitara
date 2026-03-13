"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, Ghost } from "lucide-react";
import MagneticButton from "@/components/MagneticButton"; // Added wrapper

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/5 blur-[120px] rounded-full" />

      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8 text-accent-cyan"
        >
          <Ghost size={80} strokeWidth={1.5} className="animate-bounce" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold font-clash text-text-primary mb-4 tracking-tighter"
        >
          404
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-text-secondary font-jakarta mb-12 max-w-lg mx-auto"
        >
          Oops! It seems you've drifted into <span className="text-accent-cyan">uncharted digital territory.</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Apply Magnetic Effect to Primary Button */}
          <MagneticButton>
            <Link href="/">
              <button className="bg-accent-cyan text-dark-bg px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-accent-cyan/20">
                <Home size={20} />
                Back to Safety
              </button>
            </Link>
          </MagneticButton>
          
          {/* Apply Magnetic Effect to Secondary Button */}
          <MagneticButton>
            <Link href="/portfolio">
              <button className="glass text-text-primary px-8 py-4 rounded-2xl font-bold border border-white/10 flex items-center gap-2 hover:bg-white/5 transition-all">
                View Our Work
                <ArrowRight size={20} />
              </button>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Subtle Technical Detail */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.5em]">
          Error_Code: 0x404_Digitara_System_Mismatch
        </p>
      </div>
    </div>
  );
}