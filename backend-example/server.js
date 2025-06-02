// Example backend server for FITTA chat system
// This is a minimal example - in production, use a more robust setup

const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (use database in production)
const conversations = new Map();
const activeConnections = new Map();

// OpenAI integration (if API key is provided)
let openai = null;
if (process.env.OPENAI_API_KEY) {
  const { OpenAI } = require('openai');
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

// AI response generation
async function generateAIResponse(message, context) {
  if (openai) {
    try {
      const systemPrompt = getSystemPrompt(context.userType, context.user);
      
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API error:', error);
      return getMockResponse(message, context);
    }
  } else {
    return getMockResponse(message, context);
  }
}

// System prompt generator
function getSystemPrompt(userType, user) {
  const userName = user?.name ? `, ${user.name}` : '';
  const basePrompt = `You are FITTA Assistant, a helpful AI customer service agent for FITTA - a vehicle services platform in Ghana and Africa. Be professional, friendly, and concise.`;

  const userTypePrompts = {
    'vehicle-owner': `${basePrompt} You're helping a vehicle owner${userName} with emergency assistance, service bookings, and platform navigation.`,
    'garage-partner': `${basePrompt} You're helping a garage partner${userName} with job management, payments, and platform features.`,
    'insurance': `${basePrompt} You're helping an insurance company${userName} with claims processing and platform integration.`,
    'admin': `${basePrompt} You're helping an administrator${userName} with platform management and oversight.`
  };

  return userTypePrompts[userType] || userTypePrompts['vehicle-owner'];
}

// Mock response fallback
function getMockResponse(message, context) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('emergency') || lowerMessage.includes('help')) {
    return "🚨 Emergency assistance activated! Our team will contact you shortly. Stay safe and call +233 XXX XXXX for immediate help.";
  }
  
  if (lowerMessage.includes('schedule') || lowerMessage.includes('book')) {
    return "I can help you schedule a service! What type of service do you need and what's your location?";
  }
  
  return "Hello! I'm FITTA Assistant. I can help you with emergency assistance, service bookings, and platform support. How can I assist you today?";
}

// REST API Routes

// Send message endpoint
app.post('/api/chat/message', async (req, res) => {
  try {
    const { content, userType, userId, conversationId, context } = req.body;
    
    // Generate AI response
    const aiResponse = await generateAIResponse(content, {
      userType,
      user: context?.user,
      messages: context?.messages || []
    });

    // Store conversation (in production, use database)
    if (!conversations.has(conversationId)) {
      conversations.set(conversationId, []);
    }
    
    const conversation = conversations.get(conversationId);
    conversation.push(
      { role: 'user', content, timestamp: Date.now() },
      { role: 'assistant', content: aiResponse, timestamp: Date.now() }
    );

    // Emit to WebSocket if user is connected
    const userSocket = activeConnections.get(userId);
    if (userSocket) {
      userSocket.emit('message', {
        content: aiResponse,
        sender: 'bot',
        timestamp: Date.now()
      });
    }

    res.json({
      message: aiResponse,
      conversationId,
      timestamp: Date.now()
    });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get conversation history
app.get('/api/chat/conversation/:conversationId', (req, res) => {
  const { conversationId } = req.params;
  const conversation = conversations.get(conversationId) || [];
  
  res.json({
    messages: conversation,
    conversationId
  });
});

// Start new conversation
app.post('/api/chat/conversation', (req, res) => {
  const { userId, userType } = req.body;
  const conversationId = `conv_${userId}_${Date.now()}`;
  
  conversations.set(conversationId, []);
  
  res.json({
    conversationId,
    timestamp: Date.now()
  });
});

// WebSocket handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join', (userData) => {
    if (userData.userId) {
      activeConnections.set(userData.userId, socket);
      socket.userId = userData.userId;
      console.log(`User ${userData.userId} joined chat`);
    }
  });

  socket.on('message', async (data) => {
    try {
      const { content, userType, userId, conversationId } = data;
      
      // Generate AI response
      const aiResponse = await generateAIResponse(content, {
        userType,
        userId
      });

      // Send response back
      socket.emit('message', {
        content: aiResponse,
        sender: 'bot',
        timestamp: Date.now()
      });

    } catch (error) {
      console.error('WebSocket message error:', error);
      socket.emit('error', { message: 'Failed to process message' });
    }
  });

  socket.on('disconnect', () => {
    if (socket.userId) {
      activeConnections.delete(socket.userId);
      console.log(`User ${socket.userId} disconnected`);
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: Date.now(),
    activeConnections: activeConnections.size,
    conversations: conversations.size,
    openaiEnabled: !!openai
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 FITTA Chat Server running on port ${PORT}`);
  console.log(`🤖 OpenAI integration: ${openai ? 'Enabled' : 'Disabled (using mock responses)'}`);
  console.log(`📱 WebSocket endpoint: ws://localhost:${PORT}`);
  console.log(`🌐 REST API: http://localhost:${PORT}/api`);
});