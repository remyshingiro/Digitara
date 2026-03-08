"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "98%" },
  { label: "Years Experience", value: "10+" },
  { label: "Uptime Guarantee", value: "99.9%" },
];

export default function Stats() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Stats Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl font-bold font-clash text-accent-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm md:text-base font-jakarta">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Value Prop */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-clash text-text-primary mb-6">
            Why Choose <span className="text-accent-cyan">Digitara</span>?
          </h2>
          <p className="text-lg text-text-secondary font-jakarta leading-relaxed">
            We don't just write code; we build digital assets. Our approach combines 
            modern technology with a deep understanding of business transformation. 
            From startups in Rwanda to corporate clients globally, we deliver 
            excellence at every pixel.
          </p>
          <div className="mt-8">
             <button className="text-accent-cyan font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Learn more about our mission <span>→</span>
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}