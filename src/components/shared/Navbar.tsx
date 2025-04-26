'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Experiences', href: '#partners' },
  { label: 'How It Works', href: '#app-preview' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section on click
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-neutral-dark/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-heading text-2xl font-bold text-primary">RedString</span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-neutral-dark dark:text-neutral-light hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          
          <ThemeToggle />
          
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('#waitlist')}
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 text-neutral-dark dark:text-neutral-light focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-dark">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-dark dark:text-neutral-light hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#waitlist')}
              className="block w-full px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-opacity-90 text-center"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 