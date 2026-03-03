// Chief's Smooth Image Hook - For elegant image animations

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseSmoothImageOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useSmoothImage = (options: UseSmoothImageOptions = {}) => {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle image load
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Small delay for smooth reveal
          setTimeout(() => setIsInView(true), 100);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return {
    imageRef,
    containerRef,
    isLoaded,
    isVisible,
    isInView,
    handleLoad,
  };
};

// Chief's Parallax Hook
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const element = elementRef.current;
        if (!element) {
          rafId = 0;
          return;
        }

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only calculate if element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const newOffset = (scrollProgress - 0.5) * speed * 100;
          setOffset(newOffset);
        }
        
        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return { elementRef, offset };
};

// Chief's Image Preloader
export const useImagePreloader = (src: string) => {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    // Simulate progress for smooth loading feel
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    img.onload = () => {
      clearInterval(progressInterval);
      setProgress(100);
      setTimeout(() => setIsPreloaded(true), 200);
    };

    img.onerror = () => {
      clearInterval(progressInterval);
      setIsPreloaded(true);
    };

    img.src = src;

    return () => clearInterval(progressInterval);
  }, [src]);

  return { isPreloaded, progress: Math.min(progress, 100) };
};
