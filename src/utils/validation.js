// Form validation utilities for FITTA
import { useState } from 'react';
export const validationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters long',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      message: 'Password must contain uppercase, lowercase, number and special character',
    },
  },
  confirmPassword: {
    required: 'Please confirm your password',
    validate: (value, formValues) => 
      value === formValues.password || 'Passwords do not match',
  },
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters long',
    },
    maxLength: {
      value: 50,
      message: 'Name cannot exceed 50 characters',
    },
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message: 'Name can only contain letters and spaces',
    },
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^(\+233|0)[2-9]\d{8}$/,
      message: 'Please enter a valid Ghana phone number',
    },
  },
  businessName: {
    required: 'Business name is required',
    minLength: {
      value: 2,
      message: 'Business name must be at least 2 characters long',
    },
    maxLength: {
      value: 100,
      message: 'Business name cannot exceed 100 characters',
    },
  },
  licenseNumber: {
    required: 'License number is required',
    minLength: {
      value: 5,
      message: 'License number must be at least 5 characters long',
    },
  },
  vehicleRegNumber: {
    required: 'Vehicle registration number is required',
    pattern: {
      value: /^[A-Z]{2,3}[-\s]?\d{1,4}[-\s]?[A-Z]{1,3}$/i,
      message: 'Please enter a valid vehicle registration number',
    },
  },
  location: {
    required: 'Location is required',
    minLength: {
      value: 2,
      message: 'Location must be at least 2 characters long',
    },
  },
};

// Custom validation functions
export const validateField = (fieldName, value, formData = {}) => {
  const rules = validationRules[fieldName];
  if (!rules) return null;

  // Required validation
  if (rules.required && (!value || value.trim() === '')) {
    return rules.required;
  }

  if (!value) return null; // If not required and empty, skip other validations

  // Min length validation
  if (rules.minLength && value.length < rules.minLength.value) {
    return rules.minLength.message;
  }

  // Max length validation
  if (rules.maxLength && value.length > rules.maxLength.value) {
    return rules.maxLength.message;
  }

  // Pattern validation
  if (rules.pattern && !rules.pattern.value.test(value)) {
    return rules.pattern.message;
  }

  // Custom validation function
  if (rules.validate && typeof rules.validate === 'function') {
    return rules.validate(value, formData);
  }

  return null;
};

// Validate entire form
export const validateForm = (formData, fieldRules) => {
  const errors = {};
  let isValid = true;

  Object.keys(fieldRules).forEach(fieldName => {
    const error = validateField(fieldName, formData[fieldName], formData);
    if (error) {
      errors[fieldName] = error;
      isValid = false;
    }
  });

  return { isValid, errors };
};

// Real-time validation hook
export const useFormValidation = (initialData = {}, validationSchema = {}) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateFieldAndUpdate = (fieldName, value) => {
    const error = validateField(fieldName, value, { ...data, [fieldName]: value });
    setErrors(prev => ({
      ...prev,
      [fieldName]: error,
    }));
    return !error;
  };

  const handleChange = (fieldName, value) => {
    setData(prev => ({ ...prev, [fieldName]: value }));
    
    // Only validate if field has been touched
    if (touched[fieldName]) {
      validateFieldAndUpdate(fieldName, value);
    }
  };

  const handleBlur = (fieldName) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    validateFieldAndUpdate(fieldName, data[fieldName]);
  };

  const validateAll = () => {
    const { isValid, errors: allErrors } = validateForm(data, validationSchema);
    setErrors(allErrors);
    setTouched(Object.keys(validationSchema).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {}));
    return isValid;
  };

  const reset = (newData = initialData) => {
    setData(newData);
    setErrors({});
    setTouched({});
  };

  return {
    data,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
    isValid: Object.keys(errors).length === 0 && Object.keys(touched).length > 0,
  };
};

// Ghana-specific validation helpers
export const ghanaValidations = {
  phoneNumber: (value) => {
    const cleaned = value.replace(/\s+/g, '');
    const ghanaPhoneRegex = /^(\+233|0)[2-9]\d{8}$/;
    return ghanaPhoneRegex.test(cleaned);
  },
  
  digitalAddress: (value) => {
    // Ghana Post GPS address format: XX-XXXX-XXXX
    const ghanaGPSRegex = /^[A-Z]{2}-\d{4}-\d{4}$/i;
    return ghanaGPSRegex.test(value);
  },
  
  vehicleRegistration: (value) => {
    // Ghana vehicle registration formats
    const formats = [
      /^[A-Z]{2,3}\s?\d{1,4}\s?[A-Z]{1,3}$/i, // Standard format
      /^[A-Z]{2}\s?\d{1,4}\s?[A-Z]{2}$/i,     // Alternative format
    ];
    return formats.some(regex => regex.test(value));
  },
};

export default {
  validationRules,
  validateField,
  validateForm,
  useFormValidation,
  ghanaValidations,
};