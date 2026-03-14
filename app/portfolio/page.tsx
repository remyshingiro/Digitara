"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const projectData = {
  title: "AgriTrack Rwanda",
  category: "Agricultural SaaS",
  description: "Modernizing the cooperative management of agricultural machinery through a high-performance digital dashboard.",
  challenge: "Local cooperatives struggled with manual tracking of heavy machinery, leading to maintenance delays and revenue loss. They needed a low-latency, mobile-friendly solution that works in low-connectivity areas.",
  solution: "Built using Next.js 15 and Tailwind CSS, the platform leverages Edge Functions on Cloudflare to ensure sub-100ms response times across Rwanda. We implemented a custom offline-first caching strategy.",
  stack: ["Next.js 15", "Tailwind CSS", "Cloudflare Workers", "PostgreSQL"],
  results: ["60% Reduction in manual paperwork", "Real-time GPS machine tracking", "Deployed to 12 cooperatives"],
  nextProject: { title: "StreamIt", id: "streamit" }
};

export default function CaseStudy() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="pt-32 pb-20 min-h-screen relative transition-colors duration-500 bg-dark-bg">
      {/* 🚀 Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent-cyan origin-left z-[110]" 
        style={{ scaleX }} 
      />

      <div className="max-w-[1000px] mx-auto px-6">
        {/* Back Link */}
        <Link href="/portfolio" className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors mb-12 group font-medium">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-accent-cyan font-mono text-xs uppercase tracking-[0.3em] font-bold">{projectData.category}</span>
          <h1 className="text-5xl md:text-7xl font-bold font-clash text-text-primary mt-4 mb-8 leading-tight tracking-tight">
            {projectData.title}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed font-jakarta max-w-2xl font-medium opacity-90">
            {projectData.description}
          </p>
        </motion.div>

        {/* Project Image Visual */}
        <div className={cn(
          "glass aspect-video rounded-[2.5rem] mb-20 overflow-hidden relative border transition-all duration-500",
          "bg-white/40 dark:bg-surface/30 border-border-subtle shadow-2xl shadow-black/5 dark:shadow-none group"
        )}>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
          <div className="flex items-center justify-center h-full">
            <p className="text-text-secondary font-mono text-xs tracking-widest animate-pulse font-bold opacity-40 uppercase">Project_Preview_V1.png</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-16 relative">
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold font-clash mb-6 text-text-primary">The Challenge</h2>
              <p className="text-lg text-text-secondary leading-relaxed font-jakarta font-medium opacity-90">{projectData.challenge}</p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold font-clash mb-6 text-text-primary">The Solution</h2>
              <p className="text-lg text-text-secondary leading-relaxed font-jakarta font-medium opacity-90">{projectData.solution}</p>
            </section>

            {/* Final Project CTA */}
            <div className="pt-20 border-t border-border-subtle">
               <h3 className="text-text-secondary text-[10px] uppercase tracking-[0.4em] mb-4 font-bold opacity-50">Up Next</h3>
               <Link href={`/portfolio/${projectData.nextProject.id}`} className="group inline-flex items-center gap-6">
                  <span className="text-4xl md:text-6xl font-bold font-clash text-text-primary group-hover:text-accent-cyan transition-all tracking-tighter">
                    {projectData.nextProject.title}
                  </span>
                  <ArrowRight size={48} className="text-accent-cyan group-hover:translate-x-4 transition-transform hidden md:block" />
               </Link>
            </div>
          </div>

          {/* 🚀 Sticky Sidebar */}
          <aside className="md:sticky md:top-32 h-fit space-y-12">
            <div className={cn(
              "glass p-8 rounded-[2rem] border transition-all duration-500",
              "bg-white/50 dark:bg-surface/30 border-border-subtle shadow-xl shadow-black/5"
            )}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-cyan mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.stack.map(tech => (
                  <span key={tech} className="bg-surface/10 dark:bg-dark-bg border border-border-subtle px-3 py-1.5 rounded-lg text-[9px] font-mono text-text-primary uppercase tracking-tighter font-bold">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-cyan mb-6">Results</h3>
                <ul className="space-y-4">
                  {projectData.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-text-secondary font-medium leading-snug">
                      <ShieldCheck size={18} className="text-accent-cyan shrink-0" />
                      {res}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-10 bg-accent-cyan text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-accent-cyan/20 transition-all cursor-pointer active:scale-95 text-xs uppercase tracking-widest">
                Launch Site <ExternalLink size={14} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}