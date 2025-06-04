import { useState, useEffect } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutProvenSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [counters, setCounters] = useState({
    customers: 0,
    response: 0,
    satisfaction: 0,
    partners: 0
  });

  const metrics = [
    {
      id: "customers",
      value: 50000,
      suffix: "+",
      label: "Customers",
      sublabel: "Vehicles Served"
    },
    {
      id: "response",
      value: 5,
      suffix: "M+",
      label: "Minutes",
      sublabel: "Avg Response Time"
    },
    {
      id: "satisfaction",
      value: 98,
      suffix: "%",
      label: "Satisfaction",
      sublabel: "Customer Rating"
    },
    {
      id: "partners",
      value: 15,
      suffix: "+",
      label: "Cities",
      sublabel: "Years in Business"
    }
  ];

  // Animate counters when visible
  useEffect(() => {
    if (sectionVisible) {
      metrics.forEach(metric => {
        let current = 0;
        const increment = metric.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= metric.value) {
            current = metric.value;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [metric.id]: Math.floor(current)
          }));
        }, 50);
      });
    }
  }, [sectionVisible]);

  return (
    <section className="py-20 bg-secondary-900 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 
              className={`
                text-4xl md:text-5xl font-black text-white mb-4 transition-all duration-1000
                ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              Our proven
            </h2>
            <h3 
              className={`
                text-3xl md:text-4xl font-light text-neutral-300 transition-all duration-1000 delay-200
                ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              success stories
            </h3>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((metric, index) => (
              <div 
                key={metric.id}
                className={`
                  text-center transition-all duration-1000
                  ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-black text-primary-500 mb-2">
                  {counters[metric.id]}{metric.suffix}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-neutral-400">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProvenSection;