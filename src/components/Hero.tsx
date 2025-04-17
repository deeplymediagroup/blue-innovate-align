
import React, { useRef } from "react";
import { useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { FloatingIcons } from "./hero/FloatingIcons";
import { ParticleField } from "./hero/ParticleField";
import { DecorativeIllustrations } from "./hero/DecorativeIllustrations";
import { HeroContent } from "./hero/HeroContent";
import { AnimatedBlob } from "./AnimatedBlob";

export const Hero: React.FC = () => {
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
  React.useEffect(() => {
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
  
  return (
    <section className="min-safe-h-screen relative flex items-center overflow-hidden pt-24 pb-20">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue
-50/20 dark:to-blue-950/20 z-0" />
      
      {/* Background floating icons */}
      <FloatingIcons />

      {/* Particle field background */}
      <ParticleField />
      
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
      </motion.div>
      
      {/* Creative illustrations */}
      <DecorativeIllustrations />
      
      {/* Main content */}
      <HeroContent />
    </section>
  );
};
