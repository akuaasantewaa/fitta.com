import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const WhyChooseUsSection = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    date: '',
    message: ''
  });

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Professional-Grade Service",
      description: "FITTA offers professional-grade collision repair services from experienced technicians, using the latest tools and techniques to ensure the highest quality results.",
      stat: "10K+",
      statLabel: "Vehicles Serviced"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Competitive Pricing",
      description: "We offer competitive rates and affordable pricing options designed to fit any budget without compromising on quality or service excellence.",
      stat: "30%",
      statLabel: "Average Savings"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Expert Technicians",
      description: "Our staff specializes in a wide range of services including paint protection, ceramic coating, window tinting, and wheel refinishing.",
      stat: "500+",
      statLabel: "Certified Partners"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Advanced Technology",
      description: "Our technicians have the knowledge and skill necessary to perform any kind of repair using cutting-edge diagnostic tools.",
      stat: "15min",
      statLabel: "Average Response"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Certified Excellence",
      description: "All technicians are highly trained in automotive best practices while performing repairs according to OEM specifications.",
      stat: "99.9%",
      statLabel: "Customer Satisfaction"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 dark:from-secondary-950 dark:via-black dark:to-secondary-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            <h2 className={`text-4xl md:text-5xl font-black text-white mb-8 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              Why Choose <span className="text-primary-500">FITTA?</span>
            </h2>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl transition-all cursor-pointer ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} ${
                    activeFeature === index
                      ? 'bg-white/10 backdrop-blur-sm border border-primary-500/50 shadow-2xl shadow-primary-500/20'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                  }`}
                  style={{ 
                    transitionDuration: '700ms',
                    transitionDelay: `${index * 150}ms` 
                  }}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/50'
                        : 'bg-white/10 text-primary-400 group-hover:bg-primary-500/20'
                    }`}>
                      {feature.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
                        {feature.title}
                        {activeFeature === index && (
                          <span className="text-2xl font-black text-primary-500">
                            {feature.stat}
                            <span className="text-xs font-normal text-primary-400 block">
                              {feature.statLabel}
                            </span>
                          </span>
                        )}
                      </h3>
                      <p className={`text-sm transition-all duration-300 ${
                        activeFeature === index
                          ? 'text-neutral-300 opacity-100'
                          : 'text-neutral-400 opacity-70 line-clamp-2'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeFeature === index && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-500 rounded-l-2xl"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/about')}
                className="shadow-xl shadow-primary-500/25"
              >
                Learn More About Us
              </Button>
              <div className="text-white/60 text-sm">
                Trusted by <span className="font-bold text-white">10,000+</span> customers
              </div>
            </div>
          </div>

          {/* Right Content - Estimate Form */}
          <div ref={formRef} className={`relative transition-all duration-1000 delay-300 ${formVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-1'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-secondary-800 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Get Free Estimate
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-secondary-700 border border-neutral-200 dark:border-secondary-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-secondary-700 border border-neutral-200 dark:border-secondary-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                    required
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-secondary-700 border border-neutral-200 dark:border-secondary-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  required
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-secondary-700 border border-neutral-200 dark:border-secondary-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 appearance-none"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="collision-repair">Collision Repair</option>
                  <option value="custom-work">Custom Work</option>
                  <option value="towing">24/7 Towing</option>
                  <option value="maintenance">Routine Maintenance</option>
                  <option value="insurance">Insurance Claims</option>
                </select>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="vehicle"
                    placeholder="Year, Make & Model"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-secondary-700 border border-neutral-200 dark:border-secondary-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-secondary-700 border border-neutral-200 dark:border-secondary-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Describe Issues and Services Required"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-secondary-700 border border-neutral-200 dark:border-secondary-600 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                ></textarea>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Submit Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>

                <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;