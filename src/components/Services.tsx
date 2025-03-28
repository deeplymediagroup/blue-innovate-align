
import React, { useRef, useEffect } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Shield, DollarSign, Youtube, Lock, ChartBar, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Service illustration component
const ServiceIllustration = ({ icon: Icon, color, delay = 0 }) => {
  return (
    <motion.div 
      className="absolute -top-10 -right-10 w-28 h-28 pointer-events-none"
      initial={{ opacity: 0, y: 20, rotate: 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div 
        className={`w-full h-full rounded-full bg-${color}/10 flex items-center justify-center transform rotate-12`}
        animate={{ 
          rotate: [12, 5, 12],
          scale: [1, 1.05, 1] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className={`w-20 h-20 rounded-full bg-gradient-to-br from-${color}/20 to-${color}/5 backdrop-blur-sm border border-${color}/20 shadow-lg flex items-center justify-center`}
        >
          <Icon className={`h-10 w-10 text-${color}-500`} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Animated feature item
const FeatureItem = ({ children, delay = 0 }) => {
  return (
    <motion.li 
      className="flex items-start group"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Shield className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
      </motion.div>
      <span className="group-hover:text-blue-600 transition-colors">{children}</span>
    </motion.li>
  );
};

// Abstract shapes for decoration
const AbstractShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -50]);
  
  useEffect(() => {
    if (isInView && sectionRef.current) {
      sectionRef.current.classList.add("revealed");
    }
  }, [isInView]);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-blue-50/50 relative overflow-hidden">
      {/* Abstract background shapes */}
      <AbstractShapes />
      
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-20 text-center">
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full hover:shadow-lg transition-all duration-300">
                <p className="text-xs font-medium text-blue-700">
                  What We Do
                </p>
              </div>
            </motion.div>
            
            <motion.h2 
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              YouTube Content Management
            </motion.h2>
            
            <motion.p 
              className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Complete control of your content across the YouTube ecosystem
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            <motion.div
              style={{ y: y1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <GlassmorphicCard
                variant="bordered"
                className="relative overflow-hidden transition-all duration-500 hover:shadow-xl h-full backdrop-blur-md border-blue-200/50 z-10"
              >
                <ServiceIllustration icon={Shield} color="blue" delay={0.1} />
                
                <motion.h3 
                  className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Protect
                </motion.h3>
                
                <motion.p 
                  className="text-foreground/70 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Secure your intellectual property across YouTube with our automated content protection system.
                </motion.p>
                
                <motion.ul 
                  className="space-y-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FeatureItem delay={0.3}>Content identification</FeatureItem>
                  <FeatureItem delay={0.4}>Automated claiming</FeatureItem>
                  <FeatureItem delay={0.5}>Takedown management</FeatureItem>
                </motion.ul>
                
                <motion.div 
                  className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-50 blur-3xl opacity-50 z-0"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <GlassmorphicCard
                variant="highlight"
                className="relative overflow-hidden md:-translate-y-4 transition-all duration-500 hover:shadow-2xl h-full backdrop-blur-md before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-100/50 before:to-transparent before:z-0 before:opacity-50 z-10"
              >
                <ServiceIllustration icon={DollarSign} color="blue" delay={0.2} />
                
                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Monetize
                  </motion.h3>
                  
                  <motion.p 
                    className="text-foreground/70 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Transform unauthorized usage into revenue streams while building creator partnerships.
                  </motion.p>
                  
                  <motion.ul 
                    className="space-y-2 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FeatureItem delay={0.3}>Revenue optimization</FeatureItem>
                    <FeatureItem delay={0.4}>Licensing opportunities</FeatureItem>
                    <FeatureItem delay={0.5}>Royalty collection</FeatureItem>
                    <FeatureItem delay={0.6}>Monthly payouts</FeatureItem>
                  </motion.ul>
                </div>
                
                <motion.div 
                  className="absolute -bottom-10 right-0 w-60 h-60 rounded-full bg-blue-200/20 blur-3xl opacity-40 z-0"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.2, 0.4]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              </GlassmorphicCard>
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <GlassmorphicCard
                variant="bordered"
                className="relative overflow-hidden transition-all duration-500 hover:shadow-xl h-full backdrop-blur-md border-blue-200/50 z-10"
              >
                <ServiceIllustration icon={ChartBar} color="blue" delay={0.3} />
                
                <motion.h3 
                  className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Grow
                </motion.h3>
                
                <motion.p 
                  className="text-foreground/70 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Leverage data insights and partnerships to expand your reach and audience.
                </motion.p>
                
                <motion.ul 
                  className="space-y-2 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FeatureItem delay={0.3}>Performance analytics</FeatureItem>
                  <FeatureItem delay={0.4}>Creator network access</FeatureItem>
                  <FeatureItem delay={0.5}>Distribution opportunities</FeatureItem>
                </motion.ul>
                
                <motion.div 
                  className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-100/30 blur-3xl opacity-40 z-0"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.2, 0.4]
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
              </GlassmorphicCard>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full relative overflow-hidden group">
                  <span className="relative z-10">Learn More About Our Services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
