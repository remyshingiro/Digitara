"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Initialize closer to 0,0 so it's easier to find during debugging
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Slightly softer spring for a more "liquid" feel
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Also check for cursor: pointer in computed styles for elements we missed
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('input') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ 
        x, 
        y, 
        translateX: "-50%", 
        translateY: "-50%",
        backgroundColor: "#00D4FF" // Force hex code to bypass potential CSS variable issues
      }}
      animate={{ 
        scale: isHovered ? 2.5 : 1,
        // Ensure opacity is 1
        opacity: 1 
      }}
    >
      {/* The Glow Effect */}
      <div 
        className="absolute inset-0 blur-md rounded-full scale-150 opacity-50" 
        style={{ backgroundColor: "#00D4FF" }}
      />
    </motion.div>
  );
}