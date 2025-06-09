import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderEnhanced from '../../components/common/HeaderEnhanced';
import FooterEnhanced from '../../components/common/FooterEnhanced';
import Button from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useAuth } from '../../context/AuthContext';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 });
  const [mainServicesRef, mainServicesVisible] = useScrollAnimation({ threshold: 0.1 });
  const [experienceRef, experienceVisible] = useScrollAnimation({ threshold: 0.1 });
  const [processRef, processVisible] = useScrollAnimation({ threshold: 0.1 });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.1 });

  // Main services data
  const mainServices = [
    {
      id: 'collision',
      title: 'Collision Repair',
      category: 'repair',
      description: 'Expert collision repair services to restore your vehicle to pre-accident condition with precision and care.',
      icon: '🚗',
      features: [
        'Frame straightening & alignment',
        'Body panel repair & replacement',
        'Paint matching & refinishing',
        'Insurance claim assistance'
      ],
      price: 'Quote-based',
      duration: '2-7 days',
      highlighted: true,
      color: 'primary'
    },
    {
      id: 'exhaust',
      title: 'Car Exhaust Repair',
      category: 'repair',
      description: 'Comprehensive exhaust system diagnostics and repair to ensure optimal performance and emissions compliance.',
      icon: '💨',
      features: [
        'Exhaust leak detection',
        'Catalytic converter service',
        'Muffler repair & replacement',
        'Performance exhaust upgrades'
      ],
      price: 'From GHS 350',
      duration: '2-4 hours',
      color: 'secondary'
    },
    {
      id: 'suspension',
      title: 'Suspension Repair',
      category: 'repair',
      description: 'Complete suspension system service for smooth handling, improved safety, and comfortable driving experience.',
      icon: '🔧',
      features: [
        'Shock absorber replacement',
        'Spring & strut service',
        'Wheel alignment',
        'Steering component repair'
      ],
      price: 'From GHS 450',
      duration: '3-5 hours',
      color: 'primary'
    },
    {
      id: 'maintenance',
      title: 'Routine Maintenance',
      category: 'maintenance',
      description: 'Keep your vehicle running smoothly with our comprehensive preventive maintenance services.',
      icon: '🛠️',
      features: [
        'Oil & filter changes',
        'Brake inspection & service',
        'Tire rotation & balancing',
        'Multi-point inspection'
      ],
      price: 'From GHS 150',
      duration: '1-2 hours',
      color: 'secondary'
    },
    {
      id: 'custom',
      title: 'Custom Paint & Body Work',
      category: 'custom',
      description: 'Transform your vehicle with our professional custom paint and body modification services.',
      icon: '🎨',
      features: [
        'Custom paint designs',
        'Body kit installation',
        'Chrome detailing',
        'Interior customization'
      ],
      price: 'Quote-based',
      duration: '3-14 days',
      color: 'primary'
    },
    {
      id: 'emergency',
      title: '24/7 Emergency Service',
      category: 'emergency',
      description: 'Round-the-clock emergency assistance including towing, jumpstarts, and roadside repairs.',
      icon: '🚨',
      features: [
        '24/7 availability',
        'GPS-tracked response',
        'Flatbed & wheel-lift towing',
        'On-site minor repairs'
      ],
      price: 'From GHS 200',
      duration: '30-60 min response',
      color: 'secondary'
    }
  ];

  // Service categories
  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'repair', label: 'Repairs' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'custom', label: 'Custom Work' },
    { id: 'emergency', label: 'Emergency' }
  ];

  // Filter services by category
  const filteredServices = activeCategory === 'all' 
    ? mainServices 
    : mainServices.filter(service => service.category === activeCategory);

  // Working process steps
  const processSteps = [
    {
      number: '01',
      title: 'Make An Appointment',
      description: 'Book your service online or call us. Select your preferred date and time, and provide vehicle details.',
      icon: '📅'
    },
    {
      number: '02',
      title: 'Select Your Services',
      description: 'Choose from our comprehensive range of services. Our experts will guide you to the best solutions.',
      icon: '🔧'
    },
    {
      number: '03',
      title: 'Get Professional Service',
      description: 'Our certified technicians work on your vehicle using the latest tools and genuine parts.',
      icon: '👨‍🔧'
    },
    {
      number: '04',
      title: 'Pick Up Your Vehicle',
      description: 'Collect your serviced vehicle with detailed report and warranty. Enjoy the smooth ride!',
      icon: '🚗'
    }
  ];

  // Statistics
  const stats = [
    { value: '10+', label: 'Years of Experience', icon: '📅' },
    { value: '15K+', label: 'Happy Customers', icon: '😊' },
    { value: '500+', label: 'Certified Partners', icon: '🤝' },
    { value: '98%', label: 'Satisfaction Rate', icon: '⭐' }
  ];

  // Scroll to booking section
  const handleBookService = (serviceId) => {
    if (isAuthenticated) {
      navigate('/vehicle-owner/book-service', { state: { serviceId } });
    } else {
      navigate('/auth/vehicle-owner', { state: { redirectTo: '/vehicle-owner/book-service', serviceId } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-secondary-900">
      {/* Header */}
      <HeaderEnhanced transparent={false} />

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our Awesome And Super
              <span className="block text-secondary-400 mt-2">Repair Services</span>
            </h1>
            
            <p className={`text-xl text-white/90 mb-8 transition-all duration-1000 delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Professional automotive services delivered by certified experts across Ghana.
              Experience quality, reliability, and innovation in vehicle care.
            </p>

            <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-400 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/vehicle-owner/book-service')}
                className="min-w-[200px]"
              >
                Book Service Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => navigate('/contact')}
                className="min-w-[200px]"
              >
                Get Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white dark:text-secondary-900" preserveAspectRatio="none" viewBox="0 0 1440 48" fill="currentColor">
            <path d="M0,48L60,42.7C120,37,240,27,360,26.7C480,27,600,37,720,40C840,43,960,37,1080,32C1200,27,1320,21,1380,18.7L1440,16L1440,48L1380,48C1320,48,1200,48,1080,48C960,48,840,48,720,48C600,48,480,48,360,48C240,48,120,48,60,48L0,48Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section Wrapper */}
      <div className="relative">
        {/* Category Filter - Only sticky within services section */}
        <section className="py-8 bg-white dark:bg-secondary-900 sticky top-20 z-30 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-neutral-100 dark:bg-secondary-800 text-secondary-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-secondary-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

      {/* Main Services Grid */}
      <section ref={mainServicesRef} className="py-20 bg-white dark:bg-secondary-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group transition-all duration-700 ${
                  mainServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className={`h-full ${
                  service.highlighted 
                    ? 'ring-2 ring-primary-500 shadow-xl scale-105' 
                    : 'hover:shadow-xl'
                } transition-all duration-300 overflow-hidden`}>
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-br ${
                    service.color === 'primary' 
                      ? 'from-primary-500 to-primary-600' 
                      : 'from-secondary-500 to-secondary-600'
                  } text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -top-12 -right-12 w-40 h-40 bg-white rounded-full"></div>
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90">{service.description}</p>
                    </div>

                    {service.highlighted && (
                      <div className="absolute top-4 right-4 bg-secondary-400 text-secondary-900 text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-900 dark:text-white mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-secondary-600 dark:text-neutral-300">
                            <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Duration */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-neutral-100 dark:bg-secondary-800 rounded-lg p-3">
                        <p className="text-xs text-secondary-500 dark:text-neutral-400 mb-1">Starting Price</p>
                        <p className="font-bold text-secondary-900 dark:text-white">{service.price}</p>
                      </div>
                      <div className="bg-neutral-100 dark:bg-secondary-800 rounded-lg p-3">
                        <p className="text-xs text-secondary-500 dark:text-neutral-400 mb-1">Duration</p>
                        <p className="font-bold text-secondary-900 dark:text-white">{service.duration}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={service.highlighted ? 'primary' : 'secondary'}
                      size="md"
                      onClick={() => handleBookService(service.id)}
                      className="w-full group/btn"
                    >
                      Book This Service
                      <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-secondary-800 dark:to-secondary-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className={`relative transition-all duration-1000 ${
              experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=600&auto=format&fit=crop" 
                  alt="Professional mechanic" 
                  className="rounded-2xl shadow-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop" 
                  alt="Car service" 
                  className="rounded-2xl shadow-xl mt-8"
                />
              </div>
              
              {/* Stats Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-black mb-1">10+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-1000 delay-200 ${
              experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-black text-secondary-900 dark:text-white mb-6">
                Get A New Experience With
                <span className="text-primary-500 block mt-2">FITTA Services</span>
              </h2>
              
              <p className="text-lg text-secondary-600 dark:text-neutral-300 mb-8">
                Experience automotive excellence with FITTA's comprehensive service network. 
                Our certified technicians combine expertise with cutting-edge technology to 
                deliver superior results every time.
              </p>

              {/* Skills Progress */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-secondary-900 dark:text-white">Professional Service Skill</span>
                    <span className="text-primary-500 font-bold">90%</span>
                  </div>
                  <div className="h-3 bg-neutral-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-secondary-900 dark:text-white">Car Cleaning and Painting Skill</span>
                    <span className="text-primary-500 font-bold">85%</span>
                  </div>
                  <div className="h-3 bg-neutral-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/about')}
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section ref={processRef} className="py-20 bg-secondary-900 dark:bg-secondary-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black text-white mb-4 transition-all duration-1000 ${
              processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our Unique And Different
              <span className="block text-secondary-400 mt-2">Working Strategy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="bg-white dark:bg-secondary-800 p-6 h-full hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 bg-primary-500 text-white text-3xl font-black w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-neutral-300">
                    {step.description}
                  </p>

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-1 bg-primary-500/30"></div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={statsRef} className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Experience Premium Service?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Book your service today and join thousands of satisfied customers who trust FITTA for their vehicle needs.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  variant="solid"
                  size="lg"
                  onClick={() => navigate('/vehicle-owner/book-service')}
                  className="bg-white text-secondary-600 hover:bg-neutral-100 min-w-[200px]"
                >
                  Book Service Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="min-w-[200px] text-white border-white/30 hover:bg-white/10"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <FooterEnhanced />
    </div>
  );
};

export default ServicesPage;