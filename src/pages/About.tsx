
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import AdvisorsSection from '@/components/AdvisorsSection';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Add geometric floating elements for Ghibli-inspired background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-teal-100/10 to-transparent opacity-60"></div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-300/10 to-emerald-200/10 blur-sm"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gtm-deep-blue mb-6">
                About GTM Unbound
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                We are on a mission to help tech startups navigate the complexities of 
                international expansion with confidence and strategic clarity.
              </p>
              
              <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg">
                <p className="text-gray-700">
                  GTM Unbound provides expert-led guidance, resources, and community connections
                  to accelerate your global go-to-market journey. We focus on helping SaaS startups
                  expand into the US market with tailored strategies and practical insights.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gtm-deep-blue mb-6 text-center">
                Our Story
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2023, GTM Unbound was born from the realization that many talented 
                  founders struggle with the complexities of international expansion, particularly 
                  into the competitive US market.
                </p>
                
                <p>
                  Our founders, having navigated these challenges themselves, saw an opportunity to 
                  create a platform that combines expert guidance, practical resources, and community 
                  support to help tech startups go global with confidence.
                </p>
                
                <p>
                  What began as a series of informal advisory sessions has evolved into a 
                  comprehensive ecosystem supporting startups at every stage of their international 
                  go-to-market journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gtm-deep-blue mb-6">
                Our Mission
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 italic">
                "To simplify global go-to-market for ambitious tech startups by providing the expertise,
                resources, and community they need to expand confidently into new markets."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-gtm-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gtm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gtm-deep-blue mb-2 text-center">
                    Expertise
                  </h3>
                  <p className="text-gray-600 text-center">
                    Connecting founders with experienced GTM specialists and market experts
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-gtm-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gtm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gtm-deep-blue mb-2 text-center">
                    Resources
                  </h3>
                  <p className="text-gray-600 text-center">
                    Providing actionable insights, templates, and tools for global expansion
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-gtm-orange/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gtm-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gtm-deep-blue mb-2 text-center">
                    Community
                  </h3>
                  <p className="text-gray-600 text-center">
                    Building a supportive network of founders sharing experiences and opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Members Section */}
        <TeamSection />
        
        {/* Advisors Section */}
        <AdvisorsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
