
import React, { useRef, useEffect } from "react";
import { Button, AnimatedButton } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { TechGrid } from "./TechGrid";
import { CircuitLines } from "./CircuitLines";
import { NeonGlow } from "./NeonGlow";
import { GlitchText } from "./GlitchText";

export const ModernHero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Smooth spring animation for parallax effect
  const springConfig = { stiffness: 100, damping: 30 };
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig);
  
  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized)
      const moveX = (clientX - centerX) / centerX * 15;
      const moveY = (clientY - centerY) / centerY * 15;
      
      mouseX.set(moveX);
      mouseY.set(moveY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
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
      {/* Enhanced background with tech elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-0" />
      
      {/* Tech grid overlay */}
      <TechGrid />
      
      {/* Circuit lines */}
      <CircuitLines color="#4287f5" count={10} className="opacity-30" />
      
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

      {/* 3D floating elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          x: useTransform(mouseX, value => value * -0.7),
          y: useTransform(mouseY, value => value * -0.7)
        }}
      >
        <motion.div 
          className="absolute h-32 w-32 rounded-full bg-blue-500/20 blur-xl"
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
          className="absolute h-20 w-20 rounded-full bg-cyan-400/20 blur-xl"
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
      </motion.div>

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
            <NeonGlow color="#00a3ff" intensity="medium" type="box">
              <div className="py-1 px-3 bg-blue-900/70 border border-blue-400/50 rounded-full">
                <p className="text-xs font-medium text-blue-200">
                  <GlitchText 
                    text="GLOBAL LEADER IN DIGITAL RIGHTS MANAGEMENT" 
                    intensity="low"
                    glitchInterval={7000}
                  />
                </p>
              </div>
            </NeonGlow>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-7xl text-white leading-tight"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-block"
            >
              <NeonGlow color="#00a3ff" type="text">Protect</NeonGlow>
            </motion.span>{" "}
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="inline-block"
            >
              <NeonGlow color="#00a3ff" type="text">and</NeonGlow>
            </motion.span>{" "}
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="inline-block"
            >
              <NeonGlow color="#00a3ff" type="text">Monetize</NeonGlow>
            </motion.span>{" "}
            <br />
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="inline-block"
            >
              <GlitchText 
                text="Your Content on YouTube" 
                className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent"
                intensity="medium"
                glitchInterval={8000}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto text-balance"
          >
            We help creators and brands recover and monetize unauthorized usage of their content across YouTube.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <NeonGlow color="#00a3ff" type="box" intensity="medium">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg button-shimmer hover-glow shadow-sm">
                    Get Started <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </NeonGlow>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
          >
            <a href="#clients" className="inline-flex flex-col items-center group">
              <p className="text-sm text-blue-200 mb-2 group-hover:text-blue-400 transition-colors">Trusted by World-Class Brands</p>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bg-blue-900/50 rounded-full p-2 group-hover:bg-blue-800/50 transition-colors border border-blue-500/20"
              >
                <ArrowDown className="h-5 w-5 text-blue-400" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
