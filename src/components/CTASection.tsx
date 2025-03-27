
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedBlob } from "./AnimatedBlob";

export const CTASection: React.FC = () => {
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
    <section id="contact" className="py-24 relative overflow-hidden">
      <AnimatedBlob 
        size="h-[400px] w-[400px]" 
        position="top-[-200px] left-[-200px]" 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={sectionRef}
            className="reveal-section bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Digital Content?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of businesses that trust Mindset DRM for their content protection needs. Get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg button-shimmer">
                Get Started <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 hover:bg-white/10 text-white px-8 py-6 text-lg"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
