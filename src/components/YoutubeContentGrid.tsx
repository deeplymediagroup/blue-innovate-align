
import React from "react";
import { YoutubeContentCard } from "./YoutubeContentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const YoutubeContentGrid: React.FC = () => {
  // Sample YouTube content data
  const videos = [
    {
      title: "Alan Watts - How To Stop Suffering",
      channel: "Alan Watts Organization",
      views: "4.2M views",
      thumbnail: "https://img.youtube.com/vi/emHAoQGoQic/maxresdefault.jpg"
    },
    {
      title: "Jim Rohn: The Mindset And Attitude Of Thinking Wealthy",
      channel: "Success Archive",
      views: "3.7M views",
      thumbnail: "https://img.youtube.com/vi/DGIjuVbGP_A/maxresdefault.jpg"
    },
    {
      title: "Zig Ziglar - Attitude Makes All The Difference",
      channel: "Ziglar",
      views: "1.8M views",
      thumbnail: "https://img.youtube.com/vi/PNF1KRt3moE/maxresdefault.jpg"
    },
    {
      title: "Les Brown - Live Your Dreams (Motivational Speech)",
      channel: "Motivation Madness",
      views: "5.3M views",
      thumbnail: "https://img.youtube.com/vi/6-yfXjWxPKA/maxresdefault.jpg"
    },
    {
      title: "Tony Robbins - How To Overcome Limiting Beliefs",
      channel: "Success Archive",
      views: "2.4M views",
      thumbnail: "https://img.youtube.com/vi/zOQZJZr3wM0/maxresdefault.jpg"
    },
    {
      title: "Do This Every Morning - Coach Pain Motivation",
      channel: "Coach Pain",
      views: "1.5M views",
      thumbnail: "https://img.youtube.com/vi/LBxYhQEr3-w/maxresdefault.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Content We Amplify</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with world-class creators to distribute your content
          </p>
        </div>

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
                <YoutubeContentCard
                  title={video.title}
                  channel={video.channel}
                  views={video.views}
                  thumbnail={video.thumbnail}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static transform-none mr-2" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
