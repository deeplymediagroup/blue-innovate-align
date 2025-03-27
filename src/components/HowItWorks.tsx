
import React, { useEffect, useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Upload, 
  LineChart, 
  BarChart4, 
  Users, 
  DollarSign, 
  Gauge 
} from "lucide-react";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col h-full"
    >
      <GlassmorphicCard className="h-full p-6">
        <div className="flex items-center mb-3">
          <div className="flex-shrink-0 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-3">
            {number}
          </div>
          <Icon className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-foreground/70">{description}</p>
      </GlassmorphicCard>
    </motion.div>
  );
};

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-blue-50/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          style={{ opacity, y }}
          className="reveal-section max-w-6xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  Our Process
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold">How It Works</h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              A simple, transparent process to protect and monetize your content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StepCard 
              number={1}
              title="Connect & Upload"
              description="You'll be assigned a Partner Manager who will guide you through onboarding and upload your content library into our system. Anywhere your content is being used on YouTube will be identified."
              icon={Upload}
              delay={1}
            />
            
            <StepCard 
              number={2}
              title="Monitor & Understand"
              description="Knowledge is power and with your personalized dashboard, you will have access to comprehensive information on how your content is being used across YouTube."
              icon={LineChart}
              delay={2}
            />
            
            <StepCard 
              number={3}
              title="Strategize & Customize"
              description="Based on your strategic goals, we will work with you to create a customized digital rights strategy. You can choose your ideal positioning from options including total prevention of content-sharing to strategic creator partnerships."
              icon={BarChart4}
              delay={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard 
              number={4}
              title="Partner & Guide"
              description="If your strategy involves creator partnerships, we'll help craft content guidelines and connect you with high-quality creators who will boost content visibility and share revenues with you."
              icon={Users}
              delay={4}
            />
            
            <StepCard 
              number={5}
              title="Earn & Amplify"
              description="Your digital rights strategy will be deployed to earn additional revenue for the use of your content across YouTube and amplify your brand's presence."
              icon={DollarSign}
              delay={5}
            />
            
            <StepCard 
              number={6}
              title="Transparency & Control"
              description="Throughout the whole process, you will have complete transparency of earnings through your personalized dashboard and will have support to control and optimize your strategy."
              icon={Gauge}
              delay={6}
            />
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
