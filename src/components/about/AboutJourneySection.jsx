import { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutJourneySection = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [timelineRef, timelineVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const journeyPhases = [
    {
      phase: "Genesis",
      year: "2023",
      title: "The Problem Identified",
      description: "Born from real frustration with inefficient vehicle breakdown services in Ghana. Our founder experienced firsthand the lack of professionalism and reliability in the automotive service industry.",
      icon: "💡",
      achievements: [
        "Market research conducted across 5 major cities",
        "Identified gaps in service quality and reliability",
        "Built initial team of automotive experts",
        "Secured seed funding for platform development"
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-500/10",
      status: "completed"
    },
    {
      phase: "Foundation",
      year: "2024",
      title: "Building the Platform",
      description: "Developed our technology platform with a focus on user experience, reliability, and scalability. Established partnerships with certified garages and began pilot testing.",
      icon: "🏗️",
      achievements: [
        "Launched MVP platform with core features",
        "Onboarded first 50 partner garages",
        "Conducted pilot testing in Accra",
        "Processed first 1,000 service requests"
      ],
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50 dark:bg-primary-500/10",
      status: "completed"
    },
    {
      phase: "Growth",
      year: "2024-2025",
      title: "Scaling Across Ghana",
      description: "Expanding our network across Ghana's major cities, enhancing our AI-powered chatbot, and introducing advanced features like real-time tracking and transparent pricing.",
      icon: "🚀",
      achievements: [
        "500+ certified partner garages",
        "Expansion to 15 cities across Ghana",
        "AI chatbot implementation",
        "10,000+ vehicles served"
      ],
      color: "from-blue-500 to-blue-600", 
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      status: "in-progress"
    },
    {
      phase: "Innovation",
      year: "2025-2026",
      title: "Technology Leadership",
      description: "Introducing cutting-edge features including predictive maintenance, IoT integration, and advanced analytics to set new industry standards.",
      icon: "⚡",
      achievements: [
        "IoT integration for vehicle monitoring",
        "Predictive maintenance algorithms",
        "Advanced analytics dashboard",
        "Mobile app optimization"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-500/10",
      status: "planned"
    },
    {
      phase: "Expansion",
      year: "2026+",
      title: "Continental Reach",
      description: "Taking FITTA across Africa, establishing operations in Nigeria, Kenya, South Africa, and other key markets while maintaining our commitment to quality and innovation.",
      icon: "🌍",
      achievements: [
        "Multi-country operations",
        "100,000+ vehicles served",
        "1,000+ partner locations",
        "Industry leadership position"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-500/10",
      status: "vision"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;
      case 'in-progress':
        return <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'planned':
        return <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>;
      case 'vision':
        return <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-secondary-900 relative overflow-hidden">
      
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/3 via-transparent to-blue-500/3" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-500/10 dark:to-blue-500/10 border border-primary-200 dark:border-primary-500/20 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Our Journey
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-900 dark:text-white mb-6">
              <span className="block">From Idea to</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-blue-500 to-green-500">
                Continental Impact
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Every revolutionary platform has a story. Here's how FITTA evolved from a personal frustration 
              to a movement that's transforming vehicle services across Africa.
            </p>
          </div>

          {/* Interactive Timeline */}
          <div 
            ref={timelineRef}
            className={`
              transition-all duration-1000 delay-300
              ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
          >
            
            {/* Phase Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {journeyPhases.map((phase, index) => (
                <button
                  key={phase.phase}
                  onClick={() => setActivePhase(index)}
                  className={`
                    group relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300
                    ${activePhase === index 
                      ? `bg-gradient-to-r ${phase.color} text-white shadow-lg transform scale-105` 
                      : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-neutral-400 hover:text-secondary-900 dark:hover:text-white border border-neutral-200 dark:border-secondary-700 hover:shadow-md'
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{phase.icon}</span>
                    <span>{phase.phase}</span>
                    <span className="text-xs opacity-75">({phase.year})</span>
                  </span>
                  
                  {/* Status indicator */}
                  <div className="absolute -top-1 -right-1">
                    {getStatusIcon(phase.status)}
                  </div>
                </button>
              ))}
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {journeyPhases.map((phase, index) => (
                <div
                  key={phase.phase}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${activePhase === index 
                      ? 'opacity-100 transform translate-y-0 scale-100' 
                      : 'opacity-0 absolute transform translate-y-8 scale-95 pointer-events-none'
                    }
                  `}
                >
                  <div className={`
                    relative glass-card ${phase.bgColor} border-2 border-transparent
                    bg-gradient-to-br from-white via-white to-neutral-50 
                    dark:from-secondary-800 dark:via-secondary-800 dark:to-secondary-900
                    max-w-6xl mx-auto overflow-hidden
                  `}>
                    
                    {/* Animated border */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-r ${phase.color} opacity-20 blur-sm
                      transition-all duration-300 group-hover:opacity-30
                    `} />
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                      
                      {/* Left Content */}
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <div className={`
                              w-20 h-20 rounded-3xl bg-gradient-to-br ${phase.color} 
                              flex items-center justify-center text-white shadow-xl text-2xl
                              transform transition-all duration-300 hover:scale-110 hover:rotate-6
                            `}>
                              {phase.icon}
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-3xl font-black text-secondary-900 dark:text-white">
                                  {phase.title}
                                </h3>
                                {getStatusIcon(phase.status)}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${phase.color} text-white`}>
                                  {phase.phase}
                                </span>
                                <span className="text-sm text-secondary-500 dark:text-neutral-400 font-medium">
                                  {phase.year}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className={`w-24 h-1 bg-gradient-to-r ${phase.color} rounded-full`} />
                        </div>

                        {/* Description */}
                        <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                          {phase.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-bold text-secondary-900 dark:text-white text-lg">
                            Key Achievements:
                          </h4>
                          <div className="grid gap-3">
                            {phase.achievements.map((achievement, idx) => (
                              <div 
                                key={idx}
                                className="flex items-start gap-3 group cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-secondary-700/50 transition-all duration-300"
                              >
                                <div className={`
                                  w-2 h-2 bg-gradient-to-r ${phase.color} rounded-full mt-2 flex-shrink-0
                                  transform transition-all duration-300 group-hover:scale-150
                                `} />
                                <span className="text-secondary-700 dark:text-neutral-300 group-hover:text-secondary-900 dark:group-hover:text-white transition-colors duration-300">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Visual */}
                      <div className="relative">
                        <div className="relative mx-auto max-w-md">
                          
                          {/* Main Image Container */}
                          <div className="relative aspect-square w-80 mx-auto rounded-3xl overflow-hidden shadow-2xl">
                            
                            {/* Phase-specific images */}
                            {phase.phase === 'Genesis' && (
                              <img 
                                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop"
                                alt="Genesis - Innovation and ideas"
                                className="w-full h-full object-cover"
                              />
                            )}
                            {phase.phase === 'Foundation' && (
                              <img 
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                                alt="Foundation - Building platform"
                                className="w-full h-full object-cover"
                              />
                            )}
                            {phase.phase === 'Growth' && (
                              <img 
                                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800&auto=format&fit=crop"
                                alt="Growth - Scaling across Ghana"
                                className="w-full h-full object-cover"
                              />
                            )}
                            {phase.phase === 'Innovation' && (
                              <img 
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
                                alt="Innovation - Technology leadership"
                                className="w-full h-full object-cover"
                              />
                            )}
                            {phase.phase === 'Expansion' && (
                              <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                alt="Expansion - Continental reach"
                                className="w-full h-full object-cover"
                              />
                            )}
                            
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${phase.color}/80`} />
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white">
                                <div className="text-5xl mb-4">
                                  {phase.icon}
                                </div>
                                <div className="text-2xl font-black mb-2">
                                  {phase.phase}
                                </div>
                                <div className="text-sm opacity-90">
                                  {phase.year}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-secondary-800 rounded-xl shadow-lg flex items-center justify-center">
                            {getStatusIcon(phase.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-secondary-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-secondary-600 dark:text-neutral-400">
                    Journey Progress
                  </span>
                  <span className="text-sm font-bold text-primary-500">
                    {Math.round(((activePhase + 1) / journeyPhases.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-secondary-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((activePhase + 1) / journeyPhases.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourneySection;