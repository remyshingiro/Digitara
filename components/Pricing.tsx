"use client";
import { Check, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    oldPrice: "Frw 599,000",
    price: "Frw 479,000",
    desc: "Perfect for small businesses looking to establish their online presence.",
    features: [
      { text: "Free domain & Hosting", included: true },
      { text: "Custom Website Design", included: true },
      { text: "Up to 5 Pages with CMS", included: true },
      { text: "Mobile-First Design", included: true },
      { text: "E-commerce Integration", included: false },
      { text: "Admin Dashboard", included: false },
    ],
    accent: "text-accent-cyan",
    badge: "Active",
  },
  {
    name: "Professional",
    oldPrice: "Frw 1,099,000",
    price: "Frw 899,000",
    desc: "Ideal for growing businesses that need advanced functionality.",
    features: [
      { text: "Free domain & Hosting", included: true },
      { text: "Custom Web App Dev", included: true },
      { text: "Database Integration", included: true },
      { text: "User Auth & Management", included: true },
      { text: "E-commerce & Payments", included: true },
      { text: "Admin Dashboard", included: true },
    ],
    accent: "text-[#8FFF00]",
    badge: "Save 18%",
    highlight: true,
  },
  {
    name: "Enterprise",
    oldPrice: "Frw 2,499,000",
    price: "Frw 1,899,000",
    desc: "Complete enterprise solution for large-scale requirements.",
    features: [
      { text: "Full-Stack Custom Dev", included: true },
      { text: "Mobile App (iOS/Android)", included: true },
      { text: "Advanced Backend Arch", included: true },
      { text: "Multi-tenant System", included: true },
      { text: "API Integrations", included: true },
      { text: "Dedicated Manager", included: true },
    ],
    accent: "text-accent-amber",
    badge: "Popular",
  },
];

export default function Pricing() {
  const handleConsultClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 px-6 relative transition-colors duration-500">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-clash text-text-primary tracking-tight">
            Pricing <span className="opacity-30 italic">Plans</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500",
                "bg-white/40 dark:bg-surface/30",
                "box-shadow-2xl shadow-black/5 dark:shadow-none",
                plan.highlight 
                  ? "border-accent-cyan/30 scale-[1.02] z-10 ring-1 ring-accent-cyan/10" 
                  : "border-border-subtle"
              )}
            >
              {/* Badge Wrapper */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-[11px] font-bold text-red-500/80 dark:text-red-400 uppercase tracking-[0.2em]">Tier {index + 1}</span>
                <div className="relative">
                  <div className="relative px-3 py-1 rounded-full border border-border-subtle bg-surface/5 backdrop-blur-md">
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider", plan.accent)}>
                      {plan.badge}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-clash text-text-primary mb-4">{plan.name}</h3>
                
                <div className="mb-8">
                  <span className="text-xs text-text-secondary/50 line-through block mb-1">{plan.oldPrice}</span>
                  <span className="text-4xl font-bold text-text-primary tracking-tighter">{plan.price}</span>
                </div>

                <p className="text-sm text-text-secondary mb-10 leading-relaxed font-jakarta font-medium opacity-80">
                  {plan.desc}
                </p>

                <div className="space-y-4 mb-12">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      {feature.included ? (
                        <div className={cn("p-1 rounded-full bg-current/10", plan.accent)}>
                          <Check size={12} className="stroke-[3]" />
                        </div>
                      ) : (
                        <div className="p-1 rounded-full bg-text-secondary/10">
                          <X size={12} className="text-text-secondary/30" />
                        </div>
                      )}
                      <span className={cn(
                        "text-[12px] font-jakarta font-medium transition-colors",
                        feature.included ? "text-text-primary/90" : "text-text-secondary/40"
                      )}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  type="button"
                  onClick={handleConsultClick}
                  className={cn(
                    "group w-full py-5 rounded-2xl font-bold text-[13px] transition-all flex items-center justify-center gap-2 border cursor-pointer active:scale-95",
                    plan.highlight 
                      ? "bg-accent-cyan text-black border-accent-cyan hover:shadow-lg hover:shadow-accent-cyan/20" 
                      : "bg-transparent text-text-primary border-border-subtle hover:bg-surface/50"
                  )}
                >
                  Consult Now
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}