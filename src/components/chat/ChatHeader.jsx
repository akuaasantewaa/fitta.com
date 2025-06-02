import { cn } from '../../utils/cn';
import Logo from '../common/Logo';

const ChatHeader = ({ 
  onClose,
  onMinimize,
  isMinimized = false,
  isOnline = true,
  className,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'flex items-center justify-between p-4 border-b border-neutral-200 dark:border-secondary-600',
        'bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-t-lg',
        className
      )}
      {...props}
    >
      {/* Left side - Bot info */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-lg">🤖</span>
          </div>
          {/* Online indicator */}
          <div className={cn(
            'absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white',
            isOnline ? 'bg-green-500' : 'bg-neutral-400'
          )} />
        </div>
        
        <div>
          <h3 className="font-semibold text-sm">FITTA Assistant</h3>
          <p className="text-xs text-white/80">
            {isOnline ? 'Online • Ready to help' : 'Offline'}
          </p>
        </div>
      </div>

      {/* Right side - Controls */}
      <div className="flex items-center gap-1">
        {onMinimize && (
          <button
            onClick={onMinimize}
            className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
            aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMinimized ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              )}
            </svg>
          </button>
        )}
        
        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;