
import React, { useEffect, useRef } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const PlanFeature: React.FC<{ 
  feature: string; 
  includedIn: { essential: boolean; pro: boolean; enterprise: boolean } 
}> = ({ feature, includedIn }) => {
  return (
    <div className="grid grid-cols-4 py-3 border-b border-gray-100">
      <div className="col-span-1 font-medium">{feature}</div>
      
      <div className="col-span-1 text-center">
        {includedIn.essential ? (
          <Check className="h-5 w-5 text-blue-600 mx-auto" />
        ) : (
          <X className="h-5 w-5 text-gray-300 mx-auto" />
        )}
      </div>
      
      <div className="col-span-1 text-center">
        {includedIn.pro ? (
          <Check className="h-5 w-5 text-blue-600 mx-auto" />
        ) : (
          <X className="h-5 w-5 text-gray-300 mx-auto" />
        )}
      </div>
      
      <div className="col-span-1 text-center">
        {includedIn.enterprise ? (
          <Check className="h-5 w-5 text-blue-600 mx-auto" />
        ) : (
          <X className="h-5 w-5 text-gray-300 mx-auto" />
        )}
      </div>
    </div>
  );
};

export const PricingPlans: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

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
    <section id="pricing" className="py-24 bg-gradient-to-b from-background to-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={sectionRef}
          style={{ opacity, scale }}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  Pricing Plans
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold">
              Digital Rights Plans for Your Strategic Goals
            </h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose the plan that aligns with your content protection needs
            </p>
          </div>

          <GlassmorphicCard className="p-8">
            <div className="grid grid-cols-4 mb-8">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center">
                <h3 className="text-xl font-bold mb-2">Essential</h3>
                <p className="text-sm text-foreground/60 mb-4">For emerging creators</p>
              </div>
              <div className="col-span-1 text-center">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-sm text-foreground/60 mb-4">For growing channels</p>
                <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
                  Most Popular
                </div>
              </div>
              <div className="col-span-1 text-center">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-sm text-foreground/60 mb-4">For established brands</p>
              </div>
            </div>

            <PlanFeature 
              feature="Content Identification" 
              includedIn={{ essential: true, pro: true, enterprise: true }} 
            />
            <PlanFeature 
              feature="Automated Claims" 
              includedIn={{ essential: true, pro: true, enterprise: true }} 
            />
            <PlanFeature 
              feature="Basic Analytics" 
              includedIn={{ essential: true, pro: true, enterprise: true }} 
            />
            <PlanFeature 
              feature="Revenue Reporting" 
              includedIn={{ essential: true, pro: true, enterprise: true }} 
            />
            <PlanFeature 
              feature="Creator Partnerships" 
              includedIn={{ essential: false, pro: true, enterprise: true }} 
            />
            <PlanFeature 
              feature="Content Guidelines" 
              includedIn={{ essential: false, pro: true, enterprise: true }} 
            />
            <PlanFeature 
              feature="Advanced Analytics" 
              includedIn={{ essential: false, pro: true, enterprise: true }} 
            />
            <PlanFeature 
              feature="Dedicated Manager" 
              includedIn={{ essential: false, pro: false, enterprise: true }} 
            />
            <PlanFeature 
              feature="Custom Strategy" 
              includedIn={{ essential: false, pro: false, enterprise: true }} 
            />
            <PlanFeature 
              feature="White-label Dashboard" 
              includedIn={{ essential: false, pro: false, enterprise: true }} 
            />

            <div className="grid grid-cols-4 mt-8">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center">
                <Button className="w-full bg-white border border-blue-300 text-blue-600 hover:bg-blue-50">
                  Get Started
                </Button>
              </div>
              <div className="col-span-1 text-center">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white button-shimmer">
                  Get Started
                </Button>
              </div>
              <div className="col-span-1 text-center">
                <Button className="w-full bg-white border border-blue-300 text-blue-600 hover:bg-blue-50">
                  Contact Sales
                </Button>
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};
