import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useNotifications } from '../../context/NotificationContext';

const EstimatesPage = () => {
  const navigate = useNavigate();
  const { success, error } = useNotifications();
  const [heroRef, heroVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [howRef, howVisible] = useScrollAnimation();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Vehicle Info
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleVIN: '',
    
    // Step 2: Damage Details
    damageType: '',
    damageDescription: '',
    images: [],
    
    // Step 3: Contact Info
    name: '',
    email: '',
    phone: '',
    location: '',
    preferredContact: 'phone'
  });

  const damageTypes = [
    { id: 'collision', name: 'Collision Damage', icon: '💥' },
    { id: 'paint', name: 'Paint & Body Work', icon: '🎨' },
    { id: 'glass', name: 'Glass Repair/Replacement', icon: '🪟' },
    { id: 'mechanical', name: 'Mechanical Issues', icon: '🔧' },
    { id: 'electrical', name: 'Electrical Problems', icon: '⚡' },
    { id: 'other', name: 'Other', icon: '❓' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB
    const validFiles = files.filter(file => {
      if (file.size > maxSize) {
        error('File too large', `${file.name} exceeds 5MB limit`);
        return false;
      }
      return true;
    });
    
    setFormData(prev => ({ 
      ...prev, 
      images: [...prev.images, ...validFiles].slice(0, 5) // Max 5 images
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      error('Missing Information', 'Please fill in all required fields');
      return;
    }
    
    // Simulate submission
    success('Estimate Request Sent!', 'We\'ll contact you within 24 hours with your estimate');
    
    // Reset form after short delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.vehicleMake && formData.vehicleModel && formData.vehicleYear;
      case 2:
        return formData.damageType && formData.damageDescription;
      case 3:
        return formData.name && formData.email && formData.phone;
      default:
        return false;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className={`text-5xl md:text-6xl font-black mb-6 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Get Your Free Estimate
          </h1>
          <p className={`text-xl opacity-90 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Upload photos of your vehicle damage and receive a detailed repair estimate within 24 hours
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-white dark:bg-secondary-900 shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-secondary-700 dark:text-neutral-300">
                  Step {step} of 3
                </span>
                <span className="text-sm text-secondary-600 dark:text-neutral-400">
                  {step === 1 && 'Vehicle Information'}
                  {step === 2 && 'Damage Details'}
                  {step === 3 && 'Contact Information'}
                </span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-secondary-700 rounded-full h-2">
                <div 
                  className="bg-primary-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section ref={formRef} className="py-20 bg-neutral-50 dark:bg-secondary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form action="https://formspree.io/f/xzzgnnnb" method="POST" className="bg-white dark:bg-secondary-900 rounded-2xl shadow-xl p-8">
            {/* Step 1: Vehicle Information */}
            {step === 1 && (
              <div className={`space-y-6 transition-all duration-500 ${
                formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  Tell us about your vehicle
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                      Vehicle Make *
                    </label>
                    <Input
                      type="text"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      placeholder="e.g., Toyota"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                      Vehicle Model *
                    </label>
                    <Input
                      type="text"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      placeholder="e.g., Camry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                      Year *
                    </label>
                    <Input
                      type="number"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                      placeholder="e.g., 2020"
                      min="1990"
                      max={new Date().getFullYear() + 1}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                      VIN (Optional)
                    </label>
                    <Input
                      type="text"
                      name="vehicleVIN"
                      value={formData.vehicleVIN}
                      onChange={handleInputChange}
                      placeholder="Vehicle Identification Number"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Damage Details */}
            {step === 2 && (
              <div className={`space-y-6 transition-all duration-500 ${
                formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  Describe the damage
                </h2>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-4">
                    Type of Damage *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {damageTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, damageType: type.id }))}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          formData.damageType === type.id
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-neutral-200 dark:border-secondary-700 hover:border-primary-300'
                        }`}
                      >
                        <div className="text-3xl mb-2">{type.icon}</div>
                        <div className="text-sm font-medium">{type.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                    Damage Description *
                  </label>
                  <textarea
                    name="damageDescription"
                    value={formData.damageDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Please describe the damage in detail..."
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                    Upload Photos (Up to 5)
                  </label>
                  <div className="space-y-4">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-300 dark:border-secondary-600 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mb-2 text-sm text-neutral-500">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-neutral-400">PNG, JPG up to 5MB</p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                      />
                    </label>
                    
                    {formData.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {formData.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={URL.createObjectURL(image)} 
                              alt={`Upload ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className={`space-y-6 transition-all duration-500 ${
                formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  Your contact information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+233 XX XXX XXXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                      Location *
                    </label>
                    <Input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, Region"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 dark:text-neutral-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Phone</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-sm">WhatsApp</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200 dark:border-secondary-700">
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                disabled={step === 1}
                className={step === 1 ? 'invisible' : ''}
              >
                Previous
              </Button>
              
              <div className="flex gap-4">
                {step < 3 ? (
                  <Button
                    type="button"
                    variant="primary"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={!isStepValid()}
                  >
                    Submit Estimate Request
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howRef} className="py-20 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-all duration-1000 ${
              howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              How Online Estimates Work
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Submit Details', desc: 'Fill out the form with vehicle and damage information', icon: '📝' },
              { step: '2', title: 'Expert Review', desc: 'Our certified technicians review your submission', icon: '👨‍🔧' },
              { step: '3', title: 'Receive Estimate', desc: 'Get a detailed repair estimate within 24 hours', icon: '📊' },
              { step: '4', title: 'Schedule Service', desc: 'Book your repair at a convenient time', icon: '📅' }
            ].map((item, index) => (
              <div
                key={item.step}
                className={`text-center transition-all duration-500 delay-${index * 100} ${
                  howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-lg font-bold mb-2">Step {item.step}: {item.title}</div>
                <p className="text-secondary-600 dark:text-neutral-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EstimatesPage;