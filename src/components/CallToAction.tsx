
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const handleRequestInvite = () => {
    window.location.href = "https://gtmunbound.com/";
  };

  return (
    <section className="py-16 bg-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-indigo-300/10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Accelerate Your Global GTM Strategy?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto mb-8"
        >
          Join our exclusive community of founders and GTM experts and gain the insights,
          connections, and resources you need to succeed internationally.
        </motion.p>
        <motion.button 
          onClick={handleRequestInvite}
          className="relative overflow-hidden group bg-teal-400 hover:bg-teal-300 text-indigo-900 font-medium py-3 px-8 rounded-md shadow-xl transition-all duration-300 text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
    </section>
  );
};

export default CallToAction;
