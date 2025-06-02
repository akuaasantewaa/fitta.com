import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import ChatBot from './ChatBot';
import ChatToggle from './ChatToggle';

const ChatInterface = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [shouldShowChat, setShouldShowChat] = useState(true);
  const { isAuthenticated, userType } = useAuth();
  const location = useLocation();

  // Hide chat on certain pages
  useEffect(() => {
    const hideChatPaths = ['/auth'];
    const shouldHide = hideChatPaths.some(path => location.pathname.startsWith(path));
    setShouldShowChat(!shouldHide);
  }, [location.pathname]);

  // Auto-close chat when navigating to auth pages
  useEffect(() => {
    if (location.pathname.startsWith('/auth')) {
      setIsChatOpen(false);
    }
  }, [location.pathname]);

  // Don't render chat interface if it should be hidden
  if (!shouldShowChat) {
    return null;
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <ChatToggle
        isOpen={isChatOpen}
        onToggle={setIsChatOpen}
      />

      {/* Chat Bot Interface */}
      <ChatBot
        isOpen={isChatOpen}
        onToggle={setIsChatOpen}
      />
    </>
  );
};

export default ChatInterface;