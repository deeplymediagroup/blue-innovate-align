import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown, ShieldCheck, Zap, Lock } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { Link } from "react-router-dom";

// Creative floating elements Component
const FloatingIllustration = ({ 
  icon: Icon, 
  size = 40, 
  position, 
  delay = 0,
  rotationRange = 10,
  yOffset = 20
}) => {
  const baseDelay = delay;
  
  return (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ ...position }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: baseDelay, 
        duration: 0.6, 
        ease: "easeOut" 
      }}
    >
      <motion.div
        className="flex items-center justify-center p-3 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 shadow-lg"
        style={{ width: size, height: size }}
        animate={{
          y: [-yOffset, yOffset, -yOffset],
          rotate: [-rotationRange, rotationRange, -rotationRange],
        }}
        transition={{
          repeat: Infinity,
          duration: 6 + Math.random() * 2,
          ease: "easeInOut",
          delay: baseDelay,
        }}
      >
        <Icon className="text-blue-600" size={size * 0.5} />
      </motion.div>
    </motion.div>
  );
};

// Creative particle animation component
const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: 0.3 + Math.random() * 0.5,
    speed: 0.05 + Math.random() * 0.1
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: -Math.random() * 20
          }}
        />
      ))}
    </div>
  );
};

// Shield illustration component
const ShieldIllustration = () => {
  return (
    <motion.div
      className="absolute right-[5%] top-[20%] lg:block hidden"
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <div className="relative w-44 h-44">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 backdrop-blur-sm border border-white/50">
            <ShieldCheck className="h-16 w-16 text-blue-500" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Content protection illustration
const ContentProtectionIllustration = () => {
  return (
    <motion.div
      className="absolute left-[10%] bottom-[20%] lg:block hidden"
      initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="relative w-36 h-36">
        <motion.div 
          className="absolute inset-0 bg-blue-400/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          animate={{ rotate: [0, -5, 0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-28 h-28 bg-gradient-to-tr from-white to-blue-50 rounded-lg shadow-lg flex items-center justify-center transform -rotate-12 backdrop-blur-sm border border-white/50">
            <Lock className="h-12 w-12 text-blue-500" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

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
      {/* Dynamic background with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0 animated-gradient"
      />
      
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
      <ShieldIllustration />
      <ContentProtectionIllustration />
      
      {/* Floating icon elements */}
      <FloatingIllustration 
        icon={ShieldCheck} 
        position={{ top: "30%", left: "20%" }} 
        delay={0.3}
        size={50}
      />
      <FloatingIllustration 
        icon={Zap} 
        position={{ bottom: "25%", right: "15%" }} 
        delay={0.6}
        size={45}
      />
      <FloatingIllustration 
        icon={Lock} 
        position={{ top: "40%", right: "25%" }} 
        delay={0.9}
        size={40}
      />

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
              Claim
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
              className="inline-block text-gradient"
            >
              License
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto text-balance"
          >
            We help creators and brands recover and monetize unauthorized usage of their content across YouTube.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <a href="#services">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg button-shimmer hover-glow shadow-sm">
                  Learn More <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
          >
            <a href="#clients" className="inline-flex flex-col items-center group">
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
