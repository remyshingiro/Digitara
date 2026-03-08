"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold text-accent-cyan tracking-tighter font-clash">
          DIGITARA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link href="/services" className="hover:text-accent-cyan transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-accent-cyan transition-colors">Portfolio</Link>
          <button className="bg-accent-cyan text-dark-bg px-5 py-2 rounded-lg font-bold hover:scale-105 transition-transform">
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-border-subtle p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top duration-300">
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Services</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Portfolio</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Pricing</Link>
          <button className="bg-accent-cyan text-dark-bg w-full py-4 rounded-xl font-bold">
            Get a Free Quote
          </button>
        </div>
      )}
    </nav>
  );
}