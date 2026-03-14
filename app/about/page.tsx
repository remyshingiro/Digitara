"use client";
import { motion } from "framer-motion";
import { Globe, Zap, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Globe,
    title: "Regional Connectivity",
    desc: "We build localized software designed to scale across the East African tech corridor—from Kigali to Nairobi and beyond."
  },
  {
    icon: Zap,
    title: "The Modern Stack",
    desc: "We've traded heavy frameworks for a high-performance React + Go/Node.js stack, ensuring sub-second response times even on regional networks."
  },
  {
    icon: Users,
    title: "Founder-First Approach",
    desc: "We bridge the gap for African entrepreneurs, transforming traditional business models into globally competitive digital assets."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-dark-bg transition-colors duration-500 min-h-screen overflow-hidden">
      {/* 🚀 SEO HIDDEN TAGS FOR EAC TARGETING */}
      <span className="sr-only">
        Software agency in Rwanda, Tech consulting Kigali, React developers East Africa, 
        Scaling African startups, Go backend development Rwanda.
      </span>

      <div className="max-w-[1200px] mx-auto px-6 relative">
        {/* Background Decorative Wash */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-[10px] font-mono uppercase tracking-[0.3em] mb-8">
            Our Mission
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-clash text-text-primary mb-8 tracking-tighter leading-[0.9]">
            Building the <br /> 
            <span className="text-accent-cyan italic">African Tech</span> <br /> 
            Standard.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-jakarta leading-relaxed max-w-2xl opacity-90">
            Digitara was founded to prove that world-class engineering isn't just imported—it's 
            built here. We provide high-fidelity development for founders ready to scale 
            across East Africa and the world stage.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass p-10 rounded-[2.5rem] border transition-all duration-500",
                "bg-white/40 dark:bg-surface/30 border-border-subtle shadow-xl shadow-black/5 dark:shadow-none",
                "group hover:border-accent-cyan/30"
              )}
            >
              <div className="w-14 h-14 rounded-2xl bg-surface/10 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent-cyan/10 transition-colors">
                <v.icon className="text-accent-cyan" size={28} />
              </div>
              <h3 className="text-2xl font-bold font-clash text-text-primary mb-4 tracking-tight">{v.title}</h3>
              <p className="text-text-secondary font-jakarta text-sm leading-relaxed font-medium opacity-80">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center py-20 border-t border-border-subtle">
          <div className="relative group">
             <div className="absolute -inset-4 bg-accent-cyan/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className={cn(
               "glass aspect-[4/3] rounded-[3rem] overflow-hidden relative border flex items-center justify-center transition-all",
               "bg-white/40 dark:bg-surface/30 border-border-subtle"
             )}>
                <div className="text-center px-10">
                   <Briefcase className="mx-auto text-accent-cyan mb-6 opacity-20" size={60} />
                   <span className="text-accent-cyan font-mono text-[10px] tracking-[0.4em] uppercase font-bold block mb-2">Since_2025</span>
                   <p className="text-text-secondary/40 text-[10px] font-mono">ESTABLISHED_IN_KIGALI_RWANDA</p>
                </div>
             </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-clash text-text-primary mb-8 tracking-tight leading-tight">
              From Rwanda, <br />
              <span className="text-accent-cyan">For the Continent.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-text-secondary font-jakarta leading-relaxed font-medium opacity-90">
                Our journey started at **RP-Gishari College**, solving real-world challenges for 
                local cooperatives. We saw firsthand how modern software could transform 
                traditional agricultural and management sectors.
              </p>
              <p className="text-text-secondary font-jakarta leading-relaxed font-medium opacity-90">
                Today, Digitara is a hub for high-concurrency engineering. We leverage the 
                **Vite + React** ecosystem and **Go** backends to build streaming platforms, 
                fintech tools, and localized e-commerce that work flawlessly from 
                the edge of Kigali to the heart of Nairobi.
              </p>
            </div>
            
            <div className="flex gap-10 border-t border-border-subtle mt-10 pt-10">
               <div>
                  <div className="text-3xl font-bold text-text-primary mb-1">EAC</div>
                  <div className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest font-bold">Regional Focus</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-text-primary mb-1">01</div>
                  <div className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest font-bold">Single Vision</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}