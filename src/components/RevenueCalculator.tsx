import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

export const RevenueCalculator: React.FC = () => {
  const [viewsPerDay, setViewsPerDay] = useState<number>(100000);
  const [monthlyRevenueLost, setMonthlyRevenueLost] = useState<number>(0);
  const [yearlyRevenueLost, setYearlyRevenueLost] = useState<number>(0);
  
  const calculateRevenue = (views: number) => {
    const ratePerThousand = 5; // $5 per 1000 views
    const dailyRevenue = (views / 1000) * ratePerThousand;
    const monthlyRevenue = dailyRevenue * 30;
    const yearlyRevenue = monthlyRevenue * 12;
    
    return {
      monthly: monthlyRevenue,
      yearly: yearlyRevenue
    };
  };
  
  useEffect(() => {
    const revenue = calculateRevenue(viewsPerDay);
    setMonthlyRevenueLost(revenue.monthly);
    setYearlyRevenueLost(revenue.yearly);
  }, [viewsPerDay]);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/30 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your Lost Revenue
            </h2>
            <p className="text-lg text-foreground/70">
              Imagine the content you own being viewed without your permission. How much revenue are you missing out on?
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-700">How many views per day?</h3>
                <p className="text-lg mb-8">
                  Drag the slider to estimate how many daily views your content is receiving without your permission.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Daily Views</span>
                      <span className="font-bold text-lg">{viewsPerDay.toLocaleString()}</span>
                    </div>
                    <Slider
                      value={[viewsPerDay]}
                      onValueChange={(value) => setViewsPerDay(value[0])}
                      min={1000}
                      max={1000000}
                      step={1000}
                      className="mb-6"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>1,000</span>
                      <span>500,000</span>
                      <span>1,000,000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Revenue You're Missing</h3>
                
                <motion.div 
                  className="mb-6"
                  key={monthlyRevenueLost}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-blue-700 font-medium">MONTHLY LOST REVENUE</p>
                  <p className="text-4xl md:text-5xl font-bold text-blue-600">
                    {formatCurrency(monthlyRevenueLost)}
                  </p>
                </motion.div>
                
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-sm text-blue-700 font-medium">YEARLY LOST REVENUE</p>
                  <p className="text-2xl font-bold text-blue-800">
                    {formatCurrency(yearlyRevenueLost)}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-blue-200">
                  <p className="text-md font-medium">
                    Based on <span className="font-bold">${5}</span> per 1,000 views
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg">
                Stop losing revenue from your intellectual property. 
                Let us help you claim and monetize your content across YouTube.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
