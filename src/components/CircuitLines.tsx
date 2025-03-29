
import React from "react";
import { motion } from "framer-motion";

interface CircuitLinesProps {
  className?: string;
  color?: string;
  count?: number;
  thickness?: number;
}

export const CircuitLines: React.FC<CircuitLinesProps> = ({
  className = "",
  color = "#3b82f6",
  count = 5,
  thickness = 1,
}) => {
  // Create lines with random paths
  const lines = Array.from({ length: count }, (_, i) => {
    const points = [];
    const segments = 3 + Math.floor(Math.random() * 4); // 3-6 segments
    let x = 0;
    let y = Math.random() * 100;
    
    points.push(`M ${x} ${y}`);
    
    for (let j = 0; j < segments; j++) {
      // Horizontal movement
      x += 20 + Math.random() * 30;
      points.push(`H ${x}`);
      
      // Add a connection node
      if (j < segments - 1) {
        points.push(`C ${x+5} ${y}, ${x+5} ${y}, ${x+5} ${y}`);
        x += 10;
        
        // Vertical movement for next segment
        const newY = Math.max(5, Math.min(95, y + (Math.random() * 60 - 30)));
        points.push(`V ${newY}`);
        y = newY;
      }
    }
    
    return {
      path: points.join(" "),
      delay: i * 0.3,
      duration: 2 + Math.random() * 2
    };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map((line, i) => (
          <motion.path
            key={i}
            d={line.path}
            fill="none"
            stroke={color}
            strokeWidth={thickness}
            strokeDasharray="2 1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 5 + 3,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};
