import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Button from "../common/Button";
import story from "../../assets/images/story.png";

const AboutOurStorySection = () => {
  const navigate = useNavigate();
  const [sectionRef, sectionVisible] = useScrollAnimation({
    threshold: 0.2,
    once: true,
  });

  return (
    <section className="py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div
              className={`
                space-y-6 transition-all duration-1000
                ${
                  sectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }
              `}
            >
              <h2 className="text-4xl md:text-5xl font-black text-secondary-900 dark:text-white">
                Our story
              </h2>

              <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                It all started with a simple idea in 2021. We noticed businesses
                struggling to manage customer relationships, mechanics working
                in isolation, and vehicle owners stranded without reliable help.
              </p>

              <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                Traditional vehicle service methods felt outdated, slow, and
                frustrating. We knew there had to be a better way to connect
                vehicle owners with trusted service providers. That's when FITTA
                was born - a platform designed to transform vehicle services
                across Africa.
              </p>

              <p className="text-lg text-secondary-600 dark:text-neutral-300 leading-relaxed">
                Today, we're proud to serve thousands of customers, connecting
                them with certified mechanics and service providers instantly,
                making roadside assistance as simple as a tap on your phone.
              </p>

              <Button
                variant="primary"
                size="lg"
                className="mt-8"
                onClick={() => navigate("/how-it-works")}
              >
                Learn More
              </Button>
            </div>

            {/* Right Image */}
            <div
              className={`
                relative transition-all duration-1000 delay-300
                ${
                  sectionVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }
              `}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={story}
                  alt="Team working together"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurStorySection;
