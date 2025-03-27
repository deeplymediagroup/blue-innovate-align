
import React, { useEffect, useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Button } from "@/components/ui/button";
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
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
      <div className="flex-shrink-0 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-3">
          <Icon className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
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
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-blue-50/50 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
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

          <GlassmorphicCard className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <StepCard 
                number={1}
                title="Connect & Upload"
                description="You'll be assigned a Partner Manager who will guide you through onboarding and upload your content library into our system. Anywhere your content is being used on YouTube will be identified."
                icon={Upload}
              />
              
              <StepCard 
                number={2}
                title="Monitor & Understand"
                description="Knowledge is power and with your personalized dashboard, you will have access to comprehensive information on how your content is being used across YouTube."
                icon={LineChart}
              />
              
              <StepCard 
                number={3}
                title="Strategize & Customize"
                description="Based on your strategic goals, we will work with you to create a customized digital rights strategy. You can choose your ideal positioning from options including total prevention of content-sharing to strategic creator partnerships."
                icon={BarChart4}
              />
              
              <StepCard 
                number={4}
                title="Partner & Guide"
                description="If your strategy involves creator partnerships, we'll help craft content guidelines and connect you with high-quality creators who will boost content visibility and share revenues with you."
                icon={Users}
              />
              
              <StepCard 
                number={5}
                title="Earn & Amplify"
                description="Your digital rights strategy will be deployed to earn additional revenue for the use of your content across YouTube and amplify your brand's presence."
                icon={DollarSign}
              />
              
              <StepCard 
                number={6}
                title="Transparency & Control"
                description="Throughout the whole process, you will have complete transparency of earnings through your personalized dashboard and will have support to control and optimize your strategy."
                icon={Gauge}
              />
            </div>

            <div className="text-center mt-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started Today
              </Button>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};
