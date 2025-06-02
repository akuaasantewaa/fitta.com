import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../common/Card';
import { LoadingButton } from '../common/Loading';
import { InlineError } from '../common/ErrorBoundary';
import { useAuth } from '../../context/AuthContext';
import { validateField } from '../../utils/validation';

const LoginForm = ({ userType, onSwitchToRegister }) => {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate email
    const emailError = validateField('email', formData.email, formData);
    if (emailError) {
      errors.email = emailError;
      isValid = false;
    }

    // Validate password (just required for login)
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setFieldErrors(errors);
    setTouched({ email: true, password: true });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const result = await login(formData, userType);
    
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

  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader className="text-center">
        <div className="text-5xl mb-4">{getUserTypeIcon()}</div>
        <CardTitle className="text-3xl font-black uppercase tracking-tight">
          {getUserTypeLabel()} Login
        </CardTitle>
        <p className="text-secondary-600 dark:text-neutral-400 font-medium">
          Welcome back! Please sign in to continue.
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <InlineError message={error} className="justify-center" />
          )}

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
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            onBlur={() => handleBlur('password')}
            error={touched.password ? fieldErrors.password : null}
            placeholder="Enter your password"
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-neutral-300" />
              <span>Remember me</span>
            </label>
            <button
              type="button"
              className="text-primary-500 hover:text-primary-700 transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <LoadingButton
            type="submit"
            className="w-full"
            isLoading={isLoading}
          >
            Sign In
          </LoadingButton>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-primary-500 hover:text-primary-700 font-medium transition-colors"
            >
              Sign up here
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

export default LoginForm;