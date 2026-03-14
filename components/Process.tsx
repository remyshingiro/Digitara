"use client";
import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery", desc: "Aligning your vision with technical and market needs." },
  { id: "02", title: "Design", desc: "Crafting high-fidelity, conversion-first user interfaces." },
  { id: "03", title: "Develop", desc: "Building high-performance code with React and Go." },
  { id: "04", title: "Launch", desc: "Rigorous testing followed by seamless deployment." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-surface/30">
      <div className="max-w-[1100px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-clash text-center mb-24 text-text-primary">
          How <span className="text-accent-cyan">Digitara</span> Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // 🚀 Offset logic: Steps 2 and 4 (index 1 & 3) move up on desktop
              className={`glass p-8 rounded-3xl border-white/5 flex flex-col items-center text-center transition-all
                ${(index === 1 || index === 3) ? "lg:-mt-12 lg:mb-12" : ""}`}
            >
              <div className="w-16 h-16 rounded-full bg-dark-bg border border-accent-cyan flex items-center justify-center text-accent-cyan font-clash text-xl mb-6 shadow-[0_0_15px_rgba(0,212,255,0.15)] shrink-0">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-3 font-clash text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary font-jakarta leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}