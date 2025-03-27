
import React, { useEffect, useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { CheckCircle, Shield, DollarSign, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { PricingPlans } from "./PricingPlans";

export const Services: React.FC = () => {
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
    <section id="services" className="py-24 bg-gradient-to-b from-background to-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  What We Do
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold">
              Comprehensive YouTube Content Protection
            </h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              We help creators and brands take control of their content across YouTube
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassmorphicCard
              variant="bordered"
              className="relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mt-12 -mr-12 flex items-end justify-start p-4">
                <Youtube className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Discover Your Content</h3>
              <p className="text-foreground/70 mb-6">
                We identify where your content is being used across YouTube, giving you complete visibility.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated content scanning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom Dashboard with real time data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Usage analytics</span>
                </li>
              </ul>
            </GlassmorphicCard>

            <GlassmorphicCard
              variant="highlight"
              className="relative overflow-hidden md:-translate-y-4"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mt-12 -mr-12 flex items-end justify-start p-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Protect Your Content</h3>
              <p className="text-foreground/70 mb-6">
                Choose how your content is used and manage unauthorized usage according to your preferences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated content claims</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customized protection strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Usage management options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated partner manager</span>
                </li>
              </ul>
            </GlassmorphicCard>

            <GlassmorphicCard
              variant="bordered"
              className="relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mt-12 -mr-12 flex items-end justify-start p-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monetize Your Content</h3>
              <p className="text-foreground/70 mb-6">
                Turn unauthorized usage into a revenue stream with our monetization options.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Claim Stolen Revenue</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Creator partnerships</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Monetization strategy</span>
                </li>
              </ul>
            </GlassmorphicCard>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Our Services
            </Button>
          </div>
        </div>
        
        <div className="mt-24 max-w-5xl mx-auto">
          <PricingPlans />
        </div>
      </div>
    </section>
  );
};
