"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "glass group relative p-8 rounded-[2rem] transition-all duration-500",
        // 🚀 THEME STRATEGY: Subtle slate tint in light mode, deep navy in dark
        "bg-white/50 dark:bg-surface/40",
        "hover:border-accent-cyan/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-cyan/5"
      )}
    >
      {/* 🚀 Refined Glow: softer and more controlled */}
      <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] blur-2xl" />
      
      <div className="relative z-10">
        {/* Icon Container: Uses bg-dark-bg/5 in light mode for a "pressed" look */}
        <div className="w-14 h-14 bg-accent-cyan/10 dark:bg-accent-cyan/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-white dark:group-hover:text-dark-bg transition-all duration-300">
          <Icon className="text-accent-cyan group-hover:text-inherit transition-colors" size={28} />
        </div>

        <h3 className="text-2xl font-bold font-clash mb-4 text-text-primary tracking-tight">
          {title}
        </h3>
        
        <p className="text-text-secondary leading-relaxed font-jakarta text-sm md:text-base opacity-90">
          {description}
        </p>
      </div>

      {/* Subtle bottom-right accent */}
      <div className="absolute bottom-6 right-6 w-1 h-1 rounded-full bg-accent-cyan/20 group-hover:w-8 transition-all duration-500" />
    </motion.div>
  );
}