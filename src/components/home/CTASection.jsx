import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const CTASection = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Scroll animations
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [buttonsRef, buttonsVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const section = document.getElementById('cta-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const stats = [
    { value: '24/7', label: 'Emergency Support' },
    { value: '30min', label: 'Average Response' },
    { value: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section 
      id="cta-section"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-secondary-900 dark:via-secondary-800 dark:to-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-500/30 dark:bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-600/30 dark:bg-primary-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Interactive Light Effect */}
        {isHovered && (
          <div
            className="absolute w-64 h-64 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
            style={{
              left: `${mousePosition.x - 128}px`,
              top: `${mousePosition.y - 128}px`,
            }}
          />
        )}

        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-slide-left"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div ref={sectionRef} className="mb-12">
            <h2 className={`text-5xl md:text-7xl font-black text-secondary-900 dark:text-white mb-6 leading-tight transition-all duration-1000 ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <span className={`inline-block transition-all duration-700 ${sectionVisible ? 'translate-y-0' : 'translate-y-10'}`}>Ready to Transform Your</span>
              <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 animate-gradient transition-all duration-700 delay-300 ${sectionVisible ? 'translate-y-0' : 'translate-y-10'}`}>
                Vehicle Experience?
              </span>
            </h2>
            <p className={`text-xl md:text-2xl text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Join thousands of satisfied customers across Ghana who trust FITTA 
              for their vehicle service needs.
            </p>
          </div>

          {/* Stats Row */}
          <div ref={statsRef} className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`group transform hover:scale-105 transition-all duration-300 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl group-hover:bg-primary-500/30 transition-all duration-300"></div>
                  <div className="relative bg-white dark:bg-white/5 backdrop-blur-sm border border-neutral-200 dark:border-white/10 rounded-2xl p-6 shadow-lg dark:shadow-none">
                    <div className="text-3xl md:text-4xl font-black text-primary-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary-600 dark:text-neutral-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1000 ${buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Primary CTA */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => navigate('/auth/vehicle-owner')}
                className="relative min-w-[280px] bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  <span>Start Now - It's Free</span>
                  <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </div>

            {/* Secondary CTA */}
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => navigate('/contact')}
              className="min-w-[280px] text-secondary-700 dark:text-white border-2 border-secondary-300 dark:border-white/30 hover:border-secondary-500 dark:hover:border-white/60 hover:bg-secondary-100 dark:hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact Sales Team</span>
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-secondary-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Instant activation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-white dark:bg-primary-500/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-200 dark:border-primary-500/20 shadow-lg dark:shadow-none">
          <span className="text-2xl">🚗</span>
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float delay-1000">
        <div className="w-24 h-24 bg-white dark:bg-primary-500/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-200 dark:border-primary-500/20 shadow-lg dark:shadow-none">
          <span className="text-3xl">🔧</span>
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-white dark:bg-primary-500/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-neutral-200 dark:border-primary-500/20 shadow-lg dark:shadow-none">
          <span className="text-xl">⚡</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slide-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }
        
        .animate-slide-left {
          animation: slide-left 8s linear infinite;
        }
        
        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;