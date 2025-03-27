
import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingPlans } from "@/components/PricingPlans";
import { CTASection } from "@/components/CTASection";
import { CreatorGrid } from "@/components/CreatorGrid";
import { AlanWattsShowcase } from "@/components/AlanWattsShowcase";
import { YoutubeContentGrid } from "@/components/YoutubeContentGrid";

const Index: React.FC = () => {
  useEffect(() => {
    // Add intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-section").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <ClientLogos />
      <AlanWattsShowcase />
      <Services />
      <YoutubeContentGrid />
      <div className="py-16 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Content Creators We Work With
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From individual creators to large media companies, we help protect and monetize valuable content
          </p>
        </div>
        <CreatorGrid className="max-w-5xl mx-auto" />
      </div>
      <HowItWorks />
      <PricingPlans />
      <CTASection />
    </Layout>
  );
};

export default Index;
