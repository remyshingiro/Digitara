"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectType, setProjectType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    router.push("/contact/success");
  };

  const inputStyles = "bg-white/[0.03] border border-white/10 p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full text-white placeholder:text-white/30 placeholder:font-light font-jakarta text-base";

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-clash text-white mb-8 tracking-tight leading-[1.1]">
              Ready to Launch <br /> Your <span className="text-accent-cyan italic">Vision?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 mb-12 font-jakarta leading-relaxed max-w-md">
              Let’s build something extraordinary together. Reach out for a consultation and let's discuss your next big project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-cyan/50 transition-colors">
                  <Mail size={20} className="text-accent-cyan" />
                </div>
                <span className="text-white font-mono text-sm tracking-wider uppercase">hello@digitara.com</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent-cyan/50 transition-colors">
                  <MapPin size={20} className="text-accent-cyan" />
                </div>
                <span className="text-white font-mono text-sm tracking-wider uppercase">Kigali, Rwanda</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-[2.5rem] space-y-5 border border-white/5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input 
              required
              type="text" 
              placeholder="Name" 
              className={inputStyles} 
            />
            <input 
              required
              type="email" 
              placeholder="Email" 
              className={inputStyles} 
            />
          </div>

          <div className="relative">
            <select 
              required
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className={`${inputStyles} appearance-none cursor-pointer ${
                projectType === "" ? "text-white/30" : "text-white"
              }`}
            >
              <option value="" disabled>Select Project Type</option>
              <option value="web-app" className="bg-dark-bg text-white">Web Application</option>
              <option value="ecommerce" className="bg-dark-bg text-white">E-Commerce</option>
              <option value="saas" className="bg-dark-bg text-white">SaaS Development</option>
            </select>
            {/* Custom Arrow to ensure it looks sharp */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <textarea 
            required
            placeholder="Tell us about your project" 
            rows={4} 
            className={`${inputStyles} resize-none`}
          ></textarea>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-cyan text-dark-bg py-5 rounded-2xl font-bold text-base hover:brightness-110 shadow-xl shadow-accent-cyan/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-dark-bg border-t-transparent animate-spin rounded-full" />
                Processing...
              </span>
            ) : (
              "Launch Project Request"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}