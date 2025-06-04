import { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutMissionSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const missionData = [
    {
      id: "mission",
      title: "Our Mission",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "To create a professional, scalable system that transforms how vehicle services are delivered across Africa, setting new standards for trust, efficiency, and technological innovation.",
      highlights: [
        "Professional Service Standards",
        "Scalable Technology Platform", 
        "Trust & Transparency",
        "Continental Expansion"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      borderColor: "border-blue-200 dark:border-blue-500/20"
    },
    {
      id: "vision",
      title: "Our Vision",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      description: "To become the leading platform for automotive services in Africa, empowering millions of vehicle owners and thousands of service providers through innovative technology and unwavering commitment to excellence.",
      highlights: [
        "Market Leadership in Africa",
        "Millions of Users Served",
        "Thousands of Partners", 
        "Innovation Excellence"
      ],
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50 dark:bg-primary-500/10",
      borderColor: "border-primary-200 dark:border-primary-500/20"
    },
    {
      id: "values",
      title: "Core Values",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Our values guide every decision we make, ensuring we stay true to our commitment to transform Africa's automotive landscape with integrity, innovation, and unwavering focus on customer success.",
      highlights: [
        "Customer-First Approach",
        "Innovation & Excellence",
        "Trust & Transparency",
        "Community Impact"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-500/10",
      borderColor: "border-green-200 dark:border-green-500/20"
    }
  ];

  return (
    <section 
      id="mission-section"
      className="py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-secondary-900 dark:to-secondary-800 relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-6">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Our Foundation
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-900 dark:text-white mb-6">
              <span className="block">Built on</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600">
                Purpose & Passion
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Every great transformation begins with a clear vision. At FITTA, our mission, vision, and values 
              drive us to revolutionize Africa's automotive service landscape.
            </p>
          </div>

          {/* Tab Navigation */}
          <div 
            className={`
              flex flex-col sm:flex-row justify-center mb-12 transition-all duration-1000 delay-300
              ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <div className="inline-flex p-1 bg-white dark:bg-secondary-800 rounded-2xl shadow-lg border border-neutral-200 dark:border-secondary-700">
              {missionData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300
                    ${activeTab === index 
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
                      : 'text-secondary-600 dark:text-neutral-400 hover:text-secondary-900 dark:hover:text-white'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`transition-all duration-300 ${activeTab === index ? 'text-white' : 'text-current'}`}>
                      {item.icon}
                    </span>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Cards */}
          <div 
            ref={cardsRef}
            className={`
              transition-all duration-1000 delay-500
              ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
          >
            {missionData.map((item, index) => (
              <div
                key={item.id}
                className={`
                  transition-all duration-500 ease-in-out
                  ${activeTab === index 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 absolute transform translate-y-8 scale-95 pointer-events-none'
                  }
                `}
              >
                <div className={`
                  relative glass-card ${item.bgColor} ${item.borderColor} border-2
                  max-w-5xl mx-auto overflow-hidden
                `}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='10' r='1'/%3E%3Ccircle cx='10' cy='30' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                  </div>

                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-6">
                      {/* Icon Header */}
                      <div className="flex items-center gap-4">
                        <div className={`
                          w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} 
                          flex items-center justify-center text-white shadow-lg
                          transform transition-all duration-300 hover:scale-110 hover:rotate-6
                        `}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-secondary-900 dark:text-white">
                            {item.title}
                          </h3>
                          <div className={`w-20 h-1 bg-gradient-to-r ${item.color} rounded-full mt-2`} />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        {item.highlights.map((highlight, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-3 group cursor-pointer"
                          >
                            <div className={`
                              w-2 h-2 bg-gradient-to-r ${item.color} rounded-full
                              transform transition-all duration-300 group-hover:scale-150
                            `} />
                            <span className="text-secondary-700 dark:text-neutral-300 font-medium group-hover:text-secondary-900 dark:group-hover:text-white transition-colors duration-300">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                      <div className="relative aspect-square max-w-md mx-auto">
                        
                        {/* Main Visual Container */}
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                          
                          {/* Background Image based on item */}
                          {item.id === 'mission' && (
                            <img 
                              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=800&auto=format&fit=crop"
                              alt="Mission - Automotive innovation"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {item.id === 'vision' && (
                            <img 
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                              alt="Vision - African landscape"
                              className="w-full h-full object-cover"
                            />
                          )}
                          {item.id === 'values' && (
                            <img 
                              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop"
                              alt="Values - Team collaboration"
                              className="w-full h-full object-cover"
                            />
                          )}
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t ${item.color}/80`} />
                          
                          {/* Content Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                {item.icon}
                              </div>
                              <h3 className="text-2xl font-bold">{item.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;