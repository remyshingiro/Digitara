"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call delay (typical for premium SaaS feels)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    router.push("/contact/success"); // Redirects to app/contact/success/page.tsx
  };

  return (
    <section className="py-20 lg:py-32 bg-surface/20">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold font-clash text-text-primary mb-6">
            Ready to Launch <br /> Your <span className="text-accent-cyan">Vision?</span>
          </h2>
          <p className="text-xl text-text-secondary mb-10 font-jakarta">
            Let’s build something extraordinary together. Reach out for a consultation.
          </p>
          <div className="space-y-4 text-text-primary font-medium">
            <p className="flex items-center gap-4 text-accent-cyan font-mono">hello@digitara.com</p>
            <p>Kigali, Rwanda</p>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 rounded-3xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              required
              type="text" 
              placeholder="Name" 
              className="bg-dark-bg/50 border border-border-subtle p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full text-text-primary placeholder:text-text-secondary" 
            />
            <input 
              required
              type="email" 
              placeholder="Email" 
              className="bg-dark-bg/50 border border-border-subtle p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full text-text-primary placeholder:text-text-secondary" 
            />
          </div>
          <select 
            required
            className="bg-dark-bg/50 border border-border-subtle p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full text-text-secondary appearance-none"
          >
            <option value="">Project Type</option>
            <option value="web-app">Web Application</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="saas">SaaS Development</option>
          </select>
          <textarea 
            required
            placeholder="Message" 
            rows={4} 
            className="bg-dark-bg/50 border border-border-subtle p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full text-text-primary placeholder:text-text-secondary"
          ></textarea>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-cyan text-dark-bg py-4 rounded-xl font-bold hover:brightness-110 shadow-lg shadow-accent-cyan/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}