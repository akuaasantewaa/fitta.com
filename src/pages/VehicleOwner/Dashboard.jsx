import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { Card, CardContent, CardTitle } from '../../components/common/Card';
import Logo from '../../components/common/Logo';
import { useAuth } from '../../context/AuthContext';
import { useNotifications } from '../../context/NotificationContext';

const VehicleOwnerDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { success, info } = useNotifications();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      success('Logged Out', 'You have been successfully logged out');
      navigate('/');
    }
  };

  const handleEmergencyRequest = () => {
    info('Emergency Request', 'Emergency assistance feature coming soon!');
  };

  const handleScheduleService = () => {
    info('Schedule Service', 'Service scheduling feature coming soon!');
  };

  const handleViewHistory = () => {
    info('Service History', 'Service history feature coming soon!');
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Logo size="md" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              Welcome back, {user?.name}!
            </span>
            <Button variant="ghost" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        {/* Dashboard Content */}
        <Card className="text-center py-16">
          <CardContent>
            <div className="text-6xl mb-6">🚗</div>
            <CardTitle className="text-3xl mb-4">Vehicle Owner Dashboard</CardTitle>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Your personal vehicle management hub is coming soon!
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full" 
                glow
                onClick={handleEmergencyRequest}
              >
                🆘 Emergency Assistance
              </Button>
              <Button variant="glass" className="w-full" onClick={handleScheduleService}>
                📅 Schedule Service
              </Button>
              <Button variant="glass" className="w-full" onClick={handleViewHistory}>
                📋 Service History
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VehicleOwnerDashboard;