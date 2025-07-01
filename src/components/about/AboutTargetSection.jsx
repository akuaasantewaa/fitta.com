import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Button from "../common/Button";
import target from "../../assets/images/target.png";

const AboutTargetSection = () => {
  const navigate = useNavigate();
  const [sectionRef, sectionVisible] = useScrollAnimation({
    threshold: 0.2,
    once: true,
  });

  return (
    <section className="py-20 bg-neutral-50 dark:bg-secondary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <div
              className={`
                relative order-2 lg:order-1 transition-all duration-1000
                ${
                  sectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }
              `}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={target}
                  alt="Professional using FITTA platform"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-900 dark:bg-primary-600 rounded-2xl -z-10" />
            </div>

            {/* Right Content */}
            <div
              className={`
                space-y-6 order-1 lg:order-2 transition-all duration-1000 delay-300
                ${
                  sectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }
              `}
            >
              <h2 className="text-4xl md:text-5xl font-black text-secondary-900 dark:text-white">
                Our target
              </h2>

              <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                Our aim is to become West Africa's leading vehicle service
                platform, empowering vehicle owners to access help instantly,
                providing mechanics with steady income opportunities, and giving
                businesses powerful tools to manage their fleets efficiently.
              </p>

              <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                We're building more than just an app - we're creating an
                ecosystem that transforms how vehicle services are delivered.
                From emergency roadside assistance to routine maintenance,
                insurance claims to fleet management, FITTA is your trusted
                partner on every journey.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-secondary-700 dark:text-neutral-300">
                    Connect 100,000+ vehicle owners with instant help by 2025
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-secondary-700 dark:text-neutral-300">
                    Empower 5,000+ mechanics with sustainable income
                    opportunities
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-500 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-secondary-700 dark:text-neutral-300">
                    Expand to all major cities across West Africa
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="mt-8"
                onClick={() => navigate("/careers")}
              >
                Join Our Mission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTargetSection;
