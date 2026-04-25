"use client";
import { MapPin, Globe2, Server, Zap, Activity } from "lucide-react";

const datacenters = [
  { region: "Asia Pacific", status: "Optimal", locations: [
    { city: "Mumbai, India", desc: "Tier-III+, Direct Peering" }
  ]},
  { region: "Americas", status: "Optimal", locations: [
    { city: "Kansas City, USA", desc: "Central US Backbone Hub" }
  ]}
];

export default function LocationsPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Globe2 className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Global <span className="text-blue-600">Network.</span></h1>
          <p className="mt-6 text-xl text-slate-500 font-medium leading-relaxed">
            Deploy your infrastructure closer to your users. Server Bucket operates 25+ edge locations connected via a multi-terabit private backbone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {datacenters.map((dc, i) => (
            <div key={i} className="bg-slate-50 rounded-[40px] p-10 border border-slate-100">
              <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-6">
                <h3 className="text-2xl font-black text-slate-900">{dc.region}</h3>
                <span className="flex items-center gap-1.5 text-xs font-black text-green-600 bg-green-100 px-3 py-1 rounded-full uppercase">
                  <Activity size={12} className="animate-pulse" /> {dc.status}
                </span>
              </div>
              <div className="space-y-6">
                {dc.locations.map((loc, j) => (
                  <div key={j} className="flex gap-4">
                    <MapPin className="text-blue-600 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{loc.city}</h4>
                      <p className="text-sm text-slate-500 mt-1">{loc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}