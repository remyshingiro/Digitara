"use client";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Script from "next/script";
import React, { useState, useEffect } from "react";

const plans = [
  {
    name: "Starter",
    oldPrice: "Frw 599,000",
    price: "Frw 479,000",
    numericPrice: 479000,
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
    numericPrice: 899000,
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
    numericPrice: 1899000,
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

export default function PricingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleConsultClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Digitara Web Development Plans",
    "description": "Premium web and software development pricing for startups in Rwanda.",
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "name": plan.name,
      "price": plan.numericPrice,
      "priceCurrency": "RWF",
      "availability": "https://schema.org/InStock"
    }))
  };

  return (
    <main className="bg-dark-bg min-h-screen pt-32 pb-20 overflow-x-hidden transition-colors duration-500">
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-clash text-text-primary tracking-tight mb-8">
              Invest in <span className="text-accent-cyan italic">Growth.</span>
            </h1>
            <p className="text-text-secondary max-w-xl mx-auto font-jakarta font-medium opacity-80 text-lg">
              Transparent, high-performance development tiers designed to scale your vision from Rwanda to the world stage.
            </p>
          </motion.div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-32">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500",
                "bg-white/40 dark:bg-surface/30",
                plan.highlight 
                  ? "border-accent-cyan/40 shadow-2xl scale-[1.05] z-10 shadow-black/5 dark:shadow-none" 
                  : "border-border-subtle shadow-xl shadow-black/5 dark:shadow-none"
              )}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary opacity-50">Tier {index + 1}</span>
                <div className="relative">
                  <div className="relative px-3 py-1 rounded-full border border-border-subtle bg-surface/5">
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider", plan.accent)}>
                      {plan.badge}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-clash text-text-primary mb-2 tracking-tight">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-[12px] text-text-secondary/40 line-through block mb-1">{plan.oldPrice}</span>
                <span className="text-4xl font-bold text-text-primary tracking-tighter">{plan.price}</span>
              </div>

              <p className="text-sm text-text-secondary mb-10 leading-relaxed font-jakarta font-medium opacity-80">
                {plan.desc}
              </p>

              <div className="space-y-4 mb-12 flex-grow">
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
                      "text-[12px] font-jakarta font-medium",
                      feature.included ? "text-text-primary/90" : "text-text-secondary/30"
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleConsultClick}
                className={cn(
                  "group w-full py-5 rounded-2xl font-bold text-[13px] transition-all flex items-center justify-center gap-2 border cursor-pointer active:scale-95 uppercase tracking-widest",
                  plan.highlight 
                    ? "bg-accent-cyan text-black border-accent-cyan shadow-lg shadow-accent-cyan/20" 
                    : "bg-transparent text-text-primary border-border-subtle hover:bg-surface/50"
                )}
              >
                Secure Your Spot
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* 🚀 FAQ Section for Founders */}
        <div className="max-w-3xl mx-auto pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-clash text-text-primary mb-4 tracking-tight">Founder's <span className="text-accent-cyan italic">FAQ</span></h2>
            <p className="text-text-secondary text-sm font-medium opacity-60">Clear answers for decisive regional leaders.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How fast is delivery?", a: "Starter projects typically launch in 2-3 weeks. Professional apps range from 6-10 weeks depending on complexity." },
              { q: "Do I own the code?", a: "100%. Upon final payment, all intellectual property and source code are transferred to your company." },
              { q: "Can we scale later?", a: "Yes. Every line of code we write is built with scalability in mind using modular architecture and Go backends." }
            ].map((faq, i) => (
              <div key={i} className={cn(
                "glass p-8 rounded-[2rem] border transition-all duration-300",
                "bg-white/40 dark:bg-surface/30 border-border-subtle"
              )}>
                <h4 className="text-text-primary font-bold mb-4 flex items-center gap-3 text-lg tracking-tight">
                  <HelpCircle size={22} className="text-accent-cyan" /> {faq.q}
                </h4>
                <p className="text-text-secondary text-base leading-relaxed font-medium opacity-90">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}