
import React from "react";
import { motion } from "framer-motion";

interface FloatingCubeProps {
  size?: number;
  color?: string;
  position?: string;
  rotation?: boolean;
  delay?: number;
  depth?: number;
}

export const FloatingCube: React.FC<FloatingCubeProps> = ({ 
  size = 60, 
  color = "blue", 
  position = "top-0 left-0", 
  rotation = true,
  delay = 0,
  depth = 10
}) => {
  // Create cube faces
  const faces = [
    { transform: `translateZ(${depth}px)`, bg: `bg-${color}-400/40` },
    { transform: `rotateY(180deg) translateZ(${depth}px)`, bg: `bg-${color}-300/40` },
    { transform: `rotateY(90deg) translateZ(${depth}px)`, bg: `bg-${color}-500/40` },
    { transform: `rotateY(-90deg) translateZ(${depth}px)`, bg: `bg-${color}-400/40` },
    { transform: `rotateX(90deg) translateZ(${depth}px)`, bg: `bg-${color}-300/40` },
    { transform: `rotateX(-90deg) translateZ(${depth}px)`, bg: `bg-${color}-500/40` }
  ];

  return (
    <motion.div 
      className={`absolute ${position} pointer-events-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="preserve-3d"
        animate={rotation ? { 
          rotateX: [0, 25, 0, -25, 0],
          rotateY: [0, 25, 0, -25, 0],
          rotateZ: [0, 10, 0, -10, 0]
        } : {}}
        transition={{ 
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay
        }}
        style={{ 
          width: size, 
          height: size,
          transformStyle: "preserve-3d"
        }}
      >
        {faces.map((face, index) => (
          <div 
            key={index}
            className={`absolute inset-0 ${face.bg} backdrop-blur-md border border-white/20 rounded-md`}
            style={{ 
              transform: face.transform,
              backfaceVisibility: "hidden"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

interface FloatingPyramidProps {
  size?: number;
  color?: string;
  position?: string;
  rotation?: boolean;
  delay?: number;
}

export const FloatingPyramid: React.FC<FloatingPyramidProps> = ({ 
  size = 80, 
  color = "purple", 
  position = "top-0 left-0", 
  rotation = true,
  delay = 0
}) => {
  // Base height is half of size
  const baseHeight = size / 2;
  
  return (
    <motion.div 
      className={`absolute ${position} pointer-events-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="preserve-3d"
        animate={rotation ? { 
          rotateX: [0, 15, 0, -15, 0],
          rotateY: [0, 30, 0, -30, 0]
        } : {}}
        transition={{ 
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay
        }}
        style={{ 
          width: size, 
          height: baseHeight,
          transformStyle: "preserve-3d",
          position: "relative"
        }}
      >
        {/* Base */}
        <div 
          className={`absolute bg-${color}-400/40 backdrop-blur-md border border-white/20`}
          style={{ 
            width: size,
            height: size,
            transform: `rotateX(90deg) translateZ(${-baseHeight/2}px)`,
            backfaceVisibility: "hidden"
          }}
        />
        
        {/* Side 1 */}
        <div 
          className={`absolute bg-${color}-300/40 backdrop-blur-md border border-white/20`}
          style={{ 
            width: 0,
            height: 0,
            borderLeft: `${size/2}px solid transparent`,
            borderRight: `${size/2}px solid transparent`,
            borderBottom: `${baseHeight}px solid`,
            transformOrigin: 'bottom center',
            transform: `rotateY(0deg) translateZ(${size/2}px) translateY(${-baseHeight}px)`,
            backfaceVisibility: "hidden"
          }}
        />
        
        {/* Side 2 */}
        <div 
          className={`absolute bg-${color}-500/40 backdrop-blur-md border border-white/20`}
          style={{ 
            width: 0,
            height: 0,
            borderLeft: `${size/2}px solid transparent`,
            borderRight: `${size/2}px solid transparent`,
            borderBottom: `${baseHeight}px solid`,
            transformOrigin: 'bottom center',
            transform: `rotateY(90deg) translateZ(${size/2}px) translateY(${-baseHeight}px)`,
            backfaceVisibility: "hidden"
          }}
        />
        
        {/* Side 3 */}
        <div 
          className={`absolute bg-${color}-400/40 backdrop-blur-md border border-white/20`}
          style={{ 
            width: 0,
            height: 0,
            borderLeft: `${size/2}px solid transparent`,
            borderRight: `${size/2}px solid transparent`,
            borderBottom: `${baseHeight}px solid`,
            transformOrigin: 'bottom center',
            transform: `rotateY(180deg) translateZ(${size/2}px) translateY(${-baseHeight}px)`,
            backfaceVisibility: "hidden"
          }}
        />
        
        {/* Side 4 */}
        <div 
          className={`absolute bg-${color}-300/40 backdrop-blur-md border border-white/20`}
          style={{ 
            width: 0,
            height: 0,
            borderLeft: `${size/2}px solid transparent`,
            borderRight: `${size/2}px solid transparent`,
            borderBottom: `${baseHeight}px solid`,
            transformOrigin: 'bottom center',
            transform: `rotateY(270deg) translateZ(${size/2}px) translateY(${-baseHeight}px)`,
            backfaceVisibility: "hidden"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

interface FloatingSphereProps {
  size?: number;
  color?: string;
  position?: string;
  delay?: number;
  speed?: number;
}

export const FloatingSphere: React.FC<FloatingSphereProps> = ({ 
  size = 60, 
  color = "blue", 
  position = "top-0 left-0", 
  delay = 0,
  speed = 1
}) => {
  return (
    <motion.div 
      className={`absolute ${position} pointer-events-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className={`rounded-full backdrop-blur-lg bg-gradient-to-br from-${color}-300/30 to-${color}-500/30 border border-white/20 shadow-lg`}
        style={{ width: size, height: size }}
        animate={{ 
          y: [0, -20, 0, 20, 0],
          scale: [1, 1.05, 1, 0.95, 1],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{ 
          duration: 8 / speed,
          ease: "easeInOut",
          repeat: Infinity,
          delay
        }}
      >
        {/* Highlight effect */}
        <div 
          className="absolute rounded-full bg-white/30 w-1/3 h-1/3 top-1/4 left-1/4 blur-sm" 
        />
      </motion.div>
    </motion.div>
  );
};

interface FloatingRingProps {
  size?: number;
  thickness?: number;
  color?: string;
  position?: string;
  rotation?: boolean;
  delay?: number;
}

export const FloatingRing: React.FC<FloatingRingProps> = ({ 
  size = 100, 
  thickness = 10,
  color = "blue", 
  position = "top-0 left-0", 
  rotation = true,
  delay = 0
}) => {
  return (
    <motion.div 
      className={`absolute ${position} pointer-events-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="preserve-3d"
        animate={rotation ? { 
          rotateX: [0, 45, 0, -45, 0],
          rotateY: [0, 30, 0, -30, 0],
        } : {}}
        transition={{ 
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          delay
        }}
        style={{ 
          width: size, 
          height: size,
          transformStyle: "preserve-3d",
          position: "relative"
        }}
      >
        <div 
          className={`absolute inset-0 rounded-full border-${thickness} border-${color}-400/40 backdrop-blur-md`}
          style={{
            width: size,
            height: size,
            borderRadius: "50%"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

interface FloatingPlateProps {
  width?: number;
  height?: number;
  color?: string;
  position?: string;
  rotation?: number[];
  delay?: number;
}

export const FloatingPlate: React.FC<FloatingPlateProps> = ({ 
  width = 120, 
  height = 80,
  color = "blue", 
  position = "top-0 left-0", 
  rotation = [15, -10, 5],
  delay = 0
}) => {
  return (
    <motion.div 
      className={`absolute ${position} pointer-events-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className={`rounded-lg backdrop-blur-md bg-gradient-to-br from-${color}-300/30 to-${color}-500/30 border border-white/20 shadow-lg`}
        style={{ 
          width, 
          height,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`
        }}
        animate={{ 
          y: [0, -10, 0, 10, 0],
          x: [0, 5, 0, -5, 0],
        }}
        transition={{ 
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          delay
        }}
      />
    </motion.div>
  );
};

// Add to global styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .preserve-3d {
      transform-style: preserve-3d;
    }
  `;
  document.head.appendChild(style);
}
