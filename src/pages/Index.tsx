
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
  
  const channelStats = [
    { name: "Motiversity", subscribers: "3.8M", views: "590M+" },
    { name: "Motivation Madness", subscribers: "3.8M", views: "450M+" },
    { name: "Motivation2Study", subscribers: "4.6M", views: "380M+" },
    { name: "MotivationHub", subscribers: "3.5M", views: "290M+" },
    { name: "After Skool", subscribers: "3.7M", views: "340M+" },
    { name: "T&H Inspiration", subscribers: "758K", views: "68M+" },
    { name: "True Meaning", subscribers: "526K", views: "59M+" },
  ];

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

      {/* Largest Motivational Media Network Section */}
      <section id="distribution" className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Largest Motivational Media Network on YouTube
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our network manages rights for leading motivational content creators, helping them protect 
              their intellectual property and grow their distribution reach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Distribution Partners</h3>
              <p className="mb-6 text-foreground/70">
                We help speakers and podcasters reach millions through our established distribution network.
                Our partners have over 2 billion total views across YouTube.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {channelStats.slice(0, 4).map((channel, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-bold text-blue-800">{channel.name}</h4>
                    <div className="flex justify-between mt-2">
                      <div>
                        <p className="text-xs text-gray-500">Subscribers</p>
                        <p className="font-bold text-blue-600">{channel.subscribers}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Views</p>
                        <p className="font-bold text-blue-600">{channel.views}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Reach</h3>
              <div className="flex space-x-8 mb-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">2B+</p>
                  <p className="text-sm text-foreground/60">Total Views</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">20M+</p>
                  <p className="text-sm text-foreground/60">Subscribers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">100K+</p>
                  <p className="text-sm text-foreground/60">Monthly Content Claims</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {channelStats.slice(4).map((channel, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-bold text-blue-800">{channel.name}</h4>
                    <div className="flex justify-between mt-2">
                      <div>
                        <p className="text-xs text-gray-500">Subscribers</p>
                        <p className="font-bold text-blue-600">{channel.subscribers}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Views</p>
                        <p className="font-bold text-blue-600">{channel.views}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-4 rounded-lg border border-blue-300 col-span-1">
                  <h4 className="font-bold">How We Help</h4>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>• Content Distribution</li>
                    <li>• Audience Growth</li>
                    <li>• Rights Management</li>
                    <li>• Revenue Maximization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Offer Licensing Section */}
      <section id="licensing" className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Optional Licensing, Maximum Benefit</h2>
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
                <div className="relative w-full max-w-md aspect-square p-8">
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Revenue Split Visualization - Improved Semi-circle chart */}
                    <svg viewBox="0 0 200 100" className="w-full">
                      {/* Rights Holder: 40% */}
                      <path
                        d="M100,100 L100,0 A100,100 0 0,1 165.3,70.7 L100,100 Z"
                        fill="#3b82f6"
                      />
                      {/* Creator: 50% */}
                      <path
                        d="M100,100 L165.3,70.7 A100,100 0 0,1 100,200 L100,100 Z"
                        fill="#93c5fd"
                      />
                      {/* Mindset: 10% */}
                      <path
                        d="M100,100 L100,200 A100,100 0 0,1 34.7,70.7 L100,0 L100,100 Z"
                        fill="#60a5fa"
                      />
                      {/* Inner white circle */}
                      <circle cx="100" cy="100" r="60" fill="white" />
                      {/* Text in the middle */}
                      <text x="100" y="90" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#0f5bde">Revenue Split</text>
                      <text x="100" y="110" textAnchor="middle" fontSize="8" fill="#666">Sustainable ecosystem</text>
                    </svg>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4 w-full">
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
