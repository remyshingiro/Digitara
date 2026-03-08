"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$999",
    desc: "Perfect for personal brands and early-stage MVPs.",
    features: ["Custom UI Design", "Responsive Web App", "SEO Optimization", "3 Months Support"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$2,499",
    desc: "The sweet spot for scaling startups and SMEs.",
    features: ["Advanced UX Design", "Full-Stack Development", "SaaS Architecture", "E-commerce Integration", "1 Year Support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Dedicated solutions for large-scale digital transformation.",
    features: ["Cloud Infrastructure", "Custom API Integrations", "Security Auditing", "Dedicated Team", "24/7 Priority Support"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-clash text-text-primary">
            Scalable <span className="text-accent-cyan">Pricing</span>
          </h2>
          <p className="mt-4 text-text-secondary font-jakarta">
            Transparent investment tiers for world-class digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "glass p-8 rounded-3xl flex flex-col relative overflow-hidden transition-all duration-300",
                plan.highlight ? "border-accent-cyan shadow-[0_0_40px_rgba(0,212,255,0.15)] scale-105 z-10" : "border-white/5"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-accent-cyan text-dark-bg px-4 py-1 text-xs font-bold rounded-bl-xl uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold font-clash text-text-primary mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-text-secondary text-sm">/project</span>}
              </div>
              <p className="text-sm text-text-secondary mb-8 font-jakarta">{plan.desc}</p>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={18} className="text-accent-cyan" />
                    <span className="text-sm text-text-secondary font-jakarta">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                plan.highlight 
                  ? "bg-accent-cyan text-dark-bg hover:brightness-110 shadow-lg shadow-accent-cyan/20" 
                  : "glass hover:bg-white/5"
              )}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}