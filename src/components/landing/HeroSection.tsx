'use client';

import { useRef } from 'react';
import RedString from '../animations/RedString';
import PhoneFloating from '../animations/PhoneFloating';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="container-section relative overflow-hidden bg-gradient-primary dark:bg-gradient-dark"
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold">
            <span className="text-primary">Connect</span> and{" "}
            <span className="text-accent">Experience</span>
          </h1>
          <p className="text-lg lg:text-xl max-w-lg">
            RedString brings people together through meaningful connections and unlocks exclusive experiences for you to enjoy together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="btn-primary transition-transform hover:scale-105"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Waitlist
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative min-h-[300px] flex items-center justify-center">
          {/* Phone mockups with floating animation */}
          <div className="relative h-[400px] w-[300px]">
            {/* We'll replace these with actual phone mockups */}
            <div className="absolute top-0 left-0 z-10 bg-white dark:bg-neutral-dark rounded-3xl shadow-lg h-[400px] w-[220px] flex items-center justify-center border-4 border-neutral-light dark:border-neutral-dark">
              <p className="text-neutral-dark dark:text-neutral-light font-medium text-center px-4">
                Main App Screen<br/>
                <span className="text-sm opacity-60">(Mockup coming soon)</span>
              </p>
            </div>
            <div className="absolute top-10 right-0 bg-white dark:bg-neutral-dark rounded-3xl shadow-lg h-[350px] w-[200px] flex items-center justify-center border-4 border-neutral-light dark:border-neutral-dark">
              <p className="text-neutral-dark dark:text-neutral-light font-medium text-center px-4">
                Deals Screen<br/>
                <span className="text-sm opacity-60">(Mockup coming soon)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Red string animation connecting the elements */}
      <RedString 
        start={{ x: 200, y: 100 }} 
        end={{ x: 800, y: 300 }}
        className="w-full h-full top-0 left-0 absolute"
      />
    </section>
  );
} 