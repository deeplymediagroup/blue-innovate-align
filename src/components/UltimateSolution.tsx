import React from "react";
import { motion } from "framer-motion";

export const UltimateSolution: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-5xl mb-4"
          >
            Our Comprehensive Approach
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            We combine cutting-edge technology with YouTube's ecosystem to deliver superior results
          </motion.p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl aspect-square">
            {/* Content Tech Circle */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-3/5 aspect-square"
            >
              <div className="w-full h-full rounded-full bg-blue-600/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-center px-8">
                  <p className="font-bold text-xl md:text-2xl">Our Technology</p>
                  <ul className="text-sm md:text-base mt-2 space-y-1 text-left ml-4 list-disc">
                    <li>Content identification</li>
                    <li>Rights management</li>
                    <li>Licensing automation</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Platform Circle */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-1/6 w-3/5 aspect-square"
            >
              <div className="w-full h-full rounded-full bg-blue-700/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-center px-8">
                  <p className="font-bold text-xl md:text-2xl">YouTube Partnership</p>
                  <ul className="text-sm md:text-base mt-2 space-y-1 text-left ml-4 list-disc">
                    <li>Content ID access</li>
                    <li>Platform integration</li>
                    <li>Policy enforcement</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            {/* Experience Circle */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-3/5 aspect-square"
            >
              <div className="w-full h-full rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-center px-8">
                  <p className="font-bold text-xl md:text-2xl">YouTube Experience</p>
                  <ul className="text-sm md:text-base mt-2 space-y-1 text-left ml-4 list-disc">
                    <li>Creator relationships</li>
                    <li>Platform expertise</li>
                    <li>Ecosystem knowledge</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
