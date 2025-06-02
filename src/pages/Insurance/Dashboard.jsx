import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { Card, CardContent, CardTitle } from '../../components/common/Card';
import Logo from '../../components/common/Logo';

const InsuranceDashboard = () => {
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
            <div className="text-6xl mb-6">🛡️</div>
            <CardTitle className="text-3xl mb-4">Insurance Company Dashboard</CardTitle>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Your claims management system is coming soon!
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <Button variant="primary" size="lg" className="w-full" glow>
                📊 View Claims
              </Button>
              <Button variant="glass" className="w-full">
                ✅ Verified Reports
              </Button>
              <Button variant="glass" className="w-full">
                📈 Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InsuranceDashboard;