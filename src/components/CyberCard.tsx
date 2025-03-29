
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NeonGlow } from "./NeonGlow";
import { CircuitLines } from "./CircuitLines";

interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  borderWidth?: "none" | "thin" | "thick";
  hasCircuits?: boolean;
  cornerAccent?: boolean;
  interactive?: boolean;
}

export const CyberCard: React.FC<CyberCardProps> = ({
  children,
  className,
  glowColor = "#3b82f6",
  borderWidth = "thin",
  hasCircuits = false,
  cornerAccent = true,
  interactive = true,
  ...props
}) => {
  const borderStyles = {
    none: "",
    thin: "border border-opacity-50",
    thick: "border-2 border-opacity-70"
  };
  
  const cornerStyles = cornerAccent 
    ? "before:content-[''] before:absolute before:top-0 before:left-0 before:w-4 before:h-4 before:border-l-2 before:border-t-2 before:border-blue-500 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-4 after:h-4 after:border-r-2 after:border-b-2 after:border-blue-500"
    : "";
  
  return (
    <motion.div
      className={cn(
        "relative bg-black bg-opacity-80 rounded-lg overflow-hidden p-6",
        borderStyles[borderWidth],
        `border-${glowColor.replace('#', '')}`,
        cornerStyles,
        interactive && "hover:-translate-y-1 transition-transform duration-300",
        className
      )}
      style={{ borderColor: glowColor }}
      whileHover={interactive ? { scale: 1.03 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      {...props}
    >
      {hasCircuits && (
        <CircuitLines 
          color={glowColor} 
          count={3} 
          className="opacity-20"
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
      
      {interactive && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </motion.div>
  );
};
