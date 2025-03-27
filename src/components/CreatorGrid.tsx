
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

  // Images of real creators we work with
  const images = [
    { 
      url: "https://img.youtube.com/vi/dYSQ1NF1hvw/mqdefault.jpg", 
      name: "Alan Watts", 
      role: "Philosopher"
    },
    { 
      url: "https://img.youtube.com/vi/epFaoYVUODw/mqdefault.jpg", 
      name: "Zig Ziglar", 
      role: "Motivational Speaker"
    },
    { 
      url: "https://img.youtube.com/vi/DGIjuVbGP_A/mqdefault.jpg", 
      name: "Jim Rohn", 
      role: "Personal Development"
    },
    { 
      url: "https://i.ytimg.com/vi/T2T-0-7cL0Y/mqdefault.jpg", 
      name: "Cloe Couture", 
      role: "Content Creator"
    },
    { 
      url: "https://img.youtube.com/vi/LBxYhQEr3-w/mqdefault.jpg", 
      name: "Coach Pain", 
      role: "Motivational Speaker"
    },
    { 
      url: "https://img.youtube.com/vi/6-yfXjWxPKA/mqdefault.jpg", 
      name: "Les Brown", 
      role: "Motivational Speaker"
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
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative"
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
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative"
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
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative"
          >
            <img src={images[2].url} alt={images[2].name} className="w-full h-full object-cover" />
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
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative"
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
            className="overflow-hidden rounded-2xl shadow-lg h-64 relative"
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
            className="overflow-hidden rounded-2xl shadow-lg h-80 relative"
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
