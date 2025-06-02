import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';
import { Card, CardContent, CardDescription, CardTitle } from '../../components/common/Card';

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userType } = useAuth();

  const userTypes = [
    {
      id: 'vehicle-owner',
      title: 'Vehicle Owner',
      description: 'Get instant roadside assistance and manage your vehicle services',
      icon: '🚗',
      path: '/auth/vehicle-owner',
      features: ['24/7 Emergency Support', 'Real-time Tracking', 'Service History'],
      color: 'primary'
    },
    {
      id: 'garage-partner',
      title: 'Garage Partner',
      description: 'Join our network and grow your automotive service business',
      icon: '🔧',
      path: '/auth/garage-partner',
      features: ['Expand Customer Base', 'Digital Tools', 'Secure Payments'],
      color: 'secondary'
    },
    {
      id: 'insurance',
      title: 'Insurance Company',
      description: 'Streamline claims processing with verified service providers',
      icon: '🛡️',
      path: '/auth/insurance',
      features: ['Faster Claims', 'Verified Reports', 'Cost Reduction'],
      color: 'primary'
    }
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Instant Response',
      description: 'Get connected to the nearest available mechanic within minutes of your request'
    },
    {
      icon: '🔒',
      title: 'Verified Partners',
      description: 'All service providers are thoroughly vetted, certified, and rated by our community'
    },
    {
      icon: '📱',
      title: 'Multi-Channel Access',
      description: 'Request services via web app, WhatsApp, SMS, or our mobile application'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees - see upfront pricing and pay securely through our platform'
    },
    {
      icon: '📊',
      title: 'Real-time Tracking',
      description: 'Track your service provider in real-time and get live updates on progress'
    },
    {
      icon: '🇬🇭',
      title: 'Built for Africa',
      description: 'Designed specifically for African roads, conditions, and local requirements'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Vehicles Served' },
    { number: '500+', label: 'Partner Garages' },
    { number: '15', label: 'Cities Covered' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const handleGetStarted = (userTypePath) => {
    if (isAuthenticated) {
      navigate(`/${userType}`);
    } else {
      navigate(userTypePath);
    }
  };

  return (
    <Layout headerTransparent={true}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-secondary-900 dark:to-secondary-800">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 text-balance uppercase tracking-tight">
            Revolutionary Vehicle
            <span className="block text-5xl md:text-7xl text-primary-500 mt-2">
              Services Platform
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 dark:text-neutral-300 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
            Connect with certified mechanics instantly. Get roadside assistance in minutes. 
            Streamline insurance claims. Built for the African automotive ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="primary" 
              size="lg" 
              glow
              onClick={() => handleGetStarted('/auth/vehicle-owner')}
              className="min-w-[280px]"
            >
              Get Emergency Help
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => navigate('/how-it-works')}
              className="min-w-[280px]"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-4xl md:text-5xl font-black text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-secondary-600 dark:text-neutral-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-32 bg-white dark:bg-secondary-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">
              Choose Your Journey
            </h2>
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto font-medium">
              Whether you need help, want to help others, or manage the process, 
              FITTA has a solution designed for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {userTypes.map((userType, index) => (
              <Card 
                key={userType.id}
                className="group cursor-pointer h-full hover:scale-105 transition-all duration-500 relative overflow-hidden"
                onClick={() => handleGetStarted(userType.path)}
                glow={index === 0}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <CardContent className="p-10 h-full flex flex-col relative z-10">
                  <div className="text-7xl mb-8 group-hover:scale-110 transition-transform duration-300">
                    {userType.icon}
                  </div>
                  <CardTitle className="text-3xl font-black mb-4 uppercase">{userType.title}</CardTitle>
                  <CardDescription className="mb-8 flex-1 text-base">
                    {userType.description}
                  </CardDescription>
                  
                  <ul className="space-y-3 mb-8">
                    {userType.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm font-medium text-secondary-600 dark:text-neutral-300">
                        <span className="text-primary-500 mr-3 text-lg">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={index === 0 ? 'primary' : 'secondary'}
                    className="w-full"
                    size="md"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-neutral-50 to-white dark:from-secondary-800 dark:to-secondary-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">
              Why Choose FITTA?
            </h2>
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto font-medium">
              We're not just another service platform. We're revolutionizing how vehicle 
              services work across Africa with cutting-edge technology and local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-secondary-800 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-neutral-100 dark:border-secondary-700">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{feature.title}</h3>
                <p className="text-secondary-600 dark:text-neutral-300 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary-500 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">
            Ready to Transform Your Vehicle Experience?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-95 font-medium">
            Join thousands of satisfied customers across Ghana who trust FITTA 
            for their vehicle service needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => handleGetStarted('/auth/vehicle-owner')}
              className="min-w-[280px] bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Start Now - It's Free
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => navigate('/contact')}
              className="min-w-[280px] text-white border-2 border-white/50 hover:bg-white hover:text-primary-600"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;