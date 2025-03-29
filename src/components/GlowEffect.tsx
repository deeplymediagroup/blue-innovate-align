
import React from "react";
import { motion } from "framer-motion";

interface GlowEffectProps {
  className?: string;
  children?: React.ReactNode;
  glowColor?: "blue" | "purple" | "green" | "pink";
  intensity?: number;
  interactive?: boolean;
  pulsate?: boolean;
  size?: string;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({
  className = "",
  children,
  glowColor = "blue",
  intensity = 1,
  interactive = true,
  pulsate = true,
  size = "100%",
}) => {
  const getGlowColor = () => {
    switch (glowColor) {
      case "blue":
        return "rgba(59, 130, 246, 0.8)";
      case "purple":
        return "rgba(147, 51, 234, 0.8)";
      case "green":
        return "rgba(16, 185, 129, 0.8)";
      case "pink":
        return "rgba(236, 72, 153, 0.8)";
      default:
        return "rgba(59, 130, 246, 0.8)";
    }
  };

  const baseShadow = `0 0 15px ${getGlowColor().replace("0.8", "0.4")}`;
  const glowShadow = `0 0 20px ${getGlowColor().replace("0.8", "0.6")}, 0 0 40px ${getGlowColor().replace("0.8", "0.3")}`;

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{ 
        boxShadow: interactive ? baseShadow : "none",
        transition: "box-shadow 0.3s ease",
      }}
      animate={pulsate ? {
        boxShadow: [
          baseShadow,
          glowShadow,
          baseShadow
        ],
      } : {}}
      transition={pulsate ? {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      } : {}}
      whileHover={interactive ? {
        boxShadow: glowShadow,
        scale: 1.02,
      } : {}}
    >
      {children}
      
      {/* Inner glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${getGlowColor()}, transparent 70%)`,
        }}
        animate={pulsate ? {
          opacity: [0.2 * intensity, 0.4 * intensity, 0.2 * intensity],
        } : {}}
        transition={pulsate ? {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        } : {}}
      />
    </motion.div>
  );
};

export const GlowText: React.FC<{
  children: React.ReactNode;
  className?: string;
  color?: "blue" | "purple" | "green" | "pink" | "white";
  interactive?: boolean;
}> = ({ children, className = "", color = "blue", interactive = true }) => {
  const getTextShadow = () => {
    switch (color) {
      case "blue":
        return "0 0 5px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4)";
      case "purple":
        return "0 0 5px rgba(147, 51, 234, 0.8), 0 0 20px rgba(147, 51, 234, 0.4)";
      case "green":
        return "0 0 5px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.4)";
      case "pink":
        return "0 0 5px rgba(236, 72, 153, 0.8), 0 0 20px rgba(236, 72, 153, 0.4)";
      case "white":
        return "0 0 5px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)";
      default:
        return "0 0 5px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4)";
    }
  };

  return (
    <motion.span
      className={`relative ${className}`}
      style={{ textShadow: getTextShadow() }}
      whileHover={interactive ? {
        textShadow: getTextShadow().replace("0.4", "0.7"),
        scale: 1.03,
      } : {}}
    >
      {children}
    </motion.span>
  );
};

export const CyberCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  borderColor?: "blue" | "purple" | "green" | "pink" | "multi";
  glowIntensity?: number;
}> = ({ 
  children, 
  className = "", 
  borderColor = "blue",
  glowIntensity = 1
}) => {
  // Generate gradient depending on the color
  const getBorderGradient = () => {
    switch (borderColor) {
      case "blue":
        return "linear-gradient(45deg, rgba(59, 130, 246, 0.7), rgba(37, 99, 235, 0.7))";
      case "purple":
        return "linear-gradient(45deg, rgba(147, 51, 234, 0.7), rgba(126, 34, 206, 0.7))";
      case "green":
        return "linear-gradient(45deg, rgba(16, 185, 129, 0.7), rgba(5, 150, 105, 0.7))";
      case "pink":
        return "linear-gradient(45deg, rgba(236, 72, 153, 0.7), rgba(219, 39, 119, 0.7))";
      case "multi":
        return "linear-gradient(45deg, rgba(59, 130, 246, 0.7), rgba(147, 51, 234, 0.7), rgba(236, 72, 153, 0.7))";
      default:
        return "linear-gradient(45deg, rgba(59, 130, 246, 0.7), rgba(37, 99, 235, 0.7))";
    }
  };

  const getGlowColor = () => {
    switch (borderColor) {
      case "blue": return "0 0 20px rgba(59, 130, 246, 0.5)";
      case "purple": return "0 0 20px rgba(147, 51, 234, 0.5)";
      case "green": return "0 0 20px rgba(16, 185, 129, 0.5)";
      case "pink": return "0 0 20px rgba(236, 72, 153, 0.5)"; 
      case "multi": return "0 0 20px rgba(59, 130, 246, 0.5)";
      default: return "0 0 20px rgba(59, 130, 246, 0.5)";
    }
  };

  return (
    <motion.div
      className={`relative bg-black/20 backdrop-blur-md rounded-lg overflow-hidden ${className}`}
      style={{ 
        boxShadow: getGlowColor().replace("0.5", `${0.3 * glowIntensity}`)
      }}
      whileHover={{
        boxShadow: getGlowColor().replace("0.5", `${0.6 * glowIntensity}`),
      }}
    >
      {/* Border effect */}
      <div className="absolute inset-0 p-px rounded-lg pointer-events-none">
        <div 
          className="absolute inset-0 rounded-lg"
          style={{ background: getBorderGradient() }}
        />
      </div>
      
      {/* Moving light effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{
          background: [
            "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 45%, transparent 100%)",
            "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0) 45%, transparent 100%)",
            "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 45%, transparent 100%)",
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export const DigitalNoiseOverlay: React.FC<{
  opacity?: number;
  className?: string;
}> = ({ opacity = 0.03, className = "" }) => {
  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-50 ${className}`}
      style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
        opacity: opacity, 
        mixBlendMode: 'overlay'
      }}
    />
  );
};
