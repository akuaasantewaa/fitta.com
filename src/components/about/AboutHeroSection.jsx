import { useEffect, useState } from "react";

const AboutHeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative  bg-secondary-900 dark:bg-black flex items-center justify-center pt-32">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title and Description */}
          <div
            className={`
              mb-16 transition-all duration-1000
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              About FITTA
            </h1>

            <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light">
              Discover the story behind our journey, the principles that guide
              us, and how we're dedicated to transforming your roadside
              experience to a stress-free service
            </p>
          </div>

          {/* Floating Laptop Display */}
          <div
            className={`
              relative transition-all duration-1000 delay-500
              ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }
            `}
          >
            {/* Laptop Container */}
            <div className="relative max-w-4xl mx-auto">
              {/* Laptop Screen */}
              <div className="relative">
                {/* Screen Content */}
                <div className="relative aspect-video bg-black rounded-3xl overflow-hidden">
                  {/* Top Bar (simulating browser/app) */}

                  {/* Main Image */}
                  <img
                    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80"
                    alt="FITTA team collaboration"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Image Overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
