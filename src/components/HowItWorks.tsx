
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const steps = [
    {
      number: "1",
      title: "Connect & Upload",
      description: "Upload your content library into our system and identify everywhere your content is being used."
    },
    {
      number: "2",
      title: "Monitor & Track",
      description: "Access your dashboard to see how your content is being used across YouTube in real-time."
    },
    {
      number: "3",
      title: "Customize Strategy",
      description: "Choose how you want to handle your content - block it, monetize it, or build partnerships."
    },
    {
      number: "4",
      title: "Partner With Creators",
      description: "Connect with high-quality creators who can expand your reach and share revenues."
    },
    {
      number: "5",
      title: "Earn Revenue",
      description: "Generate passive income from your content being used across YouTube's ecosystem."
    },
    {
      number: "6",
      title: "Stay In Control",
      description: "Maintain complete visibility and control over your content strategy at all times."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-blue-50/30 to-background relative overflow-hidden">
      <motion.div
        style={{ opacity }}
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.slice(0, 3).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlassmorphicCard className="h-full hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-xl">{step.title}</h3>
                  </div>
                  <p className="text-foreground/70 flex-grow">{step.description}</p>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
          {steps.slice(3).map((step, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlassmorphicCard className="h-full hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-xl">{step.title}</h3>
                  </div>
                  <p className="text-foreground/70 flex-grow">{step.description}</p>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Start Protecting Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
