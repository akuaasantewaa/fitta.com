import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutReachSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({
    threshold: 0.2,
    once: true,
  });

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      description: "Drop us a line anytime",
      value: "comfitta@gmail.com",
      link: "mailto:comfitta@gmail.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      description: "We're here to help",
      value: "+233 277 859 740",
      link: "tel:+233277859740",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",
      description: "Visit our office",
      value: "Accra Central, Greater Accra, Ghana",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section className="py-20 bg-secondary-900 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className={`
            max-w-6xl mx-auto transition-all duration-1000
            ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
            Reach out to us today
          </h2>
          <p className="text-lg text-neutral-400 text-center mb-16 max-w-3xl mx-auto">
            Whether you need support, want to join our network, or have a
            business inquiry, we're just a message away.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.title === "Address" ? "_blank" : undefined}
                rel={
                  method.title === "Address" ? "noopener noreferrer" : undefined
                }
                className={`
                  group relative bg-secondary-800 dark:bg-secondary-900 rounded-2xl p-8 
                  border border-secondary-700 dark:border-secondary-800 
                  hover:border-primary-500 transition-all duration-500
                  ${
                    sectionVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-secondary-700 dark:bg-secondary-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <div className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                    {method.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {method.description}
                </p>
                <p className="text-base text-neutral-300 font-medium group-hover:text-white transition-colors duration-300">
                  {method.value}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutReachSection;
