
import React, { useEffect, useRef, useState } from "react";
import { GlassmorphicCard } from "./GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface PricingPlanProps {
  name: string;
  description: string;
  price: {
    monthly: string;
    annually: string;
  };
  features: string[];
  cta: string;
  popular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  description,
  price,
  features,
  cta,
  popular = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState("annually");

  return (
    <GlassmorphicCard
      variant={popular ? "highlight" : "bordered"}
      className={`relative ${
        popular ? "md:-translate-y-4 shadow-lg" : ""
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animation="none"
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="py-1 px-3 bg-blue-600 text-white text-xs font-semibold rounded-full">
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-foreground/60">{description}</p>
      </div>

      <div className="mb-6">
        <p className="text-4xl font-bold">
          {billingPeriod === "monthly" ? price.monthly : price.annually}
        </p>
        <p className="text-sm text-foreground/60 mt-1">
          per {billingPeriod === "monthly" ? "month" : "month, billed annually"}
        </p>
      </div>

      <div className="mb-8">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 pt-1">
                <Check className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <Button
        className={`w-full button-shimmer ${
          popular
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "border border-blue-200 bg-transparent hover:bg-blue-50 text-foreground"
        }`}
      >
        {cta}
      </Button>
    </GlassmorphicCard>
  );
};

export const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState("annually");
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

  const toggleBilling = () => {
    setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly");
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-blue-50/50 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-16 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  Simple Pricing
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold">
              Choose the Perfect Plan for Your Needs
            </h2>
            <p className="mt-4 text-xl text-foreground/70 max-w-2xl mx-auto">
              Affordable protection for businesses of all sizes
            </p>

            <div className="mt-6 flex items-center justify-center">
              <span className={`mr-3 text-sm ${billingPeriod === "monthly" ? "text-foreground" : "text-foreground/60"}`}>
                Monthly
              </span>
              <Switch
                checked={billingPeriod === "annually"}
                onCheckedChange={toggleBilling}
              />
              <span className={`ml-3 text-sm ${billingPeriod === "annually" ? "text-foreground" : "text-foreground/60"}`}>
                Annually <span className="text-blue-600 font-medium">(-20%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingPlan
              name="Starter"
              description="Perfect for small content creators and individual professionals"
              price={{
                monthly: "$49",
                annually: "$39",
              }}
              features={[
                "Protect up to 500 digital assets",
                "Basic encryption and watermarking",
                "User access controls",
                "Email support",
                "Basic analytics",
                "1 admin user"
              ]}
              cta="Get Started"
            />

            <PricingPlan
              name="Professional"
              description="Ideal for growing businesses with valuable content"
              price={{
                monthly: "$99",
                annually: "$79",
              }}
              features={[
                "Protect up to 5,000 digital assets",
                "Advanced encryption and watermarking",
                "Detailed access controls",
                "Priority email support",
                "Advanced analytics and reporting",
                "5 admin users",
                "Content expiration controls"
              ]}
              cta="Get Started"
              popular={true}
            />

            <PricingPlan
              name="Enterprise"
              description="Full-featured solution for organizations with complex needs"
              price={{
                monthly: "$249",
                annually: "$199",
              }}
              features={[
                "Unlimited digital assets",
                "Custom encryption solutions",
                "Fine-grained permission system",
                "24/7 dedicated support",
                "Custom analytics dashboard",
                "Unlimited admin users",
                "API access for custom integrations",
                "Single sign-on (SSO) support"
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
