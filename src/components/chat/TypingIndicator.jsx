import { cn } from '../../utils/cn';

const TypingIndicator = ({ className, ...props }) => {
  return (
    <div 
      className={cn(
        'flex justify-start mb-4 animate-fade-in',
        className
      )}
      {...props}
    >
      <div className="flex max-w-[80%] gap-2">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-semibold">
          🤖
        </div>

        {/* Typing Bubble */}
        <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white dark:bg-secondary-700 border border-neutral-200 dark:border-secondary-600 shadow-sm">
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-2">
              FITTA Assistant is typing...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;