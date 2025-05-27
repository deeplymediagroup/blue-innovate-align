
import React, { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { CTASection } from "@/components/CTASection";
import { CreatorGrid } from "@/components/CreatorGrid";
import { AlanWattsShowcase } from "@/components/AlanWattsShowcase";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { UltimateSolution } from "@/components/UltimateSolution";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { PricingPlans } from "@/components/PricingPlans";

const Index: React.FC = () => {
  const [rightHolderValue, setRightHolderValue] = useState(40);
  const [revenueData, setRevenueData] = useState([
    { name: "Rights Holder", value: 40, color: "#0A2463" },
    { name: "Creator", value: 50, color: "#3E92CC" },
    { name: "Mindset", value: 10, color: "#93c5fd" },
  ]);
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const creatorValue = 90 - rightHolderValue;
    setRevenueData([
      { name: "Rights Holder", value: rightHolderValue, color: "#0A2463" },
      { name: "Creator", value: creatorValue, color: "#3E92CC" },
      { name: "Mindset", value: 10, color: "#93c5fd" },
    ]);
  }, [rightHolderValue]);

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

  const handleSliderChange = (value: number[]) => {
    setRightHolderValue(value[0]);
  };

  return (
    <Layout>
      <Hero />
      <ClientLogos />
      
      <div className="py-16 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Rights Holders We Work With
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From individual creators to large media companies, we help protect and monetize valuable content
          </p>
        </div>
        <CreatorGrid className="max-w-5xl mx-auto" />
      </div>
      
      <AlanWattsShowcase />

      {/* Services section - What We Do */}
      <Services />
      
      {/* Revenue Calculator - New Section */}
      <RevenueCalculator />
      
      {/* Ultimate Solution - New Section */}
      <UltimateSolution />

      {/* How It Works section - renamed to "This Is How We Do It" */}
      <HowItWorks />
      
      {/* Optional Licensing Section - Updated text */}
      <section id="licensing" className="py-16 pt-24 bg-gradient-to-b from-blue-50/30 to-white w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Optional Licensing, Maximum Benefit</h2>
                <p className="text-lg text-foreground/70 mb-6">
                  Create a thriving, long-term ecosystem with our licensing platform. Partner with creators to drive sustainable growth, while you earn passively with full control and end-to-end documentation.
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
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center flex-col items-center"
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
                                    y="47%" 
                                    textAnchor="middle" 
                                    dominantBaseline="middle" 
                                    className="fill-blue-600 text-lg font-bold"
                                  >
                                    Revenue Split
                                  </text>
                                  <text 
                                    x="50%" 
                                    y="57%" 
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
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 mb-2">Drag the slider to adjust revenue share</p>
                    <div className="px-4">
                      <Slider
                        value={[rightHolderValue]}
                        onValueChange={handleSliderChange}
                        max={90}
                        min={0}
                        step={1}
                        className="mb-2"
                      />
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-500">0%</span>
                        <span className="text-xs text-gray-500">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Plans section */}
      <section className="py-16 pt-24 bg-gradient-to-b from-white to-blue-50/30 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mt-0 max-w-5xl mx-auto">
            <PricingPlans />
          </div>
        </div>
      </section>
      
      {/* Light CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 text-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Light animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-50/30 to-blue-100/30 animate-pulse"></div>
            
            {/* Main content */}
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 bg-clip-text text-transparent"
              >
                Ready to Transform Your Content Strategy?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Join an exclusive group of rights holders who've discovered the power of AI-driven content protection and monetization
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <div className="flex items-center bg-blue-50 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">AI-Powered Protection</span>
                </div>
                <div className="flex items-center bg-blue-50 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Real-Time Monetization</span>
                </div>
              </motion.div>
              
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
                  >
                    Start Your Journey Today
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-sm text-gray-500 mt-6"
              >
                No setup fees • Free consultation • Custom solutions available
              </motion.p>
            </div>
          </motion.div>
        </div>
        
        {/* Light background decoration */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 border border-blue-300 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-24 h-24 border border-cyan-300 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-200 rounded-full"
            animate={{ rotate: 180, scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>
        
        {/* Light animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </section>
    </Layout>
  );
};

export default Index;
