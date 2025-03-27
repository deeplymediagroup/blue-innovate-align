
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

  // Updated images with correct creator profile images
  const images = [
    { 
      url: "/lovable-uploads/bc4f51e9-4d69-4861-952c-094cb60fbf09.png", 
      name: "Alan Watts", 
      role: "Philosopher"
    },
    { 
      url: "https://www.zigziglar.com/wp-content/uploads/2021/04/Zig-Ziglar2.png", 
      name: "Zig Ziglar", 
      role: "Motivational Speaker"
    },
    { 
      url: "https://jimrohn.com/wp-content/uploads/2023/01/Jim-Rohn-Portrait.jpg", 
      name: "Jim Rohn", 
      role: "Personal Development"
    },
    { 
      url: "https://i0.wp.com/cloecouture.com/wp-content/uploads/2020/10/Screen_Shot_2020-10-19_at_14.43.03.jpg", 
      name: "Cloe Couture", 
      role: "Content Creator"
    },
    { 
      url: "https://pbs.twimg.com/profile_images/1068329347720142848/82E-Hjli_400x400.jpg", 
      name: "Coach Pain", 
      role: "Motivational Speaker"
    },
    { 
      url: "https://lesbrown.com/wp-content/uploads/2022/10/les_header_2022.png", 
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
