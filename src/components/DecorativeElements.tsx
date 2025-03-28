
import React from "react";
import { motion } from "framer-motion";

interface FloatingBlobProps {
  className?: string;
  size?: string;
  color?: string;
  delay?: number;
  duration?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  opacity?: number;
}

export const FloatingBlob: React.FC<FloatingBlobProps> = ({
  className = "",
  size = "w-64 h-64",
  color = "blue",
  delay = 0,
  duration = 15,
  top,
  right,
  bottom,
  left,
  opacity = 0.3
}) => {
  const position = { top, right, bottom, left };
  
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${size} ${className}`}
      style={{ 
        ...position,
        background: `radial-gradient(circle, var(--${color}-200) 0%, var(--${color}-100) 100%)`,
        opacity
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [opacity * 0.7, opacity, opacity * 0.7],
        rotate: [0, 15, 0]
      }}
      transition={{ 
        duration, 
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "mirror",
        delay 
      }}
    />
  );
};

interface GeometricShapeProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
  type?: "square" | "rectangle" | "triangle" | "hexagon";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  rotate?: number;
}

export const GeometricShape: React.FC<GeometricShapeProps> = ({
  className = "",
  color = "blue",
  size = 80,
  delay = 0,
  type = "square",
  top,
  right,
  bottom,
  left,
  rotate = 12
}) => {
  const position = { top, right, bottom, left };
  
  let shape;
  switch (type) {
    case "triangle":
      shape = (
        <div 
          style={{ 
            width: 0,
            height: 0,
            borderLeft: `${size/2}px solid transparent`,
            borderRight: `${size/2}px solid transparent`,
            borderBottom: `${size}px solid rgba(var(--${color}-100), 0.2)`
          }}
        />
      );
      break;
    case "hexagon":
      shape = (
        <div 
          style={{ 
            width: size,
            height: size * 0.866,
            backgroundColor: `rgba(var(--${color}-100), 0.2)`,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" 
          }}
        />
      );
      break;
    case "rectangle":
      shape = (
        <div 
          style={{ 
            width: size * 1.5,
            height: size,
            backgroundColor: `rgba(var(--${color}-100), 0.2)`,
            borderRadius: `${size * 0.1}px`
          }}
        />
      );
      break;
    default: // square
      shape = (
        <div 
          style={{ 
            width: size,
            height: size,
            backgroundColor: `rgba(var(--${color}-100), 0.2)`,
            borderRadius: `${size * 0.1}px`
          }}
        />
      );
  }
  
  return (
    <motion.div
      className={`absolute pointer-events-none backdrop-blur-3xl ${className}`}
      style={{ ...position }}
      initial={{ opacity: 0, scale: 0.8, rotate }}
      animate={{ 
        opacity: [0.3, 0.5, 0.3],
        scale: [0.9, 1.1, 0.9],
        rotate: [rotate, rotate + 15, rotate],
      }}
      transition={{ 
        duration: 12 + Math.random() * 5, 
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "mirror",
        delay 
      }}
    >
      {shape}
    </motion.div>
  );
};

interface DotPatternProps {
  className?: string;
  size?: number;
  dotSize?: number;
  dotSpacing?: number;
  color?: string;
  opacity?: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export const DotPattern: React.FC<DotPatternProps> = ({
  className = "",
  size = 200,
  dotSize = 1,
  dotSpacing = 10,
  color = "blue",
  opacity = 0.3,
  top,
  right,
  bottom,
  left
}) => {
  const position = { top, right, bottom, left };
  
  return (
    <motion.div 
      className={`absolute pointer-events-none ${className}`}
      style={{ ...position }}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1 }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <pattern 
          id={`dots-${Math.random().toString(36).substr(2, 9)}`} 
          width={dotSpacing} 
          height={dotSpacing} 
          patternUnits="userSpaceOnUse"
        >
          <circle 
            cx={dotSpacing/2} 
            cy={dotSpacing/2} 
            r={dotSize} 
            fill={`rgba(var(--${color}-400), ${opacity})`} 
          />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#dots-${Math.random().toString(36).substr(2, 9)})`} />
      </svg>
    </motion.div>
  );
};

interface FloatingTileProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  rotate?: number;
  delay?: number;
}

export const FloatingTile: React.FC<FloatingTileProps> = ({
  className = "",
  width = 80,
  height = 80,
  color = "blue",
  top,
  right,
  bottom,
  left,
  rotate = 0,
  delay = 0
}) => {
  const position = { top, right, bottom, left };
  
  return (
    <motion.div 
      className={`absolute z-0 rounded-lg bg-gradient-to-r backdrop-blur-md border border-white/10 ${className}`}
      style={{ 
        ...position,
        width,
        height,
        backgroundImage: `linear-gradient(to right, rgba(var(--${color}-200), 0.2), rgba(var(--${color}-100), 0.2))`,
        rotate
      }}
      animate={{ 
        y: [0, -30, 0],
        rotate: [rotate, rotate + 10, rotate],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 15, 
        ease: "easeInOut", 
        repeat: Infinity,
        delay 
      }}
    />
  );
};

export const DecorativeElements: React.FC = () => {
  return (
    <>
      <FloatingBlob 
        top="5%" 
        right="-10%" 
        size="w-96 h-96" 
        color="blue" 
        opacity={0.2} 
      />
      <FloatingBlob 
        bottom="5%" 
        left="-10%" 
        size="w-80 h-80" 
        color="purple" 
        opacity={0.15} 
        delay={2} 
      />
      <GeometricShape 
        top="20%" 
        left="10%" 
        color="blue" 
        size={120} 
        delay={0.5} 
      />
      <GeometricShape 
        bottom="15%" 
        right="12%" 
        color="purple" 
        size={100} 
        type="triangle" 
        delay={1.5} 
      />
      <DotPattern 
        top="40%" 
        right="8%" 
        dotSpacing={15} 
        size={250} 
      />
      <FloatingTile 
        top="30%" 
        right="5%" 
        width={60} 
        height={60} 
        rotate={10} 
      />
      <FloatingTile 
        bottom="25%" 
        left="8%" 
        width={80} 
        height={40} 
        color="purple" 
        rotate={-12} 
        delay={2} 
      />
    </>
  );
};
