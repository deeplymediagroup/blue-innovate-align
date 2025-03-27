
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
  // Updated YouTube content data with accurate popular videos
  const videos = [
    {
      title: "The Most Eye Opening 10 Minutes of Your Life",
      channel: "Motivation Madness",
      views: "14.2M views",
      thumbnail: "https://img.youtube.com/vi/kl1fytRAMRE/maxresdefault.jpg"
    },
    {
      title: "WHEN IT HURTS - Best Motivational Speech Video",
      channel: "Motiversity",
      views: "11.7M views",
      thumbnail: "https://img.youtube.com/vi/khOaAHK7efc/maxresdefault.jpg"
    },
    {
      title: "Zig Ziglar - Believing in Yourself",
      channel: "MotivationHub",
      views: "612K views", 
      thumbnail: "https://img.youtube.com/vi/D7KHw3SsBWQ/maxresdefault.jpg"
    },
    {
      title: "Don't Think Too Much - Alan Watts",
      channel: "True Meaning",
      views: "2.8M views",
      thumbnail: "https://img.youtube.com/vi/gU2KsQWA8Pc/maxresdefault.jpg"
    },
    {
      title: "Jim Rohn: The Mindset And Attitude Of Thinking Wealthy",
      channel: "T&H Inspiration",
      views: "3.7M views",
      thumbnail: "https://img.youtube.com/vi/DGIjuVbGP_A/maxresdefault.jpg"
    },
    {
      title: "Do This Every Morning - Coach Pain Motivation",
      channel: "Coach Pain",
      views: "1.5M views",
      thumbnail: "https://img.youtube.com/vi/LBxYhQEr3-w/maxresdefault.jpg"
    },
    {
      title: "DISCIPLINE YOUR THOUGHTS - Powerful Motivational Speech",
      channel: "Motivation2Study",
      views: "5.3M views",
      thumbnail: "https://img.youtube.com/vi/RJ9jztHrqPM/maxresdefault.jpg"
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
                <div className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <YoutubeContentCard
                    title={video.title}
                    channel={video.channel}
                    views={video.views}
                    thumbnail={video.thumbnail}
                  />
                </div>
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
