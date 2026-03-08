"use client";
import { motion } from "framer-motion";

export default function Contact() {
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
            <p className="flex items-center gap-4 text-accent-cyan">hello@digitara.com</p>
            <p>Kigali, Rwanda</p>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 rounded-3xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name" className="bg-dark-bg/50 border border-border-subtle p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full" />
            <input type="email" placeholder="Email" className="bg-dark-bg/50 border border-border-subtle p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full" />
          </div>
          <select className="bg-dark-bg/50 border border-border-subtle p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full text-text-secondary">
            <option>Project Type</option>
            <option>Web Application</option>
            <option>E-Commerce</option>
            <option>SaaS Development</option>
          </select>
          <textarea placeholder="Message" rows={4} className="bg-dark-bg/50 border border-border-subtle p-4 rounded-xl focus:border-accent-cyan outline-none transition-all w-full"></textarea>
          <button className="w-full bg-accent-cyan text-dark-bg py-4 rounded-xl font-bold hover:brightness-110 shadow-lg shadow-accent-cyan/20 transition-all">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}