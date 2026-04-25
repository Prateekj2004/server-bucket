import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-10 lg:px-20 text-slate-800">
      <div className="max-w-4xl mx-auto border border-slate-200 rounded-xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms & Conditions</h1>
        <div className="text-sm text-slate-600 mb-8 pb-6 border-b border-slate-100 space-y-1">
          <p><strong>Effective Date:</strong> 19 October 2025</p>
          <p><strong>Business Name:</strong> TAPASYA IT SERVICES</p>
          <p><strong>Udyam Reg. No.:</strong> UDYAM-RJ-12-0049072</p>
          <p><strong>Jurisdiction:</strong> India</p>
        </div>

        <div className="space-y-10 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By using our services, you agree to these Terms and Conditions. If you do not agree, you must not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Services Provided</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Linux Virtual Private Server (VPS) Hosting</li>
              <li>Remote IT Support and Consultation</li>
            </ul>
            <p className="mt-3 text-slate-600 italic">Our servers are hosted in data centers located in the USA.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Eligibility</h2>
            <p>
              You must be at least 18 years old or have legal authority to enter into contracts in your jurisdiction.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Account Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of your credentials</li>
              <li>Activities that occur under your account</li>
              <li>Ensuring your use complies with laws (including cyber and data laws)</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Acceptable Use Policy</h2>
            <p className="mb-3 font-medium text-slate-700">You agree not to use our services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Host, distribute, or transmit any illegal content</li>
              <li>Send spam or run mail spam bots</li>
              <li>Host malware, phishing, or DDoS tools</li>
              <li>Violate intellectual property rights</li>
              <li>Interfere with network integrity or security</li>
            </ul>
            <p className="mt-4 font-semibold text-red-600 italic">
              Violation may lead to immediate account suspension or termination without refund.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Payment & Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All services are prepaid unless otherwise agreed.</li>
              <li>Accepted payment methods include UPI, Razorpay, Netbanking, Cards.</li>
              <li>Non-payment may lead to suspension or data loss.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We offer a 30-day money-back guarantee for new Linux VPS customers (if no TOS violation).</li>
              <li>No refunds for renewal payments, early cancellations, or accounts terminated due to abuse.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Data Access & Backup</h2>
            <p className="mb-3">You are solely responsible for maintaining backups of your data.</p>
            <p>We are not liable for data loss due to hardware failure, abuse, or termination.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Liability Disclaimer</h2>
            <p className="mb-3 font-medium text-slate-700">We shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect or consequential damages</li>
              <li>Service interruptions beyond our control</li>
              <li>Losses due to user misconfiguration</li>
            </ul>
            <p className="mt-4 font-bold text-slate-900">Our liability is limited to the amount paid in the last 30 days.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless TAPASYA IT SERVICES from all claims, liabilities, and expenses arising from your use of our services or violation of these Terms.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Termination</h2>
            <p className="mb-3 font-medium text-slate-700">We reserve the right to suspend or terminate services if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Terms are violated</li>
              <li>Illegal or abusive activities are detected</li>
              <li>Non-payment occurs</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Governing Law & Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India, and disputes shall be subject to the jurisdiction of courts in <strong>Dausa, Rajasthan, India</strong>.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">13. Modifications</h2>
            <p>
              We reserve the right to amend these Terms. Continued use after any changes constitutes acceptance of those changes.
            </p>
          </section>

          {/* Section 14 */}
          <section className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">14. Contact Us</h2>
            <div className="space-y-1 text-slate-700">
              <p><strong>Email:</strong> info@titservices.online</p>
              <p><strong>Address:</strong> Dausa, Rajasthan, India</p>
              <p><strong>Phone:</strong> +91 9799116204</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;