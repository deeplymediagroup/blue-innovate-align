
import React, { useEffect, useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { CheckCircle, Shield, DollarSign, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <GlassmorphicCard
        variant="bordered"
        className="relative overflow-hidden transition-all duration-300 hover:shadow-md"
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
            <span>Personalized Dashboard</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Usage analytics</span>
          </li>
        </ul>
      </GlassmorphicCard>

      <GlassmorphicCard
        variant="highlight"
        className="relative overflow-hidden md:-translate-y-4 transition-all duration-300 hover:shadow-md"
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
            <span>Protection options</span>
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
        className="relative overflow-hidden transition-all duration-300 hover:shadow-md"
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
            <span>Unlock Revenue Potential</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Creator partnerships</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Reclaim Stolen Revenue</span>
          </li>
        </ul>
      </GlassmorphicCard>
    </div>
  );
};
