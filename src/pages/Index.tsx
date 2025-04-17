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
  
  const channelStats = [
    { 
      name: "Motiversity", 
      subscribers: "3.8M", 
      views: "530M+", 
      icon: "/lovable-uploads/3ecb8aa9-4ef8-4d32-a070-462ae07a4d20.png" 
    },
    { 
      name: "MotivationHub", 
      subscribers: "3.5M", 
      views: "380M+", 
      icon: "/lovable-uploads/0cf3ba3e-8960-4ea0-8c73-dd2b371e4ce4.png" 
    },
    { 
      name: "Motivation2Study", 
      subscribers: "4.6M", 
      views: "365M+", 
      icon: "/lovable-uploads/7ad119b9-2029-4225-9db1-d52780651bd4.png" 
    },
    { 
      name: "Motivation Madness", 
      subscribers: "3.8M", 
      views: "350M+", 
      icon: "/lovable-uploads/120bfcd1-e00e-4b2f-ac25-ee49edfe0e22.png" 
    },
    { 
      name: "After Skool", 
      subscribers: "3.7M", 
      views: "260M+", 
      icon: "/lovable-uploads/67ff2ca5-79fd-44ed-b348-2dfb2dca0fb8.png" 
    },
    { 
      name: "T&H Inspiration", 
      subscribers: "758K", 
      views: "140M+", 
      icon: "/lovable-uploads/3a748cf2-80ce-4b01-bcd8-598759cbef81.png" 
    },
    { 
      name: "Alpha Leaders", 
      subscribers: "767K", 
      views: "56M+", 
      icon: "/lovable-uploads/a2298027-384a-4e1f-bd2e-5b75a4d22ef5.png" 
    },
    { 
      name: "True Meaning", 
      subscribers: "526K", 
      views: "38M+", 
      icon: "/lovable-uploads/6860289e-a663-4308-98bc-ef73a755ad49.png" 
    },
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
      <HowItWorks />
      <Services />
      <YoutubeContentGrid />
      <CTASection />
    </Layout>
  );
};

export default Index;
