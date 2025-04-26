'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  className?: string;
}

/**
 * ScrollReveal component adds entrance animations to elements when they scroll into view
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 30,
  threshold = 0.1,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Configure animation based on direction
  const directionConfig = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initialDirection = directionConfig[direction];

  const variants = {
    hidden: {
      opacity: 0,
      ...initialDirection,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smooth animation
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 