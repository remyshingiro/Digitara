"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

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
  // Reading Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      {/* 🚀 Elite Feature: Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent-cyan origin-left z-[110]" 
        style={{ scaleX }} 
      />

      <div className="max-w-[1000px] mx-auto px-6">
        {/* Back Link */}
        <Link href="/portfolio" className="flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-accent-cyan font-mono text-sm uppercase tracking-widest">{projectData.category}</span>
          <h1 className="text-5xl md:text-7xl font-bold font-clash text-text-primary mt-4 mb-8 leading-tight">
            {projectData.title}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed font-jakarta max-w-2xl">
            {projectData.description}
          </p>
        </motion.div>

        {/* Project Image Visual */}
        <div className="glass aspect-video rounded-3xl mb-20 overflow-hidden relative border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-transparent group-hover:scale-110 transition-transform duration-700" />
          <div className="flex items-center justify-center h-full">
            <p className="text-text-secondary font-mono animate-pulse">PROJECT_PREVIEW_V1.PNG</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-16 relative">
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold font-clash mb-6 text-text-primary">The Challenge</h2>
              <p className="text-lg text-text-secondary leading-relaxed font-jakarta">{projectData.challenge}</p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold font-clash mb-6 text-text-primary">The Solution</h2>
              <p className="text-lg text-text-secondary leading-relaxed font-jakarta">{projectData.solution}</p>
            </section>

            {/* Final Project CTA */}
            <div className="pt-20 border-t border-white/5">
               <h3 className="text-text-secondary text-sm uppercase tracking-widest mb-4">Up Next</h3>
               <Link href={`/portfolio/${projectData.nextProject.id}`} className="group inline-flex items-center gap-4">
                  <span className="text-4xl md:text-6xl font-bold font-clash text-text-primary group-hover:text-accent-cyan transition-colors">
                    {projectData.nextProject.title}
                  </span>
                  <ArrowRight size={48} className="text-accent-cyan group-hover:translate-x-4 transition-transform" />
               </Link>
            </div>
          </div>

          {/* 🚀 Elite Feature: Sticky Sidebar */}
          <aside className="md:sticky md:top-32 h-fit space-y-12">
            <div className="glass p-8 rounded-2xl border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {projectData.stack.map(tech => (
                  <span key={tech} className="bg-dark-bg border border-white/5 px-3 py-1.5 rounded-lg text-[10px] font-mono text-text-primary uppercase tracking-tighter">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-6">Results</h3>
                <ul className="space-y-4">
                  {projectData.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <ShieldCheck size={18} className="text-accent-cyan shrink-0" />
                      {res}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-10 bg-accent-cyan text-dark-bg py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-accent-cyan/10 transition-all">
                Launch Site <ExternalLink size={18} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}