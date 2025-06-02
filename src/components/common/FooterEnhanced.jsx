import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

const FooterEnhanced = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle subscription
      console.log("Subscribing:", email);
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const services = [
    {
      name: "Collision Repair",
      href: "/services/collision-repair",
      icon: "🔧",
    },
    { name: "Paint Jobs", href: "/services/paint-jobs", icon: "🎨" },
    {
      name: "Wheel Replacement",
      href: "/services/wheel-replacement",
      icon: "⚙️",
    },
    { name: "Headlight", href: "/services/headlight", icon: "💡" },
    { name: "Glass Repair", href: "/services/glass-repair", icon: "🪟" },
    { name: "Bumper Repair", href: "/services/bumper-repair", icon: "🚗" },
    { name: "Spring Balance", href: "/services/spring-balance", icon: "⚖️" },
  ];

  const quickLinks = [
    { name: "Vehicle Full", href: "/services/vehicle-full", icon: "🚙" },
    {
      name: "Certified Ceramic",
      href: "/services/certified-ceramic",
      icon: "✨",
    },
    { name: "A/C Servicing", href: "/services/ac-servicing", icon: "❄️" },
    { name: "Photo Estimates", href: "/services/photo-estimates", icon: "📸" },
    {
      name: "Wheel Alignments",
      href: "/services/wheel-alignments",
      icon: "🎯",
    },
    { name: "Car Rentals", href: "/services/car-rentals", icon: "🚘" },
    { name: "24x7 Services", href: "/services/24x7", icon: "🕐" },
  ];

  const siteMap = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "About Us", href: "/about", icon: "👥" },
    { name: "Our Work", href: "/our-work", icon: "💼" },
    { name: "Contact Us", href: "/contact", icon: "📞" },
    { name: "Online Estimates", href: "/estimates", icon: "💰" },
    { name: "Terms & Conditions", href: "/terms", icon: "📄" },
    { name: "Privacy Policy", href: "/privacy", icon: "🔒" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-secondary-900 to-black text-white overflow-hidden">
      {/* Decorative Car Elements */}
      <div className="absolute top-0 left-0 w-full h-40 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-10 w-60 h-40 bg-gradient-to-r from-primary-500/20 to-transparent transform rotate-12 blur-2xl"></div>
        <div className="absolute -top-20 -right-10 w-60 h-40 bg-gradient-to-l from-primary-500/20 to-transparent transform -rotate-12 blur-2xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-secondary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Latest News & Updates</h3>
            <p className="text-neutral-400 mb-6">
              Sign up to receive incentives, discounts, and other tips
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Write your email..."
                  className="w-full px-6 py-4 pr-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:bg-white/20 transition-all duration-300"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className={`absolute right-1 transition-all duration-300 ${
                    isSubscribed ? "bg-green-500 hover:bg-green-600" : ""
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-2">Subscribed!</span>
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo size="lg" variant="light" className="mb-6" />
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              FITTA is the premier auto body repair shop in Africa, serving
              Ghana and Hudson Valley, Poughkeepsie, NY.
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">Talk To Our Experts</p>
              <a
                href="tel:+233544543220"
                className="text-primary-400 hover:text-primary-300 transition-colors text-lg font-bold"
              >
                (+233) 544-543-220
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary-500 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-primary-400">
              FITTA's Services
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
                  >
                    <span className="text-primary-500/50 group-hover:text-primary-400 transition-all duration-300 transform group-hover:scale-110">
                      {service.icon}
                    </span>
                    <span className="hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
                  >
                    <span className="text-primary-500/50 group-hover:text-primary-400 transition-all duration-300 transform group-hover:scale-110">
                      {link.icon}
                    </span>
                    <span className="hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-400">
              Site Map
            </h4>
            <div className="space-y-3">
              {siteMap.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="text-primary-500/50 group-hover:text-primary-400 transition-all duration-300 transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="hover:translate-x-1 transition-transform duration-300">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary-400">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  For Repair Support
                </p>
                <a
                  href="tel:+233544543220"
                  className="text-neutral-300 hover:text-white transition-colors font-semibold"
                >
                  (+233) 544-543-220
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 mb-1">
                  The Working Hours
                </p>
                <div className="text-neutral-300 text-sm space-y-1">
                  <p>
                    <span className="font-semibold">Monday - Friday:</span> 8:00
                    AM - 5:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Saturday:</span> 9:00 AM -
                    1:00 PM
                  </p>
                  <p>
                    <span className="font-semibold">Sunday:</span> Closed
                  </p>
                </div>
              </div>
              <div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate("/contact")}
                  className="w-full"
                >
                  Get Directions
                  <svg
                    className="w-4 h-4 ml-2"
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
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500 text-center md:text-left">
              Copyright © 2025 FITTA's Auto Body & Collision Repair Services.
              All Rights Reserved.
            </p>
            <p className="text-sm text-neutral-500 text-center md:text-right">
              Designed & Developed by{" "}
              <a
                href="#"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Regina Dadzie
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-pulse"></div>
    </footer>
  );
};

export default FooterEnhanced;
