
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="py-16 md:py-24 bg-gray-50">
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
  );
};

export default FinalCTA;
