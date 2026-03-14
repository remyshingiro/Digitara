"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; 
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
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚀 FIXED SCROLL LOGIC
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open

    const element = document.getElementById("contact");
    if (element) {
      // If we are on the page where #contact exists
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // If we are on a subpage, go home first then scroll
      router.push("/#contact");
    }
  };

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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={cn(
                    "transition-colors relative group",
                    isActive ? "text-accent-cyan" : "text-text-secondary hover:text-accent-cyan"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[1px] bg-accent-cyan transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              );
            })}
          </div>
          
          {/* 🚀 UPDATED DESKTOP BUTTON */}
          <button 
            onClick={handleContactClick}
            className="bg-accent-cyan text-dark-bg px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:brightness-110 hover:gap-3 transition-all active:scale-95 cursor-pointer"
          >
            Start Your Project
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-primary p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 glass border border-white/10 p-8 rounded-3xl flex flex-col gap-6 md:hidden animate-in fade-in zoom-in duration-300 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className={cn(
                  "text-2xl font-bold font-clash transition-colors",
                  isActive ? "text-accent-cyan" : "text-text-primary hover:text-accent-cyan"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* 🚀 UPDATED MOBILE BUTTON */}
          <button 
            onClick={handleContactClick}
            className="w-full bg-accent-cyan text-dark-bg py-5 rounded-xl font-bold text-lg mt-4 shadow-lg shadow-accent-cyan/20 active:scale-95 cursor-pointer"
          >
            Start Your Project
          </button>
        </div>
      )}
    </div>
  );
}