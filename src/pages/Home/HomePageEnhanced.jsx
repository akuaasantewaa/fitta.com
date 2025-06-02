import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/common/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/common/Card";
import HeroSection from "../../components/home/HeroSection";
import AboutUsSection from "../../components/home/AboutUsSection";
import ChooseYourJourneySection from "../../components/home/ChooseYourJourneySection";
import ServicesSection from "../../components/home/ServicesSection";
import WhyChooseUsSection from "../../components/home/WhyChooseUsSection";
import CTASection from "../../components/home/CTASection";
import HeaderEnhanced from "../../components/common/HeaderEnhanced";
import FooterEnhanced from "../../components/common/FooterEnhanced";

const HomePageEnhanced = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userType } = useAuth();

  const stats = [
    { number: "10,000+", label: "Vehicles Served" },
    { number: "500+", label: "Partner Garages" },
    { number: "15", label: "Cities Covered" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Custom Header for Home Page */}
      <HeaderEnhanced transparent={true} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Stats Section */}
        {/* <section className="py-20 bg-white dark:bg-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 to-transparent dark:from-secondary-800/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-primary-500 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-secondary-600 dark:text-neutral-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* Choose Your Journey Section */}
        <ChooseYourJourneySection />

        {/* Services Section */}
        <ServicesSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      <FooterEnhanced />
    </div>
  );
};

export default HomePageEnhanced;
