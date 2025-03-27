
import React from "react";

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
  thumbnail,
}) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-sm line-clamp-2 h-10 mb-1">{title}</h3>
        <p className="text-xs text-gray-600 mb-1">{channel}</p>
        <div className="flex text-xs text-gray-500">
          <span>{views}</span>
          <span className="mx-1">•</span>
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  );
};
