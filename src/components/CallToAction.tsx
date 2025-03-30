
import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const handleRequestInvite = () => {
    window.location.href = "https://gtmunbound.com/";
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D004D] via-[#0D001A] to-[#0D001A] -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none -z-5">
        <motion.div 
          className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-[#0099FF]/5 blur-3xl"
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
          className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-[#FF0066]/5 blur-3xl"
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
      
      {/* Radial grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjAuNSIgZmlsbD0iI2ZmZmZmZiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] -z-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.2)]"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#00FF99] via-[#0099FF] to-[#FF0066] bg-clip-text text-transparent"
          >
            Ready to Accelerate Your Global GTM Strategy?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Join our exclusive community of founders and GTM experts and gain the insights,
            connections, and resources you need to succeed internationally.
          </motion.p>
          <motion.button 
            onClick={handleRequestInvite}
            className="relative overflow-hidden group bg-gradient-to-r from-[#FF0066] to-[#0099FF] hover:opacity-90 text-white font-medium py-4 px-10 rounded-md shadow-[0_0_25px_rgba(255,0,102,0.3)] transition-all duration-300 text-lg"
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
          
          {/* Futuristic decorative elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#00FF99] opacity-70"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#FF0066] opacity-70"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
