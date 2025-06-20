import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { NotificationProvider } from "./context/NotificationContext";
import { ChatProvider } from "./context/ChatContext";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import NotificationContainer from "./components/common/NotificationContainer";
import HomePageEnhanced from "./pages/Home/HomePageEnhanced";
import AboutPage from "./pages/About/AboutPage";
import ServicesPage from "./pages/Services/ServicesPage";
import SingleServicePage from "./pages/Services/SingleServicePage";
import ContactPage from "./pages/Contact/ContactPage";
import HowItWorksPage from "./pages/HowItWorks/HowItWorksPage";
import OurWorkPage from "./pages/OurWork/OurWorkPage";
import EstimatesPage from "./pages/Estimates/EstimatesPage";
import TermsPage from "./pages/Legal/TermsPage";
import PrivacyPage from "./pages/Legal/PrivacyPage";
import CareersPage from "./pages/Careers/CareersPage";
import { NotFound } from "./components/common/ErrorBoundary";
import ChatInterface from "./components/chat/ChatInterface";
import ScrollToTop from "./components/common/ScrollToTop";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import VehicleOwnerDashboard from "./pages/VehicleOwner/Dashboard";
import GaragePartnerDashboard from "./pages/GaragePartner/Dashboard";
import InsuranceDashboard from "./pages/Insurance/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <NotificationProvider>
          <AuthProvider>
            <ChatProvider>
            <Router>
                <ScrollToTop />
                <div className="App">
                  {/* Global notification container */}
                  <NotificationContainer position="top-right" />
                  
                  {/* Global chat interface */}
                  <ChatInterface />
                  
                  <Routes>
                {/* Public Routes */}
                <Route 
                  path="/" 
                  element={<HomePageEnhanced />} 
                />
                
                {/* About Page */}
                <Route 
                  path="/about" 
                  element={<AboutPage />} 
                />
                
                {/* Services Page */}
                <Route 
                  path="/services" 
                  element={<ServicesPage />} 
                />
                
                {/* Single Service Page */}
                <Route 
                  path="/services/:serviceId" 
                  element={<SingleServicePage />} 
                />
                
                {/* Contact Page */}
                <Route 
                  path="/contact" 
                  element={<ContactPage />} 
                />
                
                {/* How It Works Page */}
                <Route 
                  path="/how-it-works" 
                  element={<HowItWorksPage />} 
                />
                
                {/* Our Work Page */}
                <Route 
                  path="/our-work" 
                  element={<OurWorkPage />} 
                />
                
                {/* Online Estimates Page */}
                <Route 
                  path="/estimates" 
                  element={<EstimatesPage />} 
                />
                
                {/* Legal Pages */}
                <Route 
                  path="/terms" 
                  element={<TermsPage />} 
                />
                <Route 
                  path="/privacy" 
                  element={<PrivacyPage />} 
                />
                
                {/* Careers Page */}
                <Route 
                  path="/careers" 
                  element={<CareersPage />} 
                />
                
                {/* Authentication Pages */}
                <Route 
                  path="/auth/:userType" 
                  element={<AuthPage />} 
                />
                
                {/* Protected Dashboard Routes */}
                <Route 
                  path="/dashboard/vehicle-owner" 
                  element={
                    <ProtectedRoute userType="vehicle_owner">
                      <VehicleOwnerDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/garage-partner" 
                  element={
                    <ProtectedRoute userType="garage_partner">
                      <GaragePartnerDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/insurance" 
                  element={
                    <ProtectedRoute userType="insurance">
                      <InsuranceDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/dashboard/admin" 
                  element={
                    <ProtectedRoute userType="admin">
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
            </ChatProvider>
          </AuthProvider>
        </NotificationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
