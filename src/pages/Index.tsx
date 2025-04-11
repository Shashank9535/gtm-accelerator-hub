
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen flex flex-col">
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
        {/* Hero Section - Clean and Simple */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gtm-deep-blue">
                  Accelerate Your Global Go-to-Market Success
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with expert mentors, access tailored resources, and join a community of founders scaling their businesses internationally.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/mentors">
                    <Button size="lg" className="bg-gtm-deep-blue hover:bg-gtm-light-blue text-white">
                      Find a GTM Mentor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">Trusted by companies from</p>
                  <div className="flex flex-wrap items-center gap-8">
                    <img src="/lovable-uploads/2776d812-1dda-43c7-bee0-7179994c6c9d.png" alt="Company logo" className="h-7 opacity-70" />
                    <img src="/lovable-uploads/75e2f249-23b8-4286-88bb-41d4215ec3fe.png" alt="Company logo" className="h-5 opacity-70" />
                    <img src="/lovable-uploads/a763419d-e68b-4852-b521-a8e6c830f83c.png" alt="Company logo" className="h-6 opacity-70" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
                <img 
                  src="/lovable-uploads/e8fce93d-c1cb-46ab-8981-ce3878bcc132.png" 
                  alt="Global mentorship" 
                  className="relative z-10 rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
                  Everything You Need to Succeed Globally
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  GTM Unbound provides the tools, expertise, and network to help you navigate international markets.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Mentorship",
                  description: "Connect 1:1 with experienced GTM executives who have successfully scaled businesses globally.",
                  icon: "/lovable-uploads/c19cbe48-053e-45cd-9972-d0d2d65faddd.png",
                  link: "/mentors"
                },
                {
                  title: "Community Events",
                  description: "Join exclusive workshops, roundtables, and networking events focused on international expansion.",
                  icon: "/lovable-uploads/41616128-1bfa-4d04-9a0e-8bc3417a51d4.png",
                  link: "/events"
                },
                {
                  title: "Strategic Advisors",
                  description: "Get guidance from our handpicked advisors with deep expertise in specific markets and industries.",
                  icon: "/lovable-uploads/1867b608-0f5b-4eb7-a29b-b18978d50817.png",
                  link: "/advisors"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
                >
                  <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-6" />
                  <h3 className="text-xl font-bold text-gtm-deep-blue mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link to={feature.link} className="text-gtm-orange font-medium flex items-center hover:underline">
                    Learn more
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section - Simplified */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-indigo-900 to-teal-600 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl font-medium text-white mb-6">
                      "GTM Unbound connected us with the perfect advisor who helped us navigate the US market. Their insights saved us months of trial and error."
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/48c93a0f-10cf-45e5-be50-1515ebddbde1.png" 
                        alt="Testimonial" 
                        className="w-12 h-12 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <p className="text-white font-medium">Manik M</p>
                        <p className="text-white/70 text-sm">Co-Founder, Omnify</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="relative hidden md:block bg-indigo-900/30">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                      alt="Background" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-900/30"></div>
                  <div className="relative flex items-center justify-center h-full p-12">
                    <img 
                      src="/lovable-uploads/6abd1962-db89-4c98-90d4-8924ab718a76.png" 
                      alt="GTM Unbound Logo" 
                      className="max-w-full max-h-32 brightness-0 invert opacity-80" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-6">
                Ready to Accelerate Your Global Growth?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join GTM Unbound today and connect with the expertise you need to succeed internationally.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/mentors">
                  <Button size="lg" className="bg-gtm-deep-blue hover:bg-gtm-light-blue text-white">
                    Find a GTM Mentor
                  </Button>
                </Link>
                <Button variant="outline" size="lg" onClick={() => window.location.href = "https://gtmunbound.com/"}>
                  Request an Invite
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Scroll to top button - simplified */}
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
