"use client";
import React from "react";
import Link from "next/link";
import { Twitter, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkBg border-t border-border-subtle pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-accent-cyan tracking-tighter font-clash">
              DIGITARA
            </Link>
            <p className="text-text-secondary font-jakarta leading-relaxed">
              Crafting premium digital experiences for the next generation of innovators and startups.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-text-secondary hover:text-accent-cyan transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-text-secondary hover:text-accent-cyan transition-colors"><Github size={20} /></Link>
              <Link href="#" className="text-text-secondary hover:text-accent-cyan transition-colors"><Linkedin size={20} /></Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-text-primary mb-6 font-clash uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-text-secondary font-jakarta">
              <li><Link href="/services" className="hover:text-accent-cyan">Web Design</Link></li>
              <li><Link href="/services" className="hover:text-accent-cyan">SaaS Development</Link></li>
              <li><Link href="/services" className="hover:text-accent-cyan">E-Commerce</Link></li>
              <li><Link href="/services" className="hover:text-accent-cyan">SEO & Performance</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-bold text-text-primary mb-6 font-clash uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-text-secondary font-jakarta">
              <li><Link href="/portfolio" className="hover:text-accent-cyan">Our Work</Link></li>
              <li><Link href="/pricing" className="hover:text-accent-cyan">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-accent-cyan">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent-cyan">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-text-primary mb-6 font-clash uppercase tracking-widest text-sm">Stay Updated</h4>
            <p className="text-text-secondary mb-6 text-sm">Subscribe to get the latest digital insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-surface border border-border-subtle p-3 pr-12 rounded-xl focus:border-accent-cyan outline-none transition-all"
              />
              <button className="absolute right-2 top-2 bg-accent-cyan text-dark-bg p-1.5 rounded-lg hover:brightness-110 transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} Digitara. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-accent-cyan">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent-cyan">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}