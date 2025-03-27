
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

  // Updated images with correct creator profile images and adjusted for Jim Rohn
  const images = [
    { 
      url: "/lovable-uploads/bc4f51e9-4d69-4861-952c-094cb60fbf09.png", 
      name: "Alan Watts", 
      role: "Philosopher"
    },
    { 
      url: "/lovable-uploads/9a04e358-ac60-49f2-a128-fc6b630d19fd.png", 
      name: "Zig Ziglar", 
      role: "Motivational Speaker"
    },
    { 
      url: "/lovable-uploads/ce91c4d1-7f98-41ef-b220-821a628bf124.png", 
      name: "Jim Rohn", 
      role: "Motivational Speaker"
    },
    { 
      url: "/lovable-uploads/4b375f9c-1e1d-4a7d-b34a-b1b7a7a98ee6.png", 
      name: "Cloe Couture", 
      role: "Content Creator"
    },
    { 
      url: "/lovable-uploads/1af06f14-7429-4168-946d-e72c3191bb1f.png", 
      name: "Coach Pain", 
      role: "Motivational Speaker"
    },
    { 
      url: "/lovable-uploads/889e60d9-7a32-4923-a04a-791b063f9cfb.png", 
      name: "High Performance", 
      role: "Podcast"
    },
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
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={images[0].url} alt={images[0].name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold">{images[0].name}</h3>
              <p className="text-sm text-white/80">{images[0].role}</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={images[1].url} alt={images[1].name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold">{images[1].name}</h3>
              <p className="text-sm text-white/80">{images[1].role}</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Adjusted object-position to better frame Jim Rohn's face */}
            <img 
              src={images[2].url} 
              alt={images[2].name} 
              className="w-full h-full object-cover object-top" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold">{images[2].name}</h3>
              <p className="text-sm text-white/80">{images[2].role}</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={images[3].url} alt={images[3].name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold">{images[3].name}</h3>
              <p className="text-sm text-white/80">{images[3].role}</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div style={{ y: y3 }} className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={images[4].url} alt={images[4].name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold">{images[4].name}</h3>
              <p className="text-sm text-white/80">{images[4].role}</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={images[5].url} alt={images[5].name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold">{images[5].name}</h3>
              <p className="text-sm text-white/80">{images[5].role}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
