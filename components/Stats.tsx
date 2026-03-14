"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "98%" },
  { label: "Years Experience", value: "10+" },
  { label: "Uptime Guarantee", value: "99.9%" },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-transparent">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent-cyan/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Right Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2" 
        >
          <div className="inline-block px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-[10px] font-mono uppercase tracking-widest mb-6">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-clash text-text-primary mb-6 leading-tight">
            Why Choose <span className="text-accent-cyan">Digitara</span>?
          </h2>
          <p className="text-lg text-text-secondary font-jakarta leading-relaxed opacity-90">
            We don't just write code; we build digital assets. Our approach combines 
            modern technology with a deep understanding of business transformation. 
            From startups in Rwanda to corporate clients globally, we deliver 
            excellence at every pixel.
          </p>
          <div className="mt-8">
             <button className="group text-accent-cyan font-bold flex items-center gap-2 transition-all hover:brightness-110">
                Learn more about our mission 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
             </button>
          </div>
        </motion.div>

        {/* Left Side (Stats Grid) */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 order-2 lg:order-1">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "glass p-8 rounded-[2rem] text-center md:text-left transition-all duration-300",
                "bg-white/40 dark:bg-surface/30", // Tinted white for light mode
                "hover:border-accent-cyan/30 hover:shadow-xl hover:shadow-accent-cyan/5"
              )}
            >
              <div className="text-3xl md:text-4xl font-bold font-clash text-accent-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm md:text-base font-jakarta font-medium opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}