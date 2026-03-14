"use client";
import React from "react";
import Link from "next/link";
import { Twitter, Github, Linkedin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-border-subtle pt-20 pb-10 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-accent-cyan tracking-tighter font-clash group">
              DIGI<span className="text-text-primary group-hover:text-accent-cyan transition-colors">TARA</span>
            </Link>
            <p className="text-text-secondary font-jakarta leading-relaxed text-sm opacity-90">
              Crafting premium digital experiences for the next generation of innovators and startups across East Africa.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-xl bg-surface/5 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-surface/5 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all">
                <Github size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-surface/5 border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-all">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-text-primary mb-6 font-clash uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-text-secondary font-jakarta text-sm">
              <li><Link href="/services" className="hover:text-accent-cyan transition-colors">Web Design</Link></li>
              <li><Link href="/services" className="hover:text-accent-cyan transition-colors">SaaS Development</Link></li>
              <li><Link href="/services" className="hover:text-accent-cyan transition-colors">E-Commerce</Link></li>
              <li><Link href="/services" className="hover:text-accent-cyan transition-colors">SEO & Performance</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-text-primary mb-6 font-clash uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-text-secondary font-jakarta text-sm">
              <li><Link href="/portfolio" className="hover:text-accent-cyan transition-colors">Our Work</Link></li>
              <li><Link href="/pricing" className="hover:text-accent-cyan transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-accent-cyan transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-accent-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-text-primary mb-6 font-clash uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-text-secondary mb-6 text-sm opacity-80">Subscribe to get the latest digital insights from our Kigali hub.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className={cn(
                  "w-full bg-surface/5 border border-border-subtle p-3 pr-12 rounded-xl outline-none transition-all",
                  "text-text-primary placeholder:text-text-secondary/40 focus:border-accent-cyan/50"
                )}
              />
              <button className="absolute right-1.5 top-1.5 bg-accent-cyan text-black p-2 rounded-lg hover:brightness-110 transition-all cursor-pointer">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-text-secondary font-medium">
          <p>© {new Date().getFullYear()} Digitara. Engineered in Rwanda.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}