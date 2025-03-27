
import React from "react";
import { motion } from "framer-motion";

interface AnimatedBlobProps {
  className?: string;
  size?: string;
  position?: string;
  delay?: string;
  color?: string;
}

export const AnimatedBlob: React.FC<AnimatedBlobProps> = ({
  className = "",
  size = "h-72 w-72",
  position = "top-0 left-0",
  delay = "0s",
  color = "blue",
}) => {
  const getGradient = () => {
    if (color === "blue") {
      return "radial-gradient(circle, rgba(58, 155, 255, 0.8) 0%, rgba(10, 132, 255, 0.3) 70%)";
    } else if (color === "purple") {
      return "radial-gradient(circle, rgba(125, 58, 255, 0.8) 0%, rgba(90, 10, 255, 0.3) 70%)";
    } else if (color === "multi") {
      return "radial-gradient(circle, rgba(58, 155, 255, 0.8) 0%, rgba(125, 58, 255, 0.3) 70%)";
    }
    return "radial-gradient(circle, rgba(58, 155, 255, 0.8) 0%, rgba(10, 132, 255, 0.3) 70%)";
  };

  return (
    <motion.div
      className={`blob absolute ${size} ${position} ${className} z-0`}
      style={{ 
        backgroundImage: getGradient(),
        animationDelay: delay 
      }}
      animate={{
        scale: [1, 1.1, 1.2, 1.1, 1],
        opacity: [0.4, 0.5, 0.6, 0.5, 0.4],
        filter: ["blur(40px)", "blur(60px)", "blur(40px)"]
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }}
    />
  );
};
