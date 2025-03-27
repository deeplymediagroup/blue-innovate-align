
import React from "react";
import { Layout } from "@/components/Layout";
import { GlassmorphicCard } from "@/components/GlassmorphicCard";
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
  Label,
  AreaChart,
  Area,
  ComposedChart
} from "recharts";

const AlanWattsCase: React.FC = () => {
  // Gender demographic data
  const genderData = [
    { name: "Male", value: 80.4, color: "#2563eb" },
    { name: "Female", value: 18.9, color: "#ec4899" },
    { name: "User Specified", value: 0.7, color: "#6366f1" }
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
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="font-bold"
      >
        {`${name} ${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };
  
  return (
    <Layout extraNavLinks={[{ title: "Case Studies", href: "/case-studies" }]}>
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="inline-block mb-4">
                <a 
                  href="/case-studies" 
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Back to Case Studies
                </a>
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
                  <div>
                    <img 
                      src="/lovable-uploads/2d1dd468-78c1-4f89-81f8-fae7a806fb6b.png" 
                      alt="Alan Watts" 
                      className="rounded-lg shadow-lg w-full aspect-[4/5] object-cover"
                    />
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
            
            <div className="grid grid-cols-1 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <GlassmorphicCard className="h-full p-6">
                      <h3 className="text-xl font-bold mb-4 text-blue-700">Before Mindset DRM</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
                          </div>
                          <span>No visibility into content usage across YouTube</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
                          </div>
                          <span>Widespread unauthorized usage with no monetization</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
                          </div>
                          <span>Limited revenue from their intellectual property</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-600"></div>
                          </div>
                          <span>No way to efficiently identify and claim content</span>
                        </li>
                      </ul>
                    </GlassmorphicCard>
                  </div>
                  <div>
                    <GlassmorphicCard className="h-full p-6">
                      <h3 className="text-xl font-bold mb-4 text-blue-700">After Mindset DRM</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
                          </div>
                          <span>Complete visibility across 26,962 Alan Watts videos</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
                          </div>
                          <span>Automated content identification and claiming</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
                          </div>
                          <span>660% increase in monthly revenue</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
                          </div>
                          <span>Strategic licensing program to generate additional revenue</span>
                        </li>
                      </ul>
                    </GlassmorphicCard>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Results & Metrics</h2>
              
              <div className="grid grid-cols-1 gap-8 mb-10">
                <GlassmorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-4">Claims Processed & Revenue Growth</h3>
                  <p className="text-foreground/70 mb-4">
                    Over a 6-month period, we identified and processed over 26,962 content claims, resulting in a consistent monthly revenue increase.
                  </p>
                  <div className="h-[400px] mt-6">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassmorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-4">Audience Age Demographics</h3>
                  <p className="text-foreground/70 mb-4">
                    Understanding the audience demographics helped develop a targeted content strategy.
                  </p>
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
                  <p className="text-foreground/70 mb-4">
                    Gender distribution of Alan Watts content viewers across YouTube.
                  </p>
                  <div className="h-[300px] mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
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
              <h2 className="text-3xl font-bold mb-6">Implementation Process</h2>
              <GlassmorphicCard className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Content Identification</h3>
                    <p className="text-foreground/70">
                      We indexed all Alan Watts audio content and created a comprehensive content database.
                    </p>
                  </div>
                  <div>
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-blue-600">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Content Claiming</h3>
                    <p className="text-foreground/70">
                      Our system automatically identified and claimed unauthorized usage across YouTube.
                    </p>
                  </div>
                  <div>
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-blue-600">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Monetization</h3>
                    <p className="text-foreground/70">
                      We implemented a fair revenue-sharing model that benefited both the rights holder and content creators.
                    </p>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Testimonial</h2>
              <GlassmorphicCard className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 items-center">
                  <div className="md:col-span-1 flex justify-start">
                    <div className="flex flex-col items-start">
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/548b74c8e4b0d3ebe88e525d/1499894519482-41FQGF6DIL22BICUIYOC/MarkWatts.jpg"
                        alt="Mark Watts"
                        className="w-24 h-24 rounded-full object-cover mb-2"
                      />
                      <h4 className="font-bold">Mark Watts</h4>
                      <p className="text-sm text-foreground/60">Alan Watts Organization</p>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <svg className="h-8 w-8 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg mb-6">
                      Mindset DRM has revolutionized our approach to content management on YouTube. Their solution not only helped us protect our intellectual property but also created a significant new revenue stream from content that was previously being used without our permission.
                    </p>
                    <p className="text-lg">
                      We're particularly impressed by the detailed analytics and transparent reporting, which gives us complete visibility into how our content is being used across the platform.
                    </p>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to protect your content?</h2>
              <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Let us help you identify, claim, and monetize your content across YouTube
              </p>
              <a href="/contact" className="inline-block">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AlanWattsCase;
