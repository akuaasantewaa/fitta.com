import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wider',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
        secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
        glass: 'bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-secondary-700 text-secondary-800 dark:text-white rounded-full shadow-md hover:shadow-lg border border-neutral-200 dark:border-secondary-600',
        solid: 'bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl',
        ghost: 'hover:bg-neutral-100 dark:hover:bg-secondary-800 rounded-full text-secondary-600 dark:text-neutral-300',
        danger: 'bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl',
      },
      size: {
        sm: 'text-xs px-6 py-2.5',
        md: 'text-sm px-8 py-3.5',
        lg: 'text-base px-10 py-4',
        icon: 'p-3 rounded-full',
      },
      glow: {
        true: 'shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      glow: false,
    },
  }
);

const Button = forwardRef(({ 
  className, 
  variant, 
  size, 
  glow,
  children,
  loading = false,
  ...props 
}, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, glow, className }))}
      ref={ref}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;