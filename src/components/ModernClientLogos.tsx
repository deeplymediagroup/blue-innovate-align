
import React from "react";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";
import { NeonGlow } from "./NeonGlow";
import { CyberCard } from "./CyberCard";
import { CircuitLines } from "./CircuitLines";

interface ModernClientLogosProps {
  className?: string;
}

export const ModernClientLogos: React.FC<ModernClientLogosProps> = ({ className = "" }) => {
  // Using same duration for all counters to ensure they finish together
  const counterDuration = 2500;

  return (
    <section id="clients" className={`py-16 relative overflow-hidden ${className}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900/60" />
      <CircuitLines color="#0078ff" count={8} className="opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center relative z-10">
        <NeonGlow color="#00a3ff" type="text">
          <h2 className="text-2xl font-bold mb-12 text-white">Our Client Results</h2>
        </NeonGlow>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <CyberCard 
              glowColor="#0078ff" 
              hasCircuits={true} 
              className="h-full flex flex-col items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-blue-300">
                  <CountUp 
                    end={250} 
                    duration={counterDuration} 
                    prefix="$" 
                    suffix="k+" 
                    className="text-5xl font-bold"
                  />
                </h3>
                <p className="text-blue-100">Paid to Creators</p>
              </div>
            </CyberCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CyberCard 
              glowColor="#0078ff" 
              hasCircuits={true} 
              className="h-full flex flex-col items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-blue-300">
                  <CountUp 
                    end={26} 
                    duration={counterDuration} 
                    suffix="M+" 
                    decimals={0}
                    className="text-5xl font-bold"
                  />
                </h3>
                <p className="text-blue-100">Views Recaptured</p>
              </div>
            </CyberCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CyberCard 
              glowColor="#0078ff" 
              hasCircuits={true} 
              className="h-full flex flex-col items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-blue-300">
                  <CountUp 
                    end={40} 
                    duration={counterDuration} 
                    suffix="k+" 
                    className="text-5xl font-bold"
                  />
                </h3>
                <p className="text-blue-100">Active Videos Claimed</p>
              </div>
            </CyberCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CyberCard 
              glowColor="#0078ff" 
              hasCircuits={true} 
              className="h-full flex flex-col items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2 text-blue-300">
                  <CountUp 
                    end={8.4} 
                    duration={counterDuration} 
                    suffix="M+" 
                    decimals={1}
                    className="text-5xl font-bold"
                  />
                </h3>
                <p className="text-blue-100">Watch Hours Recaptured</p>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
