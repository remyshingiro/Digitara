"use client";
import { Check, X, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Script from "next/script";

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
    accent: "text-[#00D4FF]",
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
    accent: "text-[#FF8A00]",
    badge: "Popular",
  },
];

export default function PricingPage() {
  const handleConsultClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  // 🚀 SEO: Structured Data for Google
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
    <main className="bg-dark-bg min-h-screen pt-32 pb-20 overflow-x-hidden">
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-clash text-white tracking-tight mb-6"
          >
            Invest in <span className="text-accent-cyan italic">Growth.</span>
          </motion.h1>
          <p className="text-white/40 max-w-xl mx-auto font-jakarta">
            Transparent, high-performance development tiers designed to scale your vision from Rwanda to the world.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-32">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500",
                plan.highlight 
                  ? "bg-white/[0.03] border-white/10 shadow-2xl scale-[1.05] z-10" 
                  : "bg-transparent border-white/5 hover:border-white/10"
              )}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30">Tier {index + 1}</span>
                <div className="relative">
                  <div className={cn("absolute inset-0 blur-md opacity-20", plan.accent.replace('text-', 'bg-'))} />
                  <div className="relative px-3 py-1 rounded-full border border-white/10 bg-white/5">
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider", plan.accent)}>
                      {plan.badge}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-clash text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-[12px] text-white/20 line-through block mb-1">{plan.oldPrice}</span>
                <span className="text-4xl font-bold text-white tracking-tighter">{plan.price}</span>
              </div>

              <p className="text-sm text-white/40 mb-8 leading-relaxed font-jakarta">
                {plan.desc}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check size={16} className={cn("flex-shrink-0", plan.accent)} />
                    ) : (
                      <X size={16} className="flex-shrink-0 text-white/10" />
                    )}
                    <span className={cn(
                      "text-[12px] font-jakarta",
                      feature.included ? "text-white/70" : "text-white/20"
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleConsultClick}
                className={cn(
                  "group w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border active:scale-95",
                  plan.highlight 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-white border-white/10 hover:bg-white/5"
                )}
              >
                Secure Your Spot
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* 🚀 ADDED: FAQ Section for Founders (SEO & Trust) */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-clash text-white mb-4">Founder's <span className="text-accent-cyan">FAQ</span></h2>
            <p className="text-white/40 text-sm italic">Clear answers for decisive leaders.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How fast is delivery?", a: "Starter projects typically launch in 2-3 weeks. Professional apps range from 6-10 weeks depending on complexity." },
              { q: "Do I own the code?", a: "100%. Upon final payment, all intellectual property and source code are transferred to your company." },
              { q: "Can we scale later?", a: "Yes. Every line of code we write is built with scalability in mind using modular Next.js architecture." }
            ].map((faq, i) => (
              <div key={i} className="glass p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <HelpCircle size={18} className="text-accent-cyan" /> {faq.q}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}