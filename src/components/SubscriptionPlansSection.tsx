
import React from 'react';
import SubscriptionPlan from '@/components/SubscriptionPlan';

const SubscriptionPlansSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gtm-deep-blue mb-4">
            Membership Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our exclusive community with plans designed to support founders
            at every stage of their international growth journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <SubscriptionPlan
            title="Founder Access"
            description="Essential GTM resources and community access"
            price="$99"
            period="/month"
            features={[
              "Access to GTM resource library",
              "Community forum participation",
              "Monthly webinar access",
              "GTM toolkit & templates",
              "Networking opportunities"
            ]}
          />
          
          <SubscriptionPlan
            title="Growth Accelerator"
            description="Comprehensive support for scaling companies"
            price="$299"
            period="/month"
            features={[
              "Everything in Founder Access",
              "Quarterly 1:1 expert consultations",
              "Priority event registration",
              "Market entry playbooks",
              "Peer group matchmaking",
              "Exclusive workshop access"
            ]}
            popular={true}
          />
          
          <SubscriptionPlan
            title="Enterprise Partner"
            description="Custom GTM support for established companies"
            price="Custom"
            period=""
            features={[
              "Everything in Growth Accelerator",
              "Monthly strategy sessions",
              "Custom market research",
              "Executive roundtables",
              "Dedicated GTM advisor",
              "Partner introductions",
              "Tailored expansion roadmap"
            ]}
            ctaText="Contact Us"
          />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlansSection;
