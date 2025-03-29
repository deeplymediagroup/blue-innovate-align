
import React from "react";
import { motion } from "framer-motion";
import { CyberCard, GlowEffect, GlowText } from "./GlowEffect";
import { 
  NeonGlow, 
  StarsBackground, 
  CyberpunkGrid, 
  DigitalCircuit 
} from "./ParallaxElements";

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

// New cyber line element
export const CyberLine: React.FC<{
  className?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: number;
  height?: number;
  color?: "blue" | "purple" | "green" | "pink";
  opacity?: number;
  animated?: boolean;
}> = ({
  className = "",
  top,
  right,
  bottom,
  left,
  width = 100,
  height = 2,
  color = "blue",
  opacity = 0.7,
  animated = true
}) => {
  const position = { top, right, bottom, left };
  
  const getColor = () => {
    switch (color) {
      case "blue": return "rgba(59, 130, 246, " + opacity + ")";
      case "purple": return "rgba(147, 51, 234, " + opacity + ")";
      case "green": return "rgba(16, 185, 129, " + opacity + ")";
      case "pink": return "rgba(236, 72, 153, " + opacity + ")";
      default: return "rgba(59, 130, 246, " + opacity + ")";
    }
  };
  
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ 
        ...position,
        height,
        width,
        background: getColor(),
        boxShadow: `0 0 10px ${getColor()}`,
      }}
      animate={animated ? { 
        opacity: [opacity, opacity * 0.7, opacity],
        boxShadow: [
          `0 0 10px ${getColor()}`,
          `0 0 20px ${getColor()}`,
          `0 0 10px ${getColor()}`
        ]
      } : {}}
      transition={animated ? {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    />
  );
};

// New tech grid element based on the design
export const TechGrid: React.FC<{
  className?: string;
  opacity?: number;
  spacing?: number;
  color?: "blue" | "purple" | "green" | "pink";
  animated?: boolean;
}> = ({
  className = "",
  opacity = 0.15,
  spacing = 20,
  color = "blue",
  animated = true
}) => {
  const getColor = () => {
    switch (color) {
      case "blue": return `rgba(59, 130, 246, ${opacity})`;
      case "purple": return `rgba(147, 51, 234, ${opacity})`;
      case "green": return `rgba(16, 185, 129, ${opacity})`;
      case "pink": return `rgba(236, 72, 153, ${opacity})`;
      default: return `rgba(59, 130, 246, ${opacity})`;
    }
  };
  
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to top, ${getColor()} 1px, transparent 1px),
          linear-gradient(to left, ${getColor()} 1px, transparent 1px)
        `,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity: opacity
      }}
      animate={animated ? {
        backgroundPosition: ["0px 0px", `${spacing/2}px ${spacing/2}px`]
      } : {}}
      transition={animated ? {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      } : {}}
    />
  );
};

export const DecorativeElements: React.FC = () => {
  return (
    <>
      {/* Modern cyberpunk design elements inspired by the image */}
      <StarsBackground starCount={100} className="opacity-40" />
      
      <TechGrid color="blue" spacing={25} opacity={0.07} />
      
      <NeonGlow 
        position="top-[5%] right-[10%]" 
        size="w-40 h-40" 
        color="blue" 
        intensity={0.7} 
      />
      
      <NeonGlow 
        position="bottom-[10%] left-[5%]" 
        size="w-32 h-32" 
        color="purple" 
        intensity={0.6}
      />
      
      <CyberpunkGrid
        position="top-[20%] left-[5%]"
        size="w-60 h-60"
        color="blue"
        spacing={15}
        lineWidth={1}
        rotation={-10}
      />
      
      <CyberpunkGrid
        position="bottom-[15%] right-[5%]"
        size="w-80 h-80"
        color="purple"
        spacing={20}
        lineWidth={1}
        rotation={15}
      />
      
      <DigitalCircuit
        position="top-[30%] right-[8%]"
        color="blue"
        width={180}
        height={1.5}
        complexity={0.8}
        speed={4}
      />
      
      <DigitalCircuit
        position="bottom-[25%] left-[8%]"
        color="purple"
        width={150}
        height={1.5}
        complexity={0.6}
        speed={3.5}
      />
      
      {/* Original elements with tweaked properties */}
      <FloatingBlob 
        top="5%" 
        right="-10%" 
        size="w-96 h-96" 
        color="blue" 
        opacity={0.15} 
      />
      
      <FloatingBlob 
        bottom="5%" 
        left="-10%" 
        size="w-80 h-80" 
        color="purple" 
        opacity={0.12} 
        delay={2} 
      />
      
      <GeometricShape 
        top="20%" 
        left="10%" 
        color="blue" 
        size={100} 
        delay={0.5} 
      />
      
      <GeometricShape 
        bottom="15%" 
        right="12%" 
        color="purple" 
        size={90} 
        type="triangle" 
        delay={1.5} 
      />
      
      <DotPattern 
        top="40%" 
        right="8%" 
        dotSpacing={15} 
        size={250} 
      />
      
      <CyberLine
        top="15%"
        left="5%"
        width={120}
        height={1.5}
        color="blue"
      />
      
      <CyberLine
        bottom="20%"
        right="10%"
        width={100}
        height={1.5}
        color="purple"
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
