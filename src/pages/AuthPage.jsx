import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import Logo from '../components/common/Logo';

const AuthPage = () => {
  const { userType } = useParams();
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'

  const validUserTypes = ['vehicle-owner', 'garage-partner', 'insurance', 'admin'];
  
  if (!validUserTypes.includes(userType)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Invalid User Type</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Please return to the home page and select a valid user type.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-secondary-900 dark:to-secondary-800">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        {/* Logo */}
        <div className="mb-8">
          <Logo size="lg" className="floating-element" />
        </div>

        {/* Auth Form */}
        {authMode === 'login' ? (
          <LoginForm
            userType={userType}
            onSwitchToRegister={() => setAuthMode('register')}
          />
        ) : (
          <RegisterForm
            userType={userType}
            onSwitchToLogin={() => setAuthMode('login')}
          />
        )}

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>Made with ❤️ in Ghana 🇬🇭 for Africa 🌍</p>
        </footer>
      </div>
    </div>
  );
};

export default AuthPage;