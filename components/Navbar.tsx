"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-center">
      <nav 
        className={cn(
          "w-full max-w-[1200px] transition-all duration-300 rounded-2xl flex items-center justify-between px-6 py-3 border",
          scrolled 
            ? "glass border-white/10 shadow-lg shadow-black/20 py-3" 
            : "bg-transparent border-transparent py-5"
        )}
      >
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-accent-cyan tracking-tighter font-clash group">
          DIGI<span className="text-text-primary group-hover:text-accent-cyan transition-colors">TARA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-text-secondary hover:text-accent-cyan transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-cyan transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          
          <Link href="/contact">
            <button className="bg-accent-cyan text-dark-bg px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:brightness-110 hover:gap-3 transition-all">
              Get Quote
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-6 right-6 glass border border-white/10 p-8 rounded-3xl flex flex-col gap-6 md:hidden animate-in fade-in zoom-in duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-2xl font-bold font-clash text-text-primary hover:text-accent-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-accent-cyan text-dark-bg py-4 rounded-xl font-bold text-lg mt-4">
              Start Your Project
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}