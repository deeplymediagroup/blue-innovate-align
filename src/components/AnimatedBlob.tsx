
import React from "react";

interface AnimatedBlobProps {
  className?: string;
  size?: string;
  position?: string;
  delay?: string;
}

export const AnimatedBlob: React.FC<AnimatedBlobProps> = ({
  className = "",
  size = "h-72 w-72",
  position = "top-0 left-0",
  delay = "0s",
}) => {
  return (
    <div
      className={`blob absolute ${size} ${position} ${className} animate-blob`}
      style={{ animationDelay: delay }}
    />
  );
};
