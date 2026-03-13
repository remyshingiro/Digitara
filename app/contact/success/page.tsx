"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 rounded-3xl text-center max-w-lg mx-6"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-accent-cyan/10 rounded-full flex items-center justify-center">
            <CheckCircle className="text-accent-cyan" size={48} />
          </div>
        </div>
        <h1 className="text-4xl font-bold font-clash text-text-primary mb-4">Message Sent!</h1>
        <p className="text-text-secondary font-jakarta mb-10">
          Thank you for reaching out to Digitara. We'll review your project details and 
          get back to you within 24 hours.
        </p>
        <Link href="/">
          <button className="bg-accent-cyan text-dark-bg px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}