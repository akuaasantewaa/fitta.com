import useScrollAnimation from "../../hooks/useScrollAnimation";
import CEO from "../../assets/images/CEO.jpg";

const AboutFounderSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({
    threshold: 0.2,
    once: true,
  });

  return (
    <section className="py-20 bg-neutral-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Large Rounded Image */}
            <div
              className={`
                relative transition-all duration-1000
                ${
                  sectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }
              `}
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Main Image Container */}
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-red-900/20">
                  <img
                    src={CEO}
                    alt="Michael Karter - Founder & CEO"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Quote Content */}
            <div
              className={`
                space-y-8 transition-all duration-1000 delay-300
                ${
                  sectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }
              `}
            >
              <div className="space-y-6">
                <p className="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                  The success of any organization doesn't just come from its
                  products or services; it comes from its people, their
                  dedication, and their ability to build meaningful connections
                  with customers. A great company starts with a great culture,
                  one that prioritizes trust, relationships, and a shared vision
                  for the future.
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
                  Seth A. Baah-Ansah
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-base mb-6">
                  Founder of FITTA
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100016838042676&mibextid=ZbWKwL"
                    className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w- h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-white rounded-lg transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22.675 0H1.325C.593 0 0 .594 0 1.326v21.348C0 
      23.406.593 24 1.325 24H12.82V14.708h-3.292v-3.622h3.292V8.413c0-3.262 
      1.993-5.043 4.903-5.043 1.393 0 2.594.104 2.944.15v3.41l-2.021.001c-1.585 
      0-1.892.754-1.892 1.86v2.438h3.782l-.493 
      3.622h-3.289V24h6.451C23.407 24 24 23.406 
      24 22.674V1.326C24 .594 23.407 0 22.675 0z"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/seth-a-baah-ansah-a6652a199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="w-10 h-10 bg-neutral-200 dark:bg-neutral-800 hover:bg-primary-500 dark:hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;
