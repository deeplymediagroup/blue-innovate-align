
import React from "react";
import { motion } from "framer-motion";

interface NeonGlowProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
  type?: "text" | "box";
  animate?: boolean;
}

export const NeonGlow: React.FC<NeonGlowProps> = ({
  children,
  color = "#3b82f6",
  className = "",
  intensity = "medium",
  type = "text",
  animate = true,
}) => {
  const getGlowStyles = () => {
    const intensityMap = {
      low: { textShadow: `0 0 5px ${color}80, 0 0 10px ${color}40`, boxShadow: `0 0 5px ${color}80, 0 0 10px ${color}40` },
      medium: { textShadow: `0 0 5px ${color}, 0 0 10px ${color}80, 0 0 15px ${color}40`, boxShadow: `0 0 5px ${color}, 0 0 10px ${color}80, 0 0 15px ${color}40` },
      high: { textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}80, 0 0 20px ${color}40`, boxShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}80, 0 0 20px ${color}40` },
    };
    
    return type === "text" ? 
      { textShadow: intensityMap[intensity].textShadow } : 
      { boxShadow: intensityMap[intensity].boxShadow };
  };
  
  const styles = getGlowStyles();
  
  if (!animate) {
    return (
      <div className={className} style={styles}>
        {children}
      </div>
    );
  }
  
  const pulseVariants = {
    animate: {
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  
  return (
    <motion.div 
      className={className}
      style={styles}
      variants={pulseVariants}
      animate="animate"
    >
      {children}
    </motion.div>
  );
};
