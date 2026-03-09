"use client";
import { motion } from "framer-motion";
import { 
  Cpu, HardDrive, Network, ShieldCheck, CheckCircle2, 
  Server, Activity, Lock, Zap, ArrowRight, Settings
} from "lucide-react";
import Link from "next/link";

const dedicatedPlans = [
  { name: "SB-Metal 1", cpu: "Intel Xeon E-2276G (6 Cores)", ram: "32GB DDR4 ECC", disk: "2 x 480GB Enterprise SSD", port: "1 Gbps", price: "₹8,500" },
  { name: "SB-Metal 2", cpu: "Dual Intel Xeon Silver 4214", ram: "64GB DDR4 ECC", disk: "2 x 1TB NVMe Gen4", port: "1 Gbps", price: "₹14,999", popular: true },
  { name: "SB-Metal 3", cpu: "AMD EPYC™ 7402P (24 Cores)", ram: "128GB DDR4 ECC", disk: "2 x 1.92TB NVMe Gen4", port: "10 Gbps", price: "₹22,500" },
  { name: "SB-Metal 4", cpu: "Dual AMD EPYC™ 7502", ram: "256GB DDR4 ECC", disk: "4 x 1.92TB NVMe Gen4", port: "10 Gbps", price: "₹38,000" },
  { name: "SB-Metal GPU", cpu: "Intel Gold 6226R + 2x RTX 3090", ram: "256GB DDR4 ECC", disk: "4 x 3.84TB NVMe Gen4", port: "20 Gbps", price: "₹55,000" },
  { name: "SB-Metal Max", cpu: "Dual AMD EPYC™ 7763 (128 Cores)", ram: "1TB DDR4 ECC", disk: "8 x 3.84TB NVMe Gen4", port: "40 Gbps", price: "₹85,000" },
];

export default function DedicatedPage() {
  return (
    <div className="bg-white">
      {/* --- HERO --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <span className="text-blue-400 font-black uppercase tracking-widest text-xs bg-blue-900/50 border border-blue-500/30 px-5 py-2 rounded-full">100% Raw Performance</span>
          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight tracking-tighter">
            Bare Metal <span className="text-blue-500">Dedicated Servers</span>
          </h1>
          <p className="mt-8 text-xl text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto">
            No noisy neighbors. No virtualization overhead. Complete control over enterprise-grade hardware with dedicated 10Gbps+ uplinks.
          </p>
        </div>
      </section>

      {/* --- HARDWARE PRICING GRID --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900">Choose Your <span className="text-blue-600">Beast.</span></h2>
          <p className="text-slate-500 mt-4">All servers include free setup, full IPMI access, and 100Gbps DDoS protection.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dedicatedPlans.map((plan, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className={`p-10 rounded-[40px] border-2 ${plan.popular ? 'border-blue-600 bg-white shadow-2xl shadow-blue-100' : 'border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl'} transition-all flex flex-col`}>
              {plan.popular && <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase mb-6 inline-block w-max">Best For Virtualization</span>}
              <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
              <div className="text-4xl font-black text-slate-900 my-6">{plan.price}<span className="text-sm font-medium text-slate-400">/mo</span></div>
              
              <div className="space-y-5 mb-10 border-t border-slate-200 pt-8 flex-grow">
                <div className="flex gap-4"><Cpu className="text-blue-600 shrink-0 mt-0.5" size={20}/><div className="text-sm font-bold text-slate-700"><p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Processor</p>{plan.cpu}</div></div>
                <div className="flex gap-4"><Settings className="text-blue-600 shrink-0 mt-0.5" size={20}/><div className="text-sm font-bold text-slate-700"><p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Memory (RAM)</p>{plan.ram}</div></div>
                <div className="flex gap-4"><HardDrive className="text-blue-600 shrink-0 mt-0.5" size={20}/><div className="text-sm font-bold text-slate-700"><p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Primary Storage</p>{plan.disk} (HW RAID)</div></div>
                <div className="flex gap-4"><Network className="text-blue-600 shrink-0 mt-0.5" size={20}/><div className="text-sm font-bold text-slate-700"><p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Network Port</p>{plan.port} Unmetered</div></div>
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${plan.popular ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-slate-900 text-white hover:bg-blue-600'}`}>Customize & Order</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL SUPERIORITY --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Why Our <span className="text-blue-600">Bare Metal</span> is Different?</h2>
            <p className="text-lg text-slate-500 mt-4">We do not cut corners on hardware. Every Server Bucket dedicated instance is built for extreme workloads.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: <Activity />, title: "Enterprise HW RAID", desc: "Hardware RAID controllers with BBU cache for maximum I/O performance and zero data corruption." },
              { icon: <Lock />, title: "Out-of-Band IPMI/KVM", desc: "Full hardware control. Power on/off, reboot, and mount custom ISOs directly from your browser." },
              { icon: <Zap />, title: "Instant Provisioning", desc: "Standard configurations are racked, stacked, and automatically provisioned within 20 minutes." },
              { icon: <Network />, title: "Premium BGP Blend", desc: "Traffic routed through multiple Tier-1 providers including Level3, Telia, and Tata Communications." },
              { icon: <Server />, title: "No Shared Resources", desc: "100% of the CPU threads and RAM are yours. No hypervisor overhead." },
              { icon: <ShieldCheck />, title: "Advanced DDoS Mitigation", desc: "L3/L4/L7 inline filtering protects your server from massive volumetric attacks automatically." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="h-14 w-14 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl mb-6">{f.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}