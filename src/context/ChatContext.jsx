import { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import { useNotifications } from './NotificationContext';
import { aiService, aiUtils } from '../services/aiService';

const ChatContext = createContext();

// Initial state
const initialState = {
  messages: [],
  isTyping: false,
  isConnected: true, // For now, assume always connected
  conversationId: null,
  sessionStarted: Date.now(),
  messageCount: 0,
};

// Action types
const CHAT_ACTIONS = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  SET_TYPING: 'SET_TYPING',
  SET_CONNECTED: 'SET_CONNECTED',
  CLEAR_MESSAGES: 'CLEAR_MESSAGES',
  SET_CONVERSATION_ID: 'SET_CONVERSATION_ID',
  MARK_MESSAGE_DELIVERED: 'MARK_MESSAGE_DELIVERED',
  MARK_MESSAGE_READ: 'MARK_MESSAGE_READ',
};

// Reducer function
function chatReducer(state, action) {
  switch (action.type) {
    case CHAT_ACTIONS.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          content: action.payload.content,
          sender: action.payload.sender,
          timestamp: action.payload.timestamp || Date.now(),
          status: action.payload.status || 'sent',
          metadata: action.payload.metadata || {},
        }],
        messageCount: state.messageCount + 1,
      };

    case CHAT_ACTIONS.SET_TYPING:
      return {
        ...state,
        isTyping: action.payload,
      };

    case CHAT_ACTIONS.SET_CONNECTED:
      return {
        ...state,
        isConnected: action.payload,
      };

    case CHAT_ACTIONS.CLEAR_MESSAGES:
      return {
        ...state,
        messages: [],
        messageCount: 0,
      };

    case CHAT_ACTIONS.SET_CONVERSATION_ID:
      return {
        ...state,
        conversationId: action.payload,
      };

    case CHAT_ACTIONS.MARK_MESSAGE_DELIVERED:
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg.id === action.payload ? { ...msg, status: 'delivered' } : msg
        ),
      };

    case CHAT_ACTIONS.MARK_MESSAGE_READ:
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg.id === action.payload ? { ...msg, status: 'read' } : msg
        ),
      };

    default:
      return state;
  }
}

// Mock AI responses for different user types
const getMockAIResponse = (message, userType, context) => {
  const lowerMessage = message.toLowerCase();
  
  // Emergency keywords
  if (lowerMessage.includes('emergency') || lowerMessage.includes('accident') || lowerMessage.includes('breakdown')) {
    return {
      content: "🚨 **Emergency Assistance Activated**\n\nI've detected this is an emergency. Here's what to do:\n\n1. **Stay Safe** - Move to a safe location if possible\n2. **Share Location** - I'll help you share your GPS location\n3. **Emergency Contact** - Calling our 24/7 emergency line\n\nOur nearest partner garage will be dispatched immediately. Estimated arrival: 15-30 minutes.\n\n**Emergency Hotline: +233 XXX XXXX**",
      urgent: true
    };
  }

  // User type specific responses
  const responses = {
    'vehicle-owner': {
      'schedule': "I can help you schedule a service! 📅\n\nWhat type of service do you need?\n• Oil change & maintenance\n• Tire service\n• Brake inspection\n• General repair\n• Collision repair\n\nJust let me know and I'll find available slots with our certified partners near you.",
      'coverage': "FITTA currently covers these areas in Ghana 🇬🇭:\n\n**Major Cities:**\n• Accra & Greater Accra\n• Kumasi & Ashanti Region\n• Takoradi & Western Region\n• Cape Coast & Central Region\n• Tamale & Northern Region\n\n**24/7 Emergency Coverage**\nWe're expanding to more regions every month. Where are you located?",
      'default': `Hi! I'm your FITTA assistant. I can help you with:\n\n🚗 **Vehicle Services**\n• Emergency roadside assistance\n• Service scheduling\n• Garage partner recommendations\n\n📋 **Account Management**\n• Service history\n• Payment options\n• Profile updates\n\n❓ **General Support**\n• Coverage areas\n• Pricing information\n• How-to guides\n\nWhat would you like assistance with?`
    },
    'garage-partner': {
      'jobs': "Here's your current job status 👷‍♂️:\n\n**Active Jobs:** 2\n• Vehicle inspection - Accra (Due: Today 3PM)\n• Brake repair - Tema (Due: Tomorrow 10AM)\n\n**Pending Jobs:** 1\n• Oil change - East Legon (Waiting confirmation)\n\n**This Week:** 8 completed jobs\n**Rating:** 4.8/5 ⭐\n\nWould you like details on any specific job?",
      'payment': "💰 **Payment Information**\n\n**This Month:**\n• Earnings: GHS 2,450\n• Commission Rate: 15%\n• Jobs Completed: 23\n\n**Payment Schedule:**\n• Weekly payments every Friday\n• Next payment: GHS 650 (This Friday)\n\n**Payment Methods:**\n• Mobile Money (MTN/Vodafone)\n• Bank Transfer\n\nNeed to update payment details?",
      'default': "Welcome to your Garage Partner dashboard! 🔧\n\nI can assist you with:\n\n📋 **Job Management**\n• View active assignments\n• Update job status\n• Access customer details\n\n💰 **Payments & Earnings**\n• Check payment status\n• View commission rates\n• Update payment methods\n\n📈 **Performance**\n• Customer ratings\n• Completion statistics\n• Quality feedback\n\nHow can I help you today?"
    },
    'insurance': {
      'claims': "📋 **Claims Processing Dashboard**\n\n**Pending Claims:** 15\n• Average processing time: 2.3 days\n• Pending documentation: 3\n• Ready for approval: 12\n\n**This Month:**\n• Claims processed: 147\n• Average settlement: GHS 3,200\n• Customer satisfaction: 94%\n\n**Integration Status:**\n• API calls today: 1,247\n• System uptime: 99.9%\n\nNeed help with specific claims?",
      'reports': "📊 **Damage Assessment Reports**\n\nOur standardized reports include:\n\n✅ **Digital Documentation**\n• High-resolution photos\n• 360° damage assessment\n• GPS location data\n• Timestamp verification\n\n✅ **Technical Details**\n• Parts damage assessment\n• Labor cost estimates\n• Repair timeline\n• OEM vs aftermarket options\n\n✅ **Quality Assurance**\n• Certified technician signatures\n• Multi-point verification\n• Insurance company integration\n\nWould you like a sample report?",
      'default': "Welcome to FITTA Insurance Portal! 📋\n\nI can help you with:\n\n🔍 **Claims Management**\n• Process new claims\n• Track claim status\n• Review documentation\n\n📊 **Reports & Analytics**\n• Damage assessments\n• Cost analysis\n• Performance metrics\n\n🔗 **Integration Support**\n• API documentation\n• System connectivity\n• Data synchronization\n\nWhat would you like assistance with?"
    },
    'admin': {
      'analytics': "📊 **Platform Analytics Overview**\n\n**Today's Metrics:**\n• Active users: 1,247\n• Service requests: 89\n• Emergency calls: 12\n• Revenue: GHS 15,670\n\n**This Month:**\n• User growth: +15.3%\n• Partner garages: 127 active\n• Customer satisfaction: 4.7/5\n• Platform uptime: 99.9%\n\n**Alerts:**\n• 2 garages need verification\n• 1 payment processing issue\n\nNeed detailed reports?",
      'users': "👥 **User Management Summary**\n\n**User Distribution:**\n• Vehicle Owners: 2,847 (↑ 12%)\n• Garage Partners: 127 (↑ 8%)\n• Insurance Companies: 15\n• Active Sessions: 342\n\n**Recent Activity:**\n• New registrations today: 23\n• Pending verifications: 7\n• Support tickets: 5 open\n\n**Quality Metrics:**\n• Average response time: 2.3 min\n• Resolution rate: 94%\n\nNeed to review specific users?",
      'default': "Admin Dashboard Access Granted 🛡️\n\nSystem overview:\n\n📊 **Analytics & Monitoring**\n• Real-time metrics\n• Performance reports\n• User activity tracking\n\n👥 **User Management**\n• Account oversight\n• Verification processes\n• Support ticket management\n\n🔧 **System Administration**\n• Partner garage approval\n• Platform configuration\n• Quality control\n\nWhat would you like to manage?"
    }
  };

  // Get response for user type
  const userResponses = responses[userType] || responses['vehicle-owner'];
  
  // Check for specific keywords
  for (const [keyword, response] of Object.entries(userResponses)) {
    if (keyword !== 'default' && lowerMessage.includes(keyword)) {
      return { content: response };
    }
  }

  // Default response
  return { content: userResponses.default };
};

// Chat Provider Component
export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const { error: notifyError } = useNotifications();

  // Initialize conversation
  useEffect(() => {
    if (!state.conversationId) {
      const conversationId = `conv_guest_${Date.now()}`;
      dispatch({ 
        type: CHAT_ACTIONS.SET_CONVERSATION_ID, 
        payload: conversationId 
      });
    }
  }, [state.conversationId]);

  // Send message function
  const sendMessage = useCallback(async (content, sender = 'user') => {
    try {
      // Add user message immediately
      dispatch({
        type: CHAT_ACTIONS.ADD_MESSAGE,
        payload: {
          content,
          sender,
          timestamp: Date.now(),
          status: 'sent',
        },
      });

      // If it's a user message, get AI response
      if (sender === 'user') {
        // Show typing indicator
        dispatch({ type: CHAT_ACTIONS.SET_TYPING, payload: true });

        // Estimate response time based on message complexity
        const responseTime = aiUtils.estimateResponseTime(content);
        await new Promise(resolve => setTimeout(resolve, responseTime));

        // Get AI response
        const aiResponse = await aiService.generateResponse(content, {
          userType: 'vehicle-owner', // Default to vehicle-owner for guests
          user: null,
          messageCount: state.messageCount,
          messages: state.messages,
        });

        // Add AI response
        dispatch({
          type: CHAT_ACTIONS.ADD_MESSAGE,
          payload: {
            content: aiResponse.content,
            sender: 'bot',
            timestamp: Date.now(),
            status: 'delivered',
            metadata: {
              urgent: aiResponse.urgent || false,
            },
          },
        });

        // Hide typing indicator
        dispatch({ type: CHAT_ACTIONS.SET_TYPING, payload: false });

        // If urgent message, show notification
        if (aiResponse.urgent) {
          notifyError('Emergency', 'Emergency assistance has been activated');
        }
      }

    } catch (error) {
      console.error('Failed to send message:', error);
      dispatch({ type: CHAT_ACTIONS.SET_TYPING, payload: false });
      
      // Add error message
      dispatch({
        type: CHAT_ACTIONS.ADD_MESSAGE,
        payload: {
          content: "Sorry, I'm having trouble connecting right now. Please try again or contact support if the issue persists.",
          sender: 'bot',
          timestamp: Date.now(),
          status: 'error',
        },
      });
    }
  }, [state.messageCount, state.messages, notifyError]);

  // Clear messages function
  const clearMessages = useCallback(() => {
    dispatch({ type: CHAT_ACTIONS.CLEAR_MESSAGES });
  }, []);

  // Set connection status
  const setConnected = useCallback((connected) => {
    dispatch({ type: CHAT_ACTIONS.SET_CONNECTED, payload: connected });
  }, []);

  // Context value
  const value = {
    ...state,
    sendMessage,
    clearMessages,
    setConnected,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

// Custom hook to use chat context
export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

export default ChatContext;