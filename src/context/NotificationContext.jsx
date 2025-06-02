import { createContext, useContext, useReducer, useCallback } from 'react';

const NotificationContext = createContext();

const initialState = {
  notifications: [],
  nextId: 1,
};

function notificationReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, { ...action.payload, id: state.nextId }],
        nextId: state.nextId + 1,
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload),
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        notifications: [],
      };
    default:
      return state;
  }
}

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  const addNotification = useCallback((notification) => {
    const {
      title,
      message,
      type = 'info',
      duration = 5000,
      persistent = false,
      action = null,
    } = notification;

    const id = state.nextId;
    
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        title,
        message,
        type,
        duration,
        persistent,
        action,
        createdAt: Date.now(),
      },
    });

    // Auto-remove notification after duration (unless persistent)
    if (!persistent && duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }

    return id;
  }, [state.nextId]);

  const removeNotification = useCallback((id) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' });
  }, []);

  // Convenience methods for different notification types
  const success = useCallback((title, message, options = {}) => {
    return addNotification({ title, message, type: 'success', ...options });
  }, [addNotification]);

  const error = useCallback((title, message, options = {}) => {
    return addNotification({ 
      title, 
      message, 
      type: 'error', 
      duration: 8000, // Longer duration for errors
      ...options 
    });
  }, [addNotification]);

  const warning = useCallback((title, message, options = {}) => {
    return addNotification({ title, message, type: 'warning', ...options });
  }, [addNotification]);

  const info = useCallback((title, message, options = {}) => {
    return addNotification({ title, message, type: 'info', ...options });
  }, [addNotification]);

  const loading = useCallback((title, message, options = {}) => {
    return addNotification({ 
      title, 
      message, 
      type: 'loading', 
      persistent: true,
      ...options 
    });
  }, [addNotification]);

  const removeLoadingNotification = useCallback((id) => {
    removeNotification(id);
  }, [removeNotification]);

  const value = {
    notifications: state.notifications,
    addNotification,
    removeNotification,
    removeLoadingNotification,
    clearAll,
    success,
    error,
    warning,
    info,
    loading,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
}

export default NotificationContext;