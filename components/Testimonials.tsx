"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Digitara transformed our vision into a high-performance reality. Their expertise in Next.js is unmatched.",
    name: "Alex Munyaneza",
    role: "CEO, AgriTech Solutions",
    stars: 5,
  },
  {
    quote: "The team delivered a world-class e-commerce platform that doubled our conversion rate in three months.",
    name: "Sarah Chen",
    role: "Founder, SwimShop",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-darkBg">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-clash text-center mb-16 text-textPrimary">
          Trusted by <span className="text-accentCyan">Founders</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-accentAmber text-accentAmber" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-textPrimary italic mb-8 font-jakarta">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accentCyan/20 border border-accentCyan/30" />
                <div>
                  <h4 className="font-bold text-textPrimary">{t.name}</h4>
                  <p className="text-sm text-textSecondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}