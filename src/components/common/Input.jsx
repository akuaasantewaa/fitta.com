import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(({ 
  className, 
  type = 'text',
  label,
  error,
  icon,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold mb-3 text-secondary-700 dark:text-neutral-200 uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <span className="text-neutral-500 dark:text-neutral-400 text-xl">{icon}</span>
          </div>
        )}
        <input
          type={type}
          className={cn(
            'w-full bg-white dark:bg-secondary-800 rounded-2xl px-6 py-4',
            'placeholder:text-neutral-400 dark:placeholder:text-neutral-600',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
            'transition-all duration-300 border-2 border-neutral-200 dark:border-secondary-600',
            'text-secondary-800 dark:text-white font-medium',
            icon && 'pl-14',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;