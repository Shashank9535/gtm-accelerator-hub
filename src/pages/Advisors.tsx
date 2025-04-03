
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const advisors = [
  {
    name: "Anil Advani",
    role: "Advisor",
    bio: "Experienced legal and strategic advisor helping startups navigate international business landscapes.",
    imageSrc: "/lovable-uploads/14734d7e-b2e6-4bf6-aca1-5e5fe052b1b9.png",
    linkedinUrl: "https://www.linkedin.com/in/aniladvani/",
    expertise: ["Legal Strategy", "International Business", "Startup Consulting"]
  },
  {
    name: "Manik M",
    role: "Advisor",
    bio: "Strategic advisor with deep expertise in SaaS internationalization and global market entry.",
    imageSrc: "/lovable-uploads/48c93a0f-10cf-45e5-be50-1515ebddbde1.png",
    linkedinUrl: "https://www.linkedin.com/in/manikm/",
    expertise: ["SaaS Strategy", "Global Market Entry", "Revenue Growth"]
  }
];

const Advisors: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-teal-100/10 to-transparent opacity-60"></div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-300/20 to-blue-200/20 blur-sm"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gtm-deep-blue mb-6">
                Our Advisors
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Meet the experienced professionals who guide our vision and help GTM Unbound
                deliver exceptional value to startups entering new markets.
              </p>
              
              <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg">
                <p className="text-gray-700">
                  Our advisors bring decades of combined experience in international business, 
                  SaaS strategy, legal frameworks, market entry, and revenue growth. Their 
                  guidance ensures we provide practical, effective solutions for our community.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Advisor Navigation */}
        <section className="py-8 bg-white/70 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="#current-advisors">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Current Advisors
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="#join-our-team">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Join Our Team
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </section>
        
        {/* Current Advisors Section */}
        <section id="current-advisors" className="py-16 bg-gradient-to-br from-[#1A1F2C] to-[#2D1A3F]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E5DEFF] to-[#7E69AB] bg-clip-text text-transparent mb-4">
                Current Advisors
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Expert advisors guiding our mission to help startups enter new markets with confidence and strategic clarity.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-white/10"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <Avatar className="h-28 w-28 border-2 border-purple-400/20">
                          <AvatarImage src={advisor.imageSrc} alt={advisor.name} />
                          <AvatarFallback>{advisor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
                        <p className="text-purple-300 font-medium mb-3">{advisor.role}</p>
                        <p className="text-gray-300 mb-4">{advisor.bio}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {advisor.expertise.map((skill, i) => (
                            <span key={i} className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <a 
                          href={advisor.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Join Our Team Section */}
        <section id="join-our-team" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gtm-deep-blue mb-6">
                Join Our Advisory Team
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                We're looking for experienced professionals to join our advisory board and help
                shape the future of GTM Unbound. If you have expertise in international business,
                SaaS strategy, or market entry, we'd love to connect.
              </p>
              
              <Card className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-100">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">What We're Looking For</h3>
                  
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Proven experience in helping startups scale internationally</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Strong network in the US or Indian tech ecosystem</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Passion for supporting entrepreneurs on their global journey</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">Expertise in SaaS, AI, or enterprise software</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Button 
                onClick={() => window.location.href = "mailto:info@gtmunbound.com?subject=Advisory Team Application"}
                className="bg-gradient-to-r from-[#FF0066] to-[#0099FF] hover:opacity-90 text-white border-none shadow-lg"
              >
                Apply to Join
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Advisors;
