// Chat service for handling API communications
class ChatService {
  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
    this.wsURL = import.meta.env.VITE_WEBSOCKET_URL || 'ws://localhost:3001';
    this.apiKey = import.meta.env.VITE_CHAT_API_KEY;
    this.socket = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1000;
  }

  // Initialize WebSocket connection
  initializeSocket(userId, onMessage, onConnectionChange) {
    try {
      this.socket = new WebSocket(`${this.wsURL}/chat?userId=${userId}`);
      
      this.socket.onopen = () => {
        console.log('Chat WebSocket connected');
        this.reconnectAttempts = 0;
        if (onConnectionChange) onConnectionChange(true);
      };

      this.socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (onMessage) onMessage(data);
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };

      this.socket.onclose = () => {
        console.log('Chat WebSocket disconnected');
        if (onConnectionChange) onConnectionChange(false);
        this.handleReconnect(userId, onMessage, onConnectionChange);
      };

      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        if (onConnectionChange) onConnectionChange(false);
      };

    } catch (error) {
      console.error('Failed to initialize WebSocket:', error);
      if (onConnectionChange) onConnectionChange(false);
    }
  }

  // Handle WebSocket reconnection
  handleReconnect(userId, onMessage, onConnectionChange) {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
      
      setTimeout(() => {
        console.log(`Attempting to reconnect... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        this.initializeSocket(userId, onMessage, onConnectionChange);
      }, delay);
    } else {
      console.error('Max reconnection attempts reached');
    }
  }

  // Send message via REST API
  async sendMessage(messageData) {
    try {
      const response = await fetch(`${this.baseURL}/chat/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          content: messageData.content,
          userType: messageData.userType,
          userId: messageData.userId,
          conversationId: messageData.conversationId,
          context: messageData.context,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to send message via API:', error);
      throw error;
    }
  }

  // Send message via WebSocket (real-time)
  sendMessageWS(messageData) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({
        type: 'message',
        ...messageData,
        timestamp: Date.now(),
      }));
      return true;
    }
    return false;
  }

  // Get conversation history
  async getConversationHistory(conversationId, limit = 50) {
    try {
      const response = await fetch(
        `${this.baseURL}/chat/conversation/${conversationId}?limit=${limit}`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.messages || [];
    } catch (error) {
      console.error('Failed to get conversation history:', error);
      return [];
    }
  }

  // Start new conversation
  async startConversation(userId, userType) {
    try {
      const response = await fetch(`${this.baseURL}/chat/conversation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          userId,
          userType,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.conversationId;
    } catch (error) {
      console.error('Failed to start conversation:', error);
      throw error;
    }
  }

  // End conversation
  async endConversation(conversationId) {
    try {
      const response = await fetch(`${this.baseURL}/chat/conversation/${conversationId}/end`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Failed to end conversation:', error);
      return false;
    }
  }

  // Get chat analytics
  async getChatAnalytics(timeRange = '7d') {
    try {
      const response = await fetch(
        `${this.baseURL}/chat/analytics?range=${timeRange}`,
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to get chat analytics:', error);
      return null;
    }
  }

  // Submit feedback
  async submitFeedback(conversationId, rating, feedback) {
    try {
      const response = await fetch(`${this.baseURL}/chat/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          conversationId,
          rating,
          feedback,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      return false;
    }
  }

  // Escalate to human agent
  async escalateToHuman(conversationId, reason, priority = 'normal') {
    try {
      const response = await fetch(`${this.baseURL}/chat/escalate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          conversationId,
          reason,
          priority,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to escalate to human:', error);
      throw error;
    }
  }

  // Close WebSocket connection
  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  // Check if connected
  isConnected() {
    return this.socket && this.socket.readyState === WebSocket.OPEN;
  }
}

// Create singleton instance
export const chatService = new ChatService();

// Export utility functions
export const chatUtils = {
  // Format message timestamp
  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    // Less than 1 minute
    if (diff < 60000) {
      return 'Just now';
    }
    
    // Less than 1 hour
    if (diff < 3600000) {
      const minutes = Math.floor(diff / 60000);
      return `${minutes}m ago`;
    }
    
    // Less than 24 hours
    if (diff < 86400000) {
      const hours = Math.floor(diff / 3600000);
      return `${hours}h ago`;
    }
    
    // More than 24 hours
    return date.toLocaleDateString();
  },

  // Sanitize message content
  sanitizeMessage(content) {
    return content
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .trim()
      .substring(0, 1000); // Limit length
  },

  // Extract keywords from message
  extractKeywords(content) {
    const keywords = [
      'emergency', 'accident', 'breakdown', 'towing',
      'schedule', 'appointment', 'booking',
      'payment', 'billing', 'cost', 'price',
      'location', 'address', 'GPS',
      'insurance', 'claim', 'coverage',
      'garage', 'mechanic', 'repair',
      'help', 'support', 'assistance'
    ];

    const lowerContent = content.toLowerCase();
    return keywords.filter(keyword => lowerContent.includes(keyword));
  },

  // Generate conversation summary
  generateSummary(messages) {
    if (!messages || messages.length === 0) return '';
    
    const userMessages = messages.filter(m => m.sender === 'user');
    const keywords = userMessages
      .flatMap(m => this.extractKeywords(m.content))
      .filter((keyword, index, arr) => arr.indexOf(keyword) === index);
    
    return keywords.slice(0, 5).join(', ') || 'General inquiry';
  }
};

export default chatService;