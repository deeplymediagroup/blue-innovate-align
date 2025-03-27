
import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { CTASection } from "@/components/CTASection";
import { CreatorGrid } from "@/components/CreatorGrid";
import { AlanWattsShowcase } from "@/components/AlanWattsShowcase";
import { YoutubeContentGrid } from "@/components/YoutubeContentGrid";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  const revenueData = [
    { name: "Rights Holder", value: 40 },
    { name: "Creator", value: 50 },
    { name: "Mindset", value: 10 },
  ];
  
  const COLORS = ["#3b82f6", "#93c5fd", "#60a5fa"];

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
    <Layout extraNavLinks={[{ title: "Claiming", href: "#services" }]}>
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

      {/* Largest Motivational Media Network Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <GlassmorphicCard className="p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Largest Motivational Media Network on YouTube
                </h3>
                <p className="text-foreground/70 mb-6">
                  Our network manages rights for leading motivational content creators, helping them protect their intellectual property and grow their revenue.
                </p>
                <div className="flex space-x-8 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">30M+</p>
                    <p className="text-sm text-foreground/60">Monthly Views</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">20M+</p>
                    <p className="text-sm text-foreground/60">Subscribers</p>
                  </div>
                </div>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 group flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
              <div className="relative">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://img.youtube.com/vi/khOaAHK7efc/maxresdefault.jpg"
                    alt="Motivational content"
                    className="rounded-lg w-full relative z-0 shadow-lg"
                  />
                </motion.div>
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm py-2 px-3 rounded shadow-md flex items-center">
                  <div className="h-6 w-6 bg-red-600 rounded flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Motiversity</p>
                    <p className="text-xs text-gray-600">11.7M views</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </section>

      {/* Why Offer Licensing Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Offer Licensing?</h2>
                <p className="text-lg text-foreground/70 mb-6">
                  We are one of the only digital rights management companies that combines claiming with licensing to create a sustainable ecosystem for creators.
                </p>
                <p className="text-lg text-foreground/70 mb-6">
                  Our licensing model is an optional package that allows top creators to thrive. By working with creators, we help bring viral videos to life and create a broader content ecosystem.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">The Mindset Advantage</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Sustainable licensing model that benefits everyone</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Monthly passive income from your content</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-600"></div>
                      </div>
                      <span>Highest accuracy in the world for audio match</span>
                    </li>
                  </ul>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                  {/* Revenue Split Visualization */}
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-xs aspect-square flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Rights Holder: 40% - 144 degrees - Blue */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="20"
                          strokeDasharray="251.2"
                          strokeDashoffset="150.72"
                          transform="rotate(-90 50 50)"
                        />
                        {/* Creator: 50% - 180 degrees - Light Blue */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#93c5fd"
                          strokeWidth="20"
                          strokeDasharray="251.2"
                          strokeDashoffset="125.6"
                          transform="rotate(-90 50 50)"
                        />
                        {/* Mindset: 10% - 36 degrees - Medium Blue */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="20"
                          strokeDasharray="251.2"
                          strokeDashoffset="226.08"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                        <h3 className="text-2xl font-bold text-blue-800">Revenue Split</h3>
                        <p className="text-sm text-gray-600">Sustainable ecosystem</p>
                      </div>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                      {revenueData.map((segment, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="flex items-center mb-1">
                            <div className="h-4 w-4 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                            <p className="text-sm font-medium">{segment.name}</p>
                          </div>
                          <p className="text-2xl font-bold text-blue-600">{segment.value}%</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
