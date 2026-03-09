export default function Comparison() {
  const features = [
    { title: "Virtualization Type", starter: "KVM", pro: "KVM", ultra: "Bare Metal" },
    { title: "DDoS Protection", starter: "10 Gbps", pro: "100 Gbps", ultra: "Unlimited" },
    { title: "Dedicated IP", starter: "1 Included", pro: "2 Included", ultra: "5 Included" },
    { title: "Uptime SLA", starter: "99.9%", pro: "99.99%", ultra: "100%" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 overflow-x-auto">
        <h2 className="text-3xl font-black text-center mb-12">Technical Specifications</h2>
        <table className="w-full text-left bg-white rounded-3xl overflow-hidden shadow-xl">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-6">Feature</th>
              <th className="p-6">Starter</th>
              <th className="p-6">Professional</th>
              <th className="p-6">Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {features.map((f, i) => (
              <tr key={i} className="hover:bg-blue-50 transition-colors">
                <td className="p-6 font-bold text-slate-900">{f.title}</td>
                <td className="p-6">{f.starter}</td>
                <td className="p-6 text-blue-600 font-semibold">{f.pro}</td>
                <td className="p-6">{f.ultra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}