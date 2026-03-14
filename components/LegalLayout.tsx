"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LegalLayout({ title, lastUpdated, children }: { 
  title: string; 
  lastUpdated: string;
  children: React.ReactNode; 
}) {
  return (
    <main className="pt-32 pb-32 min-h-screen bg-dark-bg transition-colors duration-500">
      <div className="max-w-[850px] mx-auto px-6">
        
        {/* Standard Header */}
        <header className="mb-20 border-b border-border-subtle pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-clash text-text-primary mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-text-secondary font-jakarta text-sm">
              Last Updated: <span className="text-text-primary font-medium">{lastUpdated}</span>
            </p>
          </motion.div>
        </header>

        {/* Standard Content Flow */}
        <article className={cn(
          "prose prose-slate dark:prose-invert max-w-none font-jakarta",
          "prose-headings:font-clash prose-headings:text-text-primary prose-headings:mt-12 prose-headings:mb-6",
          "prose-p:text-text-secondary prose-p:leading-8 prose-p:text-lg",
          "prose-li:text-text-secondary prose-li:leading-7",
          "prose-strong:text-text-primary prose-strong:font-bold",
          "prose-hr:border-border-subtle"
        )}>
          {children}
        </article>

        {/* Footer Contact */}
        <footer className="mt-24 pt-12 border-t border-border-subtle">
          <p className="text-text-secondary text-sm font-jakarta">
            If you have questions about these terms, contact us at 
            <a href="mailto:hello@digitara.com" className="text-accent-cyan ml-1 hover:underline underline-offset-4">
              hello@digitara.com
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}