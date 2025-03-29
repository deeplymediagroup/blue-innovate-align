
import React from "react";
import { motion } from "framer-motion";

interface TechGridProps {
  className?: string;
  color?: string;
  opacity?: number;
  size?: number;
  speed?: number;
}

export const TechGrid: React.FC<TechGridProps> = ({
  className = "",
  color = "#3b82f6",
  opacity = 0.1,
  size = 40,
  speed = 20
}) => {
  const gridSize = 10;
  const cells = Array.from({ length: gridSize * gridSize }, (_, i) => i);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="relative w-full h-full">
        {cells.map((cell) => {
          const row = Math.floor(cell / gridSize);
          const col = cell % gridSize;
          const delay = (row + col) * 0.05;
          
          return (
            <motion.div
              key={cell}
              className="absolute"
              style={{
                top: `${(row / gridSize) * 100}%`,
                left: `${(col / gridSize) * 100}%`,
                width: size,
                height: size,
                background: `linear-gradient(135deg, ${color}00, ${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')})`,
                opacity: 0
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, opacity, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: speed,
                delay: delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
