import { useState } from "react";
import HeaderEnhanced from "../../components/common/HeaderEnhanced";
import FooterEnhanced from "../../components/common/FooterEnhanced";
import Button from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import Input from "../../components/common/Input";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useNotifications } from "../../context/NotificationContext";

const ContactPage = () => {
  const { success, error } = useNotifications();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.1 });
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 });
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.1 });
  const [faqRef, faqVisible] = useScrollAnimation({ threshold: 0.1 });

  // Contact methods
  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak directly with our customer support team",
      value: "+233 277 859 740",
      action: "tel:+233277859740",
      buttonText: "Call Now",
      color: "primary",
      available: "24/7 Emergency Support",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick support via WhatsApp messaging",
      value: "+233 277 859 740",
      action: "https://wa.me/233277859740",
      buttonText: "Message Us",
      color: "secondary",
      available: "Mon-Fri: 8AM-6PM",
    },
    {
      icon: "✉️",
      title: "Email Support",
      description: "Send us detailed inquiries and feedback",
      value: "comfitta@gmail.com",
      action: "mailto:comfitta@gmail.com",
      buttonText: "Send Email",
      color: "primary",
      available: "Response within 24hrs",
    },
    {
      icon: "📍",
      title: "Visit Our Office",
      description: "Meet us at our headquarters in Accra",
      value: "Accra Central, Greater Accra, Ghana",
      action: "#",
      buttonText: "Get Directions",
      color: "secondary",
      available: "Mon-Fri: 9AM-5PM",
    },
  ];

  // Service types for contact form
  const serviceTypes = [
    { id: "general", label: "General Inquiry" },
    { id: "support", label: "Technical Support" },
    { id: "partnership", label: "Partnership" },
    { id: "feedback", label: "Feedback" },
    { id: "emergency", label: "Emergency Service" },
    { id: "other", label: "Other" },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can I get roadside assistance?",
      answer:
        "Our emergency response team typically arrives within 15-30 minutes in urban areas and 30-60 minutes in suburban areas, depending on traffic and location.",
    },
    {
      question: "What areas do you cover in Ghana?",
      answer:
        "We currently provide services in Accra, Kumasi, Takoradi, Cape Coast, Tamale, and surrounding areas. We are continuously expanding our coverage.",
    },
    {
      question: "How do I become a garage partner?",
      answer:
        "Visit our garage partner registration page, complete the application form, and our team will guide you through the verification and onboarding process.",
    },
    {
      question: "Are your service providers certified?",
      answer:
        "Yes, all our service providers undergo thorough background checks, certification verification, and continuous training to ensure quality service delivery.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept mobile money (MTN, Vodafone, AirtelTigo), bank transfers, credit/debit cards, and cash payments depending on the service type.",
    },
    {
      question: "Can I track my service provider in real-time?",
      answer:
        "Yes, once a service provider is assigned to your request, you can track their location and estimated arrival time through our platform.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      success(
        "Message sent successfully! We'll get back to you within 24 hours."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: "general",
      });
    } catch {
      error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle contact method clicks
  const handleContactAction = (action) => {
    if (action.startsWith("tel:") || action.startsWith("mailto:")) {
      window.location.href = action;
    } else if (action.startsWith("http")) {
      window.open(action, "_blank");
    } else {
      // Handle directions - could integrate with maps
      success("Opening directions...");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-secondary-900">
      {/* Header */}
      <HeaderEnhanced transparent={false} />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 pt-32 pb-20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className={`text-4xl md:text-6xl font-black text-white mb-6 transition-all duration-1000 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Get In Touch With
                <span className="block text-secondary-400 mt-2">
                  Our Expert Team
                </span>
              </h1>

              <p
                className={`text-xl text-white/90 mb-8 transition-all duration-1000 delay-200 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                We're here to help 24/7. Reach out for emergency assistance,
                partnerships, or any questions about our automotive services.
              </p>

              <div
                className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-400 ${
                  heroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = "tel:+233277859740")}
                  className="min-w-[200px]"
                >
                  Emergency Call
                  <svg
                    className="w-5 h-5 ml-2"
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
                </Button>
                <Button
                  variant="glass"
                  size="lg"
                  onClick={() =>
                    window.open("https://wa.me/233277859740", "_blank")
                  }
                  className="min-w-[200px]"
                >
                  WhatsApp Chat
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              className="w-full h-16 text-white dark:text-secondary-900"
              preserveAspectRatio="none"
              viewBox="0 0 1440 48"
              fill="currentColor"
            >
              <path d="M0,48L60,42.7C120,37,240,27,360,26.7C480,27,600,37,720,40C840,43,960,37,1080,32C1200,27,1320,21,1380,18.7L1440,16L1440,48L1380,48C1320,48,1200,48,1080,48C960,48,840,48,720,48C600,48,480,48,360,48C240,48,120,48,60,48L0,48Z"></path>
            </svg>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section
          ref={contactRef}
          className="py-20 bg-white dark:bg-secondary-900"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-black text-secondary-900 dark:text-white mb-4 transition-all duration-1000 ${
                  contactVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Multiple Ways To
                <span className="block text-primary-500 mt-2">Reach Us</span>
              </h2>
              <p
                className={`text-lg text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
                  contactVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Choose the most convenient way to contact us. We're available
                24/7 for emergencies and during business hours for general
                inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className={`transition-all duration-700 ${
                    contactVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card
                    className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => handleContactAction(method.action)}
                  >
                    <div
                      className={`p-8 bg-gradient-to-br ${
                        method.color === "primary"
                          ? "from-primary-500 to-primary-600"
                          : "from-secondary-500 to-secondary-600"
                      } text-white relative overflow-hidden`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white rounded-full"></div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {method.title}
                        </h3>
                        <p className="text-white/90 mb-4">
                          {method.description}
                        </p>
                        <div className="text-lg font-semibold mb-2">
                          {method.value}
                        </div>
                        <div className="text-sm text-white/80">
                          {method.available}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <Button
                        variant={method.color}
                        size="md"
                        className="w-full group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleContactAction(method.action);
                        }}
                      >
                        {method.buttonText}
                        <svg
                          className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
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
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          ref={formRef}
          className="py-20 bg-gradient-to-br from-neutral-50 to-white dark:from-secondary-800 dark:to-secondary-900"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              {/* Form */}
              <div
                className={`transition-all duration-1000 ${
                  formVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <Card className="p-8 shadow-xl">
                  <h3 className="text-3xl font-black text-secondary-900 dark:text-white mb-6">
                    Send Us A Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                      <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 xxx xxx xxx"
                      />
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300">
                          Service Type
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                        >
                          {serviceTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                      required
                    />

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-neutral-200 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white resize-none"
                        placeholder="Tell us more about your inquiry..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && (
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      )}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Info */}
              <div
                className={`transition-all duration-1000 delay-200 ${
                  formVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-black text-secondary-900 dark:text-white mb-6">
                      Let's Start A Conversation
                    </h3>
                    <p className="text-lg text-secondary-600 dark:text-neutral-300 mb-8">
                      Have questions about our services? Need emergency
                      assistance? Want to partner with us? We're here to help
                      and would love to hear from you.
                    </p>
                  </div>

                  {/* Office Hours */}
                  <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                      📍 Visit Our Office
                    </h4>
                    <div className="space-y-3 text-secondary-600 dark:text-neutral-300">
                      <p>
                        <strong>Address:</strong>
                        <br />
                        Accra Central, Greater Accra, Ghana
                      </p>
                      <p>
                        <strong>Business Hours:</strong>
                        <br />
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p>
                        <strong>Emergency Services:</strong>
                        <br />
                        Available 24/7
                      </p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                      ⚡ Quick Response Guarantee
                    </h4>
                    <div className="space-y-2 text-primary-600 dark:text-primary-300">
                      <p>• Emergency calls: Immediate response</p>
                      <p>• WhatsApp messages: Within 30 minutes</p>
                      <p>• Email inquiries: Within 24 hours</p>
                      <p>• Partnership requests: Within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-20 bg-white dark:bg-secondary-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-black text-secondary-900 dark:text-white mb-4 transition-all duration-1000 ${
                  faqVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Frequently Asked
                <span className="block text-primary-500 mt-2">Questions</span>
              </h2>
              <p
                className={`text-lg text-secondary-600 dark:text-neutral-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
                  faqVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Find quick answers to common questions about our services,
                coverage, and processes.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    faqVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <button
                      className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white pr-4">
                          {faq.question}
                        </h3>
                        <svg
                          className={`w-6 h-6 text-primary-500 transition-transform duration-300 flex-shrink-0 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-secondary-600 dark:text-neutral-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-secondary-600 dark:text-neutral-300 mb-6">
                Still have questions? We're here to help!
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => (window.location.href = "tel:+233544543220")}
              >
                Contact Support
                <svg
                  className="w-5 h-5 ml-2"
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
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterEnhanced />
    </div>
  );
};

export default ContactPage;
