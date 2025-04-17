
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { BookOpen, Users, ArrowRight, Zap } from "lucide-react";

const Step = ({ number, title, description, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="w-full"
  >
    <GlassmorphicCard className="h-full relative overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-4xl font-bold text-blue-600/20">0{number}</span>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </GlassmorphicCard>
  </motion.div>
);

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const steps = [
    {
      number: 1,
      title: "Understand Your Content",
      description: "We analyze your content library and identify unauthorized usage across YouTube.",
      icon: BookOpen
    },
    {
      number: 2,
      title: "Discuss Our Programs",
      description: "Together, we'll create a customized strategy that aligns with your goals.",
      icon: Users
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-blue-50/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          style={{ opacity }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">This Is How We Do It</h2>
            <p className="text-xl text-foreground/70">
              A simple, effective process to protect and monetize your content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Step key={index} {...step} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
