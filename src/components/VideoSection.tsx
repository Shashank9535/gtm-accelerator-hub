
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* 3D animated background element with Ghibli-inspired style */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-teal-400/10 z-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/93305a34-b200-4136-9d72-c819e5b92b82.png')] bg-cover bg-center opacity-10 animate-pulse"></div>
        
        {/* Animated subtle floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-teal-300/5 backdrop-blur-sm"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              scale: [1, 1.05, 1],
              rotate: [0, i % 2 === 0 ? 5 : -5, 0],
            }}
            transition={{
              duration: 8 + i,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-900"
          >
            See GTM Unbound in Action
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-xl"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(78, 204, 163, 0.25)"
            }}
          >
            <div className="absolute inset-0 w-full h-full bg-gray-800">
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/hXQZ4eos9Ak?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=hXQZ4eos9Ak"
                  title="GTM Unbound Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-teal-500/30 opacity-70 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-indigo-900 mt-6 font-medium text-lg"
          >
            We are on a mission to simplify Go-To-Market for Global Technology Companies
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
