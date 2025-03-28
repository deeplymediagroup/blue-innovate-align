
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { DollarSign } from "lucide-react";
import { GlassmorphicCard } from "./GlassmorphicCard";

export const ScrollingStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-blue-50/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Revenue Recovery Results
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            See how our clients are monetizing their content across YouTube
          </p>
        </div>

        <motion.div
          ref={containerRef}
          style={{ opacity }}
          className="relative overflow-hidden"
        >
          <motion.div 
            style={{ y }}
            className="space-y-4"
          >
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <GlassmorphicCard 
                className="p-6 w-full max-w-xl flex items-center justify-between"
                variant="highlight"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-lg">Alan Watts</h3>
                    <p className="text-sm text-foreground/70">Monthly Revenue Recovered</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">$9,873.68</p>
                  <p className="text-sm text-foreground/70">per month</p>
                </div>
              </GlassmorphicCard>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <GlassmorphicCard 
                className="p-6 w-full max-w-xl flex items-center justify-between"
                variant="bordered"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-lg">Active Claims</h3>
                    <p className="text-sm text-foreground/70">Content Protection</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">25,000+</p>
                  <p className="text-sm text-foreground/70">monitored claims</p>
                </div>
              </GlassmorphicCard>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex justify-center"
            >
              <GlassmorphicCard 
                className="p-6 w-full max-w-xl flex items-center justify-between"
                variant="bordered"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-lg">Content Control</h3>
                    <p className="text-sm text-foreground/70">Management</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">100%</p>
                  <p className="text-sm text-foreground/70">transparency</p>
                </div>
              </GlassmorphicCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
