"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// 1. Data moved inside the file to fix "projects is not defined"
const projects = [
  {
    title: "StreamIt",
    category: "Web Apps",
    tags: ["React", "Tailwind", "Cloudflare"],
    desc: "A high-performance streaming platform built for speed." //
  },
  {
    title: "SwimShop.online",
    category: "E-Commerce",
    tags: ["Next.js", "Namecheap"],
    desc: "Modern e-commerce architecture for specialized retail." //
  },
  {
    title: "AgriTrack Rwanda",
    category: "Web Apps",
    tags: ["React", "Agriculture", "IoT"],
    desc: "Modernizing management of agricultural machines." //
  },
  {
    title: "USA PayChecker",
    category: "Web Apps",
    tags: ["Next.js", "API"],
    desc: "Automated payroll verification system." //
  },
];

const categories = ["All", "Web Apps", "E-Commerce"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(p => 
    activeFilter === "All" ? true : p.category === activeFilter
  );

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold font-clash text-text-primary">
              Our Recent <span className="text-accent-cyan">Work</span>
            </h2>
          </div>

          {/* Mobile-Friendly Filter Bar */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border",
                  activeFilter === cat 
                    ? "bg-accent-cyan text-dark-bg border-accent-cyan" 
                    : "border-border-subtle text-text-secondary hover:border-accent-cyan/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass mb-4 border border-white/5">
                   <div className="absolute inset-0 bg-gradient-to-br from-surface to-dark-bg group-hover:scale-110 transition-transform duration-500" />
                   
                   <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="bg-accent-cyan text-dark-bg px-6 py-2 rounded-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                       View Details
                     </span>
                   </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-clash text-text-primary">{project.title}</h3>
                  <p className="text-sm text-text-secondary mt-1 mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-mono text-accent-cyan bg-accent-cyan/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}