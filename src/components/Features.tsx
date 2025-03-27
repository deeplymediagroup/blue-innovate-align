
import React, { useEffect, useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Shield, Key, Lock, BarChart, UserCheck, Clock } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <GlassmorphicCard className="h-full">
      <div className="flex flex-col h-full">
        <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
      </div>
    </GlassmorphicCard>
  );
};

export const Features: React.FC = () => {
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
    <section id="features" className="py-24 bg-gradient-to-b from-background to-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  Powerful Solutions
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold">
              Comprehensive Protection <br />for Your Digital Content
            </h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              Our platform delivers enterprise-grade security with consumer-grade simplicity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Advanced Encryption"
              description="Military-grade encryption secures your content from unauthorized access, ensuring only legitimate users can view your digital assets."
            />
            <FeatureCard
              icon={Key}
              title="Access Control"
              description="Flexible permission systems let you define exactly who can view, download, or share your protected content."
            />
            <FeatureCard
              icon={UserCheck}
              title="Identity Verification"
              description="Multi-factor authentication and identity verification ensure only authorized users access your content."
            />
            <FeatureCard
              icon={BarChart}
              title="Analytics & Reporting"
              description="Comprehensive dashboards show who's accessing your content and how they're using it, with detailed usage reports."
            />
            <FeatureCard
              icon={Clock}
              title="Expiring Access"
              description="Set time-limited access to your content with automatic expiration for rentals, trials, or temporary collaborations."
            />
            <FeatureCard
              icon={Lock}
              title="Watermarking"
              description="Visible and invisible watermarking options deter unauthorized sharing and help identify the source of leaks."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
