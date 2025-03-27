
import React from "react";
import { motion } from "framer-motion";

interface YoutubeContentCardProps {
  title: string;
  channel: string;
  views: string;
  timeAgo: string;
  thumbnail: string;
}

export const YoutubeContentCard: React.FC<YoutubeContentCardProps> = ({
  title,
  channel,
  views,
  timeAgo,
  thumbnail
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute bottom-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
          7:15
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-base mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-1">{channel}</p>
        <p className="text-gray-500 text-xs">{views} • {timeAgo}</p>
      </div>
    </motion.div>
  );
};
