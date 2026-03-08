"use client"; // This is the key fix

import React from "react";
import { Layout, Code, ShoppingCart, Rocket, Gauge, LifeBuoy } from "lucide-react";
import ServiceCard from "./ServiceCard";

// Move the data inside the component or a local constant
const services = [
  {
    title: "Website Design",
    description: "Premium UI/UX designs that prioritize user conversion and brand storytelling.",
    icon: Layout,
  },
  {
    title: "Web Development",
    description: "High-performance websites built with React and Next.js for maximum speed.",
    icon: Code,
  },
  {
    title: "E-Commerce Solutions",
    description: "Scalable online stores designed to handle high traffic and seamless checkouts.",
    icon: ShoppingCart,
  },
  {
    title: "SaaS Product Development",
    description: "Building complex software architectures with a focus on scale and security.",
    icon: Rocket,
  },
  {
    title: "SEO & Performance",
    description: "Optimizing your digital presence for search engines and lightning-fast loads.",
    icon: Gauge,
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing technical support to ensure your platform stays modern and secure.",
    icon: LifeBuoy,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center lg:text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-clash text-text-primary mb-4">
            What We Build <span className="text-accent-cyan">For You</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl font-jakarta">
            Digitara combines technical excellence with creative design to deliver digital 
            products that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}