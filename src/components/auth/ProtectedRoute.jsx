import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { PageLoader } from '../common/Loading';
import { UnauthorizedError } from '../common/ErrorBoundary';

const ProtectedRoute = ({ 
  children, 
  requiredUserType = null,
  requireAuth = true
}) => {
  const { isAuthenticated, isLoading, userType } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking auth status
  if (isLoading) {
    return <PageLoader message="Checking authentication..." />;
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    // Store the attempted URL to redirect after login
    const redirectPath = requiredUserType 
      ? `/auth/${requiredUserType}` 
      : `/auth/${location.pathname.split('/')[1] || 'vehicle-owner'}`;
    
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // If specific user type is required, check if user has the right type
  if (requiredUserType && userType !== requiredUserType) {
    // If user is authenticated but wrong type, show error
    if (isAuthenticated) {
      return (
        <UnauthorizedError 
          onLogin={() => window.location.href = `/${userType}`}
        />
      );
    }
    
    // If not authenticated, redirect to auth page for required type
    return <Navigate to={`/auth/${requiredUserType}`} state={{ from: location }} replace />;
  }

  // If user is authenticated but accessing wrong dashboard
  if (isAuthenticated && location.pathname.startsWith('/') && !location.pathname.startsWith(`/${userType}`)) {
    const pathSegments = location.pathname.split('/');
    const requestedUserType = pathSegments[1];
    
    // Check if they're trying to access a different user type's dashboard
    const validUserTypes = ['vehicle-owner', 'garage-partner', 'insurance', 'admin'];
    if (validUserTypes.includes(requestedUserType) && requestedUserType !== userType) {
      return <Navigate to={`/${userType}`} replace />;
    }
  }

  // All checks passed, render the protected content
  return children;
};

// Higher-order component for role-based access control
const withRoleGuard = (Component, allowedRoles = []) => {
  return function RoleGuardedComponent(props) {
    const { userType, isAuthenticated } = useAuth();
    
    if (!isAuthenticated) {
      return <Navigate to="/auth/vehicle-owner" replace />;
    }
    
    if (allowedRoles.length > 0 && !allowedRoles.includes(userType)) {
      return (
        <UnauthorizedError 
          title="Access Restricted"
          message={`This feature is only available to ${allowedRoles.join(', ')} users.`}
          onLogin={() => window.location.href = `/${userType}`}
        />
      );
    }
    
    return <Component {...props} />;
  };
};

// Component to redirect authenticated users away from auth pages
const PublicRoute = ({ children, redirectTo = null }) => {
  const { isAuthenticated, isLoading, userType } = useAuth();
  
  if (isLoading) {
    return <PageLoader message="Loading..." />;
  }
  
  if (isAuthenticated) {
    const destination = redirectTo || `/${userType}`;
    return <Navigate to={destination} replace />;
  }
  
  return children;
};

// Hook to check if user has specific permissions
const usePermissions = () => {
  const { userType, isAuthenticated } = useAuth();
  
  const hasRole = (role) => {
    return isAuthenticated && userType === role;
  };
  
  const hasAnyRole = (roles) => {
    return isAuthenticated && roles.includes(userType);
  };
  
  const isAdmin = () => {
    return hasRole('admin');
  };
  
  const canAccessFeature = (feature) => {
    if (!isAuthenticated) return false;
    
    // Define feature permissions
    const featurePermissions = {
      'emergency-request': ['vehicle-owner'],
      'service-management': ['garage-partner', 'admin'],
      'claims-processing': ['insurance', 'admin'],
      'user-management': ['admin'],
      'analytics': ['insurance', 'admin'],
      'partner-approval': ['admin'],
    };
    
    const allowedRoles = featurePermissions[feature] || [];
    return allowedRoles.includes(userType);
  };
  
  return {
    hasRole,
    hasAnyRole,
    isAdmin,
    canAccessFeature,
    userType,
    isAuthenticated,
  };
};

export {
  ProtectedRoute,
  PublicRoute,
  withRoleGuard,
  usePermissions,
};

export default ProtectedRoute;