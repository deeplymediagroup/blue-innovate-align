
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";

export const HeroContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="reveal-section max-w-4xl mx-auto text-center space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-3"
        >
          <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full hover-lift">
            <p className="text-xs font-medium text-blue-700">
              Global Leader in Digital Rights Management
            </p>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-5xl md:text-7xl bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent leading-tight"
        >
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-block"
          >
            Claim
          </motion.span>{" "}
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="inline-block"
          >
            and
          </motion.span>{" "}
          <motion.span
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="inline-block text-gradient"
          >
            License Your Content on YouTube
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto text-balance"
        >
          We help creators and brands recover and monetize unauthorized usage of their content across YouTube.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
        >
          <a href="#services">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg button-shimmer hover-glow shadow-sm">
                Learn More <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16"
        >
          <a href="#clients" className="inline-flex flex-col items-center group">
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="bg-blue-100 rounded-full p-2 group-hover:bg-blue-200 transition-colors"
            >
              <ArrowDown className="h-5 w-5 text-blue-600" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
