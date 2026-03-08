"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
      className="glass group relative p-8 rounded-2xl transition-all duration-300 hover:border-accent-cyan/50 hover:-translate-y-2"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-cyan/20 transition-colors">
          <Icon className="text-accent-cyan" size={24} />
        </div>
        <h3 className="text-xl font-bold font-clash mb-3 text-text-primary">{title}</h3>
        <p className="text-text-secondary leading-relaxed font-jakarta">
          {description}
        </p>
      </div>
    </motion.div>
  );
}