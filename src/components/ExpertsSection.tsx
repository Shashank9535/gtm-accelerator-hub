
import React from 'react';
import { Button } from '@/components/ui/button';
import ExpertCard from '@/components/ExpertCard';
import { Link } from 'react-router-dom';

const experts = [
  {
    id: 1,
    name: "Akash Verma",
    title: "Head of GTM Strategy",
    company: "Tech Innovators Inc.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    expertise: ["US Market Entry", "SaaS Sales", "Pricing Strategy"]
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "VP of International Growth",
    company: "Global AI Solutions",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    expertise: ["EMEA Expansion", "AI GTM", "Channel Strategy"]
  },
  {
    id: 3,
    name: "Raj Patel",
    title: "Founder & CEO",
    company: "MarketFit Advisors",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    expertise: ["Product Marketing", "Market Validation", "Sales Enablement"]
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    title: "Global Sales Director",
    company: "Enterprise Tech Partners",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    expertise: ["Enterprise Sales", "Revenue Operations", "Sales Playbooks"]
  }
];

const ExpertsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
            Meet Our GTM Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with industry veterans who have successfully led global GTM strategies
            for technology companies across markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map(expert => (
            <ExpertCard
              key={expert.id}
              name={expert.name}
              title={expert.title}
              company={expert.company}
              imageUrl={expert.imageUrl}
              expertise={expert.expertise}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/experts">
            <Button className="bg-gtm-deep-blue hover:bg-gtm-light-blue text-white">
              View All Experts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
