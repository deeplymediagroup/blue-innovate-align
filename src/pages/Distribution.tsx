
import React from "react";
import { Layout } from "@/components/Layout";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { YoutubeContentGrid } from "@/components/YoutubeContentGrid";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { motion } from "framer-motion";

const Distribution: React.FC = () => {
  const data = [
    { name: "Rights Holder", value: 40 },
    { name: "Creator", value: 50 },
    { name: "Mindset", value: 10 },
  ];
  
  const COLORS = ["#3b82f6", "#93c5fd", "#60a5fa"];

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Content Distribution</h1>
            <p className="text-xl text-foreground/70">
              Amplify your content reach and monetization through our YouTube distribution network
            </p>
          </div>
          
          <GlassmorphicCard className="p-8 md:p-12 max-w-5xl mx-auto mt-16">
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
      </div>
      
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Offer Licensing?</h2>
                <p className="text-lg text-foreground/70 mb-6">
                  We are the only digital rights management company in the world that not only does claims, but does licensing with creators to create an ecosystem.
                </p>
                <p className="text-lg text-foreground/70 mb-6">
                  Creators are making income from your content. If you claim and take away revenue completely, they will stop making videos. So we give up a percentage to creators of a pie.
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
                      <span>Highest accuracy in the world for podcasters</span>
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
                <div className="w-full max-w-md aspect-square">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={140}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1500}
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Label
                          content={({ cx, cy }) => (
                            <g>
                              <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" className="text-xl font-bold fill-blue-800">
                                Revenue Split
                              </text>
                            </g>
                          )}
                          position="center"
                        />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.map((segment, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="h-4 w-4 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                    <h4 className="font-medium">{segment.name}</h4>
                  </div>
                  <p className="text-3xl font-bold">{segment.value}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <YoutubeContentGrid />
      
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Distribution Benefits</h2>
            <p className="text-xl text-foreground/70">
              Our distribution network helps you expand your audience and increase revenue
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <GlassmorphicCard className="p-6 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Expanded Visibility</h3>
                <p className="text-foreground/70">
                  Reach millions of viewers through our network of premium content channels
                </p>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="p-6 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.686L4.9 19.1m12.786-1.414L19.1 19.1M22 12h-2m-8-6a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Amplification</h3>
                <p className="text-foreground/70">
                  Strengthen your brand presence through strategic content distribution
                </p>
              </div>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="p-6 h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-center">
                <div className="h-14 w-14 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 8v2m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Increased Revenue</h3>
                <p className="text-foreground/70">
                  Maximize monetization through our optimized distribution strategies
                </p>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Distribution;
