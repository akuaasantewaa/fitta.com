import { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutInnovationSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [featuresRef, featuresVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const innovations = [
    {
      id: "ai-chatbot",
      title: "AI-Powered Customer Service",
      description: "Our intelligent chatbot provides 24/7 support with context-aware responses, emergency detection, and multi-language capabilities across all user types.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        "Emergency situation detection",
        "Role-specific responses",
        "Context-aware conversations", 
        "Multi-language support"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-500/10"
    },
    {
      id: "real-time-tracking",
      title: "Real-Time Service Tracking",
      description: "Live GPS tracking, estimated arrival times, and instant updates keep customers informed throughout their service experience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        "Live GPS tracking",
        "ETA calculations",
        "Service provider profiles",
        "Real-time notifications"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-500/10"
    },
    {
      id: "smart-matching",
      title: "Intelligent Service Matching",
      description: "Advanced algorithms match customers with the most suitable service providers based on location, expertise, availability, and ratings.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
        </svg>
      ),
      features: [
        "Location-based matching",
        "Expertise alignment", 
        "Availability optimization",
        "Rating-based selection"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-500/10"
    },
    {
      id: "transparent-pricing",
      title: "Transparent Pricing Engine",
      description: "Dynamic pricing with complete transparency, instant quotes, and multiple payment options including mobile money and bank transfers.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        "Dynamic pricing model",
        "Instant cost estimates",
        "Multiple payment methods",
        "Transparent fee structure"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-500/10"
    }
  ];

  const techStack = [
    { name: "React 19", description: "Modern frontend framework", icon: "⚛️" },
    { name: "Firebase", description: "Scalable backend services", icon: "🔥" },
    { name: "OpenAI", description: "AI-powered conversations", icon: "🤖" },
    { name: "Google Maps", description: "Location & routing services", icon: "🗺️" },
    { name: "TailwindCSS", description: "Responsive design system", icon: "🎨" },
    { name: "WebSocket", description: "Real-time communication", icon: "⚡" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white dark:from-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/3 via-transparent to-purple-500/3" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/20 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Innovation & Technology
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-900 dark:text-white mb-6">
              <span className="block">Powered by</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-green-500">
                Cutting-Edge Tech
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              At FITTA, innovation isn't just a buzzword—it's the foundation of everything we build. 
              Our technology stack combines proven reliability with bleeding-edge capabilities.
            </p>
          </div>

          {/* Main Innovation Features */}
          <div 
            ref={featuresRef}
            className={`
              mb-20 transition-all duration-1000 delay-300
              ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
          >
            {/* Feature Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {innovations.map((innovation, index) => (
                <button
                  key={innovation.id}
                  onClick={() => setActiveFeature(index)}
                  className={`
                    px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300
                    ${activeFeature === index 
                      ? `bg-gradient-to-r ${innovation.color} text-white shadow-lg transform scale-105` 
                      : 'bg-white dark:bg-secondary-800 text-secondary-600 dark:text-neutral-400 hover:text-secondary-900 dark:hover:text-white border border-neutral-200 dark:border-secondary-700 hover:shadow-md'
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    <span className={`transition-all duration-300 ${activeFeature === index ? 'text-white' : 'text-current'}`}>
                      {innovation.icon}
                    </span>
                    {innovation.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Feature Content */}
            <div className="relative">
              {innovations.map((innovation, index) => (
                <div
                  key={innovation.id}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${activeFeature === index 
                      ? 'opacity-100 transform translate-y-0 scale-100' 
                      : 'opacity-0 absolute transform translate-y-8 scale-95 pointer-events-none'
                    }
                  `}
                >
                  <div className={`
                    relative glass-card ${innovation.bgColor} border-2 border-transparent
                    max-w-6xl mx-auto overflow-hidden
                  `}>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                      
                      {/* Left Content */}
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-center gap-4">
                          <div className={`
                            w-16 h-16 rounded-2xl bg-gradient-to-br ${innovation.color} 
                            flex items-center justify-center text-white shadow-lg
                            transform transition-all duration-300 hover:scale-110 hover:rotate-6
                          `}>
                            {innovation.icon}
                          </div>
                          <div>
                            <h3 className="text-3xl font-black text-secondary-900 dark:text-white">
                              {innovation.title}
                            </h3>
                            <div className={`w-20 h-1 bg-gradient-to-r ${innovation.color} rounded-full mt-2`} />
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                          {innovation.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {innovation.features.map((feature, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-secondary-700/50 group hover:bg-white dark:hover:bg-secondary-700 transition-all duration-300 cursor-pointer"
                            >
                              <div className={`
                                w-2 h-2 bg-gradient-to-r ${innovation.color} rounded-full
                                transform transition-all duration-300 group-hover:scale-150
                              `} />
                              <span className="text-secondary-700 dark:text-neutral-300 font-medium group-hover:text-secondary-900 dark:group-hover:text-white transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Visual */}
                      <div className="relative">
                        <div className="relative aspect-square max-w-md mx-auto">
                          
                          {/* Main Image Container */}
                          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                            
                            {/* Innovation-specific images */}
                            {innovation.id === 'ai-chatbot' && (
                              <img 
                                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
                                alt="AI-Powered Customer Service"
                                className="w-full h-full object-cover"
                              />
                            )}
                            {innovation.id === 'real-time-tracking' && (
                              <img 
                                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
                                alt="Real-Time Service Tracking"
                                className="w-full h-full object-cover"
                              />
                            )}
                            {innovation.id === 'smart-matching' && (
                              <img 
                                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
                                alt="Intelligent Service Matching"
                                className="w-full h-full object-cover"
                              />
                            )}
                            {innovation.id === 'transparent-pricing' && (
                              <img 
                                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"
                                alt="Transparent Pricing Engine"
                                className="w-full h-full object-cover"
                              />
                            )}
                            
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${innovation.color}/80`} />
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                  {innovation.icon}
                                </div>
                                <h3 className="text-xl font-bold">{innovation.title}</h3>
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

          {/* Tech Stack Showcase */}
          <div className={`
            transition-all duration-1000 delay-700
            ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-secondary-900 dark:text-white mb-4">
                Built with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 ml-2">
                  Industry-Leading Tech
                </span>
              </h3>
              <p className="text-lg text-secondary-600 dark:text-neutral-300 max-w-2xl mx-auto">
                Our technology stack is carefully chosen for reliability, scalability, and performance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`
                    group relative bg-white dark:bg-secondary-800 rounded-2xl p-6 text-center
                    border border-neutral-200 dark:border-secondary-700 
                    hover:border-primary-300 dark:hover:border-primary-700
                    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                    cursor-pointer
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-secondary-600 dark:text-neutral-400 group-hover:text-secondary-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovationSection;