
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const steps = [
    {
      number: "01",
      title: "Understand Your Content",
      description: "We analyze your content library to understand its unique characteristics and value. Our team identifies all instances of your content being used without permission.",
      delay: 0.1
    },
    {
      number: "02",
      title: "Discuss Our Programs",
      description: "We present customized strategies to protect and monetize your content, tailored to your specific goals and preferences, ensuring maximum value from your intellectual property.",
      delay: 0.2
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-24 bg-gradient-to-b from-background to-blue-50/20 relative overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ y, opacity }}
      >
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute bottom-40 left-20 h-80 w-80 rounded-full bg-blue-100/20 blur-3xl" />
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={sectionRef}
          className="reveal-section max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  Our Process
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              This Is How We Do It
            </h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              Our streamlined approach helps you protect and monetize your content quickly and efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 lg:gap-x-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 h-full flex flex-col"
              >
                <div className="mb-6">
                  <span className="bg-blue-50 text-blue-700 text-2xl font-bold px-4 py-2 rounded-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">
                  {step.title}
                </h3>
                <p className="text-foreground/70 mb-6 flex-grow">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Get Started <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
