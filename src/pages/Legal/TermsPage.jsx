import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';

const TermsPage = () => {
  const navigate = useNavigate();
  const lastUpdated = 'June 20, 2025';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using the FITTA platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. Your continued use of the platform constitutes acceptance of any updates or changes to these terms.`
    },
    {
      title: '2. Service Description',
      content: `FITTA provides a digital platform connecting vehicle owners with certified automotive repair garages and insurance companies across Africa. Our services include:
      
      • Emergency roadside assistance coordination
      • Garage partner matching and booking
      • Digital damage assessment and estimates
      • Insurance claim facilitation
      • Payment processing
      • Service history tracking
      
      We act as an intermediary and are not responsible for the quality of work performed by independent garage partners.`
    },
    {
      title: '3. User Accounts',
      content: `To access certain features, you must create an account. You agree to:
      
      • Provide accurate, current, and complete information
      • Maintain the security of your account credentials
      • Notify us immediately of any unauthorized access
      • Accept responsibility for all activities under your account
      • Be at least 18 years old or have parental consent
      
      We reserve the right to suspend or terminate accounts that violate these terms.`
    },
    {
      title: '4. Garage Partner Terms',
      content: `Garage partners using the FITTA platform agree to:
      
      • Maintain all required licenses and certifications
      • Provide accurate service descriptions and pricing
      • Complete accepted jobs in a timely manner
      • Maintain minimum quality standards
      • Honor quoted prices unless mutually agreed otherwise
      • Maintain appropriate insurance coverage
      • Comply with all applicable laws and regulations`
    },
    {
      title: '5. Booking and Cancellations',
      content: `Service bookings are subject to garage availability. Users may cancel bookings according to the following policy:
      
      • Free cancellation up to 24 hours before scheduled service
      • 50% cancellation fee within 24 hours of service
      • No refund for no-shows or cancellations after service begins
      
      Garages may cancel bookings only for valid reasons (emergency, capacity issues) and must notify users immediately.`
    },
    {
      title: '6. Payments and Fees',
      content: `FITTA facilitates payments between users and garage partners. Payment terms include:
      
      • All prices are displayed in local currency
      • Payment is due upon service completion
      • We charge a service fee on transactions
      • Refunds are processed according to our refund policy
      • Users are responsible for any applicable taxes
      • Disputed charges must be reported within 30 days`
    },
    {
      title: '7. Insurance Claims',
      content: `When using FITTA for insurance claims:
      
      • You authorize us to share relevant information with your insurance provider
      • Claim approval is solely at the discretion of your insurance company
      • We are not responsible for claim denials or delays
      • You must provide accurate damage information
      • False claims may result in account termination and legal action`
    },
    {
      title: '8. Liability Limitations',
      content: `To the maximum extent permitted by law:
      
      • FITTA is not liable for work performed by garage partners
      • We do not guarantee specific outcomes or results
      • Our liability is limited to the amount paid for our services
      • We are not responsible for indirect or consequential damages
      • Force majeure events excuse performance obligations`
    },
    {
      title: '9. User Conduct',
      content: `Users agree not to:
      
      • Provide false or misleading information
      • Harass, abuse, or threaten others
      • Use the platform for illegal purposes
      • Attempt to circumvent the platform for direct dealings
      • Reverse engineer or hack our systems
      • Violate intellectual property rights
      • Create multiple accounts to abuse promotions`
    },
    {
      title: '10. Privacy and Data',
      content: `Your use of FITTA is also governed by our Privacy Policy. By using our services, you consent to:
      
      • Collection and processing of your personal data
      • Sharing information with service providers as necessary
      • Receiving service-related communications
      • Anonymous data usage for platform improvement`
    },
    {
      title: '11. Dispute Resolution',
      content: `Any disputes arising from these terms shall be:
      
      • First attempted to be resolved through good faith negotiation
      • Subject to binding arbitration if negotiation fails
      • Governed by the laws of Ghana
      • Brought within one year of the dispute arising
      • Resolved individually (no class actions)`
    },
    {
      title: '12. Changes to Terms',
      content: `FITTA reserves the right to modify these terms at any time. We will notify users of material changes via:
      
      • Email notification to registered users
      • Prominent notice on the platform
      • Update to the "Last Updated" date
      
      Continued use after changes constitutes acceptance of modified terms.`
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-xl opacity-90">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-secondary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6 mb-8">
              <p className="text-primary-900 dark:text-primary-100 font-medium mb-0">
                Please read these Terms of Service carefully before using the FITTA platform. 
                These terms constitute a legally binding agreement between you and FITTA.
              </p>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
                  {section.title}
                </h2>
                <div className="text-secondary-600 dark:text-neutral-300 whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}

            <div className="mt-12 p-6 bg-neutral-100 dark:bg-secondary-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-secondary-600 dark:text-neutral-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-secondary-700 dark:text-neutral-200">
                <p>Email: legal@fitta.com</p>
                <p>Phone: +233 XXX XXXX</p>
                <p>Address: Accra, Ghana</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-secondary-700">
              <p className="text-sm text-secondary-600 dark:text-neutral-400 text-center">
                By using FITTA, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              onClick={() => navigate('/contact')}
            >
              Contact Support
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/privacy')}
            >
              Privacy Policy
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;