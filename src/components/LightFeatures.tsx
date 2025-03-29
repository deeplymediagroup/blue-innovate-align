
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Shield, Key, Lock, BarChart, UserCheck, Clock } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const LightFeatures: React.FC = () => {
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
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full shadow-sm">
                <p className="text-xs font-medium text-blue-700">
                  Powerful Solutions
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900">
              Comprehensive Protection <br />for Your Digital Content
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform delivers enterprise-grade security with consumer-grade simplicity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Advanced Encryption"
              description="Military-grade encryption secures your content from unauthorized access, ensuring only legitimate users can view your digital assets."
              index={0}
            />
            <FeatureCard
              icon={Key}
              title="Access Control"
              description="Flexible permission systems let you define exactly who can view, download, or share your protected content."
              index={1}
            />
            <FeatureCard
              icon={UserCheck}
              title="Identity Verification"
              description="Multi-factor authentication and identity verification ensure only authorized users access your content."
              index={2}
            />
            <FeatureCard
              icon={BarChart}
              title="Analytics & Reporting"
              description="Comprehensive dashboards show who's accessing your content and how they're using it, with detailed usage reports."
              index={3}
            />
            <FeatureCard
              icon={Clock}
              title="Expiring Access"
              description="Set time-limited access to your content with automatic expiration for rentals, trials, or temporary collaborations."
              index={4}
            />
            <FeatureCard
              icon={Lock}
              title="Watermarking"
              description="Visible and invisible watermarking options deter unauthorized sharing and help identify the source of leaks."
              index={5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
