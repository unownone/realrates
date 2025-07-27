import { Container, Header, Footer } from '../components/layout';
import { FadeInSection, PageTransition } from '../components/animations';
import { Shield, Eye, Lock, BarChart3, Users, Database } from 'lucide-react';

export function PrivacyPolicyPage() {
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
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                          Privacy Policy
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
                          Your privacy is important to us. Learn how we protect your data and ensure transparency for the True EMI Calculator by Spenddy.
                        </p>
              </div>
            </FadeInSection>

            <div className="max-w-4xl mx-auto space-y-6">
              <FadeInSection delay={0.2}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Data Collection
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                                <p>
                              RealRates by Spenddy is committed to protecting your privacy. We want to be transparent about what data we collect and how we use it.
                            </p>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        ✅ What We DON'T Collect:
                      </h3>
                      <ul className="space-y-2 text-green-700 dark:text-green-300">
                        <li>• <strong>No financial data</strong> - Your loan amounts, interest rates, and calculations are never stored</li>
                        <li>• <strong>No personal information</strong> - We don't collect names, emails, or contact details</li>
                        <li>• <strong>No bank account details</strong> - Your banking information stays private</li>
                        <li>• <strong>No loan applications</strong> - We don't process or store loan requests</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Usage Analytics
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      We collect anonymous usage metrics to improve the platform and user experience:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Page views and navigation patterns</strong> - To understand how users interact with our calculator</li>
                      <li>• <strong>Feature usage statistics</strong> - To identify which features are most helpful</li>
                      <li>• <strong>Performance metrics</strong> - To ensure the platform runs smoothly</li>
                      <li>• <strong>Error reports</strong> - To fix bugs and improve reliability</li>
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                      <p className="text-blue-800 dark:text-blue-200">
                        <strong>Anonymous identification</strong> may be used to track user sessions and improve our services. This data cannot be used to identify individual users.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Data Protection
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      We implement industry-standard security measures to protect any data we collect:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Encryption</strong> - All data is encrypted in transit and at rest</li>
                      <li>• <strong>Secure servers</strong> - Hosted on secure, reliable infrastructure</li>
                      <li>• <strong>Access controls</strong> - Limited access to collected data</li>
                      <li>• <strong>Regular audits</strong> - We regularly review our security practices</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.5}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Data Sharing
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      We do not sell, trade, or share your data with third parties:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>No data sales</strong> - We never sell your information</li>
                      <li>• <strong>No third-party sharing</strong> - Except as required by law</li>
                      <li>• <strong>Service providers</strong> - We may use trusted analytics services (Google Analytics, etc.)</li>
                      <li>• <strong>Legal requirements</strong> - We may disclose data if required by law</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.6}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="h-6 w-6 text-accent-500" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Data Retention
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      We retain data only as long as necessary:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Usage analytics</strong> - Retained for up to 2 years for platform improvement</li>
                      <li>• <strong>Error logs</strong> - Retained for up to 90 days for debugging</li>
                      <li>• <strong>Session data</strong> - Automatically deleted when you close your browser</li>
                      <li>• <strong>No permanent storage</strong> - Your calculations are never permanently stored</li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.7}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Your Rights
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      You have the right to:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>Access</strong> - Request information about data we collect</li>
                      <li>• <strong>Delete</strong> - Request deletion of your data</li>
                      <li>• <strong>Opt-out</strong> - Disable analytics tracking</li>
                      <li>• <strong>Contact us</strong> - Reach out with privacy concerns</li>
                    </ul>
                    <div className="bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-700 rounded-lg p-4">
                      <p className="text-accent-800 dark:text-accent-200">
                        <strong>Contact:</strong> For privacy-related questions, please open an issue on our{' '}
                        <a 
                          href="https://github.com/unownone/realrates" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="underline hover:text-accent-600 dark:hover:text-accent-300"
                        >
                          GitHub repository
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.8}>
                <div className="bg-white dark:bg-dark-900 rounded-lg shadow-sm border border-gray-200 dark:border-dark-700 p-4 sm:p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Updates to This Policy
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      We may update this privacy policy from time to time. We will notify users of any material changes by:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Posting the updated policy on this page</li>
                      <li>• Updating the "Last updated" date below</li>
                      <li>• Announcing changes on our GitHub repository</li>
                    </ul>
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