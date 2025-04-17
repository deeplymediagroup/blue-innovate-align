
import React from "react";
import { motion } from "framer-motion";

export const ParticleField: React.FC = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: 2 + Math.random() * 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: 0.3 + Math.random() * 0.5,
    speed: 0.05 + Math.random() * 0.1
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: -Math.random() * 20
          }}
        />
      ))}
    </div>
  );
};
