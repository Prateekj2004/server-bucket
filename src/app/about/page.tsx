"use client";
import { Server, Activity, Users, ShieldCheck, Zap, Globe2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* --- HERO --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            Architecting the <br /> <span className="text-blue-500">Digital Backbone.</span>
          </h1>
          <p className="mt-8 text-xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            Server Bucket was engineered from the ground up to solve one problem: providing uncompromised, raw compute power at scale for the developers of tomorrow.
          </p>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="container mx-auto px-6 -mt-10 relative z-20 mb-24">
        <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          {[
            { num: "25+", label: "Datacenters" },
            { num: "100G", label: "Network Edge" },
            { num: "99.99%", label: "Uptime SLA" },
            { num: "24/7", label: "NOC Support" },
          ].map((s, i) => (
             <div key={i} className="px-4">
                <p className="text-4xl font-black text-blue-600 mb-2">{s.num}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</p>
             </div>
          ))}
        </div>
      </section>

      {/* --- INFRASTRUCTURE VALUES --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl font-black text-slate-900">Our <span className="text-blue-600">Infrastructure</span> DNA</h2>
            <p className="text-lg text-slate-500 mt-4">We do not lease cheap hardware. Every node is custom-built using enterprise-grade components.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Zap />, title: "NVMe Only", desc: "We've completely phased out SATA SSDs. Our entire fleet runs on Gen4/Gen5 NVMe storage for maximum IOPS." },
              { icon: <ShieldCheck />, title: "Automated Security", desc: "Inline hardware DDoS mitigation scrubs malicious traffic before it ever reaches your server port." },
              { icon: <Activity />, title: "Redundant Core", desc: "Multiple 100Gbps fiber rings connect our datacenters, ensuring zero packet loss during route failures." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
                <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">{v.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}