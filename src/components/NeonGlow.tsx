
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
      low: { textShadow: `0 0 5px ${color}50, 0 0 10px ${color}30`, boxShadow: `0 0 5px ${color}50, 0 0 10px ${color}30` },
      medium: { textShadow: `0 0 5px ${color}70, 0 0 10px ${color}50, 0 0 15px ${color}30`, boxShadow: `0 0 5px ${color}70, 0 0 10px ${color}50, 0 0 15px ${color}30` },
      high: { textShadow: `0 0 5px ${color}90, 0 0 10px ${color}70, 0 0 15px ${color}50, 0 0 20px ${color}30`, boxShadow: `0 0 5px ${color}90, 0 0 10px ${color}70, 0 0 15px ${color}50, 0 0 20px ${color}30` },
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
      opacity: [1, 0.85, 1],
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
