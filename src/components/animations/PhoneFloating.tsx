'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface PhoneFloatingProps {
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
  delay?: number;
  className?: string;
}

/**
 * PhoneFloating component creates a floating animation effect for phone mockups
 */
export default function PhoneFloating({
  imageSrc,
  alt,
  width,
  height,
  delay = 0,
  className = '',
}: PhoneFloatingProps) {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    // Create floating animation
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: 'power1.inOut' },
    });

    // Vertical floating animation
    tl.to(phoneRef.current, {
      y: '-=10', // Move up by 10px
      duration: 3,
      delay,
    }).to(phoneRef.current, {
      y: '+=10', // Move back down
      duration: 3,
    });

    // Add slight rotation for more natural movement
    gsap.to(phoneRef.current, {
      rotationZ: 1, // 1 degree rotation
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: delay + 0.5,
    });

    return () => {
      tl.kill(); // Clean up animation
    };
  }, [delay]);

  return (
    <div
      ref={phoneRef}
      className={`relative ${className}`}
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)' // Hardware acceleration
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className="rounded-3xl shadow-lg"
        priority
      />
    </div>
  );
} 