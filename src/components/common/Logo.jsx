import { cn } from '../../utils/cn';

const Logo = ({ className, size = 'md', variant = 'default' }) => {
  const sizes = {
    sm: { text: 'text-xl', icon: 'w-7 h-7' },
    md: { text: 'text-2xl', icon: 'w-8 h-8' },
    lg: { text: 'text-3xl', icon: 'w-10 h-10' },
    xl: { text: 'text-5xl', icon: 'w-14 h-14' }
  };

  const currentSize = sizes[size];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Logo Icon */}
      <div className={cn('relative', currentSize.icon)}>
        <div className="absolute inset-0 bg-primary-500 rounded-lg transform rotate-12"></div>
        <div className="absolute inset-0 bg-primary-600 rounded-lg transform -rotate-6"></div>
        <div className="relative bg-primary-500 rounded-lg flex items-center justify-center text-white font-black">
          <span className={cn(size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl')}>F</span>
        </div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col -space-y-1">
        <span className={cn('font-display font-black uppercase tracking-tight leading-none', currentSize.text, 
          variant === 'light' ? 'text-white' : 'text-secondary-900 dark:text-white'
        )}>
          FITTA
        </span>
        <span className={cn('text-[10px] font-semibold tracking-widest uppercase opacity-60',
          variant === 'light' ? 'text-white' : 'text-secondary-600 dark:text-neutral-400'
        )}>
          Auto Body
        </span>
      </div>
    </div>
  );
};

export default Logo;