"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How long does a typical project take?", a: "Most website projects take 4–6 weeks, while complex SaaS platforms can take 3–6 months depending on requirements." },
  { q: "What technologies do you use?", a: "We specialize in the React ecosystem, specifically Next.js, Tailwind CSS, and TypeScript for robust, scalable applications." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide ongoing maintenance and support packages to ensure your platform stays secure and up-to-date." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-clash text-center mb-12 text-text-primary">
          Frequently Asked <span className="text-accent-cyan">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left"
              >
                <span className="font-bold text-lg text-text-primary">{faq.q}</span>
                {openIndex === i ? <Minus className="text-accent-cyan" /> : <Plus className="text-accent-cyan" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="p-6 pt-0 text-text-secondary leading-relaxed font-jakarta">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}