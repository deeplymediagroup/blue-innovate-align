
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <AnimatedBlob 
        size="h-[500px] w-[500px]" 
        position="top-[-250px] left-[-250px]" 
        color="purple"
      />
      <AnimatedBlob 
        size="h-[400px] w-[400px]" 
        position="bottom-[-200px] right-[-200px]" 
        color="blue"
        delay="2s"
      />

      {/* Additional decorative elements */}
      <GeometricShape 
        top="15%" 
        right="10%" 
        color="blue" 
        size={80} 
        type="hexagon" 
      />
      <GeometricShape 
        bottom="20%" 
        left="8%" 
        color="purple" 
        size={100} 
        type="rectangle" 
        delay={1} 
      />
      <DotPattern 
        top="30%" 
        left="15%" 
        size={200} 
        dotSpacing={12}
        color="purple" 
      />
      <FloatingTile 
        top="45%" 
        right="12%" 
        width={70} 
        height={70} 
        rotate={15} 
      />

      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div 
          className="absolute top-20 right-1/4 h-16 w-16 rounded-full bg-blue-300/40 blur-md"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/3 h-20 w-20 rounded-full bg-purple-300/30 blur-md"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          ref={sectionRef}
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-12 text-white text-center shadow-xl relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Add light beam effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                animate={{ x: ['200%', '-200%'] }}
                transition={{ 
                  duration: 8, 
                  ease: "linear", 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
              />
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative z-10"
            >
              Let's talk about your content.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl opacity-90 max-w-2xl mx-auto mb-8 relative z-10"
            >
              Join top creators and brands who trust us to protect and monetize their digital assets.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/contact">
                  <Button 
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Connect 
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
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Floating circles */}
            <motion.div 
              className="absolute top-5 right-8 w-12 h-12 rounded-full bg-white/10"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute bottom-8 left-10 w-8 h-8 rounded-full bg-white/10"
              animate={{
                y: [0, 8, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
