"use client";
import { motion } from "framer-motion";
import { Globe, Server, Zap, BarChart3, ShieldCheck } from "lucide-react";

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
    <main className="pt-32 pb-20 px-6 bg-surface/30 min-h-screen">
      {/* 🚀 SEO META */}
      <span className="sr-only">
        Best software development agency in Rwanda, Kenya, and Uganda. 
        Expert React and Go developers in Kigali. Digital transformation for East African SMEs.
      </span>

      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold font-clash mb-8 text-text-primary tracking-tight"
          >
            Digital Solutions for the <br />
            <span className="text-accent-cyan italic underline decoration-white/10 underline-offset-8">East African Frontier.</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-text-secondary font-jakarta leading-relaxed">
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
              className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-accent-cyan/30 transition-all group relative overflow-hidden"
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-dark-bg/40 group-hover:bg-accent-cyan/10 transition-colors">
                {s.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-clash mb-4 text-text-primary">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-8 text-sm md:text-base">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-white/5 pt-8">
                {s.keywords.map((word, idx) => (
                  <span key={idx} className="text-[9px] font-mono uppercase tracking-widest text-text-secondary/60 px-2 py-1 rounded-md border border-white/10">
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 REGIONAL IMPACT SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center py-24 border-t border-white/5">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-clash text-text-primary mb-6">
              Engineered for <br /><span className="text-accent-cyan">Regional Scale.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We understand the unique challenges of the East African market. Our tech stack is 
              designed to be lightweight for mobile users while remaining powerful enough 
              for enterprise-grade automation.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Zap className="text-accent-cyan mt-1" size={20} />
                <div>
                  <h4 className="text-text-primary font-bold">Low-Bandwidth Optimization</h4>
                  <p className="text-sm text-text-secondary">Ensuring your app works perfectly even on 3G networks.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <ShieldCheck className="text-accent-cyan mt-1" size={20} />
                <div>
                  <h4 className="text-text-primary font-bold">Local Compliance</h4>
                  <p className="text-sm text-text-secondary">Data handling tailored to regional regulations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}