
import React, { useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Shield, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingTile } from "./DecorativeElements";

// Service card component
const ServiceCard = ({ title, description, icon: Icon, features, delay = 0, highlight = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <GlassmorphicCard
        variant={highlight ? "highlight" : "bordered"}
        className={`relative h-full ${highlight ? 'md:-translate-y-4' : ''} overflow-hidden transition-all duration-500 hover:shadow-xl backdrop-blur-md z-10`}
      >
        <div className="absolute top-6 right-6">
          <div className={`p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 shadow-sm`}>
            <Icon className="h-7 w-7 text-blue-600" />
          </div>
        </div>
        
        <motion.h3 
          className="text-2xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-foreground/70 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
        
        <motion.ul 
          className="space-y-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: delay + 0.3 + (index * 0.1) }}
              viewport={{ once: true }}
            >
              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
              </div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </GlassmorphicCard>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const servicesData = [
    {
      title: "Protect",
      description: "Secure your intellectual property across YouTube",
      icon: Shield,
      features: [
        "Identify unauthorized uploads",
        "Block infringing content",
        "Monitor usage across YouTube",
        "Safeguard your brand identity"
      ],
      delay: 0.1
    },
    {
      title: "License",
      description: "Transform unauthorized usage into revenue streams",
      icon: DollarSign,
      features: [
        "Create sustainable revenue",
        "Build creator partnerships",
        "Expand content reach",
        "Generate monthly passive income"
      ],
      delay: 0.2,
      highlight: true
    }
  ];

  // Decorative elements
  const FloatingElement = ({ className, delay = 0, duration = 20 }) => (
    <motion.div
      className={`absolute rounded-full bg-blue-400/5 backdrop-blur-3xl z-0 ${className}`}
      animate={{ 
        y: [20, -20, 20],
        x: [10, -10, 10],
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0],
      }}
      transition={{ 
        duration, 
        ease: "easeInOut", 
        delay, 
        repeat: Infinity,
        repeatType: "mirror" 
      }}
    />
  );

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-blue-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <FloatingElement className="w-96 h-96 top-20 -right-48 opacity-40" delay={0} duration={25} />
      <FloatingElement className="w-80 h-80 bottom-40 -left-40 opacity-30" delay={5} duration={20} />
      
      {/* Floating tiles */}
      <FloatingTile className="absolute right-[10%] top-[30%] z-0 w-20 h-20 rounded-lg bg-gradient-to-r from-blue-200/20 to-blue-100/20 backdrop-blur-md border border-white/10" />
      
      <FloatingTile className="absolute left-[5%] bottom-[25%] z-0 w-16 h-16 rounded-lg bg-gradient-to-r from-purple-200/20 to-blue-100/20 backdrop-blur-md border border-white/10 rotate-12" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
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
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              YouTube Content Management
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                style={{ y: index === 0 ? y1 : y2 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    Start Now
                    <motion.div
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "reverse" 
                      }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
