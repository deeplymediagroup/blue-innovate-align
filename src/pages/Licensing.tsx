
import React from "react";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { YoutubeContentGrid } from "@/components/YoutubeContentGrid";
import { HowItWorks } from "@/components/HowItWorks";

const Licensing: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Content Licensing</h1>
            <p className="text-xl text-foreground/70">
              Maximize revenue from your content across YouTube through our licensing and monetization solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
            <GlassmorphicCard className="p-6 h-full">
              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">License Management</h3>
                <p className="text-foreground/70">
                  Comprehensive tools to manage how your content is licensed across YouTube
                </p>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="p-6 h-full">
              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.686L4.9 19.1m12.786-1.414L19.1 19.1M22 12h-2m-8-6a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Content Visibility</h3>
                <p className="text-foreground/70">
                  Increased exposure through our network of premium content creators
                </p>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="p-6 h-full">
              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 8v2m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Revenue Optimization</h3>
                <p className="text-foreground/70">
                  Strategic monetization to maximize your content's earning potential
                </p>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
      
      <YoutubeContentGrid />
      
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Our Licensing Process Works</h2>
            <p className="text-xl text-foreground/70">
              Our streamlined approach helps you maximize value from your content
            </p>
          </div>
          
          <HowItWorks />
        </div>
      </section>
    </Layout>
  );
};

export default Licensing;
