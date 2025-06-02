import { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { useNotifications } from '../../context/NotificationContext';
import { cn } from '../../utils/cn';
import Button from './Button';
import { Spinner } from './Loading';

const notificationVariants = cva(
  'rounded-2xl p-6 shadow-2xl border-l-4 transition-all duration-300 transform',
  {
    variants: {
      type: {
        success: 'border-l-green-500 bg-white dark:bg-secondary-800',
        error: 'border-l-red-500 bg-white dark:bg-secondary-800',
        warning: 'border-l-yellow-500 bg-white dark:bg-secondary-800',
        info: 'border-l-primary-500 bg-white dark:bg-secondary-800',
        loading: 'border-l-neutral-500 bg-white dark:bg-secondary-800',
      },
      state: {
        entering: 'opacity-0 translate-x-full scale-95',
        entered: 'opacity-100 translate-x-0 scale-100',
        exiting: 'opacity-0 translate-x-full scale-95',
      },
    },
    defaultVariants: {
      type: 'info',
      state: 'entered',
    },
  }
);

const NotificationItem = ({ notification, onRemove }) => {
  const [state, setState] = useState('entering');

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setState('entered'), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = () => {
    setState('exiting');
    setTimeout(() => onRemove(notification.id), 300);
  };

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'loading':
        return <Spinner size="sm" variant="neutral" />;
      default:
        return 'ℹ️';
    }
  };

  const getTextColor = () => {
    switch (notification.type) {
      case 'success':
        return 'text-secondary-700 dark:text-secondary-300';
      case 'error':
        return 'text-red-700 dark:text-red-300';
      case 'warning':
        return 'text-yellow-700 dark:text-yellow-300';
      case 'loading':
        return 'text-neutral-700 dark:text-neutral-300';
      default:
        return 'text-primary-700 dark:text-primary-300';
    }
  };

  return (
    <div
      className={cn(
        notificationVariants({ type: notification.type, state }),
        'mb-2 max-w-sm w-full'
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {typeof getIcon() === 'string' ? (
            <span className="text-lg">{getIcon()}</span>
          ) : (
            getIcon()
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          {notification.title && (
            <h4 className={cn('font-semibold text-sm mb-1', getTextColor())}>
              {notification.title}
            </h4>
          )}
          {notification.message && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {notification.message}
            </p>
          )}
          
          {notification.action && (
            <div className="mt-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={notification.action.onClick}
                className="text-xs"
              >
                {notification.action.label}
              </Button>
            </div>
          )}
        </div>

        {!notification.persistent && (
          <button
            onClick={handleRemove}
            className="flex-shrink-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors ml-2"
          >
            <span className="sr-only">Close</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

const NotificationContainer = ({ position = 'top-right' }) => {
  const { notifications, removeNotification } = useNotifications();

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-center':
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'top-4 right-4';
    }
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className={cn(
      'fixed z-50 flex flex-col',
      getPositionClasses(),
      position.includes('bottom') ? 'flex-col-reverse' : 'flex-col'
    )}>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  );
};

export default NotificationContainer;