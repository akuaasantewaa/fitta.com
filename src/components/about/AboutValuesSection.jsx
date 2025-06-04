import { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutValuesSection = () => {
  const [hoveredValue, setHoveredValue] = useState(null);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const coreValues = [
    {
      id: "trust",
      title: "Trust & Transparency",
      description: "We believe trust is earned through consistent transparency. Every transaction, every service, every interaction is conducted with complete openness and honesty.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      borderColor: "border-blue-200 dark:border-blue-500/20",
      principles: [
        "Transparent pricing with no hidden fees",
        "Honest communication at every step",
        "Reliable service delivery promises",
        "Open feedback and review systems"
      ]
    },
    {
      id: "excellence",
      title: "Excellence & Innovation",
      description: "We're not satisfied with 'good enough.' Every aspect of FITTA is designed to exceed expectations through continuous innovation and relentless pursuit of excellence.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-primary-500 to-primary-600",
      bgColor: "bg-primary-50 dark:bg-primary-500/10",
      borderColor: "border-primary-200 dark:border-primary-500/20",
      principles: [
        "Cutting-edge technology solutions",
        "Continuous platform improvements",
        "Best-in-class user experience",
        "Industry-leading service standards"
      ]
    },
    {
      id: "customer-first",
      title: "Customer-First Approach",
      description: "Our customers are at the heart of everything we do. Every decision, every feature, every improvement is made with our customers' success and satisfaction in mind.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-500/10",
      borderColor: "border-green-200 dark:border-green-500/20",
      principles: [
        "24/7 customer support availability",
        "User-centric design and development",
        "Rapid response to customer needs",
        "Continuous feedback integration"
      ]
    },
    {
      id: "community",
      title: "Community Impact",
      description: "We're building more than a platform—we're creating opportunities, supporting local businesses, and contributing to Africa's economic growth and technological advancement.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-500/10",
      borderColor: "border-purple-200 dark:border-purple-500/20",
      principles: [
        "Supporting local garage partners",
        "Creating employment opportunities",
        "Driving technological adoption",
        "Contributing to economic growth"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-secondary-900 relative overflow-hidden">
      
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/3 via-transparent to-green-500/3" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-green-50 dark:from-primary-500/10 dark:to-green-500/10 border border-primary-200 dark:border-primary-500/20 mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Our Core Values
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-900 dark:text-white mb-6">
              <span className="block">Values That</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-green-500 to-purple-500">
                Drive Us Forward
              </span>
            </h2>
            
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Our values aren't just words on a wall—they're the principles that guide every decision, 
              every innovation, and every interaction we have with our community.
            </p>
          </div>

          {/* Values Grid */}
          <div 
            ref={valuesRef}
            className={`
              grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300
              ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
          >
            {coreValues.map((value, index) => (
              <div
                key={value.id}
                className={`
                  group relative transition-all duration-500
                  ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`
                  relative glass-card ${value.bgColor} ${value.borderColor} border-2
                  overflow-hidden transform transition-all duration-300
                  ${hoveredValue === index 
                    ? 'scale-105 shadow-2xl -translate-y-2' 
                    : 'hover:scale-102 hover:shadow-xl'
                  }
                `}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                  </div>

                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 transition-opacity duration-300
                    ${hoveredValue === index ? 'opacity-10' : ''}
                  `} />

                  <div className="relative z-10 p-8">
                    
                    {/* Icon and Title */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`
                        w-20 h-20 rounded-3xl bg-gradient-to-br ${value.color} 
                        flex items-center justify-center text-white shadow-xl
                        transform transition-all duration-300
                        ${hoveredValue === index ? 'scale-110 rotate-6' : 'group-hover:scale-105'}
                      `}>
                        {value.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-secondary-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                          {value.title}
                        </h3>
                        <div className={`w-16 h-1 bg-gradient-to-r ${value.color} rounded-full transition-all duration-300 ${hoveredValue === index ? 'w-24' : ''}`} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed mb-6">
                      {value.description}
                    </p>

                    {/* Principles */}
                    <div className="space-y-3">
                      {value.principles.map((principle, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 group/principle cursor-pointer p-2 rounded-lg hover:bg-white/50 dark:hover:bg-secondary-700/50 transition-all duration-300"
                        >
                          <div className={`
                            w-2 h-2 bg-gradient-to-r ${value.color} rounded-full mt-2 flex-shrink-0
                            transform transition-all duration-300 group-hover/principle:scale-150
                          `} />
                          <span className="text-secondary-700 dark:text-neutral-300 group-hover/principle:text-secondary-900 dark:group-hover/principle:text-white transition-colors duration-300">
                            {principle}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Values Impact Statement */}
          <div className={`
            mt-16 text-center transition-all duration-1000 delay-1000
            ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="max-w-4xl mx-auto">
              <div className="relative glass-card bg-gradient-to-br from-primary-50 via-white to-green-50 dark:from-primary-500/10 dark:via-secondary-800 dark:to-green-500/10 border-2 border-primary-200 dark:border-primary-500/20 overflow-hidden">
                
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-green-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/10 to-primary-500/10 rounded-full blur-2xl" />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center text-white shadow-xl">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-secondary-900 dark:text-white">
                      Our Values Promise
                    </h3>
                  </div>
                  
                  <p className="text-xl text-secondary-600 dark:text-neutral-300 leading-relaxed">
                    These values aren't just aspirations—they're commitments we make to every customer, 
                    partner, and team member. They guide our decisions, shape our culture, and drive us 
                    to build the most trusted automotive services platform in Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;