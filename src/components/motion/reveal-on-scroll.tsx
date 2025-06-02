"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string; // e.g., 'animate-fade-in-up'
  delayClass?: string; // e.g., 'animation-delay-200'
  threshold?: number;
  triggerOnce?: boolean;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className,
  animationClass = 'animate-fade-in-up',
  delayClass = '',
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          if (!triggerOnce) {
             // setIsVisible(false); // Optional: re-trigger animation
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0', // Start hidden
        isVisible && `${animationClass} ${delayClass} running-animation`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
