
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-16 md:py-24 bg-lovable-blue/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lovable-dark-blue mb-6">
            Ready to Make GTM Lovable?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join Lovable today and connect with the expertise you need to succeed in your go-to-market journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-lovable-accent hover:bg-lovable-accent/90 text-white">
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
