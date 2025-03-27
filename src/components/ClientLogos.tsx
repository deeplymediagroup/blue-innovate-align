
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ClientLogosProps {
  className?: string;
}

export const ClientLogos: React.FC<ClientLogosProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // List of client logos - replace these with your actual client logos
  const clients = [
    { name: "Alan Watts Organization", logo: "/lovable-uploads/69525235-ccf5-4f40-8b34-66d1a1be5e58.png" },
    { name: "ICONS Collective", text: "ICONS COLLECTIVE" },
    { name: "TH Company", text: "TH" },
    { name: "Yin Yang", symbol: "☯" },
    { name: "Mindset Media", text: "M25" },
    { name: "Zuda", text: "Zuda" },
  ];

  return (
    <section id="clients" className={`py-16 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Clients See Results</h2>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-8 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-3xl font-bold mb-2">$9,873.12</h3>
              <p className="text-blue-100">Monthly Revenue for Alan Watts</p>
            </div>
            <div className="flex-1 h-0.5 bg-blue-300 hidden md:block"></div>
            <div className="mb-6 md:mb-0 md:mx-8">
              <h3 className="text-3xl font-bold mb-2">25,000+</h3>
              <p className="text-blue-100">Active Claims</p>
            </div>
            <div className="flex-1 h-0.5 bg-blue-300 hidden md:block"></div>
            <div>
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-blue-100">Content Control & Transparency</p>
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
                ) : client.symbol ? (
                  <span className="text-3xl font-bold text-gray-700">{client.symbol}</span>
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
                ) : client.symbol ? (
                  <span className="text-3xl font-bold text-gray-700">{client.symbol}</span>
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
