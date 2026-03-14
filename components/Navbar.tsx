"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; 
import { useTheme } from "next-themes";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById("contact");
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  const ThemeIcon = () => {
    if (!mounted) return <div className="w-10 h-10" />;
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2.5 rounded-xl border border-border-subtle glass hover:border-accent-cyan/30 transition-all active:scale-90 cursor-pointer"
        aria-label="Toggle Theme"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-accent-cyan" />
            ) : (
              <Moon size={18} className="text-orange-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 flex justify-center">
      <nav 
        className={cn(
          "w-full max-w-[1200px] transition-all duration-300 rounded-2xl flex items-center justify-between px-6 border",
          scrolled 
            ? "glass border-border-subtle py-3 shadow-xl shadow-black/5 dark:shadow-none" 
            : "bg-transparent border-transparent py-5"
        )}
      >
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-accent-cyan tracking-tighter font-clash group">
          DIGI<span className="text-text-primary group-hover:text-accent-cyan transition-colors">TARA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
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
          
          <div className="h-6 w-[1px] bg-border-subtle mx-2" /> {/* Divider */}
          <ThemeIcon />

          <button 
            onClick={handleContactClick}
            className="bg-accent-cyan text-black px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:brightness-110 transition-all active:scale-95 cursor-pointer shadow-lg shadow-accent-cyan/20"
          >
            Start Project
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeIcon />
          <button 
            className="text-text-primary p-2 cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass border border-border-subtle p-8 rounded-3xl flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className={cn(
                  "text-2xl font-bold font-clash transition-colors",
                  pathname === link.href ? "text-accent-cyan" : "text-text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleContactClick}
              className="w-full bg-accent-cyan text-black py-5 rounded-2xl font-bold text-lg mt-4 cursor-pointer"
            >
              Start Your Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}