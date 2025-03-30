
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ExpertsSection from '@/components/ExpertsSection';
import EventsSection from '@/components/EventsSection';
import ResourcesSection from '@/components/ResourcesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SubscriptionPlansSection from '@/components/SubscriptionPlansSection';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Add futuristic 3D background elements */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gtm-deep-blue/5 via-transparent to-transparent opacity-60"></div>
      
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          width: 30px;
          height: 30px;
          border: 2px solid rgba(255, 102, 0, 0.5);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: width 0.2s, height 0.2s, border-color 0.2s;
          backdrop-filter: blur(2px);
        }
        
        .custom-cursor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 5px;
          height: 5px;
          background-color: #FF6600;
          border-radius: 50%;
        }
        
        body:hover .custom-cursor {
          width: 40px;
          height: 40px;
          border-color: rgba(255, 102, 0, 0.8);
        }
      `}</style>
      
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <VideoSection />
        <ExpertsSection />
        <EventsSection />
        <ResourcesSection />
        <TestimonialsSection />
        <SubscriptionPlansSection />
        <CallToAction />
      </main>
      <Footer />
      
      {/* Fixed futuristic elements */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gtm-orange blur-md opacity-50"></div>
          <button 
            className="relative bg-white text-gtm-deep-blue p-3 rounded-full shadow-lg hover:shadow-gtm-orange/50 transition-all"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
