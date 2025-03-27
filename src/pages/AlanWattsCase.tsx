
import React from "react";
import { Layout } from "@/components/Layout";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle2, PlayCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  Legend
} from "recharts";

const AlanWattsCase: React.FC = () => {
  // Data for the "before vs after" chart
  const claimsData = [
    { label: "Before", claimed: 0, total: 27000 },
    { label: "After", claimed: 29962, total: 30000 }
  ];

  // Revenue growth data
  const revenueData = [
    { month: "Jan", before: 800, after: 2500 },
    { month: "Feb", before: 900, after: 2700 },
    { month: "Mar", before: 750, after: 2900 },
    { month: "Apr", before: 850, after: 3100 },
    { month: "May", before: 900, after: 3300 },
    { month: "Jun", before: 1000, after: 3500 },
    { month: "Jul", before: 950, after: 3700 },
    { month: "Aug", before: 1050, after: 3900 },
  ];

  // Audience growth data
  const audienceData = [
    { month: "Jan", views: 120000 },
    { month: "Feb", views: 150000 },
    { month: "Mar", views: 180000 },
    { month: "Apr", views: 220000 },
    { month: "May", views: 270000 },
    { month: "Jun", views: 310000 },
    { month: "Jul", views: 350000 },
    { month: "Aug", views: 410000 },
  ];

  // Demographics data
  const demographicsData = [
    { age: "18-24", percentage: 22 },
    { age: "25-34", percentage: 38 },
    { age: "35-44", percentage: 20 },
    { age: "45-54", percentage: 12 },
    { age: "55+", percentage: 8 },
  ];

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Case Study</h1>
            <p className="text-xl text-foreground/70">
              Transforming Alan Watts' Digital Legacy on YouTube: A Partnership with YouTube and MindsetDRM
            </p>
          </div>
          
          <GlassmorphicCard className="p-8 md:p-12 max-w-5xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  The Alan Watts Organization
                </h3>
                <p className="text-foreground/70 mb-6">
                  When Mark Watts, along with the Alan Watts Organization (AWEU), sought to protect and properly monetize the vast collection of Alan Watts' teachings across YouTube, the digital landscape posed significant challenges.
                </p>
                <div className="flex space-x-8 mb-8">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">99.7%</p>
                    <p className="text-sm text-foreground/60">Content Claimed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">11K+</p>
                    <p className="text-sm text-foreground/60">Claims Processed</p>
                  </div>
                </div>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 group flex items-center">
                  View Full Documentation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
              <div className="relative">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                    alt="Alan Watts"
                    className="rounded-lg w-full relative z-0 shadow-lg aspect-[4/3] object-cover"
                  />
                </motion.div>
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm py-2 px-3 rounded shadow-md flex items-center">
                  <PlayCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <div>
                    <p className="text-xs font-medium">Alan Watts</p>
                    <p className="text-xs text-gray-600">Transforming Digital Legacy</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
          
          {/* Before vs After Section */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Before & After</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <GlassmorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Before MindsetDRM</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-600">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p>0% claimed of 27,000 Alan Watts videos</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-600">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p>No control or leverage over content</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-600">
                          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p>No insight into content performance</p>
                    </div>
                  </div>
                </GlassmorphicCard>
                
                <GlassmorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">After MindsetDRM</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <p>99.9% claimed or 29,962 Alan Watts videos</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <p>Full control and leverage over content</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <p>Full data analytics and performance insights</p>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
              
              {/* Claims Chart */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
                <h3 className="text-xl font-bold mb-4">Content Claims Progress</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={claimsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="label" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar name="Claimed Videos" dataKey="claimed" fill="#3b82f6" />
                      <Bar name="Total Videos" dataKey="total" fill="#93c5fd" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Challenge</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Widespread Misuse</h3>
                    <p className="text-foreground/70">
                      Alan Watts' speeches and lectures were being re-uploaded without permission or manipulated into formats that misrepresented his work.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Content Detection</h3>
                    <p className="text-foreground/70">
                      YouTube's Content ID system was unable to effectively track audio-only content like Alan Watts' lectures.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Posthumous Management</h3>
                    <p className="text-foreground/70">
                      Managing the rights to someone's content after their death is inherently complex, especially with a large library spread across numerous channels.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 mb-12">
                  <h3 className="text-2xl font-bold mb-4 text-center">Our Solutions</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-start mb-4">
                        <CheckCircle2 className="text-blue-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold mb-2">Audio-Only Content ID Tool</h4>
                          <p className="text-foreground/70">
                            MindsetDRM worked directly with YouTube to gain exclusive access and improve a new audio-only Content ID tool, enabling us to accurately track and claim Alan Watts' lectures across the platform.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-start mb-4">
                        <CheckCircle2 className="text-blue-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold mb-2">Custom Dashboard</h4>
                          <p className="text-foreground/70">
                            We built a proprietary dashboard specifically designed for rights holders of Alan Watts' content, allowing them to track all content, manage claims & takedowns, and view real-time revenue reporting.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-start mb-4">
                        <CheckCircle2 className="text-blue-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold mb-2">Creator Ecosystem</h4>
                          <p className="text-foreground/70">
                            MindsetDRM built an ecosystem where creators could engage with Alan Watts' teachings in a legitimate and profitable way through a licensing program.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-start mb-4">
                        <CheckCircle2 className="text-blue-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold mb-2">Content Guidelines</h4>
                          <p className="text-foreground/70">
                            We ensured that creators understood the rules for using Alan Watts' teachings, maintaining high quality content that accurately represented his philosophy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Results & Impact</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                  {/* Revenue Growth Chart */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="text-blue-600 h-6 w-6 mr-3" />
                      <h3 className="text-xl font-bold">Revenue Growth</h3>
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={revenueData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="before" name="Before MindsetDRM" stroke="#93c5fd" />
                          <Line type="monotone" dataKey="after" name="After MindsetDRM" stroke="#3b82f6" activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Audience Growth Chart */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="text-blue-600 h-6 w-6 mr-3" />
                      <h3 className="text-xl font-bold">Audience Growth</h3>
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={audienceData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Area type="monotone" dataKey="views" name="Monthly Views" stroke="#3b82f6" fill="#93c5fd" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Metrics Cards */}
                  <div className="md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-blue-600 mb-2">99.7%</div>
                        <p>Content Claimed</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-blue-600 mb-2">11K+</div>
                        <p>Claims Processed</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-blue-600 mb-2">↑230%</div>
                        <p>Revenue Growth</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                        <p>Licensed Creators</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Demographics & Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Audience Demographics</h3>
                    <p className="mb-4">MindsetDRM provides detailed insights into audience demographics that were previously unavailable</p>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={demographicsData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="age" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar name="Age Distribution (%)" dataKey="percentage" fill="#3b82f6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Impact & Benefits</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                        </div>
                        <p>Full understanding of all content viewed across YouTube (including pirated)</p>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                        </div>
                        <p>Data-informed decisions about viral content and audience preferences</p>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                        </div>
                        <p>Detailed demographics including age range, countries, and gender</p>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                        </div>
                        <p>Ability to promote Alan Watts lectures and keep content relevant</p>
                      </div>
                      <div className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                          <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                        </div>
                        <p>Fostered ecosystem with growing creators on favorable licensing splits</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-16">
                  <div className="bg-blue-50 p-8 border-t border-blue-100">
                    <h3 className="text-2xl font-bold mb-6 text-center">Testimonial</h3>
                    <blockquote className="text-lg italic mb-4">
                      "Working with MindsetDRM has transformed how we manage my father's digital legacy. Their innovative approach to content protection and monetization has not only increased our revenue but ensured that Alan's teachings are shared authentically with the world."
                    </blockquote>
                    <div className="flex items-center justify-end">
                      <div className="mr-4">
                        <p className="font-bold">Mark Watts</p>
                        <p className="text-sm text-gray-600">Alan Watts Organization</p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                        <img 
                          src="https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png" 
                          alt="Mark Watts" 
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-8">Ready to protect and monetize your content?</h2>
              <Link to="/contact">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AlanWattsCase;
