import { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutStorySection = () => {
  const [activeStory, setActiveStory] = useState(0);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [storyRef, storyVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const stories = [
    {
      id: "problem",
      title: "The Problem",
      icon: "❗",
      description: "Vehicle breakdowns in Ghana meant hours of uncertainty, unreliable mechanics, and unclear pricing. We experienced this frustration firsthand.",
      illustration: (
        <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 dark:from-red-500/20 dark:to-red-600/20 rounded-2xl p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">😤</div>
            <div className="w-24 h-24 mx-auto border-4 border-red-300 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "solution", 
      title: "Our Solution",
      icon: "💡",
      description: "FITTA bridges the gap with technology—connecting verified mechanics to vehicle owners through a trusted platform with transparent pricing.",
      illustration: (
        <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-500/20 dark:to-primary-600/20 rounded-2xl p-8 flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-primary-500 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              ✓
            </div>
          </div>
        </div>
      )
    },
    {
      id: "impact",
      title: "Our Impact", 
      icon: "🚀",
      description: "Today, we serve thousands of vehicles across Ghana with certified partners, bringing reliability and trust to automotive services.",
      illustration: (
        <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 dark:from-green-500/20 dark:to-green-600/20 rounded-2xl p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10K+</div>
                <div className="text-xs text-green-500">Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-xs text-green-500">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15</div>
                <div className="text-xs text-green-500">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-xs text-green-500">Support</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section 
      id="story-section"
      className="py-24 bg-neutral-50 dark:bg-secondary-800 relative overflow-hidden"
    >
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
            <h2 className="text-4xl md:text-5xl font-black text-secondary-900 dark:text-white mb-6">
              <span className="block">Our</span>
              <span className="text-primary-500">Story</span>
            </h2>
            
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              From frustration to innovation—how we're transforming vehicle services across Africa.
            </p>
          </div>

          {/* Story Navigation */}
          <div 
            className={`
              flex justify-center mb-12 transition-all duration-1000 delay-300
              ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <div className="inline-flex p-1 bg-white dark:bg-secondary-700 rounded-2xl shadow-lg">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(index)}
                  className={`
                    px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2
                    ${activeStory === index 
                      ? 'bg-primary-500 text-white shadow-lg' 
                      : 'text-secondary-600 dark:text-neutral-400 hover:text-secondary-900 dark:hover:text-white'
                    }
                  `}
                >
                  <span className="text-lg">{story.icon}</span>
                  {story.title}
                </button>
              ))}
            </div>
          </div>

          {/* Story Content */}
          <div 
            ref={storyRef}
            className={`
              transition-all duration-1000 delay-500
              ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
          >
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`
                  transition-all duration-500 ease-in-out
                  ${activeStory === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 absolute transform translate-y-8 pointer-events-none'
                  }
                `}
              >
                <div className="bg-white dark:bg-secondary-900 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-secondary-700 max-w-5xl mx-auto">
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                          {story.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-secondary-900 dark:text-white">
                            {story.title}
                          </h3>
                          <div className="w-20 h-1 bg-primary-500 rounded-full mt-2" />
                        </div>
                      </div>

                      <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                        {story.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="flex items-center gap-2">
                        {stories.map((_, idx) => (
                          <div
                            key={idx}
                            className={`
                              h-2 rounded-full transition-all duration-300
                              ${idx === activeStory ? 'w-8 bg-primary-500' : 'w-2 bg-neutral-300 dark:bg-secondary-600'}
                            `}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative aspect-square max-w-md mx-auto">
                      {story.illustration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className={`
            mt-16 text-center transition-all duration-1000 delay-700
            ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="max-w-3xl mx-auto bg-primary-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-black mb-4">Our Mission</h3>
              <p className="text-lg text-primary-100">
                To create a professional, scalable system that transforms how vehicle services 
                are delivered across Africa, setting new standards for trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;