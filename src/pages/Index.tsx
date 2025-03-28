
import React, { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { CTASection } from "@/components/CTASection";
import { CreatorGrid } from "@/components/CreatorGrid";
import { AlanWattsShowcase } from "@/components/AlanWattsShowcase";
import { YoutubeContentGrid } from "@/components/YoutubeContentGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  ResponsiveContainer,
  Tooltip
} from "recharts";

const Index: React.FC = () => {
  const revenueData = [
    { name: "Rights Holder", value: 40, color: "#0A2463" }, // Darker blue
    { name: "Creator", value: 50, color: "#3E92CC" }, // Lighter blue
    { name: "Mindset", value: 10, color: "#93c5fd" }, // Even lighter blue
  ];
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const channelStats = [
    { name: "Motiversity", subscribers: "3.8M", views: "530M+", icon: "/lovable-uploads/89599c4a-2943-430b-a348-cf1f039ac933.png" },
    { name: "MotivationHub", subscribers: "3.5M", views: "380M+", icon: "/lovable-uploads/1bf57caa-d1c1-40fc-823d-edd080e2b5db.png" },
    { name: "Motivation2Study", subscribers: "4.6M", views: "365M+", icon: "/lovable-uploads/7ad119b9-2029-4225-9db1-d52780651bd4.png" },
    { name: "Motivation Madness", subscribers: "3.8M", views: "350M+", icon: "/lovable-uploads/120bfcd1-e00e-4b2f-ac25-ee49edfe0e22.png" },
    { name: "After Skool", subscribers: "3.7M", views: "260M+", icon: "/lovable-uploads/67ff2ca5-79fd-44ed-b348-2dfb2dca0fb8.png" },
    { name: "T&H Inspiration", subscribers: "758K", views: "140M+", icon: "/lovable-uploads/89599c4a-2943-430b-a348-cf1f039ac933.png" },
    { name: "Alpha Leaders", subscribers: "767K", views: "56M+", icon: "/lovable-uploads/1bf57caa-d1c1-40fc-823d-edd080e2b5db.png" },
    { name: "True Meaning", subscribers: "526K", views: "38M+", icon: "/lovable-uploads/13347a70-78da-4271-af11-b267957cfba5.png" },
  ];

  useEffect(() => {
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

    // Handle hash navigation for smooth scrolling
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 rounded-md shadow-md border border-gray-200">
          <p className="font-bold">{data.name}: {data.value}%</p>
        </div>
      );
    }
    return null;
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

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

      <section id="distribution" className="py-16 pt-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto mb-12 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              We Power The Largest Motivational YouTube Network
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our network manages rights for leading motivational content creators
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Distribution Partners</h3>
            <p className="mb-6 text-foreground/70">
              We help speakers and podcasters reach millions through our established distribution network.
              Our partners have over 2 billion total views across YouTube.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {channelStats.map((channel, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg border border-blue-100 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center mb-3">
                    <img 
                      src={channel.icon} 
                      alt={channel.name} 
                      className="w-8 h-8 rounded-full mr-2 object-cover"
                    />
                    <h4 className="font-bold text-blue-800">{channel.name}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-500">Subscribers</p>
                      <p className="font-bold text-blue-600">{channel.subscribers}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-500">Views</p>
                      <p className="font-bold text-blue-600">{channel.views}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4 bg-blue-50 rounded-lg p-4">
              <div>
                <p className="text-3xl font-bold text-blue-600">2B+</p>
                <p className="text-sm text-foreground/60">Total Views</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">20M+</p>
                <p className="text-sm text-foreground/60">Subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="licensing" className="py-16 pt-24 bg-gradient-to-b from-blue-50/30 to-white">
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
                <div className="w-full max-w-md">
                  <div className="w-full aspect-square flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Tooltip content={<CustomTooltip />} />
                        <Pie
                          data={revenueData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={100}
                          outerRadius={160}
                          paddingAngle={3}
                          startAngle={90}
                          endAngle={-270}
                          isAnimationActive={true}
                          onMouseEnter={onPieEnter}
                          onMouseLeave={onPieLeave}
                        >
                          {revenueData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.color} 
                              stroke="#fff"
                              strokeWidth={activeIndex === index ? 3 : 2}
                              scale={activeIndex === index ? 1.05 : 1}
                            />
                          ))}
                          <Label
                            content={() => {
                              return (
                                <g>
                                  <text 
                                    x="50%" 
                                    y="50%" 
                                    textAnchor="middle" 
                                    dominantBaseline="middle" 
                                    className="fill-blue-600 text-lg font-bold"
                                  >
                                    Revenue Split
                                  </text>
                                  <text 
                                    x="50%" 
                                    y="60%" 
                                    textAnchor="middle" 
                                    dominantBaseline="middle" 
                                    className="fill-blue-400 text-sm"
                                  >
                                    Sustainable ecosystem
                                  </text>
                                </g>
                              );
                            }}
                          />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4 w-full">
                    {revenueData.map((segment, index) => (
                      <div 
                        key={index} 
                        className={`flex flex-col items-center transition-all duration-300 ${activeIndex === index ? 'scale-110' : ''}`}
                      >
                        <div className="flex items-center mb-1">
                          <div className="h-4 w-4 rounded-full mr-2" style={{ backgroundColor: segment.color }}></div>
                          <p className="text-sm font-medium">{segment.name}</p>
                        </div>
                        <p className="text-2xl font-bold" style={{ color: segment.color }}>{segment.value}%</p>
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
