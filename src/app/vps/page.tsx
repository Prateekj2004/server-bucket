"use client";
import { motion } from "framer-motion";
import { 
  Cpu, HardDrive, Network, Zap, Terminal, 
  Monitor, Settings, RefreshCw, BarChart, CheckCircle2
} from "lucide-react";

const vpsPlans = [
  { name: "SB-SSD 1", cpu: "1 Core", ram: "2GB", ssd: "40GB NVMe", bw: "1TB", price: "₹499" },
  { name: "SB-SSD 2", cpu: "2 Cores", ram: "4GB", ssd: "80GB NVMe", bw: "3TB", price: "₹899", popular: true },
  { name: "SB-SSD 3", cpu: "4 Cores", ram: "8GB", ssd: "160GB NVMe", bw: "5TB", price: "₹1,699" },
  { name: "SB-SSD 4", cpu: "8 Cores", ram: "16GB", ssd: "320GB NVMe", bw: "10TB", price: "₹3,299" },
  { name: "SB-SSD 5", cpu: "16 Cores", ram: "32GB", ssd: "640GB NVMe", bw: "20TB", price: "₹6,499" },
  { name: "SB-SSD 6", cpu: "32 Cores", ram: "64GB", ssd: "1.2TB NVMe", bw: "50TB", price: "₹12,999" },
];

export default function VPSPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs bg-blue-100 px-4 py-1.5 rounded-full">High Density Compute</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-8 leading-tight tracking-tighter">
            Next-Gen <span className="text-blue-600">NVMe VPS</span>
          </h1>
          <p className="mt-6 text-xl text-slate-500 leading-relaxed font-medium">
            Unleash the full potential of KVM virtualization. Optimized for high-traffic websites, databases, and heavy enterprise applications.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vpsPlans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[40px] border-2 ${plan.popular ? 'border-blue-600 bg-blue-50/20 shadow-2xl shadow-blue-100' : 'border-slate-100 bg-white shadow-sm hover:shadow-xl'} transition-all`}
            >
              {plan.popular && <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase mb-6 inline-block">Most Recommended</span>}
              <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
              <div className="text-5xl font-black text-slate-900 my-8">{plan.price}<span className="text-sm font-medium text-slate-400">/mo</span></div>
              
              <div className="space-y-5 mb-10 border-t border-slate-100 pt-8">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-500 flex items-center gap-2"><Cpu size={18} className="text-blue-600"/> vCPU</span>
                  <span className="text-slate-900 text-lg">{plan.cpu}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-500 flex items-center gap-2"><Network size={18} className="text-blue-600"/> DDR4 RAM</span>
                  <span className="text-slate-900 text-lg">{plan.ram}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-500 flex items-center gap-2"><HardDrive size={18} className="text-blue-600"/> NVMe Storage</span>
                  <span className="text-slate-900 text-lg">{plan.ssd}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-500 flex items-center gap-2"><Zap size={18} className="text-blue-600"/> Bandwidth</span>
                  <span className="text-slate-900 text-lg">{plan.bw}</span>
                </div>
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-lg shadow-xl transition-all ${plan.popular ? 'bg-blue-600 text-white hover:bg-slate-900' : 'bg-slate-900 text-white hover:bg-blue-600'}`}>
                Deploy Instance
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features & Terminal Area */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">Advanced Server <br /><span className="text-blue-600">Control Panel</span></h2>
            <p className="text-slate-500 mb-10 text-lg">Manage your infrastructure effortlessly with our custom-built dashboard or via our robust developer API.</p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <Monitor />, title: "Remote Console", desc: "Full VNC/SSH access directly from your browser." },
                { icon: <RefreshCw />, title: "Instant OS Reload", desc: "Change OS (Ubuntu, CentOS, Debian) with one click." },
                { icon: <BarChart />, title: "Usage Analytics", desc: "Monitor bandwidth, CPU, and RAM in real-time." },
                { icon: <Settings />, title: "API Control", desc: "Full infrastructure control via our RESTful API." },
              ].map((f, i) => (
                <div key={i} className="space-y-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                  <div className="h-12 w-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl">{f.icon}</div>
                  <h4 className="font-bold text-slate-900">{f.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-10 bg-[#0f172a] rounded-[50px] shadow-2xl relative">
             <div className="absolute top-4 left-6 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="mt-8 font-mono text-sm leading-loose">
                <p className="text-blue-400">$ serverbucket login --api-key=****************</p>
                <p className="text-slate-300">Authenticated as: admin@serverbucket.com</p>
                <br />
                <p className="text-white">$ serverbucket deploy --plan=SB-SSD-2 --os=ubuntu-24.04</p>
                <p className="text-slate-400">Provisioning node... [████████████████████] 100%</p>
                <p className="text-green-400 flex items-center gap-2"><CheckCircle2 size={16}/> SUCCESS: Instance "sb-prod-01" deployed in 52s.</p>
                <br />
                <p className="text-white">$ serverbucket status</p>
                <p className="text-blue-300">ID: 9841 | IP: 103.22.XX.XX | STATUS: ACTIVE</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}