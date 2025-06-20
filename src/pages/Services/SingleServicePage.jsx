import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotifications } from '../../context/NotificationContext';
import { PaystackService, generatePaymentRef } from '../../config/paystack';
import HeaderEnhanced from '../../components/common/HeaderEnhanced';
import FooterEnhanced from '../../components/common/FooterEnhanced';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { Card } from '../../components/common/Card';

const SingleServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { success, error } = useNotifications();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    problemDetails: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Services data (same as in ServicesPage)
  const services = {
    'collision': {
      id: 'collision',
      title: 'Collision Repair',
      category: 'repair',
      description: 'Expert collision repair services to restore your vehicle to pre-accident condition with precision and care.',
      icon: '🚗',
      features: [
        'Frame straightening & alignment',
        'Body panel repair & replacement',
        'Paint matching & refinishing',
        'Insurance claim assistance'
      ],
      price: 'Quote-based',
      priceAmount: null, // No fixed price
      duration: '2-7 days',
      highlighted: true,
      color: 'primary',
      detailedDescription: 'Our collision repair service combines state-of-the-art equipment with skilled craftsmanship to restore your vehicle to its original condition. We work with all major insurance companies and provide detailed estimates before beginning any work.',
      additionalServices: [
        'Free damage assessment',
        'Insurance claim support',
        'Rental car assistance',
        'Lifetime warranty on repairs'
      ]
    },
    'exhaust': {
      id: 'exhaust',
      title: 'Car Exhaust Repair',
      category: 'repair',
      description: 'Comprehensive exhaust system diagnostics and repair to ensure optimal performance and emissions compliance.',
      icon: '💨',
      features: [
        'Exhaust leak detection',
        'Catalytic converter service',
        'Muffler repair & replacement',
        'Performance exhaust upgrades'
      ],
      price: 'From GHS 350',
      priceAmount: 350,
      duration: '2-4 hours',
      color: 'secondary',
      detailedDescription: 'Keep your vehicle running efficiently and environmentally compliant with our comprehensive exhaust system services. Our technicians use advanced diagnostic tools to identify issues and provide lasting solutions.',
      additionalServices: [
        'Free exhaust inspection',
        'Emissions testing',
        'Performance optimization',
        '6-month warranty'
      ]
    },
    'suspension': {
      id: 'suspension',
      title: 'Suspension Repair',
      category: 'repair',
      description: 'Complete suspension system service for smooth handling, improved safety, and comfortable driving experience.',
      icon: '🔧',
      features: [
        'Shock absorber replacement',
        'Spring & strut service',
        'Wheel alignment',
        'Steering component repair'
      ],
      price: 'From GHS 450',
      priceAmount: 450,
      duration: '3-5 hours',
      color: 'primary',
      detailedDescription: 'Ensure optimal vehicle handling, comfort, and safety with our comprehensive suspension repair services. We address all suspension components to deliver a smooth, stable driving experience.',
      additionalServices: [
        'Free suspension assessment',
        'Road test included',
        'Alignment check',
        '12-month warranty'
      ]
    },
    'maintenance': {
      id: 'maintenance',
      title: 'Routine Maintenance',
      category: 'maintenance',
      description: 'Keep your vehicle running smoothly with our comprehensive preventive maintenance services.',
      icon: '🛠️',
      features: [
        'Oil & filter changes',
        'Brake inspection & service',
        'Tire rotation & balancing',
        'Multi-point inspection'
      ],
      price: 'From GHS 150',
      priceAmount: 150,
      duration: '1-2 hours',
      color: 'secondary',
      detailedDescription: 'Regular maintenance is key to vehicle longevity and performance. Our comprehensive maintenance service covers all essential components to keep your vehicle running at its best.',
      additionalServices: [
        'Digital service records',
        'Maintenance reminders',
        'Discount on future services',
        '30-day guarantee'
      ]
    },
    'custom': {
      id: 'custom',
      title: 'Custom Paint & Body Work',
      category: 'custom',
      description: 'Transform your vehicle with our professional custom paint and body modification services.',
      icon: '🎨',
      features: [
        'Custom paint designs',
        'Body kit installation',
        'Chrome detailing',
        'Interior customization'
      ],
      price: 'Quote-based',
      priceAmount: null,
      duration: '3-14 days',
      color: 'primary',
      detailedDescription: 'Express your style with our custom paint and body work services. From subtle modifications to complete transformations, our artists and technicians bring your vision to life.',
      additionalServices: [
        'Design consultation',
        'Color matching',
        'Show car finish',
        'Lifetime paint warranty'
      ]
    },
    'emergency': {
      id: 'emergency',
      title: '24/7 Emergency Service',
      category: 'emergency',
      description: 'Round-the-clock emergency assistance including towing, jumpstarts, and roadside repairs.',
      icon: '🚨',
      features: [
        '24/7 availability',
        'GPS-tracked response',
        'Flatbed & wheel-lift towing',
        'On-site minor repairs'
      ],
      price: 'From GHS 200',
      priceAmount: 200,
      duration: '30-60 min response',
      color: 'secondary',
      detailedDescription: 'When you need help on the road, our emergency service team is ready 24/7. Fast response times and professional service to get you back on the road safely.',
      additionalServices: [
        'Real-time GPS tracking',
        'Insurance coordination',
        'Alternative transportation',
        'Follow-up service'
      ]
    }
  };

  const service = services[serviceId];

  // Redirect if service not found
  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.problemDetails.trim()) {
      newErrors.problemDetails = 'Problem details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      error('Please fix all errors before submitting');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Check if service has a price to determine next action
      if (service.priceAmount) {
        // Service has a price - proceed to payment
        handlePayment();
      } else {
        // Service is quote-based - show success message
        success('Request Submitted', 'Your service request has been received. We will contact you shortly with a quote.');
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          location: '',
          problemDetails: ''
        });
        
        // Redirect after a delay
        setTimeout(() => {
          navigate('/services');
        }, 2000);
      }
      
    } catch (err) {
      error('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle payment (for services with fixed pricing)
  const handlePayment = async () => {
    try {
      const paymentRef = generatePaymentRef('fitta_service');
      
      await PaystackService.initializePayment({
        email: formData.email,
        amount: service.priceAmount,
        reference: paymentRef,
        metadata: {
          service_id: service.id,
          service_name: service.title,
          customer_name: formData.name,
          customer_phone: formData.phone,
          location: formData.location,
          problem_details: formData.problemDetails
        },
        onSuccess: async (response) => {
          // Payment successful
          try {
            // Verify payment on backend (optional)
            await PaystackService.verifyPayment(response.reference);
            
            success(
              'Payment Successful!', 
              `Your service booking has been confirmed. Reference: ${response.reference}. We'll contact you within 24 hours to schedule your service.`
            );
            
            // Reset form
            setFormData({
              name: '',
              phone: '',
              email: '',
              location: '',
              problemDetails: ''
            });
            
            // Redirect to services page after delay
            setTimeout(() => {
              navigate('/services');
            }, 4000);
            
          } catch (verificationError) {
            console.error('Payment verification failed:', verificationError);
            // Even if verification fails, the payment was successful
            success(
              'Payment Received', 
              `Payment completed successfully. Reference: ${response.reference}. We'll contact you soon.`
            );
            
            setTimeout(() => {
              navigate('/services');
            }, 3000);
          }
        },
        onClose: () => {
          // Payment was closed/cancelled
          error('Payment Cancelled', 'Payment was cancelled. You can try again when ready.');
        },
        onError: (err) => {
          console.error('Payment error:', err);
          error('Payment Failed', 'There was an issue processing your payment. Please try again.');
        }
      });
      
    } catch (err) {
      console.error('Payment initialization failed:', err);
      error(
        'Payment Unavailable', 
        'Payment service is currently unavailable. Please try again later or contact support.'
      );
    }
  };

  if (!service) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-secondary-900">
      {/* Header */}
      <HeaderEnhanced transparent={false} />

      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <section className="py-6 bg-neutral-100 dark:bg-secondary-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <button 
                onClick={() => navigate('/')}
                className="text-secondary-500 hover:text-primary-500 transition-colors"
              >
                Home
              </button>
              <span className="text-secondary-400">/</span>
              <button 
                onClick={() => navigate('/services')}
                className="text-secondary-500 hover:text-primary-500 transition-colors"
              >
                Services
              </button>
              <span className="text-secondary-400">/</span>
              <span className="text-secondary-900 dark:text-white font-medium">
                {service.title}
              </span>
            </nav>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Column - Service Details */}
              <div className="space-y-8">
                {/* Service Header */}
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${
                  service.color === 'primary' 
                    ? 'from-primary-500 to-primary-600' 
                    : 'from-secondary-500 to-secondary-600'
                } text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-white rounded-full"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h1 className="text-4xl font-black mb-4">{service.title}</h1>
                    <p className="text-xl text-white/90">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-white/70 text-sm">Starting Price</p>
                        <p className="text-2xl font-bold">{service.price}</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-white/70 text-sm">Duration</p>
                        <p className="text-2xl font-bold">{service.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Description */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Service Details
                  </h2>
                  <p className="text-secondary-600 dark:text-neutral-300 mb-6">
                    {service.detailedDescription}
                  </p>
                  
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                    What's Included:
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-secondary-600 dark:text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">
                    Additional Benefits:
                  </h3>
                  <ul className="space-y-3">
                    {service.additionalServices.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-secondary-600 dark:text-neutral-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Right Column - Booking Form */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Book This Service
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Full Name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={errors.name}
                      placeholder="Enter your full name"
                      required
                    />
                    
                    <Input
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      error={errors.phone}
                      placeholder="e.g., +233 24 123 4567"
                      required
                    />
                    
                    <Input
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      placeholder="your.email@example.com"
                      required
                    />
                    
                    <Input
                      label="Location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      error={errors.location}
                      placeholder="City or specific address"
                      required
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                        Problem Details
                      </label>
                      <textarea
                        value={formData.problemDetails}
                        onChange={(e) => handleInputChange('problemDetails', e.target.value)}
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                          errors.problemDetails 
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                            : 'border-neutral-300 dark:border-secondary-600 bg-white dark:bg-secondary-800'
                        } text-secondary-900 dark:text-white placeholder-secondary-400`}
                        placeholder="Describe the issue or specific requirements..."
                        required
                      />
                      {errors.problemDetails && (
                        <p className="text-red-500 text-sm mt-1">{errors.problemDetails}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    {service.priceAmount ? (
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? 'Processing...' : `Pay Now - GHS ${service.priceAmount}`}
                        {!isSubmitting && (
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Request for Quote'}
                        {!isSubmitting && (
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        )}
                      </Button>
                    )}

                    {/* Payment Info */}
                    <div className="text-center">
                      <p className="text-sm text-secondary-500 dark:text-neutral-400">
                        {service.priceAmount ? (
                          <>
                            💳 Secure payment powered by Paystack
                            <br />
                            Your information is protected with bank-level security
                          </>
                        ) : (
                          <>
                            📞 We'll contact you within 24 hours with a detailed quote
                            <br />
                            No payment required at this stage
                          </>
                        )}
                      </p>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterEnhanced />
    </div>
  );
};

export default SingleServicePage;