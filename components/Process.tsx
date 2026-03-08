"use client";
import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery", desc: "We dive deep into your goals, audience, and technical needs." },
  { id: "02", title: "Design", desc: "Crafting high-fidelity prototypes that define the user experience." },
  { id: "03", title: "Develop", desc: "Turning designs into scalable, high-performance code." },
  { id: "04", title: "Launch", desc: "Rigorous testing followed by a seamless deployment." },
];

export default function Process() {
  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-clash text-center mb-20 text-text-primary">
          How <span className="text-accent-cyan">Digitara</span> Works
        </h2>

        {/* Mobile: Vertical | Desktop: Horizontal */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-border-subtle z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="w-20 h-20 rounded-full bg-dark-bg border border-accent-cyan flex items-center justify-center text-accent-cyan font-clash text-2xl mb-6 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                {step.id}
              </div>
              <h3 className="text-2xl font-bold mb-3 font-clash text-text-primary">{step.title}</h3>
              <p className="text-text-secondary font-jakarta">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}