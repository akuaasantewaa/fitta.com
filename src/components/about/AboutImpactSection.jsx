import { useState, useEffect } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutImpactSection = () => {
  const [counters, setCounters] = useState({
    vehicles: 0,
    partners: 0,
    cities: 0,
    satisfaction: 0
  });
  
  // Scroll animations
  const [impactRef, impactVisible] = useScrollAnimation({ threshold: 0.3, once: true });

  const impactMetrics = [
    {
      id: "vehicles",
      number: 10000,
      suffix: "+",
      label: "Vehicles Served",
      description: "Happy customers across Ghana",
      icon: "🚗",
      color: "text-primary-500"
    },
    {
      id: "partners",
      number: 500,
      suffix: "+", 
      label: "Certified Partners",
      description: "Trusted mechanics nationwide",
      icon: "🔧",
      color: "text-primary-500"
    },
    {
      id: "cities",
      number: 15,
      suffix: "",
      label: "Cities Covered",
      description: "Expanding across Ghana",
      icon: "🌍",
      color: "text-primary-500"
    },
    {
      id: "satisfaction",
      number: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Customer happiness score",
      icon: "⭐",
      color: "text-primary-500"
    }
  ];

  // Animate counters when visible
  useEffect(() => {
    if (impactVisible) {
      impactMetrics.forEach(metric => {
        let current = 0;
        const increment = metric.number / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= metric.number) {
            current = metric.number;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [metric.id]: Math.floor(current)
          }));
        }, 50);
      });
    }
  }, [impactVisible]);

  return (
    <section className="py-24 bg-white dark:bg-secondary-900 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-secondary-900 dark:text-white mb-6">
              <span className="block">Our</span>
              <span className="text-primary-500">Impact</span>
            </h2>
            
            <p className="text-xl text-secondary-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Real numbers that show how we're making a difference in Ghana's automotive landscape.
            </p>
          </div>

          {/* Impact Metrics */}
          <div 
            ref={impactRef}
            className={`
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000
              ${impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
            `}
          >
            {impactMetrics.map((metric, index) => (
              <div
                key={metric.id}
                className={`
                  group relative transition-all duration-700
                  ${impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-white dark:bg-secondary-800 rounded-3xl p-8 text-center border border-neutral-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-500 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    
                    {/* Icon */}
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>

                    {/* Number */}
                    <div className="mb-4">
                      <div className={`text-5xl font-black ${metric.color}`}>
                        {counters[metric.id]?.toLocaleString()}{metric.suffix}
                      </div>
                    </div>

                    {/* Label */}
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {metric.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-secondary-600 dark:text-neutral-400 leading-relaxed">
                      {metric.description}
                    </p>

                    {/* Decorative line */}
                    <div className="w-12 h-1 bg-primary-500 rounded-full mx-auto mt-4 transform group-hover:scale-x-150 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className={`
            mt-20 text-center transition-all duration-1000 delay-800
            ${impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8">
                Trusted by leading organizations across Ghana
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {[
                  { name: "Ghana Insurance", logo: "🏢" },
                  { name: "Auto Partners", logo: "🚗" },
                  { name: "Tech Ghana", logo: "💻" },
                  { name: "Mobile Money", logo: "📱" }
                ].map((partner, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-3 bg-neutral-100 dark:bg-secondary-700 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary-50 dark:group-hover:bg-primary-500/20 transition-colors duration-300">
                      {partner.logo}
                    </div>
                    <p className="text-sm font-medium text-secondary-600 dark:text-neutral-400 group-hover:text-secondary-900 dark:group-hover:text-white transition-colors duration-300">
                      {partner.name}
                    </p>
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

export default AboutImpactSection;