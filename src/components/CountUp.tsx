
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
  decimals = 0,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, margin: '-50px' });
  const startTime = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;
    
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easeOutExpo for a nice effect
      const easeOutExpo = 1 - Math.pow(2, -10 * percentage);
      
      const currentCount = Math.min(end * easeOutExpo, end);
      setCount(currentCount);
      
      if (progress < duration) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isInView, end, duration]);

  const formattedCount = count.toFixed(decimals);
  const parts = formattedCount.split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const decimalPart = parts[1] ? `.${parts[1]}` : '';

  return (
    <div ref={countRef} className={className}>
      {prefix}{integerPart}{decimalPart}{suffix}
    </div>
  );
};
