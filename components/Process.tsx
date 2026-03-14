"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  { id: "01", title: "Discovery", desc: "Aligning your vision with technical and market needs." },
  { id: "02", title: "Design", desc: "Crafting high-fidelity, conversion-first user interfaces." },
  { id: "03", title: "Develop", desc: "Building high-performance code with React and Go." },
  { id: "04", title: "Launch", desc: "Rigorous testing followed by seamless deployment." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      {/* Subtle background wash to separate section */}
      <div className="absolute inset-0 bg-surface/5 dark:bg-transparent pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-clash text-center mb-24 text-text-primary">
          How <span className="text-accent-cyan">Digitara</span> Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "glass p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500",
                "bg-white/40 dark:bg-surface/30",
                "border-border-subtle",
                (index === 1 || index === 3) ? "lg:-mt-12 lg:mb-12 shadow-2xl dark:shadow-none shadow-black/5" : "shadow-xl dark:shadow-none shadow-black/5",
                "hover:border-accent-cyan/30 hover:-translate-y-1"
              )}
            >
              {/* Number Circle: Switched bg-dark-bg to a dynamic badge style */}
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center font-clash text-xl mb-6 shrink-0 transition-colors border",
                "bg-surface dark:bg-dark-bg border-accent-cyan/30 text-accent-cyan",
                "shadow-[0_0_20px_rgba(0,212,255,0.1)]"
              )}>
                {step.id}
              </div>

              <h3 className="text-xl font-bold mb-4 font-clash text-text-primary tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-sm text-text-secondary font-jakarta leading-relaxed opacity-90 font-medium">
                {step.desc}
              </p>

              {/* Decorative connector for desktop zigzag */}
              <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-border-subtle last:hidden" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}