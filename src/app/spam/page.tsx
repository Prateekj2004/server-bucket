import React from 'react';

const AntiSpamPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 sm:px-10 lg:px-20 text-slate-800">
      <div className="max-w-4xl mx-auto border border-slate-200 rounded-xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Anti-Spam Policy</h1>
        
        <div className="space-y-10 leading-relaxed">
          {/* Introduction Section */}
          <section className="text-slate-700">
            <p className="mb-4">
              This document outlines the Anti-Spam Policy of <strong>titservices.online</strong> (hereafter referred to as the “Company”) and applies to all individuals using the Company’s services (hereafter referred to as “Visitors”). The terminology used in this policy aligns with the website placement instructions, unless explicitly defined within this document.
            </p>
            <p className="mb-4">
              The Company maintains a strict anti-spam stance and prohibits all forms of spam during the usage of its services. This policy is implemented in accordance with the following directives:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>European Parliament Directive (8 June 2000) – Directive 2000/31/EC (E-commerce Directive)</li>
              <li>Directive 2002/58/EC – Privacy and Electronic Communications Directive</li>
              <li>Directive 95/46/EC – Protection of Personal Data</li>
              <li>Other applicable international and national legal frameworks</li>
            </ul>
          </section>

          {/* Section I */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">I. What Is Spam?</h2>
            <p>
              For the purposes of this policy, &quot;spam&quot; refers to any unsolicited or unexpected message sent via email or other electronic/telecommunication means, without the prior consent of the recipient. Sending or distributing such messages in bulk is strictly prohibited and considered a violation of this policy.
            </p>
          </section>

          {/* Section II */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">II. Customer’s Obligations</h2>
            <p className="mb-3 font-medium text-slate-700">During the use of the Company’s services, customers must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Not send unsolicited emails or messages to recipients who have not opted in.</li>
              <li>Not offer or promote any service that enables third parties to distribute spam.</li>
              <li>Implement technical safeguards to prevent unauthorized use of services for spam distribution.</li>
              <li>Use the opt-in principle for all electronic communications and provide clear options for users to opt out.</li>
              <li>Not collect, store, share, or publish data (such as email addresses) that may be used for sending spam.</li>
            </ul>
          </section>

          {/* Section III */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">III. Implementation of the Spam Policy</h2>
            <p>
              Any spam-related activity will be considered a serious breach of the Company&apos;s usage instructions. If a customer violates these obligations, the Company reserves the right to suspend, limit, or terminate the service without notice.
            </p>
          </section>

          {/* Section IV */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">IV. Third Party Complaints</h2>
            <p>
              If a third party files a complaint against a customer for spam or a breach of this policy, the Company may request full cooperation from the customer. During the investigation, services may be temporarily limited or suspended until the issue is resolved.
            </p>
          </section>

          {/* Section V */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">V. Help Fight Spam</h2>
            <p>
              If you receive spam from a customer of titservices.online, please report it immediately by contacting our support team or sending an email. Kindly include the full content of the spam message when reporting.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h2>
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

export default AntiSpamPolicy;