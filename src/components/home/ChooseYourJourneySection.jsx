import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ChooseYourJourneySection = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userType } = useAuth();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(0);
  
  // Scroll animations
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const journeys = [
    {
      id: 'vehicle-owner',
      title: 'Vehicle Owner',
      subtitle: 'Need Help?',
      description: 'Get instant roadside assistance and manage your vehicle services with ease',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      features: ['24/7 Emergency Support', 'Real-time Tracking', 'Service History'],
      path: '/auth/vehicle-owner',
      color: 'from-primary-500 to-primary-600',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(229, 57, 53, 0.15) 0%, transparent 50%)',
    },
    {
      id: 'garage-partner',
      title: 'Garage Partner',
      subtitle: 'Want to Help?',
      description: 'Join our network and grow your automotive service business exponentially',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      features: ['Expand Customer Base', 'Digital Tools', 'Secure Payments'],
      path: '/auth/garage-partner',
      color: 'from-secondary-600 to-secondary-700',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(43, 43, 43, 0.15) 0%, transparent 50%)',
    },
    {
      id: 'insurance',
      title: 'Insurance Company',
      subtitle: 'Manage Process?',
      description: 'Streamline claims processing with our verified service provider network',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['Faster Claims', 'Verified Reports', 'Cost Reduction'],
      path: '/auth/insurance',
      color: 'from-primary-500 to-primary-600',
      bgPattern: 'radial-gradient(circle at 50% 50%, rgba(229, 57, 53, 0.15) 0%, transparent 50%)',
    }
  ];

  const handleGetStarted = (path) => {
    if (isAuthenticated) {
      navigate(`/dashboard/${userType}`);
    } else {
      navigate(path);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-secondary-900 relative overflow-hidden">
      {/* Minimalistic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div ref={sectionRef} className={`text-center mb-16 transition-all duration-1000 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-secondary-900 dark:text-white mb-4">
            Choose Your Journey
          </h2>
          <p className="text-lg text-secondary-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Select your path and experience the future of vehicle services
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {journeys.map((journey, index) => (
            <div
              key={journey.id}
              className={`group relative transition-all duration-700 ${cardsVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transform: cardsVisible 
                  ? 'translateY(0) rotateX(0)' 
                  : `translateY(50px) rotateX(-15deg)`,
                transitionDelay: `${index * 150}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(index)}
            >
              {/* Card */}
              <div className={`
                relative h-full bg-white dark:bg-secondary-800 rounded-2xl p-8
                border transition-all duration-500 cursor-pointer
                ${selectedCard === index 
                  ? 'border-primary-500 shadow-2xl shadow-primary-500/20 scale-[1.02]' 
                  : 'border-neutral-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-700'
                }
                ${hoveredCard === index ? 'transform -translate-y-2' : ''}
              `}>
                {/* Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: journey.bgPattern }}
                />

                {/* Icon Container */}
                <div className={`
                  relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${journey.color}
                  flex items-center justify-center text-white shadow-lg
                  transform transition-transform duration-300
                  ${hoveredCard === index ? 'scale-110 rotate-3' : ''}
                `}>
                  {journey.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <p className="text-sm font-medium text-primary-500 mb-2">
                    {journey.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
                    {journey.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-neutral-400 mb-6 line-clamp-2">
                    {journey.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {journey.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-sm text-secondary-600 dark:text-neutral-400"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleGetStarted(journey.path)}
                    className={`
                      w-full py-3 px-6 rounded-xl font-semibold text-sm
                      transition-all duration-300 relative overflow-hidden group/btn
                      ${selectedCard === index
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'bg-neutral-100 dark:bg-secondary-700 text-secondary-700 dark:text-white hover:bg-neutral-200 dark:hover:bg-secondary-600'
                      }
                    `}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredCard === index ? 'translate-x-1' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    
                    {/* Button Hover Effect */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700
                      transform transition-transform duration-300
                      ${hoveredCard === index ? 'translate-y-0' : 'translate-y-full'}
                    `} />
                  </button>
                </div>

                {/* Selection Indicator */}
                {selectedCard === index && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Hover Glow Effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/20 to-transparent blur-2xl rounded-2xl" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {journeys.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedCard(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${selectedCard === index 
                  ? 'w-8 bg-primary-500' 
                  : 'w-2 bg-neutral-300 dark:bg-secondary-600 hover:bg-neutral-400 dark:hover:bg-secondary-500'
                }
              `}
              aria-label={`Select ${journeys[index].title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourJourneySection;