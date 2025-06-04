import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutExpertsSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const experts = [
    {
      name: "Michael Karter",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ryan Davis",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Jessica Walker",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className={`
                text-4xl md:text-5xl font-black text-secondary-900 dark:text-white mb-4 transition-all duration-1000
                ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              Meet our experts
            </h2>
            <p 
              className={`
                text-lg text-secondary-600 dark:text-neutral-300 max-w-2xl mx-auto transition-all duration-1000 delay-200
                ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              Discover the passionate team of professionals working tirelessly to revolutionize 
              vehicle services across Africa.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div 
                key={index}
                className={`
                  group relative transition-all duration-1000
                  ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="relative bg-neutral-50 dark:bg-secondary-800 rounded-3xl overflow-hidden">
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-secondary-600 dark:text-neutral-400 mb-4">
                      {expert.role}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      <a 
                        href={expert.socials.linkedin}
                        className="w-10 h-10 bg-secondary-200 dark:bg-secondary-700 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href={expert.socials.twitter}
                        className="w-10 h-10 bg-secondary-200 dark:bg-secondary-700 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExpertsSection;