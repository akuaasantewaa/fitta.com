import { useNavigate } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import Button from "../common/Button";

const AboutCTASection = () => {
  const navigate = useNavigate();
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  return (
    <section className="py-20 bg-secondary-900 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 
            className={`
              text-4xl md:text-5xl font-black text-white mb-6 transition-all duration-1000
              ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            Get more clicks, grow your business
          </h2>
          
          <p 
            className={`
              text-xl text-neutral-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200
              ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            Join thousands of satisfied customers and partners who trust FITTA for reliable, 
            professional vehicle services across Ghana.
          </p>

          <div 
            className={`
              flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400
              ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/auth/vehicle-owner")}
              className="bg-primary-500 hover:bg-primary-600 shadow-xl shadow-primary-500/25"
            >
              Get Started
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.location.href = 'mailto:support@fitta.com'}
              className="border-2 border-neutral-600 hover:border-primary-500 text-white"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;