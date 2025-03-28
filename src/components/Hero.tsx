
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Create a scroll indicator effect
  useEffect(() => {
    const updateScrollIndicator = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const totalScrollableDistance = docHeight - windowHeight;
      const scrolled = (scrollPosition / totalScrollableDistance) * 100;
      
      const indicator = document.getElementById('scroll-indicator');
      if (indicator) {
        indicator.style.width = `${scrolled}%`;
      }
    };
    
    // Create the indicator element if it doesn't exist
    if (!document.getElementById('scroll-indicator')) {
      const indicator = document.createElement('div');
      indicator.id = 'scroll-indicator';
      indicator.className = 'scroll-indicator';
      document.body.appendChild(indicator);
    }
    
    window.addEventListener('scroll', updateScrollIndicator);
    updateScrollIndicator(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', updateScrollIndicator);
      const indicator = document.getElementById('scroll-indicator');
      if (indicator) {
        indicator.remove();
      }
    };
  }, []);

  return (
    <section className="min-safe-h-screen relative flex items-center overflow-hidden pt-24 pb-20">
      {/* Dynamic background with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0 animated-gradient"
      />
      
      {/* Animated background blobs with parallax effect */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
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

      {/* 3D floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute h-32 w-32 rounded-full bg-blue-300/30 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          style={{
            top: '15%',
            right: '20%',
          }}
        />
        <motion.div 
          className="absolute h-20 w-20 rounded-full bg-blue-400/20 blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1
          }}
          style={{
            top: '30%',
            left: '15%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={sectionRef}
          className="reveal-section max-w-4xl mx-auto text-center space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full hover-lift">
              <p className="text-xs font-medium text-blue-700">
                Global Leader in Digital Rights Management
              </p>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-7xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent leading-tight"
          >
            Protect and Monetize <br />
            Your Content on YouTube
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto text-balance"
          >
            We help creators and brands recover and monetize unauthorized usage of their content across YouTube.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg button-shimmer hover-glow shadow-sm">
                Get Started <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
          >
            <a href="#clients" className="inline-flex flex-col items-center group">
              <p className="text-sm text-foreground/70 mb-2 group-hover:text-blue-600 transition-colors">Trusted by World-Class Brands</p>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bg-blue-100 rounded-full p-2 group-hover:bg-blue-200 transition-colors"
              >
                <ArrowDown className="h-5 w-5 text-blue-600" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
