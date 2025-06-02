import { useState, useRef } from 'react';
import { cn } from '../../utils/cn';
import Button from '../common/Button';

const ChatInput = ({ 
  onSendMessage, 
  disabled = false,
  placeholder = "Type your message...",
  className,
  ...props 
}) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!message.trim() || disabled || isLoading) return;

    const messageToSend = message.trim();
    setMessage('');
    setIsLoading(true);

    try {
      await onSendMessage(messageToSend);
    } catch (error) {
      console.error('Failed to send message:', error);
      // Restore message on error
      setMessage(messageToSend);
    } finally {
      setIsLoading(false);
    }

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
    
    // Auto-resize textarea
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  };

  return (
    <div 
      className={cn(
        'border-t border-neutral-200 dark:border-secondary-600 p-3 bg-white dark:bg-secondary-800 rounded-b-lg',
        'flex-shrink-0',
        className
      )}
      {...props}
    >
      <form onSubmit={handleSubmit} className="flex gap-2 items-end">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleTextareaChange}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled || isLoading}
            rows={1}
            className={cn(
              'w-full px-3 py-2 text-sm border border-neutral-300 dark:border-secondary-600',
              'rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white',
              'placeholder-neutral-500 dark:placeholder-neutral-400',
              'focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'resize-none transition-all duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'min-h-[40px] max-h-[120px]'
            )}
            style={{ height: 'auto' }}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="icon"
          disabled={!message.trim() || disabled || isLoading}
          loading={isLoading}
          className="flex-shrink-0 w-10 h-10"
        >
          {!isLoading && (
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
              />
            </svg>
          )}
        </Button>
      </form>

      {/* Quick Actions */}
      <div className="flex gap-1 mt-1.5">
        <button
          type="button"
          onClick={() => setMessage("I need emergency roadside assistance")}
          className="text-[10px] px-1.5 py-0.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          disabled={disabled || isLoading}
        >
          🚨 Emergency
        </button>
        <button
          type="button"
          onClick={() => setMessage("How do I schedule a service?")}
          className="text-[10px] px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          disabled={disabled || isLoading}
        >
          📅 Schedule
        </button>
        <button
          type="button"
          onClick={() => setMessage("What are your service areas?")}
          className="text-[10px] px-1.5 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
          disabled={disabled || isLoading}
        >
          📍 Coverage
        </button>
      </div>
    </div>
  );
};

export default ChatInput;