
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    id: 1,
    quote: "GTM Unbound's expert sessions helped us restructure our go-to-market strategy, resulting in a 40% increase in US customer acquisition within just 3 months.",
    name: "Rajiv Mehta",
    title: "Founder & CEO",
    company: "DataSense AI",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    quote: "The community insights and networking opportunities at GTM Unbound events have been invaluable for our expansion into new markets. Simply world-class.",
    name: "Lisa Chen",
    title: "COO",
    company: "CloudScale Solutions",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    quote: "The strategic guidance and market intelligence from GTM Unbound helped us navigate complex regulatory challenges and successfully enter three new markets.",
    name: "Amir Khan",
    title: "VP of Global Expansion",
    company: "SecureTech",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from founders and executives who have leveraged GTM Unbound to
            accelerate their international go-to-market journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
