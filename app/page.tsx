import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Tricycall Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-muted-foreground mb-8">
              Welcome to Tricycall! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile and web applications.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">When you use Tricycall, we may collect the following types of information:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">a. Personal Information:</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Profile picture (if uploaded)</li>
                    <li>Payment details (for transactions, if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">b. Location Information:</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Real-time GPS location to match you with nearby drivers</li>
                    <li>Location history for trip records</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">c. Usage and Device Information:</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>IP address</li>
                    <li>Device type and operating system</li>
                    <li>App usage analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">d. Driver-Specific Information:</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Vehicle details</li>
                    <li>License and registration documents</li>
                    <li>Ratings and reviews</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>To provide and improve our ride-hailing services</li>
                <li>To match passengers with available drivers</li>
                <li>To process payments and transactions</li>
                <li>To enhance safety and security</li>
                <li>To send notifications related to trips and promotions</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Share Your Information</h2>
              <p className="text-muted-foreground mb-4">We do not sell your personal information. However, we may share your information in the following cases:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>With Drivers or Passengers: Your location and ride details are shared between riders and drivers.</li>
                <li>With Service Providers: Third-party services such as payment processors and analytics providers.</li>
                <li>With Authorities: When required by law or to protect the safety of users.</li>
                <li>With Business Partners: If Tricycall merges or is acquired by another company.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement security measures to protect your personal data. However, no method of data transmission is 100% secure. We recommend users take precautions to protect their accounts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Access, update, or delete your personal information</li>
                <li>Disable location tracking via device settings</li>
                <li>Opt-out of marketing notifications</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:tricycall.luminescence@gmail.com" className="text-primary hover:text-primary/80">
                  tricycall.luminescence@gmail.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your information for as long as necessary to provide our services and fulfill legal obligations. If you request deletion, we will remove your data unless required by law to retain it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Links and Services</h2>
              <p className="text-muted-foreground">
                Our app may contain links to third-party websites or services. We are not responsible for their privacy practices, and we encourage you to review their policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted within the app and on our website. Continued use of the service after updates means you accept the revised policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:tricycall.luminescence@gmail.com" className="text-primary hover:text-primary/80">
                  tricycall.luminescence@gmail.com
                </a>
              </p>
            </section>

            <p className="text-muted-foreground text-center mt-12">
              Thank you for using Tricycall!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 