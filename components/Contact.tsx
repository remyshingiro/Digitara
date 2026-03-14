"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

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

  // 🚀 THEME-AWARE INPUT STYLES
  const inputStyles = cn(
    "p-4 rounded-xl outline-none transition-all w-full font-jakarta text-base border",
    "bg-surface/5 dark:bg-white/[0.03] border-border-subtle focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/20",
    "text-text-primary placeholder:text-text-secondary/40 placeholder:font-light"
  );

  return (
    <section id="contact" className="py-24 lg:py-32 relative transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-clash text-text-primary mb-8 tracking-tight leading-[1.1]">
              Ready to Launch <br /> Your <span className="text-accent-cyan italic">Vision?</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-12 font-jakarta leading-relaxed max-w-md opacity-90">
              Let’s build something extraordinary together. Reach out for a consultation and let's discuss your next big project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface/5 dark:bg-white/5 flex items-center justify-center border border-border-subtle group-hover:border-accent-cyan/50 transition-all">
                  <Mail size={22} className="text-accent-cyan" />
                </div>
                <div>
                   <p className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.2em] mb-1">Email Us</p>
                   <span className="text-text-primary font-mono text-sm tracking-wider uppercase font-bold">hello@digitara.com</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-surface/5 dark:bg-white/5 flex items-center justify-center border border-border-subtle group-hover:border-accent-cyan/50 transition-all">
                  <MapPin size={22} className="text-accent-cyan" />
                </div>
                <div>
                   <p className="text-[10px] font-mono text-accent-cyan uppercase tracking-[0.2em] mb-1">Location</p>
                   <span className="text-text-primary font-mono text-sm tracking-wider uppercase font-bold">Kigali, Rwanda</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Container */}
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={cn(
            "glass p-8 md:p-12 rounded-[2.5rem] space-y-6 border border-border-subtle transition-all",
            "bg-white/40 dark:bg-surface/30 shadow-2xl shadow-black/5 dark:shadow-none"
          )}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input required type="text" placeholder="Name" className={inputStyles} />
            <input required type="email" placeholder="Email" className={inputStyles} />
          </div>

          <div className="relative">
            <select 
              required
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className={cn(
                inputStyles, "appearance-none cursor-pointer",
                projectType === "" ? "text-text-secondary/40" : "text-text-primary"
              )}
            >
              <option value="" disabled className="bg-surface dark:bg-dark-bg">Select Project Type</option>
              <option value="web-app" className="bg-surface dark:bg-dark-bg">Web Application</option>
              <option value="ecommerce" className="bg-surface dark:bg-dark-bg">E-Commerce</option>
              <option value="saas" className="bg-surface dark:bg-dark-bg">SaaS Development</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <textarea 
            required
            placeholder="Tell us about your project" 
            rows={4} 
            className={cn(inputStyles, "resize-none")}
          ></textarea>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-cyan text-black py-5 rounded-2xl font-bold text-base hover:brightness-110 shadow-xl shadow-accent-cyan/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 active:scale-[0.98] cursor-pointer mt-4"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-3">
                <div className="w-5 h-5 border-3 border-black border-t-transparent animate-spin rounded-full" />
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