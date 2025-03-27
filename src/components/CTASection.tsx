
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";
import { motion, useScroll, useTransform } from "framer-motion";

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
            className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-12 text-white text-center shadow-xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Let's talk about your content.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl opacity-90 max-w-2xl mx-auto mb-8"
            >
              Join top creators and brands who trust us to protect and monetize their digital assets.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started 
                    <motion.div
                      initial={{ x: -5 }}
                      animate={{ x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        repeat: Infinity,
                        repeatType: "mirror",
                        repeatDelay: 0.5,
                      }}
                    >
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </motion.div>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
