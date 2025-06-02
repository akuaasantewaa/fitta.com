// AI Service for handling chatbot responses
// Note: In production, this should be a backend service, not client-side

class AIService {
  constructor() {
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    this.apiURL = 'https://api.openai.com/v1/chat/completions';
    this.model = 'gpt-3.5-turbo'; // or 'gpt-4' for better responses
    this.maxTokens = 300;
    this.temperature = 0.7;
  }

  // Generate AI response using OpenAI API
  async generateResponse(message, context = {}) {
    // If no API key, fall back to mock responses
    if (!this.apiKey) {
      console.warn('OpenAI API key not configured, using mock responses');
      return this.getMockResponse(message, context);
    }

    try {
      const systemPrompt = this.getSystemPrompt(context.userType, context.user);
      const conversationHistory = this.buildConversationHistory(context.messages || [], message);

      const response = await fetch(this.apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            ...conversationHistory,
            { role: 'user', content: message }
          ],
          max_tokens: this.maxTokens,
          temperature: this.temperature,
          presence_penalty: 0.1,
          frequency_penalty: 0.1,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        content: data.choices[0].message.content,
        usage: data.usage,
        model: data.model,
      };

    } catch (error) {
      console.error('AI service error:', error);
      // Fall back to mock response on error
      return this.getMockResponse(message, context);
    }
  }

  // Build conversation history for context
  buildConversationHistory(messages, currentMessage) {
    // Get last 5 messages for context (to stay within token limits)
    const recentMessages = messages.slice(-5);
    
    return recentMessages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));
  }

  // Get system prompt based on user type
  getSystemPrompt(userType, user) {
    const userName = user?.name ? `, ${user.name}` : '';
    const basePrompt = `You are FITTA Assistant, a helpful AI customer service agent for FITTA - a vehicle services platform in Ghana and Africa. 

Key guidelines:
- Be professional, friendly, and empathetic
- Keep responses concise but helpful (under 200 words)
- Always prioritize safety in emergencies
- Use simple language and avoid technical jargon
- Include relevant emojis occasionally for a friendly tone
- For emergencies, always provide immediate actionable steps
- If you can't help with something, offer to escalate to human support

FITTA Services:
- 24/7 Emergency roadside assistance
- Vehicle collision repair
- Custom paint and bodywork
- Routine maintenance
- Insurance claims processing
- Towing services
- Garage partner network across Ghana

Coverage Areas: Accra, Kumasi, Takoradi, Cape Coast, Tamale and expanding across Ghana.

Emergency Hotline: +233 XXX XXXX`;

    const userTypePrompts = {
      'vehicle-owner': `${basePrompt}

You're assisting a vehicle owner${userName}. Focus on:
- Emergency roadside assistance procedures
- Service booking and scheduling
- Finding nearby garage partners
- Understanding service costs and coverage
- Managing service history and account
- Insurance claim guidance

Always ask for location if they need emergency help.`,

      'garage-partner': `${basePrompt}

You're assisting a garage partner${userName}. Focus on:
- Job notifications and assignments
- Platform navigation and features
- Payment schedules and commission rates
- Quality requirements and standards
- Customer communication guidelines
- Performance metrics and ratings

Help them maximize their earnings and customer satisfaction.`,

      'insurance': `${basePrompt}

You're assisting an insurance company representative${userName}. Focus on:
- Claims processing workflows
- Damage assessment report formats
- API integration guidance
- Analytics and reporting features
- Partner garage network information
- Platform integration support

Provide technical and process-oriented assistance.`,

      'admin': `${basePrompt}

You're assisting a platform administrator${userName}. Focus on:
- User management and oversight
- Partner garage approval processes
- Platform analytics and metrics
- System configuration options
- Quality control procedures
- Support ticket management

Provide comprehensive administrative guidance.`
    };

    return userTypePrompts[userType] || userTypePrompts['vehicle-owner'];
  }

  // Mock response fallback (enhanced from ChatContext)
  getMockResponse(message, context) {
    const lowerMessage = message.toLowerCase();
    const userType = context.userType || 'vehicle-owner';
    
    // Emergency detection
    if (this.detectEmergency(lowerMessage)) {
      return {
        content: "🚨 **EMERGENCY ASSISTANCE ACTIVATED**\n\nI've detected this is an emergency. Please follow these steps:\n\n1. **Stay Safe** - Move to a safe location if possible\n2. **Call Emergency Line**: +233 XXX XXXX\n3. **Share Location** - Enable GPS for fastest response\n\nOur nearest partner will be dispatched immediately!\n\n⏱️ Expected arrival: 15-30 minutes\n🚗 Towing and emergency repairs available\n\nStay on the line with our emergency team for updates.",
        urgent: true
      };
    }

    // Context-aware responses based on previous messages
    const contextKeywords = context.messages 
      ? context.messages.slice(-3).map(m => m.content.toLowerCase()).join(' ')
      : '';

    // Enhanced responses with better context awareness
    return this.getEnhancedMockResponse(lowerMessage, userType, contextKeywords);
  }

  // Detect emergency situations
  detectEmergency(message) {
    const emergencyKeywords = [
      'emergency', 'accident', 'crash', 'collision', 'breakdown', 'stuck',
      'help', 'urgent', 'stranded', 'towing', 'fire', 'smoke', 'danger',
      'injured', 'hurt', 'ambulance', 'police', 'highway', 'road'
    ];

    return emergencyKeywords.some(keyword => message.includes(keyword));
  }

  // Enhanced mock responses with better AI-like behavior
  getEnhancedMockResponse(message, userType, context) {
    const responses = {
      'vehicle-owner': {
        greeting: [
          "Hello! 👋 I'm FITTA Assistant. I'm here to help with all your vehicle service needs. What can I assist you with today?",
          "Hi there! Welcome to FITTA! 🚗 Whether you need emergency help, want to schedule service, or have questions about our platform, I'm here to help.",
          "Welcome to FITTA! I can help you with emergency assistance, service bookings, garage recommendations, and more. How can I help?"
        ],
        schedule: [
          "I'd be happy to help you schedule a service! 📅\n\nWhat type of service do you need?\n• Oil change & maintenance\n• Brake inspection\n• Tire service\n• Collision repair\n• General diagnostics\n\nAlso, what's your location so I can find nearby partners?",
          "Let's get your vehicle serviced! 🔧\n\nTo find the best garage partner for you, I need to know:\n1. Type of service needed\n2. Your location\n3. Preferred timing\n\nOur certified partners are available across Ghana!"
        ],
        location: [
          "FITTA serves major cities across Ghana! 🇬🇭\n\n**Primary Coverage:**\n• Accra & Greater Accra Region\n• Kumasi & Ashanti Region\n• Takoradi & Western Region\n• Cape Coast & Central Region\n• Tamale & Northern Region\n\n**24/7 Emergency**: Available everywhere\n**Expanding**: New regions monthly\n\nWhere are you located?",
          "We're proudly Ghana-wide! 🌍\n\nOur network covers all major cities with 500+ certified garage partners. Emergency services available 24/7 nationwide.\n\nTell me your location and I'll check coverage and response times in your area!"
        ]
      },
      'garage-partner': {
        greeting: [
          "Welcome to your Garage Partner dashboard! 🔧 I can help with job management, payments, platform navigation, and performance optimization. What do you need assistance with?",
          "Hi! Great to see you on the FITTA platform! 👷‍♂️ I'm here to help you maximize your earnings and provide excellent service. How can I assist you today?"
        ],
        jobs: [
          "Here's your current job overview! 📋\n\n**Active Jobs**: 2 pending\n**This Week**: 8 completed\n**Rating**: 4.8/5 ⭐\n**Earnings**: GHS 2,450 this month\n\nWould you like details on specific jobs or help with job management?",
          "Your job dashboard is looking great! 💪\n\n**Recent Performance:**\n• Jobs completed: 23 this month\n• Customer satisfaction: 96%\n• Average response time: 12 minutes\n\nNeed help with any specific jobs or want tips to boost your ratings?"
        ]
      },
      'insurance': {
        greeting: [
          "Welcome to FITTA Insurance Portal! 📋 I can assist with claims processing, damage reports, platform integration, and analytics. How may I help you today?",
          "Hello! I'm here to support your insurance operations on FITTA. Whether you need help with claims, reports, or system integration, I've got you covered! 💼"
        ],
        claims: [
          "Your claims processing dashboard! 📊\n\n**Today's Status:**\n• Pending claims: 15\n• Average processing: 2.3 days\n• Success rate: 97.8%\n\n**Integration Status:**\n• API calls: 1,247 today\n• System uptime: 99.9%\n\nNeed help with specific claims or reporting?",
          "Claims management at a glance! 📈\n\n**This Month:**\n• Claims processed: 147\n• Average settlement: GHS 3,200\n• Digital documentation: 100%\n\nOur standardized reports ensure faster processing. Need assistance with anything specific?"
        ]
      }
    };

    // Select response type based on message content
    const messageTypes = {
      greeting: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'start'],
      schedule: ['schedule', 'appointment', 'book', 'service', 'maintenance'],
      location: ['coverage', 'area', 'location', 'where', 'region'],
      jobs: ['job', 'work', 'assignment', 'task'],
      claims: ['claim', 'insurance', 'process', 'report']
    };

    const userResponses = responses[userType] || responses['vehicle-owner'];
    
    // Find matching response type
    for (const [type, keywords] of Object.entries(messageTypes)) {
      if (keywords.some(keyword => message.includes(keyword)) && userResponses[type]) {
        const typeResponses = userResponses[type];
        return {
          content: typeResponses[Math.floor(Math.random() * typeResponses.length)]
        };
      }
    }

    // Default greeting response
    const greetings = userResponses.greeting || userResponses[Object.keys(userResponses)[0]];
    return {
      content: greetings[Math.floor(Math.random() * greetings.length)]
    };
  }

  // Check if service is available
  isAvailable() {
    return true; // Always available with fallback to mock
  }

  // Get service status
  getStatus() {
    return {
      available: this.isAvailable(),
      hasApiKey: !!this.apiKey,
      model: this.model,
      fallbackMode: !this.apiKey
    };
  }
}

// Create and export singleton instance
export const aiService = new AIService();

// Export utility functions
export const aiUtils = {
  // Estimate response time based on message complexity
  estimateResponseTime(message) {
    const wordCount = message.split(' ').length;
    const baseTime = 1000; // 1 second base
    const perWordTime = 50; // 50ms per word
    return Math.min(baseTime + (wordCount * perWordTime), 4000); // Max 4 seconds
  },

  // Analyze message sentiment
  analyzeSentiment(message) {
    const positiveWords = ['good', 'great', 'excellent', 'happy', 'satisfied', 'pleased'];
    const negativeWords = ['bad', 'terrible', 'awful', 'angry', 'frustrated', 'disappointed'];
    
    const lowerMessage = message.toLowerCase();
    const positive = positiveWords.filter(word => lowerMessage.includes(word)).length;
    const negative = negativeWords.filter(word => lowerMessage.includes(word)).length;
    
    if (positive > negative) return 'positive';
    if (negative > positive) return 'negative';
    return 'neutral';
  },

  // Extract intent from message
  extractIntent(message) {
    const intents = {
      emergency: ['emergency', 'help', 'urgent', 'accident', 'breakdown'],
      booking: ['schedule', 'book', 'appointment', 'service'],
      information: ['what', 'how', 'when', 'where', 'why'],
      complaint: ['problem', 'issue', 'wrong', 'bad', 'disappointed'],
      compliment: ['good', 'great', 'excellent', 'satisfied', 'pleased']
    };

    const lowerMessage = message.toLowerCase();
    
    for (const [intent, keywords] of Object.entries(intents)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        return intent;
      }
    }
    
    return 'general';
  }
};

export default aiService;