
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-teal-100/5 to-transparent opacity-60"></div>
      
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Our Events
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-center max-w-3xl mx-auto mb-16"
          >
            Join our exclusive events in Bangalore and across the US, or participate in
            our virtual webinars led by industry experts.
          </motion.p>
          
          <div className="text-center text-lg">
            <p>Events page content is coming soon!</p>
            <p className="mt-4">Please check back later for updated information about our upcoming events.</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
