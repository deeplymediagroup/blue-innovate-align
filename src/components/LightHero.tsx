
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown, ShieldCheck, Play, Lock } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { GlitchText } from "./GlitchText";
import { NeonGlow } from "./NeonGlow";

export const LightHero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center (normalized)
      const moveX = (clientX - centerX) / centerX * 10;
      const moveY = (clientY - centerY) / centerY * 10;
      
      mouseX.set(moveX);
      mouseY.set(moveY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Floating element component
  const FloatingElement = ({ 
    icon: Icon, 
    position, 
    color = "#e6f0ff", 
    borderColor = "#bbd6fe", 
    iconColor = "#3b82f6",
    delay = 0,
    size = 60
  }) => (
    <motion.div
      className="absolute hidden lg:block"
      style={{ ...position }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        className="rounded-2xl flex items-center justify-center shadow-lg"
        style={{ 
          width: size, 
          height: size,
          background: color,
          border: `1px solid ${borderColor}`
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2
        }}
      >
        <Icon className="h-8 w-8" style={{ color: iconColor }} />
      </motion.div>
    </motion.div>
  );

  return (
    <section className="min-safe-h-screen relative flex items-center overflow-hidden pt-24 pb-20">
      {/* Light background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white z-0"></div>
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-[10%] w-72 h-72 bg-blue-100/30 rounded-full"
          style={{ 
            x: useTransform(mouseX, value => value * -0.5),
            y: useTransform(mouseY, value => value * -0.5)
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-[5%] w-96 h-96 bg-blue-50/40 rounded-full"
          style={{ 
            x: useTransform(mouseX, value => value * 0.3),
            y: useTransform(mouseY, value => value * 0.3)
          }}
        />
        <motion.div 
          className="absolute top-[40%] left-[15%] w-48 h-48 bg-indigo-50/30 rounded-full"
          style={{ 
            x: useTransform(mouseX, value => value * 0.2),
            y: useTransform(mouseY, value => value * 0.2)
          }}
        />
      </div>
      
      {/* Floating elements */}
      <FloatingElement 
        icon={ShieldCheck} 
        position={{ top: "25%", right: "15%" }} 
        color="#e6f0ff" 
        iconColor="#3b82f6"
        delay={0.3}
      />
      <FloatingElement 
        icon={Play} 
        position={{ bottom: "20%", right: "20%" }} 
        color="#e6f7ff" 
        iconColor="#0ea5e9"
        delay={0.6}
      />
      <FloatingElement 
        icon={Lock} 
        position={{ top: "35%", left: "10%" }} 
        color="#eef2ff" 
        iconColor="#6366f1"
        delay={0.9}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3"
          >
            <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full shadow-sm">
              <p className="text-xs font-medium text-blue-700">
                <GlitchText 
                  text="TRUSTED BY TOP CREATORS & RIGHTS HOLDERS" 
                  intensity="low"
                  glitchInterval={7000}
                />
              </p>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-7xl text-gray-900 leading-tight"
          >
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-block"
            >
              <NeonGlow color="#3b82f6" intensity="low" type="text">Protect</NeonGlow>
            </motion.span>{" "}
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="inline-block"
            >
              <NeonGlow color="#3b82f6" intensity="low" type="text">and</NeonGlow>
            </motion.span>{" "}
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="inline-block"
            >
              <NeonGlow color="#3b82f6" intensity="low" type="text">Monetize</NeonGlow>
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
                className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                intensity="low"
                glitchInterval={8000}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-balance font-light"
          >
            We help creators and rights holders recover and monetize unauthorized usage of their content across YouTube.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link to="/contact">
              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }}
                className="shadow-lg"
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                  Get Started <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
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
              <p className="text-sm text-gray-500 mb-2 group-hover:text-blue-600 transition-colors">Trusted by World-Class Brands</p>
              <motion.div 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bg-blue-100 rounded-full p-2 group-hover:bg-blue-200 transition-colors border border-blue-200 shadow-sm"
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
