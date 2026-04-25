import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-10 lg:px-20 text-slate-800">
      <div className="max-w-4xl mx-auto border border-slate-200 rounded-xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <div className="text-sm text-slate-600 mb-8 pb-6 border-b border-slate-100 space-y-1">
          <p><strong>Effective Date:</strong> 19 October 2025</p>
          <p><strong>Website:</strong> https://titservices.online</p>
          <p><strong>Business Name:</strong> TAPASYA IT SERVICES</p>
          <p><strong>Services:</strong> VPS Hosting, IT Support</p>
          <p><strong>DataCentre Location:</strong> USA (servers located in the United States, We are Reseller)</p>
        </div>

        <div className="space-y-10 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              TAPASYA IT SERVICES (“we”, “us”, “our”) is committed to protecting your privacy when you use the website 
              https://titservices.online (“the Site”) and our services (Linux VPS hosting, IT support). This Privacy Policy 
              explains how we collect, use, disclose and safeguard your information.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identifiers: name, email address, mobile number, billing address.</li>
              <li>Account information: username, password, login credentials (encrypted).</li>
              <li>Payment data: billing information, transaction details (processed via secure payment gateway; we do not store raw card details).</li>
              <li>Technical data: IP address, browser type, operating system, server logs, usage data (for the VPS service).</li>
              <li>Support data: support ticket contents, communication you initiate with us.</li>
              <li>Cookie and tracking data: if you visit the Site, cookies or similar technology may collect data about your browsing behaviour.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Purpose of Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provisioning and managing your Linux VPS hosting and IT support services.</li>
              <li>Billing, invoicing and payment processing.</li>
              <li>Communicating with you about service updates, support, account issues.</li>
              <li>Ensuring service security, preventing fraud, abuse and misuse.</li>
              <li>Improving our website and services, analytics.</li>
              <li>Compliance with legal obligations.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Storage & International Transfer</h2>
            <p className="mb-4">
              Because our hosting/data‑centre infrastructure is located in the United States, your personal and technical 
              data may be transferred to, stored and processed in the U.S. When we do so, we implement appropriate 
              safeguards to ensure your data remains protected in accordance with this Privacy Policy and applicable laws.
            </p>
            <p>By using our services, you consent to such transfer, storage and processing.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Disclosure of Data</h2>
            <p className="mb-3 font-medium text-slate-700">We do not sell or rent your personal data to third‑parties. We may disclose your information as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To third‑party service providers (payment processors, hosting infrastructure, support tools) strictly for service delivery.</li>
              <li>To data‑centre/hosting operators in the U.S. necessary for VPS hosting and operations.</li>
              <li>To law enforcement, regulators or as required by court order, statutory or regulatory obligation.</li>
              <li>In case of business transfer (merger, acquisition) – you will be notified accordingly.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
            <p className="mb-3 font-medium text-slate-700">Subject to applicable law, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data held by us.</li>
              <li>Request its correction or deletion.</li>
              <li>Object to processing or request restriction.</li>
              <li>Withdraw consent where processing is based solely on consent.</li>
            </ul>
            <p className="mt-4 italic">If you wish to exercise any of these rights, please contact us at: info@titservices.online.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Cookies & Tracking</h2>
            <p>We are not storing Site cookies and similar technologies to collect analytics.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Data Security</h2>
            <p>
              We implement industry standard technical and organisational measures (such as encryption, access controls, 
              secure networks) to protect your information from unauthorized access, use or disclosure. However, no 
              method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Retention</h2>
            <p>
              We retain your data for as long as your account remains active or as needed to fulfil service obligations, 
              legal obligations, resolve disputes or enforce our agreements.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on the Site with the 
              “Effective Date” updated. Your continued use of the Site after such changes constitutes acceptance of 
              the updated policy.
            </p>
          </section>

          {/* Section 11 (Contact) */}
          <section className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">11. Contact</h2>
            <div className="space-y-1 text-slate-700">
              <p><strong>Email:</strong> info@titservices.online</p>
              <p><strong>Phone:</strong> +91 9799116204</p>
              <p><strong>Address:</strong> Dausa, Rajasthan, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;