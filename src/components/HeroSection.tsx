
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const handleRequestInvite = () => {
    window.location.href = "https://gtmunbound.com/";
  };

  return (
    <section className="relative bg-gradient-to-r from-indigo-900 to-teal-600 text-white py-20 md:py-32 overflow-hidden">
      {/* Ghibli-inspired atmospheric particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Unlock Your Global GTM Potential
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Connect with Experts, Join a Thriving Community, Scale Internationally
          </motion.p>
          <motion.button 
            onClick={handleRequestInvite}
            className="relative overflow-hidden group bg-teal-400 hover:bg-teal-300 text-indigo-900 text-lg py-3 px-8 rounded-md shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Request an Invite</span>
            <motion.span 
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.7 }}
            />
          </motion.button>
        </div>
      </div>
      
      {/* Floating 3D decorative elements */}
      <motion.div 
        className="absolute right-10 top-1/4 w-64 h-64 rounded-full bg-teal-300/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute left-10 bottom-1/4 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
    </section>
  );
};

export default HeroSection;
