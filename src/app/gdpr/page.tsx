import React from 'react';

const GDPRCompliance = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-10 lg:px-20 text-slate-800">
      <div className="max-w-4xl mx-auto border border-slate-200 rounded-xl shadow-sm p-8 sm:p-12">
        <div className="bg-slate-900 -m-8 sm:-m-12 mb-10 px-8 py-12 text-white rounded-t-xl">
          <h1 className="text-3xl font-bold text-center">General Data Protection Regulation</h1>
        </div>
        
        <div className="space-y-10 leading-relaxed text-slate-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 mt-20">1. General Data Protection Regulation (GDPR)</h2>
            <p className="mb-4">
              The General Data Protection Regulation (GDPR) is a European Union regulation that came into effect on May 25, 2018. It strengthens data protection and privacy for individuals within the European Economic Area (EEA). GDPR applies to any organization that processes personal data of individuals located in the EEA, regardless of where the organization is based.
            </p>
            <p className="mb-4">
              Personal data includes, but is not limited to: name, address, identification numbers, location data, IP addresses, cookies, and sensitive data such as health, biometric, genetic, or ethnic information.
            </p>
            <p>
              At Tapasya IT Services, we are committed to protecting the privacy and security of all users, regardless of their location.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Data Controller and Processor</h2>
            <p className="mb-2">Under GDPR:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>A Data Controller determines how and why personal data is processed.</li>
              <li>A Data Processor processes data on behalf of the Controller.</li>
            </ul>
            <p className="mb-2">In the context of our services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Customers act as Data Controllers.</li>
              <li>Tapasya IT Services acts as a Data Processor when handling customer data.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Security and Protection</h2>
            <p className="mb-2">We implement appropriate technical and organizational measures to protect personal data, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Data encryption</li>
              <li>Access control mechanisms</li>
              <li>Secure infrastructure</li>
              <li>Regular monitoring and updates</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. International Data Transfers</h2>
            <p className="mb-2">Personal data may be transferred outside the EEA only when adequate safeguards are in place, such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>Compliance with applicable legal requirements</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Subject Rights</h2>
            <p className="mb-2">Users have the following rights under GDPR:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to access their data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Data Location</h2>
            <p>
              Customers may request data hosting within specific regions (such as the EU), subject to infrastructure availability.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Updates to Agreement</h2>
            <p>
              Customers can contact us to update agreements or request GDPR-related documentation.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Contact Information</h2>
            <p className="mb-4 italic">
              For any privacy-related queries:
            </p>
            <div className="space-y-1 text-slate-700">
              <p className="font-semibold text-slate-900">Tapasya IT Services</p>
              <p><strong>Email:</strong> info@titservices.online</p>
              <p><strong>Phone:</strong> +91 9799116204</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPRCompliance;