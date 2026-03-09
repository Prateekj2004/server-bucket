export default function PrivacyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-black text-slate-900 mb-8 text-center">Privacy <span className="text-blue-600">Policy</span></h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="font-bold text-slate-900">Last Updated: March 2026</p>
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Data Collection</h2>
            <p>At Server Bucket, we collect minimal data required to provide high-performance hosting services. This includes your name, email, and server configuration preferences.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. Usage of Information</h2>
            <p>Your data is used strictly for server provisioning, billing, and technical support. We do not sell your data to third-party advertisers.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. Security</h2>
            <p>We use enterprise-grade encryption to protect your account and payment information. Our data centers follow Tier-III security protocols.</p>
          </section>
        </div>
      </div>
    </div>
  );
}