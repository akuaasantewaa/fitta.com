import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Card = forwardRef(({ 
  className, 
  children,
  hover = true,
  glow = false,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-white dark:bg-secondary-800 rounded-3xl p-8 shadow-lg border border-neutral-100 dark:border-secondary-700',
        'transition-all duration-300',
        hover && 'hover:shadow-2xl hover:-translate-y-1',
        glow && 'shadow-xl shadow-primary-500/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-6', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-2xl font-semibold', className)}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-neutral-600 dark:text-neutral-400 mt-2', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));

CardContent.displayName = 'CardContent';

const CardFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-6 pt-6 border-t border-glass-border', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };