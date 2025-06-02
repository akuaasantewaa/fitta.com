# FITTA - Revolutionary Vehicle Services Platform for Africa

<div align="center">
  <img src="docs/assets/fitta-logo.png" alt="FITTA Logo" width="200"/>
  
  **Transforming Vehicle Services Through Technology**
  
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF.svg)](https://vitejs.dev/)
  [![Firebase](https://img.shields.io/badge/Firebase-Latest-FFCA28.svg)](https://firebase.google.com/)
</div>

## 🚗 Overview

FITTA is a comprehensive web platform that revolutionizes vehicle damage assessment and roadside assistance services in Ghana, with plans for continental expansion across Africa. Born from a real-world experience with inefficient vehicle breakdown services, FITTA bridges the gap between vehicle owners, certified mechanics, and insurance companies through innovative technology solutions.

### 🎯 Mission
To create a professional, scalable system that transforms how vehicle services are delivered across Africa, starting with Ghana.

### 🌟 Vision
To become the leading platform for automotive services in Africa, setting new standards for professionalism, trust, and technological innovation.

## 🚀 Key Features

### For Vehicle Owners
- **Instant Roadside Assistance**: One-tap emergency help with real-time GPS tracking
- **Service Request Management**: Submit and track repair requests seamlessly
- **Real-time Updates**: Live tracking of service providers and status updates
- **Service History**: Complete digital records of all services and repairs
- **Multi-channel Support**: Request help via app, WhatsApp, SMS, or voice

### For Garage Partners
- **Job Management Dashboard**: Uber-like interface for managing service requests
- **Professional Profiles**: Build reputation through ratings and reviews
- **Earnings Tracking**: Transparent payment and commission structure
- **Route Optimization**: Efficient navigation to service locations
- **Digital Documentation**: Streamlined reporting and invoicing

### For Insurance Companies
- **Standardized Damage Reports**: Consistent, professional assessment documentation
- **Streamlined Claims Processing**: Faster, more accurate claim handling
- **Verified Service Network**: Access to certified, rated service providers
- **Integration APIs**: Seamless connection with existing systems
- **Analytics Dashboard**: Insights into claim patterns and service quality

### For Administrators
- **Comprehensive Dashboard**: Monitor all platform activities
- **Partner Management**: Approve and manage garage partners
- **Service Assignment**: Intelligent matching of requests to providers
- **Analytics & Reporting**: Platform performance and usage metrics
- **Quality Control**: Monitor service quality and customer satisfaction

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19.1.0 with Vite 6.3.5
- **Styling**: TailwindCSS 3.x with Glass Morphism Design System
- **Colors**: Primary (#0052CC - Professional Blue), Secondary (#32CD32 - Lime Green)
- **Routing**: React Router DOM v7
- **State Management**: React Context API + Custom Hooks
- **UI Components**: Custom component library with CVA variants
- **Forms**: React Hook Form + Yup validation
- **Real-time**: Firebase Realtime Database
- **Maps**: Google Maps API

### Backend (Phase 2)
- **Runtime**: Firebase Functions (Node.js)
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Notifications**: Firebase Cloud Messaging
- **Analytics**: Firebase Analytics

### Integrations
- **Payments**: Mobile Money (MTN, Vodafone, AirtelTigo), Bank transfers
- **Communications**: WhatsApp Business API, SMS (Hubtel/Twilio)
- **Maps**: Google Maps API for location services
- **Insurance**: Custom API integrations

### DevOps & Tools
- **Hosting**: Vercel (Frontend), Firebase (Backend)
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry for error tracking
- **Analytics**: Google Analytics + Custom dashboards

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git
- Firebase CLI (for backend development)
- Google Cloud Platform account (for Maps API)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-org/fitta.git
cd fitta
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Google Maps
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key

# WhatsApp Business API
VITE_WHATSAPP_API_URL=your_whatsapp_api_url
VITE_WHATSAPP_API_TOKEN=your_whatsapp_token

# Environment
VITE_APP_ENV=development
VITE_APP_URL=http://localhost:5173
```

### 4. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
fitta/
├── docs/                    # Documentation
│   ├── ARCHITECTURE.md     # Technical architecture
│   ├── API_DESIGN.md       # API documentation
│   ├── FEATURES.md         # Feature specifications
│   ├── UI_UX_GUIDELINES.md # Design guidelines
│   ├── DEPLOYMENT.md       # Deployment guide
│   ├── SECURITY.md         # Security practices
│   └── ROADMAP.md          # Development roadmap
├── src/
│   ├── components/         # Reusable components
│   │   ├── common/        # Shared components
│   │   ├── auth/          # Authentication components
│   │   ├── dashboard/     # Dashboard components
│   │   ├── forms/         # Form components
│   │   └── maps/          # Map components
│   ├── pages/             # Page components
│   │   ├── Home/          # Landing page
│   │   ├── VehicleOwner/  # Vehicle owner pages
│   │   ├── GaragePartner/ # Garage partner pages
│   │   ├── Insurance/     # Insurance pages
│   │   └── Admin/         # Admin pages
│   ├── context/           # React Context providers
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   └── config/            # Configuration files
├── public/                # Static assets
├── tests/                 # Test files
└── scripts/               # Build/deployment scripts
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run unit tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## 📦 Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Run linting
npm run lint

# Format code
npm run format
```

## 🚀 Deployment

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Create a feature branch from `main`
2. Make your changes following our coding standards
3. Write/update tests as needed
4. Ensure all tests pass
5. Submit a pull request with a clear description

## 📈 Project Status

Current Phase: **MVP Development**

See [ROADMAP.md](docs/ROADMAP.md) for detailed development phases and timelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by real-world inefficiencies in Ghana's vehicle service industry
- Built with love for the African automotive ecosystem
- Special thanks to all contributors and early supporters

## 📞 Contact

- **Website**: [www.fitta.com](https://www.fitta.com)
- **Email**: info@fitta.com
- **WhatsApp**: +233 XX XXX XXXX
- **Twitter**: [@FittaAfrica](https://twitter.com/FittaAfrica)

---

<div align="center">
  Made with ❤️ in Ghana 🇬🇭 for Africa 🌍
</div>