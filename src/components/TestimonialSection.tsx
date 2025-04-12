
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
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
  );
};

export default TestimonialSection;
