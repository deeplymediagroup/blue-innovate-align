
import React from "react";
import { motion } from "framer-motion";
import { Heart, ThumbsUp } from "lucide-react";

interface FloatingIconProps {
  icon: React.ElementType;
  delay?: number;
  position: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  size?: number;
  opacity?: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ 
  icon: Icon,
  delay = 0,
  position,
  size = 24,
  opacity = 0.06
}) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ ...position }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: opacity,
        y: [0, -15, 0],
        x: [0, 5, 0]
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay
        },
        x: {
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay
        },
        opacity: {
          duration: 0.4
        }
      }}
    >
      <Icon size={size} className="text-blue-600" />
    </motion.div>
  );
};

export const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingIcon
          key={i}
          icon={i % 2 === 0 ? Heart : ThumbsUp}
          position={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          delay={i * 0.2}
          size={24 + Math.random() * 16}
          opacity={0.04 + Math.random() * 0.04}
        />
      ))}
    </div>
  );
};
