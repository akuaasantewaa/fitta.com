import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';

const PrivacyPage = () => {
  const navigate = useNavigate();
  const lastUpdated = 'June 20, 2025';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, such as:

      **Personal Information:**
      • Name, email address, and phone number
      • Vehicle information (make, model, year, VIN)
      • Location data for service delivery
      • Payment and billing information
      • Government-issued ID for verification (garage partners)

      **Automatically Collected Information:**
      • Device information (IP address, browser type, operating system)
      • Usage data (pages visited, features used, time spent)
      • Location data (with your permission)
      • Cookies and similar tracking technologies`
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to:

      • Provide, maintain, and improve our services
      • Process transactions and send related information
      • Connect you with appropriate garage partners
      • Send technical notices and support messages
      • Respond to comments, questions, and requests
      • Monitor and analyze trends and usage
      • Detect and prevent fraudulent activities
      • Comply with legal obligations
      • Send marketing communications (with consent)`
    },
    {
      title: '3. Information Sharing',
      content: `We share your information in the following circumstances:

      **With Service Providers:**
      • Garage partners to fulfill service requests
      • Payment processors for transaction handling
      • Insurance companies for claims processing
      • Analytics providers for service improvement

      **For Legal Reasons:**
      • To comply with laws and regulations
      • To respond to legal requests and court orders
      • To protect rights, property, and safety
      • To investigate fraud or security issues

      We do not sell or rent your personal information to third parties.`
    },
    {
      title: '4. Data Security',
      content: `We implement appropriate security measures to protect your information:

      • Encryption of data in transit and at rest
      • Regular security assessments and updates
      • Access controls and authentication
      • Employee training on data protection
      • Incident response procedures

      However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`
    },
    {
      title: '5. Your Rights and Choices',
      content: `You have the following rights regarding your information:

      **Access and Portability:** Request a copy of your personal data
      **Correction:** Update or correct inaccurate information
      **Deletion:** Request deletion of your personal data
      **Restriction:** Limit how we use your information
      **Objection:** Opt-out of certain uses of your information
      **Consent Withdrawal:** Revoke previously given consent

      To exercise these rights, contact us at privacy@fitta.com.`
    },
    {
      title: '6. Cookies and Tracking',
      content: `We use cookies and similar technologies to:

      • Remember your preferences and settings
      • Analyze site traffic and usage patterns
      • Provide targeted advertisements
      • Enable social media features

      You can control cookies through your browser settings. Disabling cookies may limit functionality.`
    },
    {
      title: '7. Children\'s Privacy',
      content: `FITTA is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we learn we have collected information from a child under 18, we will delete it promptly.

      Parents who believe their child has provided us with personal information should contact us immediately.`
    },
    {
      title: '8. International Data Transfers',
      content: `Your information may be transferred and processed in countries other than your country of residence. These countries may have different data protection laws.

      We ensure appropriate safeguards are in place for international transfers, including:
      • Standard contractual clauses
      • Data processing agreements
      • Adequate security measures`
    },
    {
      title: '9. Data Retention',
      content: `We retain your information for as long as necessary to:

      • Provide our services
      • Comply with legal obligations
      • Resolve disputes
      • Enforce our agreements

      When information is no longer needed, we securely delete or anonymize it.`
    },
    {
      title: '10. Third-Party Links',
      content: `Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies before providing any information.`
    },
    {
      title: '11. Changes to Privacy Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of material changes by:

      • Posting the updated policy on our platform
      • Sending email notifications to registered users
      • Displaying a prominent notice on our website

      Your continued use constitutes acceptance of the updated policy.`
    },
    {
      title: '12. Contact Us',
      content: `If you have questions about this Privacy Policy or our privacy practices, contact us:

      **Data Protection Officer**
      Email: privacy@fitta.com
      Phone: +233 XXX XXXX
      Address: FITTA Privacy Team, Accra, Ghana

      You also have the right to lodge a complaint with your local data protection authority.`
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-black mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-secondary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6 mb-8">
              <p className="text-primary-900 dark:text-primary-100 font-medium mb-0">
                At FITTA, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, share, and protect your personal information when you use our platform.
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
                Your Privacy Matters
              </h3>
              <p className="text-secondary-600 dark:text-neutral-300 mb-4">
                We are committed to protecting your privacy and ensuring transparency in our data practices. 
                If you have any concerns or questions about how we handle your information, please don't hesitate to contact us.
              </p>
              <Button
                variant="primary"
                onClick={() => window.location.href = 'mailto:privacy@fitta.com'}
              >
                Contact Privacy Team
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-secondary-700">
              <p className="text-sm text-secondary-600 dark:text-neutral-400 text-center">
                This Privacy Policy is part of our Terms of Service. By using FITTA, you agree to the collection 
                and use of information in accordance with this policy.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="ghost"
              onClick={() => navigate('/terms')}
            >
              Terms of Service
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate('/cookies')}
            >
              Cookie Policy
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;