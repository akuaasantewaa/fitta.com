import { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutTestimonialsSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle testimonial

  const testimonials = [
    {
      text: "FITTA has transformed the way we handle vehicle emergencies. The automation features saved us hours of manual work every week, and the analytics have given us insights we never had before.",
      author: "Kwame Asante",
      role: "Fleet Operations Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      text: "As a mechanic, FITTA has given me steady work and helped me grow my business. The platform connects me with genuine customers and handles all the payment hassles professionally.",
      author: "Ama Mensah",
      role: "Certified Auto Technician",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      text: "This platform has transformed the way we handle customer interactions. The roadside assistance features saved us hours of manual work every week, and the analytics have given us insights we never had before.",
      author: "Michael Carter",
      role: "Customer Success Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    },
    {
      text: "FITTA's 24/7 roadside assistance saved my business when our delivery truck broke down. Professional service, fair pricing, and incredible response time.",
      author: "Grace Adjei",
      role: "Business Development Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      text: "The transparency and reliability of FITTA's service network gives us confidence in recommending them to our corporate clients for fleet management.",
      author: "Joseph Nkrumah",
      role: "Logistics Coordinator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-secondary-900 dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className={`
                text-4xl md:text-5xl font-medium text-neutral-300 dark:text-neutral-400 mb-2 transition-all duration-1000
                ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              What our customers
            </h2>
            <h3 
              className={`
                text-3xl md:text-4xl font-medium text-neutral-300 dark:text-neutral-400 transition-all duration-1000 delay-200
                ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              are saying
            </h3>
          </div>

          {/* Avatars Horizontal Layout */}
          <div 
            className={`
              relative mb-12 transition-all duration-1000 delay-400
              ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            <div className="flex justify-center items-center gap-4 md:gap-8">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                const distance = Math.abs(index - activeIndex);
                const isAdjacent = distance === 1;
                const isFar = distance >= 2;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      relative transition-all duration-500 transform
                      ${isActive ? 'scale-125 z-20' : isAdjacent ? 'scale-100 z-10' : 'scale-90 z-0'}
                      ${isFar ? 'opacity-60' : 'opacity-100'}
                    `}
                  >
                    <div className={`
                      rounded-full overflow-hidden border-2 transition-all duration-300
                      ${isActive 
                        ? 'w-20 h-20 md:w-24 md:h-24 border-primary-500' 
                        : isAdjacent 
                          ? 'w-16 h-16 md:w-20 md:h-20 border-neutral-600' 
                          : 'w-14 h-14 md:w-16 md:h-16 border-neutral-700'
                      }
                    `}>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Testimonial Content */}
          <div 
            className={`
              relative max-w-4xl mx-auto transition-all duration-1000 delay-600
              ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-14 h-14 bg-neutral-800/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-neutral-700 dark:hover:bg-neutral-800 group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-14 h-14 bg-neutral-800/80 dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-neutral-700 dark:hover:bg-neutral-800 group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center px-4 lg:px-16">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === activeIndex 
                        ? 'opacity-100' 
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl lg:text-2xl text-neutral-400 dark:text-neutral-500 leading-relaxed mb-8 font-light">
                      {testimonial.text}
                    </p>

                    {/* Author Info */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {testimonial.author}
                      </h4>
                      <p className="text-neutral-500 dark:text-neutral-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonialsSection;