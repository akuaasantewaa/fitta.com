import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const ChatMessage = forwardRef(({ 
  message, 
  className,
  ...props 
}, ref) => {
  const isBot = message.sender === 'bot';
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (isSystem) {
    return (
      <div 
        ref={ref}
        className={cn(
          'flex justify-center my-4',
          className
        )}
        {...props}
      >
        <div className="bg-neutral-100 dark:bg-secondary-700 text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full text-xs">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      className={cn(
        'flex mb-4 animate-fade-in',
        isUser ? 'justify-end' : 'justify-start',
        className
      )}
      {...props}
    >
      <div className={cn(
        'flex max-w-[80%] gap-2',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}>
        {/* Avatar */}
        <div className={cn(
          'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold',
          isBot 
            ? 'bg-primary-500 text-white' 
            : 'bg-secondary-500 text-white'
        )}>
          {isBot ? '🤖' : '👤'}
        </div>

        {/* Message Bubble */}
        <div className={cn(
          'px-4 py-3 rounded-2xl shadow-sm transition-all duration-200',
          isUser 
            ? 'bg-primary-500 text-white rounded-br-md hover:shadow-md' 
            : 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white border border-neutral-200 dark:border-secondary-600 rounded-bl-md hover:shadow-md'
        )}>
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </div>
          
          {/* Timestamp */}
          <div className={cn(
            'text-xs mt-1 opacity-70',
            isUser ? 'text-primary-100' : 'text-neutral-500 dark:text-neutral-400'
          )}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
});

ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;