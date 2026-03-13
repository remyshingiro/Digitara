"use client";
import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Rocket } from "lucide-react";

const services = [
  { 
    title: "SaaS Development", 
    desc: "End-to-end building of complex software products with Next.js 15.", 
    icon: <Cpu className="text-accent-cyan" size={32} /> 
  },
  { 
    title: "Web Applications", 
    desc: "High-performance, SEO-optimized sites deployed on Cloudflare.", 
    icon: <Globe className="text-accent-cyan" size={32} /> 
  },
  { 
    title: "UI/UX Strategy", 
    desc: "Premium designs that focus on conversion and user retention.", 
    icon: <Code2 className="text-accent-cyan" size={32} /> 
  }
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold font-clash mb-12">Our <span className="text-accent-cyan">Expertise.</span></h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-accent-cyan/50 transition-colors group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h3 className="text-2xl font-bold font-clash mb-4">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}