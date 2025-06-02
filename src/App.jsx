import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { NotificationProvider } from "./context/NotificationContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import NotificationContainer from "./components/common/NotificationContainer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { PublicRoute } from "./components/auth/ProtectedRoute";
import HomePageEnhanced from "./pages/Home/HomePageEnhanced";
import AuthPage from "./pages/AuthPage";
import VehicleOwnerDashboard from "./pages/VehicleOwner/Dashboard";
import GaragePartnerDashboard from "./pages/GaragePartner/Dashboard";
import InsuranceDashboard from "./pages/Insurance/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";
import { NotFound } from "./components/common/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <NotificationProvider>
          <AuthProvider>
          <Router>
            <div className="App">
              {/* Global notification container */}
              <NotificationContainer position="top-right" />
              
              <Routes>
                {/* Public Routes */}
                <Route 
                  path="/" 
                  element={
                    <PublicRoute>
                      <HomePageEnhanced />
                    </PublicRoute>
                  } 
                />
                
                {/* Authentication Routes */}
                <Route 
                  path="/auth/:userType" 
                  element={
                    <PublicRoute>
                      <AuthPage />
                    </PublicRoute>
                  } 
                />

                {/* Protected Dashboard Routes */}
                <Route 
                  path="/vehicle-owner/*" 
                  element={
                    <ProtectedRoute requiredUserType="vehicle-owner">
                      <VehicleOwnerDashboard />
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/garage-partner/*" 
                  element={
                    <ProtectedRoute requiredUserType="garage-partner">
                      <GaragePartnerDashboard />
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/insurance/*" 
                  element={
                    <ProtectedRoute requiredUserType="insurance">
                      <InsuranceDashboard />
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/admin/*" 
                  element={
                    <ProtectedRoute requiredUserType="admin">
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />

                {/* 404 Route */}
                <Route 
                  path="*" 
                  element={
                    <NotFound 
                      title="404 - Page Not Found"
                      message="The page you're looking for doesn't exist."
                      actionLabel="Go Home"
                      onAction={() => window.location.href = '/'}
                    />
                  } 
                />
              </Routes>
            </div>
          </Router>
          </AuthProvider>
        </NotificationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
