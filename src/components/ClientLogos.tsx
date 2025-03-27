
import React from "react";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

interface ClientLogosProps {
  className?: string;
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ className = "" }) => {
  const clients = [
    { name: "Alan Watts", text: "ALAN WATTS" },
    { name: "Ziglar", text: "ZIGLAR" },
    { name: "Jim Rohn", text: "JIM ROHN" },
    { name: "Motivation Madness", text: "MOTIVATION MADNESS" },
    { name: "Success Archive", text: "SUCCESS ARCHIVE" },
    { name: "Coach Pain", text: "COACH PAIN" },
  ];

  // Using same duration for all counters to ensure they finish together
  const counterDuration = 2500;

  return (
    <section id="clients" className={`py-16 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-12">Our Client Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp 
                  end={26.8} 
                  duration={counterDuration} 
                  suffix="M+" 
                  decimals={1}
                  className="text-5xl font-bold"
                />
              </h3>
              <p className="text-blue-100">Views Recaptured</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp 
                  end={40000} 
                  duration={counterDuration} 
                  suffix="+" 
                  className="text-5xl font-bold"
                />
              </h3>
              <p className="text-blue-100">Active Videos Claimed</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">
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
          </div>
        </div>
      </div>

      <div className="py-12 mt-4">
        <p className="text-center text-sm font-medium text-blue-600 mb-20">TRUSTED BY WORLD-CLASS BRANDS</p>
        
        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-16 min-w-full"
            animate={{ x: [0, -1500] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="flex items-center justify-center h-12 min-w-[150px]">
                <span className="text-xl font-bold text-gray-700">{client.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
