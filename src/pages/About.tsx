
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-gradient-to-r from-gtm-deep-blue to-gtm-light-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GTM Unbound</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Simplifying Go-To-Market for Global Technology Companies
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gtm-deep-blue mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-8 text-lg">
                GTM Unbound was founded with a clear mission: to simplify and accelerate the Go-To-Market (GTM) 
                process for technology startups expanding internationally. We connect founders with top GTM 
                experts and create a vibrant, invite-only community where knowledge sharing and collaboration 
                thrive.
              </p>
              
              <h2 className="text-3xl font-bold text-gtm-deep-blue mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-8 text-lg">
                We envision an exclusive platform where AI and SaaS startups receive actionable GTM guidance, 
                leverage peer-to-peer networking, and gain access to curated events and resources. We draw 
                inspiration from industry leaders like SaaStr and SaaSBoomi to create a unique ecosystem 
                focused specifically on global expansion strategies.
              </p>
              
              <h2 className="text-3xl font-bold text-gtm-deep-blue mb-6">Our Approach</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gtm-deep-blue mb-2">Expert-Led Guidance</h3>
                  <p className="text-gray-700">
                    We curate a network of seasoned GTM professionals who have successfully led 
                    international expansion strategies for technology companies. Their hands-on 
                    experience provides invaluable insights for our community members.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gtm-deep-blue mb-2">Community-Focused</h3>
                  <p className="text-gray-700">
                    Our invite-only model ensures a high-caliber community of founders and GTM 
                    professionals committed to knowledge sharing and mutual growth. We foster 
                    meaningful connections that extend beyond digital interactions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gtm-deep-blue mb-2">Practical Resources</h3>
                  <p className="text-gray-700">
                    We focus on actionable strategies and practical tools that can be implemented 
                    immediately. Our resource hub contains battle-tested playbooks, templates, 
                    and case studies specific to international GTM challenges.
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gtm-deep-blue mb-6">Join Us</h2>
              <p className="text-gray-700 text-lg">
                If you're a founder or GTM leader looking to expand your technology business 
                globally, we invite you to join our exclusive community. Together, we can navigate 
                the complexities of international markets and accelerate your path to global success.
              </p>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
