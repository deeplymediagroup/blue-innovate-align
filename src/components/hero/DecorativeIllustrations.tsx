
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Zap } from "lucide-react";

interface FloatingIllustrationProps {
  icon: React.ElementType;
  size?: number;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  delay?: number;
  rotationRange?: number;
  yOffset?: number;
}

const FloatingIllustration: React.FC<FloatingIllustrationProps> = ({ 
  icon: Icon, 
  size = 40, 
  position, 
  delay = 0,
  rotationRange = 10,
  yOffset = 20
}) => {
  const baseDelay = delay;
  
  return (
    <motion.div
      className="absolute z-0 pointer-events-none"
      style={{ ...position }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: baseDelay, 
        duration: 0.6, 
        ease: "easeOut" 
      }}
    >
      <motion.div
        className="flex items-center justify-center p-3 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 shadow-lg"
        style={{ width: size, height: size }}
        animate={{
          y: [-yOffset, yOffset, -yOffset],
          rotate: [-rotationRange, rotationRange, -rotationRange],
        }}
        transition={{
          repeat: Infinity,
          duration: 6 + Math.random() * 2,
          ease: "easeInOut",
          delay: baseDelay,
        }}
      >
        <Icon className="text-blue-600" size={size * 0.5} />
      </motion.div>
    </motion.div>
  );
};

const ShieldIllustration: React.FC = () => {
  return (
    <motion.div
      className="absolute right-[5%] top-[20%] lg:block hidden"
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <div className="relative w-44 h-44">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-lg flex items-center justify-center transform rotate-12 backdrop-blur-sm border border-white/50">
            <Shield className="h-16 w-16 text-blue-500" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ContentProtectionIllustration: React.FC = () => {
  return (
    <motion.div
      className="absolute left-[10%] bottom-[20%] lg:block hidden"
      initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="relative w-36 h-36">
        <motion.div 
          className="absolute inset-0 bg-blue-400/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          animate={{ rotate: [0, -5, 0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-28 h-28 bg-gradient-to-tr from-white to-blue-50 rounded-lg shadow-lg flex items-center justify-center transform -rotate-12 backdrop-blur-sm border border-white/50">
            <Lock className="h-12 w-12 text-blue-500" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const DecorativeIllustrations: React.FC = () => {
  return (
    <>
      <ShieldIllustration />
      <ContentProtectionIllustration />
      <FloatingIllustration 
        icon={Shield} 
        position={{ top: "30%", left: "20%" }} 
        delay={0.3}
        size={50}
      />
      <FloatingIllustration 
        icon={Zap} 
        position={{ bottom: "25%", right: "15%" }} 
        delay={0.6}
        size={45}
      />
      <FloatingIllustration 
        icon={Lock} 
        position={{ top: "40%", right: "25%" }} 
        delay={0.9}
        size={40}
      />
    </>
  );
};
