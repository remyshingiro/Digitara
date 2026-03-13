"use client";
import { motion } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Localized Innovation",
    desc: "We build solutions specifically tailored for the Rwandan market and beyond, like our agricultural management systems."
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Leveraging Next.js and Cloudflare to ensure lightning-fast digital experiences."
  },
  {
    icon: Users,
    title: "Empowering Founders",
    desc: "Helping local entrepreneurs transition from traditional models to modern digital platforms."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-clash text-text-primary mb-8">
            Our Mission is to <span className="text-accent-cyan">Digitize Rwanda</span>
          </h1>
          <p className="text-xl text-text-secondary font-jakarta leading-relaxed">
            Digitara was born out of a desire to provide world-class software development 
            within our local community. From our roots at RP-Gishari college to deploying 
            global-scale streaming apps, we bridge the gap between vision and execution.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {values.map((v, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-white/5">
              <v.icon className="text-accent-cyan mb-6" size={32} />
              <h3 className="text-2xl font-bold font-clash text-text-primary mb-4">{v.title}</h3>
              <p className="text-text-secondary font-jakarta">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="glass aspect-square rounded-3xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-transparent" />
             <div className="flex items-center justify-center h-full">
                <span className="text-accent-cyan font-mono text-xl tracking-tighter uppercase font-bold">The_Digitara_Story</span>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-clash text-text-primary mb-6">
              From Cooperative Management to <span className="text-accent-cyan">SaaS</span>
            </h2>
            <p className="text-lg text-text-secondary font-jakarta mb-6">
              Our journey started with a focus on solving real-world problems—like modernizing 
              agricultural machine management for local cooperatives. 
            </p>
            <p className="text-lg text-text-secondary font-jakarta">
              Today, Digitara specializes in the React ecosystem, delivering high-fidelity 
              E-commerce platforms and streaming services that stand on the world stage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}