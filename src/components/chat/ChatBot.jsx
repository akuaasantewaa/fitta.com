import { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { useAuth } from '../../context/AuthContext';
import { useChat } from '../../context/ChatContext';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';

const ChatBot = ({ 
  isOpen = false,
  onToggle,
  className,
  ...props 
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);
  const { user, userType } = useAuth();
  const { 
    messages, 
    isTyping, 
    isConnected,
    sendMessage,
    clearMessages 
  } = useChat();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }
  }, [messages, isTyping]);

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = getWelcomeMessage(userType, user?.name);
      // Add welcome message with a slight delay
      setTimeout(() => {
        sendMessage(welcomeMessage, 'system');
      }, 500);
    }
  }, [isOpen, messages.length, userType, user?.name]);

  const getWelcomeMessage = (userType, userName) => {
    const name = userName ? `, ${userName}` : '';
    const baseMessage = `Welcome to FITTA Assistant${name}! 👋`;
    
    const typeSpecificMessages = {
      'vehicle-owner': `${baseMessage} I'm here to help you with roadside assistance, service bookings, and any questions about our platform. How can I assist you today?`,
      'garage-partner': `${baseMessage} I can help you with job notifications, platform navigation, payment inquiries, and quality requirements. What would you like to know?`,
      'insurance': `${baseMessage} I'm here to assist with claims processing, report formats, platform integration, and analytics. How may I help you?`,
      'admin': `${baseMessage} I can help with platform management, user oversight, system analytics, and administrative tasks. What do you need assistance with?`
    };

    return typeSpecificMessages[userType] || `${baseMessage} How can I help you today?`;
  };

  const handleClose = () => {
    if (onToggle) {
      onToggle(false);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = async (content) => {
    await sendMessage(content, 'user');
  };

  if (!isOpen) return null;

  return (
    <div 
      className={cn(
        'fixed z-50 bg-white dark:bg-secondary-800 rounded-lg shadow-2xl border border-neutral-200 dark:border-secondary-600',
        'transition-all duration-300 ease-in-out',
        isMinimized ? 'h-16' : 'h-[480px]',
        'animate-slide-up flex flex-col',
        // Desktop positioning
        'md:bottom-4 md:right-4 md:w-80 md:max-h-[80vh]',
        // Mobile positioning - full width and adjusted height
        'bottom-0 right-0 left-0 w-full max-h-[70vh] md:left-auto',
        // Rounded corners adjustment for mobile
        'rounded-t-lg md:rounded-lg',
        className
      )}
      {...props}
    >
      {/* Chat Header */}
      <ChatHeader
        onClose={handleClose}
        onMinimize={handleMinimize}
        isMinimized={isMinimized}
        isOnline={isConnected}
      />

      {/* Chat Content - Hidden when minimized */}
      {!isMinimized && (
        <>
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-50 dark:bg-secondary-900 min-h-0">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-neutral-500 dark:text-neutral-400 text-sm">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <p>Starting conversation...</p>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <ChatMessage 
                    key={message.id} 
                    message={message} 
                  />
                ))}
                
                {isTyping && <TypingIndicator />}
                
                {/* Scroll anchor */}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Chat Input */}
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={!isConnected}
            placeholder={
              isConnected 
                ? "Type your message..." 
                : "Connecting to assistant..."
            }
          />
        </>
      )}
    </div>
  );
};

export default ChatBot;