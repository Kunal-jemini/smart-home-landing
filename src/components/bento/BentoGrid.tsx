"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { bentoLayout } from "@/config/bentoLayout"; 
import BentoCard from "./BentoCard";

export default function BentoGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  // We use a ref to store the timer ID so we can cancel it if the user moves away early
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    // 1. Clear any existing timers just in case
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // 2. Start a new 1-second timer (1000ms)
    timeoutRef.current = setTimeout(() => {
      setHoveredCard(id); // ONLY expand the card after 1 second has passed!
    }, 1000); 
  };

  const handleMouseLeave = () => {
    // 1. If they leave BEFORE 1 second, cancel the timer so it never expands
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    // 2. Reset the grid instantly when they leave
    setHoveredCard(null);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-[repeat(20,_minmax(0,_1fr))] auto-rows-[160px] gap-4 grid-flow-dense py-4">
      {categories.map((category, index) => {
        const config = bentoLayout.find((l) => l.id === category.id);
        
        const isHovered = hoveredCard === category.id;
        const isAnotherCardHovered = hoveredCard !== null && !isHovered;

        const colClass = isHovered 
          ? "md:col-span-10" 
          : (config?.col ?? "md:col-span-4");

        const rowClass = isHovered 
          ? "md:row-span-2" 
          : (config?.row ?? "md:row-span-1");

        return (
          <motion.div 
            layout 
            key={category.id}
            
            // Replaced immediate state updates with our new delayed handlers
            onHoverStart={() => handleMouseEnter(category.id)}
            onHoverEnd={handleMouseLeave}
            
            transition={{ layout: { type: "spring", bounce: 0.15, duration: 0.6 } }}
            className={`${colClass} ${rowClass} h-full w-full relative`}
            style={{ zIndex: isHovered ? 50 : 10 }}
          >
            <motion.a
              layout 
              href={`#${category.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              
              animate={{
                opacity: isAnotherCardHovered ? 0.6 : 1,
                filter: isAnotherCardHovered ? "grayscale(30%)" : "grayscale(0%)"
              }}
              
              transition={{ 
                duration: 0.4,
                layout: { type: "spring", bounce: 0.15, duration: 0.6 }
              }}

              className="block w-full h-full group relative overflow-hidden rounded-3xl cursor-pointer bg-slate-900 border border-slate-800 shadow-xl hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-colors duration-300"
            >
              <BentoCard {...category} index={index} />
            </motion.a>
          </motion.div>
        );
      })}
    </div>
  );
}