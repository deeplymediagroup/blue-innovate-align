
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

interface ClientLogosProps {
  className?: string;
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ className = "" }) => {
  // List of client logos
  const clients = [
    { name: "Alan Watts Organization", logo: "/lovable-uploads/69525235-ccf5-4f40-8b34-66d1a1be5e58.png" },
    { name: "Ziglar", text: "ZIGLAR" },
    { name: "Jim Rohn", text: "JIM ROHN" },
    { name: "Motivation Madness", text: "MOTIVATION MADNESS" },
    { name: "Success Archive", text: "SUCCESS ARCHIVE" },
    { name: "Coach Pain", text: "COACH PAIN" },
  ];

  return (
    <section id="clients" className={`py-16 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-12">Our Client Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp 
                  end={26.1} 
                  duration={2500} 
                  suffix=" Million" 
                  decimals={1}
                  className="text-5xl font-bold"
                />
              </h3>
              <p className="text-blue-100">Views Recaptured</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-center">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp 
                  end={25000} 
                  duration={2500} 
                  suffix="+" 
                  className="text-5xl font-bold"
                />
              </h3>
              <p className="text-blue-100">Monthly Claims</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-blue-50/50 py-10">
        <p className="text-center text-sm font-medium text-blue-600 mb-6">TRUSTED BY WORLD-CLASS BRANDS</p>
        
        {/* First sliding row */}
        <div className="flex overflow-hidden mb-8">
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
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-full object-contain" />
                ) : (
                  <span className="text-xl font-bold text-gray-700">{client.text}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Second sliding row (reverse direction) */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-16 min-w-full"
            animate={{ x: [-1500, 0] }}
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
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-full object-contain" />
                ) : (
                  <span className="text-xl font-bold text-gray-700">{client.text}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
