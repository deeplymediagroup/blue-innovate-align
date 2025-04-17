
import React from "react";
import { motion } from "framer-motion";

export const UltimateSolution: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
              <p className="text-xs font-medium text-blue-700">
                Powerful Integration
              </p>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-5xl mb-4"
          >
            The Ultimate Solution
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Our comprehensive approach combines cutting-edge technology with YouTube's ecosystem to deliver superior results
          </motion.p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl aspect-square">
            {/* Center logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-bold text-white">M</span>
              </div>
            </motion.div>
            
            {/* Our Technology Circle */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-3/5 aspect-square"
            >
              <div className="w-full h-full rounded-full bg-teal-600/80 backdrop-blur-sm flex items-center justify-center">
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
            
            {/* YouTube Partnership Circle */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-1/6 w-3/5 aspect-square"
            >
              <div className="w-full h-full rounded-full bg-teal-700/80 backdrop-blur-sm flex items-center justify-center">
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
            
            {/* YouTube Experience Circle */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-3/5 aspect-square"
            >
              <div className="w-full h-full rounded-full bg-teal-500/80 backdrop-blur-sm flex items-center justify-center">
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

            {/* Use the provided image as background reference */}
            <img 
              src="/lovable-uploads/c3b2d59f-61b7-461b-9b37-0eb4deb3ae27.png"
              alt="Venn diagram reference"
              className="hidden"
            />
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="text-lg text-foreground/80">
            By combining these three pillars, we provide a comprehensive solution that ensures your content is protected 
            and monetized effectively across YouTube's vast ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};
