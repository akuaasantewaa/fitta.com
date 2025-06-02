import { createContext, useContext, useEffect, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  userType: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        userType: action.payload.userType,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        user: null,
        userType: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        userType: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Check for stored auth data (localStorage for now, Firebase later)
      const storedUser = localStorage.getItem('fitta_user');
      const storedUserType = localStorage.getItem('fitta_user_type');
      
      if (storedUser && storedUserType) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: JSON.parse(storedUser),
            userType: storedUserType,
          },
        });
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    } catch {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Failed to check authentication status' });
    }
  };

  const login = async (credentials, userType) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Mock authentication (replace with Firebase Auth later)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on user type
      const mockUser = {
        id: `${userType}_${Date.now()}`,
        email: credentials.email,
        name: credentials.name || 'User',
        userType,
        createdAt: new Date().toISOString(),
        profile: {
          phone: '',
          location: '',
          verified: false,
        },
      };

      // Store in localStorage (replace with secure storage later)
      localStorage.setItem('fitta_user', JSON.stringify(mockUser));
      localStorage.setItem('fitta_user_type', userType);

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: mockUser, userType },
      });

      return { success: true };
    } catch (error) {
      const errorMessage = error.message || 'Login failed';
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const register = async (userData, userType) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Mock registration (replace with Firebase Auth later)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newUser = {
        id: `${userType}_${Date.now()}`,
        email: userData.email,
        name: userData.name,
        userType,
        createdAt: new Date().toISOString(),
        profile: {
          phone: userData.phone || '',
          location: userData.location || '',
          verified: false,
        },
      };

      // Store in localStorage
      localStorage.setItem('fitta_user', JSON.stringify(newUser));
      localStorage.setItem('fitta_user_type', userType);

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: newUser, userType },
      });

      return { success: true };
    } catch (error) {
      const errorMessage = error.message || 'Registration failed';
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      // Clear localStorage
      localStorage.removeItem('fitta_user');
      localStorage.removeItem('fitta_user_type');
      
      dispatch({ type: 'LOGOUT' });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const updateProfile = async (updates) => {
    try {
      const updatedUser = { ...state.user, ...updates };
      localStorage.setItem('fitta_user', JSON.stringify(updatedUser));
      
      dispatch({ type: 'UPDATE_PROFILE', payload: updates });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    updateProfile,
    clearError,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;