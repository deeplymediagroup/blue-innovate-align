
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageGridProps {
  className?: string;
}

export const CreatorGrid: React.FC<ImageGridProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Images of creators, podcasters - using placeholder images
  // In a real implementation, you would replace these with actual images
  const images = [
    "https://images.unsplash.com/photo-1581368135153-a506cf13531c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // person with mic
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // podcast recording
    "https://images.unsplash.com/photo-1593697972672-b3bb7f4d4c33?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // speaker
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // podcasting
    "https://images.unsplash.com/photo-1582538885300-be9477375c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // filming
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // content creator
  ];

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ opacity }} className="grid grid-cols-3 gap-4">
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative"
          >
            <img src={images[0]} alt="Creator" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative"
          >
            <img src={images[1]} alt="Creator" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative"
          >
            <img src={images[2]} alt="Creator" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative"
          >
            <img src={images[3]} alt="Creator" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </motion.div>
        
        <motion.div style={{ y: y3 }} className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative"
          >
            <img src={images[4]} alt="Creator" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative"
          >
            <img src={images[5]} alt="Creator" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
