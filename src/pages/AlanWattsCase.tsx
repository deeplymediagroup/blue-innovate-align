import React from "react";
import { Layout } from "@/components/Layout";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, PlayCircle, TrendingUp, Database, Shield, Users } from "lucide-react";
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
  Legend,
  PieChart,
  Pie,
  Cell,
  ComposedChart
} from "recharts";

const AlanWattsCase: React.FC = () => {
  // Data for the revenue growth data over time
  const revenueData = [
    { month: "Month 1", revenue: 2255.46, claims: 9000, cumulativeClaims: 9000 },
    { month: "Month 2", revenue: 4165.18, claims: 6000, cumulativeClaims: 15000 },
    { month: "Month 3", revenue: 5729.14, claims: 4000, cumulativeClaims: 19000 },
    { month: "Month 4", revenue: 8921.30, claims: 4000, cumulativeClaims: 23000 },
    { month: "Month 5", revenue: 9873.62, claims: 3000, cumulativeClaims: 26000 },
    { month: "Month 6", revenue: 11500, claims: 962, cumulativeClaims: 26962 },
  ];

  // Age demographics data
  const ageData = [
    { age: "13-17", percentage: 0.7 },
    { age: "18-24", percentage: 13.3 },
    { age: "25-34", percentage: 35.4 },
    { age: "35-44", percentage: 25.5 },
    { age: "45-54", percentage: 13.4 },
    { age: "55-64", percentage: 6.6 },
    { age: "65+", percentage: 5.0 },
  ];

  // Gender demographics data - updated values and colors
  const genderData = [
    { name: "Male", value: 80.4, color: "#3E92CC" }, // Lighter blue
    { name: "Female", value: 19.6, color: "#FF8FAB" }, // Pink color
  ];

  // Fix for the TypeScript error - customized tooltip formatter
  const formatTooltipValue = (value: any, name: string) => {
    if (name === 'Claims Processed') return `${value} claims`;
    if (name === 'Revenue') {
      // Fixed TypeScript error by ensuring value is treated as a string
      return typeof value === 'number' ? `$${value.toFixed(2)}` : `$${String(value)}`;
    }
    return value;
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Updated header section with improved alignment */}
          <div className="mb-10 max-w-5xl mx-auto">
            <Link to="/case-studies" className="flex items-center text-blue-500 hover:text-blue-700 mb-4">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Case Studies
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Alan Watts Organization Case Study</h1>
          </div>
          
          <GlassmorphicCard className="p-8 md:p-12 mx-auto mb-16 bg-white max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                <p className="text-gray-600 mb-6">
                  The Alan Watts Organization approached us to help protect their intellectual property across YouTube, 
                  where thousands of channels were using Alan Watts' content without permission.
                </p>
                <p className="text-gray-600 mb-8">
                  We provided strategic guidance and rights management solutions to identify, claim, and monetize unauthorized content. 
                  Additionally, we built a licensing ecosystem that allows creators to legally use Alan Watt's content within content guidelines, 
                  benefiting both the organization and creators.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">99.9%</p>
                    <p className="text-sm text-gray-500">Content Claimed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">27K+</p>
                    <p className="text-sm text-gray-500">Claims Processed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">660%</p>
                    <p className="text-sm text-gray-500">Revenue Growth</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">866+</p>
                    <p className="text-sm text-gray-500">Licensed Videos</p>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/8bb8bfe7-75d6-4f96-8a7a-3a9bfcb30dd3.png" 
                  alt="Alan Watts" 
                  className="rounded-lg w-full h-full object-cover shadow-lg"
                />
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
                      <p>No control over content</p>
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
                      <p>99.9% claimed or 26,962 Alan Watts videos</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                      <p>Full control over content</p>
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
                <h3 className="text-xl font-bold mb-4">Content Claims & Revenue Progress Over 6 Months</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={revenueData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
                      <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
                      <Tooltip 
                        formatter={(value, name) => formatTooltipValue(value, name)}
                      />
                      <Legend />
                      <Line 
                        yAxisId="left"
                        type="monotone"
                        name="Claims Processed" 
                        dataKey="cumulativeClaims" 
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Area 
                        yAxisId="right"
                        type="monotone" 
                        name="Revenue" 
                        dataKey="revenue" 
                        stroke="#10b981" 
                        fill="url(#revenueGradient)" 
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                        </linearGradient>
                      </defs>
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white w-full">
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
                        <div className="text-blue-600 h-9 w-9 mt-1 mr-3 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                          <Database className="h-5 w-5" />
                        </div>
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
                        <div className="text-blue-600 h-9 w-9 mt-1 mr-3 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="h-5 w-5" />
                        </div>
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
                        <div className="text-blue-600 h-9 w-9 mt-1 mr-3 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5" />
                        </div>
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
                        <div className="text-blue-600 h-9 w-9 mt-1 mr-3 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                          <Shield className="h-5 w-5" />
                        </div>
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
                
                {/* Metrics Cards */}
                <div className="mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                      <p>Content Claimed</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-4xl font-bold text-blue-600 mb-2">27K+</div>
                      <p>Claims Processed</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-4xl font-bold text-blue-600 mb-2">↑660%</div>
                      <p>Revenue Growth</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-4xl font-bold text-blue-600 mb-2">866+</div>
                      <p>Licensed Videos</p>
                    </div>
                  </div>
                </div>
                
                {/* Demographics & Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Audience Age Demographics</h3>
                    <p className="mb-4">MindsetDRM provides detailed insights into audience demographics that were previously unavailable</p>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={ageData}
                          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                          barSize={35}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="age" />
                          <YAxis />
                          <Tooltip formatter={(value) => `${value}%`} />
                          <Bar name="Age Distribution (%)" dataKey="percentage" fill="#3b82f6" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Gender Demographics</h3>
                    <div className="h-64 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={genderData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(1)}%`}
                            labelLine={false}
                          >
                            {genderData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} name={entry.name} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                
                {/* Additional Data Insights Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-16">
                  <h3 className="text-xl font-bold mb-4">Deeper Insights & Value</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3">Data-Driven Content Strategy</h4>
                      <p className="text-foreground/70 mb-4">
                        With MindsetDRM's technology, the Alan Watts Organization gained full visibility into how their content performs across YouTube. This allowed them to make strategic decisions based on actual audience preferences, trending topics, and engagement patterns.
                      </p>
                      <p className="text-foreground/70">
                        By understanding which lectures resonated most with different audience segments, they could better focus their preservation and digitization efforts on high-value content.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3">Sustainable Revenue Model</h4>
                      <p className="text-foreground/70 mb-4">
                        Beyond simply claiming content, MindsetDRM created a sustainable ecosystem that encourages creators to engage with Alan Watts' work appropriately. 
                      </p>
                      <p className="text-foreground/70">
                        The licensing program provided a win-win: creators get to use high-quality content with permission, while the Alan Watts Organization receives fair compensation and maintains control over how Alan's teachings are presented.
                      </p>
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
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                        <img 
                          src="https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/a25f04e5-6440-4fd1-9d76-7e1a49b2690f/Screen+Shot+2022-03-21+at+4.17.56+PM.png" 
                          alt="Mark Watts" 
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <p className="font-bold">Mark Watts</p>
                        <p className="text-sm text-gray-600">Alan Watts Organization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-20 bg-gradient-to-b from-white to-blue-50 w-full">
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
