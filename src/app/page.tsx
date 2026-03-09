"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Zap, ShieldCheck, Globe2, Cpu, HardDrive, Layers, 
  Search, Check, Server, Terminal, Database, ChevronDown, Activity, 
  Smartphone, Cloud, CheckCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative font-sans bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest mb-8">
                  <Activity size={14} className="animate-pulse" /> Tier-IV Certified Infrastructure
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter">
                  Infinite <br /> <span className="text-blue-600">Performance.</span>
                </h1>
                <p className="mt-10 text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Server Bucket delivers enterprise-grade hosting solutions with 99.99% uptime. 
                  Deploy Linux, Windows, or Custom ISOs on NVMe Gen5 hardware in 60 seconds.
                </p>
                <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-5">
                  <Link href="/vps" className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-slate-900 transition-all shadow-2xl shadow-blue-200 group">
                    Start Your Server <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link href="/contact" className="bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-3xl font-black text-lg hover:border-blue-600 transition-all">
                    Talk to Experts
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 hidden lg:block">
              <div className="relative p-12 bg-white rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-50 group hover:rotate-2 transition-transform duration-1000">
                <div className="flex gap-4 mb-10">
                  <div className="h-4 w-4 rounded-full bg-red-400" />
                  <div className="h-4 w-4 rounded-full bg-yellow-400" />
                  <div className="h-4 w-4 rounded-full bg-green-400" />
                </div>
                <div className="space-y-8">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                     <div className="flex justify-between mb-2">
                        <p className="text-xs font-black text-blue-600">CLUSTER LOAD</p>
                        <p className="text-xs font-black text-green-500">OPTIMAL</p>
                     </div>
                    <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div animate={{ width: ["10%", "85%", "40%"] }} transition={{ duration: 6, repeat: Infinity }} className="h-full bg-blue-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-600 rounded-3xl text-white">
                      <Cpu size={32} className="mb-4" />
                      <p className="text-2xl font-black">AMD EPYC</p>
                      <p className="text-[10px] opacity-70 mt-1 uppercase">Gen 4 Processors</p>
                    </div>
                    <div className="p-6 bg-slate-900 rounded-3xl text-white">
                      <HardDrive size={32} className="mb-4" />
                      <p className="text-2xl font-black">NVMe v2</p>
                      <p className="text-[10px] opacity-70 mt-1 uppercase">10Gbps Read/Write</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DOMAIN SEARCH --- */}
      <section className="container mx-auto px-6 -mt-16 relative z-30">
        <div className="bg-slate-900 p-10 md:p-16 rounded-[50px] shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-black text-white">Find Your Domain</h2>
              <p className="text-slate-400 mt-2">Claim your digital identity today.</p>
            </div>
            <div className="lg:w-2/3 w-full relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 h-6 w-6" />
              <input type="text" placeholder="yourbrandname.com" className="w-full p-6 pl-16 rounded-3xl border-none outline-none text-xl font-bold bg-white/5 text-white focus:bg-white focus:text-slate-900 transition-all placeholder:text-slate-600" />
              <button className="absolute right-3 top-3 bottom-3 bg-blue-600 text-white px-10 md:px-12 rounded-2xl font-black hover:bg-white hover:text-blue-600 transition-all">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT MEGA GRID --- */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-slate-900">Scale Your <span className="text-blue-600">Enterprise</span></h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">From startups to Fortune 500s, we provide the backbone for the world's most demanding applications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Linux VPS", price: "₹499", icon: <Zap />, tags: ["KVM", "SSD", "Root"], link: "/vps" },
              { title: "Windows VPS", price: "₹899", icon: <Smartphone />, tags: ["RDP", "Plesk", "License"], link: "/vps" },
              { title: "Bare Metal", price: "₹7,500", icon: <Cpu />, tags: ["Raw", "IPMI", "10Gbps"], link: "/dedicated" },
              { title: "Managed Cloud", price: "₹1,200", icon: <Cloud />, tags: ["Autoscale", "24/7", "WAF"], link: "/contact" },
              { title: "Colocation", price: "Custom", icon: <HardDrive />, tags: ["Rack", "Power", "N+1"], link: "/colocation" },
              { title: "HA Cluster", price: "₹15k", icon: <Layers />, tags: ["Cluster", "Failover", "DB"], link: "/cluster" },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">{item.icon}</div>
                <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                <div className="my-6">
                  <span className="text-4xl font-black text-slate-900">{item.price}</span>
                  <span className="text-slate-400 font-bold ml-1 text-sm">/month</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                  {item.tags.map(t => <span key={t} className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-tighter">{t}</span>)}
                </div>
                <Link href={item.link} className="block w-full text-center py-4 bg-slate-50 text-slate-900 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-colors">Configure</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL AUTHORITY --- */}
      <section className="py-32 container mx-auto px-6 border-t border-slate-100">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black text-slate-900 mb-10 leading-tight">Built by Engineers, <br /> For <span className="text-blue-600">Engineers.</span></h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4 p-8 bg-blue-50 rounded-4xl">
                <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm"><Terminal size={24} /></div>
                <h4 className="font-extrabold text-xl">Full API Access</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Automate your infrastructure with our RESTful API. Deploy, reboot, and scale using code.</p>
              </div>
              <div className="space-y-4 p-8 bg-slate-50 rounded-4xl">
                <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center text-slate-900 shadow-sm"><Database size={24} /></div>
                <h4 className="font-extrabold text-xl">Object Storage</h4>
                <p className="text-sm text-slate-500 leading-relaxed">S3-compatible storage for your backups, media assets, and large data clusters.</p>
              </div>
            </div>
            <div className="mt-12 p-8 border-2 border-slate-100 rounded-4xl">
               <h4 className="font-black text-slate-900 mb-6">Standard with every bucket:</h4>
               <div className="grid grid-cols-2 gap-4">
                  {["Instant Setup", "100Gbps DDoS", "Root Access", "Weekly Backups", "Custom ISOs", "24/7/365 Support"].map(t => (
                    <div key={t} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                      <CheckCircle className="text-green-500 h-4 w-4" /> {t}
                    </div>
                  ))}
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 rounded-[50px] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5"><Server size={300} /></div>
               <h3 className="text-3xl font-black mb-10 relative z-10">Technical Specifications</h3>
               <div className="space-y-8 relative z-10">
                  {[
                    { label: "Virtualization", val: "KVM (Kernel-based VM)" },
                    { label: "Hardware", val: "AMD EPYC™ / Intel® Xeon®" },
                    { label: "Networking", val: "10 Gbps Redundant Uplinks" },
                    { label: "Storage", val: "Samsung NVMe Gen5" },
                    { label: "Uptime SLA", val: "99.99% Guaranteed" },
                    { label: "Datacenters", val: "25+ Global Edge Nodes" },
                  ].map(s => (
                    <div key={s.label} className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-slate-400 font-bold text-sm uppercase tracking-wider">{s.label}</span>
                      <span className="text-blue-400 font-black text-sm text-right max-w-[200px]">{s.val}</span>
                    </div>
                  ))}
               </div>
               <button className="mt-12 w-full py-5 bg-blue-600 rounded-2xl font-black hover:bg-white hover:text-blue-600 transition-all">Check Network Map</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MEGA FAQ --- */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-20">Frequently Asked <span className="text-blue-600">Questions</span></h2>
          <div className="space-y-6">
            {[
              { q: "What is the difference between Shared and VPS hosting?", a: "Shared hosting is like an apartment, while VPS is like a standalone house. You get dedicated resources (CPU/RAM) that aren't shared with anyone else." },
              { q: "How long does it take to deploy a server?", a: "Our automated provisioning system launches your server in approximately 55-60 seconds after payment confirmation." },
              { q: "Can I upgrade my plan later?", a: "Yes! You can scale your RAM, CPU, and Storage instantly from our dashboard without any downtime." },
              { q: "Do you offer managed support?", a: "Yes, we offer both Unmanaged (for experts) and Managed (where we handle everything) hosting options." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 group cursor-pointer hover:border-blue-600 transition-colors">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-slate-900 text-lg">{f.q}</h4>
                  <ChevronDown className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed hidden group-hover:block">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}