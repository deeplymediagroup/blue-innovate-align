
import React from "react";
import { AnimatedButton } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NeonGlow } from "./NeonGlow";
import { CircuitLines } from "./CircuitLines";
import { TechGrid } from "./TechGrid";

export const ModernCTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-gray-900" />
      <TechGrid color="#0078ff" size={30} opacity={0.15} />
      <CircuitLines color="#0078ff" count={8} className="opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/90 to-slate-900/90 p-8 shadow-2xl backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center"
          >
            <div>
              <NeonGlow color="#00a3ff" type="text">
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Ready to Start Monetizing Your Content?
                </h2>
              </NeonGlow>
              <p className="mb-6 text-lg text-blue-100">
                Join the hundreds of content creators who are taking control of their digital assets on YouTube. Our expert team is here to guide you every step of the way.
              </p>
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link to="/contact">
                  <AnimatedButton className="bg-blue-600 text-white hover:bg-blue-700 w-full">
                    Book a Consultation <ArrowRight className="h-4 w-4 ml-2" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-4 overflow-hidden rounded-xl border border-blue-500/20 shadow-lg"
              >
                <div className="relative bg-slate-900 p-6">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700" />
                  <p className="mb-3 text-xl font-semibold text-blue-300">What Our Clients Say</p>
                  <blockquote className="text-blue-100">
                    "We've seen a 300% increase in revenue from our YouTube content since partnering with them. Their team has been incredible to work with."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-blue-300 font-bold">
                      M
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-blue-300">Michael Peterson</p>
                      <p className="text-xs text-blue-400">CEO, Wisdom Media</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
