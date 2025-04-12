
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WhatIsSection from '@/components/WhatIsSection';
import EventsSection from '@/components/EventsSection';
import ExpertsSection from '@/components/ExpertsSection';
import TestimonialSection from '@/components/TestimonialSection';
import FinalCTA from '@/components/FinalCTA';

const Index: React.FC = () => {
  // Create cursor effect for futuristic UI
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* Subtle background effects */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-teal-100/5 to-transparent opacity-60"></div>
      
      {/* Floating particles - simplified */}
      <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-300/20 to-emerald-200/20 blur-sm"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 8 + 8,
            }}
          />
        ))}
      </div>
      
      {/* Custom cursor style */}
      <style>{`
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 1px solid rgba(78, 204, 163, 0.6);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: width 0.2s, height 0.2s, border-color 0.2s;
        }
        
        .custom-cursor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 4px;
          height: 4px;
          background-color: #4ECCA3;
          border-radius: 50%;
        }
        
        body:hover .custom-cursor {
          width: 30px;
          height: 30px;
          border-color: rgba(78, 204, 163, 0.8);
        }
      `}</style>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* What is GTM Unbound Section */}
        <WhatIsSection />
        
        {/* Upcoming Events Section */}
        <EventsSection />
        
        {/* Experts Section */}
        <ExpertsSection />
        
        {/* Testimonial Section */}
        <TestimonialSection />
        
        {/* Final CTA Section */}
        <FinalCTA />
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <button 
          className="bg-white text-indigo-900 p-2 rounded-full shadow-lg hover:shadow-teal-400/20 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default Index;
