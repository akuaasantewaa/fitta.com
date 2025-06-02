import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import AnnouncementBar from './AnnouncementBar';
import { useAuth } from '../../context/AuthContext';

const HeaderEnhanced = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, userType, user } = useAuth();

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
                className={`relative inline-flex items-center justify-center p-2.5 rounded-lg transition-all duration-300 ${
                  transparent && !isScrolled
                    ? 'text-white hover:bg-white/10'
                    : 'text-secondary-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-secondary-800'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 relative">
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
                  }`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 translate-y-2.5 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-5'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-1 bg-white dark:bg-secondary-900 rounded-b-2xl shadow-xl mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg mx-2 text-base font-medium transition-all duration-300 ${
                    isActivePage(item.href, item.exact)
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                      : 'text-secondary-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-secondary-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 pb-2 px-4 border-t border-neutral-200 dark:border-secondary-700 mx-2">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="text-sm text-secondary-600 dark:text-neutral-400">
                      Welcome back, <span className="font-semibold text-secondary-800 dark:text-white">{user?.name}</span>
                    </div>
                    <Button 
                      variant="primary" 
                      className="w-full"
                      onClick={() => {
                        handleGetStarted();
                        setIsMenuOpen(false);
                      }}
                    >
                      Go to Dashboard
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link to="/auth/vehicle-owner" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Button 
                      variant="primary" 
                      className="w-full"
                      onClick={() => {
                        handleGetStarted();
                        setIsMenuOpen(false);
                      }}
                    >
                      Get Free Estimate
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderEnhanced;