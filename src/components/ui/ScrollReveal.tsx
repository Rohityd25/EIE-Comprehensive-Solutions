"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "fadeIn";
  duration?: number;
  delay?: number;
  threshold?: number;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fadeInUp",
  duration = 600,
  delay = 0,
  threshold = 0.05,
  style = {},
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    // Check for user preference of reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = !hasMounted
      ? {}
      : {
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        };
    return { ...baseStyles, ...style };
  };

  const animationClass = hasMounted ? `scroll-reveal reveal-${animation}` : "";
  const revealedClass = isVisible ? "revealed" : "";

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${revealedClass} ${className}`.trim()}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}
