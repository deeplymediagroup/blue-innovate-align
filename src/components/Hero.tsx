
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Smooth spring animation for parallax effect
  const springConfig = { stiffness: 100, damping: 30 };
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig);

  return (
    <section className="min-safe-h-screen relative flex items-center overflow-hidden pt-24 pb-20">
      {/* Dynamic background with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0 animated-gradient"
      />
      
      {/* Animated background blobs with parallax effect */}
      <motion.div style={{ y: parallaxY, opacity }} className="absolute inset-0 pointer-events-none">
        <AnimatedBlob 
          size="h-[600px] w-[600px]" 
          position="top-[-200px] right-[-200px]" 
        />
        <AnimatedBlob 
          size="h-[700px] w-[700px]" 
          position="bottom-[-300px] left-[-200px]" 
          delay="3s"
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={sectionRef}
          className="reveal-section max-w-4xl mx-auto text-center space-y-6"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-7xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent leading-tight"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-block"
            >
              Protect
            </motion.span>{" "}
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="inline-block"
            >
              and
            </motion.span>{" "}
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="inline-block"
            >
              Monetize
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="inline-block text-gradient"
            >
              Your Content on YouTube
            </motion.span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg button-shimmer hover-glow shadow-sm">
                  Protect My Content <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
