import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../common/Card';
import { LoadingButton } from '../common/Loading';
import { InlineError } from '../common/ErrorBoundary';
import { useAuth } from '../../context/AuthContext';
import { validateField } from '../../utils/validation';

const RegisterForm = ({ userType, onSwitchToLogin }) => {
  const navigate = useNavigate();
  const { register, isLoading, error, clearError } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    // User-type specific fields
    businessName: '',
    licenseNumber: '',
    location: '',
    agreeToTerms: false,
  });
  
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear previous errors
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: null }));
    }
    if (error) clearError();
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const fieldError = validateField(field, formData[field], formData);
    setFieldErrors(prev => ({ ...prev, [field]: fieldError }));
  };

  const getRequiredFields = () => {
    const baseFields = ['name', 'email', 'phone', 'password', 'confirmPassword'];
    
    switch (userType) {
      case 'garage-partner':
        return [...baseFields, 'businessName', 'licenseNumber', 'location'];
      case 'insurance':
        return [...baseFields, 'businessName', 'licenseNumber'];
      default:
        return baseFields;
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    const requiredFields = getRequiredFields();

    requiredFields.forEach(field => {
      const fieldError = validateField(field, formData[field], formData);
      if (fieldError) {
        errors[field] = fieldError;
        isValid = false;
      }
    });

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the terms and conditions';
      isValid = false;
    }

    setFieldErrors(errors);
    setTouched(requiredFields.reduce((acc, field) => {
      acc[field] = true;
      return acc;
    }, { agreeToTerms: true }));
    
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const result = await register(formData, userType);
    
    if (result.success) {
      // Navigate to appropriate dashboard
      navigate(`/${userType}`);
    }
  };

  const getUserTypeLabel = () => {
    const labels = {
      'vehicle-owner': 'Vehicle Owner',
      'garage-partner': 'Garage Partner', 
      'insurance': 'Insurance Company',
      'admin': 'Administrator'
    };
    return labels[userType] || 'User';
  };

  const getUserTypeIcon = () => {
    const icons = {
      'vehicle-owner': '🚗',
      'garage-partner': '🔧',
      'insurance': '🛡️',
      'admin': '⚙️'
    };
    return icons[userType] || '👤';
  };

  const renderUserTypeSpecificFields = () => {
    switch (userType) {
      case 'garage-partner':
        return (
          <>
            <Input
              label="Business Name"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              onBlur={() => handleBlur('businessName')}
              error={touched.businessName ? fieldErrors.businessName : null}
              placeholder="Enter your garage/business name"
              required
            />
            <Input
              label="License Number"
              value={formData.licenseNumber}
              onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
              onBlur={() => handleBlur('licenseNumber')}
              error={touched.licenseNumber ? fieldErrors.licenseNumber : null}
              placeholder="Enter your business license number"
              required
            />
            <Input
              label="Business Location"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              onBlur={() => handleBlur('location')}
              error={touched.location ? fieldErrors.location : null}
              placeholder="Enter your business location"
              required
            />
          </>
        );
      
      case 'insurance':
        return (
          <>
            <Input
              label="Company Name"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              onBlur={() => handleBlur('businessName')}
              error={touched.businessName ? fieldErrors.businessName : null}
              placeholder="Enter your insurance company name"
              required
            />
            <Input
              label="License/Registration Number"
              value={formData.licenseNumber}
              onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
              onBlur={() => handleBlur('licenseNumber')}
              error={touched.licenseNumber ? fieldErrors.licenseNumber : null}
              placeholder="Enter your company registration number"
              required
            />
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader className="text-center">
        <div className="text-5xl mb-4">{getUserTypeIcon()}</div>
        <CardTitle className="text-3xl font-black uppercase tracking-tight">
          Join as {getUserTypeLabel()}
        </CardTitle>
        <p className="text-secondary-600 dark:text-neutral-400 font-medium">
          Create your account to get started
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <InlineError message={error} className="justify-center" />
          )}

          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            error={touched.name ? fieldErrors.name : null}
            placeholder="Enter your full name"
            required
          />

          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            error={touched.email ? fieldErrors.email : null}
            placeholder="Enter your email"
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            error={touched.phone ? fieldErrors.phone : null}
            placeholder="e.g., +233 24 123 4567"
            required
          />

          {renderUserTypeSpecificFields()}

          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            onBlur={() => handleBlur('password')}
            error={touched.password ? fieldErrors.password : null}
            placeholder="Create a strong password"
            required
          />

          <Input
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            error={touched.confirmPassword ? fieldErrors.confirmPassword : null}
            placeholder="Confirm your password"
            required
          />

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
              className="mt-1 rounded border-neutral-300"
            />
            <label htmlFor="agreeToTerms" className="text-sm text-neutral-600 dark:text-neutral-400">
              I agree to the{' '}
              <button type="button" className="text-primary-500 hover:text-primary-700">
                Terms of Service
              </button>{' '}
              and{' '}
              <button type="button" className="text-primary-500 hover:text-primary-700">
                Privacy Policy
              </button>
            </label>
          </div>
          {touched.agreeToTerms && fieldErrors.agreeToTerms && (
            <InlineError message={fieldErrors.agreeToTerms} />
          )}

          <LoadingButton
            type="submit"
            className="w-full"
            isLoading={isLoading}
          >
            Create Account
          </LoadingButton>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-primary-500 hover:text-primary-700 font-medium transition-colors"
            >
              Sign in here
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;