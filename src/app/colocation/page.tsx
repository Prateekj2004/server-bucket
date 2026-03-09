"use client";
import { motion } from "framer-motion";
import { Server, Zap, Shield, Battery, Check, MapPin, Wind, Video } from "lucide-react";

export default function ColocationPage() {
  return (
    <div className="bg-white">
      <section className="py-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
            Tier-III <span className="text-blue-500">Colocation</span>
          </h1>
          <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            House your proprietary hardware in our ultra-secure, N+1 redundant data centers. From 1U single servers to private multi-rack cages.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Facility <span className="text-blue-600">Specifications</span></h2>
            <p className="text-slate-500 mb-12 text-lg">We provide the power, cooling, and remote hands while you retain total ownership and control of your servers.</p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: <Zap />, title: "Redundant Power", desc: "Dual active power feeds (A/B) to every rack with UPS and Diesel Generator backups." },
                { icon: <Wind />, title: "Precision Cooling", desc: "N+1 CRAC units maintaining strict 22°C (±2°C) temperature and humidity levels." },
                { icon: <Video />, title: "7-Layer Security", desc: "Biometric access, 24/7 CCTV, mantraps, and armed security personnel on-site." },
                { icon: <Battery />, title: "High Density", desc: "Support for up to 32 Amps per rack for high-performance GPU and blade deployments." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <div className="text-blue-600 mb-4 bg-white w-max p-3 rounded-xl shadow-sm">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-10 md:p-14 rounded-[50px] shadow-2xl border border-blue-50">
              <h3 className="text-3xl font-black text-slate-900 mb-8">Request Custom Quote</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2 uppercase tracking-wider">Company Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600/20" placeholder="e.g. Acme Corp" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2 uppercase tracking-wider">Rack Space</label>
                    <select className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600/20">
                      <option>1U - 5U (Per U)</option>
                      <option>Quarter Rack (10U)</option>
                      <option>Half Rack (21U)</option>
                      <option>Full Rack (42U)</option>
                      <option>Private Cage</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2 uppercase tracking-wider">Power Req.</label>
                    <select className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600/20">
                      <option>Standard (10 Amps)</option>
                      <option>Medium (16 Amps)</option>
                      <option>High (32 Amps)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-2 uppercase tracking-wider">Hardware Details</label>
                  <textarea rows={4} className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-600/20 resize-none" placeholder="Describe your servers, switches, and network requirements..." />
                </div>
                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-blue-200">
                  Submit Requirement
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}