'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface RedStringProps {
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  pathPoints?: string;
  thickness?: number;
  animationDuration?: number;
  className?: string;
}

/**
 * RedString component creates an animated path resembling the mythological red string of fate.
 * It can be used to connect elements on the page with an animated string.
 */
export default function RedString({
  start = { x: 0, y: 0 },
  end = { x: 100, y: 100 },
  pathPoints,
  thickness = 2,
  animationDuration = 30, // seconds
  className = '',
}: RedStringProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    // Set initial path properties
    gsap.set(pathRef.current, {
      strokeDasharray: 5,
      strokeDashoffset: 1000,
      opacity: 0,
    });

    // Animate the path
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'power1.inOut' },
    });

    tl.to(pathRef.current, {
      duration: 0.5,
      opacity: 1,
    }).to(
      pathRef.current,
      {
        duration: animationDuration,
        strokeDashoffset: 0,
        ease: 'none',
      },
      0
    );

    return () => {
      tl.kill(); // Clean up animation
    };
  }, [animationDuration]);

  // Generate path data
  const pathData = pathPoints || generateDefaultPath(start, end);

  return (
    <svg
      className={`red-string ${className}`}
      viewBox={`0 0 ${Math.max(start.x, end.x) + 100} ${Math.max(start.y, end.y) + 100}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <path
        ref={pathRef}
        d={pathData}
        stroke="var(--primary-color)"
        strokeWidth={thickness}
        fill="none"
      />
    </svg>
  );
}

/**
 * Generate a default curved path between two points
 */
function generateDefaultPath(start: { x: number; y: number }, end: { x: number; y: number }): string {
  // Calculate control points for a curved path
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  
  // Add some random variation to make it look more natural
  const offset = 50 + Math.random() * 50;
  const ctrl1X = midX - offset;
  const ctrl1Y = midY + offset;
  const ctrl2X = midX + offset;
  const ctrl2Y = midY - offset;

  return `M${start.x},${start.y} C${ctrl1X},${ctrl1Y} ${ctrl2X},${ctrl2Y} ${end.x},${end.y}`;
} 