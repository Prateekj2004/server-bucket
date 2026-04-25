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
            <br /><br /><br />
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. General Data Protection Regulation (GDPR)</h2>
            <p>
              GDPR(General Data Protection Regulation) is a new European Data Protection legislation activated on May 25, 2018, and proposed to consolidate and strengthen data protection for all individuals and businesses belonging to the European Union. GDPR ensures protection of users&apos; data, including Name, Address, ID number, Location, Cookies, Biometric, Ethenic Data, racial, genetic, Health, Plus Data concerning IP address, etc. It also substitutes the European Union Data Protection Directive that is known as Directive 95/46/EC. It also secures processing data and ensures transparency to let users easily control their data. Even though the GDPR is applicable only for the citizens who belong to Europe. But we have decided to go beyond and make it possible for all our users despite their citizenship or location.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. When it comes to Customer Data, is Titservices a controller and a Processor?</h2>
            <p>
              Under the General Data Protection Regulation, a &quot;Controller&quot; regulates why and how European Citizens&apos; personal data is processed. Whereas a &quot;Processor&quot; ensures the processing of the Controller based personal data. TitServices has fine information of every customer&apos;s personal data via the hosting infrastructure. Also, the Titservices processes the customer&apos;s data under his approval and satisfaction. Therefore, we at Titservices are a processor of European Citizen data, and the customer is a controller.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. How TitServices treats customer data as part of a GDPR?</h2>
            <p>
              TitServices treats customer data with the highest level of confidentiality and encrypted security. As we put security at the top of our list, offering advanced and standard security is our priority.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. With the new GDPR, can an EU customer continue to host personal data outside of the EU/EEA?</h2>
            <p>
              Under the new General Data Protection Regulation, EU customers continue to host their personal data outside of the EU/EEA. But it can be done if the highest level of data protection is guaranteed.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Won’t I breach the data protection laws if TitServices transfers my personal data outside the EU/EEA?</h2>
            <p>
              The updated laws allow TitServices to process and transfer your personal data outside the EEA(European Economic Area) if you approved of this. In other cases, if personal data of European Citizens transferred to a non-jurisdiction considered by the European Commission intends to provide the highest level of personal data protection.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Can You Keep my data in the EU only?</h2>
            <p>
              Yes, we can. But you need to request the same to keep all your personal data in the European Union. For Example, if you do not belong to Europe but move your server to the EU, you will need to buy a new server in the European Union and manually move all your data.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Do you have other data centers within the EU where I can store my data?</h2>
            <p>
              No, we don&apos;t have another data center. But our TitServices Cloud Data Center is enough to accommodate your business requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. How do I update my current agreement with TitServices in light of GDPR?</h2>
            <p>
              You can raise a ticket and directly contact us for more information. We will give you the best possible solution.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">9. Contacting Our Site</h2>
            <p className="mb-4 italic">
              If you have any queries or any dilemma about our Privacy Policy, you have a choice to directly reach our customer executive or us.
            </p>
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

export default GDPRCompliance;