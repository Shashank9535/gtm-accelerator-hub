
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background gradient & effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-lovable-dark-blue/95 via-lovable-dark-blue/80 to-lovable-blue/70"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Where Founders Fall in Love With GTM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 text-white/80"
          >
            Lovable is a founder-first platform bringing together GTM experts, operator wisdom, and real execution power — no fluff, just traction.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-lovable-accent hover:bg-opacity-90 text-white border-none"
              onClick={() => {
                document.getElementById('what-is-gtm')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover Lovable
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 pt-12 border-t border-white/10"
          >
            <p className="text-sm text-white/60 mb-4">Trusted by founders from</p>
            <div className="flex justify-center flex-wrap items-center gap-8">
              <img src="/lovable-uploads/2776d812-1dda-43c7-bee0-7179994c6c9d.png" alt="Y Combinator" className="h-7 brightness-0 invert opacity-70" />
              <img src="/lovable-uploads/75e2f249-23b8-4286-88bb-41d4215ec3fe.png" alt="Sequoia" className="h-7 brightness-0 invert opacity-70" />
              <img src="/lovable-uploads/a763419d-e68b-4852-b521-a8e6c830f83c.png" alt="AWS" className="h-7 brightness-0 invert opacity-70" />
              <img src="/lovable-uploads/2776d812-1dda-43c7-bee0-7179994c6c9d.png" alt="Google Cloud" className="h-7 brightness-0 invert opacity-70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
