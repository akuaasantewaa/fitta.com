import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import RoadSideAssistance from "../../assets/images/hero2.jpg";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const HeroSection = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const slides = [
    {
      title: "Your One Stop For",
      highlight: "All Collision Needs!",
      description: "Premium automotive care across Africa.",
      image:
        "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2940&auto=format&fit=crop",
      overlay: "from-black/70 via-black/50 to-transparent",
    },
    {
      title: "24/7 Emergency",
      highlight: "Roadside Assistance",
      description: "Instant help, anywhere, anytime.",
      image: RoadSideAssistance,
      overlay: "from-primary-900/70 via-primary-800/50 to-transparent",
    },
    {
      title: "Streamlined",
      highlight: "Insurance Claims",
      description: "Fast, transparent, hassle-free.",
      image:
        "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da2f?q=80&w=2940&auto=format&fit=crop",
      overlay: "from-secondary-900/70 via-secondary-800/50 to-transparent",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className={`relative h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
            />

            {/* Additional dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Hero Content */}
      <div ref={contentRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Slide Indicators */}
          <div className={`flex space-x-2 mb-6 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "w-10 bg-primary-500"
                    : "w-5 bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="space-y-4">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="block">{slides[activeSlide].title}</span>
              <span className="block text-primary-500">
                {slides[activeSlide].highlight}
              </span>
            </h1>

            <p className={`text-lg md:text-xl text-white/80 max-w-2xl transition-all duration-700 delay-400 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {slides[activeSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 pt-6 transition-all duration-700 delay-600 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate("/auth/vehicle-owner")}
                className="min-w-[180px] bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/25"
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>

              <Button
                variant="glass"
                size="md"
                onClick={() => navigate("/services")}
                className="min-w-[180px] bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20"
              >
                Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center items-center space-x-8 md:space-x-12 text-white/80 text-xs md:text-sm">
            <div className="text-center">
              <span className="font-bold text-white">10K+</span>
              <span className="ml-1">Vehicles Served</span>
            </div>
            <span className="w-px h-4 bg-white/30"></span>
            <div className="text-center">
              <span className="font-bold text-white">500+</span>
              <span className="ml-1">Partner Garages</span>
            </div>
            <span className="w-px h-4 bg-white/30 hidden md:block"></span>
            <div className="text-center hidden md:block">
              <span className="font-bold text-white">24/7</span>
              <span className="ml-1">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
