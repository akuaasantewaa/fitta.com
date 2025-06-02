import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import AnnouncementBar from './AnnouncementBar';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';
import { cn } from '../../utils/cn';

const HeaderEnhanced = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, userType, user, logout } = useAuth();
  const { success } = useNotifications();

  const navigationItems = [
    { name: 'Home', href: '/', exact: true },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePage = (href, exact = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate(`/${userType}`);
    } else {
      navigate('/auth/vehicle-owner');
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${transparent && !isScrolled ? '' : 'shadow-lg'}`}>
      {/* Announcement Bar */}
      {isAnnouncementVisible && (
        <div id="announcement-bar">
          <AnnouncementBar onClose={() => setIsAnnouncementVisible(false)} />
        </div>
      )}
      
      {/* Main Header */}
      <header className={`w-full transition-all duration-500 ${
        transparent && !isScrolled
          ? 'bg-gradient-to-b from-black/50 to-transparent' 
          : 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <div className="transform transition-transform duration-300 group-hover:scale-105">
                  <Logo size="md" variant={transparent && !isScrolled ? 'light' : 'default'} />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-2 text-xs font-semibold transition-all duration-300 group ${
                      isActivePage(item.href, item.exact)
                        ? 'text-primary-500'
                        : transparent && !isScrolled
                        ? 'text-white hover:text-primary-300'
                        : 'text-secondary-700 dark:text-neutral-300 hover:text-primary-500'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover effect */}
                    <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActivePage(item.href, item.exact)
                        ? 'bg-primary-50 dark:bg-primary-900/30 opacity-100'
                        : 'bg-primary-50 dark:bg-primary-900/20 opacity-0 group-hover:opacity-100'
                    }`}></span>
                    
                    {/* Active indicator */}
                    {isActivePage(item.href, item.exact) && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle size="sm" className="mr-2" />
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <div className="text-xs">
                    <span className="text-secondary-600 dark:text-neutral-400">Hi,</span>
                    <span className="ml-1 font-semibold text-secondary-800 dark:text-white">{user?.name}</span>
                  </div>
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={handleGetStarted}
                    className="shadow-lg hover:shadow-xl"
                  >
                    Dashboard
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link to="/auth/vehicle-owner">
                    <Button 
                      variant={transparent && !isScrolled ? "ghost" : "ghost"} 
                      size="sm"
                      className={transparent && !isScrolled ? "text-white hover:text-primary-300 border-white/30" : ""}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={handleGetStarted}
                    className="shadow-lg hover:shadow-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                  >
                    Free Estimate
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-3">
              <ThemeToggle size="sm" />
              <button
                type="button"
                className={cn(
                  'relative inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300',
                  'bg-gradient-to-br hover:shadow-lg transform hover:scale-105',
                  transparent && !isScrolled
                    ? 'from-white/20 to-white/10 text-white hover:from-white/30 hover:to-white/20'
                    : 'from-neutral-100 to-neutral-50 dark:from-secondary-800 dark:to-secondary-700 text-secondary-700 dark:text-neutral-300'
                )}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-5 h-5">
                  {/* Innovative hamburger animation */}
                  <div className={cn(
                    'absolute inset-0 flex flex-col justify-between transition-all duration-500',
                    isMenuOpen && 'rotate-180'
                  )}>
                    <span className={cn(
                      'block h-0.5 bg-current rounded-full transform transition-all duration-500 origin-left',
                      isMenuOpen ? 'rotate-45 scale-x-[1.2]' : 'scale-x-100'
                    )}></span>
                    <span className={cn(
                      'block h-0.5 bg-current rounded-full transition-all duration-300',
                      isMenuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
                    )}></span>
                    <span className={cn(
                      'block h-0.5 bg-current rounded-full transform transition-all duration-500 origin-left',
                      isMenuOpen ? '-rotate-45 scale-x-[1.2]' : 'scale-x-100'
                    )}></span>
                  </div>
                  {/* Animated dot indicator */}
                  <div className={cn(
                    'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                    'w-1 h-1 bg-primary-500 rounded-full transition-all duration-500',
                    isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  )}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Overlay */}
          <div 
            className={cn(
              'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-500',
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Navigation Drawer */}
          <div className={cn(
            'fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/90 dark:bg-secondary-900/95 backdrop-blur-xl z-50 lg:hidden',
            'transform transition-all duration-500 ease-out',
            'shadow-2xl border-l border-neutral-200/50 dark:border-secondary-700/50',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E53935' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Drawer Header */}
            <div className="relative p-6 border-b border-neutral-200/50 dark:border-secondary-700/50 bg-gradient-to-r from-primary-500/10 to-primary-600/10">
              <div className="flex items-center justify-between">
                <Logo size="md" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-secondary-700/70 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-secondary-700 dark:text-neutral-300 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {isAuthenticated && (
                <div className="mt-4 p-3 bg-white/50 dark:bg-secondary-800/50 backdrop-blur-sm rounded-lg">
                  <p className="text-xs text-secondary-600 dark:text-neutral-400">Signed in as</p>
                  <p className="text-sm font-semibold text-secondary-800 dark:text-white">{user?.name}</p>
                  <p className="text-xs text-primary-600 dark:text-primary-400 capitalize">{userType?.replace('-', ' ')}</p>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <div className="relative flex-1 overflow-y-auto">
              <nav className="p-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'group block relative overflow-hidden rounded-xl transition-all duration-300',
                      'transform hover:scale-105'
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={cn(
                      'relative px-4 py-3 backdrop-blur-sm border transition-all duration-300 overflow-hidden',
                      isActivePage(item.href, item.exact)
                        ? 'bg-primary-500/20 border-primary-500/30 shadow-lg shadow-primary-500/20'
                        : 'bg-white/50 dark:bg-secondary-800/50 border-neutral-200/50 dark:border-secondary-700/50 hover:bg-white/70 dark:hover:bg-secondary-700/70'
                    )}>
                      {/* Animated background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/10 transition-all duration-300"></div>
                      
                      {/* Glass shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-glass-shine bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] h-full transform skew-x-12"></div>
                      </div>
                      
                      <div className="relative flex items-center justify-between">
                        <span className={cn(
                          'font-medium transition-colors duration-300',
                          isActivePage(item.href, item.exact)
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-secondary-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                        )}>
                          {item.name}
                        </span>
                        <svg className={cn(
                          'w-5 h-5 transition-all duration-300 transform',
                          isActivePage(item.href, item.exact)
                            ? 'text-primary-600 dark:text-primary-400 translate-x-0'
                            : 'text-neutral-400 dark:text-neutral-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        )} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="p-6 space-y-3 border-t border-neutral-200/50 dark:border-secondary-700/50">
                {isAuthenticated ? (
                  <>
                    <Button 
                      variant="primary" 
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                      onClick={() => {
                        handleGetStarted();
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Go to Dashboard
                      </span>
                    </Button>
                    <button
                      onClick={async () => {
                        const result = await logout();
                        if (result.success) {
                          success('Logged Out', 'You have been successfully logged out');
                          navigate('/');
                          setIsMenuOpen(false);
                        }
                      }}
                      className="w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-300"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="primary" 
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                      onClick={() => {
                        handleGetStarted();
                        setIsMenuOpen(false);
                      }}
                    >
                      Get Free Estimate
                    </Button>
                    <Link to="/auth/vehicle-owner" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="glass" className="w-full bg-white/50 backdrop-blur-sm">
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              {/* Bottom Info */}
              <div className="p-6 text-center">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  24/7 Emergency Support
                </p>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mt-1">
                  +233 XXX XXXX
                </p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderEnhanced;