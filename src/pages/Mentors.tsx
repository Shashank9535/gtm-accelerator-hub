
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MentorCard from '@/components/MentorCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Calendar, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mentors = [
  {
    name: "Anil Advani",
    role: "Founder & Managing Partner",
    company: "Inventus Law",
    location: "San Francisco, CA",
    availability: "Available Tuesdays & Thursdays",
    image: "/lovable-uploads/9cd64d87-5708-47ad-8336-377895ce94eb.png",
    expertise: ["US Go-to-Market", "Fundraising", "Legal & Compliance", "M&A"]
  },
  {
    name: "Manik M",
    role: "Co-Founder and MD",
    company: "Omnify",
    location: "Bangalore, India",
    availability: "Available Mondays & Wednesdays",
    image: "/lovable-uploads/48c93a0f-10cf-45e5-be50-1515ebddbde1.png",
    expertise: ["SaaS Scaling", "B2B Sales", "Product Strategy", "India-US Expansion"]
  },
  {
    name: "Prabhu D Gupta",
    role: "Entrepreneur in Residence",
    company: "GTM Unbound",
    location: "Bangalore, India",
    availability: "Available Weekly",
    image: "/lovable-uploads/c8918350-82fa-4098-82fd-9db96f2c6ea5.png",
    expertise: ["Revenue Strategy", "GTM Planning", "Market Entry", "SaaS Metrics"]
  },
  {
    name: "Aditi Aggarwal Mehta",
    role: "Founder",
    company: "GTM Unbound",
    location: "San Francisco, CA",
    availability: "Limited Availability",
    image: "/lovable-uploads/b46d13d8-351f-49b7-8553-dcd0c25bdbfd.png",
    expertise: ["International Expansion", "Go-to-Market Strategy", "US Market Entry"]
  }
];

const expertiseOptions = [
  "Go-to-Market Strategy",
  "US Market Entry",
  "India-US Expansion",
  "SaaS Scaling",
  "B2B Sales",
  "Fundraising",
  "Product Strategy",
  "Revenue Strategy",
  "Legal & Compliance",
  "M&A"
];

const MentorsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  
  const handleExpertiseToggle = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      setSelectedExpertise(selectedExpertise.filter(item => item !== expertise));
    } else {
      setSelectedExpertise([...selectedExpertise, expertise]);
    }
  };
  
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesExpertise = 
      selectedExpertise.length === 0 || 
      mentor.expertise.some(skill => selectedExpertise.includes(skill));
    
    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with background */}
      <div className="relative bg-gradient-to-r from-indigo-900 to-teal-600 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <Navbar />
        <div className="container mx-auto px-4 pt-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Connect with Expert Mentors
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl mb-8"
            >
              Book 1:1 sessions with experienced GTM professionals who've been there and done that
            </motion.p>
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and filter section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by name, expertise, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white"
                />
              </div>
              
              {/* Quick filters */}
              <div className="col-span-2">
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 ${selectedExpertise.includes("US Market Entry") ? "bg-teal-50 text-teal-700 border-teal-200" : ""}`}
                    onClick={() => handleExpertiseToggle("US Market Entry")}
                  >
                    <MapPin className="h-3 w-3" />
                    US Market Entry
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 ${selectedExpertise.includes("Go-to-Market Strategy") ? "bg-teal-50 text-teal-700 border-teal-200" : ""}`}
                    onClick={() => handleExpertiseToggle("Go-to-Market Strategy")}
                  >
                    <Users className="h-3 w-3" />
                    Go-to-Market Strategy
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`flex items-center gap-1 ${selectedExpertise.includes("SaaS Scaling") ? "bg-teal-50 text-teal-700 border-teal-200" : ""}`}
                    onClick={() => handleExpertiseToggle("SaaS Scaling")}
                  >
                    <Calendar className="h-3 w-3" />
                    SaaS Scaling
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={() => setSelectedExpertise([])}
                  >
                    <Filter className="h-3 w-3" />
                    All Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {selectedExpertise.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-gray-500">Active filters:</span>
                  {selectedExpertise.map(expertise => (
                    <span 
                      key={expertise} 
                      className="text-xs bg-teal-50 text-teal-700 border border-teal-200 px-2 py-1 rounded-full flex items-center gap-1"
                    >
                      {expertise}
                      <button 
                        onClick={() => handleExpertiseToggle(expertise)}
                        className="ml-1 text-teal-500 hover:text-teal-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {selectedExpertise.length > 0 && (
                    <button 
                      onClick={() => setSelectedExpertise([])}
                      className="text-xs text-gray-500 hover:text-gray-700 underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-white">
              <TabsTrigger value="all">All Mentors</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="new">Newly Added</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              {/* Mentors grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <MentorCard {...mentor} />
                  </motion.div>
                ))}
              </div>
              
              {filteredMentors.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No mentors found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mentors.slice(0, 2).map((mentor, index) => (
                  <motion.div
                    key={mentor.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <MentorCard {...mentor} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mentors.slice(-2).map((mentor, index) => (
                  <motion.div
                    key={mentor.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <MentorCard {...mentor} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Become a mentor CTA */}
          <Card className="mt-16 bg-gradient-to-r from-indigo-900 to-teal-600 text-white shadow-xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Share Your GTM Expertise</h3>
                  <p className="mb-6">
                    Are you an experienced go-to-market professional? Join our community of mentors and help startups succeed globally.
                  </p>
                  <Button className="bg-white text-indigo-900 hover:bg-gray-100">
                    Apply to Become a Mentor
                  </Button>
                </div>
                <div className="hidden md:block relative">
                  <img 
                    src="/lovable-uploads/e7fcae85-fb46-4f99-9898-103555caa564.png" 
                    alt="Become a mentor" 
                    className="object-cover rounded-lg opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-transparent rounded-lg"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentorsPage;
