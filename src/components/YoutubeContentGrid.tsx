
import React from "react";
import { YoutubeContentCard } from "./YoutubeContentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export const YoutubeContentGrid: React.FC = () => {
  // Updated YouTube content data with accurate popular videos and correct thumbnails
  const videos = [
    {
      title: "The Most Eye Opening 10 Minutes",
      channel: "Motivation Madness",
      views: "21M views",
      timeAgo: "5 years ago",
      thumbnail: "/lovable-uploads/1ccff3eb-78af-43e3-af3b-737f2e97f47d.png"
    },
    {
      title: "WHEN IT HURTS",
      channel: "Motiversity",
      views: "11M views",
      timeAgo: "5 years ago",
      thumbnail: "/lovable-uploads/ed3f0dda-dc8c-4991-a1f5-b5723bc69d89.png"
    },
    {
      title: "This Will Leave You Speechless",
      channel: "MotivationHub",
      views: "707K views",
      timeAgo: "3 years ago", 
      thumbnail: "/lovable-uploads/28aa790f-d373-4500-b93b-e12dc5670e31.png"
    },
    {
      title: "Alan Watts On Existence",
      channel: "True Meaning",
      views: "6.6M views",
      timeAgo: "3 years ago",
      thumbnail: "/lovable-uploads/52177375-4183-4a15-b829-d9af2a03b1ef.png"
    },
    {
      title: "THE MOMENT",
      channel: "T&H Inspiration",
      views: "3.8M views",
      timeAgo: "3 years ago",
      thumbnail: "/lovable-uploads/b8550989-1d26-407d-be40-793fd6054c8a.png"
    },
    {
      title: "Stop Being Distracted",
      channel: "Coach Pain",
      views: "1M views",
      timeAgo: "1 year ago",
      thumbnail: "/lovable-uploads/5b31fa01-bf35-4f79-9d1d-d4fbecf7e8eb.png"
    },
    {
      title: "Fix Yourself Before It's Too Late",
      channel: "Motivation2Study",
      views: "4.2M views",
      timeAgo: "1 year ago",
      thumbnail: "/lovable-uploads/b71a819b-9913-46a4-b65a-fe8333ff996a.png"
    }
  ];

  // Add decorative elements for more visual interest
  const Decoration = ({ className }) => (
    <motion.div 
      className={`absolute rounded-full bg-blue-100/50 backdrop-blur-sm z-0 ${className}`}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{ 
        duration: 8, 
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "mirror" 
      }}
    />
  );

  return (
    <section className="py-16 pb-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative">
      {/* Decorative elements */}
      <Decoration className="w-64 h-64 -top-32 right-0 transform rotate-45" />
      <Decoration className="w-80 h-80 -bottom-40 -left-20 transform -rotate-15" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Content We Amplify</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with world-class creators to distribute your content
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <YoutubeContentCard
                      title={video.title}
                      channel={video.channel}
                      views={video.views}
                      timeAgo={video.timeAgo}
                      thumbnail={video.thumbnail}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mr-2" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
