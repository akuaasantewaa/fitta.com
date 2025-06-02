import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const AboutUsSection = () => {
  const navigate = useNavigate();
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [leftContentRef, leftContentVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [videoRef, videoVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const stats = [
    { number: "29+", label: "Years Experience", icon: "📅" },
    { number: "10K+", label: "Happy Customers", icon: "😊" },
    { number: "500+", label: "Partner Garages", icon: "🔧" },
    { number: "24/7", label: "Support Available", icon: "⚡" },
  ];

  const features = [
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Trusted Partner",
      description: "Award Winning Company",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "We're Trusted Experts",
      description: "Friendly Support",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-secondary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary-600/10 via-transparent to-transparent rounded-full blur-3xl" />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className={`text-center mb-4 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-sm font-bold text-primary-500 uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
              <span className={`w-12 h-px bg-primary-500 transition-all duration-1000 ${headerVisible ? 'scale-x-100' : 'scale-x-0'}`}></span>
              ABOUT US
              <span className={`w-12 h-px bg-primary-500 transition-all duration-1000 ${headerVisible ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary-900 dark:text-white">
              <span className={`inline-block transition-all duration-700 delay-300 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>Experience superior car</span>
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 inline-block transition-all duration-700 delay-500 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                Repair with us
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div ref={leftContentRef} className={`space-y-8 transition-all duration-1000 ${leftContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                  Quality repairs that you can trust every time means that you
                  can rely on our expert services to fix your vehicle correctly.
                  Efficiently, and safely. When you take your car to us, you can
                  have confidence that our skilled technicians will provide
                  top-notch repairs using the best tools and parts.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`
                      flex items-center gap-4 p-4 rounded-2xl cursor-pointer
                      transition-all duration-300 group
                      ${
                        activeFeature === index
                          ? "bg-primary-50 dark:bg-primary-500/10 border-2 border-primary-500"
                          : "bg-neutral-50 dark:bg-secondary-800 border-2 border-transparent hover:border-primary-300 dark:hover:border-primary-700"
                      }
                    `}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    {/* Icon */}
                    <div
                      className={`
                      w-14 h-14 rounded-xl flex items-center justify-center
                      transition-all duration-300
                      ${
                        activeFeature === index
                          ? "bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30"
                          : "bg-white dark:bg-secondary-700 text-primary-500 group-hover:scale-110"
                      }
                    `}
                    >
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-secondary-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <svg
                      className={`
                        w-5 h-5 text-primary-500 transition-all duration-300
                        ${
                          activeFeature === index
                            ? "translate-x-1 opacity-100"
                            : "opacity-0"
                        }
                      `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => navigate("/about")}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/30 hover:scale-105"
                >
                  <span className="relative z-10">Read More</span>
                  <svg
                    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Visual - Video Container */}
            <div ref={videoRef} className={`relative transition-all duration-1000 delay-300 ${videoVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-3'}`}>
              {/* Video Frame */}
              <div className="relative z-10 group">
                {/* Main Video Container */}
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-800 dark:to-secondary-900 shadow-2xl">
                  {/* Video Placeholder/Frame */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Play Button */}
                    <button className="group/play relative">
                      <div className="absolute inset-0 bg-white/30 dark:bg-white/20 rounded-full blur-xl scale-150 group-hover/play:scale-[1.7] transition-transform duration-500"></div>
                      <div className="relative w-20 h-20 bg-white dark:bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover/play:scale-110 transition-all duration-300">
                        <svg
                          className="w-8 h-8 text-primary-500 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundSize: "60px 60px",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Video Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 via-transparent to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Video Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">
                    Watch How FITTA Transforms Vehicle Services
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    2 min • See our process in action
                  </p>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div ref={statsRef} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div
                  className={`
                  relative bg-neutral-50 dark:bg-secondary-800 rounded-2xl p-6 text-center
                  border-2 transition-all duration-300 overflow-hidden
                  ${
                    hoveredStat === index
                      ? "border-primary-500 shadow-xl shadow-primary-500/20 transform -translate-y-1"
                      : "border-transparent hover:border-primary-300 dark:hover:border-primary-700"
                  }
                `}
                >
                  {/* Background Pattern */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent
                      transition-opacity duration-300
                      ${hoveredStat === index ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* Icon */}
                  <div
                    className={`
                    text-3xl mb-3 transform transition-all duration-300
                    ${hoveredStat === index ? "scale-110 rotate-6" : ""}
                  `}
                  >
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div className="relative">
                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-sm font-medium text-secondary-600 dark:text-neutral-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
