"use client";
import { motion } from "framer-motion";
import { Globe, Server, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { 
    title: "Software Engineering", 
    desc: "Building robust, scalable systems for East African startups. We specialize in Vite + React frontends and high-concurrency Go backends for maximum speed.", 
    icon: <Server className="text-accent-cyan" size={32} />,
    keywords: ["Kigali Tech", "Nairobi Startups", "Scalable Systems"]
  },
  { 
    title: "Localized Web Apps", 
    desc: "Lightweight, high-speed web applications optimized for the East African digital landscape and low-latency performance on local networks.", 
    icon: <Globe className="text-accent-cyan" size={32} />,
    keywords: ["East Africa SEO", "Mobile-First", "Edge Computing"]
  },
  { 
    title: "Digital Transformation", 
    desc: "Modernizing legacy businesses in Rwanda and beyond. We integrate automated workflows and data-driven dashboards to scale your operations.", 
    icon: <BarChart3 className="text-accent-cyan" size={32} />,
    keywords: ["Business Automation", "Data Analytics", "Regional Scale"]
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 px-6 bg-dark-bg transition-colors duration-500 min-h-screen">
      {/* 🚀 SEO META */}
      <span className="sr-only">
        Best software development agency in Rwanda, Kenya, and Uganda. 
        Expert React and Go developers in Kigali. Digital transformation for East African SMEs.
      </span>

      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold font-clash mb-8 text-text-primary tracking-tighter leading-tight"
          >
            Digital Solutions for the <br />
            <span className="text-accent-cyan italic underline decoration-border-subtle underline-offset-8">East African Frontier.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-text-secondary font-jakarta leading-relaxed font-medium opacity-90">
            Digitara builds the infrastructure for the next generation of African innovators. 
            From our hub in Kigali, we deliver world-class engineering to the entire EAC region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass p-10 rounded-[2.5rem] border transition-all duration-500",
                "bg-white/40 dark:bg-surface/30 border-border-subtle shadow-xl shadow-black/5 dark:shadow-none",
                "group hover:border-accent-cyan/30 hover:-translate-y-2"
              )}
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-surface/10 dark:bg-dark-bg/40 group-hover:bg-accent-cyan/10 transition-colors">
                {s.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-clash mb-4 text-text-primary tracking-tight">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-10 text-sm md:text-base font-medium opacity-80">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-border-subtle pt-8">
                {s.keywords.map((word, idx) => (
                  <span key={idx} className="text-[10px] font-mono uppercase tracking-widest text-text-secondary/60 px-3 py-1 rounded-lg border border-border-subtle bg-surface/5">
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 REGIONAL IMPACT SECTION */}
        <div className="grid md:grid-cols-2 gap-20 items-center py-24 border-t border-border-subtle">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-clash text-text-primary mb-8 tracking-tight leading-tight">
              Engineered for <br /><span className="text-accent-cyan">Regional Scale.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10 font-medium opacity-90 text-lg">
              We understand the unique challenges of the East African market. Our tech stack is 
              designed to be lightweight for mobile users while remaining powerful enough 
              for enterprise-grade automation.
            </p>
            <div className="space-y-6">
              <div className="flex gap-5 items-start">
                <div className="p-2 rounded-lg bg-accent-cyan/10">
                  <Zap className="text-accent-cyan" size={20} />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold text-lg mb-1">Low-Bandwidth Optimization</h4>
                  <p className="text-sm text-text-secondary font-medium opacity-80">Ensuring your app works perfectly even on 3G networks across rural areas.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="p-2 rounded-lg bg-accent-cyan/10">
                  <ShieldCheck className="text-accent-cyan" size={20} />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold text-lg mb-1">Local Compliance</h4>
                  <p className="text-sm text-text-secondary font-medium opacity-80">Data handling tailored to regional regulations like Rwanda's Data Protection Law.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Visual Element */}
          <div className="relative h-[400px] hidden md:block">
             <div className="absolute inset-0 bg-accent-cyan/5 blur-[100px] rounded-full animate-pulse" />
             <div className="glass h-full w-full rounded-[3rem] border border-border-subtle flex items-center justify-center p-12 bg-white/30 dark:bg-surface/30">
                <div className="text-center">
                   <div className="text-6xl font-bold font-clash text-accent-cyan mb-2">EAC</div>
                   <p className="text-text-secondary font-mono text-xs tracking-[0.4em] uppercase opacity-50">Infrastructure Hub</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}