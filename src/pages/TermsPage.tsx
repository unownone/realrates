import { Container, Header, Footer } from '../components/layout';
import { FadeInSection, PageTransition } from '../components/animations';
import { FileText, AlertTriangle, CheckCircle, Info, Shield, Users, Database } from 'lucide-react';

export function TermsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-black">
        <Header />
        
        <main className="py-4 sm:py-6 lg:py-8">
          <Container>
            <FadeInSection delay={0.1}>
              <div className="mb-6 sm:mb-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-accent-500 shadow-lg">
                    <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                          Terms of Service
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
                          Please read these terms carefully before using the True EMI Calculator by Spenddy.
                        </p>
              </div>
            </FadeInSection>

            <div className="max-w-4xl mx-auto space-y-6">
              <FadeInSection delay={0.2}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Info className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      1. Acceptance of Terms
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      By accessing and using RealRates by Spenddy ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                      <p className="text-blue-800 dark:text-blue-200">
                        <strong>Effective Date:</strong> These terms are effective as of {new Date().toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })} and will remain in effect until modified.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Info className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      2. Service Description
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      RealRates by Spenddy is the True EMI Calculator - a free online EMI (Equated Monthly Installment) calculator that provides users with:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Loan EMI calculations and breakdowns</li>
                      <li>• Processing fee calculations</li>
                      <li>• GST and tax breakdowns</li>
                      <li>• Bank comparison features</li>
                      <li>• Educational content about loan costs</li>
                    </ul>
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
                      <p className="text-amber-800 dark:text-amber-200">
                        <strong>⚠️ Important:</strong> RealRates by Spenddy is for informational and educational purposes only. We do not provide financial advice, process loan applications, or facilitate lending services.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      3. Acceptable Use
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>You may use RealRates by Spenddy for:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Personal financial planning and loan calculations</li>
                      <li>• Educational and research purposes</li>
                      <li>• Comparing different loan scenarios</li>
                      <li>• Understanding loan cost breakdowns</li>
                      <li>• Learning about EMI calculations and fees</li>
                    </ul>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                      <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                        ❌ Prohibited Uses:
                      </h3>
                      <ul className="space-y-1 text-red-700 dark:text-red-300 text-sm">
                        <li>• Commercial use without permission</li>
                        <li>• Attempting to reverse engineer the service</li>
                        <li>• Using automated tools to access the service</li>
                        <li>• Attempting to gain unauthorized access</li>
                        <li>• Using the service for illegal activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.5}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      4. Disclaimers and Limitations
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
                      <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                        ⚠️ Important Disclaimers:
                      </h3>
                      <ul className="space-y-2 text-amber-700 dark:text-amber-300">
                        <li>• <strong>Not Financial Advice:</strong> Calculations are for informational purposes only and do not constitute financial advice</li>
                        <li>• <strong>Accuracy:</strong> While we strive for accuracy, actual loan terms, rates, and fees may vary significantly</li>
                        <li>• <strong>Bank Policies:</strong> Processing fees, interest rates, and terms are subject to change by banks</li>
                        <li>• <strong>No Guarantees:</strong> We do not guarantee loan approval, specific terms, or calculation accuracy</li>
                        <li>• <strong>Market Conditions:</strong> Rates and fees may change based on market conditions and bank policies</li>
                        <li>• <strong>Regulatory Changes:</strong> Tax rates, GST, and other charges may change due to regulatory updates</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        Limitation of Liability:
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        RealRates by Spenddy shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of the service, including but not limited to financial losses, incorrect calculations, or decisions made based on our calculations.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.6}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      5. Intellectual Property
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      The Service and its original content, features, and functionality are owned by RealRates by Spenddy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• All calculations, algorithms, and methodologies are proprietary</li>
                      <li>• The user interface and design are protected by copyright</li>
                                              <li>• RealRates by Spenddy name and logo are trademarks</li>
                      <li>• Open source components are used under their respective licenses</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.7}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      6. User Responsibilities
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>As a user of RealRates by Spenddy, you agree to:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• Use the service responsibly and for lawful purposes only</li>
                      <li>• Verify all calculations independently before making financial decisions</li>
                      <li>• Consult with qualified financial advisors for important financial decisions</li>
                      <li>• Not rely solely on our calculations for loan applications</li>
                      <li>• Report any errors or issues you encounter</li>
                      <li>• Respect our intellectual property rights</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.8}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      7. Service Availability
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      We strive to maintain high availability of the Service, but we do not guarantee:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Uninterrupted or error-free operation</li>
                      <li>• Availability at all times</li>
                      <li>• Compatibility with all devices or browsers</li>
                      <li>• Preservation of any data or calculations</li>
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                      <p className="text-blue-800 dark:text-blue-200">
                        <strong>Note:</strong> The Service may be temporarily unavailable for maintenance, updates, or technical issues. We will attempt to minimize such disruptions.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.9}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      8. Modifications to Terms
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the Service after changes constitutes acceptance of the new terms.
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                      <p className="text-green-800 dark:text-green-200">
                        <strong>Notification:</strong> Significant changes will be announced on our GitHub repository and may be highlighted on the website.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={1.0}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    9. Contact Information
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      For questions, concerns, or feedback about these terms, please contact us through our{' '}
                      <a 
                        href="https://github.com/unownone/realrates" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent-600 dark:text-accent-400 underline hover:text-accent-700 dark:hover:text-accent-300"
                      >
                        GitHub repository
                      </a>
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-dark-600 pt-4">
                      <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </Container>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
} 