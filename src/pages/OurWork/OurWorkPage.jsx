import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const OurWorkPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);
  const [heroRef, heroVisible] = useScrollAnimation();
  const [galleryRef, galleryVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  const categories = [
    { id: 'all', name: 'All Work', count: 120 },
    { id: 'collision', name: 'Collision Repair', count: 45 },
    { id: 'paint', name: 'Paint & Body', count: 32 },
    { id: 'restoration', name: 'Full Restoration', count: 18 },
    { id: 'custom', name: 'Custom Work', count: 25 }
  ];

  const portfolio = [
    {
      id: 1,
      category: 'collision',
      title: 'Mercedes-Benz S-Class Restoration',
      description: 'Complete front-end collision repair with OEM parts',
      beforeImage: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
      afterImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
      duration: '5 days',
      rating: 5.0,
      garage: 'Elite Auto Works, Accra'
    },
    {
      id: 2,
      category: 'paint',
      title: 'Toyota Camry Complete Respray',
      description: 'Full body paint job with ceramic coating',
      beforeImage: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      afterImage: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800',
      duration: '3 days',
      rating: 4.9,
      garage: 'Precision Paint Shop, Kumasi'
    },
    {
      id: 3,
      category: 'restoration',
      title: 'Classic BMW E30 Restoration',
      description: 'Complete restoration to factory specifications',
      beforeImage: 'https://images.unsplash.com/photo-1518987048-93e29699e79a?w=800',
      afterImage: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800',
      duration: '15 days',
      rating: 5.0,
      garage: 'Vintage Motors, Takoradi'
    },
    {
      id: 4,
      category: 'custom',
      title: 'Range Rover Sport Customization',
      description: 'Custom body kit installation and paint',
      beforeImage: 'https://images.unsplash.com/photo-1606611013016-969c19af27df?w=800',
      afterImage: 'https://images.unsplash.com/photo-1617654697012-22b7039ac10d?w=800',
      duration: '7 days',
      rating: 4.8,
      garage: 'Luxury Auto Customs, Accra'
    },
    {
      id: 5,
      category: 'collision',
      title: 'Honda Accord Side Impact Repair',
      description: 'Complete side panel replacement and paint matching',
      beforeImage: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
      afterImage: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800',
      duration: '4 days',
      rating: 4.9,
      garage: 'Quick Fix Garage, Cape Coast'
    },
    {
      id: 6,
      category: 'paint',
      title: 'Nissan Patrol Pearl White Finish',
      description: 'Premium pearl white paint with clear coat protection',
      beforeImage: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      afterImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
      duration: '3 days',
      rating: 5.0,
      garage: 'Color Masters, Tema'
    }
  ];

  const statistics = [
    { label: 'Vehicles Serviced', value: '15,000+', icon: '🚗' },
    { label: 'Happy Customers', value: '12,500+', icon: '😊' },
    { label: 'Partner Garages', value: '500+', icon: '🔧' },
    { label: 'Cities Covered', value: '25+', icon: '🌍' }
  ];

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className={`text-5xl md:text-6xl font-black mb-6 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our <span className="text-primary-400">Work</span> Speaks
          </h1>
          <p className={`text-xl text-neutral-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Explore our portfolio of transformations. From minor repairs to complete restorations, 
            we deliver excellence in every project.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-40 bg-white dark:bg-secondary-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-neutral-100 dark:bg-secondary-800 text-secondary-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-secondary-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section ref={galleryRef} className="py-20 bg-neutral-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((work, index) => (
              <div
                key={work.id}
                className={`group cursor-pointer transition-all duration-500 delay-${index * 100} ${
                  galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onClick={() => setSelectedWork(work)}
              >
                <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Before/After Slider */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 relative overflow-hidden">
                        <img 
                          src={work.beforeImage} 
                          alt="Before"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                        <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Before
                        </span>
                      </div>
                      <div className="w-1/2 relative overflow-hidden">
                        <img 
                          src={work.afterImage} 
                          alt="After"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
                        <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          After
                        </span>
                      </div>
                      {/* Center Divider */}
                      <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-white shadow-lg"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-500 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-neutral-300 mb-4">
                      {work.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="font-semibold">{work.rating}</span>
                        </span>
                        <span className="flex items-center gap-1 text-secondary-600 dark:text-neutral-400">
                          <span>⏱️</span>
                          <span>{work.duration}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-secondary-700">
                      <p className="text-sm text-secondary-600 dark:text-neutral-400">
                        <span className="font-medium">By:</span> {work.garage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our Impact in Numbers
            </h2>
            <p className={`text-xl opacity-90 transition-all duration-1000 delay-200 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Transforming vehicle services across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-500 delay-${index * 100} ${
                  statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <div className="text-5xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-secondary-600 dark:text-neutral-300 mb-8">
            Join thousands of satisfied customers who trust FITTA for their vehicle needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="shadow-xl hover:shadow-2xl"
            >
              Get Free Estimate
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate('/services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Work Detail Modal */}
      {selectedWork && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWork(null)}
        >
          <div 
            className="bg-white dark:bg-secondary-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-black/50 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-black/70 transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img 
                    src={selectedWork.beforeImage} 
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img 
                    src={selectedWork.afterImage} 
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                    After
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-secondary-900 dark:text-white">
                  {selectedWork.title}
                </h3>
                <p className="text-lg text-secondary-600 dark:text-neutral-300 mb-6">
                  {selectedWork.description}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-neutral-100 dark:bg-secondary-800 rounded-lg">
                    <div className="text-2xl mb-2">⏱️</div>
                    <div className="font-semibold">Duration</div>
                    <div className="text-secondary-600 dark:text-neutral-300">{selectedWork.duration}</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-100 dark:bg-secondary-800 rounded-lg">
                    <div className="text-2xl mb-2">⭐</div>
                    <div className="font-semibold">Rating</div>
                    <div className="text-secondary-600 dark:text-neutral-300">{selectedWork.rating}/5.0</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-100 dark:bg-secondary-800 rounded-lg">
                    <div className="text-2xl mb-2">🔧</div>
                    <div className="font-semibold">Service By</div>
                    <div className="text-secondary-600 dark:text-neutral-300">{selectedWork.garage}</div>
                  </div>
                </div>
                
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="w-full"
                >
                  Get Similar Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default OurWorkPage;