import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { Card, CardContent, CardTitle } from '../../components/common/Card';
import Logo from '../../components/common/Logo';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Logo size="md" />
          <Button variant="ghost" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>

        {/* Dashboard Content */}
        <Card className="text-center py-16">
          <CardContent>
            <div className="text-6xl mb-6">⚙️</div>
            <CardTitle className="text-3xl mb-4">Admin Dashboard</CardTitle>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Platform management center is coming soon!
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <Button variant="secondary" size="lg" className="w-full" glow>
                👥 Manage Users
              </Button>
              <Button variant="glass" className="w-full">
                📊 Platform Analytics
              </Button>
              <Button variant="glass" className="w-full">
                🔔 System Monitoring
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;