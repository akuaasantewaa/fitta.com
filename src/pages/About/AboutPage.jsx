import { useEffect } from "react";
import HeaderEnhanced from "../../components/common/HeaderEnhanced";
import FooterEnhanced from "../../components/common/FooterEnhanced";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import AboutReachSection from "../../components/about/AboutReachSection";
import AboutOurStorySection from "../../components/about/AboutOurStorySection";
import AboutTargetSection from "../../components/about/AboutTargetSection";
import AboutProvenSection from "../../components/about/AboutProvenSection";
import AboutExpertsSection from "../../components/about/AboutExpertsSection";
import AboutTestimonialsSection from "../../components/about/AboutTestimonialsSection";
import AboutFounderSection from "../../components/about/AboutFounderSection";
import AboutCTASection from "../../components/about/AboutCTASection";

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-secondary-900">
      {/* Header */}
      <HeaderEnhanced transparent={false} />

      <main className="flex-1">
        {/* Hero Section - Full width image with overlay text */}
        <AboutHeroSection />

        {/* Reach out to us today - Contact cards */}
        <AboutReachSection />

        {/* Our story - Text with image on right */}
        <AboutOurStorySection />

        {/* Our target - Image on left, text on right */}
        <AboutTargetSection />

        {/* Our proven success stories - Metrics */}
        <AboutProvenSection />

        {/* Meet our experts - Team cards */}
        <AboutExpertsSection />

        {/* What our customers are saying - Testimonials */}
        <AboutTestimonialsSection />

        {/* Founder Quote Section */}
        <AboutFounderSection />

        {/* Get more clicks, grow your business - CTA */}
        <AboutCTASection />
      </main>

      {/* Footer */}
      <FooterEnhanced />
    </div>
  );
};

export default AboutPage;