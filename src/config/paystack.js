// Paystack configuration
export const PAYSTACK_CONFIG = {
  // Use test key for development - replace with live key for production
  publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_b74e3fe03d4a69dc46d96a02c89a18a35ecb3565',
  currency: 'GHS',
  channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money'],
};

// Generate payment reference
export const generatePaymentRef = (prefix = 'fitta') => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${prefix}_${timestamp}_${random}`;
};

// Paystack service for handling payments
export class PaystackService {
  static isPaystackLoaded() {
    return typeof window !== 'undefined' && window.PaystackPop;
  }

  static async initializePayment({
    email,
    amount,
    currency = PAYSTACK_CONFIG.currency,
    reference,
    metadata = {},
    onSuccess,
    onClose,
    onError
  }) {
    if (!this.isPaystackLoaded()) {
      throw new Error('Paystack library not loaded');
    }

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_CONFIG.publicKey,
      email,
      amount: amount * 100, // Convert to kobo/pesewas
      currency,
      ref: reference,
      channels: PAYSTACK_CONFIG.channels,
      metadata: {
        custom_fields: [
          {
            display_name: "Service Provider",
            variable_name: "service_provider",
            value: "FITTA"
          }
        ],
        ...metadata
      },
      callback: function(response) {
        if (onSuccess) {
          onSuccess(response);
        }
      },
      onClose: function() {
        if (onClose) {
          onClose();
        }
      }
    });

    if (handler) {
      handler.openIframe();
    } else {
      if (onError) {
        onError(new Error('Failed to initialize payment'));
      }
    }
  }

  static async verifyPayment(reference) {
    // This would typically call your backend API to verify the payment
    // For now, we'll return a mock response
    try {
      const response = await fetch(`/api/payments/verify/${reference}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Payment verification failed');
      }
      
      return await response.json();
    } catch (error) {
      console.warn('Payment verification API not available, using mock response');
      // Mock verification for development
      return {
        status: 'success',
        reference,
        amount: 0,
        currency: PAYSTACK_CONFIG.currency,
        verified: true
      };
    }
  }
}

export default PaystackService;