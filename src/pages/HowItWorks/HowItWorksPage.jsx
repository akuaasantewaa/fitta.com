import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const HowItWorksPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [heroRef, heroVisible] = useScrollAnimation();
  const [stepsRef, stepsVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();

  const steps = [
    {
      id: 1,
      title: "Report Your Issue",
      description: "Use our app or website to describe your vehicle problem. Upload photos, describe symptoms, or request emergency assistance.",
      icon: "📱",
      details: [
        "24/7 availability",
        "Photo damage assessment",
        "GPS location sharing",
        "Emergency priority handling"
      ]
    },
    {
      id: 2,
      title: "Get Matched",
      description: "Our AI-powered system instantly matches you with certified mechanics and garages near your location.",
      icon: "🎯",
      details: [
        "Verified garage partners",
        "Real-time availability",
        "Price transparency",
        "Customer ratings"
      ]
    },
    {
      id: 3,
      title: "Receive Service",
      description: "Choose your preferred garage or have a mechanic come to you. Track service progress in real-time.",
      icon: "🔧",
      details: [
        "Mobile mechanics available",
        "Live service tracking",
        "Quality guarantees",
        "Secure payments"
      ]
    },
    {
      id: 4,
      title: "Rate & Go",
      description: "Pay securely through the app, rate your experience, and get back on the road with confidence.",
      icon: "⭐",
      details: [
        "Cashless transactions",
        "Service warranty",
        "Loyalty rewards",
        "Service history"
      ]
    }
  ];

  const userTypes = [
    {
      title: "Vehicle Owners",
      icon: "🚗",
      benefits: [
        "Instant access to 500+ verified garages",
        "Transparent pricing before service",
        "Real-time tracking of repairs",
        "Digital service history",
        "24/7 emergency roadside assistance"
      ]
    },
    {
      title: "Garage Partners",
      icon: "🔧",
      benefits: [
        "Steady stream of customers",
        "Digital payment processing",
        "Business analytics dashboard",
        "Marketing support",
        "Training and certification programs"
      ]
    },
    {
      title: "Insurance Companies",
      icon: "📋",
      benefits: [
        "Streamlined claims processing",
        "Verified damage assessments",
        "Direct garage partnerships",
        "Fraud prevention tools",
        "Real-time claim tracking"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-primary-900 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
          <div className="absolute top-40 right-40 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl md:text-6xl font-black mb-6 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              How FITTA Works
            </span>
          </h1>
          <p className={`text-xl text-secondary-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            From breakdown to back on the road in 4 simple steps. Experience the future of vehicle services in Africa.
          </p>
          <div className={`transition-all duration-1000 delay-400 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Your Journey to <span className="text-primary-500">Hassle-Free</span> Repairs
            </h2>
            <p className={`text-xl text-secondary-600 dark:text-neutral-300 transition-all duration-1000 delay-200 ${
              stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Simple, transparent, and reliable
            </p>
          </div>

          {/* Desktop Steps */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 dark:from-primary-800 dark:via-primary-700 dark:to-primary-800 transform -translate-y-1/2"></div>
              
              <div className="relative grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`relative transition-all duration-500 delay-${index * 100} ${
                      stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    {/* Step Circle */}
                    <div className="flex justify-center mb-6">
                      <button
                        onClick={() => setActiveStep(index)}
                        className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all duration-300 ${
                          activeStep === index
                            ? 'bg-primary-500 text-white shadow-lg scale-110'
                            : 'bg-white dark:bg-secondary-800 text-primary-500 shadow-md hover:shadow-lg hover:scale-105'
                        }`}
                      >
                        {step.icon}
                      </button>
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">
                        Step {step.id}: {step.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-neutral-300 mb-4">
                        {step.description}
                      </p>
                      
                      {/* Details (shown on active) */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <ul className="text-sm text-left space-y-1 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-primary-500">✓</span>
                              <span className="text-secondary-700 dark:text-neutral-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6 transition-all duration-500 delay-${index * 100} ${
                  stepsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-secondary-900 dark:text-white">
                      Step {step.id}: {step.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-neutral-300 mb-3">
                      {step.description}
                    </p>
                    <ul className="text-sm space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-primary-500">✓</span>
                          <span className="text-secondary-700 dark:text-neutral-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section ref={featuresRef} className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Built for <span className="text-primary-500">Everyone</span>
            </h2>
            <p className={`text-xl text-secondary-600 dark:text-neutral-300 transition-all duration-1000 delay-200 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Tailored solutions for every stakeholder
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <div
                key={type.title}
                className={`bg-white dark:bg-secondary-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 delay-${index * 100} ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                    {type.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary-500 mt-1">✓</span>
                      <span className="text-secondary-600 dark:text-neutral-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied users across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-white text-primary-600 hover:bg-neutral-100"
            >
              Start Today
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate('/services')}
              className="text-white border-white hover:bg-white/10"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;