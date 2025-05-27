
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { GeometricShape, DotPattern, FloatingTile } from "./DecorativeElements";

export const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%',
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Geometric patterns */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 border border-cyan-400/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-24 h-24 border border-purple-400/30 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          ref={sectionRef}
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden border border-white/10"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative z-10 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
            >
              Ready to Transform Your Content Strategy?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl opacity-90 max-w-2xl mx-auto mb-8 relative z-10"
            >
              Join an exclusive group of rights holders who've discovered the power of AI-driven content protection and monetization
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8 relative z-10"
            >
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">AI-Powered Protection</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Real-Time Monetization</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/contact">
                  <Button 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white border-0 text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Your Journey Today
                      <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      >
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </motion.div>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-blue-200 mt-6 relative z-10"
            >
              No setup fees • Free consultation • Custom solutions available
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
