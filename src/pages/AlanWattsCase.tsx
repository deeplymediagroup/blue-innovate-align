
import React from "react";
import { Layout } from "@/components/Layout";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart
} from "recharts";
import { Button } from "@/components/ui/button";

const AlanWattsCase: React.FC = () => {
  // Gender demographic data
  const genderData = [
    { name: "Male", value: 80.4, color: "#2563eb" },
    { name: "Female", value: 18.9, color: "#ec4899" },
    { name: "Other", value: 0.7, color: "#6366f1" }
  ];

  // Age demographics data
  const ageData = [
    { age: "13-17", percentage: 0.7 },
    { age: "18-24", percentage: 13.3 },
    { age: "25-34", percentage: 35.4 },
    { age: "35-44", percentage: 25.5 },
    { age: "45-54", percentage: 13.4 },
    { age: "55-64", percentage: 6.6 },
    { age: "65+", percentage: 5.0 }
  ];

  // Cumulative claims and revenue data
  const claimsAndRevenueData = [
    { month: "Month 1", claims: 9000, revenue: 2255.46, cumulativeClaims: 9000 },
    { month: "Month 2", claims: 6000, revenue: 4165.18, cumulativeClaims: 15000 },
    { month: "Month 3", claims: 4000, revenue: 5729.14, cumulativeClaims: 19000 },
    { month: "Month 4", claims: 4000, revenue: 8921.30, cumulativeClaims: 23000 },
    { month: "Month 5", claims: 3000, revenue: 9873.62, cumulativeClaims: 26000 },
    { month: "Month 6", claims: 962, revenue: 11000, cumulativeClaims: 26962, projected: true }
  ];

  // Fix for the TypeScript error - customized tooltip formatter
  // Modified to accept NameType (which can be string or number)
  const formatTooltipValue = (value: any, name: any) => {
    if (name === 'Claims Processed' || String(name) === 'Claims Processed') return `${value} claims`;
    if (name === 'Revenue' || String(name) === 'Revenue') {
      // Check if value is a number and can use toFixed
      return typeof value === 'number' ? `$${value.toFixed(2)}` : `$${value}`;
    }
    return value;
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="font-bold"
      >
        {`${name} ${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  
  return (
    <Layout>
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="inline-block mb-4">
                <Link 
                  to="/case-studies" 
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Back to Case Studies
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Alan Watts Organization Case Study</h1>
              
              <GlassmorphicCard className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                    <p className="text-foreground/70 mb-4">
                      The Alan Watts Organization approached us to help protect their intellectual property across YouTube, where thousands of channels were using Alan Watts' content without permission.
                    </p>
                    <p className="text-foreground/70">
                      Our solution provided comprehensive rights management to identify, claim, and monetize unauthorized usage, resulting in significant revenue growth and improved content control.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                      <div>
                        <p className="text-3xl font-bold text-blue-600">99.9%</p>
                        <p className="text-sm text-foreground/60">Content Claimed</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-blue-600">27K+</p>
                        <p className="text-sm text-foreground/60">Claims Processed</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-blue-600">660%</p>
                        <p className="text-sm text-foreground/60">Revenue Growth</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-blue-600">866+</p>
                        <p className="text-sm text-foreground/60">Licensed Videos</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/lovable-uploads/2d1dd468-78c1-4f89-81f8-fae7a806fb6b.png" 
                      alt="Alan Watts" 
                      className="rounded-lg shadow-lg w-full aspect-[4/5] object-cover object-center"
                    />
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Before & After</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <GlassmorphicCard className="h-full p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-700">Before MindsetDRM</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
                        </div>
                        <span>No visibility into Alan Watts' content usage</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
                        </div>
                        <span>No control over content</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
                        </div>
                        <span>No insight into content performance</span>
                      </li>
                    </ul>
                  </GlassmorphicCard>
                </div>
                <div>
                  <GlassmorphicCard className="h-full p-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-700">After MindsetDRM</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
                        </div>
                        <span>100% visibility of 27,000+ Alan Watts videos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
                        </div>
                        <span>Full control over content</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
                        </div>
                        <span>Full analytics and performance insights</span>
                      </li>
                    </ul>
                  </GlassmorphicCard>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Content Claims & Revenue Progress Over 6 Months</h2>
              
              <div className="grid grid-cols-1 gap-8 mb-10">
                <GlassmorphicCard className="p-6">
                  <div className="h-[400px] mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        data={claimsAndRevenueData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" orientation="left" label={{ value: 'Claims Processed', angle: -90, position: 'insideLeft' }} />
                        <YAxis yAxisId="right" orientation="right" label={{ value: 'Revenue ($)', angle: 90, position: 'insideRight' }} />
                        <Tooltip formatter={formatTooltipValue} />
                        <Legend />
                        <Area
                          yAxisId="left"
                          type="monotone"
                          dataKey="cumulativeClaims"
                          name="Claims Processed"
                          fill="#2563eb"
                          stroke="#2563eb"
                          fillOpacity={0.3}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="revenue"
                          name="Revenue"
                          stroke="#16a34a"
                          strokeWidth={2}
                          dot={{ r: 5 }}
                          activeDot={{ r: 8 }}
                        />
                        {/* Projected arrow for month 6 */}
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="revenue"
                          name=""
                          stroke="#16a34a"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          dot={false}
                          connectNulls={true}
                          data={[
                            { month: "Month 5", revenue: 9873.62 },
                            { month: "Month 6", revenue: 11000 }
                          ]}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center text-sm text-gray-500 mt-2">
                    Month 6 includes projected data based on current growth trends
                  </div>
                </GlassmorphicCard>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-blue-600 font-bold text-xl mb-2">1</div>
                  <h3 className="text-xl font-bold mb-2">Widespread Misuse</h3>
                  <p className="text-gray-600">
                    Alan Watts' speeches and lectures were being re-uploaded without permission, with no way to track or monetize this use.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-blue-600 font-bold text-xl mb-2">2</div>
                  <h3 className="text-xl font-bold mb-2">Content Detection</h3>
                  <p className="text-gray-600">
                    YouTube's Content ID system was unable to effectively detect audio-based content like Alan Watts' speeches.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-blue-600 font-bold text-xl mb-2">3</div>
                  <h3 className="text-xl font-bold mb-2">Posthumous Management</h3>
                  <p className="text-gray-600">
                    Managing the rights to material from a speaker who passed away decades ago presented unique digital rights issues.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Audio-Only Content ID Tool</h3>
                  </div>
                  <p className="text-gray-600">
                    We developed custom audio matching technology to help identify content across YouTube where traditional methods struggle to do so, providing an accurate track record under one dashboard.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Custom Dashboard</h3>
                  </div>
                  <p className="text-gray-600">
                    We built a proprietary dashboard specifically designed for intellectual property management - balancing control, insights & transparency, with real-time revenue reporting.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Creator Ecosystem</h3>
                  </div>
                  <p className="text-gray-600">
                    Rather than shutting down creators who use Alan Watts' speeches, we established a fair revenue share model that benefits both creators and the Alan Watts Organization.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Content Guidelines</h3>
                  </div>
                  <p className="text-gray-600">
                    We provided the organization standardized guidelines for using Alan Watts' material, ensuring consistent quality content that properly represents his philosophy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-4xl font-bold text-blue-600">99.9%</p>
                  <p className="text-sm text-gray-500">Content Claimed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-4xl font-bold text-blue-600">27K+</p>
                  <p className="text-sm text-gray-500">Claims Processed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-4xl font-bold text-blue-600">660%</p>
                  <p className="text-sm text-gray-500">Revenue Growth</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <p className="text-4xl font-bold text-blue-600">866+</p>
                  <p className="text-sm text-gray-500">Licensed Videos</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassmorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-4">Audience Age Demographics</h3>
                  <div className="h-[300px] mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={ageData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="age" />
                        <YAxis tickFormatter={(value) => `${value}%`} />
                        <Tooltip formatter={(value) => [`${value}%`, "Audience"]} />
                        <Bar dataKey="percentage" name="Percentage" fill="#2563eb" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </GlassmorphicCard>
                
                <GlassmorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-4">Gender Demographics</h3>
                  <div className="h-[300px] mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <Pie
                          data={genderData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={2}
                          dataKey="value"
                          labelLine={false}
                          label={renderCustomizedLabel}
                        >
                          {genderData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </GlassmorphicCard>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Deeper Insights & Value</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">Data-Driven Content Strategy</h3>
                  <p className="text-gray-600">
                    By analyzing which Alan Watts topics have highest engagement and view-through rates, we guided future content releases. This allowed them to focus more strategically on content that resonates with audiences and generates maximum revenue.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">Sustainable Revenue Model</h3>
                  <p className="text-gray-600">
                    Rather than forcing takedowns of content, we created a successful licensing model in which both the Alan Watts Organization and content creators win. This approach maintains brand integrity while supporting community growth.
                  </p>
                  <p className="text-gray-600 mt-4">
                    By empowering authenticated creators and channels, the Alan Watts Organization has built long-term sustainable relationships with creators who help spread his philosophy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Testimonial</h2>
              <GlassmorphicCard className="p-6">
                <blockquote className="text-lg italic mb-6">
                  "Working with MindsetDRM has transformed how we manage my father's digital legacy. Their innovative approach to content protection and monetization has not only increased our revenue but ensured that Alan's teachings are shared authentically with the world."
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/2d1dd468-78c1-4f89-81f8-fae7a806fb6b.png" 
                    alt="Mark Watts" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium">Mark Watts</p>
                    <p className="text-sm text-gray-600">Director, Alan Watts Organization</p>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to protect and monetize your content?</h2>
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlanWattsCase;
