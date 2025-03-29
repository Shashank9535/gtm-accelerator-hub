
import React from 'react';
import { Button } from '@/components/ui/button';
import ResourceCard from '@/components/ResourceCard';
import { Link } from 'react-router-dom';

const resources = [
  {
    id: 1,
    title: "Building a Scalable GTM Engine for AI Products",
    type: "Article" as const,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    authorName: "Maya Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How TechForward Conquered the US SaaS Market",
    type: "Case Study" as const,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    authorName: "David Kumar",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "The Definitive Guide to International Pricing Strategy",
    type: "Guide" as const,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    authorName: "Sophia Martinez",
    readTime: "15 min read"
  },
  {
    id: 4,
    title: "Overcoming Regulatory Challenges in Global Expansion",
    type: "Whitepaper" as const,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    authorName: "James Wilson",
    readTime: "12 min read"
  }
];

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
            GTM Resources & Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our curated collection of articles, case studies, whitepapers, and guides
            to help accelerate your global expansion journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map(resource => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              type={resource.type}
              imageUrl={resource.imageUrl}
              authorName={resource.authorName}
              readTime={resource.readTime}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/resources">
            <Button className="bg-gtm-deep-blue hover:bg-gtm-light-blue text-white">
              Explore All Resources
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
