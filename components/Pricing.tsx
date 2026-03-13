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
    accent: "text-[#00D4FF]",
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
    accent: "text-[#FF8A00]",
    badge: "Popular",
  },
];

export default function Pricing() {
  // 🚀 HARD-FIXED SCROLL: Using native element selection
  const handleConsultClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80; // Account for a sticky header if you have one
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className="py-20 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-clash text-white tracking-tight">
            Pricing <span className="opacity-40 italic">Tiers</span>
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
                "relative flex flex-col p-7 rounded-[2rem] border transition-all duration-500",
                plan.highlight 
                  ? "bg-white/[0.03] border-white/10 shadow-2xl scale-[1.02] z-10" 
                  : "bg-transparent border-white/5 hover:border-white/10"
              )}
            >
              {/* Badge Wrapper */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">Tier_{index + 1}</span>
                <div className="relative group">
                  <div className={cn("absolute inset-0 blur-md opacity-20", plan.accent.replace('text-', 'bg-'))} />
                  <div className="relative px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider", plan.accent)}>
                      {plan.badge}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold font-clash text-white mb-4">{plan.name}</h3>
                
                <div className="mb-6">
                  <span className="text-[10px] text-white/20 line-through block mb-1">{plan.oldPrice}</span>
                  <span className="text-3xl font-bold text-white tracking-tighter">{plan.price}</span>
                </div>

                <p className="text-xs text-white/40 mb-8 leading-relaxed">
                  {plan.desc}
                </p>

                <div className="space-y-3 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check size={14} className={cn("flex-shrink-0", plan.accent)} />
                      ) : (
                        <X size={14} className="flex-shrink-0 text-white/10" />
                      )}
                      <span className={cn(
                        "text-[11px] font-jakarta tracking-wide",
                        feature.included ? "text-white/70" : "text-white/20"
                      )}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 🚀 INSTANT CLICK BUTTON */}
                <button 
                  type="button"
                  onClick={handleConsultClick}
                  className={cn(
                    "group w-full py-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 border cursor-pointer active:scale-95",
                    plan.highlight 
                      ? "bg-white text-black border-white hover:bg-transparent hover:text-white" 
                      : "bg-transparent text-white border-white/10 hover:bg-white/5"
                  )}
                >
                  Consult Now
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}