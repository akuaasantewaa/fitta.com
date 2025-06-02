import { useState } from 'react';
import { cn } from '../../utils/cn';
import { useChat } from '../../context/ChatContext';

const ChatToggle = ({ 
  isOpen,
  onToggle,
  className,
  ...props 
}) => {
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const { messageCount, isTyping } = useChat();

  // Pulse animation for new messages
  const handleToggle = () => {
    setHasNewMessage(false);
    onToggle(!isOpen);
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        'fixed bottom-4 right-4 z-40 group',
        'w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600',
        'hover:from-primary-600 hover:to-primary-700',
        'rounded-full shadow-lg hover:shadow-xl',
        'flex items-center justify-center text-white',
        'transition-all duration-300 transform hover:scale-110',
        'focus:outline-none focus:ring-4 focus:ring-primary-500/25',
        isOpen && 'scale-0 opacity-0 pointer-events-none',
        className
      )}
      aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      {...props}
    >
      {/* Chat Icon */}
      <div className="relative">
        {isTyping ? (
          <div className="flex items-center space-x-0.5">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        ) : (
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
            />
          </svg>
        )}

        {/* New message indicator */}
        {(hasNewMessage || messageCount > 0) && !isOpen && (
          <div className={cn(
            'absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full',
            'flex items-center justify-center text-xs font-bold text-white',
            messageCount > 0 && 'animate-pulse'
          )}>
            {messageCount > 9 ? '9+' : messageCount || ''}
          </div>
        )}

        {/* Online status indicator */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
      </div>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-active:opacity-30 transition-opacity duration-300" />
      
      {/* Floating animation rings */}
      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" style={{ animationDelay: '1s' }} />
    </button>
  );
};

export default ChatToggle;