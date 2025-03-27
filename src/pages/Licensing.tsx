
import React from "react";
import { Layout } from "@/components/Layout";
import { HowItWorks } from "@/components/HowItWorks";
import { YoutubeContentGrid } from "@/components/YoutubeContentGrid";
import { CreatorGrid } from "@/components/CreatorGrid";

const Licensing: React.FC = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Content Licensing & Distribution
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-12">
              Maximize the reach and impact of your content with our licensing and distribution solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto my-16">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Content Licensing</h3>
              <p className="mb-4">Our content licensing solutions help you:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Protect your intellectual property rights</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Create new revenue streams from existing content</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Establish clear usage guidelines and terms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Content Distribution</h3>
              <p className="mb-4">Our distribution network helps you:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Reach new audiences across multiple platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Partner with world-class creators to amplify your message</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Optimize content for maximum engagement and monetization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <HowItWorks />
      
      <YoutubeContentGrid />
      
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Current Content Creators We Work With
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From individual creators to large media companies, we help protect and monetize valuable content
          </p>
        </div>
        <CreatorGrid className="max-w-5xl mx-auto" />
      </section>
    </Layout>
  );
};

export default Licensing;
