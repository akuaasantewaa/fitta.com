import React from 'react';
import Button from './Button';
import { Card, CardContent, CardTitle } from './Card';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log error to monitoring service (Sentry, etc.)
    if (import.meta.env.PROD) {
      console.error('Error caught by boundary:', error, errorInfo);
      // TODO: Send to error monitoring service
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      const { fallback: FallbackComponent } = this.props;
      
      if (FallbackComponent) {
        return (
          <FallbackComponent 
            error={this.state.error}
            retry={this.handleRetry}
          />
        );
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="max-w-md w-full text-center">
            <CardContent className="p-8">
              <div className="text-6xl mb-6">⚠️</div>
              <CardTitle className="text-2xl mb-4 text-red-600">
                Something went wrong
              </CardTitle>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
              
              {import.meta.env.DEV && this.state.error && (
                <details className="text-left mb-4 p-4 bg-red-50 dark:bg-red-950 rounded-lg text-sm">
                  <summary className="cursor-pointer font-medium text-red-700 dark:text-red-300 mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="whitespace-pre-wrap text-red-600 dark:text-red-400 text-xs overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
              
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={this.handleRetry}
                >
                  Try Again
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorMessage = ({ 
  title = 'Error', 
  message, 
  action, 
  actionLabel = 'Try Again',
  className 
}) => {
  return (
    <div className={`text-center py-8 ${className || ''}`}>
      <div className="text-4xl mb-4">❌</div>
      <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
        {message}
      </p>
      {action && (
        <Button variant="primary" onClick={action}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

const InlineError = ({ message, className }) => {
  if (!message) return null;
  
  return (
    <div className={`flex items-center gap-2 text-red-600 dark:text-red-400 text-sm ${className || ''}`}>
      <span className="text-xs">⚠️</span>
      <span>{message}</span>
    </div>
  );
};

const NotFound = ({ 
  title = '404 - Page Not Found',
  message = 'The page you are looking for does not exist.',
  actionLabel = 'Go Home',
  onAction
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="p-8">
          <div className="text-6xl mb-6">🔍</div>
          <CardTitle className="text-2xl mb-4">
            {title}
          </CardTitle>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            {message}
          </p>
          <Button 
            variant="primary" 
            className="w-full"
            onClick={onAction || (() => window.location.href = '/')}
          >
            {actionLabel}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const NetworkError = ({ onRetry }) => {
  return (
    <ErrorMessage
      title="Network Error"
      message="Unable to connect to the server. Please check your internet connection and try again."
      action={onRetry}
      actionLabel="Retry"
    />
  );
};

const UnauthorizedError = ({ onLogin }) => {
  return (
    <ErrorMessage
      title="Access Denied"
      message="You need to be logged in to access this page."
      action={onLogin}
      actionLabel="Login"
    />
  );
};

export {
  ErrorBoundary,
  ErrorMessage,
  InlineError,
  NotFound,
  NetworkError,
  UnauthorizedError,
};

export default ErrorBoundary;