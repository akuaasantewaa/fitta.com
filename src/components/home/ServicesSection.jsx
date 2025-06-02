import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ServicesSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef(null);
  
  // Scroll animations
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const services = [
    {
      id: 1,
      title: "Collision Repair Service",
      description: "In the event of a collision, trust the experienced team at FITTA to restore your vehicle to its pre-accident condition.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop",
      color: "from-primary-500 to-primary-600",
      features: ["Expert body work", "Paint matching", "Frame straightening", "Insurance assistance"]
    },
    {
      id: 2,
      title: "Custom Work",
      description: "We specialize in providing custom paint services for all types of vehicles. Our team is dedicated to delivering exceptional craftsmanship.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2074&auto=format&fit=crop",
      color: "from-secondary-600 to-secondary-700",
      features: ["Custom paint jobs", "Body modifications", "Performance upgrades", "Interior customization"]
    },
    {
      id: 3,
      title: "24/7 Towing and Support",
      description: "Our 24×7 towing services are designed to cater to all your emergency towing needs. Whether your car has broken down unexpectedly.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop",
      color: "from-primary-500 to-primary-600",
      features: ["24/7 availability", "Fast response time", "Nationwide coverage", "Flatbed & wheel-lift"]
    },
    {
      id: 4,
      title: "Routine Maintenance",
      description: "Keep your vehicle running smoothly with our comprehensive maintenance services. From oil changes to brake inspections.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2070&auto=format&fit=crop",
      color: "from-secondary-600 to-secondary-700",
      features: ["Oil changes", "Tire rotation", "Brake service", "Filter replacement"]
    },
    {
      id: 5,
      title: "Insurance Claims",
      description: "We work directly with your insurance company to streamline the claims process and get you back on the road faster.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      color: "from-primary-500 to-primary-600",
      features: ["Direct billing", "Claims assistance", "Damage assessment", "Warranty coverage"]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth || 0;
      const gap = 24; // gap-6 = 24px
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % services.length;
    scrollToIndex(newIndex);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-secondary-900 dark:to-secondary-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={sectionRef} className="flex items-center justify-between mb-12">
          <div className={`transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-secondary-900 dark:text-white mb-2">
              Our Services
            </h2>
            <div className={`h-1 bg-primary-500 rounded-full transition-all duration-1000 delay-300 ${sectionVisible ? 'w-20' : 'w-0'}`}></div>
          </div>
          
          {/* Navigation Arrows */}
          <div className={`flex items-center gap-2 transition-all duration-1000 delay-500 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <button
              onClick={handlePrevious}
              className="p-3 bg-white dark:bg-secondary-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              aria-label="Previous service"
            >
              <svg className="w-5 h-5 text-secondary-600 dark:text-neutral-300 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-primary-500 rounded-lg shadow-md hover:shadow-lg hover:bg-primary-600 transition-all duration-300 group"
              aria-label="Next service"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Carousel */}
        <div ref={cardsRef} className="relative">
          <div 
            ref={scrollContainerRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory transition-all duration-1000 ${cardsVisible ? 'opacity-100' : 'opacity-0'}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`min-w-[350px] md:min-w-[400px] snap-start group transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 bg-primary-500 text-white p-3 rounded-xl">
                      {service.icon}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-neutral-300 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-secondary-600 dark:text-neutral-400">
                          <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="primary"
                      size="sm"
                      onClick={() => navigate('/services')}
                      className="w-full group/btn"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-primary-500' 
                    : 'w-1.5 bg-secondary-300 dark:bg-secondary-600 hover:bg-secondary-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/services')}
            className="min-w-[200px]"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;