import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CannyMinds Technology Solutions',
  description: 'Privacy Policy for CannyMinds Technology Solutions. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.cannymindstech.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-200">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                CannyMinds Technology Solutions (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name when you contact us or request a demo</li>
                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages</li>
                <li><strong>Business Information:</strong> Company details, industry, and requirements shared during consultations</li>
                <li><strong>Communication Data:</strong> Records of your correspondence with us</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We use the collected information for:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Sending relevant product updates and marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your personal information. Our systems are designed to comply with ISO 27001 standards, and we use encryption, access controls, and regular security audits to safeguard your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">5. Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your data only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and safety</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. We use analytics tools to understand website usage patterns and improve our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">7. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability where applicable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law or for legitimate business purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700"><strong>CannyMinds Technology Solutions</strong></p>
                <p className="text-gray-700">Data Protection Officer</p>
                <p className="text-gray-700">Email: privacy@cannymindstech.com</p>
                <p className="text-gray-700">Phone: +91-44-4000-0000</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
