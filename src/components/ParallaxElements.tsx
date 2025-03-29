
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Decorative floating element that moves with parallax effect
export const FloatingElement = ({ 
  className = "", 
  size = "w-24 h-24", 
  color = "blue", 
  position = "", 
  delay = 0, 
  intensity = 1,
  rotation = true 
}) => {
  return (
    <motion.div
      className={`absolute ${position} ${size} ${className} pointer-events-none`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
        scale: [0.95, 1.05, 0.95],
        rotate: rotation ? [0, 8, 0, -8, 0] : 0,
        y: [0, -15, 0, 15, 0],
        x: [0, 10, 0, -10, 0],
      }}
      transition={{ 
        duration: 15 + Math.random() * 10, 
        ease: "easeInOut", 
        repeat: Infinity,
        delay: delay,
      }}
    >
      {color === "gradient" ? (
        <div className={`w-full h-full rounded-2xl bg-gradient-to-br from-blue-300/20 to-purple-300/20 backdrop-blur-xl border border-white/10 shadow-lg`} />
      ) : (
        <div className={`w-full h-full rounded-2xl bg-${color}-100/20 backdrop-blur-xl border border-white/10 shadow-lg`} />
      )}
    </motion.div>
  );
};

// Geometric shape with parallax effect
export const GeometricShape = ({ 
  className = "", 
  color = "blue", 
  size = 80, 
  shape = "rounded-xl", 
  position = "", 
  delay = 0,
  rotate = true,
  intensity = 1
}) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${position} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3],
        scale: [0.9, 1.1, 0.9],
        rotate: rotate ? [0, 15, 0, -15, 0] : 0,
      }}
      transition={{ 
        duration: 12 + Math.random() * 5, 
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "mirror",
        delay
      }}
    >
      <div 
        className={`bg-${color}-100/40 backdrop-blur-3xl ${shape}`} 
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
};

// Dot pattern
export const DotPattern = ({ 
  className = "", 
  color = "blue", 
  position = "", 
  opacity = 0.7 
}) => {
  return (
    <motion.div 
      className={`absolute pointer-events-none ${position} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: opacity }}
      transition={{ duration: 1 }}
    >
      <svg width="200" height="200" viewBox="0 0 100 100">
        <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill={`rgba(59, 130, 246, ${opacity})`} />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </motion.div>
  );
};

// Gradient blob
export const GradientBlob = ({ 
  className = "", 
  size = "w-96 h-96", 
  position = "", 
  colors = "from-blue-400/20 to-purple-400/10", 
  delay = 0 
}) => {
  return (
    <motion.div
      className={`absolute ${position} ${size} rounded-full blur-5xl bg-gradient-to-br ${colors} ${className} opacity-40 pointer-events-none`}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ 
        duration: 20, 
        ease: "easeInOut", 
        repeat: Infinity,
        delay
      }}
    />
  );
};

// Glowing orb
export const GlowingOrb = ({ 
  className = "", 
  size = "w-16 h-16", 
  position = "", 
  color = "blue", 
  delay = 0 
}) => {
  return (
    <motion.div
      className={`absolute ${position} ${size} rounded-full bg-${color}-400/30 blur-md ${className} pointer-events-none`}
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ 
        duration: 8, 
        ease: "easeInOut", 
        repeat: Infinity,
        delay
      }}
    />
  );
};

// Floating lines
export const FloatingLines = ({ 
  className = "", 
  position = "", 
  color = "blue", 
  width = 150, 
  height = 3, 
  count = 3, 
  gap = 10 
}) => {
  return (
    <motion.div 
      className={`absolute ${position} flex flex-col gap-${gap} ${className} pointer-events-none`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 0.6, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`h-[${height}px] bg-${color}-400/40 rounded-full`}
          style={{ width: width - (i * 20) }}
          animate={{ 
            width: [width - (i * 20), width - (i * 20) - 30, width - (i * 20)],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </motion.div>
  );
};

// Parallax container that moves children based on scroll
export const ParallaxContainer = ({ 
  children, 
  direction = "up", 
  intensity = 0.3, 
  className = "" 
}) => {
  const { scrollYProgress } = useScroll();
  
  const getYValue = () => {
    switch (direction) {
      case "up":
        return [100, -100];
      case "down":
        return [-100, 100];
      case "left":
        return [0, 0];
      case "right":
        return [0, 0];
      default:
        return [100, -100];
    }
  };
  
  const getXValue = () => {
    switch (direction) {
      case "left":
        return [100, -100];
      case "right":
        return [-100, 100];
      default:
        return [0, 0];
    }
  };
  
  const y = useTransform(scrollYProgress, [0, 1], getYValue().map(v => v * intensity));
  const x = useTransform(scrollYProgress, [0, 1], getXValue().map(v => v * intensity));
  
  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
};
