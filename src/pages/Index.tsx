
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import ExpertsSection from '@/components/ExpertsSection';
import EventsSection from '@/components/EventsSection';
import ResourcesSection from '@/components/ResourcesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SubscriptionPlansSection from '@/components/SubscriptionPlansSection';
import CallToAction from '@/components/CallToAction';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <VideoSection />
        <ExpertsSection />
        <ResourcesSection />
        <EventsSection />
        <TestimonialsSection />
        <SubscriptionPlansSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
