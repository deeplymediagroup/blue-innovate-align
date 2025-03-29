
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Key, Lock, BarChart, UserCheck, Clock } from "lucide-react";
import { CyberCard } from "./CyberCard";
import { NeonGlow } from "./NeonGlow";
import { CircuitLines } from "./CircuitLines";
import { TechGrid } from "./TechGrid";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <CyberCard 
        glowColor="#0078ff" 
        hasCircuits={true} 
        className="h-full"
      >
        <div className="flex flex-col h-full">
          <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/50 border border-blue-500/30">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-blue-200">{title}</h3>
          <p className="text-blue-100/80 text-sm leading-relaxed">{description}</p>
        </div>
      </CyberCard>
    </motion.div>
  );
};

export const ModernFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-gray-900" />
      <TechGrid color="#0078ff" size={30} className="opacity-20" />
      <CircuitLines color="#0078ff" count={5} className="opacity-30" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-900/50 border border-blue-500/30 rounded-full">
                <p className="text-xs font-medium text-blue-300">
                  Powerful Solutions
                </p>
              </div>
            </div>
            <NeonGlow color="#00a3ff" type="text">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
                Comprehensive Protection <br />for Your Digital Content
              </h2>
            </NeonGlow>
            <p className="mt-4 text-xl text-blue-200 max-w-2xl mx-auto">
              Our platform delivers enterprise-grade security with consumer-grade simplicity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Advanced Encryption"
              description="Military-grade encryption secures your content from unauthorized access, ensuring only legitimate users can view your digital assets."
              delay={0.1}
            />
            <FeatureCard
              icon={Key}
              title="Access Control"
              description="Flexible permission systems let you define exactly who can view, download, or share your protected content."
              delay={0.2}
            />
            <FeatureCard
              icon={UserCheck}
              title="Identity Verification"
              description="Multi-factor authentication and identity verification ensure only authorized users access your content."
              delay={0.3}
            />
            <FeatureCard
              icon={BarChart}
              title="Analytics & Reporting"
              description="Comprehensive dashboards show who's accessing your content and how they're using it, with detailed usage reports."
              delay={0.4}
            />
            <FeatureCard
              icon={Clock}
              title="Expiring Access"
              description="Set time-limited access to your content with automatic expiration for rentals, trials, or temporary collaborations."
              delay={0.5}
            />
            <FeatureCard
              icon={Lock}
              title="Watermarking"
              description="Visible and invisible watermarking options deter unauthorized sharing and help identify the source of leaks."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
