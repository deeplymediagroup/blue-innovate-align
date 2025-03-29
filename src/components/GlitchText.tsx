
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
  intensity?: "low" | "medium" | "high";
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = "",
  glitchInterval = 5000,
  glitchDuration = 200,
  intensity = "medium",
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), glitchDuration);
    }, glitchInterval);

    return () => clearInterval(interval);
  }, [glitchDuration, glitchInterval]);

  const getGlitchIntensity = () => {
    switch (intensity) {
      case "low": return 2;
      case "medium": return 3;
      case "high": return 4;
      default: return 3;
    }
  };

  const glitchIntensity = getGlitchIntensity();

  const textVariants = {
    glitching: {
      textShadow: [
        "0 0 0 #000",
        `1px 1px 2px #3b82f6, -${glitchIntensity}px -${glitchIntensity}px 0 rgba(255,100,100,0.5), ${glitchIntensity}px ${glitchIntensity}px 0 rgba(100,255,100,0.5)`,
        "0 0 0 #000",
        `${glitchIntensity}px -${glitchIntensity}px 0 rgba(255,100,100,0.5), -${glitchIntensity}px ${glitchIntensity}px 0 rgba(100,255,100,0.5)`,
        "0 0 0 #000"
      ],
      x: [0, -2, 2, -1, 0],
      y: [0, 1, -1, 1, 0],
      transition: {
        duration: glitchDuration / 1000,
        times: [0, 0.25, 0.5, 0.75, 1],
        ease: "easeInOut",
      }
    },
    normal: {
      textShadow: "0 0 0 #000",
      x: 0,
      y: 0,
    }
  };

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      variants={textVariants}
      animate={isGlitching ? "glitching" : "normal"}
    >
      {text}
    </motion.span>
  );
};
