
import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

const advisors = [
  {
    name: "Anil Advani",
    role: "Advisor",
    bio: "Experienced legal and strategic advisor helping startups navigate international business landscapes.",
    imageSrc: "/lovable-uploads/14734d7e-b2e6-4bf6-aca1-5e5fe052b1b9.png",
    linkedinUrl: "https://www.linkedin.com/in/aniladvani/"
  },
  {
    name: "Manik M",
    role: "Advisor",
    bio: "Strategic advisor with deep expertise in SaaS internationalization and global market entry.",
    imageSrc: "/lovable-uploads/48c93a0f-10cf-45e5-be50-1515ebddbde1.png",
    linkedinUrl: "https://www.linkedin.com/in/manikm/"
  }
];

const AdvisorsSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#2D1A3F] to-[#1A1F2C]">
      {/* Futuristic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] -z-10"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#7E69AB]/20 blur-xl"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 15 + 15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E5DEFF] to-[#7E69AB] bg-clip-text text-transparent mb-4">
            Our Advisors
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert advisors guiding our mission to help startups enter new markets with confidence and strategic clarity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {advisors.map((advisor, index) => (
            <TeamMember
              key={index}
              name={advisor.name}
              role={advisor.role}
              bio={advisor.bio}
              imageSrc={advisor.imageSrc}
              linkedinUrl={advisor.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
