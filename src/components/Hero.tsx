
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";

export const Hero: React.FC = () => {
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
    <section className="min-safe-h-screen relative flex items-center overflow-hidden pt-24 pb-20">
      {/* Animated background blobs */}
      <AnimatedBlob 
        size="h-[500px] w-[500px]" 
        position="top-[-200px] right-[-200px]" 
      />
      <AnimatedBlob 
        size="h-[600px] w-[600px]" 
        position="bottom-[-300px] left-[-200px]" 
        delay="3s"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={sectionRef}
          className="reveal-section max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-block mb-3">
            <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
              <p className="text-xs font-medium text-blue-700">
                Redefining Content Rights Management
              </p>
            </div>
          </div>

          <h1 className="font-display font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
            Digital Rights Management Made Simple
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto text-balance">
            Mindset DRM protects your valuable digital assets with intelligent
            content security that's easy to implement and manage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg button-shimmer">
              Get Started <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-200 hover:border-blue-300 px-8 py-6 text-lg"
            >
              Book a Demo
            </Button>
          </div>

          <div className="pt-16 opacity-70 animate-pulse">
            <a href="#features" className="inline-flex flex-col items-center">
              <p className="text-sm text-foreground/70 mb-2">Learn More</p>
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
