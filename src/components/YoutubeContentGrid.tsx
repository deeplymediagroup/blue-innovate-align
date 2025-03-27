
import React, { useEffect, useRef } from "react";
import { YoutubeContentCard } from "./YoutubeContentCard";
import { motion } from "framer-motion";

export const YoutubeContentGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const youtubeContent = [
    {
      id: 1,
      title: "The Mindset of Champions | Motivational Video",
      channel: "Motiversity",
      views: "11.7M views",
      timeAgo: "2 years ago",
      thumbnail: "https://img.youtube.com/vi/khOaAHK7efc/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "The 5 Mental Habits That Will Make You Successful - Alan Watts",
      channel: "After Skool",
      views: "2.3M views",
      timeAgo: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/2L2lHWDkXHw/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "The Most Powerful Motivational Speech Ever | Les Brown",
      channel: "MotivationHub",
      views: "15.1M views",
      timeAgo: "3 years ago",
      thumbnail: "https://img.youtube.com/vi/S0-CUMh2xqo/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "How to Reprogram Your Mind For Success | Jim Rohn",
      channel: "Motivation Madness",
      views: "8.9M views",
      timeAgo: "4 years ago",
      thumbnail: "https://img.youtube.com/vi/o9NxP-O2sws/maxresdefault.jpg",
    },
    {
      id: 5,
      title: "The Reality of This World | Alan Watts Perspective",
      channel: "T&H Inspiration",
      views: "3.2M views",
      timeAgo: "1 year ago",
      thumbnail: "https://img.youtube.com/vi/Z1j7vdD7Iw0/maxresdefault.jpg",
    },
    {
      id: 6,
      title: "Stop Wasting Your Life | Joe Rogan Motivation",
      channel: "Alpha Leaders",
      views: "4.5M views",
      timeAgo: "2 years ago",
      thumbnail: "https://img.youtube.com/vi/q-SzQrUuUtM/maxresdefault.jpg",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="creators" className="py-20 bg-gradient-to-b from-background to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={sectionRef}
          className="reveal-section max-w-5xl mx-auto"
        >
          <div className="mb-12 text-center">
            <div className="inline-block mb-3">
              <div className="py-1 px-3 bg-blue-100 border border-blue-200 rounded-full">
                <p className="text-xs font-medium text-blue-700">
                  Content We Amplify
                </p>
              </div>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Top-Performing Content
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our network has delivered billions of views across motivational videos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {youtubeContent.map((content, index) => (
              <motion.div
                key={content.id}
                className="group transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <YoutubeContentCard
                  title={content.title}
                  channel={content.channel}
                  views={content.views}
                  timeAgo={content.timeAgo}
                  thumbnail={content.thumbnail}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
