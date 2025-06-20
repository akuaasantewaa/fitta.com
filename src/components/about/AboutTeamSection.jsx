import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutTeamSection = () => {
  const navigate = useNavigate();
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [teamRef, teamVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const teamMembers = [
    {
      name: "Kwame Asante",
      role: "Founder & CEO",
      bio: "Automotive industry veteran with 15+ years of experience. Passionate about transforming Africa's vehicle services through technology and innovation.",
      avatar: "👨🏿‍💼",
      color: "from-blue-500 to-blue-600",
      achievements: [
        "Led digital transformation initiatives",
        "Built partnerships across 5 countries",
        "Award-winning entrepreneur",
        "Technology innovation advocate"
      ]
    },
    {
      name: "Akosua Mensah",
      role: "CTO & Co-Founder",
      bio: "Full-stack engineer and AI specialist. Expert in building scalable platforms that serve millions of users across emerging markets.",
      avatar: "👩🏿‍💻",
      color: "from-green-500 to-green-600",
      achievements: [
        "10+ years in software engineering",
        "AI/ML implementation specialist",
        "Scalable architecture expert",
        "Open source contributor"
      ]
    },
    {
      name: "Kofi Osei",
      role: "Head of Operations",
      bio: "Operations expert with deep knowledge of Ghana's automotive ecosystem. Ensures seamless service delivery and partner network growth.",
      avatar: "👨🏿‍🔧",
      color: "from-purple-500 to-purple-600",
      achievements: [
        "Automotive operations expert",
        "Network expansion specialist",
        "Quality assurance leader",
        "Partner relationship manager"
      ]
    },
    {
      name: "Ama Osei",
      role: "Head of Customer Success",
      bio: "Customer experience champion focused on building lasting relationships and ensuring every interaction exceeds expectations.",
      avatar: "👩🏿‍💼",
      color: "from-orange-500 to-orange-600",
      achievements: [
        "Customer success strategist",
        "Service excellence advocate",
        "Team leadership expert",
        "Process optimization specialist"
      ]
    }
  ];

  const teamValues = [
    {
      icon: "🎯",
      title: "Mission-Driven",
      description: "Every team member is aligned with our mission to transform vehicle services across Africa."
    },
    {
      icon: "🚀",
      title: "Innovation-First",
      description: "We encourage creative thinking and bold solutions to complex challenges."
    },
    {
      icon: "🤝",
      title: "Collaborative",
      description: "We believe the best results come from diverse perspectives working together."
    },
    {
      icon: "📈",
      title: "Growth-Oriented",
      description: "We're committed to continuous learning and professional development."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-secondary-900 relative overflow-hidden">
      
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/3 via-transparent to-purple-500/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`
              text-center mb-16 transition-all duration-1000
              ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-500/10 dark:to-purple-500/10 border border-primary-200 dark:border-primary-500/20 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Our Team
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-900 dark:text-white mb-6">
              <span className="block">Meet the</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-green-500 to-purple-500">
                Visionaries
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Our diverse team combines deep industry expertise with innovative thinking to build 
              the future of automotive services in Africa.
            </p>
          </div>

          {/* Team Grid */}
          <div 
            ref={teamRef}
            className={`
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300
              ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
          >
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`
                  group relative transition-all duration-700
                  ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onMouseEnter={() => setActiveTeamMember(index)}
              >
                <div className="relative glass-card bg-white dark:bg-secondary-800 border-2 border-neutral-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500 overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  
                  {/* Background gradient on hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5
                  `} />
                  
                  <div className="relative z-10 p-6 text-center">
                    
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-secondary-700 dark:to-secondary-600 flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {member.avatar}
                    </div>

                    {/* Info */}
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4`}>
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className="text-sm text-secondary-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {member.achievements.slice(0, 2).map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-secondary-600 dark:text-neutral-400">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${member.color} rounded-full flex-shrink-0`} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative line */}
                    <div className={`w-12 h-1 bg-gradient-to-r ${member.color} rounded-full mx-auto mt-4 transform group-hover:scale-x-150 transition-transform duration-300`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className={`
            transition-all duration-1000 delay-700
            ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-secondary-900 dark:text-white mb-4">
                What Makes Our Team
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500 ml-2">
                  Special
                </span>
              </h3>
              <p className="text-lg text-secondary-600 dark:text-neutral-300 max-w-2xl mx-auto">
                We're more than colleagues—we're a family united by shared values and a common vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamValues.map((value) => (
                <div
                  key={value.title}
                  className="group relative bg-white dark:bg-secondary-800 rounded-2xl p-6 text-center border border-neutral-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Join Team CTA */}
          <div className={`
            mt-16 text-center transition-all duration-1000 delay-1000
            ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="max-w-2xl mx-auto glass-card bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-primary-500/10 dark:via-secondary-800 dark:to-purple-500/10 border-2 border-primary-200 dark:border-primary-500/20">
              <div className="p-8">
                <h3 className="text-2xl font-black text-secondary-900 dark:text-white mb-4">
                  Ready to Join Our Mission?
                </h3>
                <p className="text-lg text-secondary-600 dark:text-neutral-300 mb-6">
                  We're always looking for passionate individuals who share our vision of transforming Africa's automotive landscape.
                </p>
                <button 
                  onClick={() => navigate('/careers')}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <span>View Open Positions</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;