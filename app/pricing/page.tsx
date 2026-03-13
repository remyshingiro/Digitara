"use client";
import { Check } from "lucide-react";

const plans = [
  { name: "Starter", price: "$999", features: ["Single Landing Page", "Next.js + Tailwind", "Cloudflare Hosting"] },
  { name: "Professional", price: "$2,499", features: ["Full Web App", "Auth & Database", "SEO Optimization", "Priority Support"] },
  { name: "Enterprise", price: "Custom", features: ["Custom SaaS Solutions", "AI Integration", "Dedicated Team", "24/7 Monitoring"] },
];

export default function PricingPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-clash mb-16">Simple <span className="text-accent-cyan">Pricing.</span></h1>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-10 rounded-3xl border ${i === 1 ? 'border-accent-cyan bg-accent-cyan/5' : 'border-white/5 glass'} text-left`}>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold font-clash mb-8 text-accent-cyan">{plan.price}</div>
              <ul className="space-y-4 mb-10">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-text-secondary text-sm">
                    <Check size={16} className="text-accent-cyan" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-accent-cyan transition-colors">Start Project</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}