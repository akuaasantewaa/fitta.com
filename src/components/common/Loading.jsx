import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const loadingVariants = cva(
  'animate-spin rounded-full border-solid border-t-transparent',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 border-2',
        md: 'h-6 w-6 border-2',
        lg: 'h-8 w-8 border-3',
        xl: 'h-12 w-12 border-4',
      },
      variant: {
        primary: 'border-primary-500',
        secondary: 'border-secondary-500',
        white: 'border-white',
        neutral: 'border-neutral-500',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  }
);

const Spinner = ({ size, variant, className, ...props }) => {
  return (
    <div
      className={cn(loadingVariants({ size, variant }), className)}
      {...props}
    />
  );
};

const LoadingDots = ({ className }) => {
  return (
    <div className={cn('flex space-x-1', className)}>
      <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce"></div>
      <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce animation-delay-100"></div>
      <div className="h-2 w-2 bg-primary-500 rounded-full animate-bounce animation-delay-200"></div>
    </div>
  );
};

const LoadingButton = ({ children, isLoading, className, ...props }) => {
  return (
    <button
      className={cn(
        'relative disabled:opacity-70 disabled:cursor-not-allowed bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-3.5 font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner size="sm" variant="white" />
        </div>
      )}
      <span className={cn(isLoading && 'opacity-0')}>{children}</span>
    </button>
  );
};

const PageLoader = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="glass rounded-2xl p-8 text-center">
        <Spinner size="xl" className="mx-auto mb-4" />
        <p className="text-neutral-600 dark:text-neutral-400">{message}</p>
      </div>
    </div>
  );
};

const ContentLoader = ({ 
  message = 'Loading...', 
  className,
  showSpinner = true,
  children 
}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center py-12', className)}>
      {showSpinner && <Spinner size="lg" className="mb-4" />}
      {message && (
        <p className="text-neutral-600 dark:text-neutral-400 mb-2">{message}</p>
      )}
      {children}
    </div>
  );
};

const SkeletonLoader = ({ className, count = 1 }) => {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-full"></div>
        </div>
      ))}
    </div>
  );
};

const CardSkeleton = ({ className }) => {
  return (
    <div className={cn('glass rounded-2xl p-6', className)}>
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6"></div>
        </div>
        <div className="h-10 bg-neutral-200 dark:bg-neutral-800 rounded-lg w-1/3"></div>
      </div>
    </div>
  );
};

export {
  Spinner,
  LoadingDots,
  LoadingButton,
  PageLoader,
  ContentLoader,
  SkeletonLoader,
  CardSkeleton,
};

export default Spinner;